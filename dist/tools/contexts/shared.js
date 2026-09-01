import { resolveToolNameMode } from "../tool-config.js";
export function requireOperation(operationMap, operationId) {
    const op = operationMap.get(operationId);
    if (!op) {
        throw new Error(`Missing OAS operation: ${operationId}`);
    }
    return op;
}
/**
 * Single choke point for every generated operation registration.
 *
 * Historically each operation was registered twice under identical schema and
 * handler (core_<operationId> and its snake_case alias), doubling the tool
 * surface for zero added capability. KINETIC_MCP_TOOL_NAMES now selects:
 *   alias (default) -> snake_case only, e.g. create_form
 *   core            -> core_<operationId> / integrator_<operationId> only
 *   both            -> legacy behaviour, both names registered
 */
export function registerOperationTool(server, coreName, aliasName, coreDescription, aliasDescription, inputSchema, handler) {
    const nameMode = resolveToolNameMode();
    if (nameMode === "core" || nameMode === "both") {
        server.tool(coreName, coreDescription, inputSchema, handler);
    }
    if (nameMode === "alias" || nameMode === "both") {
        server.tool(aliasName, aliasDescription, inputSchema, handler);
    }
}
