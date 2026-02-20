// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { OasOperation } from "../../client/oas.js";
import { registerCategoryTools } from "./category.js";
import { registerFileResourceTools } from "./file-resource.js";
import { registerFormTools } from "./form.js";
import { registerKappTools } from "./kapp.js";
import { registerMiscTools } from "./misc.js";
import { registerModelTools } from "./model.js";
import { registerSpaceTools } from "./space.js";
import { registerSubmissionTools } from "./submission.js";
import { registerTeamTools } from "./team.js";
import { ContextToolRuntime } from "./shared.js";
import { registerUserTools } from "./user.js";

export type RegisterAllContextToolsArgs = {
  operations: OasOperation[];
  invokeDefaultOperation: ContextToolRuntime['invokeDefaultOperation'];
};

export function registerAllContextTools(server: McpServer, args: RegisterAllContextToolsArgs): void {
  const operationMap = new Map(args.operations.map((op) => [op.operationId, op]));
  const runtime: ContextToolRuntime = {
    operationMap,
    invokeDefaultOperation: args.invokeDefaultOperation,
  };

  registerSpaceTools(server, runtime);
  registerKappTools(server, runtime);
  registerFormTools(server, runtime);
  registerSubmissionTools(server, runtime);
  registerUserTools(server, runtime);
  registerTeamTools(server, runtime);
  registerModelTools(server, runtime);
  registerCategoryTools(server, runtime);
  registerFileResourceTools(server, runtime);
  registerMiscTools(server, runtime);
}
