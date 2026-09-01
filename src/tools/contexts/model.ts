// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ContextToolRuntime, registerOperationTool, requireOperation } from "./shared.js";

export function registerModelTools(server: McpServer, runtime: ContextToolRuntime): void {
  const { operationMap, invokeDefaultOperation } = runtime;

  const opCreateModel = requireOperation(operationMap, "createModel");
  const operationDescriptionCreateModel = "[model] Model Create. (POST /models). Operation ID: createModel. Custom logic: default OAS execution.";
  const aliasDescriptionCreateModel = "[model] Model Create. (POST /models). Operation ID: createModel. Custom logic: default OAS execution. Use this alias for POST /models. Tags: Models. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateModel = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* mappings\n\n* qualifications\n\n* space\n\n* space.{any Space include property}"),
    body: z.any().describe("The content for the model properties"),
  };
  const executeCreateModel = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /models
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateModel, input);
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

  registerOperationTool(server, "core_createModel", "create_model", operationDescriptionCreateModel, aliasDescriptionCreateModel, inputSchemaCreateModel, executeCreateModel);

  const opCreateModelAttribute = requireOperation(operationMap, "createModelAttribute");
  const operationDescriptionCreateModelAttribute = "[model] Model Attribute Create. (POST /models/{modelName}/attributes). Operation ID: createModelAttribute. Custom logic: default OAS execution.";
  const aliasDescriptionCreateModelAttribute = "[model] Model Attribute Create. (POST /models/{modelName}/attributes). Operation ID: createModelAttribute. Custom logic: default OAS execution. Use this alias for POST /models/{modelName}/attributes. Tags: Models. Required inputs: modelName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateModelAttribute = {
    modelName: z.string().describe("The name of model."),
    body: z.any().describe("The content for the model attribute properties"),
  };
  const executeCreateModelAttribute = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /models/{modelName}/attributes
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateModelAttribute, input);
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

  registerOperationTool(server, "core_createModelAttribute", "create_model_attribute", operationDescriptionCreateModelAttribute, aliasDescriptionCreateModelAttribute, inputSchemaCreateModelAttribute, executeCreateModelAttribute);

  const opCreateModelMapping = requireOperation(operationMap, "createModelMapping");
  const operationDescriptionCreateModelMapping = "[model] Model Mapping Create. (POST /models/{modelName}/mappings). Operation ID: createModelMapping. Custom logic: default OAS execution.";
  const aliasDescriptionCreateModelMapping = "[model] Model Mapping Create. (POST /models/{modelName}/mappings). Operation ID: createModelMapping. Custom logic: default OAS execution. Use this alias for POST /models/{modelName}/mappings. Tags: Models. Required inputs: modelName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateModelMapping = {
    modelName: z.string().describe("The name of model."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* qualifications\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("The content for the model mapping properties"),
  };
  const executeCreateModelMapping = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /models/{modelName}/mappings
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateModelMapping, input);
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

  registerOperationTool(server, "core_createModelMapping", "create_model_mapping", operationDescriptionCreateModelMapping, aliasDescriptionCreateModelMapping, inputSchemaCreateModelMapping, executeCreateModelMapping);

  const opCreateModelMappingAttribute = requireOperation(operationMap, "createModelMappingAttribute");
  const operationDescriptionCreateModelMappingAttribute = "[model] Model Mapping Attribute Create. (POST /models/{modelName}/mappings/{modelMappingName}/attributes). Operation ID: createModelMappingAttribute. Custom logic: default OAS execution.";
  const aliasDescriptionCreateModelMappingAttribute = "[model] Model Mapping Attribute Create. (POST /models/{modelName}/mappings/{modelMappingName}/attributes). Operation ID: createModelMappingAttribute. Custom logic: default OAS execution. Use this alias for POST /models/{modelName}/mappings/{modelMappingName}/attributes. Tags: Models. Required inputs: modelName (path), modelMappingName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateModelMappingAttribute = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    body: z.any().describe("The content for the model mapping properties"),
  };
  const executeCreateModelMappingAttribute = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /models/{modelName}/mappings/{modelMappingName}/attributes
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateModelMappingAttribute, input);
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

  registerOperationTool(server, "core_createModelMappingAttribute", "create_model_mapping_attribute", operationDescriptionCreateModelMappingAttribute, aliasDescriptionCreateModelMappingAttribute, inputSchemaCreateModelMappingAttribute, executeCreateModelMappingAttribute);

  const opCreateModelMappingQualification = requireOperation(operationMap, "createModelMappingQualification");
  const operationDescriptionCreateModelMappingQualification = "[model] Model Mapping Qualification Create. (POST /models/{modelName}/mappings/{modelMappingName}/qualifications). Operation ID: createModelMappingQualification. Custom logic: default OAS execution.";
  const aliasDescriptionCreateModelMappingQualification = "[model] Model Mapping Qualification Create. (POST /models/{modelName}/mappings/{modelMappingName}/qualifications). Operation ID: createModelMappingQualification. Custom logic: default OAS execution. Use this alias for POST /models/{modelName}/mappings/{modelMappingName}/qualifications. Tags: Models. Required inputs: modelName (path), modelMappingName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateModelMappingQualification = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeMapping\n\n* bridgeMapping.{any Model Mapping include property}"),
    body: z.any().describe("The content for the model mapping properties"),
  };
  const executeCreateModelMappingQualification = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /models/{modelName}/mappings/{modelMappingName}/qualifications
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateModelMappingQualification, input);
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

  registerOperationTool(server, "core_createModelMappingQualification", "create_model_mapping_qualification", operationDescriptionCreateModelMappingQualification, aliasDescriptionCreateModelMappingQualification, inputSchemaCreateModelMappingQualification, executeCreateModelMappingQualification);

  const opCreateModelQualification = requireOperation(operationMap, "createModelQualification");
  const operationDescriptionCreateModelQualification = "[model] Model Qualification Create. (POST /models/{modelName}/qualifications). Operation ID: createModelQualification. Custom logic: default OAS execution.";
  const aliasDescriptionCreateModelQualification = "[model] Model Qualification Create. (POST /models/{modelName}/qualifications). Operation ID: createModelQualification. Custom logic: default OAS execution. Use this alias for POST /models/{modelName}/qualifications. Tags: Models. Required inputs: modelName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateModelQualification = {
    modelName: z.string().describe("The name of model."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("The content for the model qualification properties"),
  };
  const executeCreateModelQualification = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /models/{modelName}/qualifications
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateModelQualification, input);
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

  registerOperationTool(server, "core_createModelQualification", "create_model_qualification", operationDescriptionCreateModelQualification, aliasDescriptionCreateModelQualification, inputSchemaCreateModelQualification, executeCreateModelQualification);

  const opCreateModelQualificationParameter = requireOperation(operationMap, "createModelQualificationParameter");
  const operationDescriptionCreateModelQualificationParameter = "[model] Model Qualification Parameter Create. (POST /models/{modelName}/qualifications/{modelQualificationName}/parameters). Operation ID: createModelQualificationParameter. Custom logic: default OAS execution.";
  const aliasDescriptionCreateModelQualificationParameter = "[model] Model Qualification Parameter Create. (POST /models/{modelName}/qualifications/{modelQualificationName}/parameters). Operation ID: createModelQualificationParameter. Custom logic: default OAS execution. Use this alias for POST /models/{modelName}/qualifications/{modelQualificationName}/parameters. Tags: Models. Required inputs: modelName (path), modelQualificationName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateModelQualificationParameter = {
    modelName: z.string().describe("The name of model."),
    modelQualificationName: z.string().describe("The name of the bridge model qualification."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModelQualification\n\n* bridgeModelQualification.{any Model Qualification include property}"),
    body: z.any().describe("The content for the model qualification parameter properties"),
  };
  const executeCreateModelQualificationParameter = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /models/{modelName}/qualifications/{modelQualificationName}/parameters
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateModelQualificationParameter, input);
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

  registerOperationTool(server, "core_createModelQualificationParameter", "create_model_qualification_parameter", operationDescriptionCreateModelQualificationParameter, aliasDescriptionCreateModelQualificationParameter, inputSchemaCreateModelQualificationParameter, executeCreateModelQualificationParameter);

  const opDeleteModel = requireOperation(operationMap, "deleteModel");
  const operationDescriptionDeleteModel = "[model] Model Delete. (DELETE /models/{modelName}). Operation ID: deleteModel. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteModel = "[model] Model Delete. (DELETE /models/{modelName}). Operation ID: deleteModel. Custom logic: default OAS execution. Use this alias for DELETE /models/{modelName}. Tags: Models. Required inputs: modelName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteModel = {
    modelName: z.string().describe("The name of model."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* mappings\n\n* qualifications\n\n* space\n\n* space.{any Space include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteModel = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /models/{modelName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteModel, input);
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

  registerOperationTool(server, "core_deleteModel", "delete_model", operationDescriptionDeleteModel, aliasDescriptionDeleteModel, inputSchemaDeleteModel, executeDeleteModel);

  const opDeleteModelAttribute = requireOperation(operationMap, "deleteModelAttribute");
  const operationDescriptionDeleteModelAttribute = "[model] Model Attribute Delete. (DELETE /models/{modelName}/attributes/{modelAttributeName}). Operation ID: deleteModelAttribute. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteModelAttribute = "[model] Model Attribute Delete. (DELETE /models/{modelName}/attributes/{modelAttributeName}). Operation ID: deleteModelAttribute. Custom logic: default OAS execution. Use this alias for DELETE /models/{modelName}/attributes/{modelAttributeName}. Tags: Models. Required inputs: modelName (path), modelAttributeName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteModelAttribute = {
    modelName: z.string().describe("The name of model."),
    modelAttributeName: z.string().describe("The name of the model attribute."),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteModelAttribute = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /models/{modelName}/attributes/{modelAttributeName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteModelAttribute, input);
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

  registerOperationTool(server, "core_deleteModelAttribute", "delete_model_attribute", operationDescriptionDeleteModelAttribute, aliasDescriptionDeleteModelAttribute, inputSchemaDeleteModelAttribute, executeDeleteModelAttribute);

  const opDeleteModelMapping = requireOperation(operationMap, "deleteModelMapping");
  const operationDescriptionDeleteModelMapping = "[model] Model Mapping Delete. (DELETE /models/{modelName}/mappings/{modelMappingName}). Operation ID: deleteModelMapping. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteModelMapping = "[model] Model Mapping Delete. (DELETE /models/{modelName}/mappings/{modelMappingName}). Operation ID: deleteModelMapping. Custom logic: default OAS execution. Use this alias for DELETE /models/{modelName}/mappings/{modelMappingName}. Tags: Models. Required inputs: modelName (path), modelMappingName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteModelMapping = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* qualifications\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteModelMapping = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /models/{modelName}/mappings/{modelMappingName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteModelMapping, input);
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

  registerOperationTool(server, "core_deleteModelMapping", "delete_model_mapping", operationDescriptionDeleteModelMapping, aliasDescriptionDeleteModelMapping, inputSchemaDeleteModelMapping, executeDeleteModelMapping);

  const opDeleteModelMappingAttribute = requireOperation(operationMap, "deleteModelMappingAttribute");
  const operationDescriptionDeleteModelMappingAttribute = "[model] Model Mapping Attribute Delete. (DELETE /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}). Operation ID: deleteModelMappingAttribute. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteModelMappingAttribute = "[model] Model Mapping Attribute Delete. (DELETE /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}). Operation ID: deleteModelMappingAttribute. Custom logic: default OAS execution. Use this alias for DELETE /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}. Tags: Models. Required inputs: modelName (path), modelMappingName (path), modelMappingAttributeName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteModelMappingAttribute = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    modelMappingAttributeName: z.string().describe("The name of the attribute"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteModelMappingAttribute = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteModelMappingAttribute, input);
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

  registerOperationTool(server, "core_deleteModelMappingAttribute", "delete_model_mapping_attribute", operationDescriptionDeleteModelMappingAttribute, aliasDescriptionDeleteModelMappingAttribute, inputSchemaDeleteModelMappingAttribute, executeDeleteModelMappingAttribute);

  const opDeleteModelMappingQualification = requireOperation(operationMap, "deleteModelMappingQualification");
  const operationDescriptionDeleteModelMappingQualification = "[model] Model Mapping Qualification Delete. (DELETE /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}). Operation ID: deleteModelMappingQualification. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteModelMappingQualification = "[model] Model Mapping Qualification Delete. (DELETE /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}). Operation ID: deleteModelMappingQualification. Custom logic: default OAS execution. Use this alias for DELETE /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}. Tags: Models. Required inputs: modelName (path), modelMappingName (path), modelMappingQualificationName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteModelMappingQualification = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    modelMappingQualificationName: z.string().describe("The name of the qualification"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeMapping\n\n* bridgeMapping.{any Model Mapping include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteModelMappingQualification = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteModelMappingQualification, input);
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

  registerOperationTool(server, "core_deleteModelMappingQualification", "delete_model_mapping_qualification", operationDescriptionDeleteModelMappingQualification, aliasDescriptionDeleteModelMappingQualification, inputSchemaDeleteModelMappingQualification, executeDeleteModelMappingQualification);

  const opDeleteModelQualification = requireOperation(operationMap, "deleteModelQualification");
  const operationDescriptionDeleteModelQualification = "[model] Model Qualification Delete. (DELETE /models/{modelName}/qualifications/{modelQualificationName}). Operation ID: deleteModelQualification. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteModelQualification = "[model] Model Qualification Delete. (DELETE /models/{modelName}/qualifications/{modelQualificationName}). Operation ID: deleteModelQualification. Custom logic: default OAS execution. Use this alias for DELETE /models/{modelName}/qualifications/{modelQualificationName}. Tags: Models. Required inputs: modelName (path), modelQualificationName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteModelQualification = {
    modelName: z.string().describe("The name of model."),
    modelQualificationName: z.string().describe("The name of the bridge model qualification."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteModelQualification = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /models/{modelName}/qualifications/{modelQualificationName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteModelQualification, input);
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

  registerOperationTool(server, "core_deleteModelQualification", "delete_model_qualification", operationDescriptionDeleteModelQualification, aliasDescriptionDeleteModelQualification, inputSchemaDeleteModelQualification, executeDeleteModelQualification);

  const opDeleteModelQualificationParameter = requireOperation(operationMap, "deleteModelQualificationParameter");
  const operationDescriptionDeleteModelQualificationParameter = "[model] Model Qualification Parameter Delete. (DELETE /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}). Operation ID: deleteModelQualificationParameter. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteModelQualificationParameter = "[model] Model Qualification Parameter Delete. (DELETE /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}). Operation ID: deleteModelQualificationParameter. Custom logic: default OAS execution. Use this alias for DELETE /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}. Tags: Models. Required inputs: modelName (path), modelQualificationName (path), modelQualificationParameterName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteModelQualificationParameter = {
    modelName: z.string().describe("The name of model."),
    modelQualificationName: z.string().describe("The name of the bridge model qualification."),
    modelQualificationParameterName: z.string().describe("The name of the qualification parameter"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModelQualification\n\n* bridgeModelQualification.{any Model Qualification include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteModelQualificationParameter = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteModelQualificationParameter, input);
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

  registerOperationTool(server, "core_deleteModelQualificationParameter", "delete_model_qualification_parameter", operationDescriptionDeleteModelQualificationParameter, aliasDescriptionDeleteModelQualificationParameter, inputSchemaDeleteModelQualificationParameter, executeDeleteModelQualificationParameter);

  const opListModelAttributes = requireOperation(operationMap, "listModelAttributes");
  const operationDescriptionListModelAttributes = "[model] Model Attribute List. (GET /models/{modelName}/attributes). Operation ID: listModelAttributes. Custom logic: default OAS execution.";
  const aliasDescriptionListModelAttributes = "[model] Model Attribute List. (GET /models/{modelName}/attributes). Operation ID: listModelAttributes. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/attributes. Tags: Models. Required inputs: modelName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListModelAttributes = {
    modelName: z.string().describe("The name of model."),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListModelAttributes = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/attributes
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListModelAttributes, input);
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

  registerOperationTool(server, "core_listModelAttributes", "list_model_attributes", operationDescriptionListModelAttributes, aliasDescriptionListModelAttributes, inputSchemaListModelAttributes, executeListModelAttributes);

  const opListModelMappingAttributes = requireOperation(operationMap, "listModelMappingAttributes");
  const operationDescriptionListModelMappingAttributes = "[model] Model Mapping Attribute List. (GET /models/{modelName}/mappings/{modelMappingName}/attributes). Operation ID: listModelMappingAttributes. Custom logic: default OAS execution.";
  const aliasDescriptionListModelMappingAttributes = "[model] Model Mapping Attribute List. (GET /models/{modelName}/mappings/{modelMappingName}/attributes). Operation ID: listModelMappingAttributes. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/mappings/{modelMappingName}/attributes. Tags: Models. Required inputs: modelName (path), modelMappingName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListModelMappingAttributes = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListModelMappingAttributes = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/mappings/{modelMappingName}/attributes
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListModelMappingAttributes, input);
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

  registerOperationTool(server, "core_listModelMappingAttributes", "list_model_mapping_attributes", operationDescriptionListModelMappingAttributes, aliasDescriptionListModelMappingAttributes, inputSchemaListModelMappingAttributes, executeListModelMappingAttributes);

  const opListModelMappingQualifications = requireOperation(operationMap, "listModelMappingQualifications");
  const operationDescriptionListModelMappingQualifications = "[model] Model Mapping Qualification List. (GET /models/{modelName}/mappings/{modelMappingName}/qualifications). Operation ID: listModelMappingQualifications. Custom logic: default OAS execution.";
  const aliasDescriptionListModelMappingQualifications = "[model] Model Mapping Qualification List. (GET /models/{modelName}/mappings/{modelMappingName}/qualifications). Operation ID: listModelMappingQualifications. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/mappings/{modelMappingName}/qualifications. Tags: Models. Required inputs: modelName (path), modelMappingName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListModelMappingQualifications = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeMapping\n\n* bridgeMapping.{any Model Mapping include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListModelMappingQualifications = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/mappings/{modelMappingName}/qualifications
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListModelMappingQualifications, input);
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

  registerOperationTool(server, "core_listModelMappingQualifications", "list_model_mapping_qualifications", operationDescriptionListModelMappingQualifications, aliasDescriptionListModelMappingQualifications, inputSchemaListModelMappingQualifications, executeListModelMappingQualifications);

  const opListModelMappings = requireOperation(operationMap, "listModelMappings");
  const operationDescriptionListModelMappings = "[model] Model Mapping List. (GET /models/{modelName}/mappings). Operation ID: listModelMappings. Custom logic: default OAS execution.";
  const aliasDescriptionListModelMappings = "[model] Model Mapping List. (GET /models/{modelName}/mappings). Operation ID: listModelMappings. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/mappings. Tags: Models. Required inputs: modelName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListModelMappings = {
    modelName: z.string().describe("The name of model."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* qualifications\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListModelMappings = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/mappings
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListModelMappings, input);
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

  registerOperationTool(server, "core_listModelMappings", "list_model_mappings", operationDescriptionListModelMappings, aliasDescriptionListModelMappings, inputSchemaListModelMappings, executeListModelMappings);

  const opListModelQualificationParameters = requireOperation(operationMap, "listModelQualificationParameters");
  const operationDescriptionListModelQualificationParameters = "[model] Model Qualification Parameter List. (GET /models/{modelName}/qualifications/{modelQualificationName}/parameters). Operation ID: listModelQualificationParameters. Custom logic: default OAS execution.";
  const aliasDescriptionListModelQualificationParameters = "[model] Model Qualification Parameter List. (GET /models/{modelName}/qualifications/{modelQualificationName}/parameters). Operation ID: listModelQualificationParameters. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/qualifications/{modelQualificationName}/parameters. Tags: Models. Required inputs: modelName (path), modelQualificationName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListModelQualificationParameters = {
    modelName: z.string().describe("The name of model."),
    modelQualificationName: z.string().describe("The name of the bridge model qualification."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModelQualification\n\n* bridgeModelQualification.{any Model Qualification include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListModelQualificationParameters = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/qualifications/{modelQualificationName}/parameters
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListModelQualificationParameters, input);
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

  registerOperationTool(server, "core_listModelQualificationParameters", "list_model_qualification_parameters", operationDescriptionListModelQualificationParameters, aliasDescriptionListModelQualificationParameters, inputSchemaListModelQualificationParameters, executeListModelQualificationParameters);

  const opListModelQualifications = requireOperation(operationMap, "listModelQualifications");
  const operationDescriptionListModelQualifications = "[model] Model Qualification List. (GET /models/{modelName}/qualifications). Operation ID: listModelQualifications. Custom logic: default OAS execution.";
  const aliasDescriptionListModelQualifications = "[model] Model Qualification List. (GET /models/{modelName}/qualifications). Operation ID: listModelQualifications. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/qualifications. Tags: Models. Required inputs: modelName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListModelQualifications = {
    modelName: z.string().describe("The name of model."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListModelQualifications = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/qualifications
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListModelQualifications, input);
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

  registerOperationTool(server, "core_listModelQualifications", "list_model_qualifications", operationDescriptionListModelQualifications, aliasDescriptionListModelQualifications, inputSchemaListModelQualifications, executeListModelQualifications);

  const opListModels = requireOperation(operationMap, "listModels");
  const operationDescriptionListModels = "[model] Model List. (GET /models). Operation ID: listModels. Custom logic: default OAS execution.";
  const aliasDescriptionListModels = "[model] Model List. (GET /models). Operation ID: listModels. Custom logic: default OAS execution. Use this alias for GET /models. Tags: Models. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListModels = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* mappings\n\n* qualifications\n\n* space\n\n* space.{any Space include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListModels = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListModels, input);
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

  registerOperationTool(server, "core_listModels", "list_models", operationDescriptionListModels, aliasDescriptionListModels, inputSchemaListModels, executeListModels);

  const opRetrieveModel = requireOperation(operationMap, "retrieveModel");
  const operationDescriptionRetrieveModel = "[model] Model Retrieve. (GET /models/{modelName}). Operation ID: retrieveModel. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveModel = "[model] Model Retrieve. (GET /models/{modelName}). Operation ID: retrieveModel. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}. Tags: Models. Required inputs: modelName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveModel = {
    modelName: z.string().describe("The name of model."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* mappings\n\n* qualifications\n\n* space\n\n* space.{any Space include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveModel = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveModel, input);
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

  registerOperationTool(server, "core_retrieveModel", "retrieve_model", operationDescriptionRetrieveModel, aliasDescriptionRetrieveModel, inputSchemaRetrieveModel, executeRetrieveModel);

  const opRetrieveModelAttribute = requireOperation(operationMap, "retrieveModelAttribute");
  const operationDescriptionRetrieveModelAttribute = "[model] Model Attribute Retrieve. (GET /models/{modelName}/attributes/{modelAttributeName}). Operation ID: retrieveModelAttribute. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveModelAttribute = "[model] Model Attribute Retrieve. (GET /models/{modelName}/attributes/{modelAttributeName}). Operation ID: retrieveModelAttribute. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/attributes/{modelAttributeName}. Tags: Models. Required inputs: modelName (path), modelAttributeName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveModelAttribute = {
    modelName: z.string().describe("The name of model."),
    modelAttributeName: z.string().describe("The name of the model attribute."),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveModelAttribute = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/attributes/{modelAttributeName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveModelAttribute, input);
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

  registerOperationTool(server, "core_retrieveModelAttribute", "retrieve_model_attribute", operationDescriptionRetrieveModelAttribute, aliasDescriptionRetrieveModelAttribute, inputSchemaRetrieveModelAttribute, executeRetrieveModelAttribute);

  const opRetrieveModelMapping = requireOperation(operationMap, "retrieveModelMapping");
  const operationDescriptionRetrieveModelMapping = "[model] Model Mapping Retrieve. (GET /models/{modelName}/mappings/{modelMappingName}). Operation ID: retrieveModelMapping. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveModelMapping = "[model] Model Mapping Retrieve. (GET /models/{modelName}/mappings/{modelMappingName}). Operation ID: retrieveModelMapping. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/mappings/{modelMappingName}. Tags: Models. Required inputs: modelName (path), modelMappingName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveModelMapping = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* qualifications\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveModelMapping = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/mappings/{modelMappingName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveModelMapping, input);
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

  registerOperationTool(server, "core_retrieveModelMapping", "retrieve_model_mapping", operationDescriptionRetrieveModelMapping, aliasDescriptionRetrieveModelMapping, inputSchemaRetrieveModelMapping, executeRetrieveModelMapping);

  const opRetrieveModelMappingAttributes = requireOperation(operationMap, "retrieveModelMappingAttributes");
  const operationDescriptionRetrieveModelMappingAttributes = "[model] Model Mapping Attribute Retrieve. (GET /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}). Operation ID: retrieveModelMappingAttributes. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveModelMappingAttributes = "[model] Model Mapping Attribute Retrieve. (GET /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}). Operation ID: retrieveModelMappingAttributes. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}. Tags: Models. Required inputs: modelName (path), modelMappingName (path), modelMappingAttributeName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveModelMappingAttributes = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    modelMappingAttributeName: z.string().describe("The name of the attribute"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveModelMappingAttributes = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveModelMappingAttributes, input);
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

  registerOperationTool(server, "core_retrieveModelMappingAttributes", "retrieve_model_mapping_attributes", operationDescriptionRetrieveModelMappingAttributes, aliasDescriptionRetrieveModelMappingAttributes, inputSchemaRetrieveModelMappingAttributes, executeRetrieveModelMappingAttributes);

  const opRetrieveModelMappingQualifications = requireOperation(operationMap, "retrieveModelMappingQualifications");
  const operationDescriptionRetrieveModelMappingQualifications = "[model] Model Mapping Qualification Retrieve. (GET /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}). Operation ID: retrieveModelMappingQualifications. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveModelMappingQualifications = "[model] Model Mapping Qualification Retrieve. (GET /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}). Operation ID: retrieveModelMappingQualifications. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}. Tags: Models. Required inputs: modelName (path), modelMappingName (path), modelMappingQualificationName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveModelMappingQualifications = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    modelMappingQualificationName: z.string().describe("The name of the qualification"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeMapping\n\n* bridgeMapping.{any Model Mapping include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveModelMappingQualifications = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveModelMappingQualifications, input);
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

  registerOperationTool(server, "core_retrieveModelMappingQualifications", "retrieve_model_mapping_qualifications", operationDescriptionRetrieveModelMappingQualifications, aliasDescriptionRetrieveModelMappingQualifications, inputSchemaRetrieveModelMappingQualifications, executeRetrieveModelMappingQualifications);

  const opRetrieveModelQualification = requireOperation(operationMap, "retrieveModelQualification");
  const operationDescriptionRetrieveModelQualification = "[model] Model Qualification Retrieve. (GET /models/{modelName}/qualifications/{modelQualificationName}). Operation ID: retrieveModelQualification. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveModelQualification = "[model] Model Qualification Retrieve. (GET /models/{modelName}/qualifications/{modelQualificationName}). Operation ID: retrieveModelQualification. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/qualifications/{modelQualificationName}. Tags: Models. Required inputs: modelName (path), modelQualificationName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveModelQualification = {
    modelName: z.string().describe("The name of model."),
    modelQualificationName: z.string().describe("The name of the bridge model qualification."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveModelQualification = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/qualifications/{modelQualificationName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveModelQualification, input);
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

  registerOperationTool(server, "core_retrieveModelQualification", "retrieve_model_qualification", operationDescriptionRetrieveModelQualification, aliasDescriptionRetrieveModelQualification, inputSchemaRetrieveModelQualification, executeRetrieveModelQualification);

  const opRetrieveModelQualificationParameter = requireOperation(operationMap, "retrieveModelQualificationParameter");
  const operationDescriptionRetrieveModelQualificationParameter = "[model] Model Qualification Parameter Retrieve. (GET /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}). Operation ID: retrieveModelQualificationParameter. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveModelQualificationParameter = "[model] Model Qualification Parameter Retrieve. (GET /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}). Operation ID: retrieveModelQualificationParameter. Custom logic: default OAS execution. Use this alias for GET /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}. Tags: Models. Required inputs: modelName (path), modelQualificationName (path), modelQualificationParameterName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveModelQualificationParameter = {
    modelName: z.string().describe("The name of model."),
    modelQualificationName: z.string().describe("The name of the bridge model qualification."),
    modelQualificationParameterName: z.string().describe("The name of the qualification parameter"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModelQualification\n\n* bridgeModelQualification.{any Model Qualification include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveModelQualificationParameter = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveModelQualificationParameter, input);
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

  registerOperationTool(server, "core_retrieveModelQualificationParameter", "retrieve_model_qualification_parameter", operationDescriptionRetrieveModelQualificationParameter, aliasDescriptionRetrieveModelQualificationParameter, inputSchemaRetrieveModelQualificationParameter, executeRetrieveModelQualificationParameter);

  const opUpdateModel = requireOperation(operationMap, "updateModel");
  const operationDescriptionUpdateModel = "[model] Model Update. (PUT /models/{modelName}). Operation ID: updateModel. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateModel = "[model] Model Update. (PUT /models/{modelName}). Operation ID: updateModel. Custom logic: default OAS execution. Use this alias for PUT /models/{modelName}. Tags: Models. Required inputs: modelName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateModel = {
    modelName: z.string().describe("The name of model."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* mappings\n\n* qualifications\n\n* space\n\n* space.{any Space include property}"),
    body: z.any().describe("The content for the model properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateModel = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /models/{modelName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateModel, input);
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

  registerOperationTool(server, "core_updateModel", "update_model", operationDescriptionUpdateModel, aliasDescriptionUpdateModel, inputSchemaUpdateModel, executeUpdateModel);

  const opUpdateModelAttribute = requireOperation(operationMap, "updateModelAttribute");
  const operationDescriptionUpdateModelAttribute = "[model] Model Attribute Update. (PUT /models/{modelName}/attributes/{modelAttributeName}). Operation ID: updateModelAttribute. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateModelAttribute = "[model] Model Attribute Update. (PUT /models/{modelName}/attributes/{modelAttributeName}). Operation ID: updateModelAttribute. Custom logic: default OAS execution. Use this alias for PUT /models/{modelName}/attributes/{modelAttributeName}. Tags: Models. Required inputs: modelName (path), modelAttributeName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateModelAttribute = {
    modelName: z.string().describe("The name of model."),
    modelAttributeName: z.string().describe("The name of the model attribute."),
    body: z.any().describe("The content for the model attribute properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateModelAttribute = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /models/{modelName}/attributes/{modelAttributeName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateModelAttribute, input);
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

  registerOperationTool(server, "core_updateModelAttribute", "update_model_attribute", operationDescriptionUpdateModelAttribute, aliasDescriptionUpdateModelAttribute, inputSchemaUpdateModelAttribute, executeUpdateModelAttribute);

  const opUpdateModelMapping = requireOperation(operationMap, "updateModelMapping");
  const operationDescriptionUpdateModelMapping = "[model] Model Mapping Update. (PUT /models/{modelName}/mappings/{modelMappingName}). Operation ID: updateModelMapping. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateModelMapping = "[model] Model Mapping Update. (PUT /models/{modelName}/mappings/{modelMappingName}). Operation ID: updateModelMapping. Custom logic: default OAS execution. Use this alias for PUT /models/{modelName}/mappings/{modelMappingName}. Tags: Models. Required inputs: modelName (path), modelMappingName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateModelMapping = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* qualifications\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("The content for the model mapping properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateModelMapping = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /models/{modelName}/mappings/{modelMappingName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateModelMapping, input);
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

  registerOperationTool(server, "core_updateModelMapping", "update_model_mapping", operationDescriptionUpdateModelMapping, aliasDescriptionUpdateModelMapping, inputSchemaUpdateModelMapping, executeUpdateModelMapping);

  const opUpdateModelMappingAttribute = requireOperation(operationMap, "updateModelMappingAttribute");
  const operationDescriptionUpdateModelMappingAttribute = "[model] Model Mapping Attribute Update. (PUT /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}). Operation ID: updateModelMappingAttribute. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateModelMappingAttribute = "[model] Model Mapping Attribute Update. (PUT /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}). Operation ID: updateModelMappingAttribute. Custom logic: default OAS execution. Use this alias for PUT /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}. Tags: Models. Required inputs: modelName (path), modelMappingName (path), modelMappingAttributeName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateModelMappingAttribute = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    modelMappingAttributeName: z.string().describe("The name of the attribute"),
    body: z.any().describe("The content for the model mapping properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateModelMappingAttribute = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /models/{modelName}/mappings/{modelMappingName}/attributes/{modelMappingAttributeName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateModelMappingAttribute, input);
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

  registerOperationTool(server, "core_updateModelMappingAttribute", "update_model_mapping_attribute", operationDescriptionUpdateModelMappingAttribute, aliasDescriptionUpdateModelMappingAttribute, inputSchemaUpdateModelMappingAttribute, executeUpdateModelMappingAttribute);

  const opUpdateModelMappingQualification = requireOperation(operationMap, "updateModelMappingQualification");
  const operationDescriptionUpdateModelMappingQualification = "[model] Model Mapping Qualification Update. (PUT /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}). Operation ID: updateModelMappingQualification. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateModelMappingQualification = "[model] Model Mapping Qualification Update. (PUT /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}). Operation ID: updateModelMappingQualification. Custom logic: default OAS execution. Use this alias for PUT /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}. Tags: Models. Required inputs: modelName (path), modelMappingName (path), modelMappingQualificationName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateModelMappingQualification = {
    modelName: z.string().describe("The name of model."),
    modelMappingName: z.string().describe("The name of the bridge model mapping"),
    modelMappingQualificationName: z.string().describe("The name of the qualification"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeMapping\n\n* bridgeMapping.{any Model Mapping include property}"),
    body: z.any().describe("The content for the model mapping properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateModelMappingQualification = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /models/{modelName}/mappings/{modelMappingName}/qualifications/{modelMappingQualificationName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateModelMappingQualification, input);
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

  registerOperationTool(server, "core_updateModelMappingQualification", "update_model_mapping_qualification", operationDescriptionUpdateModelMappingQualification, aliasDescriptionUpdateModelMappingQualification, inputSchemaUpdateModelMappingQualification, executeUpdateModelMappingQualification);

  const opUpdateModelQualification = requireOperation(operationMap, "updateModelQualification");
  const operationDescriptionUpdateModelQualification = "[model] Model Qualification Update. (PUT /models/{modelName}/qualifications/{modelQualificationName}). Operation ID: updateModelQualification. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateModelQualification = "[model] Model Qualification Update. (PUT /models/{modelName}/qualifications/{modelQualificationName}). Operation ID: updateModelQualification. Custom logic: default OAS execution. Use this alias for PUT /models/{modelName}/qualifications/{modelQualificationName}. Tags: Models. Required inputs: modelName (path), modelQualificationName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateModelQualification = {
    modelName: z.string().describe("The name of model."),
    modelQualificationName: z.string().describe("The name of the bridge model qualification."),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModel\n\n* bridgeModel.{any Model include property}"),
    body: z.any().describe("The content for the model qualification properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateModelQualification = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /models/{modelName}/qualifications/{modelQualificationName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateModelQualification, input);
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

  registerOperationTool(server, "core_updateModelQualification", "update_model_qualification", operationDescriptionUpdateModelQualification, aliasDescriptionUpdateModelQualification, inputSchemaUpdateModelQualification, executeUpdateModelQualification);

  const opUpdateModelQualificationParameter = requireOperation(operationMap, "updateModelQualificationParameter");
  const operationDescriptionUpdateModelQualificationParameter = "[model] Model Qualification Parameter Update. (PUT /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}). Operation ID: updateModelQualificationParameter. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateModelQualificationParameter = "[model] Model Qualification Parameter Update. (PUT /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}). Operation ID: updateModelQualificationParameter. Custom logic: default OAS execution. Use this alias for PUT /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}. Tags: Models. Required inputs: modelName (path), modelQualificationName (path), modelQualificationParameterName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateModelQualificationParameter = {
    modelName: z.string().describe("The name of model."),
    modelQualificationName: z.string().describe("The name of the bridge model qualification."),
    modelQualificationParameterName: z.string().describe("The name of the qualification parameter"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* bridgeModelQualification\n\n* bridgeModelQualification.{any Model Qualification include property}"),
    body: z.any().describe("The content for the model qualification parameter properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateModelQualificationParameter = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /models/{modelName}/qualifications/{modelQualificationName}/parameters/{modelQualificationParameterName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateModelQualificationParameter, input);
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

  registerOperationTool(server, "core_updateModelQualificationParameter", "update_model_qualification_parameter", operationDescriptionUpdateModelQualificationParameter, aliasDescriptionUpdateModelQualificationParameter, inputSchemaUpdateModelQualificationParameter, executeUpdateModelQualificationParameter);

}
