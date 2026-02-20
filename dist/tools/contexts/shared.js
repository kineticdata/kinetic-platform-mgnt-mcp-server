export function requireOperation(operationMap, operationId) {
    const op = operationMap.get(operationId);
    if (!op) {
        throw new Error(`Missing OAS operation: ${operationId}`);
    }
    return op;
}
