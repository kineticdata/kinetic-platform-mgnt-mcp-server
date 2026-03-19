import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import { extractOperations, loadOasSpec, loadOasSpecIfExists } from "./client/oas.js";
import { KineticApiClient, obtainOAuthToken } from "./client/kinetic-client.js";
import { registerAllContextTools } from "./tools/contexts/register-all.js";
import { registerBackgroundJobTools } from "./tools/background-jobs.js";
import { invokeDefaultOperation } from "./tools/invocation.js";
export function createServerContext() {
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
export function createKineticMcpServer(context) {
    const server = new McpServer({
        name: "kinetic-platform",
        version: "0.1.0",
    });
    registerConnectTool(server, context);
    // Register explicit per-context tool stubs generated from OAS specs.
    registerAllContextTools(server, {
        operations: context.operations,
        invokeDefaultOperation: (sessionId, op, input) => invokeDefaultOperation({ getClient: (sid, api) => getOrCreateClient(context, sid, api) }, sessionId, op, input),
    });
    registerBackgroundJobTools(server, {
        getClient: (sessionId) => getOrCreateClient(context, sessionId, "core"),
    });
    return server;
}
function registerConnectTool(server, context) {
    server.tool("connect", "Connect to a Kinetic Platform space using Core API credentials. Overrides any existing session client.", {
        serverUrl: z
            .string()
            .describe('Base URL of the Kinetic space (e.g. "https://myspace.kinops.io")'),
        username: z.string().describe("Username for authentication"),
        password: z.string().describe("Password for authentication"),
        agentSlug: z
            .string()
            .optional()
            .describe("Optional agent slug (retained in session config for compatibility)"),
    }, async ({ serverUrl, username, password, agentSlug }, extra) => {
        const sessionId = extra?.sessionId ?? "stdio";
        const config = {
            serverUrl,
            username,
            password,
            agentSlug: agentSlug ?? "system",
        };
        const session = {
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
                        type: "text",
                        text: `Connected to ${serverUrl}\nAuthenticated as: ${JSON.stringify(me, null, 2)}`,
                    },
                ],
            };
        }
        catch (error) {
            context.sessions.delete(sessionId);
            return {
                content: [
                    {
                        type: "text",
                        text: `Failed to connect: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    });
}
async function getOrCreateClient(context, sessionId, api = "core") {
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
        }
        else {
            return existing;
        }
    }
    const baseUrl = buildBaseUrl(context.specs, api, session.config.serverUrl);
    let client;
    if (api === "integrator") {
        // Integrator API requires OAuth 2.0 bearer token
        const { token, expiresAt } = await obtainOAuthToken(session.config.serverUrl, session.config.username, session.config.password);
        session.oauthToken = { token, expiresAt };
        client = KineticApiClient.withBearerToken(baseUrl, token);
    }
    else {
        client = KineticApiClient.withBasicAuth(baseUrl, session.config.username, session.config.password);
    }
    session.clients.set(api, client);
    return client;
}
function buildBaseUrl(specs, api, serverUrl) {
    const defaults = {
        core: "{serverUrl}/app/api/v1",
        integrator: "{serverUrl}/app/integrator",
    };
    const spec = specs[api];
    const template = spec?.servers?.[0]?.url ?? defaults[api];
    return template.replaceAll("{serverUrl}", serverUrl);
}
