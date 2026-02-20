import fs from "node:fs";
import path from "node:path";
export function loadOasSpec(oasDir) {
    const fullPath = path.join(oasDir, "core.json");
    if (!fs.existsSync(fullPath)) {
        throw new Error(`Missing OAS file: ${fullPath}`);
    }
    const raw = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(raw);
}
function resolveParam(param, spec) {
    if (param && typeof param.$ref === "string") {
        const refPath = param.$ref.replace(/^#\//, "").split("/");
        let resolved = spec;
        for (const segment of refPath) {
            resolved = resolved?.[segment];
        }
        return resolved ?? param;
    }
    return param;
}
export function extractOperations(spec) {
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
                method: methodLower.toUpperCase(),
                path: pathKey,
                operationId,
                summary: operation.summary,
                description: operation.description,
                tags: operation.tags ?? [],
                parameters,
                requestBody: operation.requestBody,
            });
        }
    }
    return ops;
}
