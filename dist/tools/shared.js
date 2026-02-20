import { buildDescriptions, buildInputSchema } from "./invocation.js";
export function registerContextOperationTools(contextName, args) {
    const { server, entries, invokeDefaultOperation } = args;
    for (const entry of entries) {
        const operationToolName = `core_${entry.op.operationId}`;
        const defaults = buildDescriptions(entry.op, contextName, entry.meta.custom);
        const operationDescription = withOverride(defaults.operationDescription, entry.override.operationDescription, entry.override.additionalContext);
        const aliasDescription = withOverride(defaults.aliasDescription, entry.override.aliasDescription, entry.override.additionalContext);
        server.tool(operationToolName, operationDescription, buildInputSchema(entry.op), async (input, extra) => {
            return executeEntry(entry, invokeDefaultOperation, input, extra?.sessionId ?? "stdio");
        });
        server.tool(entry.meta.alias, aliasDescription, buildInputSchema(entry.op), async (input, extra) => {
            return executeEntry(entry, invokeDefaultOperation, input, extra?.sessionId ?? "stdio");
        });
    }
}
function withOverride(defaultText, overrideText, additionalContext) {
    const base = overrideText?.trim() || defaultText;
    const extra = additionalContext?.trim();
    if (!extra)
        return base;
    return `${base} Additional context: ${extra}`;
}
async function executeEntry(entry, invokeDefaultOperation, input, sessionId) {
    try {
        const invokeDefault = () => invokeDefaultOperation(sessionId, entry.op, input);
        const result = entry.handler
            ? await entry.handler({ sessionId, op: entry.op, input, invokeDefault })
            : await invokeDefault();
        return {
            content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
    }
    catch (error) {
        return {
            content: [{ type: "text", text: `Error: ${error.message}` }],
            isError: true,
        };
    }
}
