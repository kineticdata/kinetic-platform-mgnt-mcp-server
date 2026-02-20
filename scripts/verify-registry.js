import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

// Verifies that generated context stubs fully cover core.json operations.
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
  misc: "misc.ts",
};

async function main() {
  const projectRoot = process.cwd();
  const manifestPath = path.resolve(projectRoot, "config/operations.manifest.json");
  const contextDir = path.resolve(projectRoot, "src/tools/contexts");
  const corePath = path.resolve(projectRoot, "oas/core.json");

  assert.ok(fs.existsSync(manifestPath), `Missing manifest at ${manifestPath}`);
  assert.ok(fs.existsSync(corePath), `Missing OAS file at ${corePath}`);
  assert.ok(fs.existsSync(contextDir), `Missing contexts dir at ${contextDir}`);

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  assert.ok(Array.isArray(manifest.operations), "Manifest operations array is required");

  const operations = extractOperationIds(JSON.parse(fs.readFileSync(corePath, "utf8")));
  const operationIdSet = new Set(operations);
  assert.equal(manifest.operations.length, operations.length, "Manifest operation count must match OAS operation count");
  assert.equal(manifest.count, operations.length, "Manifest count must match OAS operation count");

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

    assert.ok(
      contextContent.includes(`requireOperation(operationMap, "${op.operationId}")`),
      `Missing operation lookup for ${op.operationId} in ${op.context}`
    );
    assert.ok(
      contextContent.includes(`server.tool("core_${op.operationId}"`),
      `Missing canonical tool registration for ${op.operationId} in ${op.context}`
    );
    assert.ok(
      contextContent.includes(`server.tool("${op.alias}"`),
      `Missing alias tool registration for ${op.operationId} in ${op.context}`
    );
  }

  const totalToolRegistrations = Object.values(CONTEXT_FILE)
    .map((fileName) => fs.readFileSync(path.resolve(contextDir, fileName), "utf8"))
    .reduce((count, content) => count + (content.match(/server\.tool\("/g) ?? []).length, 0);
  assert.equal(totalToolRegistrations, operations.length * 2, "Expected exactly 2 tool registrations per operation");

  console.log(`Registry verification passed for ${operations.length} operations and ${totalToolRegistrations} tool registrations.`);
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
