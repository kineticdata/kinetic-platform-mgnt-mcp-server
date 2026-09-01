/**
 * Runtime configuration for how many tools this MCP server exposes.
 *
 * AI tool-selection quality degrades badly past ~30 tools and some clients
 * (Cursor) hard-error above ~40, so the default surface is deliberately small.
 *
 * Environment variables:
 *   KINETIC_MCP_MODE        consolidated (default) | slim | contexts | full
 *   KINETIC_MCP_CONTEXTS    comma-separated context allowlist (contexts mode)
 *   KINETIC_MCP_TOOL_NAMES  alias (default) | core | both
 *
 * All diagnostics go to stderr. stdout is the stdio JSON-RPC channel and must
 * never be written to.
 */

export type ServerMode = "slim" | "consolidated" | "contexts" | "full";
export type ToolNameMode = "alias" | "core" | "both";

export const SERVER_MODES: readonly ServerMode[] = ["consolidated", "slim", "contexts", "full"];
export const TOOL_NAME_MODES: readonly ToolNameMode[] = ["alias", "core", "both"];

const LOG_PREFIX = "kinetic-platform-mcp:";

/**
 * Default surface. `consolidated` reaches every one of the 277 OAS operations
 * through ~26 tools with no duplicate names, which keeps it below Cursor's
 * ~40-tool ceiling and inside the range where model tool-selection stays sharp.
 */
export const DEFAULT_SERVER_MODE: ServerMode = "consolidated";

function warn(message: string): void {
  console.error(`${LOG_PREFIX} ${message}`);
}

/** Normalise a user-supplied context name so "fileResource"/"file-resource"/"FILE_RESOURCE" all match. */
function normalizeContextName(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

let cachedServerMode: ServerMode | undefined;

export function resolveServerMode(): ServerMode {
  if (cachedServerMode) return cachedServerMode;

  const raw = process.env.KINETIC_MCP_MODE?.trim().toLowerCase();
  if (!raw) {
    cachedServerMode = DEFAULT_SERVER_MODE;
    return cachedServerMode;
  }
  if ((SERVER_MODES as readonly string[]).includes(raw)) {
    cachedServerMode = raw as ServerMode;
    return cachedServerMode;
  }

  warn(
    `Unknown KINETIC_MCP_MODE="${process.env.KINETIC_MCP_MODE}". Valid values: ${SERVER_MODES.join(", ")}. Falling back to "${DEFAULT_SERVER_MODE}".`,
  );
  cachedServerMode = DEFAULT_SERVER_MODE;
  return cachedServerMode;
}

let cachedToolNameMode: ToolNameMode | undefined;

/**
 * Which name(s) each OAS operation is registered under.
 *
 * Default is "alias" (snake_case only) because the Kinetic AI skills library
 * references those names. `full` mode defaults to "both" so it reproduces the
 * historical tool surface exactly; an explicit env var always wins.
 */
export function resolveToolNameMode(): ToolNameMode {
  if (cachedToolNameMode) return cachedToolNameMode;

  const raw = process.env.KINETIC_MCP_TOOL_NAMES?.trim().toLowerCase();
  if (raw) {
    if ((TOOL_NAME_MODES as readonly string[]).includes(raw)) {
      cachedToolNameMode = raw as ToolNameMode;
      return cachedToolNameMode;
    }
    warn(
      `Unknown KINETIC_MCP_TOOL_NAMES="${process.env.KINETIC_MCP_TOOL_NAMES}". Valid values: ${TOOL_NAME_MODES.join(", ")}. Falling back to the mode default.`,
    );
  }

  cachedToolNameMode = resolveServerMode() === "full" ? "both" : "alias";
  return cachedToolNameMode;
}

/**
 * Parse KINETIC_MCP_CONTEXTS into a set of canonical context names.
 * Returns null when unset/empty, meaning "register every context".
 * Unknown names are reported on stderr along with the valid values.
 */
export function resolveContextAllowlist(validContexts: readonly string[]): Set<string> | null {
  const raw = process.env.KINETIC_MCP_CONTEXTS;
  if (raw === undefined) return null;

  const requested = raw
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);

  if (requested.length === 0) return null;

  const byNormalized = new Map(validContexts.map((name) => [normalizeContextName(name), name]));
  const allowed = new Set<string>();
  const unknown: string[] = [];

  for (const entry of requested) {
    const canonical = byNormalized.get(normalizeContextName(entry));
    if (canonical) {
      allowed.add(canonical);
    } else {
      unknown.push(entry);
    }
  }

  if (unknown.length > 0) {
    warn(
      `Ignoring unknown KINETIC_MCP_CONTEXTS ${unknown.map((name) => `"${name}"`).join(", ")}. Valid contexts: ${validContexts.join(", ")}.`,
    );
  }

  if (allowed.size === 0) {
    warn(
      `KINETIC_MCP_CONTEXTS matched no valid contexts, so no context tools were registered. Valid contexts: ${validContexts.join(", ")}.`,
    );
  }

  return allowed;
}

/** Count the tools currently registered on an McpServer instance. */
export function countRegisteredTools(server: unknown): number {
  const registry = (server as { _registeredTools?: Record<string, unknown> })._registeredTools;
  return registry ? Object.keys(registry).length : 0;
}

/**
 * Startup summary. stderr ONLY - stdout is the stdio JSON-RPC channel.
 * `detail` should say how much of the API the surface reaches.
 */
export function logStartupSummary(mode: ServerMode, toolCount: number, detail?: string): void {
  const suffix = detail ? ` (${detail})` : "";
  console.error(`${LOG_PREFIX} mode=${mode}, ${toolCount} tools${suffix}`);
}

/** Test/reset hook: clears memoised env parsing. */
export function resetToolConfigCache(): void {
  cachedServerMode = undefined;
  cachedToolNameMode = undefined;
}
