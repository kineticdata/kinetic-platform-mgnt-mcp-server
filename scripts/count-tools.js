/**
 * Starts the built stdio server and counts the tools it actually advertises
 * over JSON-RPC (tools/list), rather than trusting a static estimate.
 *
 * Usage:
 *   node scripts/count-tools.js                       # current environment
 *   KINETIC_MCP_MODE=full node scripts/count-tools.js
 *   node scripts/count-tools.js --list                # also print every tool name
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entry = path.join(projectRoot, "dist", "index.js");
const showList = process.argv.includes("--list");

const child = spawn(process.execPath, [entry, "--stdio"], {
  stdio: ["pipe", "pipe", "pipe"],
  env: process.env,
});

let stdout = "";
let stderr = "";
child.stdout.on("data", (chunk) => {
  stdout += chunk.toString();
});
child.stderr.on("data", (chunk) => {
  stderr += chunk.toString();
});

function send(message) {
  child.stdin.write(JSON.stringify(message) + "\n");
}

send({
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "count-tools", version: "0.0.0" },
  },
});

let listed = false;
const timer = setTimeout(() => finish("timed out waiting for tools/list"), 30000);

const poll = setInterval(() => {
  for (const line of stdout.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("{")) continue;
    let message;
    try {
      message = JSON.parse(trimmed);
    } catch {
      continue;
    }
    if (message.id === 1 && !listed) {
      listed = true;
      send({ jsonrpc: "2.0", method: "notifications/initialized", params: {} });
      send({ jsonrpc: "2.0", id: 2, method: "tools/list", params: {} });
    }
    if (message.id === 2 && message.result?.tools) {
      const tools = message.result.tools;
      console.log(`stderr from server:\n${stderr.trim()}`);
      console.log(`TOOL_COUNT=${tools.length}`);
      if (showList) {
        for (const tool of tools.map((t) => t.name).sort()) console.log(`  ${tool}`);
      }
      finish(null);
      return;
    }
  }
}, 50);

function finish(error) {
  clearInterval(poll);
  clearTimeout(timer);
  child.kill();
  if (error) {
    console.error(`count-tools failed: ${error}`);
    console.error(`server stderr:\n${stderr}`);
    process.exit(1);
  }
  process.exit(0);
}
