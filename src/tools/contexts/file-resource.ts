// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ContextToolRuntime, requireOperation } from "./shared.js";

export function registerFileResourceTools(server: McpServer, runtime: ContextToolRuntime): void {
  const { operationMap, invokeDefaultOperation } = runtime;

  const opCreateFile = requireOperation(operationMap, "createFile");
  const operationDescriptionCreateFile = "[fileResource] File Create. (POST /fileResources/{fileResourceSlug}/files/{fileResourcePath}). Operation ID: createFile. Custom logic: default OAS execution.";
  const aliasDescriptionCreateFile = "[fileResource] File Create. (POST /fileResources/{fileResourceSlug}/files/{fileResourcePath}). Operation ID: createFile. Custom logic: default OAS execution. Use this alias for POST /fileResources/{fileResourceSlug}/files/{fileResourcePath}. Tags: File Resources. Required inputs: fileResourceSlug (path), fileResourcePath (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateFile = {
    fileResourceSlug: z.string().describe("The slug of the file resource."),
    fileResourcePath: z.string().describe("The path to the desired file.  The format of this path will be dictated by the conventions of the Adapter used to configure the Filestore associated to the File Resource."),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeCreateFile = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /fileResources/{fileResourceSlug}/files/{fileResourcePath}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateFile, input);
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

  server.tool("core_createFile", operationDescriptionCreateFile, inputSchemaCreateFile, executeCreateFile);
  server.tool("create_file", aliasDescriptionCreateFile, inputSchemaCreateFile, executeCreateFile);

  const opCreateFileResource = requireOperation(operationMap, "createFileResource");
  const operationDescriptionCreateFileResource = "[fileResource] File Resource Create. (POST /fileResources). Operation ID: createFileResource. Custom logic: default OAS execution.";
  const aliasDescriptionCreateFileResource = "[fileResource] File Resource Create. (POST /fileResources). Operation ID: createFileResource. Custom logic: default OAS execution. Use this alias for POST /fileResources. Tags: File Resources. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateFileResource = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload"),
  };
  const executeCreateFileResource = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /fileResources
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateFileResource, input);
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

  server.tool("core_createFileResource", operationDescriptionCreateFileResource, inputSchemaCreateFileResource, executeCreateFileResource);
  server.tool("create_file_resource", aliasDescriptionCreateFileResource, inputSchemaCreateFileResource, executeCreateFileResource);

  const opDeleteFile = requireOperation(operationMap, "deleteFile");
  const operationDescriptionDeleteFile = "[fileResource] File Delete. (DELETE /fileResources/{fileResourceSlug}/files/{fileResourcePath}). Operation ID: deleteFile. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteFile = "[fileResource] File Delete. (DELETE /fileResources/{fileResourceSlug}/files/{fileResourcePath}). Operation ID: deleteFile. Custom logic: default OAS execution. Use this alias for DELETE /fileResources/{fileResourceSlug}/files/{fileResourcePath}. Tags: File Resources. Required inputs: fileResourceSlug (path), fileResourcePath (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteFile = {
    fileResourceSlug: z.string().describe("The slug of the file resource."),
    fileResourcePath: z.string().describe("The path to the desired file.  The format of this path will be dictated by the conventions of the Adapter used to configure the Filestore associated to the File Resource."),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteFile = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /fileResources/{fileResourceSlug}/files/{fileResourcePath}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteFile, input);
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

  server.tool("core_deleteFile", operationDescriptionDeleteFile, inputSchemaDeleteFile, executeDeleteFile);
  server.tool("delete_file", aliasDescriptionDeleteFile, inputSchemaDeleteFile, executeDeleteFile);

  const opDeleteFileResource = requireOperation(operationMap, "deleteFileResource");
  const operationDescriptionDeleteFileResource = "[fileResource] File Resource Delete. (DELETE /fileResources/{fileResourceSlug}). Operation ID: deleteFileResource. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteFileResource = "[fileResource] File Resource Delete. (DELETE /fileResources/{fileResourceSlug}). Operation ID: deleteFileResource. Custom logic: default OAS execution. Use this alias for DELETE /fileResources/{fileResourceSlug}. Tags: File Resources. Required inputs: fileResourceSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteFileResource = {
    fileResourceSlug: z.string().describe("The slug of the file resource."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteFileResource = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /fileResources/{fileResourceSlug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteFileResource, input);
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

  server.tool("core_deleteFileResource", operationDescriptionDeleteFileResource, inputSchemaDeleteFileResource, executeDeleteFileResource);
  server.tool("delete_file_resource", aliasDescriptionDeleteFileResource, inputSchemaDeleteFileResource, executeDeleteFileResource);

  const opListFileResources = requireOperation(operationMap, "listFileResources");
  const operationDescriptionListFileResources = "[fileResource] File Resources List. (GET /fileResources). Operation ID: listFileResources. Custom logic: default OAS execution.";
  const aliasDescriptionListFileResources = "[fileResource] File Resources List. (GET /fileResources). Operation ID: listFileResources. Custom logic: default OAS execution. Use this alias for GET /fileResources. Tags: File Resources. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListFileResources = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListFileResources = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /fileResources
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListFileResources, input);
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

  server.tool("core_listFileResources", operationDescriptionListFileResources, inputSchemaListFileResources, executeListFileResources);
  server.tool("list_file_resources", aliasDescriptionListFileResources, inputSchemaListFileResources, executeListFileResources);

  const opRetrieveFile = requireOperation(operationMap, "retrieveFile");
  const operationDescriptionRetrieveFile = "[fileResource] File Retrieve. (GET /fileResources/{fileResourceSlug}/files/{fileResourcePath}). Operation ID: retrieveFile. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveFile = "[fileResource] File Retrieve. (GET /fileResources/{fileResourceSlug}/files/{fileResourcePath}). Operation ID: retrieveFile. Custom logic: default OAS execution. Use this alias for GET /fileResources/{fileResourceSlug}/files/{fileResourcePath}. Tags: File Resources. Required inputs: fileResourceSlug (path), fileResourcePath (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveFile = {
    fileResourceSlug: z.string().describe("The slug of the file resource."),
    fileResourcePath: z.string().describe("The path to the desired file.  The format of this path will be dictated by the conventions of the Adapter used to configure the Filestore associated to the File Resource."),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveFile = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /fileResources/{fileResourceSlug}/files/{fileResourcePath}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveFile, input);
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

  server.tool("core_retrieveFile", operationDescriptionRetrieveFile, inputSchemaRetrieveFile, executeRetrieveFile);
  server.tool("retrieve_file", aliasDescriptionRetrieveFile, inputSchemaRetrieveFile, executeRetrieveFile);

  const opRetrieveFileResource = requireOperation(operationMap, "retrieveFileResource");
  const operationDescriptionRetrieveFileResource = "[fileResource] File Resource Retrieve. (GET /fileResources/{fileResourceSlug}). Operation ID: retrieveFileResource. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveFileResource = "[fileResource] File Resource Retrieve. (GET /fileResources/{fileResourceSlug}). Operation ID: retrieveFileResource. Custom logic: default OAS execution. Use this alias for GET /fileResources/{fileResourceSlug}. Tags: File Resources. Required inputs: fileResourceSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveFileResource = {
    fileResourceSlug: z.string().describe("The slug of the file resource."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveFileResource = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /fileResources/{fileResourceSlug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveFileResource, input);
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

  server.tool("core_retrieveFileResource", operationDescriptionRetrieveFileResource, inputSchemaRetrieveFileResource, executeRetrieveFileResource);
  server.tool("retrieve_file_resource", aliasDescriptionRetrieveFileResource, inputSchemaRetrieveFileResource, executeRetrieveFileResource);

  const opUpdateFileResources = requireOperation(operationMap, "updateFileResources");
  const operationDescriptionUpdateFileResources = "[fileResource] File Resource Update. (PUT /fileResources/{fileResourceSlug}). Operation ID: updateFileResources. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateFileResources = "[fileResource] File Resource Update. (PUT /fileResources/{fileResourceSlug}). Operation ID: updateFileResources. Custom logic: default OAS execution. Use this alias for PUT /fileResources/{fileResourceSlug}. Tags: File Resources. Required inputs: fileResourceSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateFileResources = {
    fileResourceSlug: z.string().describe("The slug of the file resource."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload"),
  };
  const executeUpdateFileResources = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /fileResources/{fileResourceSlug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateFileResources, input);
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

  server.tool("core_updateFileResources", operationDescriptionUpdateFileResources, inputSchemaUpdateFileResources, executeUpdateFileResources);
  server.tool("update_file_resources", aliasDescriptionUpdateFileResources, inputSchemaUpdateFileResources, executeUpdateFileResources);

}
