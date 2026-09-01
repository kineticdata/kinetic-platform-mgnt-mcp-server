import fs from "node:fs";
import path from "node:path";

export type KineticApi = "core" | "integrator";

export type OasSpec = {
  openapi: string;
  info?: { title?: string; version?: string };
  servers?: Array<{ url: string; description?: string; variables?: Record<string, { default?: string }> }>;
  tags?: Array<{ name: string; description?: string }>;
  paths?: Record<string, Record<string, any>>;
};

export type OasOperation = {
  api: KineticApi;
  method: string;
  path: string;
  operationId: string;
  summary?: string;
  description?: string;
  tags: string[];
  parameters: Array<any>;
  requestBody?: any;
  /**
   * The `application/json` request body schema with `$ref`s already followed,
   * so consumers never need the spec to read it. Undefined when the operation
   * takes no body, or takes one in another media type (e.g. text/csv).
   */
  requestBodySchema?: any;
};

export function loadOasSpec(oasDir: string, filename: string = "core.json"): OasSpec {
  const fullPath = path.join(oasDir, filename);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing OAS file: ${fullPath}`);
  }
  const raw = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(raw);
}

export function loadOasSpecIfExists(oasDir: string, filename: string): OasSpec | null {
  const fullPath = path.join(oasDir, filename);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const raw = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(raw);
}

/** Follows a local JSON pointer (`#/components/...`) into the spec. */
function resolvePointer(ref: string, spec: OasSpec): any {
  const refPath = ref.replace(/^#\//, "").split("/");
  let resolved: any = spec;
  for (const segment of refPath) {
    resolved = resolved?.[segment];
  }
  return resolved;
}

function resolveParam(param: any, spec: OasSpec): any {
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
function derefSchema(node: any, spec: OasSpec, seen: ReadonlySet<string>, hops: number): any {
  if (node === null || typeof node !== "object") return node;
  if (Array.isArray(node)) return node.map((item) => derefSchema(item, spec, seen, hops));

  if (typeof node.$ref === "string") {
    if (hops >= MAX_REF_HOPS || seen.has(node.$ref)) {
      // Leave the unresolved marker in place rather than pretending it is a leaf.
      return { $refUnresolved: node.$ref, type: "object" };
    }
    const target = resolvePointer(node.$ref, spec);
    if (!target || typeof target !== "object") return node;
    const nextSeen = new Set(seen);
    nextSeen.add(node.$ref);
    const { $ref: _ref, ...siblings } = node;
    return {
      ...derefSchema(target, spec, nextSeen, hops + 1),
      ...derefSchema(siblings, spec, seen, hops),
    };
  }

  const out: Record<string, any> = {};
  for (const [key, value] of Object.entries(node)) {
    out[key] = derefSchema(value, spec, seen, hops);
  }
  return out;
}

/** The resolved `application/json` body schema for an operation, or undefined. */
function extractRequestBodySchema(requestBody: any, spec: OasSpec): any {
  const schema = requestBody?.content?.["application/json"]?.schema;
  if (!schema || typeof schema !== "object") return undefined;
  return derefSchema(schema, spec, new Set<string>(), 0);
}

export function extractOperations(spec: OasSpec, api: KineticApi = "core"): OasOperation[] {
  const ops: OasOperation[] = [];
  const paths = spec.paths ?? {};

  for (const [pathKey, methods] of Object.entries(paths)) {
    const pathItemParameters = (methods as any).parameters as any[] | undefined;
    for (const [method, op] of Object.entries(methods)) {
      const methodLower = method.toLowerCase();
      if (!(["get", "post", "put", "patch", "delete"].includes(methodLower))) continue;

      const operation = op as any;
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
