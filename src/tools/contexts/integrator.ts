// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ContextToolRuntime, requireOperation } from "./shared.js";

export function registerIntegratorTools(server: McpServer, runtime: ContextToolRuntime): void {
  const { operationMap, invokeDefaultOperation } = runtime;

  const opCreateConnection = requireOperation(operationMap, "createConnection");
  const operationDescriptionCreateConnection = "[integrator] Create a connection. (POST /api/connections). Operation ID: createConnection. Custom logic: default OAS execution.";
  const aliasDescriptionCreateConnection = "[integrator] Create a connection. (POST /api/connections). Operation ID: createConnection. Custom logic: default OAS execution. Use this alias for POST /api/connections. Tags: connections. Required inputs: none. Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateConnection = {
    body: z.any().describe("Connection params").optional(),
  };
  const executeCreateConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/connections
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_createConnection", operationDescriptionCreateConnection, inputSchemaCreateConnection, executeCreateConnection);
  server.tool("create_connection", aliasDescriptionCreateConnection, inputSchemaCreateConnection, executeCreateConnection);

  const opCreateOperation = requireOperation(operationMap, "createOperation");
  const operationDescriptionCreateOperation = "[integrator] Create an operation. (POST /api/connections/{connection_id}/operations). Operation ID: createOperation. Custom logic: default OAS execution.";
  const aliasDescriptionCreateOperation = "[integrator] Create an operation. (POST /api/connections/{connection_id}/operations). Operation ID: createOperation. Custom logic: default OAS execution. Use this alias for POST /api/connections/{connection_id}/operations. Tags: operations. Required inputs: connection_id (path). Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateOperation = {
    connection_id: z.string().describe("Connection Id"),
    body: z.any().describe("Operation params").optional(),
  };
  const executeCreateOperation = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/connections/{connection_id}/operations
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateOperation, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_createOperation", operationDescriptionCreateOperation, inputSchemaCreateOperation, executeCreateOperation);
  server.tool("create_operation", aliasDescriptionCreateOperation, inputSchemaCreateOperation, executeCreateOperation);

  const opDeleteConnection = requireOperation(operationMap, "deleteConnection");
  const operationDescriptionDeleteConnection = "[integrator] Delete a connection. (DELETE /api/connections/{id}). Operation ID: deleteConnection. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteConnection = "[integrator] Delete a connection. (DELETE /api/connections/{id}). Operation ID: deleteConnection. Custom logic: default OAS execution. Use this alias for DELETE /api/connections/{id}. Tags: connections. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteConnection = {
    id: z.string().describe("Connection Id"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /api/connections/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_deleteConnection", operationDescriptionDeleteConnection, inputSchemaDeleteConnection, executeDeleteConnection);
  server.tool("delete_connection", aliasDescriptionDeleteConnection, inputSchemaDeleteConnection, executeDeleteConnection);

  const opDeleteOperation = requireOperation(operationMap, "deleteOperation");
  const operationDescriptionDeleteOperation = "[integrator] Delete an operation. (DELETE /api/connections/{connection_id}/operations/{id}). Operation ID: deleteOperation. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteOperation = "[integrator] Delete an operation. (DELETE /api/connections/{connection_id}/operations/{id}). Operation ID: deleteOperation. Custom logic: default OAS execution. Use this alias for DELETE /api/connections/{connection_id}/operations/{id}. Tags: operations. Required inputs: id (path), connection_id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteOperation = {
    id: z.string().describe("Operation Id"),
    connection_id: z.string().describe("Connection Id"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteOperation = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /api/connections/{connection_id}/operations/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteOperation, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_deleteOperation", operationDescriptionDeleteOperation, inputSchemaDeleteOperation, executeDeleteOperation);
  server.tool("delete_operation", aliasDescriptionDeleteOperation, inputSchemaDeleteOperation, executeDeleteOperation);

  const opExecuteOperation = requireOperation(operationMap, "executeOperation");
  const operationDescriptionExecuteOperation = "[integrator] Execute an operation. (POST /api/execute). Operation ID: executeOperation. Custom logic: default OAS execution.";
  const aliasDescriptionExecuteOperation = "[integrator] Execute an operation. (POST /api/execute). Operation ID: executeOperation. Custom logic: default OAS execution. Use this alias for POST /api/execute. Tags: executions. Required inputs: none. Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaExecuteOperation = {
    debug: z.string().optional().describe("Debug the execution and return the raw response"),
    body: z.any().describe("Operation params").optional(),
  };
  const executeExecuteOperation = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/execute
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opExecuteOperation, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_executeOperation", operationDescriptionExecuteOperation, inputSchemaExecuteOperation, executeExecuteOperation);
  server.tool("execute_operation", aliasDescriptionExecuteOperation, inputSchemaExecuteOperation, executeExecuteOperation);

  const opExportConnection = requireOperation(operationMap, "exportConnection");
  const operationDescriptionExportConnection = "[integrator] Export a connection and operations. (GET /api/export/connections/{id}). Operation ID: exportConnection. Custom logic: default OAS execution.";
  const aliasDescriptionExportConnection = "[integrator] Export a connection and operations. (GET /api/export/connections/{id}). Operation ID: exportConnection. Custom logic: default OAS execution. Use this alias for GET /api/export/connections/{id}. Tags: connections. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaExportConnection = {
    id: z.string().describe("Connection ID"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeExportConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /api/export/connections/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opExportConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_exportConnection", operationDescriptionExportConnection, inputSchemaExportConnection, executeExportConnection);
  server.tool("export_connection", aliasDescriptionExportConnection, inputSchemaExportConnection, executeExportConnection);

  const opImportConnection = requireOperation(operationMap, "importConnection");
  const operationDescriptionImportConnection = "[integrator] Import a connection. (POST /api/import/connections). Operation ID: importConnection. Custom logic: default OAS execution.";
  const aliasDescriptionImportConnection = "[integrator] Import a connection. (POST /api/import/connections). Operation ID: importConnection. Custom logic: default OAS execution. Use this alias for POST /api/import/connections. Tags: connections. Required inputs: none. Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaImportConnection = {
    force: z.boolean().optional().describe("Whether to force an overwrite to an existing connection with the same ID"),
    body: z.any().describe("Connection params").optional(),
  };
  const executeImportConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/import/connections
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opImportConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_importConnection", operationDescriptionImportConnection, inputSchemaImportConnection, executeImportConnection);
  server.tool("import_connection", aliasDescriptionImportConnection, inputSchemaImportConnection, executeImportConnection);

  const opImportOperations = requireOperation(operationMap, "importOperations");
  const operationDescriptionImportOperations = "[integrator] Import operations. (POST /api/import/connections/{connection_id}/operations). Operation ID: importOperations. Custom logic: default OAS execution.";
  const aliasDescriptionImportOperations = "[integrator] Import operations. (POST /api/import/connections/{connection_id}/operations). Operation ID: importOperations. Custom logic: default OAS execution. Use this alias for POST /api/import/connections/{connection_id}/operations. Tags: operations. Required inputs: connection_id (path). Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaImportOperations = {
    connection_id: z.string().describe("Connection ID"),
    force: z.boolean().optional().describe("Whether to force an overwrite to an existing operation with the same ID"),
    body: z.any().describe("Operations").optional(),
  };
  const executeImportOperations = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/import/connections/{connection_id}/operations
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opImportOperations, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_importOperations", operationDescriptionImportOperations, inputSchemaImportOperations, executeImportOperations);
  server.tool("import_operations", aliasDescriptionImportOperations, inputSchemaImportOperations, executeImportOperations);

  const opInspectOperation = requireOperation(operationMap, "inspectOperation");
  const operationDescriptionInspectOperation = "[integrator] Inspect an operation. (POST /api/inspect). Operation ID: inspectOperation. Custom logic: default OAS execution.";
  const aliasDescriptionInspectOperation = "[integrator] Inspect an operation. (POST /api/inspect). Operation ID: inspectOperation. Custom logic: default OAS execution. Use this alias for POST /api/inspect. Tags: inspect. Required inputs: none. Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaInspectOperation = {
    body: z.any().describe("Operation params").optional(),
  };
  const executeInspectOperation = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/inspect
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opInspectOperation, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_inspectOperation", operationDescriptionInspectOperation, inputSchemaInspectOperation, executeInspectOperation);
  server.tool("inspect_operation", aliasDescriptionInspectOperation, inputSchemaInspectOperation, executeInspectOperation);

  const opIntegratorHealth = requireOperation(operationMap, "integratorHealth");
  const operationDescriptionIntegratorHealth = "[integrator] Health. (GET /api/healthz). Operation ID: integratorHealth. Custom logic: default OAS execution.";
  const aliasDescriptionIntegratorHealth = "[integrator] Health. (GET /api/healthz). Operation ID: integratorHealth. Custom logic: default OAS execution. Use this alias for GET /api/healthz. Tags: metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaIntegratorHealth = {
    body: z.any().describe("Request body payload").optional(),
  };
  const executeIntegratorHealth = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /api/healthz
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opIntegratorHealth, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_integratorHealth", operationDescriptionIntegratorHealth, inputSchemaIntegratorHealth, executeIntegratorHealth);
  server.tool("integrator_health", aliasDescriptionIntegratorHealth, inputSchemaIntegratorHealth, executeIntegratorHealth);

  const opIntegratorVersion = requireOperation(operationMap, "integratorVersion");
  const operationDescriptionIntegratorVersion = "[integrator] Version. (GET /api/version). Operation ID: integratorVersion. Custom logic: default OAS execution.";
  const aliasDescriptionIntegratorVersion = "[integrator] Version. (GET /api/version). Operation ID: integratorVersion. Custom logic: default OAS execution. Use this alias for GET /api/version. Tags: metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaIntegratorVersion = {
    body: z.any().describe("Request body payload").optional(),
  };
  const executeIntegratorVersion = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /api/version
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opIntegratorVersion, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_integratorVersion", operationDescriptionIntegratorVersion, inputSchemaIntegratorVersion, executeIntegratorVersion);
  server.tool("integrator_version", aliasDescriptionIntegratorVersion, inputSchemaIntegratorVersion, executeIntegratorVersion);

  const opListConnections = requireOperation(operationMap, "listConnections");
  const operationDescriptionListConnections = "[integrator] Retrieve connections. (GET /api/connections). Operation ID: listConnections. Custom logic: default OAS execution.";
  const aliasDescriptionListConnections = "[integrator] Retrieve connections. (GET /api/connections). Operation ID: listConnections. Custom logic: default OAS execution. Use this alias for GET /api/connections. Tags: connections. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListConnections = {
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListConnections = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /api/connections
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListConnections, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_listConnections", operationDescriptionListConnections, inputSchemaListConnections, executeListConnections);
  server.tool("list_connections", aliasDescriptionListConnections, inputSchemaListConnections, executeListConnections);

  const opListOperations = requireOperation(operationMap, "listOperations");
  const operationDescriptionListOperations = "[integrator] Retrieve operations. (GET /api/connections/{connection_id}/operations). Operation ID: listOperations. Custom logic: default OAS execution.";
  const aliasDescriptionListOperations = "[integrator] Retrieve operations. (GET /api/connections/{connection_id}/operations). Operation ID: listOperations. Custom logic: default OAS execution. Use this alias for GET /api/connections/{connection_id}/operations. Tags: operations. Required inputs: connection_id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListOperations = {
    connection_id: z.string().describe("Connection Id"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListOperations = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /api/connections/{connection_id}/operations
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListOperations, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_listOperations", operationDescriptionListOperations, inputSchemaListOperations, executeListOperations);
  server.tool("list_operations", aliasDescriptionListOperations, inputSchemaListOperations, executeListOperations);

  const opPatchConnection = requireOperation(operationMap, "patchConnection");
  const operationDescriptionPatchConnection = "[integrator] Update a connection. (PATCH /api/connections/{id}). Operation ID: patchConnection. Custom logic: default OAS execution.";
  const aliasDescriptionPatchConnection = "[integrator] Update a connection. (PATCH /api/connections/{id}). Operation ID: patchConnection. Custom logic: default OAS execution. Use this alias for PATCH /api/connections/{id}. Tags: connections. Required inputs: id (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaPatchConnection = {
    id: z.string().describe("Connection Id"),
    body: z.any().describe("Connection params"),
  };
  const executePatchConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PATCH /api/connections/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opPatchConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_patchConnection", operationDescriptionPatchConnection, inputSchemaPatchConnection, executePatchConnection);
  server.tool("patch_connection", aliasDescriptionPatchConnection, inputSchemaPatchConnection, executePatchConnection);

  const opPatchOperation = requireOperation(operationMap, "patchOperation");
  const operationDescriptionPatchOperation = "[integrator] Update an operation. (PATCH /api/connections/{connection_id}/operations/{id}). Operation ID: patchOperation. Custom logic: default OAS execution.";
  const aliasDescriptionPatchOperation = "[integrator] Update an operation. (PATCH /api/connections/{connection_id}/operations/{id}). Operation ID: patchOperation. Custom logic: default OAS execution. Use this alias for PATCH /api/connections/{connection_id}/operations/{id}. Tags: operations. Required inputs: connection_id (path), id (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaPatchOperation = {
    connection_id: z.string().describe("Connection Id"),
    id: z.string().describe("Operation Id"),
    body: z.any().describe("Operation params"),
  };
  const executePatchOperation = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PATCH /api/connections/{connection_id}/operations/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opPatchOperation, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_patchOperation", operationDescriptionPatchOperation, inputSchemaPatchOperation, executePatchOperation);
  server.tool("patch_operation", aliasDescriptionPatchOperation, inputSchemaPatchOperation, executePatchOperation);

  const opRestartConnection = requireOperation(operationMap, "restartConnection");
  const operationDescriptionRestartConnection = "[integrator] Restart connection. (POST /api/connections/{id}/restart). Operation ID: restartConnection. Custom logic: default OAS execution.";
  const aliasDescriptionRestartConnection = "[integrator] Restart connection. (POST /api/connections/{id}/restart). Operation ID: restartConnection. Custom logic: default OAS execution. Use this alias for POST /api/connections/{id}/restart. Tags: connections. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRestartConnection = {
    id: z.string().describe("Connection ID"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRestartConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/connections/{id}/restart
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRestartConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_restartConnection", operationDescriptionRestartConnection, inputSchemaRestartConnection, executeRestartConnection);
  server.tool("restart_connection", aliasDescriptionRestartConnection, inputSchemaRestartConnection, executeRestartConnection);

  const opRetrieveConnection = requireOperation(operationMap, "retrieveConnection");
  const operationDescriptionRetrieveConnection = "[integrator] Show connection. (GET /api/connections/{id}). Operation ID: retrieveConnection. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveConnection = "[integrator] Show connection. (GET /api/connections/{id}). Operation ID: retrieveConnection. Custom logic: default OAS execution. Use this alias for GET /api/connections/{id}. Tags: connections. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveConnection = {
    id: z.string().describe("Connection ID"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /api/connections/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_retrieveConnection", operationDescriptionRetrieveConnection, inputSchemaRetrieveConnection, executeRetrieveConnection);
  server.tool("retrieve_connection", aliasDescriptionRetrieveConnection, inputSchemaRetrieveConnection, executeRetrieveConnection);

  const opRetrieveOperation = requireOperation(operationMap, "retrieveOperation");
  const operationDescriptionRetrieveOperation = "[integrator] Show operation. (GET /api/connections/{connection_id}/operations/{id}). Operation ID: retrieveOperation. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveOperation = "[integrator] Show operation. (GET /api/connections/{connection_id}/operations/{id}). Operation ID: retrieveOperation. Custom logic: default OAS execution. Use this alias for GET /api/connections/{connection_id}/operations/{id}. Tags: operations. Required inputs: connection_id (path), id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveOperation = {
    connection_id: z.string().describe("Connection Id"),
    id: z.string().describe("Operation Id"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveOperation = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /api/connections/{connection_id}/operations/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveOperation, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_retrieveOperation", operationDescriptionRetrieveOperation, inputSchemaRetrieveOperation, executeRetrieveOperation);
  server.tool("retrieve_operation", aliasDescriptionRetrieveOperation, inputSchemaRetrieveOperation, executeRetrieveOperation);

  const opRotateEncryptionKey = requireOperation(operationMap, "rotateEncryptionKey");
  const operationDescriptionRotateEncryptionKey = "[integrator] Rotate Encryption Key. (POST /api/rotate-encryption-key). Operation ID: rotateEncryptionKey. Custom logic: default OAS execution.";
  const aliasDescriptionRotateEncryptionKey = "[integrator] Rotate Encryption Key. (POST /api/rotate-encryption-key). Operation ID: rotateEncryptionKey. Custom logic: default OAS execution. Use this alias for POST /api/rotate-encryption-key. Tags: system. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRotateEncryptionKey = {
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRotateEncryptionKey = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/rotate-encryption-key
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRotateEncryptionKey, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_rotateEncryptionKey", operationDescriptionRotateEncryptionKey, inputSchemaRotateEncryptionKey, executeRotateEncryptionKey);
  server.tool("rotate_encryption_key", aliasDescriptionRotateEncryptionKey, inputSchemaRotateEncryptionKey, executeRotateEncryptionKey);

  const opSearchOperations = requireOperation(operationMap, "searchOperations");
  const operationDescriptionSearchOperations = "[integrator] Search operations. (POST /api/operations-search). Operation ID: searchOperations. Custom logic: default OAS execution.";
  const aliasDescriptionSearchOperations = "[integrator] Search operations. (POST /api/operations-search). Operation ID: searchOperations. Custom logic: default OAS execution. Use this alias for POST /api/operations-search. Tags: operations. Required inputs: none. Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaSearchOperations = {
    body: z.any().describe("Operation params").optional(),
  };
  const executeSearchOperations = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/operations-search
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opSearchOperations, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_searchOperations", operationDescriptionSearchOperations, inputSchemaSearchOperations, executeSearchOperations);
  server.tool("search_operations", aliasDescriptionSearchOperations, inputSchemaSearchOperations, executeSearchOperations);

  const opTestSavedConnection = requireOperation(operationMap, "testSavedConnection");
  const operationDescriptionTestSavedConnection = "[integrator] Test saved connection. (POST /api/connections/{id}/test). Operation ID: testSavedConnection. Custom logic: default OAS execution.";
  const aliasDescriptionTestSavedConnection = "[integrator] Test saved connection. (POST /api/connections/{id}/test). Operation ID: testSavedConnection. Custom logic: default OAS execution. Use this alias for POST /api/connections/{id}/test. Tags: connections. Required inputs: id (path). Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaTestSavedConnection = {
    id: z.string().describe("Connection ID"),
    body: z.any().describe("Connection params").optional(),
  };
  const executeTestSavedConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/connections/{id}/test
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opTestSavedConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_testSavedConnection", operationDescriptionTestSavedConnection, inputSchemaTestSavedConnection, executeTestSavedConnection);
  server.tool("test_saved_connection", aliasDescriptionTestSavedConnection, inputSchemaTestSavedConnection, executeTestSavedConnection);

  const opTestTransform = requireOperation(operationMap, "testTransform");
  const operationDescriptionTestTransform = "[integrator] Test Transform Expressions. (POST /api/transform). Operation ID: testTransform. Custom logic: default OAS execution.";
  const aliasDescriptionTestTransform = "[integrator] Test Transform Expressions. (POST /api/transform). Operation ID: testTransform. Custom logic: default OAS execution. Use this alias for POST /api/transform. Tags: transform. Required inputs: none. Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaTestTransform = {
    body: z.any().describe("Transform testing params").optional(),
  };
  const executeTestTransform = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/transform
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opTestTransform, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_testTransform", operationDescriptionTestTransform, inputSchemaTestTransform, executeTestTransform);
  server.tool("test_transform", aliasDescriptionTestTransform, inputSchemaTestTransform, executeTestTransform);

  const opTestUnsavedConnection = requireOperation(operationMap, "testUnsavedConnection");
  const operationDescriptionTestUnsavedConnection = "[integrator] Test unsaved connection configuration. (POST /api/test). Operation ID: testUnsavedConnection. Custom logic: default OAS execution.";
  const aliasDescriptionTestUnsavedConnection = "[integrator] Test unsaved connection configuration. (POST /api/test). Operation ID: testUnsavedConnection. Custom logic: default OAS execution. Use this alias for POST /api/test. Tags: connections. Required inputs: none. Request body: optional. Call `connect` first if a session is not already configured.";
  const inputSchemaTestUnsavedConnection = {
    body: z.any().describe("Connection params").optional(),
  };
  const executeTestUnsavedConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /api/test
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opTestUnsavedConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_testUnsavedConnection", operationDescriptionTestUnsavedConnection, inputSchemaTestUnsavedConnection, executeTestUnsavedConnection);
  server.tool("test_unsaved_connection", aliasDescriptionTestUnsavedConnection, inputSchemaTestUnsavedConnection, executeTestUnsavedConnection);

  const opUpdateConnection = requireOperation(operationMap, "updateConnection");
  const operationDescriptionUpdateConnection = "[integrator] Update a connection. (PUT /api/connections/{id}). Operation ID: updateConnection. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateConnection = "[integrator] Update a connection. (PUT /api/connections/{id}). Operation ID: updateConnection. Custom logic: default OAS execution. Use this alias for PUT /api/connections/{id}. Tags: connections. Required inputs: id (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateConnection = {
    id: z.string().describe("Connection Id"),
    body: z.any().describe("Connection params"),
  };
  const executeUpdateConnection = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /api/connections/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateConnection, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_updateConnection", operationDescriptionUpdateConnection, inputSchemaUpdateConnection, executeUpdateConnection);
  server.tool("update_connection", aliasDescriptionUpdateConnection, inputSchemaUpdateConnection, executeUpdateConnection);

  const opUpdateOperation = requireOperation(operationMap, "updateOperation");
  const operationDescriptionUpdateOperation = "[integrator] Update an operation. (PUT /api/connections/{connection_id}/operations/{id}). Operation ID: updateOperation. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateOperation = "[integrator] Update an operation. (PUT /api/connections/{connection_id}/operations/{id}). Operation ID: updateOperation. Custom logic: default OAS execution. Use this alias for PUT /api/connections/{connection_id}/operations/{id}. Tags: operations. Required inputs: connection_id (path), id (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateOperation = {
    connection_id: z.string().describe("Connection Id"),
    id: z.string().describe("Operation Id"),
    body: z.any().describe("Operation params"),
  };
  const executeUpdateOperation = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /api/connections/{connection_id}/operations/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateOperation, input);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  };

  server.tool("integrator_updateOperation", operationDescriptionUpdateOperation, inputSchemaUpdateOperation, executeUpdateOperation);
  server.tool("update_operation", aliasDescriptionUpdateOperation, inputSchemaUpdateOperation, executeUpdateOperation);

}
