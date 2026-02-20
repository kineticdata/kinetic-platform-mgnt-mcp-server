// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { OasOperation } from "../../client/oas.js";

export type ContextToolRuntime = {
  operationMap: Map<string, OasOperation>;
  invokeDefaultOperation: (sessionId: string, op: OasOperation, input: any) => Promise<any>;
};

export function requireOperation(operationMap: Map<string, OasOperation>, operationId: string): OasOperation {
  const op = operationMap.get(operationId);
  if (!op) {
    throw new Error(`Missing OAS operation: ${operationId}`);
  }
  return op;
}
