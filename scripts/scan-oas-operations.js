import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

// Reads the generated operations manifest, optionally regenerating first.
async function main() {
  const write = process.argv.includes("--write");
  const projectRoot = process.cwd();
  const manifestPath = path.resolve(projectRoot, "config/operations.manifest.json");
  const generatorPath = path.resolve(projectRoot, "scripts/generate-context-tool-stubs.js");

  if (write) {
    execFileSync(process.execPath, [generatorPath], { stdio: "inherit" });
  }

  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Manifest not found: ${manifestPath}. Run ops:generate-tools first.`);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  console.log(JSON.stringify(manifest, null, 2));
}

main().catch((error) => {
  console.error("Failed to scan operations:", error.message);
  process.exit(1);
});
