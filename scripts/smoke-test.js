#!/usr/bin/env node
// Live read-only smoke test for the Kinetic Platform MCP server.
//
//   node --env-file=.env scripts/smoke-test.js
//   KINETIC_MCP_MODE=slim node --env-file=.env scripts/smoke-test.js
//
// Performs a real MCP stdio handshake, lists tools, then makes read-only calls.
// Never writes to the platform. Never prints credentials.

import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODE = process.env.KINETIC_MCP_MODE || "(default)";
let pass = 0, fail = 0;
const ok = (m, d = "") => { pass++; console.log(`  PASS  ${m}${d && "  " + d}`); };
const bad = (m, d = "") => { fail++; console.log(`  FAIL  ${m}${d && "\n        " + d}`); };

for (const v of ["KINETIC_SERVER_URL", "KINETIC_USERNAME", "KINETIC_PASSWORD"]) {
  if (!process.env[v]) {
    console.error(`\nMissing ${v}.\nRun with:  node --env-file=/absolute/path/.env scripts/smoke-test.js`);
    console.error("(--env-file needs Node >= 20.6.0; a relative path resolves against your CWD.)\n");
    process.exit(2);
  }
}
console.log(`\nKinetic MCP smoke test — mode=${MODE}, server=${process.env.KINETIC_SERVER_URL}\n`);

const srv = spawn(process.execPath, [path.join(ROOT, "dist", "index.js"), "--stdio"],
  { stdio: ["pipe", "pipe", "pipe"], env: process.env });

let stderr = "", buf = "";
srv.stderr.on("data", d => { stderr += d.toString(); });
const pending = new Map();
const send = (id, method, params) => new Promise(res => {
  pending.set(id, res);
  srv.stdin.write(JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n");
});
srv.stdout.on("data", d => {
  buf += d.toString();
  const lines = buf.split("\n"); buf = lines.pop();
  for (const l of lines) {
    if (!l.trim()) continue;
    try { const m = JSON.parse(l); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } } catch {}
  }
});
const text = r => (r?.result?.content?.[0]?.text) || JSON.stringify(r?.error || r?.result || {});
const isErr = r => Boolean(r?.error || r?.result?.isError);

const die = msg => { console.log(`\n  FAIL  ${msg}`); console.log("  server stderr:\n" + stderr); srv.kill(); process.exit(1); };
setTimeout(() => die("timed out after 45s"), 45000);

await send(1, "initialize", { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "smoke", version: "1" } });
srv.stdin.write(JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" }) + "\n");
ok("handshake");

const listed = await send(2, "tools/list", {});
const tools = listed?.result?.tools || [];
tools.length ? ok("tools/list", `${tools.length} tools`) : bad("tools/list returned nothing");
const modeLine = stderr.split("\n").find(l => l.includes("mode=")) || "";
if (modeLine) console.log(`        ${modeLine.trim()}`);

const has = n => tools.some(t => t.name === n);
const kappsList = has("kapps")
  ? await send(3, "tools/call", { name: "kapps", arguments: { action: "list" } })
  : await send(3, "tools/call", { name: "execute_api", arguments: { method: "GET", path: "/kapps" } });
isErr(kappsList) ? bad("list kapps", text(kappsList).slice(0, 300)) : ok("list kapps");

const slugs = [...text(kappsList).matchAll(/"slug"\s*:\s*"([a-z0-9-]+)"/g)].map(m => m[1]);
if (!slugs.length) bad("no kapp slugs found in response — is the space seeded?");
else {
  ok("found kapps", slugs.slice(0, 5).join(", "));
  const got = has("kapps")
    ? await send(4, "tools/call", { name: "kapps", arguments: { action: "get", identifier: slugs[0] } })
    : await send(4, "tools/call", { name: "execute_api", arguments: { method: "GET", path: `/kapps/${slugs[0]}` } });
  isErr(got) ? bad(`get kapp "${slugs[0]}"`, text(got).slice(0, 300)) : ok(`get kapp "${slugs[0]}" by identifier`);
}

if (has("forms")) {
  const missing = await send(5, "tools/call", { name: "forms", arguments: { action: "get" } });
  const t = text(missing);
  isErr(missing) && /identifier/i.test(t)
    ? ok("missing-identifier error is actionable")
    : bad("missing identifier should return a message naming `identifier`", t.slice(0, 200));
}

console.log(`\n  ${fail ? "FAILED" : "ALL PASSED"} — ${pass} passed, ${fail} failed\n`);
srv.kill();
process.exit(fail ? 1 : 0);
