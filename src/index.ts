#!/usr/bin/env node

import { randomUUID } from "node:crypto";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import { InMemoryEventStore } from "@modelcontextprotocol/sdk/examples/shared/inMemoryEventStore.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import { createKineticMcpServer, createServerContext } from "./server.js";

if (process.env.KINETIC_ALLOW_SELF_SIGNED === "true" || process.env.KINETIC_ALLOW_SELF_SIGNED === "1") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

/**
 * Credentials are optional for tool REGISTRATION - a client can always connect
 * and list tools. They are only needed when a tool actually calls the API. We
 * still warn loudly at startup, because the common failure is a relative
 * --env-file path that silently loads nothing.
 *
 * All output goes to stderr; stdout is the stdio JSON-RPC channel.
 */
function warnIfCredentialsMissing(): void {
  const missing = ["KINETIC_SERVER_URL", "KINETIC_USERNAME", "KINETIC_PASSWORD"].filter(
    (name) => !process.env[name],
  );
  if (missing.length === 0) return;

  const usedEnvFile = process.execArgv.some((arg) => arg.startsWith("--env-file"));
  console.error(
    `kinetic-platform-mcp: WARNING - missing ${missing.join(", ")}. Tools will list, but API calls will fail until credentials are provided.`,
  );
  if (usedEnvFile) {
    const envFileArg = process.execArgv.find((arg) => arg.startsWith("--env-file")) ?? "";
    const envFilePath = envFileArg.includes("=") ? envFileArg.split("=").slice(1).join("=") : "";
    if (envFilePath && !envFilePath.startsWith("/")) {
      console.error(
        `kinetic-platform-mcp:   --env-file="${envFilePath}" is a RELATIVE path. It resolves against the MCP client's working directory, not the server directory. Use an absolute path.`,
      );
    } else {
      console.error(
        `kinetic-platform-mcp:   --env-file="${envFilePath}" was passed but these keys were not found in it. Check the file exists and contains them.`,
      );
    }
  } else {
    console.error(
      "kinetic-platform-mcp:   Pass credentials with: node --env-file=/absolute/path/to/.env dist/index.js --stdio  (Node >= 20.6.0)",
    );
    console.error("kinetic-platform-mcp:   Or call the `connect` tool with serverUrl, username and password.");
  }
}

warnIfCredentialsMissing();

const args = new Set(process.argv.slice(2));
const runStdio = args.has("--stdio") || args.has("--both") || args.size === 0;
const runHttp = args.has("--http") || args.has("--both");

const context = createServerContext();

async function startStdio() {
  const server = createKineticMcpServer(context);
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Kinetic Platform MCP Server running on stdio");
}

async function startHttp() {
  const httpUser = process.env.MCP_HTTP_USER;
  const httpPass = process.env.MCP_HTTP_PASS;
  if (!httpUser || !httpPass) {
    throw new Error("MCP_HTTP_USER and MCP_HTTP_PASS must be set for HTTP/SSE mode.");
  }

  const host = process.env.MCP_HTTP_HOST ?? "127.0.0.1";
  const port = Number(process.env.MCP_HTTP_PORT ?? "3000");

  const app = createMcpExpressApp({ host });

  app.use((req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Basic ")) {
      res.setHeader("WWW-Authenticate", "Basic realm=\"MCP\"");
      res.status(401).send("Authentication required");
      return;
    }
    const decoded = Buffer.from(auth.slice("Basic ".length), "base64").toString("utf8");
    const [user, pass] = decoded.split(":");
    if (user !== httpUser || pass !== httpPass) {
      res.setHeader("WWW-Authenticate", "Basic realm=\"MCP\"");
      res.status(401).send("Invalid credentials");
      return;
    }
    next();
  });

  const transports: Record<string, StreamableHTTPServerTransport | SSEServerTransport> = {};

  app.all("/mcp", async (req, res) => {
    try {
      const sessionId = req.headers["mcp-session-id"] as string | undefined;
      let transport: StreamableHTTPServerTransport | undefined;

      if (sessionId && transports[sessionId] instanceof StreamableHTTPServerTransport) {
        transport = transports[sessionId] as StreamableHTTPServerTransport;
      } else if (!sessionId && req.method === "POST" && isInitializeRequest(req.body)) {
        const eventStore = new InMemoryEventStore();
        transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => randomUUID(),
          eventStore,
          onsessioninitialized: (sid) => {
            transports[sid] = transport!;
          },
        });
        transport.onclose = () => {
          const sid = transport?.sessionId;
          if (sid && transports[sid]) {
            delete transports[sid];
          }
        };
        const server = createKineticMcpServer(context);
        await server.connect(transport);
      } else {
        res.status(400).json({
          jsonrpc: "2.0",
          error: { code: -32000, message: "Bad Request: No valid session ID provided" },
          id: null,
        });
        return;
      }

      await transport.handleRequest(req, res, req.body);
    } catch (error: any) {
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: { code: -32603, message: error.message ?? "Internal server error" },
          id: null,
        });
      }
    }
  });

  app.get("/sse", async (req, res) => {
    const transport = new SSEServerTransport("/messages", res);
    transports[transport.sessionId] = transport;
    res.on("close", () => {
      delete transports[transport.sessionId];
    });
    const server = createKineticMcpServer(context);
    await server.connect(transport);
  });

  app.post("/messages", async (req, res) => {
    const sessionId = req.query.sessionId as string | undefined;
    const transport = sessionId ? transports[sessionId] : undefined;
    if (!transport || !(transport instanceof SSEServerTransport)) {
      res.status(400).send("No transport found for sessionId");
      return;
    }
    await transport.handlePostMessage(req, res, req.body);
  });

  app.listen(port, host, (error?: any) => {
    if (error) {
      console.error("Failed to start server:", error);
      process.exit(1);
    }
    console.error(`Kinetic Platform MCP Server listening on http://${host}:${port}`);
  });
}

async function main() {
  const tasks: Array<Promise<void>> = [];
  if (runStdio) tasks.push(startStdio());
  if (runHttp) tasks.push(startHttp());
  await Promise.all(tasks);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
