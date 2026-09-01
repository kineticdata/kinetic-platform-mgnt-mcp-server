# Kinetic Platform Management MCP Server

An MCP server for the Kinetic Platform, generated from the bundled OpenAPI specs
(`oas/core.json`, `oas/integrator.json`). It exposes **277 API operations** —
252 Core + 25 Integrator.

## Tool surface: read this first

> [!IMPORTANT]
> **`KINETIC_MCP_MODE` now defaults to `consolidated` (~26 tools).**
> This is a **breaking change**. The server previously registered **559 tools**,
> which is unusable in Cursor (it hard-errors above roughly 40 tools) and burns
> enormous context in every client. Set `KINETIC_MCP_MODE=full` to restore the
> old surface exactly.

Every mode can reach every one of the 277 operations. **This is an organisation
choice, not a capability choice.** Model tool-selection quality degrades past
roughly 30 tools, so the default organises the same capability into far fewer
tools instead of removing any of it.

### Measured tool counts

Counts below are measured with `npm run count:tools`, not estimated.

| `KINETIC_MCP_MODE` | Tools | Reaches | Notes |
| --- | --- | --- | --- |
| **`consolidated`** (default) | **26** | all 277 operations | One tool per resource family, dispatched by `action` (+ `object`). |
| `slim` | **10** | all 277 via `execute_api` | Smallest surface. Safest for Cursor and for very long sessions. |
| `contexts` | **280** | all 277 operations | One tool per operation, snake_case names only. |
| `full` | **559** | all 277 operations | Legacy. 277 × 2 names + `connect` + 4 background-job tools. |

With a context allowlist (`KINETIC_MCP_CONTEXTS`):

| Mode + allowlist | Tools |
| --- | --- |
| `consolidated` + `form,submission,space` | 15 |
| `consolidated` + `form,submission` | 5 |
| `contexts` + `form,submission` | 47 |
| `full` + `KINETIC_MCP_TOOL_NAMES=alias` | 280 |

Every startup prints the mode and count to **stderr**:

```
kinetic-platform-mcp: mode=consolidated, 26 tools (all 277 operations)
kinetic-platform-mcp: mode=slim, 10 tools (all 277 operations via execute_api)
kinetic-platform-mcp: mode=full, 559 tools (277 operations, names=both)
```

stdout is the stdio JSON-RPC channel and is never written to.

## Modes in detail

### `consolidated` (default, 26 tools)

One tool per resource family. You pick the operation with an `action` parameter,
and — for families that span several Kinetic objects — an `object` parameter.

The motivating case: attribute definitions exist for categories, forms, kapps,
spaces, teams and users. That was 35 near-identical operations (70 tools with
the old dual naming). It is now one `attribute_definitions` tool:

```json
{ "object": "form", "action": "list", "kappSlug": "services" }
{ "object": "team", "action": "create", "body": { "name": "Region" } }
```

`object: "space"` always means the unscoped, space-level path (e.g.
`/spaceAttributeDefinitions`, `/workflows`).

Each tool's description enumerates its valid `object` and `action` values and the
required parameters per action. An invalid `action` or `object` returns an MCP
error naming the valid values — it never silently no-ops.

**Coverage: all 277 operations are consolidated. No resource falls back to
individual tools, and nothing is unreachable.** This is asserted by
`npm run verify:registry`, which fails if the families do not route every
operation in the specs.

Families, objects and actions are all derived from the actual OAS paths and
methods at startup, so they cannot drift from the specs.


| Tool | Ops | `object` values | `action` values |
| --- | --- | --- | --- |
| `attribute_definitions` | 35 | `category`, `form`, `kapp`, `space`, `team`, `user`, `user_profile` | `create`, `delete`, `get`, `list`, `update` |
| `locales` | 18 | _(single object — no `object` param)_ | `create_context`, `create_entry`, `create_locale`, `delete_cache`, `delete_context`, `delete_entry`, `delete_locale`, `list_contexts`, `list_default_locale`, `list_entries`, `list_keys`, `list_locales`, `list_staged`, `list_timezones`, `retrieve_translation_locales`, `update_context`, `update_default_locale`, `update_key` |
| `workflows` | 18 | `form`, `kapp`, `space` | `create`, `delete`, `get`, `list`, `repair`, `update` |
| `users` | 17 | `space`, `user` | `create`, `create_invitation_token`, `create_preference`, `delete`, `delete_invitation_token`, `delete_preference`, `get`, `get_invitation_token`, `get_preference`, `list`, `list_invitation_tokens`, `list_me`, `list_preferences`, `password_reset_token`, `reset_preference`, `update`, `update_me` |
| `submissions` | 16 | `form`, `kapp`, `space` | `clone`, `create`, `create_multipart`, `create_search`, `delete`, `get`, `get_file_url`, `list`, `patch`, `reindex`, `submit`, `update`, `update_multipart` |
| `qualifications` | 15 | _(single object — no `object` param)_ | `create`, `create_model_qualification`, `create_parameter`, `delete`, `delete_model_qualification`, `delete_parameter`, `get`, `get_parameter`, `list`, `list_model_qualifications`, `list_parameters`, `retrieve_model_qualification`, `update`, `update_model_qualification`, `update_parameter` |
| `web_apis` | 14 | `kapp`, `space` | `create`, `create_import`, `delete`, `export`, `get`, `list`, `update` |
| `webhooks` | 13 | `kapp`, `space` | `create`, `delete`, `get`, `get_meta`, `kapp_webhook_events`, `list`, `list_meta`, `update` |
| `forms` | 11 | `form`, `space` | `create`, `create_type`, `delete`, `delete_type`, `execute_form_integration`, `get`, `get_type`, `list`, `list_types`, `update`, `update_type` |
| `kapps` | 11 | `kapp`, `space` | `create`, `create_integration`, `delete`, `delete_integration`, `execute_kapp_integration`, `get`, `get_integration`, `list`, `list_integrations`, `update`, `update_integration` |
| `activity` | 10 | `form`, `kapp`, `space` | `create`, `delete`, `delete_submission_activity`, `get`, `list`, `list_submission_activities`, `update` |
| `attributes` | 10 | _(single object — no `object` param)_ | `create`, `create_model_mapping_attribute`, `delete`, `delete_model_mapping_attribute`, `get`, `list`, `list_model_mapping_attributes`, `retrieve_model_mapping_attributes`, `update`, `update_model_mapping_attribute` |
| `categories` | 10 | _(single object — no `object` param)_ | `create`, `create_categorization`, `delete`, `delete_categorization`, `get`, `get_categorization`, `list`, `list_categorizations`, `update`, `update_categorization` |
| `connections` | 10 | _(single object — no `object` param)_ | `create`, `delete`, `export_connection`, `get`, `import_connection`, `list`, `patch`, `restart`, `test`, `update` |
| `models` | 10 | _(single object — no `object` param)_ | `create`, `create_mapping`, `delete`, `delete_mapping`, `get`, `get_mapping`, `list`, `list_mappings`, `update`, `update_mapping` |
| `security_policy_definitions` | 10 | `kapp`, `space` | `create`, `delete`, `get`, `list`, `update` |
| `webhook_jobs` | 10 | `kapp`, `space` | `create`, `delete`, `get`, `list`, `update` |
| `file_resources` | 8 | _(single object — no `object` param)_ | `create`, `create_file_file`, `delete`, `delete_file`, `get`, `get_file`, `list`, `update` |
| `operations` | 8 | _(single object — no `object` param)_ | `create`, `create_search`, `delete`, `get`, `import_operations`, `list`, `patch`, `update` |
| `teams` | 7 | _(single object — no `object` param)_ | `create`, `create_membership`, `delete`, `delete_membership`, `get`, `list`, `update` |
| `integrator_admin` | 6 | _(single object — no `object` param)_ | `execute`, `healthz`, `inspect`, `rotate_encryption_key`, `test`, `transform` |
| `space` | 5 | _(single object — no `object` param)_ | `get`, `list`, `retrieve_space`, `space_webhook_events`, `update` |
| `space_admin` | 5 | _(single object — no `object` param)_ | `integrator_version`, `list_background_jobs`, `list_license_checks`, `list_notices`, `list_versions` |

Where two sub-resources share a family, the action carries the sub-resource
noun: `forms` exposes `create` / `get` / `list` / `update` / `delete` for forms
plus `create_type` / `list_types` / … for form types. Where an action name would
have collided, it falls back to the operationId in snake_case (e.g.
`execute_form_integration`), which is always unique and is listed in the tool
description.

### `slim` (10 tools)

The smallest useful surface, and the safest choice for Cursor or very long
sessions. `get_api_spec` + `execute_api` together reach every endpoint, which is
what makes the other 277 per-operation tools redundant.

| Tool | Purpose |
| --- | --- |
| `connect` | Authenticate to a space (only needed if credentials are not in the environment). |
| `get_api_spec` | Search the bundled OAS by tag / path / method / operationId. Returns operation slices so the model can construct a call. Narrowed and capped so a response is never enormous. |
| `execute_api` | Universal escape hatch: `{method, path, body?, query?}` against Core or Integrator, using the existing client and auth. |
| `list_kapps` | Discovery. |
| `list_forms` | Discovery. |
| `get_form` | Discovery. |
| `search_submissions` | Kapp-wide or form-scoped submission search. |
| `get_submission` | Discovery. |
| `create_kapp_background_job` | Trigger a kapp-level index build. |
| `create_form_background_job` | Trigger a form-level index build. |

> `list_errors` is **not** registered. Neither `oas/core.json` nor
> `oas/integrator.json` contains any Task, error or run endpoint, and the Task
> API is not reachable through the Core or Integrator base URLs this server
> builds. Use `execute_api` if you need to reach a Task endpoint directly. If a
> Task spec is added to `oas/`, revisit this.

### `contexts` (280 tools)

One tool per operation — the old model, but with each operation registered
**once** rather than twice. Combine with `KINETIC_MCP_CONTEXTS` to narrow it.

### `full` (559 tools)

Exactly the historical surface: every operation registered under **both**
`core_<operationId>` and its snake_case alias. Provided so nothing regresses for
existing consumers. Note that 279 of those 559 tools are exact duplicates —
identical schema, identical handler — so `full` costs roughly double the context
of `contexts` for no added capability.

## Configuration

### Tool surface

| Variable | Values | Default | Effect |
| --- | --- | --- | --- |
| `KINETIC_MCP_MODE` | `consolidated`, `slim`, `contexts`, `full` | `consolidated` | Which tool surface to register. |
| `KINETIC_MCP_CONTEXTS` | comma-separated | unset = all | Context allowlist. Valid: `space`, `kapp`, `form`, `submission`, `user`, `team`, `model`, `category`, `fileResource`, `integrator`. Applies to `consolidated` and `contexts`/`full`. |
| `KINETIC_MCP_TOOL_NAMES` | `alias`, `core`, `both` | `alias` (`both` in `full` mode) | Which name(s) each operation gets in `contexts`/`full`. `alias` = snake_case (`create_form`), which is what the Kinetic AI skills library references. Not used by `consolidated` or `slim`, whose tool names are fixed. |

Unknown values for any of these produce a clear stderr warning listing the valid
values; they are never silently ignored.

### Credentials

> [!WARNING]
> **Credentials belong in a gitignored `.env`, never in your MCP client config.**
> `.mcp.json`, Cursor's `mcp.json` and Claude Desktop's config are frequently
> committed or synced. This server is configured so no credential ever needs to
> appear in them.

| Variable | Required | Purpose |
| --- | --- | --- |
| `KINETIC_SERVER_URL` | yes, for API calls | Full space URL, e.g. `https://<space-slug>.kinops.io`. |
| `KINETIC_USERNAME` | yes, for API calls | Space user. |
| `KINETIC_PASSWORD` | yes, for API calls | Space password. |
| `KINETIC_AGENT_SLUG` | no | Retained in the session config for compatibility. Defaults to `system`. |
| `KINETIC_ALLOW_SELF_SIGNED` | no | `true` sets `NODE_TLS_REJECT_UNAUTHORIZED=0`. Development only. |

HTTP/SSE mode only: `MCP_HTTP_HOST` (default `127.0.0.1`), `MCP_HTTP_PORT`
(default `3000`), `MCP_HTTP_USER` and `MCP_HTTP_PASS` (both required).

**Credentials are not needed to register or list tools** — only to make actual
API calls. A client can always start the server, complete the MCP handshake and
enumerate tools; a missing-credential warning is printed to stderr at startup.

#### Loading `.env`

This server has **no `dotenv` dependency and does not read `.env` automatically.**
Use Node's built-in `--env-file`:

```bash
node --env-file=/absolute/path/to/kinetic-platform-mgnt-mcp/.env \
     /absolute/path/to/kinetic-platform-mgnt-mcp/dist/index.js --stdio
```

> [!IMPORTANT]
> **Use an ABSOLUTE path for `--env-file`.** A relative path resolves against the
> MCP *client's* working directory, not the server directory. If the file is not
> found there, Node exits immediately with
> `node: ./your.env: not found` — before any of this server's code runs, so you
> get no diagnostic from the server itself.
>
> **`--env-file` requires Node >= 20.6.0.** On older Node the process dies with
> an unknown-flag error before startup, again with no server-side diagnostic.
> Check with `node --version`.

Setup:

```bash
cp .env.example .env
# edit .env with your space URL, username and password
```

`.env`, `.env.local` and `.env.*.local` are gitignored.

Alternatively, set real environment variables, or call the `connect` tool at
runtime with `serverUrl`, `username` and `password`.

## Install

```bash
npm install
npm run build
```

Requires Node.js 18+ to run; **Node 20.6.0+ if you use `--env-file`** (recommended).

## MCP client configuration

Both examples carry **no credentials**. Both paths must be absolute.

### Claude Code

Project scope — `.mcp.json` in your project root (safe to commit; it holds no
secrets):

```json
{
  "mcpServers": {
    "kinetic-platform": {
      "command": "node",
      "args": [
        "--env-file=/absolute/path/to/kinetic-platform-mgnt-mcp/.env",
        "/absolute/path/to/kinetic-platform-mgnt-mcp/dist/index.js",
        "--stdio"
      ]
    }
  }
}
```

Or via the CLI:

```bash
claude mcp add kinetic-platform -- \
  node --env-file=/absolute/path/to/kinetic-platform-mgnt-mcp/.env \
       /absolute/path/to/kinetic-platform-mgnt-mcp/dist/index.js --stdio
```

### Cursor

`.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global):

```json
{
  "mcpServers": {
    "kinetic-platform": {
      "command": "node",
      "args": [
        "--env-file=/absolute/path/to/kinetic-platform-mgnt-mcp/.env",
        "/absolute/path/to/kinetic-platform-mgnt-mcp/dist/index.js",
        "--stdio"
      ]
    }
  }
}
```

Leave `KINETIC_MCP_MODE` unset. The default `consolidated` (26 tools) is under
Cursor's ~40-tool ceiling; use `KINETIC_MCP_MODE=slim` (10 tools) if you also run
other MCP servers and are near the limit in aggregate. **Do not use `full` in
Cursor** — 559 tools exceeds the limit and the server will not be usable.

Ready-made examples: `config/claude-desktop.example.json`,
`config/cursor.example.json`.

## Running

```bash
npm run start:stdio    # stdio (what MCP clients use)
npm run start:http     # streamable HTTP + deprecated SSE
npm run start:both
```

HTTP endpoints: `GET/POST/DELETE /mcp`, and `GET /sse` + `POST /messages?sessionId=…`.

## Verification

```bash
npm run lint
npm run build
npm run verify:registry   # OAS coverage + dedup + consolidated routing
npm run count:tools       # measured tool count for the current env
npm run check             # lint + build + verify:registry
```

`npm run count:tools` starts the built stdio server, performs a real
`initialize` + `tools/list` round trip and reports the count. Add `-- --list` to
print every tool name:

```bash
KINETIC_MCP_MODE=slim npm run count:tools -- --list
```

`verify:registry` asserts:

- the manifest covers every OAS operation, and aliases are unique
- each operation has exactly **one** `registerOperationTool` call in the right context file
- generated files never call `server.tool` directly (this is the de-duplication guard)
- `shared.ts` decides naming via `resolveToolNameMode()`
- consolidated mode routes **all 277** operations with no colliding action routes

## Architecture

```
src/
  index.ts                      transports, TLS opt-out, credential preflight
  server.ts                     mode dispatch, session/client cache, connect tool
  client/
    kinetic-client.ts           HTTP client, basic auth + Integrator OAuth
    oas.ts                      spec loading and operation extraction
  tools/
    tool-config.ts              KINETIC_MCP_* parsing, warnings, startup log
    consolidated.ts             resource families, action/object dispatch
    slim.ts                     get_api_spec, execute_api, discovery tools
    invocation.ts               shared OAS invocation path
    background-jobs.ts          endpoints absent from the OAS but live at runtime
    contexts/                   generated per-operation stubs
      shared.ts                 registerOperationTool — the single naming choke point
      register-all.ts           registrars + context allowlist gate
```

All four modes route through `invokeDefaultOperation` / `KineticApiClient`. There
is no second HTTP path.

### Tool naming

`src/tools/contexts/shared.ts` exports `registerOperationTool`, through which all
277 generated registrations flow. It is the only place `KINETIC_MCP_TOOL_NAMES`
is interpreted, so naming policy is one function rather than 554 call sites.

## Regenerating from the OAS

When `oas/*.json` changes:

```bash
npm run ops:generate-tools   # rewrites src/tools/contexts/** and config/operations.manifest.json
npm run check
```

The generator emits `registerOperationTool` calls, so regenerated files stay
consistent with the de-duplication model. `config/operations.manifest.json` is
used only by `scripts/*` — it is not read at runtime.

If a new resource appears in the specs, `consolidated` mode logs an unmapped
resource to stderr and exposes it as its own tool rather than dropping it; add it
to `FAMILY_BY_SEGMENT` in `src/tools/consolidated.ts` to fold it into a family.
`npm run verify:registry` fails if any operation goes unrouted.

## Customising operation logic

Generated handlers contain `// TODO: add custom logic for <METHOD> <PATH>`. Add
behaviour inline there and keep the default invocation as a fallback.
