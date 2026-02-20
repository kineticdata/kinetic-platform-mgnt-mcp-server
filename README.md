# Kinetic Platform MCP Server (Core OAS Explicit Tool Stubs)

This MCP server is generated from `oas/core.json` and registers explicit `server.tool(...)` stubs per context and per operation.

## What This Project Supports
- Explicit, per-operation tool registration from Core OAS
- Context-separated tool files (`space`, `kapp`, `form`, `submission`, `user`, etc.)
- Dual tool names for each operation:
  - `core_<operationId>`
  - `<snake_case_alias>`
- Default OAS invocation behavior for every operation
- Inline customization points inside each generated operation handler

## Requirements
- Node.js 18+
- OpenAPI spec bundled at `oas/core.json`

## Setup
```bash
npm install
npm run build
```

## Quality Checks
```bash
npm run lint
npm run check
```

## Configuration
Create a `.env` file or set environment variables:

- `KINETIC_OAS_DIR` (optional; default: `./oas` in this repo)
- `KINETIC_SERVER_URL` (optional; full space URL, e.g. `https://<space-slug>.domain.com`)
- `KINETIC_USERNAME` (optional; space user)
- `KINETIC_PASSWORD` (optional; space password)
- `KINETIC_ALLOW_SELF_SIGNED` (optional; set `true` to allow self-signed certs)

HTTP/SSE mode only:
- `MCP_HTTP_HOST` (default `127.0.0.1`)
- `MCP_HTTP_PORT` (default `3000`)
- `MCP_HTTP_USER` (required)
- `MCP_HTTP_PASS` (required)

## Running
Stdio:
```bash
npm run start:stdio
```

HTTP/SSE:
```bash
MCP_HTTP_USER=admin MCP_HTTP_PASS=secret npm run start:http
```

Endpoints:
- Streamable HTTP: `GET/POST/DELETE /mcp`
- Deprecated SSE: `GET /sse` + `POST /messages?sessionId=...`

## Tool Registration Model
Every OAS operation registers two tools:
- `core_<operationId>`
- `<snake_case_alias>`

Each generated handler:
- resolves its operation by `operationId` at startup (`Missing OAS operation: <id>` if missing)
- builds input schema from OAS parameters
- uses default invocation unless you add custom inline logic
- returns standardized MCP success/error responses

## Context Architecture
Generated context files:
- `src/tools/contexts/space.ts`
- `src/tools/contexts/kapp.ts`
- `src/tools/contexts/form.ts`
- `src/tools/contexts/submission.ts`
- `src/tools/contexts/user.ts`
- `src/tools/contexts/team.ts`
- `src/tools/contexts/model.ts`
- `src/tools/contexts/category.ts`
- `src/tools/contexts/file-resource.ts`
- `src/tools/contexts/misc.ts`

Aggregator:
- `src/tools/contexts/register-all.ts`

Shared runtime helpers:
- `src/tools/contexts/shared.ts`
- `src/tools/invocation.ts`

## OAS Update Workflow
When `oas/core.json` changes:

1. Regenerate all explicit tool stubs:
```bash
npm run ops:generate-tools
```

2. (Optional) Scan the operation manifest:
```bash
npm run ops:scan
```

Generated output includes:
- all context tool files in `src/tools/contexts/`
- `config/operations.manifest.json`

## Verification
Validate explicit registrations:
```bash
npm run verify:registry
```

This verifies:
- manifest coverage matches OAS operation count
- alias uniqueness
- each operation has:
  - operation lookup in the correct context file
  - `core_<operationId>` registration
  - `<snake_case_alias>` registration
- total registered tools equals `operation_count * 2`

## Customizing Operation Logic
Each generated operation handler contains:
```ts
// TODO: add custom logic for <METHOD> <PATH>
```

Add custom behavior inline in that handler and keep fallback to default invocation as needed.

## Using the `connect` Tool
If env vars are not set, call `connect` first:

```json
{
  "serverUrl": "https://myspace.kinops.io",
  "username": "user",
  "password": "pass",
  "agentSlug": "system"
}
```

## Claude Desktop Example
See `config/claude-desktop.example.json`.
