import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import path from "node:path";
import { z } from "zod";
import { extractOperations, loadOasSpec } from "./client/oas.js";
import { KineticApiClient } from "./client/kinetic-client.js";
import { registerAllContextTools } from "./tools/contexts/register-all.js";
import { invokeDefaultOperation } from "./tools/invocation.js";
export function createServerContext() {
    const oasDir = process.env.KINETIC_OAS_DIR ?? path.resolve(process.cwd(), "oas");
    const spec = loadOasSpec(oasDir);
    return {
        sessions: new Map(),
        spec,
        operations: extractOperations(spec),
    };
}
export function createKineticMcpServer(context) {
    const server = new McpServer({
        name: "kinetic-platform",
        version: "0.1.0",
    });
    registerConnectTool(server, context);
    // Register explicit per-context tool stubs generated from oas/core.json.
    registerAllContextTools(server, {
        operations: context.operations,
        invokeDefaultOperation: (sessionId, op, input) => invokeDefaultOperation({ getClient: (sid) => getClient(context, sid) }, sessionId, op, input),
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
            const me = await getClient(context, sessionId).request("GET", "/me");
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
function getClient(context, sessionId) {
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
    const existing = session.clients.get("core");
    if (existing)
        return existing;
    const baseUrl = buildCoreBaseUrl(context.spec, session.config.serverUrl);
    const client = new KineticApiClient(baseUrl, session.config.username, session.config.password);
    session.clients.set("core", client);
    return client;
}
function buildCoreBaseUrl(spec, serverUrl) {
    const template = spec.servers?.[0]?.url ?? "{serverUrl}/app/api/v1";
    return template.replaceAll("{serverUrl}", serverUrl);
}
