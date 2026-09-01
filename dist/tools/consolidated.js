import { z } from "zod";
import { resolveContextAllowlist } from "./tool-config.js";
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
/**
 * Maps a normalised resource segment to its consolidated tool.
 * Several segments intentionally share a tool (that is the consolidation).
 */
const FAMILY_BY_SEGMENT = {
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
const OVERRIDES = {
    // The trailing path params here locate a file WITHIN a submission, so the
    // submission id is the identity, not the last path parameter.
    retrieveSubmissionFileUrl: {
        tool: "submissions",
        object: "space",
        action: "get_file_url",
        identity: "submissionId",
    },
    createSubmissionMultipart: { tool: "submissions", object: "form", action: "create_multipart" },
    updateSubmissionMultipart: { tool: "submissions", object: "space", action: "update_multipart" },
};
/** Nouns whose plural is not simply noun + "s". */
const IRREGULAR_PLURALS = {
    entry: "entries",
    me: "me",
    staged: "staged",
    default_locale: "default_locale",
    meta: "meta",
    cache: "cache",
};
/** Which consolidated tool belongs to which KINETIC_MCP_CONTEXTS context. */
const TOOL_CONTEXT = {
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
function snake(value) {
    return value
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .replace(/-/g, "_")
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .toLowerCase();
}
function pluralize(noun) {
    return IRREGULAR_PLURALS[noun] ?? `${noun}s`;
}
/**
 * Parameter names too generic to describe themselves. For these the label is
 * prefixed with the resource, so `slug` on `teams` reads "the team slug".
 */
const GENERIC_IDENTITY_NAMES = new Set(["slug", "name", "id", "key", "type", "context"]);
/**
 * Query parameters whose names invite confusion with an identity parameter.
 * `slug` on GET /kapps/{kappSlug}/forms filters ARCHIVED forms - it does not
 * select one - while `formSlug` is the real identifier.
 */
const FILTER_ONLY_QUERY_NAMES = new Set(["slug", "name", "id", "key"]);
function humanizeParam(name) {
    return name
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replace(/_/g, " ")
        .toLowerCase();
}
function singularize(words) {
    if (/ies$/.test(words))
        return words.replace(/ies$/, "y");
    if (/(ss|us|is)$/.test(words))
        return words;
    if (/(ch|sh|x|z|s)es$/.test(words))
        return words.replace(/es$/, "");
    if (/s$/.test(words))
        return words.replace(/s$/, "");
    return words;
}
/** Action-name prefixes that are verbs, so the remainder of the action is a noun phrase. */
const ACTION_VERB_PREFIXES = new Set([
    "get", "list", "create", "update", "delete", "patch", "submit", "execute",
    "clone", "reindex", "repair", "restart", "test", "inspect", "transform",
    "reset", "export", "import", "retrieve",
]);
/**
 * Human label for an identity parameter, e.g. "form slug", "team slug",
 * "submission id", "form type name".
 *
 * Specific parameter names describe themselves. Generic ones (name, slug, id)
 * do not, so they are qualified with the resource and - where the action targets
 * a sub-resource - that sub-resource, so `name` on `forms action=get_type` reads
 * "form type name" rather than the misleading "form name".
 */
function identityLabel(toolName, param, action, noun) {
    const paramWords = humanizeParam(param);
    if (!GENERIC_IDENTITY_NAMES.has(param))
        return paramWords;
    const words = singularize(toolName.replace(/_/g, " ")).split(" ");
    let extra = [];
    if (noun) {
        extra = noun.replace(/_/g, " ").split(" ");
    }
    else if (action) {
        const parts = action.split("_");
        // Only mine the action for a noun phrase when it actually starts with a verb;
        // operationId-fallback actions are not reliable noun phrases.
        if (parts.length > 1 && ACTION_VERB_PREFIXES.has(parts[0]))
            extra = parts.slice(1);
    }
    const seen = new Set();
    const out = [];
    for (const word of [...words, ...extra, ...paramWords.split(" ")]) {
        if (!word || seen.has(word))
            continue;
        seen.add(word);
        out.push(word);
    }
    return out.join(" ");
}
function classify(path) {
    const parts = path.split("/").filter(Boolean);
    const core = parts.filter((part) => !part.startsWith("{"));
    let isItem = parts[parts.length - 1]?.startsWith("{") ?? false;
    let segment = core[core.length - 1] ?? "space";
    let variant;
    for (const suffix of HYPHEN_VARIANTS) {
        if (segment.endsWith(suffix)) {
            variant = suffix.slice(1);
            segment = segment.slice(0, -suffix.length);
        }
    }
    let verb;
    if (VERB_SEGMENTS.has(segment) && core.length >= 2) {
        verb = segment;
        segment = core[core.length - 2];
        // The parent resource was addressed by id, so this is an item-level verb.
        isItem = true;
    }
    let object;
    for (const prefix of OBJECT_PREFIXES) {
        if (segment.startsWith(prefix) && segment.length > prefix.length && /[A-Z]/.test(segment[prefix.length])) {
            object = snake(prefix);
            segment = segment[prefix.length].toLowerCase() + segment.slice(prefix.length + 1);
            break;
        }
    }
    if (!object) {
        // Otherwise the object comes from the path's parent scope.
        if (/^\/kapps\/\{[^}]+\}\/forms/.test(path))
            object = "form";
        else if (/^\/kapps\/\{/.test(path))
            object = "kapp";
        else if (path.startsWith("/models"))
            object = "model";
        else if (path.startsWith("/mappings"))
            object = "mapping";
        else
            object = "space";
    }
    return { segment, object, isItem, variant, verb };
}
function deriveAction(op, c, noun) {
    let base;
    // When the name falls back to the operationId it already describes the
    // sub-resource, so the noun suffix must not be appended again (which would
    // produce e.g. create_file_file).
    let usedOperationId = false;
    if (c.verb) {
        base = snake(c.verb);
    }
    else if (op.method === "GET") {
        base = c.isItem ? "get" : "list";
    }
    else if (op.method === "POST") {
        if (!c.isItem) {
            base = "create";
        }
        else if (op.operationId.startsWith("submit")) {
            base = "submit";
        }
        else {
            base = snake(op.operationId);
            usedOperationId = true;
        }
    }
    else if (op.method === "PUT") {
        base = "update";
    }
    else if (op.method === "PATCH") {
        base = "patch";
    }
    else if (op.method === "DELETE") {
        base = "delete";
    }
    else {
        base = snake(op.operationId);
        usedOperationId = true;
    }
    if (c.variant)
        base = `${base}_${c.variant}`;
    if (noun && !usedOperationId)
        base = base === "list" ? `list_${pluralize(noun)}` : `${base}_${noun}`;
    return base;
}
/** Group every OAS operation into a consolidated family. Exported for verification tooling. */
export function buildFamilies(operations) {
    const byTool = new Map();
    const getFamily = (tool) => {
        let family = byTool.get(tool);
        if (!family) {
            family = {
                tool,
                entries: [],
                dispatch: new Map(),
                objects: [],
                actions: [],
                identityActions: new Map(),
            };
            byTool.set(tool, family);
        }
        return family;
    };
    for (const op of operations) {
        const c = classify(op.path);
        const override = OVERRIDES[op.operationId];
        const spec = override ? { tool: override.tool, noun: undefined } : FAMILY_BY_SEGMENT[c.segment];
        if (!spec) {
            console.error(`kinetic-platform-mcp: no consolidated family for ${op.method} ${op.path} (segment "${c.segment}"); exposing it as its own tool.`);
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
            .filter((param) => param?.name && param?.required)
            .map((param) => param.name);
        // Identity is the trailing path parameter, but only for routes that address a
        // single item. Collection routes (list/create) identify nothing, so all of
        // their path parameters are scope.
        const pathParams = [...op.path.matchAll(/\{([^}]+)\}/g)].map((match) => match[1]);
        const identityParam = override?.identity ??
            (c.isItem && pathParams.length > 0 ? pathParams[pathParams.length - 1] : undefined);
        const scopeParams = pathParams.filter((name) => name !== identityParam);
        const entry = {
            op,
            object,
            action,
            requiredParams,
            requiresBody: Boolean(op.requestBody?.required),
            identityParam,
            scopeParams,
            identityLabelText: identityParam
                ? identityLabel(tool, identityParam, action, spec?.noun)
                : undefined,
        };
        family.entries.push(entry);
        family.dispatch.set(key, entry);
    }
    for (const family of byTool.values()) {
        family.objects = [...new Set(family.entries.map((entry) => entry.object))].sort();
        family.actions = [...new Set(family.entries.map((entry) => entry.action))].sort();
        for (const entry of family.entries) {
            if (!entry.identityParam || !entry.identityLabelText)
                continue;
            const group = family.identityActions.get(entry.identityLabelText) ??
                { param: entry.identityParam, actions: [] };
            if (!group.actions.includes(entry.action))
                group.actions.push(entry.action);
            family.identityActions.set(entry.identityLabelText, group);
        }
        for (const group of family.identityActions.values())
            group.actions.sort();
    }
    return [...byTool.values()].sort((a, b) => a.tool.localeCompare(b.tool));
}
function zodForParam(param) {
    const schema = param?.schema ?? {};
    if (Array.isArray(schema.enum) && schema.enum.length > 0 && schema.enum.every((v) => typeof v === "string")) {
        return z.enum(schema.enum);
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
/** Summary of what `identifier` means across a family, for schema and error text. */
function identifierSummary(family) {
    const groups = [...family.identityActions.entries()];
    if (groups.length === 0)
        return "";
    return groups
        .map(([label, group]) => `${label} (same as \`${group.param}\`) for action ${group.actions.join("/")}`)
        .join("; ");
}
/** Union of every parameter across the family; all optional because requirements vary per action. */
function buildInputSchema(family, multiObject) {
    const schema = {
        action: z
            .enum(family.actions)
            .describe(`Which operation to perform. One of: ${family.actions.join(", ")}.`),
    };
    if (multiObject) {
        // Optional: inferred when exactly one object supports the chosen action.
        schema.object = z
            .enum(family.objects)
            .optional()
            .describe(`Which scope the endpoint lives under. One of: ${family.objects.join(", ")}. ` +
            '"space" means the unscoped, space-level path. ' +
            "May be omitted when only one object supports the chosen action.");
    }
    const hasIdentity = family.identityActions.size > 0;
    if (hasIdentity) {
        schema.identifier = z
            .string()
            .optional()
            .describe(`Canonical identifier of the thing you are addressing - use this if unsure of the specific parameter name. ` +
            `For this tool: ${identifierSummary(family)}. ` +
            `SCOPE parameters are separate from identity and are still required: a nested resource needs \`identifier\` AND its scope parameter(s). ` +
            `If you pass both \`identifier\` and the specific parameter, the specific parameter wins.`);
    }
    // Names known to be identity parameters somewhere in this family.
    const identityNames = new Set([...family.identityActions.values()].map((group) => group.param));
    // Prefer the path definition when a name appears as both path and query
    // parameter: identity documentation matters more than a filter's.
    const collected = new Map();
    for (const entry of family.entries) {
        for (const param of entry.op.parameters ?? []) {
            const name = param?.name;
            if (!name || name in schema)
                continue;
            const existing = collected.get(name);
            if (!existing || (param.in === "path" && existing.in !== "path")) {
                collected.set(name, param);
            }
        }
    }
    for (const [name, param] of collected) {
        const rawDescription = (param.description ?? "").replace(/\s+/g, " ").trim();
        const isFilterTrap = param.in === "query" &&
            FILTER_ONLY_QUERY_NAMES.has(name) &&
            identityNames.size > 0 &&
            !identityNames.has(name);
        let description = rawDescription || `${param.in ?? "parameter"} parameter`;
        if (isFilterTrap) {
            // e.g. `slug` on GET /kapps/{kappSlug}/forms is an archived-forms filter,
            // NOT the form identifier. Lead with that so it cannot be mistaken.
            const target = singularize(family.tool.replace(/_/g, " "));
            const identityHint = [...identityNames].map((n) => `\`${n}\``).join(" / ");
            description =
                `FILTER ONLY - not the ${target} identifier. To target a single ${target}, use \`identifier\` (or ${identityHint}). ` +
                    description;
        }
        schema[name] = zodForParam(param).optional().describe(description.slice(0, 400));
    }
    schema.body = z.any().optional().describe("JSON request body, for actions that require one.");
    return schema;
}
/** Cap on how many routes a description enumerates, so one huge family cannot dominate the context window. */
const MAX_DESCRIBED_ROUTES = 60;
function buildDescription(family, multiObject) {
    const lines = [];
    const title = family.tool.replace(/_/g, " ");
    lines.push(`Kinetic ${title}: one tool covering ${family.entries.length} API operation(s). Select the operation with \`action\`${multiObject ? " and `object`" : ""}.`);
    if (multiObject) {
        lines.push(`Objects: ${family.objects.join(", ")}. \`object\` names the SCOPE the endpoint lives under, not the thing returned - ` +
            `so a space-level path uses object="space" (e.g. listing kapps is object="space", action="list", because /kapps is a space-level path), ` +
            `while object="kapp" means the path sits inside a specific kapp. ` +
            `You may omit \`object\` when only one object supports your chosen action.`);
    }
    lines.push(`Actions: ${family.actions.join(", ")}.`);
    if (family.identityActions.size > 0) {
        lines.push(`Identifying a single record: pass \`identifier\` (canonical, always accepted) or the specific parameter. ` +
            `For this tool, identifier = ${identifierSummary(family)}. ` +
            `If both are supplied, the specific parameter wins.`);
        lines.push("SCOPE vs IDENTITY: scope parameters are NOT identity and are still required. " +
            "A form is identified by its slug WITHIN a kapp, so getting one needs identifier (the form slug) AND kappSlug (scope). " +
            "The routes below mark identity as [id] and scope as [scope].");
    }
    lines.push("Routes (action -> endpoint, required parameters):");
    const sorted = [...family.entries].sort((a, b) => a.action.localeCompare(b.action) || a.object.localeCompare(b.object));
    for (const entry of sorted.slice(0, MAX_DESCRIBED_ROUTES)) {
        const required = [];
        for (const name of entry.requiredParams) {
            if (name === entry.identityParam)
                required.push(`${name} [id]`);
            else if (entry.scopeParams.includes(name))
                required.push(`${name} [scope]`);
            else
                required.push(name);
        }
        if (entry.requiresBody)
            required.push("body");
        const scope = multiObject ? ` object=${entry.object}` : "";
        const requires = required.length > 0 ? ` requires: ${required.join(", ")}` : " requires: none";
        lines.push(`- ${entry.action}${scope} -> ${entry.op.method} ${entry.op.path};${requires}`);
    }
    if (sorted.length > MAX_DESCRIBED_ROUTES) {
        lines.push(`- ...and ${sorted.length - MAX_DESCRIBED_ROUTES} more. Use \`get_api_spec\` or call with a wrong action to list them all.`);
    }
    lines.push("Call `connect` first if no session is configured.");
    return lines.join("\n");
}
export function registerConsolidatedTools(server, runtime) {
    const families = buildFamilies(runtime.operations);
    const contexts = [...new Set(Object.values(TOOL_CONTEXT))].sort();
    const allowed = resolveContextAllowlist(contexts);
    for (const family of families) {
        const context = TOOL_CONTEXT[family.tool];
        if (allowed && context && !allowed.has(context))
            continue;
        if (allowed && !context)
            continue;
        const multiObject = family.objects.length > 1;
        const inputSchema = buildInputSchema(family, multiObject);
        const description = buildDescription(family, multiObject);
        server.tool(family.tool, description, inputSchema, async (input, extra) => {
            try {
                const action = String(input.action ?? "");
                if (!action) {
                    return toolError(`\`action\` is required. Valid actions: ${family.actions.join(", ")}.`);
                }
                if (!family.actions.includes(action)) {
                    return toolError(`Unknown action "${action}". Valid actions: ${family.actions.join(", ")}.`);
                }
                // Objects that support this action, used both to infer `object` and to
                // explain the failure when it cannot be inferred.
                const objectsForAction = [
                    ...new Set(family.entries.filter((entry) => entry.action === action).map((entry) => entry.object)),
                ].sort();
                let object;
                if (!multiObject) {
                    object = family.objects[0];
                }
                else if (input.object !== undefined && input.object !== null && input.object !== "") {
                    object = String(input.object);
                    if (!family.objects.includes(object)) {
                        return toolError(`Unknown object "${object}". Valid objects: ${family.objects.join(", ")}.`);
                    }
                }
                else if (objectsForAction.length === 1) {
                    // Unambiguous, so do not make the caller guess.
                    object = objectsForAction[0];
                }
                else {
                    return toolError(`\`object\` is required for action "${action}", which is available for object: ${objectsForAction.join(", ")}. ` +
                        `Pass one of those. Remember object names the scope: "space" is the space-level path.`);
                }
                const entry = family.dispatch.get(`${object}::${action}`);
                if (!entry) {
                    return toolError(`Action "${action}" is not available for object "${object}". ` +
                        (objectsForAction.length > 0
                            ? `"${action}" supports object: ${objectsForAction.join(", ")}.`
                            : `Valid actions: ${family.actions.join(", ")}.`));
                }
                // Resolve the canonical `identifier` onto this route's identity parameter.
                // The specific parameter wins; a conflict is logged rather than hidden.
                const payload = { ...input };
                delete payload.identifier;
                delete payload.action;
                delete payload.object;
                const identifier = input.identifier;
                if (entry.identityParam && identifier !== undefined && identifier !== null && identifier !== "") {
                    const specific = payload[entry.identityParam];
                    if (specific === undefined || specific === null || specific === "") {
                        payload[entry.identityParam] = identifier;
                    }
                    else if (String(specific) !== String(identifier)) {
                        console.error(`kinetic-platform-mcp: ${family.tool}.${action} received conflicting identity values ` +
                            `(${entry.identityParam}="${specific}", identifier="${identifier}"); using ${entry.identityParam} as documented.`);
                    }
                }
                else if (!entry.identityParam && identifier !== undefined && identifier !== null && identifier !== "") {
                    return toolError(`Action "${action}" addresses a collection, so it takes no identifier. ` +
                        `Drop \`identifier\`${entry.scopeParams.length > 0 ? `; scope it with ${entry.scopeParams.join(", ")} instead` : ""}.`);
                }
                // Per-action required-parameter validation, derived from the same route
                // table that generates the Routes section of this description.
                const missingIdentity = entry.identityParam !== undefined &&
                    entry.requiredParams.includes(entry.identityParam) &&
                    payload[entry.identityParam] === undefined;
                const missingOthers = entry.requiredParams.filter((name) => name !== entry.identityParam && payload[name] === undefined);
                const missingBody = entry.requiresBody && payload.body === undefined;
                if (missingIdentity || missingOthers.length > 0 || missingBody) {
                    const parts = [];
                    if (missingIdentity) {
                        parts.push(`the ${entry.identityLabelText} — pass \`identifier\` (or \`${entry.identityParam}\`)`);
                    }
                    for (const name of missingOthers) {
                        parts.push(entry.scopeParams.includes(name) ? `\`${name}\` for scope` : `\`${name}\``);
                    }
                    if (missingBody)
                        parts.push("`body`");
                    return toolError(`${family.tool} action=${action}${multiObject ? ` object=${object}` : ""} requires ${parts.join(", plus ")}. ` +
                        `Route: ${entry.op.method} ${entry.op.path}`);
                }
                const sessionId = extra?.sessionId ?? "stdio";
                const result = await runtime.invokeDefaultOperation(sessionId, entry.op, payload);
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            catch (error) {
                return toolError(error.message);
            }
        });
    }
}
function toolError(message) {
    return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true,
    };
}
