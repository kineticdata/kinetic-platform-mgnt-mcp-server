import fs from "node:fs";
import path from "node:path";
export function loadOasSpec(oasDir, filename = "core.json") {
    const fullPath = path.join(oasDir, filename);
    if (!fs.existsSync(fullPath)) {
        throw new Error(`Missing OAS file: ${fullPath}`);
    }
    const raw = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(raw);
}
export function loadOasSpecIfExists(oasDir, filename) {
    const fullPath = path.join(oasDir, filename);
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    const raw = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(raw);
}
/** Follows a local JSON pointer (`#/components/...`) into the spec. */
function resolvePointer(ref, spec) {
    const refPath = ref.replace(/^#\//, "").split("/");
    let resolved = spec;
    for (const segment of refPath) {
        resolved = resolved?.[segment];
    }
    return resolved;
}
function resolveParam(param, spec) {
    if (param && typeof param.$ref === "string") {
        return resolvePointer(param.$ref, spec) ?? param;
    }
    return param;
}
/**
 * How many `$ref` hops deep to inline. Body summaries render two schema levels,
 * so a few hops is ample; the cap also bounds the work of expanding the deeply
 * nested Integrator schemas.
 */
const MAX_REF_HOPS = 4;
/**
 * Inlines `$ref`s inside a schema. `seen` holds the refs already followed on
 * THIS branch, so a self-referential schema terminates instead of hanging -
 * cheap insurance, since no cycle is reachable in the specs today.
 */
function derefSchema(node, spec, seen, hops) {
    if (node === null || typeof node !== "object")
        return node;
    if (Array.isArray(node))
        return node.map((item) => derefSchema(item, spec, seen, hops));
    if (typeof node.$ref === "string") {
        if (hops >= MAX_REF_HOPS || seen.has(node.$ref)) {
            // Leave the unresolved marker in place rather than pretending it is a leaf.
            return { $refUnresolved: node.$ref, type: "object" };
        }
        const target = resolvePointer(node.$ref, spec);
        if (!target || typeof target !== "object")
            return node;
        const nextSeen = new Set(seen);
        nextSeen.add(node.$ref);
        const { $ref: _ref, ...siblings } = node;
        return {
            ...derefSchema(target, spec, nextSeen, hops + 1),
            ...derefSchema(siblings, spec, seen, hops),
        };
    }
    const out = {};
    for (const [key, value] of Object.entries(node)) {
        out[key] = derefSchema(value, spec, seen, hops);
    }
    return out;
}
/** The resolved `application/json` body schema for an operation, or undefined. */
function extractRequestBodySchema(requestBody, spec) {
    const schema = requestBody?.content?.["application/json"]?.schema;
    if (!schema || typeof schema !== "object")
        return undefined;
    return derefSchema(schema, spec, new Set(), 0);
}
export function extractOperations(spec, api = "core") {
    const ops = [];
    const paths = spec.paths ?? {};
    for (const [pathKey, methods] of Object.entries(paths)) {
        const pathItemParameters = methods.parameters;
        for (const [method, op] of Object.entries(methods)) {
            const methodLower = method.toLowerCase();
            if (!(["get", "post", "put", "patch", "delete"].includes(methodLower)))
                continue;
            const operation = op;
            const operationId = operation.operationId || `${methodLower}_${pathKey.replace(/\W+/g, "_")}`;
            const parameters = [
                ...(pathItemParameters ?? []),
                ...(operation.parameters ?? []),
            ].map((p) => resolveParam(p, spec));
            ops.push({
                api,
                method: methodLower.toUpperCase(),
                path: pathKey,
                operationId,
                summary: operation.summary,
                description: operation.description,
                tags: operation.tags ?? [],
                parameters,
                requestBody: operation.requestBody,
                requestBodySchema: extractRequestBodySchema(operation.requestBody, spec),
            });
        }
    }
    return ops;
}
