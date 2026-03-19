import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Generates explicit src/tools/contexts/*.ts files from oas/core.json and oas/integrator.json.
// Output is deterministic so diffs represent real API changes.
const CONTEXTS = [
  "space",
  "kapp",
  "form",
  "submission",
  "user",
  "team",
  "model",
  "category",
  "fileResource",
  "integrator",
  "misc",
];

const CONTEXT_RULES = [
  { context: "submission", pathPrefix: "/submissions", priority: 10 },
  { context: "submission", pathRegex: "^/kapps/.*/submissions", priority: 11 },

  { context: "form", pathRegex: "/forms", priority: 20 },
  { context: "form", pathRegex: "/formTypes", priority: 21 },
  { context: "form", pathRegex: "/formAttributeDefinitions", priority: 22 },

  { context: "user", pathRegex: "^/me$", priority: 30 },
  { context: "user", pathPrefix: "/users", priority: 31 },
  { context: "user", pathPrefix: "/userPreferences", priority: 32 },
  { context: "user", pathPrefix: "/userAttributeDefinitions", priority: 33 },
  { context: "user", pathPrefix: "/userInvitationTokens", priority: 34 },
  { context: "user", pathPrefix: "/userProfileAttributeDefinitions", priority: 35 },

  { context: "team", pathPrefix: "/teams", priority: 40 },
  { context: "team", pathPrefix: "/memberships", priority: 41 },
  { context: "team", pathPrefix: "/teamAttributeDefinitions", priority: 42 },

  { context: "model", pathPrefix: "/models", priority: 50 },

  { context: "category", pathRegex: "/categories", priority: 60 },
  { context: "category", pathRegex: "/categorizations", priority: 61 },

  { context: "fileResource", pathPrefix: "/fileResources", priority: 70 },

  { context: "kapp", pathPrefix: "/kapps", priority: 80 },

  { context: "space", pathPrefix: "/backgroundJobs", priority: 90 },
  { context: "space", pathPrefix: "/space", priority: 91 },
  { context: "space", pathPrefix: "/spaceAttributeDefinitions", priority: 92 },
  { context: "space", pathPrefix: "/securityPolicyDefinitions", priority: 93 },
  { context: "space", pathPrefix: "/translations", priority: 94 },
  { context: "space", pathPrefix: "/webApis", priority: 95 },
  { context: "space", pathPrefix: "/webApiImport", priority: 96 },
  { context: "space", pathPrefix: "/webhooks", priority: 97 },
  { context: "space", pathPrefix: "/webhookJobs", priority: 98 },
  { context: "space", pathPrefix: "/workflows", priority: 99 },
  { context: "space", pathPrefix: "/activity", priority: 100 },
  { context: "space", pathPrefix: "/meta", priority: 101 },
  { context: "space", pathPrefix: "/version", priority: 102 },
  { context: "space", pathPrefix: "/license-check", priority: 103 },
  { context: "space", pathPrefix: "/notices", priority: 104 },
  { context: "space", pathPrefix: "/integrations", priority: 105 },

  { context: "space", tag: "Metadata", priority: 2000 },

  // All integrator API operations go to the "integrator" context
  { context: "integrator", api: "integrator", priority: 5 },

  { context: "misc", priority: 9999 },
];

function loadSpec(oasDir, filename) {
  const fullPath = path.join(oasDir, filename);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(fullPath, "utf8"));
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

function extractOperations(spec, api) {
  const operations = [];
  const paths = spec.paths ?? {};

  for (const [pathKey, methods] of Object.entries(paths)) {
    const pathItemParameters = methods.parameters ?? [];

    for (const [method, op] of Object.entries(methods)) {
      const methodLower = method.toLowerCase();
      if (!["get", "post", "put", "patch", "delete"].includes(methodLower)) {
        continue;
      }

      const operation = op;
      const operationId = operation.operationId || `${methodLower}_${pathKey.replace(/\W+/g, "_")}`;
      const parameters = [...pathItemParameters, ...(operation.parameters ?? [])].map((param) => resolveParam(param, spec));

      operations.push({
        api,
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

  return operations;
}

function matchesRule(op, rule) {
  if (rule.api && op.api === rule.api) {
    return true;
  }
  if (rule.api && op.api !== rule.api) {
    return false;
  }
  if (rule.pathPrefix && op.path.startsWith(rule.pathPrefix)) {
    return true;
  }
  if (rule.pathRegex && new RegExp(rule.pathRegex).test(op.path)) {
    return true;
  }
  if (rule.tag && op.tags.some((tag) => tag.toLowerCase() === rule.tag.toLowerCase())) {
    return true;
  }
  return !rule.pathPrefix && !rule.pathRegex && !rule.tag && !rule.api;
}

function resolveContext(op) {
  const sortedRules = [...CONTEXT_RULES].sort((a, b) => a.priority - b.priority);
  for (const rule of sortedRules) {
    if (matchesRule(op, rule)) {
      return rule.context;
    }
  }
  return "misc";
}

function toAliasName(operationId) {
  const snake = operationId
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();

  return /^[a-z]/.test(snake) ? snake : `op_${snake}`;
}

function reserveAlias(baseAlias, usedAliases, operationId) {
  if (!usedAliases.has(baseAlias)) {
    usedAliases.add(baseAlias);
    return baseAlias;
  }

  let suffix = 2;
  let alias = `${baseAlias}_${suffix}`;
  while (usedAliases.has(alias)) {
    suffix += 1;
    alias = `${baseAlias}_${suffix}`;
  }
  usedAliases.add(alias);
  console.warn(`Alias collision detected for ${operationId}. Using alias ${alias}.`);
  return alias;
}

function createRegistry(operations) {
  const usedAliases = new Set(["connect"]);
  const operationIds = new Set();
  const entries = [];

  for (const op of operations) {
    if (operationIds.has(op.operationId)) {
      throw new Error(`Duplicate operationId detected in OAS: ${op.operationId}`);
    }
    operationIds.add(op.operationId);
    const context = resolveContext(op);
    const alias = reserveAlias(toAliasName(op.operationId), usedAliases, op.operationId);
    entries.push({ op, context, alias });
  }

  entries.sort((a, b) => {
    if (a.context === b.context) {
      return a.op.operationId.localeCompare(b.op.operationId);
    }
    return a.context.localeCompare(b.context);
  });

  return entries;
}

function toPascalCase(value) {
  return value
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((segment) => segment[0].toUpperCase() + segment.slice(1))
    .join("");
}

function contextFileName(context) {
  return context === "fileResource" ? "file-resource" : context;
}

function contextFunctionName(context) {
  switch (context) {
    case "fileResource":
      return "registerFileResourceTools";
    case "integrator":
      return "registerIntegratorTools";
    default:
      return `register${context[0].toUpperCase()}${context.slice(1)}Tools`;
  }
}

// Determine the tool name prefix based on the API source
function toolPrefix(op) {
  return op.api === "integrator" ? "integrator" : "core";
}

function renderContextFile(context, entries) {
  const fnName = contextFunctionName(context);
  const lines = [];

  lines.push("// AUTO-GENERATED FILE. Do not edit manually.");
  lines.push("// Regenerate with: npm run ops:generate-tools");
  lines.push('import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";');
  lines.push('import { z } from "zod";');
  lines.push('import { ContextToolRuntime, requireOperation } from "./shared.js";');
  lines.push("");
  lines.push(`export function ${fnName}(server: McpServer, runtime: ContextToolRuntime): void {`);
  lines.push("  const { operationMap, invokeDefaultOperation } = runtime;");
  lines.push("");

  if (entries.length === 0) {
    lines.push("  // No operations currently mapped to this context.");
  } else {
    for (const { op, alias } of entries) {
      const suffix = toPascalCase(op.operationId);
      const prefix = toolPrefix(op);
      lines.push(`  const op${suffix} = requireOperation(operationMap, "${op.operationId}");`);
      lines.push(`  const operationDescription${suffix} = ${asTsString(buildOperationDescription(op, context))};`);
      lines.push(`  const aliasDescription${suffix} = ${asTsString(buildAliasDescription(op, context))};`);
      lines.push(`  const inputSchema${suffix} = ${renderInputSchemaObject(op, "  ")};`);
      lines.push(`  const execute${suffix} = async (input: any, extra: { sessionId?: string } | undefined) => {`);
      lines.push("    try {");
      lines.push(`      // TODO: add custom logic for ${op.method} ${op.path}`);
      lines.push('      const sessionId = extra?.sessionId ?? "stdio";');
      lines.push(`      const result = await invokeDefaultOperation(sessionId, op${suffix}, input);`);
      lines.push("      return {");
      lines.push('        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],');
      lines.push("      };");
      lines.push("    } catch (error: any) {");
      lines.push("      return {");
      lines.push('        content: [{ type: "text" as const, text: `Error: ${error.message}` }],');
      lines.push("        isError: true,");
      lines.push("      };");
      lines.push("    }");
      lines.push("  };");
      lines.push("");
      lines.push(`  server.tool("${prefix}_${op.operationId}", operationDescription${suffix}, inputSchema${suffix}, execute${suffix});`);
      lines.push(`  server.tool("${alias}", aliasDescription${suffix}, inputSchema${suffix}, execute${suffix});`);
      lines.push("");
    }
  }

  lines.push("}");
  lines.push("");
  return lines.join("\n");
}

function asTsString(value) {
  return JSON.stringify(value);
}

function safePropertyName(value) {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(value) ? value : JSON.stringify(value);
}

function renderZodSchema(schema) {
  if (!schema || !schema.type) {
    return "z.any()";
  }

  if (
    schema.enum &&
    Array.isArray(schema.enum) &&
    schema.enum.length > 0 &&
    schema.enum.every((v) => typeof v === "string")
  ) {
    return `z.enum(${JSON.stringify(schema.enum)})`;
  }

  switch (schema.type) {
    case "string":
      return "z.string()";
    case "integer":
      return "z.number().int()";
    case "number":
      return "z.number()";
    case "boolean":
      return "z.boolean()";
    case "array":
      return "z.array(z.any())";
    case "object":
      return "z.record(z.string(), z.any())";
    default:
      return "z.any()";
  }
}

function renderInputSchemaObject(op, indent) {
  const lines = [];
  lines.push("{");

  for (const param of op.parameters ?? []) {
    if (!param || !param.name) continue;
    const schema = renderZodSchema(param.schema);
    const optionalized = param.required ? schema : `${schema}.optional()`;
    const paramDescription = param.description?.trim()
      ? param.description.trim()
      : `${param.in ?? "parameter"} parameter`;
    lines.push(
      `${indent}  ${safePropertyName(param.name)}: ${optionalized}.describe(${asTsString(paramDescription)}),`
    );
  }

  const bodyBase = `z.any().describe(${asTsString(op.requestBody?.description?.trim() || "Request body payload")})`;
  if (op.requestBody?.required) {
    lines.push(`${indent}  body: ${bodyBase},`);
  } else {
    lines.push(`${indent}  body: ${bodyBase}.optional(),`);
  }
  lines.push(`${indent}}`);
  return lines.join("\n");
}

function firstSentence(value) {
  if (!value) return "";
  const normalized = value.replace(/\s+/g, " ").trim();
  const match = normalized.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : normalized;
}

function summarizeText(summary, description, api) {
  const fallback = api === "integrator" ? "Integrator API operation" : "Core API operation";
  const candidate = (summary || "").trim() || firstSentence(description) || fallback;
  const normalized = candidate.replace(/\s+/g, " ").trim();
  const maxLength = 240;
  const clamped =
    normalized.length > maxLength ? `${normalized.slice(0, maxLength - 1).trimEnd()}…` : normalized;
  return clamped.endsWith(".") ? clamped : `${clamped}.`;
}

function buildOperationDescription(op, contextName) {
  const summary = summarizeText(op.summary, op.description, op.api);
  return `[${contextName}] ${summary} (${op.method} ${op.path}). Operation ID: ${op.operationId}. Custom logic: default OAS execution.`;
}

function buildAliasDescription(op, contextName) {
  const operationDescription = buildOperationDescription(op, contextName);
  const tags = op.tags.length ? ` Tags: ${op.tags.join(", ")}.` : "";
  const requiredParams = (op.parameters ?? [])
    .filter((param) => param?.required && param?.name)
    .map((param) => `${param.name} (${param.in ?? "unknown"})`);
  const requiredPart =
    requiredParams.length > 0 ? ` Required inputs: ${requiredParams.join(", ")}.` : " Required inputs: none.";
  const requestBodyRequired = Boolean(op.requestBody?.required);
  const requestBodyPart = requestBodyRequired
    ? " Request body: required."
    : op.requestBody
      ? " Request body: optional."
      : " Request body: not used.";
  return `${operationDescription} Use this alias for ${op.method} ${op.path}.${tags}${requiredPart}${requestBodyPart} Call \`connect\` first if a session is not already configured.`;
}

function renderSharedFile() {
  return [
    "// AUTO-GENERATED FILE. Do not edit manually.",
    "// Regenerate with: npm run ops:generate-tools",
    'import { OasOperation } from "../../client/oas.js";',
    "",
    "export type ContextToolRuntime = {",
    "  operationMap: Map<string, OasOperation>;",
    "  invokeDefaultOperation: (sessionId: string, op: OasOperation, input: any) => Promise<any>;",
    "};",
    "",
    "export function requireOperation(operationMap: Map<string, OasOperation>, operationId: string): OasOperation {",
    "  const op = operationMap.get(operationId);",
    "  if (!op) {",
    '    throw new Error(`Missing OAS operation: ${operationId}`);',
    "  }",
    "  return op;",
    "}",
    "",
  ].join("\n");
}

function renderRegisterAllFile(activeContexts) {
  const imports = [];
  const calls = [];

  for (const context of activeContexts) {
    const fileName = contextFileName(context);
    const fnName = contextFunctionName(context);
    imports.push(`import { ${fnName} } from "./${fileName}.js";`);
    calls.push(`  ${fnName}(server, runtime);`);
  }

  return [
    "// AUTO-GENERATED FILE. Do not edit manually.",
    "// Regenerate with: npm run ops:generate-tools",
    'import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";',
    'import { OasOperation } from "../../client/oas.js";',
    ...imports,
    'import { ContextToolRuntime } from "./shared.js";',
    "",
    "export type RegisterAllContextToolsArgs = {",
    "  operations: OasOperation[];",
    "  invokeDefaultOperation: ContextToolRuntime['invokeDefaultOperation'];",
    "};",
    "",
    "export function registerAllContextTools(server: McpServer, args: RegisterAllContextToolsArgs): void {",
    "  const operationMap = new Map(args.operations.map((op) => [op.operationId, op]));",
    "  const runtime: ContextToolRuntime = {",
    "    operationMap,",
    "    invokeDefaultOperation: args.invokeDefaultOperation,",
    "  };",
    "",
    ...calls,
    "}",
    "",
  ].join("\n");
}

function buildManifest(projectRoot, oasDir, entries) {
  return {
    sources: ["oas/core.json", "oas/integrator.json"],
    count: entries.length,
    operations: entries.map(({ op, context, alias }) => ({
      operationId: op.operationId,
      alias,
      context,
      api: op.api,
      custom: false,
      method: op.method,
      path: op.path,
    })),
  };
}

async function main() {
  const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const oasDir = path.resolve(projectRoot, "oas");

  const coreSpec = loadSpec(oasDir, "core.json");
  if (!coreSpec) {
    throw new Error(`Missing OAS file: ${path.join(oasDir, "core.json")}`);
  }
  const integratorSpec = loadSpec(oasDir, "integrator.json");

  const operations = [
    ...extractOperations(coreSpec, "core"),
    ...(integratorSpec ? extractOperations(integratorSpec, "integrator") : []),
  ];

  const entries = createRegistry(operations);

  const contextsDir = path.resolve(projectRoot, "src/tools/contexts");
  fs.mkdirSync(contextsDir, { recursive: true });

  const grouped = Object.fromEntries(CONTEXTS.map((context) => [context, []]));
  for (const entry of entries) {
    grouped[entry.context].push(entry);
  }

  fs.writeFileSync(path.join(contextsDir, "shared.ts"), renderSharedFile(), "utf8");

  // Only include contexts that have operations
  const activeContexts = CONTEXTS.filter((c) => grouped[c].length > 0);
  fs.writeFileSync(path.join(contextsDir, "register-all.ts"), renderRegisterAllFile(activeContexts), "utf8");

  for (const context of CONTEXTS) {
    const filePath = path.join(contextsDir, `${contextFileName(context)}.ts`);
    const content = renderContextFile(context, grouped[context]);
    fs.writeFileSync(filePath, content, "utf8");
  }

  const manifestPath = path.resolve(projectRoot, "config/operations.manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(buildManifest(projectRoot, oasDir, entries), null, 2) + "\n", "utf8");

  const coreCount = operations.filter((o) => o.api === "core").length;
  const integratorCount = operations.filter((o) => o.api === "integrator").length;
  console.log(`Generated explicit context tool stubs for ${entries.length} operations (core: ${coreCount}, integrator: ${integratorCount}).`);
}

main().catch((error) => {
  console.error("Failed to generate context tools:", error.message);
  process.exit(1);
});
