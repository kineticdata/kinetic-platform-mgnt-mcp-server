import fs from "node:fs";
import path from "node:path";

export type OasSpec = {
  openapi: string;
  info?: { title?: string; version?: string };
  servers?: Array<{ url: string; description?: string; variables?: Record<string, { default?: string }> }>;
  tags?: Array<{ name: string; description?: string }>;
  paths?: Record<string, Record<string, any>>;
};

export type OasOperation = {
  method: string;
  path: string;
  operationId: string;
  summary?: string;
  description?: string;
  tags: string[];
  parameters: Array<any>;
  requestBody?: any;
};

export function loadOasSpec(oasDir: string): OasSpec {
  const fullPath = path.join(oasDir, "core.json");
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing OAS file: ${fullPath}`);
  }
  const raw = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(raw);
}

function resolveParam(param: any, spec: OasSpec): any {
  if (param && typeof param.$ref === "string") {
    const refPath = param.$ref.replace(/^#\//, "").split("/");
    let resolved: any = spec;
    for (const segment of refPath) {
      resolved = resolved?.[segment];
    }
    return resolved ?? param;
  }
  return param;
}

export function extractOperations(spec: OasSpec): OasOperation[] {
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
