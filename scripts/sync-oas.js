import fs from "node:fs";
import path from "node:path";

const sourceDir = process.env.KINETIC_OAS_SOURCE ?? path.resolve(process.cwd(), "../oas");
const destDir = path.resolve(process.cwd(), "oas");

if (!fs.existsSync(sourceDir)) {
  console.error(`Source OAS directory not found: ${sourceDir}`);
  process.exit(1);
}

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter((file) => file.endsWith(".json"));
if (files.length === 0) {
  console.error(`No .json files found in ${sourceDir}`);
  process.exit(1);
}

for (const file of files) {
  const src = path.join(sourceDir, file);
  const dest = path.join(destDir, file);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${file} -> ${destDir}`);
}
