/**
 * Consolidated tool surface: one tool per resource family, dispatched by an
 * `action` parameter (and an `object` parameter where the family spans several
 * Kinetic objects).
 *
 * The motivating example: attribute definitions exist for categories, forms,
 * kapps, spaces, teams and users. That is 35 near-identical OAS operations,
 * which used to be 35 (or 70) separate tools. Here it is ONE `attribute_definitions`
 * tool taking `object` + `action`.
 *
 * Families, objects and actions are all derived from the actual OAS paths and
 * methods at startup, so this cannot drift from the specs. Dispatch routes to
 * `invokeDefaultOperation`, the same code path the per-operation tools use -
 * there is no second HTTP implementation.
 */
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { OasOperation } from "../client/oas.js";
import { resolveContextAllowlist } from "./tool-config.js";

export type ConsolidatedToolRuntime = {
  operations: OasOperation[];
  invokeDefaultOperation: (sessionId: string, op: OasOperation, input: any) => Promise<any>;
};

/** Trailing path segments that are verbs acting on the parent resource, not resources of their own. */
const VERB_SEGMENTS = new Set([
  "clone",
  "reindex",
  "execute",
  "inspect",
  "transform",
  "test",
  "reset",
  "rotate-encryption-key",
  "repair",
  "restart",
  "healthz",
  "url",
  "passwordResetToken",
  "export",
  "import",
]);

const HYPHEN_VARIANTS = ["-search", "-multipart"];

/** Object names embedded as a prefix in a segment, e.g. formAttributeDefinitions -> object "form". Longest first. */
const OBJECT_PREFIXES = [
  "userProfile",
  "category",
  "mapping",
  "model",
  "space",
  "team",
  "user",
  "form",
  "kapp",
];

type FamilySpec = {
  /** Consolidated tool name. */
  tool: string;
  /** Sub-resource noun appended to the action, e.g. noun "type" -> create_type / list_types. */
  noun?: string;
};

/**
 * Maps a normalised resource segment to its consolidated tool.
 * Several segments intentionally share a tool (that is the consolidation).
 */
const FAMILY_BY_SEGMENT: Record<string, FamilySpec> = {
  attributeDefinitions: { tool: "attribute_definitions" },

  workflows: { tool: "workflows" },

  attributes: { tool: "attributes" },

  qualifications: { tool: "qualifications" },
  parameters: { tool: "qualifications", noun: "parameter" },

  webApis: { tool: "web_apis" },
  webApiImport: { tool: "web_apis", noun: "import" },

  securityPolicyDefinitions: { tool: "security_policy_definitions" },

  webhookJobs: { tool: "webhook_jobs" },

  webhooks: { tool: "webhooks" },
  kapp: { tool: "webhooks", noun: "meta" },

  submissions: { tool: "submissions" },

  connections: { tool: "connections" },

  activity: { tool: "activity" },
  activities: { tool: "activity" },

  translations: { tool: "locales" },
  locales: { tool: "locales", noun: "locale" },
  timezones: { tool: "locales", noun: "timezone" },
  contexts: { tool: "locales", noun: "context" },
  entries: { tool: "locales", noun: "entry" },
  keys: { tool: "locales", noun: "key" },
  defaultLocale: { tool: "locales", noun: "default_locale" },
  cache: { tool: "locales", noun: "cache" },
  staged: { tool: "locales", noun: "staged" },

  forms: { tool: "forms" },
  types: { tool: "forms", noun: "type" },

  kapps: { tool: "kapps" },
  integrations: { tool: "kapps", noun: "integration" },

  categories: { tool: "categories" },
  categorizations: { tool: "categories", noun: "categorization" },

  teams: { tool: "teams" },
  memberships: { tool: "teams", noun: "membership" },

  users: { tool: "users" },
  preferences: { tool: "users", noun: "preference" },
  invitationTokens: { tool: "users", noun: "invitation_token" },
  me: { tool: "users", noun: "me" },

  models: { tool: "models" },
  mappings: { tool: "models", noun: "mapping" },

  fileResources: { tool: "file_resources" },
  files: { tool: "file_resources", noun: "file" },

  operations: { tool: "operations" },

  space: { tool: "space" },

  version: { tool: "space_admin", noun: "version" },
  "license-check": { tool: "space_admin", noun: "license_check" },
  notices: { tool: "space_admin", noun: "notice" },
  meta: { tool: "space_admin", noun: "meta" },
  backgroundJobs: { tool: "space_admin", noun: "background_job" },

  api: { tool: "integrator_admin" },
};

/**
 * Explicit placements for operations whose path shape misleads the generic
 * classifier. Keyed by operationId so they are easy to audit.
 */
const OVERRIDES: Record<string, { tool: string; object?: string; action: string }> = {
  retrieveSubmissionFileUrl: { tool: "submissions", object: "space", action: "get_file_url" },
  createSubmissionMultipart: { tool: "submissions", object: "form", action: "create_multipart" },
  updateSubmissionMultipart: { tool: "submissions", object: "space", action: "update_multipart" },
};

/** Nouns whose plural is not simply noun + "s". */
const IRREGULAR_PLURALS: Record<string, string> = {
  entry: "entries",
  me: "me",
  staged: "staged",
  default_locale: "default_locale",
  meta: "meta",
  cache: "cache",
};

/** Which consolidated tool belongs to which KINETIC_MCP_CONTEXTS context. */
const TOOL_CONTEXT: Record<string, string> = {
  attribute_definitions: "space",
  workflows: "space",
  web_apis: "space",
  security_policy_definitions: "space",
  webhook_jobs: "space",
  webhooks: "space",
  activity: "space",
  locales: "space",
  space: "space",
  space_admin: "space",
  file_resources: "fileResource",
  forms: "form",
  submissions: "submission",
  kapps: "kapp",
  categories: "category",
  teams: "team",
  users: "user",
  models: "model",
  attributes: "integrator",
  qualifications: "integrator",
  connections: "integrator",
  operations: "integrator",
  integrator_admin: "integrator",
};

function snake(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/-/g, "_")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
}

function pluralize(noun: string): string {
  return IRREGULAR_PLURALS[noun] ?? `${noun}s`;
}

type Classification = {
  segment: string;
  object: string;
  isItem: boolean;
  variant?: string;
  verb?: string;
};

function classify(path: string): Classification {
  const parts = path.split("/").filter(Boolean);
  const core = parts.filter((part) => !part.startsWith("{"));
  let isItem = parts[parts.length - 1]?.startsWith("{") ?? false;
  let segment = core[core.length - 1] ?? "space";

  let variant: string | undefined;
  for (const suffix of HYPHEN_VARIANTS) {
    if (segment.endsWith(suffix)) {
      variant = suffix.slice(1);
      segment = segment.slice(0, -suffix.length);
    }
  }

  let verb: string | undefined;
  if (VERB_SEGMENTS.has(segment) && core.length >= 2) {
    verb = segment;
    segment = core[core.length - 2];
    // The parent resource was addressed by id, so this is an item-level verb.
    isItem = true;
  }

  let object: string | undefined;
  for (const prefix of OBJECT_PREFIXES) {
    if (segment.startsWith(prefix) && segment.length > prefix.length && /[A-Z]/.test(segment[prefix.length])) {
      object = snake(prefix);
      segment = segment[prefix.length].toLowerCase() + segment.slice(prefix.length + 1);
      break;
    }
  }

  if (!object) {
    // Otherwise the object comes from the path's parent scope.
    if (/^\/kapps\/\{[^}]+\}\/forms/.test(path)) object = "form";
    else if (/^\/kapps\/\{/.test(path)) object = "kapp";
    else if (path.startsWith("/models")) object = "model";
    else if (path.startsWith("/mappings")) object = "mapping";
    else object = "space";
  }

  return { segment, object, isItem, variant, verb };
}

function deriveAction(op: OasOperation, c: Classification, noun: string | undefined): string {
  let base: string;
  if (c.verb) {
    base = snake(c.verb);
  } else if (op.method === "GET") {
    base = c.isItem ? "get" : "list";
  } else if (op.method === "POST") {
    base = c.isItem ? (op.operationId.startsWith("submit") ? "submit" : snake(op.operationId)) : "create";
  } else if (op.method === "PUT") {
    base = "update";
  } else if (op.method === "PATCH") {
    base = "patch";
  } else if (op.method === "DELETE") {
    base = "delete";
  } else {
    base = snake(op.operationId);
  }

  if (c.variant) base = `${base}_${c.variant}`;
  if (noun) base = base === "list" ? `list_${pluralize(noun)}` : `${base}_${noun}`;
  return base;
}

type Entry = {
  op: OasOperation;
  object: string;
  action: string;
  requiredParams: string[];
  requiresBody: boolean;
};

type Family = {
  tool: string;
  entries: Entry[];
  /** `${object}::${action}` -> entry */
  dispatch: Map<string, Entry>;
  objects: string[];
  actions: string[];
};

/** Group every OAS operation into a consolidated family. Exported for verification tooling. */
export function buildFamilies(operations: OasOperation[]): Family[] {
  const byTool = new Map<string, Family>();

  const getFamily = (tool: string): Family => {
    let family = byTool.get(tool);
    if (!family) {
      family = { tool, entries: [], dispatch: new Map(), objects: [], actions: [] };
      byTool.set(tool, family);
    }
    return family;
  };

  for (const op of operations) {
    const c = classify(op.path);
    const override = OVERRIDES[op.operationId];
    const spec = override ? { tool: override.tool, noun: undefined } : FAMILY_BY_SEGMENT[c.segment];

    if (!spec) {
      console.error(
        `kinetic-platform-mcp: no consolidated family for ${op.method} ${op.path} (segment "${c.segment}"); exposing it as its own tool.`,
      );
    }

    const tool = spec?.tool ?? snake(c.segment);
    const object = override?.object ?? c.object;
    const family = getFamily(tool);

    let action = override?.action ?? deriveAction(op, c, spec?.noun);
    // operationIds are unique, so they are a guaranteed-unique fallback on collision.
    if (family.dispatch.has(`${object}::${action}`)) {
      action = snake(op.operationId);
    }
    const key = `${object}::${action}`;
    if (family.dispatch.has(key)) {
      console.error(`kinetic-platform-mcp: dropping duplicate consolidated route ${tool}.${key} (${op.operationId}).`);
      continue;
    }

    const requiredParams = (op.parameters ?? [])
      .filter((param: any) => param?.name && param?.required)
      .map((param: any) => param.name as string);

    const entry: Entry = {
      op,
      object,
      action,
      requiredParams,
      requiresBody: Boolean(op.requestBody?.required),
    };
    family.entries.push(entry);
    family.dispatch.set(key, entry);
  }

  for (const family of byTool.values()) {
    family.objects = [...new Set(family.entries.map((entry) => entry.object))].sort();
    family.actions = [...new Set(family.entries.map((entry) => entry.action))].sort();
  }

  return [...byTool.values()].sort((a, b) => a.tool.localeCompare(b.tool));
}

function zodForParam(param: any): z.ZodTypeAny {
  const schema = param?.schema ?? {};
  if (Array.isArray(schema.enum) && schema.enum.length > 0 && schema.enum.every((v: any) => typeof v === "string")) {
    return z.enum(schema.enum as [string, ...string[]]);
  }
  switch (schema.type) {
    case "string":
      return z.string();
    case "integer":
      return z.number().int();
    case "number":
      return z.number();
    case "boolean":
      return z.boolean();
    case "array":
      return z.array(z.any());
    case "object":
      return z.record(z.string(), z.any());
    default:
      return z.any();
  }
}

/** Union of every parameter across the family; all optional because requirements vary per action. */
function buildInputSchema(family: Family, multiObject: boolean): Record<string, z.ZodTypeAny> {
  const schema: Record<string, z.ZodTypeAny> = {
    action: z
      .enum(family.actions as [string, ...string[]])
      .describe(`Which operation to perform. One of: ${family.actions.join(", ")}.`),
  };

  if (multiObject) {
    schema.object = z
      .enum(family.objects as [string, ...string[]])
      .describe(
        `Which Kinetic object this applies to. One of: ${family.objects.join(", ")}. ("space" means the unscoped, space-level path.)`,
      );
  }

  const seen = new Set<string>(Object.keys(schema));
  for (const entry of family.entries) {
    for (const param of entry.op.parameters ?? []) {
      const name = (param as any)?.name;
      if (!name || seen.has(name)) continue;
      seen.add(name);
      const description = ((param as any).description ?? "").replace(/\s+/g, " ").trim();
      schema[name] = zodForParam(param)
        .optional()
        .describe(description.slice(0, 300) || `${(param as any).in ?? "parameter"} parameter`);
    }
  }

  schema.body = z.any().optional().describe("JSON request body, for actions that require one.");
  return schema;
}

/** Cap on how many routes a description enumerates, so one huge family cannot dominate the context window. */
const MAX_DESCRIBED_ROUTES = 60;

function buildDescription(family: Family, multiObject: boolean): string {
  const lines: string[] = [];
  const title = family.tool.replace(/_/g, " ");

  lines.push(
    `Kinetic ${title}: one tool covering ${family.entries.length} API operation(s). Select the operation with \`action\`${multiObject ? " and `object`" : ""}.`,
  );
  if (multiObject) {
    lines.push(`Objects: ${family.objects.join(", ")}. ("space" = the unscoped space-level path.)`);
  }
  lines.push(`Actions: ${family.actions.join(", ")}.`);
  lines.push("Routes (action -> endpoint, required parameters):");

  const sorted = [...family.entries].sort(
    (a, b) => a.action.localeCompare(b.action) || a.object.localeCompare(b.object),
  );

  for (const entry of sorted.slice(0, MAX_DESCRIBED_ROUTES)) {
    const required = [...entry.requiredParams, ...(entry.requiresBody ? ["body"] : [])];
    const scope = multiObject ? ` object=${entry.object}` : "";
    const requires = required.length > 0 ? ` requires: ${required.join(", ")}` : " requires: none";
    lines.push(`- ${entry.action}${scope} -> ${entry.op.method} ${entry.op.path};${requires}`);
  }

  if (sorted.length > MAX_DESCRIBED_ROUTES) {
    lines.push(
      `- ...and ${sorted.length - MAX_DESCRIBED_ROUTES} more. Use \`get_api_spec\` or call with a wrong action to list them all.`,
    );
  }

  lines.push("Call `connect` first if no session is configured.");
  return lines.join("\n");
}

export function registerConsolidatedTools(server: McpServer, runtime: ConsolidatedToolRuntime): void {
  const families = buildFamilies(runtime.operations);

  const contexts = [...new Set(Object.values(TOOL_CONTEXT))].sort();
  const allowed = resolveContextAllowlist(contexts);

  for (const family of families) {
    const context = TOOL_CONTEXT[family.tool];
    if (allowed && context && !allowed.has(context)) continue;
    if (allowed && !context) continue;

    const multiObject = family.objects.length > 1;
    const inputSchema = buildInputSchema(family, multiObject);
    const description = buildDescription(family, multiObject);

    server.tool(family.tool, description, inputSchema, async (input: any, extra: any) => {
      try {
        const action = String(input.action ?? "");
        const object = multiObject ? String(input.object ?? "") : family.objects[0];

        if (!action) {
          return toolError(`\`action\` is required. Valid actions: ${family.actions.join(", ")}.`);
        }
        if (!family.actions.includes(action)) {
          return toolError(`Unknown action "${action}". Valid actions: ${family.actions.join(", ")}.`);
        }
        if (multiObject && !family.objects.includes(object)) {
          return toolError(
            `Unknown object "${input.object ?? ""}". Valid objects: ${family.objects.join(", ")}.`,
          );
        }

        const entry = family.dispatch.get(`${object}::${action}`);
        if (!entry) {
          const validForAction = family.entries
            .filter((candidate) => candidate.action === action)
            .map((candidate) => candidate.object);
          return toolError(
            `Action "${action}" is not available for object "${object}". ` +
              (validForAction.length > 0
                ? `"${action}" supports object: ${[...new Set(validForAction)].join(", ")}.`
                : `Valid actions: ${family.actions.join(", ")}.`),
          );
        }

        const missing = entry.requiredParams.filter((name) => input[name] === undefined);
        if (entry.requiresBody && input.body === undefined) missing.push("body");
        if (missing.length > 0) {
          return toolError(
            `Missing required parameter(s) for action "${action}": ${missing.join(", ")}. ` +
              `${entry.op.method} ${entry.op.path}`,
          );
        }

        const sessionId = extra?.sessionId ?? "stdio";
        const result = await runtime.invokeDefaultOperation(sessionId, entry.op, input);
        return { content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }] };
      } catch (error: any) {
        return toolError(error.message);
      }
    });
  }
}

function toolError(message: string) {
  return {
    content: [{ type: "text" as const, text: `Error: ${message}` }],
    isError: true,
  };
}
