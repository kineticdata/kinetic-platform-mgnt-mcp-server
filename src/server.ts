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
import { registerSlimTools, registerGetApiSpec, registerExecuteApi } from "./tools/slim.js";
import { registerConsolidatedTools } from "./tools/consolidated.js";
import { invokeDefaultOperation } from "./tools/invocation.js";
import {
  countRegisteredTools,
  logStartupSummary,
  resolveServerMode,
  resolveToolNameMode,
} from "./tools/tool-config.js";
import type { ServerMode } from "./tools/tool-config.js";

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

// Startup summary is logged once per process; HTTP mode builds one server per session.
let startupLogged = false;

export function createKineticMcpServer(context: ServerContext): McpServer {
  const server = new McpServer({
    name: "kinetic-platform",
    version: "0.1.0",
  });

  const mode = resolveServerMode();

  registerConnectTool(server, context);

  const invoke = (sessionId: string, op: OasOperation, input: any) =>
    invokeDefaultOperation(
      { getClient: (sid, api) => getOrCreateClient(context, sid, api) },
      sessionId,
      op,
      input,
    );

  if (mode === "slim") {
    // ~12 high-level tools. get_api_spec + execute_api together cover every
    // operation the per-operation tools used to expose.
    registerSlimTools(server, {
      operations: context.operations,
      specs: context.specs,
      getClient: (sessionId, api) => getOrCreateClient(context, sessionId, api),
      invokeDefaultOperation: invoke,
    });
  } else if (mode === "consolidated") {
    // One tool per resource family, dispatched by an `action` parameter.
    registerConsolidatedTools(server, {
      operations: context.operations,
      invokeDefaultOperation: invoke,
    });
    // Plus the two slim tools the consolidated surface depends on: the family
    // descriptions point at `get_api_spec` for full request-body schemas, and
    // `execute_api` reaches anything the families do not cover. Same
    // registrations slim mode uses - there is no second implementation.
    const slimRuntime = {
      operations: context.operations,
      specs: context.specs,
      getClient: (sessionId: string, api: KineticApi) => getOrCreateClient(context, sessionId, api),
      invokeDefaultOperation: invoke,
    };
    registerGetApiSpec(server, slimRuntime);
    registerExecuteApi(server, slimRuntime);
  } else {
    // contexts / full: explicit per-operation tool stubs generated from the OAS specs.
    registerAllContextTools(server, {
      operations: context.operations,
      invokeDefaultOperation: invoke,
    });
  }

  registerBackgroundJobTools(server, {
    getClient: (sessionId) => getOrCreateClient(context, sessionId, "core"),
  });

  if (!startupLogged) {
    startupLogged = true;
    logStartupSummary(mode, countRegisteredTools(server), describeCoverage(mode, context));
  }

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
      throw new Error(missingCredentialsMessage());
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

/**
 * Credentials are read from the environment. They are deliberately NOT expected
 * in MCP client config: partners put them in a gitignored .env and load it with
 * `node --env-file=/absolute/path/to/.env dist/index.js --stdio`.
 */
export function missingCredentialsMessage(): string {
  const present = [
    process.env.KINETIC_SERVER_URL ? "KINETIC_SERVER_URL" : null,
    process.env.KINETIC_USERNAME ? "KINETIC_USERNAME" : null,
    process.env.KINETIC_PASSWORD ? "KINETIC_PASSWORD" : null,
  ].filter(Boolean);

  const missing = ["KINETIC_SERVER_URL", "KINETIC_USERNAME", "KINETIC_PASSWORD"].filter(
    (name) => !process.env[name],
  );

  return [
    `Not connected: missing ${missing.join(", ")}.`,
    present.length > 0 ? `(Found: ${present.join(", ")}.)` : "(No Kinetic credentials found in the environment.)",
    "Likely causes:",
    '  1. The --env-file path is relative. It resolves against the MCP client\'s working directory, not the server directory, so it silently loads nothing. Use an ABSOLUTE path.',
    "  2. The .env file does not exist at that path, or lacks these keys. Copy .env.example to .env and fill it in.",
    "  3. Node is older than 20.6.0, which does not support --env-file.",
    "Alternatively call the `connect` tool with serverUrl, username and password.",
  ].join("\n");
}

/** How much of the API the active surface reaches, for the startup log. */
function describeCoverage(mode: ServerMode, context: ServerContext): string {
  const total = context.operations.length;
  switch (mode) {
    case "consolidated": {
      const contexts = process.env.KINETIC_MCP_CONTEXTS?.trim();
      // With an allowlist the surface covers only those contexts, not all operations.
      return contexts ? `contexts=${contexts}` : `all ${total} operations`;
    }
    case "slim":
      return `all ${total} operations via execute_api`;
    default: {
      const contexts = process.env.KINETIC_MCP_CONTEXTS?.trim();
      const scope = contexts ? `contexts=${contexts}` : `${total} operations`;
      return `${scope}, names=${resolveToolNameMode()}`;
    }
  }
}
