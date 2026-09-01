import { z } from "zod";
const HTTP_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"];
/** Cap on get_api_spec response size so a broad query cannot flood the context window. */
const MAX_SPEC_RESULTS = 200;
const DEFAULT_SPEC_RESULTS = 40;
/**
 * `detail=full` returns the resolved request-body schema - the whole point of
 * the consolidated tools' "full schema: get_api_spec ..." pointers. Schemas run
 * to ~15KB, so they are returned only for a narrow page, and any single schema
 * is depth-pruned to fit a budget rather than flooding the context window.
 */
const MAX_FULL_BODY_SCHEMAS = 5;
const MAX_BODY_SCHEMA_CHARS = 12000;
function ok(payload) {
    return { content: [{ type: "text", text: JSON.stringify(payload, null, 2) }] };
}
function fail(message) {
    return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true,
    };
}
function sessionOf(extra) {
    return extra?.sessionId ?? "stdio";
}
/** Same snake_case derivation the code generator uses, so slim mode can name the tool an operation would get in contexts/full mode. */
function toSnakeName(operationId) {
    const snake = operationId
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .toLowerCase();
    return /^[a-z]/.test(snake) ? snake : `op_${snake}`;
}
function clamp(value, max) {
    if (!value)
        return undefined;
    const normalized = value.replace(/\s+/g, " ").trim();
    if (!normalized)
        return undefined;
    return normalized.length > max ? `${normalized.slice(0, max - 1)}…` : normalized;
}
/** Wrap a bundled OAS operation as a named high-level tool. */
function registerOperationBackedTool(server, runtime, toolName, operationId, description, inputSchema, mapInput) {
    const op = runtime.operations.find((candidate) => candidate.operationId === operationId);
    if (!op) {
        console.error(`kinetic-platform-mcp: skipping slim tool "${toolName}" - OAS operation "${operationId}" is not present in the bundled specs.`);
        return false;
    }
    server.tool(toolName, description, inputSchema, async (input, extra) => {
        try {
            const payload = mapInput ? mapInput(input) : input;
            const result = await runtime.invokeDefaultOperation(sessionOf(extra), op, payload);
            return ok(result);
        }
        catch (error) {
            return fail(error.message);
        }
    });
    return true;
}
export function registerSlimTools(server, runtime) {
    registerGetApiSpec(server, runtime);
    registerExecuteApi(server, runtime);
    registerDiscoveryTools(server, runtime);
}
// ── get_api_spec ────────────────────────────────────────────────────────────
export function registerGetApiSpec(server, runtime) {
    const description = "Search the bundled Kinetic OpenAPI specs (Core and Integrator) for operations, and return a slice of the spec " +
        "so you can construct a call with `execute_api`. ALWAYS narrow with `tag`, `path`, `method` or `operationId` - " +
        "an unfiltered query returns only the first page. Use detail=\"full\" on a single operation to see its parameters " +
        `and its fully resolved request-body schema (returned for pages of ${MAX_FULL_BODY_SCHEMAS} operations or fewer) ` +
        "before calling `execute_api`. Pass `api` - it defaults to \"core\", so an Integrator operationId finds nothing without it.";
    const inputSchema = {
        api: z
            .enum(["core", "integrator", "all"])
            .optional()
            .describe('Which spec to search. Default "core". Use "all" to search both.'),
        tag: z
            .string()
            .optional()
            .describe('Case-insensitive tag substring, e.g. "Forms", "Submissions", "Users".'),
        path: z
            .string()
            .optional()
            .describe('Case-insensitive path substring, e.g. "/submissions" or "workflows".'),
        method: z
            .string()
            .optional()
            .describe("HTTP method filter, e.g. GET, POST, PUT, PATCH, DELETE."),
        operationId: z
            .string()
            .optional()
            .describe('Case-insensitive operationId substring, e.g. "retrieveForm".'),
        detail: z
            .enum(["summary", "full"])
            .optional()
            .describe('Default "summary" (method, path, summary, tags). Use "full" for parameters and request body - narrow your filters first, it is much larger.'),
        limit: z
            .number()
            .int()
            .optional()
            .describe(`Max operations to return. Default ${DEFAULT_SPEC_RESULTS}, hard cap ${MAX_SPEC_RESULTS}.`),
    };
    server.tool("get_api_spec", description, inputSchema, async (input) => {
        try {
            const api = (input.api ?? "core");
            const detail = (input.detail ?? "summary");
            const limit = Math.max(1, Math.min(input.limit ?? DEFAULT_SPEC_RESULTS, MAX_SPEC_RESULTS));
            const tag = input.tag?.toLowerCase();
            const pathFilter = input.path?.toLowerCase();
            const methodFilter = input.method?.toUpperCase();
            const operationIdFilter = input.operationId?.toLowerCase();
            const matches = runtime.operations.filter((op) => {
                if (api !== "all" && op.api !== api)
                    return false;
                if (tag && !op.tags.some((candidate) => candidate.toLowerCase().includes(tag)))
                    return false;
                if (pathFilter && !op.path.toLowerCase().includes(pathFilter))
                    return false;
                if (methodFilter && op.method !== methodFilter)
                    return false;
                if (operationIdFilter && !op.operationId.toLowerCase().includes(operationIdFilter))
                    return false;
                return true;
            });
            matches.sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method));
            const page = matches.slice(0, limit);
            return ok({
                matched: matches.length,
                returned: page.length,
                truncated: matches.length > page.length,
                hint: matches.length > page.length
                    ? "More operations matched than were returned. Narrow with tag/path/method or raise limit."
                    : undefined,
                baseUrls: {
                    core: runtime.specs.core?.servers?.[0]?.url,
                    integrator: runtime.specs.integrator?.servers?.[0]?.url,
                },
                availableTags: input.tag ? undefined : collectTags(runtime, api),
                operations: page.map((op) => describeOperation(op, detail, page.length <= MAX_FULL_BODY_SCHEMAS)),
            });
        }
        catch (error) {
            return fail(error.message);
        }
    });
}
function collectTags(runtime, api) {
    const tags = new Set();
    for (const op of runtime.operations) {
        if (api !== "all" && op.api !== api)
            continue;
        for (const tag of op.tags)
            tags.add(tag);
    }
    return [...tags].sort();
}
/**
 * Replaces everything below `maxDepth` with a visible marker, so a large schema
 * shrinks without ever silently looking complete.
 */
function pruneSchema(node, maxDepth, depth = 0) {
    if (node === null || typeof node !== "object")
        return node;
    if (Array.isArray(node))
        return node.map((item) => pruneSchema(item, maxDepth, depth));
    if (depth >= maxDepth)
        return { truncated: "nesting elided - see oas/*.json for the full schema" };
    const out = {};
    for (const [key, value] of Object.entries(node)) {
        // `properties` / `oneOf` containers are bookkeeping, not a schema level.
        const nextDepth = key === "properties" || key === "oneOf" || key === "anyOf" || key === "allOf" ? depth : depth + 1;
        out[key] = pruneSchema(value, maxDepth, nextDepth);
    }
    return out;
}
/** The resolved body schema, shrunk until it fits the budget. */
function fitBodySchema(schema) {
    if (JSON.stringify(schema).length <= MAX_BODY_SCHEMA_CHARS)
        return schema;
    for (const depth of [6, 5, 4, 3, 2]) {
        const pruned = pruneSchema(schema, depth);
        if (JSON.stringify(pruned).length <= MAX_BODY_SCHEMA_CHARS)
            return pruned;
    }
    return pruneSchema(schema, 1);
}
function describeOperation(op, detail, includeBodySchema) {
    const base = {
        api: op.api,
        method: op.method,
        path: op.path,
        operationId: op.operationId,
        // The tool name this operation carries in contexts/full mode.
        toolName: toSnakeName(op.operationId),
        summary: clamp(op.summary, 200),
        tags: op.tags,
    };
    if (detail === "summary")
        return base;
    return {
        ...base,
        description: clamp(op.description, 1200),
        parameters: (op.parameters ?? [])
            .filter((param) => param?.name)
            .map((param) => ({
            name: param.name,
            in: param.in,
            required: Boolean(param.required),
            type: param.schema?.type,
            enum: param.schema?.enum,
            description: clamp(param.description, 400),
        })),
        requestBody: op.requestBody
            ? {
                required: Boolean(op.requestBody.required),
                description: clamp(op.requestBody.description, 400),
                mediaTypes: Object.keys(op.requestBody.content ?? {}),
                // `$ref`s already followed, so this is readable without the spec file.
                schema: includeBodySchema && op.requestBodySchema ? fitBodySchema(op.requestBodySchema) : undefined,
                schemaOmitted: !includeBodySchema && op.requestBodySchema
                    ? `Narrow to ${MAX_FULL_BODY_SCHEMAS} operations or fewer (e.g. operationId=${op.operationId}) to get the body schema.`
                    : undefined,
            }
            : undefined,
    };
}
// ── execute_api ─────────────────────────────────────────────────────────────
export function registerExecuteApi(server, runtime) {
    const coreBase = runtime.specs.core?.servers?.[0]?.url ?? "{serverUrl}/app/api/v1";
    const integratorBase = runtime.specs.integrator?.servers?.[0]?.url ?? "{serverUrl}/app/integrator";
    const description = "Universal escape hatch: perform any request against the Kinetic Core or Integrator API using the current session's " +
        "credentials. `path` is relative to the API base URL " +
        `(core: ${coreBase}, integrator: ${integratorBase}), ` +
        'so use "/kapps/services/forms", NOT a full URL. Path parameters must already be substituted. ' +
        "Use `get_api_spec` first to find the method, path, parameters and body shape. This covers every operation in the " +
        "API, including endpoints that have no dedicated tool.";
    const inputSchema = {
        method: z
            .enum(HTTP_METHODS)
            .describe("HTTP method."),
        path: z
            .string()
            .describe('API path relative to the base URL with path params already filled in, e.g. "/kapps/services/forms/my-form".'),
        api: z
            .enum(["core", "integrator"])
            .optional()
            .describe('Which API to target. Default "core".'),
        query: z
            .record(z.string(), z.any())
            .optional()
            .describe('Query string parameters, e.g. { "include": "fields,pages", "limit": 25 }.'),
        body: z.any().optional().describe("JSON request body. Ignored for GET."),
    };
    server.tool("execute_api", description, inputSchema, async (input, extra) => {
        try {
            const api = (input.api ?? "core");
            const rawPath = String(input.path ?? "").trim();
            if (!rawPath)
                return fail("`path` is required, e.g. \"/kapps\".");
            if (/^https?:\/\//i.test(rawPath)) {
                return fail("`path` must be relative to the API base URL, not an absolute URL. Use \"/kapps/services/forms\" instead.");
            }
            if (rawPath.includes("{")) {
                return fail(`\`path\` still contains an unsubstituted path parameter: ${rawPath}. Replace {placeholders} with real values.`);
            }
            const path = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
            const client = await runtime.getClient(sessionOf(extra), api);
            const result = await client.request(input.method, path, {
                query: input.query,
                body: input.body,
            });
            return ok(result);
        }
        catch (error) {
            return fail(error.message);
        }
    });
}
// ── discovery conveniences ──────────────────────────────────────────────────
function registerDiscoveryTools(server, runtime) {
    registerOperationBackedTool(server, runtime, "list_kapps", "listKapps", "List the Kapps in the connected Kinetic space. Start here when you do not know the kappSlug.", {
        include: z.string().optional().describe('Comma-separated properties to include, e.g. "details,attributes".'),
        limit: z.number().int().optional().describe("Max Kapps to return."),
        q: z.string().optional().describe("Kinetic query filter expression."),
    });
    registerOperationBackedTool(server, runtime, "list_forms", "listForms", "List the forms in a Kapp. Use `list_kapps` first if you do not know the kappSlug.", {
        kappSlug: z.string().describe("The slug of the Kapp, e.g. \"services\"."),
        include: z.string().optional().describe('Comma-separated properties to include, e.g. "details,attributes".'),
        limit: z.number().int().optional().describe("Max forms to return."),
        q: z.string().optional().describe('Kinetic query filter expression, e.g. \'name =* "Onboard"\'.'),
        archived: z.boolean().optional().describe("Include archived forms."),
        pageToken: z.string().optional().describe("Pagination token from a previous response."),
    });
    registerOperationBackedTool(server, runtime, "get_form", "retrieveForm", "Retrieve a single form definition, including its fields, pages and attributes when requested via `include`.", {
        kappSlug: z.string().describe("The slug of the Kapp."),
        formSlug: z.string().describe("The slug of the form."),
        include: z
            .string()
            .optional()
            .describe('Comma-separated properties, e.g. "fields,pages,attributes,indexDefinitions".'),
    });
    // Routes to the form-scoped or kapp-scoped list operation depending on whether formSlug is supplied.
    registerSearchSubmissions(server, runtime);
    registerOperationBackedTool(server, runtime, "get_submission", "retrieveSubmission", "Retrieve a single submission by id, including its values when requested via `include`.", {
        submissionId: z.string().describe("The submission id (UUID)."),
        include: z
            .string()
            .optional()
            .describe('Comma-separated properties, e.g. "values,details,form,activities".'),
    });
}
function registerSearchSubmissions(server, runtime) {
    const formScoped = runtime.operations.find((op) => op.operationId === "listFormSubmissions");
    const kappScoped = runtime.operations.find((op) => op.operationId === "listKappSubmissions");
    if (!formScoped || !kappScoped) {
        console.error("kinetic-platform-mcp: skipping slim tool \"search_submissions\" - listFormSubmissions/listKappSubmissions missing from the bundled specs.");
        return;
    }
    const description = "Search submissions in a Kapp, or in a single form when `formSlug` is given. Supply a Kinetic query in `q` " +
        '(e.g. \'values[Status] = "Open"\') and `include=values` to see submission data. Note that querying on a ' +
        "values[...] field requires a matching index definition on the form.";
    const inputSchema = {
        kappSlug: z.string().describe("The slug of the Kapp."),
        formSlug: z
            .string()
            .optional()
            .describe("Optional form slug. When omitted, searches across all forms in the Kapp."),
        q: z
            .string()
            .optional()
            .describe('Kinetic query filter, e.g. \'values[Status] = "Open"\' or \'submittedBy = "user@example.com"\'.'),
        include: z.string().optional().describe('Comma-separated properties, e.g. "values,details,form".'),
        limit: z.number().int().optional().describe("Max submissions to return."),
        orderBy: z.string().optional().describe("Field to order by."),
        direction: z.string().optional().describe('"ASC" or "DESC".'),
        pageToken: z.string().optional().describe("Pagination token from a previous response."),
    };
    server.tool("search_submissions", description, inputSchema, async (input, extra) => {
        try {
            const op = input.formSlug ? formScoped : kappScoped;
            const result = await runtime.invokeDefaultOperation(sessionOf(extra), op, input);
            return ok(result);
        }
        catch (error) {
            return fail(error.message);
        }
    });
}
