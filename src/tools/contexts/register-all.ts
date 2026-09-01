// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { OasOperation } from "../../client/oas.js";
import { registerSpaceTools } from "./space.js";
import { registerKappTools } from "./kapp.js";
import { registerFormTools } from "./form.js";
import { registerSubmissionTools } from "./submission.js";
import { registerUserTools } from "./user.js";
import { registerTeamTools } from "./team.js";
import { registerModelTools } from "./model.js";
import { registerCategoryTools } from "./category.js";
import { registerFileResourceTools } from "./file-resource.js";
import { registerIntegratorTools } from "./integrator.js";
import { ContextToolRuntime } from "./shared.js";
import { resolveContextAllowlist } from "../tool-config.js";

export type RegisterAllContextToolsArgs = {
  operations: OasOperation[];
  invokeDefaultOperation: ContextToolRuntime['invokeDefaultOperation'];
};

type ContextRegistrar = {
  name: string;
  register: (server: McpServer, runtime: ContextToolRuntime) => void;
};

export const CONTEXT_REGISTRARS: ContextRegistrar[] = [
  { name: "space", register: registerSpaceTools },
  { name: "kapp", register: registerKappTools },
  { name: "form", register: registerFormTools },
  { name: "submission", register: registerSubmissionTools },
  { name: "user", register: registerUserTools },
  { name: "team", register: registerTeamTools },
  { name: "model", register: registerModelTools },
  { name: "category", register: registerCategoryTools },
  { name: "fileResource", register: registerFileResourceTools },
  { name: "integrator", register: registerIntegratorTools },
];

export const CONTEXT_NAMES: string[] = CONTEXT_REGISTRARS.map((entry) => entry.name);

export function registerAllContextTools(server: McpServer, args: RegisterAllContextToolsArgs): void {
  const operationMap = new Map(args.operations.map((op) => [op.operationId, op]));
  const runtime: ContextToolRuntime = {
    operationMap,
    invokeDefaultOperation: args.invokeDefaultOperation,
  };

  // KINETIC_MCP_CONTEXTS allowlist; null means every context.
  const allowed = resolveContextAllowlist(CONTEXT_NAMES);

  for (const entry of CONTEXT_REGISTRARS) {
    if (allowed && !allowed.has(entry.name)) continue;
    entry.register(server, runtime);
  }
}
