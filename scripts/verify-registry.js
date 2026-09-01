import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

// Verifies that generated context stubs fully cover all OAS operations.
const CONTEXT_FILE = {
  space: "space.ts",
  kapp: "kapp.ts",
  form: "form.ts",
  submission: "submission.ts",
  user: "user.ts",
  team: "team.ts",
  model: "model.ts",
  category: "category.ts",
  fileResource: "file-resource.ts",
  integrator: "integrator.ts",
  misc: "misc.ts",
};

async function main() {
  const projectRoot = process.cwd();
  const manifestPath = path.resolve(projectRoot, "config/operations.manifest.json");
  const contextDir = path.resolve(projectRoot, "src/tools/contexts");
  const corePath = path.resolve(projectRoot, "oas/core.json");
  const integratorPath = path.resolve(projectRoot, "oas/integrator.json");

  assert.ok(fs.existsSync(manifestPath), `Missing manifest at ${manifestPath}`);
  assert.ok(fs.existsSync(corePath), `Missing OAS file at ${corePath}`);
  assert.ok(fs.existsSync(contextDir), `Missing contexts dir at ${contextDir}`);

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  assert.ok(Array.isArray(manifest.operations), "Manifest operations array is required");

  const coreOperations = extractOperationIds(JSON.parse(fs.readFileSync(corePath, "utf8")));
  const integratorOperations = fs.existsSync(integratorPath)
    ? extractOperationIds(JSON.parse(fs.readFileSync(integratorPath, "utf8")))
    : [];
  const allOperations = [...coreOperations, ...integratorOperations];
  const operationIdSet = new Set(allOperations);

  assert.equal(manifest.operations.length, allOperations.length, "Manifest operation count must match OAS operation count");
  assert.equal(manifest.count, allOperations.length, "Manifest count must match OAS operation count");

  const aliasSet = new Set();
  for (const op of manifest.operations) {
    assert.ok(operationIdSet.has(op.operationId), `Manifest operation missing from OAS: ${op.operationId}`);
    assert.ok(op.alias, `Manifest alias missing for ${op.operationId}`);
    assert.ok(!aliasSet.has(op.alias), `Duplicate alias detected: ${op.alias}`);
    aliasSet.add(op.alias);
  }

  for (const [context, fileName] of Object.entries(CONTEXT_FILE)) {
    const fullPath = path.resolve(contextDir, fileName);
    assert.ok(fs.existsSync(fullPath), `Missing context file for ${context}: ${fullPath}`);
  }

  for (const op of manifest.operations) {
    const contextPath = path.resolve(contextDir, CONTEXT_FILE[op.context]);
    assert.ok(contextPath, `Unknown context in manifest: ${op.context}`);
    const contextContent = fs.readFileSync(contextPath, "utf8");

    const prefix = op.api === "integrator" ? "integrator" : "core";

    assert.ok(
      contextContent.includes(`requireOperation(operationMap, "${op.operationId}")`),
      `Missing operation lookup for ${op.operationId} in ${op.context}`
    );
    // Both names are declared in a single registerOperationTool call; which one is
    // actually registered at runtime is decided by KINETIC_MCP_TOOL_NAMES.
    assert.ok(
      contextContent.includes(`registerOperationTool(server, "${prefix}_${op.operationId}", "${op.alias}"`),
      `Missing registerOperationTool registration for ${op.operationId} in ${op.context}`
    );
  }

  const contextContents = Object.values(CONTEXT_FILE).map((fileName) =>
    fs.readFileSync(path.resolve(contextDir, fileName), "utf8")
  );

  const totalRegistrations = contextContents.reduce(
    (count, content) => count + (content.match(/registerOperationTool\(server, "/g) ?? []).length,
    0
  );
  assert.equal(
    totalRegistrations,
    allOperations.length,
    "Expected exactly 1 registerOperationTool call per operation"
  );

  // The de-duplication fix: generated files must not call server.tool directly any more.
  const strayDirectRegistrations = contextContents.reduce(
    (count, content) => count + (content.match(/server\.tool\("/g) ?? []).length,
    0
  );
  assert.equal(
    strayDirectRegistrations,
    0,
    "Generated context files must register through registerOperationTool, not server.tool"
  );

  // shared.ts is the single place tool naming is decided.
  const sharedContent = fs.readFileSync(path.resolve(contextDir, "shared.ts"), "utf8");
  assert.ok(
    sharedContent.includes("export function registerOperationTool("),
    "shared.ts must export registerOperationTool"
  );
  assert.ok(
    sharedContent.includes("resolveToolNameMode()"),
    "registerOperationTool must honour KINETIC_MCP_TOOL_NAMES via resolveToolNameMode()"
  );

  console.log(
    `Registry verification passed for ${allOperations.length} operations and ${totalRegistrations} registerOperationTool calls.`
  );

  await verifyConsolidatedCoverage(projectRoot, allOperations.length);
}

/**
 * Consolidated mode must route every OAS operation somewhere. Requires a build,
 * so this is skipped (with a notice) when dist/ is absent.
 */
async function verifyConsolidatedCoverage(projectRoot, expectedOperationCount) {
  const consolidatedDist = path.resolve(projectRoot, "dist/tools/consolidated.js");
  const oasDist = path.resolve(projectRoot, "dist/client/oas.js");
  if (!fs.existsSync(consolidatedDist) || !fs.existsSync(oasDist)) {
    console.log("Skipping consolidated coverage check (dist/ not built; run npm run build first).");
    return;
  }

  const { buildFamilies } = await import(pathToFileURL(consolidatedDist).href);
  const { extractOperations, loadOasSpec, loadOasSpecIfExists } = await import(pathToFileURL(oasDist).href);

  const oasDir = path.resolve(projectRoot, "oas");
  const operations = [
    ...extractOperations(loadOasSpec(oasDir, "core.json"), "core"),
    ...(loadOasSpecIfExists(oasDir, "integrator.json")
      ? extractOperations(loadOasSpecIfExists(oasDir, "integrator.json"), "integrator")
      : []),
  ];

  const families = buildFamilies(operations);
  const routed = families.reduce((count, family) => count + family.entries.length, 0);

  assert.equal(
    routed,
    expectedOperationCount,
    `Consolidated mode routes ${routed} operations but the OAS has ${expectedOperationCount}`
  );

  for (const family of families) {
    assert.ok(family.actions.length > 0, `Consolidated family ${family.tool} has no actions`);
    assert.equal(
      family.dispatch.size,
      family.entries.length,
      `Consolidated family ${family.tool} has colliding action routes`
    );
  }

  console.log(
    `Consolidated coverage passed: ${families.length} tools route all ${routed} operations.`
  );
}

function extractOperationIds(spec) {
  const operationIds = [];
  const paths = spec.paths ?? {};
  for (const [pathKey, methods] of Object.entries(paths)) {
    for (const [method, op] of Object.entries(methods)) {
      const methodLower = method.toLowerCase();
      if (!["get", "post", "put", "patch", "delete"].includes(methodLower)) continue;
      const operation = op;
      const operationId = operation.operationId || `${methodLower}_${pathKey.replace(/\W+/g, "_")}`;
      operationIds.push(operationId);
    }
  }
  return operationIds;
}

main().catch((error) => {
  console.error("Registry verification failed:", error.message);
  process.exit(1);
});
