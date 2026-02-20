import { OasOperation } from "../client/oas.js";
import { KineticApiClient } from "../client/kinetic-client.js";

export type InvocationContext = {
  getClient: (sessionId: string) => KineticApiClient;
};

// Invoke a Core OAS operation using input assembled by generated tool stubs.
export function invokeDefaultOperation(context: InvocationContext, sessionId: string, op: OasOperation, input: any): Promise<any> {
  const path = applyPathParams(op.path, input);
  if (path.includes("{")) {
    throw new Error(`Missing required path parameters for ${op.operationId}`);
  }

  const query = buildQueryParams(op, input);
  const headers = buildHeaderParams(op, input);
  const body = input.body;

  if (op.requestBody?.required && body === undefined) {
    throw new Error(`Request body required for ${op.operationId}`);
  }

  return context.getClient(sessionId).request(op.method, path, { query, headers, body });
}

function applyPathParams(pathTemplate: string, params?: Record<string, any>): string {
  if (!params) return pathTemplate;
  let filled = pathTemplate;
  for (const [key, value] of Object.entries(params)) {
    filled = filled.replaceAll(`{${key}}`, encodeURIComponent(String(value)));
  }
  return filled;
}

function buildQueryParams(op: OasOperation, input: any): Record<string, any> {
  const params: Record<string, any> = {};
  for (const param of op.parameters ?? []) {
    if (param.in !== "query") continue;
    const value = input[param.name];
    if (value !== undefined) {
      params[param.name] = value;
    }
  }
  return params;
}

function buildHeaderParams(op: OasOperation, input: any): Record<string, string> {
  const headers: Record<string, string> = {};
  for (const param of op.parameters ?? []) {
    if (param.in !== "header") continue;
    const value = input[param.name];
    if (value !== undefined) {
      headers[param.name] = String(value);
    }
  }
  return headers;
}
