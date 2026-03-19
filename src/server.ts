import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import type { KineticApi, OasOperation, OasSpec } from "./client/oas.js";
import { extractOperations, loadOasSpec, loadOasSpecIfExists } from "./client/oas.js";
import { KineticApiClient, obtainOAuthToken } from "./client/kinetic-client.js";
import type { KineticSessionConfig } from "./client/kinetic-client.js";
import { registerAllContextTools } from "./tools/contexts/register-all.js";
import { registerBackgroundJobTools } from "./tools/background-jobs.js";
import { invokeDefaultOperation } from "./tools/invocation.js";

export type SessionId = string;

export type OAuthTokenCache = {
  token: string;
  expiresAt: number;
};

export type KineticSession = {
  config: KineticSessionConfig;
  clients: Map<KineticApi, KineticApiClient>;
  oauthToken?: OAuthTokenCache;
};

export type ServerContext = {
  sessions: Map<SessionId, KineticSession>;
  specs: Record<KineticApi, OasSpec | null>;
  operations: OasOperation[];
};

export function createServerContext(): ServerContext {
  const oasDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "oas");
  const coreSpec = loadOasSpec(oasDir, "core.json");
  const integratorSpec = loadOasSpecIfExists(oasDir, "integrator.json");

  const operations = [
    ...extractOperations(coreSpec, "core"),
    ...(integratorSpec ? extractOperations(integratorSpec, "integrator") : []),
  ];

  return {
    sessions: new Map(),
    specs: { core: coreSpec, integrator: integratorSpec },
    operations,
  };
}

export function createKineticMcpServer(context: ServerContext): McpServer {
  const server = new McpServer({
    name: "kinetic-platform",
    version: "0.1.0",
  });

  registerConnectTool(server, context);
  // Register explicit per-context tool stubs generated from OAS specs.
  registerAllContextTools(server, {
    operations: context.operations,
    invokeDefaultOperation: (sessionId, op, input) =>
      invokeDefaultOperation({ getClient: (sid, api) => getOrCreateClient(context, sid, api) }, sessionId, op, input),
  });

  registerBackgroundJobTools(server, {
    getClient: (sessionId) => getOrCreateClient(context, sessionId, "core"),
  });

  return server;
}

function registerConnectTool(server: McpServer, context: ServerContext) {
  server.tool(
    "connect",
    "Connect to a Kinetic Platform space using Core API credentials. Overrides any existing session client.",
    {
      serverUrl: z
        .string()
        .describe('Base URL of the Kinetic space (e.g. "https://myspace.kinops.io")'),
      username: z.string().describe("Username for authentication"),
      password: z.string().describe("Password for authentication"),
      agentSlug: z
        .string()
        .optional()
        .describe("Optional agent slug (retained in session config for compatibility)"),
    },
    async ({ serverUrl, username, password, agentSlug }, extra) => {
      const sessionId = extra?.sessionId ?? "stdio";
      const config: KineticSessionConfig = {
        serverUrl,
        username,
        password,
        agentSlug: agentSlug ?? "system",
      };
      const session: KineticSession = {
        config,
        clients: new Map(),
      };
      context.sessions.set(sessionId, session);

      try {
        const client = await getOrCreateClient(context, sessionId, "core");
        const me = await client.request("GET", "/me");
        return {
          content: [
            {
              type: "text" as const,
              text: `Connected to ${serverUrl}\nAuthenticated as: ${JSON.stringify(me, null, 2)}`,
            },
          ],
        };
      } catch (error: any) {
        context.sessions.delete(sessionId);
        return {
          content: [
            {
              type: "text" as const,
              text: `Failed to connect: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    }
  );
}

async function getOrCreateClient(context: ServerContext, sessionId: SessionId, api: KineticApi = "core"): Promise<KineticApiClient> {
  let session = context.sessions.get(sessionId);
  if (!session) {
    const serverUrl = process.env.KINETIC_SERVER_URL;
    const username = process.env.KINETIC_USERNAME;
    const password = process.env.KINETIC_PASSWORD;
    const agentSlug = process.env.KINETIC_AGENT_SLUG ?? "system";

    if (!serverUrl || !username || !password) {
      throw new Error("Not connected. Call connect or set KINETIC_SERVER_URL/KINETIC_USERNAME/KINETIC_PASSWORD for the space.");
    }

    session = {
      config: { serverUrl, username, password, agentSlug },
      clients: new Map(),
    };
    context.sessions.set(sessionId, session);
  }

  // Check for a cached client that is still valid
  const existing = session.clients.get(api);
  if (existing) {
    // For integrator, check if the OAuth token has expired
    if (api === "integrator" && session.oauthToken && Date.now() >= session.oauthToken.expiresAt) {
      session.clients.delete(api);
    } else {
      return existing;
    }
  }

  const baseUrl = buildBaseUrl(context.specs, api, session.config.serverUrl);
  let client: KineticApiClient;

  if (api === "integrator") {
    // Integrator API requires OAuth 2.0 bearer token
    const { token, expiresAt } = await obtainOAuthToken(
      session.config.serverUrl,
      session.config.username,
      session.config.password,
    );
    session.oauthToken = { token, expiresAt };
    client = KineticApiClient.withBearerToken(baseUrl, token);
  } else {
    client = KineticApiClient.withBasicAuth(baseUrl, session.config.username, session.config.password);
  }

  session.clients.set(api, client);
  return client;
}

function buildBaseUrl(specs: Record<KineticApi, OasSpec | null>, api: KineticApi, serverUrl: string): string {
  const defaults: Record<KineticApi, string> = {
    core: "{serverUrl}/app/api/v1",
    integrator: "{serverUrl}/app/integrator",
  };

  const spec = specs[api];
  const template = spec?.servers?.[0]?.url ?? defaults[api];
  return template.replaceAll("{serverUrl}", serverUrl);
}
