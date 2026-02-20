import { registerCategoryTools } from "./category.js";
import { registerFileResourceTools } from "./file-resource.js";
import { registerFormTools } from "./form.js";
import { registerKappTools } from "./kapp.js";
import { registerMiscTools } from "./misc.js";
import { registerModelTools } from "./model.js";
import { registerSpaceTools } from "./space.js";
import { registerSubmissionTools } from "./submission.js";
import { registerTeamTools } from "./team.js";
import { registerUserTools } from "./user.js";
export function registerAllContextTools(server, args) {
    const operationMap = new Map(args.operations.map((op) => [op.operationId, op]));
    const runtime = {
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
