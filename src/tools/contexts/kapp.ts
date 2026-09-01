// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ContextToolRuntime, registerOperationTool, requireOperation } from "./shared.js";

export function registerKappTools(server: McpServer, runtime: ContextToolRuntime): void {
  const { operationMap, invokeDefaultOperation } = runtime;

  const opCreateCategoryAttributeDefinition = requireOperation(operationMap, "createCategoryAttributeDefinition");
  const operationDescriptionCreateCategoryAttributeDefinition = "[kapp] Kapp Category Attribute Definition Create. (POST /kapps/{kappSlug}/categoryAttributeDefinitions). Operation ID: createCategoryAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionCreateCategoryAttributeDefinition = "[kapp] Kapp Category Attribute Definition Create. (POST /kapps/{kappSlug}/categoryAttributeDefinitions). Operation ID: createCategoryAttributeDefinition. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/categoryAttributeDefinitions. Tags: Attribute Definitions. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateCategoryAttributeDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the attribute definition properties"),
  };
  const executeCreateCategoryAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/categoryAttributeDefinitions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateCategoryAttributeDefinition, input);
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

  registerOperationTool(server, "core_createCategoryAttributeDefinition", "create_category_attribute_definition", operationDescriptionCreateCategoryAttributeDefinition, aliasDescriptionCreateCategoryAttributeDefinition, inputSchemaCreateCategoryAttributeDefinition, executeCreateCategoryAttributeDefinition);

  const opCreateKapp = requireOperation(operationMap, "createKapp");
  const operationDescriptionCreateKapp = "[kapp] Kapp Create. (POST /kapps). Operation ID: createKapp. Custom logic: default OAS execution.";
  const aliasDescriptionCreateKapp = "[kapp] Kapp Create. (POST /kapps). Operation ID: createKapp. Custom logic: default OAS execution. Use this alias for POST /kapps. Tags: Kapps. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateKapp = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categories\n\n* categorizations\n\n* categoryAttributeDefinitions\n\n* formAttributeDefinitions\n\n* formAttributeDefinitions\n\n* integrations\n\n* kappAttributeDefinitions\n\n* securityPolicyDefinitions\n\n* securityPolicies\n\n* webhooks\n\n* space\n\n* space.{any space include property}"),
    body: z.any().describe("The content for the kapp properties"),
  };
  const executeCreateKapp = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateKapp, input);
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

  registerOperationTool(server, "core_createKapp", "create_kapp", operationDescriptionCreateKapp, aliasDescriptionCreateKapp, inputSchemaCreateKapp, executeCreateKapp);

  const opCreateKappAttributeDefinition = requireOperation(operationMap, "createKappAttributeDefinition");
  const operationDescriptionCreateKappAttributeDefinition = "[kapp] Kapp Attribute Definition Create. (POST /kapps/{kappSlug}/kappAttributeDefinitions). Operation ID: createKappAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionCreateKappAttributeDefinition = "[kapp] Kapp Attribute Definition Create. (POST /kapps/{kappSlug}/kappAttributeDefinitions). Operation ID: createKappAttributeDefinition. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/kappAttributeDefinitions. Tags: Attribute Definitions. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateKappAttributeDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the attribute definition properties"),
  };
  const executeCreateKappAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/kappAttributeDefinitions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateKappAttributeDefinition, input);
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

  registerOperationTool(server, "core_createKappAttributeDefinition", "create_kapp_attribute_definition", operationDescriptionCreateKappAttributeDefinition, aliasDescriptionCreateKappAttributeDefinition, inputSchemaCreateKappAttributeDefinition, executeCreateKappAttributeDefinition);

  const opCreateKappIntegration = requireOperation(operationMap, "createKappIntegration");
  const operationDescriptionCreateKappIntegration = "[kapp] Kapp Integration Create. (POST /kapps/{kappSlug}/integrations). Operation ID: createKappIntegration. Custom logic: default OAS execution.";
  const aliasDescriptionCreateKappIntegration = "[kapp] Kapp Integration Create. (POST /kapps/{kappSlug}/integrations). Operation ID: createKappIntegration. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/integrations. Tags: Integrations. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateKappIntegration = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("The content for the integration properties"),
  };
  const executeCreateKappIntegration = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/integrations
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateKappIntegration, input);
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

  registerOperationTool(server, "core_createKappIntegration", "create_kapp_integration", operationDescriptionCreateKappIntegration, aliasDescriptionCreateKappIntegration, inputSchemaCreateKappIntegration, executeCreateKappIntegration);

  const opCreateKappSecurityPolicyDefinition = requireOperation(operationMap, "createKappSecurityPolicyDefinition");
  const operationDescriptionCreateKappSecurityPolicyDefinition = "[kapp] Kapp Security Policy Definition Create. (POST /kapps/{kappSlug}/securityPolicyDefinitions). Operation ID: createKappSecurityPolicyDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionCreateKappSecurityPolicyDefinition = "[kapp] Kapp Security Policy Definition Create. (POST /kapps/{kappSlug}/securityPolicyDefinitions). Operation ID: createKappSecurityPolicyDefinition. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/securityPolicyDefinitions. Tags: Security Policy Definitions. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateKappSecurityPolicyDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the security policy definition properties"),
  };
  const executeCreateKappSecurityPolicyDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/securityPolicyDefinitions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateKappSecurityPolicyDefinition, input);
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

  registerOperationTool(server, "core_createKappSecurityPolicyDefinition", "create_kapp_security_policy_definition", operationDescriptionCreateKappSecurityPolicyDefinition, aliasDescriptionCreateKappSecurityPolicyDefinition, inputSchemaCreateKappSecurityPolicyDefinition, executeCreateKappSecurityPolicyDefinition);

  const opCreateKappWebAPI = requireOperation(operationMap, "createKappWebAPI");
  const operationDescriptionCreateKappWebAPI = "[kapp] Kapp WebAPI Create. (POST /kapps/{kappSlug}/webApis). Operation ID: createKappWebAPI. Custom logic: default OAS execution.";
  const aliasDescriptionCreateKappWebAPI = "[kapp] Kapp WebAPI Create. (POST /kapps/{kappSlug}/webApis). Operation ID: createKappWebAPI. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/webApis. Tags: WebAPIs. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateKappWebAPI = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    kappSlug: z.string().describe("The slug of the Kapp"),
    body: z.any().describe("The content for the webapi properties"),
  };
  const executeCreateKappWebAPI = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/webApis
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateKappWebAPI, input);
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

  registerOperationTool(server, "core_createKappWebAPI", "create_kapp_web_api", operationDescriptionCreateKappWebAPI, aliasDescriptionCreateKappWebAPI, inputSchemaCreateKappWebAPI, executeCreateKappWebAPI);

  const opCreateKappWebhook = requireOperation(operationMap, "createKappWebhook");
  const operationDescriptionCreateKappWebhook = "[kapp] Kapp Webhook Create. (POST /kapps/{kappSlug}/webhooks). Operation ID: createKappWebhook. Custom logic: default OAS execution.";
  const aliasDescriptionCreateKappWebhook = "[kapp] Kapp Webhook Create. (POST /kapps/{kappSlug}/webhooks). Operation ID: createKappWebhook. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/webhooks. Tags: Webhooks. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateKappWebhook = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the webhook properties"),
  };
  const executeCreateKappWebhook = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/webhooks
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateKappWebhook, input);
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

  registerOperationTool(server, "core_createKappWebhook", "create_kapp_webhook", operationDescriptionCreateKappWebhook, aliasDescriptionCreateKappWebhook, inputSchemaCreateKappWebhook, executeCreateKappWebhook);

  const opCreateKappWebhookJob = requireOperation(operationMap, "createKappWebhookJob");
  const operationDescriptionCreateKappWebhookJob = "[kapp] Kapp Webhook Job Create. (POST /kapps/{kappSlug}/webhookJobs). Operation ID: createKappWebhookJob. Custom logic: default OAS execution.";
  const aliasDescriptionCreateKappWebhookJob = "[kapp] Kapp Webhook Job Create. (POST /kapps/{kappSlug}/webhookJobs). Operation ID: createKappWebhookJob. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/webhookJobs. Tags: Webhook Jobs. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateKappWebhookJob = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the webhook job properties."),
  };
  const executeCreateKappWebhookJob = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/webhookJobs
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateKappWebhookJob, input);
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

  registerOperationTool(server, "core_createKappWebhookJob", "create_kapp_webhook_job", operationDescriptionCreateKappWebhookJob, aliasDescriptionCreateKappWebhookJob, inputSchemaCreateKappWebhookJob, executeCreateKappWebhookJob);

  const opCreateKappWorkflow = requireOperation(operationMap, "createKappWorkflow");
  const operationDescriptionCreateKappWorkflow = "[kapp] Kapp Workflow Create. (POST /kapps/{kappSlug}/workflows). Operation ID: createKappWorkflow. Custom logic: default OAS execution.";
  const aliasDescriptionCreateKappWorkflow = "[kapp] Kapp Workflow Create. (POST /kapps/{kappSlug}/workflows). Operation ID: createKappWorkflow. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/workflows. Tags: Workflows. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateKappWorkflow = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    force: z.boolean().optional().describe("Force the overwrite of an existing workflow on import"),
    body: z.any().describe("The content for the workflow properties"),
  };
  const executeCreateKappWorkflow = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/workflows
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateKappWorkflow, input);
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

  registerOperationTool(server, "core_createKappWorkflow", "create_kapp_workflow", operationDescriptionCreateKappWorkflow, aliasDescriptionCreateKappWorkflow, inputSchemaCreateKappWorkflow, executeCreateKappWorkflow);

  const opDeleteCategoryAttributeDefinition = requireOperation(operationMap, "deleteCategoryAttributeDefinition");
  const operationDescriptionDeleteCategoryAttributeDefinition = "[kapp] Kapp Category Attribute Definition Delete. (DELETE /kapps/{kappSlug}/categoryAttributeDefinitions/{name}). Operation ID: deleteCategoryAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteCategoryAttributeDefinition = "[kapp] Kapp Category Attribute Definition Delete. (DELETE /kapps/{kappSlug}/categoryAttributeDefinitions/{name}). Operation ID: deleteCategoryAttributeDefinition. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/categoryAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteCategoryAttributeDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the attribute definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteCategoryAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/categoryAttributeDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteCategoryAttributeDefinition, input);
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

  registerOperationTool(server, "core_deleteCategoryAttributeDefinition", "delete_category_attribute_definition", operationDescriptionDeleteCategoryAttributeDefinition, aliasDescriptionDeleteCategoryAttributeDefinition, inputSchemaDeleteCategoryAttributeDefinition, executeDeleteCategoryAttributeDefinition);

  const opDeleteKapp = requireOperation(operationMap, "deleteKapp");
  const operationDescriptionDeleteKapp = "[kapp] Kapp Delete. (DELETE /kapps/{kappSlug}). Operation ID: deleteKapp. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteKapp = "[kapp] Kapp Delete. (DELETE /kapps/{kappSlug}). Operation ID: deleteKapp. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}. Tags: Kapps. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteKapp = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categories\n\n* categorizations\n\n* categoryAttributeDefinitions\n\n* formAttributeDefinitions\n\n* formAttributeDefinitions\n\n* integrations\n\n* kappAttributeDefinitions\n\n* securityPolicyDefinitions\n\n* securityPolicies\n\n* webhooks\n\n* space\n\n* space.{any space include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteKapp = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteKapp, input);
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

  registerOperationTool(server, "core_deleteKapp", "delete_kapp", operationDescriptionDeleteKapp, aliasDescriptionDeleteKapp, inputSchemaDeleteKapp, executeDeleteKapp);

  const opDeleteKappActivityCache = requireOperation(operationMap, "deleteKappActivityCache");
  const operationDescriptionDeleteKappActivityCache = "[kapp] Kapp Submission Metrics Delete. (DELETE /kapps/{kappSlug}/activity). Operation ID: deleteKappActivityCache. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteKappActivityCache = "[kapp] Kapp Submission Metrics Delete. (DELETE /kapps/{kappSlug}/activity). Operation ID: deleteKappActivityCache. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/activity. Tags: Metrics. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteKappActivityCache = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteKappActivityCache = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/activity
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteKappActivityCache, input);
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

  registerOperationTool(server, "core_deleteKappActivityCache", "delete_kapp_activity_cache", operationDescriptionDeleteKappActivityCache, aliasDescriptionDeleteKappActivityCache, inputSchemaDeleteKappActivityCache, executeDeleteKappActivityCache);

  const opDeleteKappAttributeDefinition = requireOperation(operationMap, "deleteKappAttributeDefinition");
  const operationDescriptionDeleteKappAttributeDefinition = "[kapp] Kapp Attribute Definition Delete. (DELETE /kapps/{kappSlug}/kappAttributeDefinitions/{name}). Operation ID: deleteKappAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteKappAttributeDefinition = "[kapp] Kapp Attribute Definition Delete. (DELETE /kapps/{kappSlug}/kappAttributeDefinitions/{name}). Operation ID: deleteKappAttributeDefinition. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/kappAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteKappAttributeDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the attribute definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteKappAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/kappAttributeDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteKappAttributeDefinition, input);
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

  registerOperationTool(server, "core_deleteKappAttributeDefinition", "delete_kapp_attribute_definition", operationDescriptionDeleteKappAttributeDefinition, aliasDescriptionDeleteKappAttributeDefinition, inputSchemaDeleteKappAttributeDefinition, executeDeleteKappAttributeDefinition);

  const opDeleteKappIntegration = requireOperation(operationMap, "deleteKappIntegration");
  const operationDescriptionDeleteKappIntegration = "[kapp] Kapp Integration Delete. (DELETE /kapps/{kappSlug}/integrations/{name}). Operation ID: deleteKappIntegration. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteKappIntegration = "[kapp] Kapp Integration Delete. (DELETE /kapps/{kappSlug}/integrations/{name}). Operation ID: deleteKappIntegration. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/integrations/{name}. Tags: Integrations. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteKappIntegration = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the integration"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteKappIntegration = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/integrations/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteKappIntegration, input);
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

  registerOperationTool(server, "core_deleteKappIntegration", "delete_kapp_integration", operationDescriptionDeleteKappIntegration, aliasDescriptionDeleteKappIntegration, inputSchemaDeleteKappIntegration, executeDeleteKappIntegration);

  const opDeleteKappSecurityPolicyDefinition = requireOperation(operationMap, "deleteKappSecurityPolicyDefinition");
  const operationDescriptionDeleteKappSecurityPolicyDefinition = "[kapp] Kapp Security Policy Definition Delete. (DELETE /kapps/{kappSlug}/securityPolicyDefinitions/{name}). Operation ID: deleteKappSecurityPolicyDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteKappSecurityPolicyDefinition = "[kapp] Kapp Security Policy Definition Delete. (DELETE /kapps/{kappSlug}/securityPolicyDefinitions/{name}). Operation ID: deleteKappSecurityPolicyDefinition. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/securityPolicyDefinitions/{name}. Tags: Security Policy Definitions. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteKappSecurityPolicyDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the security policy definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteKappSecurityPolicyDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/securityPolicyDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteKappSecurityPolicyDefinition, input);
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

  registerOperationTool(server, "core_deleteKappSecurityPolicyDefinition", "delete_kapp_security_policy_definition", operationDescriptionDeleteKappSecurityPolicyDefinition, aliasDescriptionDeleteKappSecurityPolicyDefinition, inputSchemaDeleteKappSecurityPolicyDefinition, executeDeleteKappSecurityPolicyDefinition);

  const opDeleteKappWebAPI = requireOperation(operationMap, "deleteKappWebAPI");
  const operationDescriptionDeleteKappWebAPI = "[kapp] Kapp WebAPI Delete. (DELETE /kapps/{kappSlug}/webApis/{webApiSlug}). Operation ID: deleteKappWebAPI. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteKappWebAPI = "[kapp] Kapp WebAPI Delete. (DELETE /kapps/{kappSlug}/webApis/{webApiSlug}). Operation ID: deleteKappWebAPI. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/webApis/{webApiSlug}. Tags: WebAPIs. Required inputs: kappSlug (path), webApiSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteKappWebAPI = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    webApiSlug: z.string().describe("The slug of the WebAPI"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteKappWebAPI = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/webApis/{webApiSlug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteKappWebAPI, input);
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

  registerOperationTool(server, "core_deleteKappWebAPI", "delete_kapp_web_api", operationDescriptionDeleteKappWebAPI, aliasDescriptionDeleteKappWebAPI, inputSchemaDeleteKappWebAPI, executeDeleteKappWebAPI);

  const opDeleteKappWebhook = requireOperation(operationMap, "deleteKappWebhook");
  const operationDescriptionDeleteKappWebhook = "[kapp] Kapp Webhook Delete. (DELETE /kapps/{kappSlug}/webhooks/{name}). Operation ID: deleteKappWebhook. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteKappWebhook = "[kapp] Kapp Webhook Delete. (DELETE /kapps/{kappSlug}/webhooks/{name}). Operation ID: deleteKappWebhook. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/webhooks/{name}. Tags: Webhooks. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteKappWebhook = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the webhook"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteKappWebhook = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/webhooks/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteKappWebhook, input);
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

  registerOperationTool(server, "core_deleteKappWebhook", "delete_kapp_webhook", operationDescriptionDeleteKappWebhook, aliasDescriptionDeleteKappWebhook, inputSchemaDeleteKappWebhook, executeDeleteKappWebhook);

  const opDeleteKappWebhookJob = requireOperation(operationMap, "deleteKappWebhookJob");
  const operationDescriptionDeleteKappWebhookJob = "[kapp] Kapp Webhook Job Delete. (DELETE /kapps/{kappSlug}/webhookJobs/{id}). Operation ID: deleteKappWebhookJob. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteKappWebhookJob = "[kapp] Kapp Webhook Job Delete. (DELETE /kapps/{kappSlug}/webhookJobs/{id}). Operation ID: deleteKappWebhookJob. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/webhookJobs/{id}. Tags: Webhook Jobs. Required inputs: kappSlug (path), id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteKappWebhookJob = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    id: z.string().describe("The id of the webhook job"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteKappWebhookJob = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/webhookJobs/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteKappWebhookJob, input);
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

  registerOperationTool(server, "core_deleteKappWebhookJob", "delete_kapp_webhook_job", operationDescriptionDeleteKappWebhookJob, aliasDescriptionDeleteKappWebhookJob, inputSchemaDeleteKappWebhookJob, executeDeleteKappWebhookJob);

  const opDeleteKappWorkflow = requireOperation(operationMap, "deleteKappWorkflow");
  const operationDescriptionDeleteKappWorkflow = "[kapp] Kapp Workflow Delete. (DELETE /kapps/{kappSlug}/workflows/{id}). Operation ID: deleteKappWorkflow. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteKappWorkflow = "[kapp] Kapp Workflow Delete. (DELETE /kapps/{kappSlug}/workflows/{id}). Operation ID: deleteKappWorkflow. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/workflows/{id}. Tags: Workflows. Required inputs: kappSlug (path), id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteKappWorkflow = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    id: z.string().describe("The id of the workflow"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteKappWorkflow = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/workflows/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteKappWorkflow, input);
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

  registerOperationTool(server, "core_deleteKappWorkflow", "delete_kapp_workflow", operationDescriptionDeleteKappWorkflow, aliasDescriptionDeleteKappWorkflow, inputSchemaDeleteKappWorkflow, executeDeleteKappWorkflow);

  const opExportKappWebAPI = requireOperation(operationMap, "exportKappWebAPI");
  const operationDescriptionExportKappWebAPI = "[kapp] Kapp WebAPI Export. (GET /kapps/{kappSlug}/webApis/{webApiSlug}/export). Operation ID: exportKappWebAPI. Custom logic: default OAS execution.";
  const aliasDescriptionExportKappWebAPI = "[kapp] Kapp WebAPI Export. (GET /kapps/{kappSlug}/webApis/{webApiSlug}/export). Operation ID: exportKappWebAPI. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/webApis/{webApiSlug}/export. Tags: WebAPIs. Required inputs: kappSlug (path), webApiSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaExportKappWebAPI = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    webApiSlug: z.string().describe("The slug of the WebAPI"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeExportKappWebAPI = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/webApis/{webApiSlug}/export
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opExportKappWebAPI, input);
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

  registerOperationTool(server, "core_exportKappWebAPI", "export_kapp_web_api", operationDescriptionExportKappWebAPI, aliasDescriptionExportKappWebAPI, inputSchemaExportKappWebAPI, executeExportKappWebAPI);

  const opFetchKappActivityMetrics = requireOperation(operationMap, "fetchKappActivityMetrics");
  const operationDescriptionFetchKappActivityMetrics = "[kapp] Kapp Submission Metrics Retrieve. (GET /kapps/{kappSlug}/activity). Operation ID: fetchKappActivityMetrics. Custom logic: default OAS execution.";
  const aliasDescriptionFetchKappActivityMetrics = "[kapp] Kapp Submission Metrics Retrieve. (GET /kapps/{kappSlug}/activity). Operation ID: fetchKappActivityMetrics. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/activity. Tags: Metrics. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaFetchKappActivityMetrics = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    days: z.number().int().optional().describe("Number of days to fetch activity metrics for"),
    tz: z.string().optional().describe("Number of days to fetch activity metrics for"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeFetchKappActivityMetrics = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/activity
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opFetchKappActivityMetrics, input);
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

  registerOperationTool(server, "core_fetchKappActivityMetrics", "fetch_kapp_activity_metrics", operationDescriptionFetchKappActivityMetrics, aliasDescriptionFetchKappActivityMetrics, inputSchemaFetchKappActivityMetrics, executeFetchKappActivityMetrics);

  const opFetchKappWebAPI = requireOperation(operationMap, "fetchKappWebAPI");
  const operationDescriptionFetchKappWebAPI = "[kapp] Kapp WebAPI Retrieve. (GET /kapps/{kappSlug}/webApis/{webApiSlug}). Operation ID: fetchKappWebAPI. Custom logic: default OAS execution.";
  const aliasDescriptionFetchKappWebAPI = "[kapp] Kapp WebAPI Retrieve. (GET /kapps/{kappSlug}/webApis/{webApiSlug}). Operation ID: fetchKappWebAPI. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/webApis/{webApiSlug}. Tags: WebAPIs. Required inputs: kappSlug (path), webApiSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaFetchKappWebAPI = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    webApiSlug: z.string().describe("The slug of the WebAPI"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeFetchKappWebAPI = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/webApis/{webApiSlug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opFetchKappWebAPI, input);
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

  registerOperationTool(server, "core_fetchKappWebAPI", "fetch_kapp_web_api", operationDescriptionFetchKappWebAPI, aliasDescriptionFetchKappWebAPI, inputSchemaFetchKappWebAPI, executeFetchKappWebAPI);

  const opGetKappIntegration = requireOperation(operationMap, "getKappIntegration");
  const operationDescriptionGetKappIntegration = "[kapp] Kapp Integration Retrieve. (GET /kapps/{kappSlug}/integrations/{name}). Operation ID: getKappIntegration. Custom logic: default OAS execution.";
  const aliasDescriptionGetKappIntegration = "[kapp] Kapp Integration Retrieve. (GET /kapps/{kappSlug}/integrations/{name}). Operation ID: getKappIntegration. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/integrations/{name}. Tags: Integrations. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaGetKappIntegration = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the integration"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeGetKappIntegration = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/integrations/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opGetKappIntegration, input);
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

  registerOperationTool(server, "core_getKappIntegration", "get_kapp_integration", operationDescriptionGetKappIntegration, aliasDescriptionGetKappIntegration, inputSchemaGetKappIntegration, executeGetKappIntegration);

  const opImportKappWebAPI = requireOperation(operationMap, "importKappWebAPI");
  const operationDescriptionImportKappWebAPI = "[kapp] Kapp WebAPI Import. (POST /kapps/{kappSlug}/webApiImport). Operation ID: importKappWebAPI. Custom logic: default OAS execution.";
  const aliasDescriptionImportKappWebAPI = "[kapp] Kapp WebAPI Import. (POST /kapps/{kappSlug}/webApiImport). Operation ID: importKappWebAPI. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/webApiImport. Tags: WebAPIs. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaImportKappWebAPI = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    force: z.boolean().optional().describe("Force the overwrite of an existing web API on import"),
    body: z.any().describe("The content for the webapi properties"),
  };
  const executeImportKappWebAPI = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/webApiImport
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opImportKappWebAPI, input);
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

  registerOperationTool(server, "core_importKappWebAPI", "import_kapp_web_api", operationDescriptionImportKappWebAPI, aliasDescriptionImportKappWebAPI, inputSchemaImportKappWebAPI, executeImportKappWebAPI);

  const opListCategoryAttributeDefinitions = requireOperation(operationMap, "listCategoryAttributeDefinitions");
  const operationDescriptionListCategoryAttributeDefinitions = "[kapp] Kapp Category Attribute Definition List. (GET /kapps/{kappSlug}/categoryAttributeDefinitions). Operation ID: listCategoryAttributeDefinitions. Custom logic: default OAS execution.";
  const aliasDescriptionListCategoryAttributeDefinitions = "[kapp] Kapp Category Attribute Definition List. (GET /kapps/{kappSlug}/categoryAttributeDefinitions). Operation ID: listCategoryAttributeDefinitions. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/categoryAttributeDefinitions. Tags: Attribute Definitions. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListCategoryAttributeDefinitions = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListCategoryAttributeDefinitions = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/categoryAttributeDefinitions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListCategoryAttributeDefinitions, input);
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

  registerOperationTool(server, "core_listCategoryAttributeDefinitions", "list_category_attribute_definitions", operationDescriptionListCategoryAttributeDefinitions, aliasDescriptionListCategoryAttributeDefinitions, inputSchemaListCategoryAttributeDefinitions, executeListCategoryAttributeDefinitions);

  const opListKappAttributeDefinitions = requireOperation(operationMap, "listKappAttributeDefinitions");
  const operationDescriptionListKappAttributeDefinitions = "[kapp] Kapp Attribute Definition List. (GET /kapps/{kappSlug}/kappAttributeDefinitions). Operation ID: listKappAttributeDefinitions. Custom logic: default OAS execution.";
  const aliasDescriptionListKappAttributeDefinitions = "[kapp] Kapp Attribute Definition List. (GET /kapps/{kappSlug}/kappAttributeDefinitions). Operation ID: listKappAttributeDefinitions. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/kappAttributeDefinitions. Tags: Attribute Definitions. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListKappAttributeDefinitions = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListKappAttributeDefinitions = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/kappAttributeDefinitions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListKappAttributeDefinitions, input);
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

  registerOperationTool(server, "core_listKappAttributeDefinitions", "list_kapp_attribute_definitions", operationDescriptionListKappAttributeDefinitions, aliasDescriptionListKappAttributeDefinitions, inputSchemaListKappAttributeDefinitions, executeListKappAttributeDefinitions);

  const opListKappIntegrations = requireOperation(operationMap, "listKappIntegrations");
  const operationDescriptionListKappIntegrations = "[kapp] Kapp Integrations List. (GET /kapps/{kappSlug}/integrations). Operation ID: listKappIntegrations. Custom logic: default OAS execution.";
  const aliasDescriptionListKappIntegrations = "[kapp] Kapp Integrations List. (GET /kapps/{kappSlug}/integrations). Operation ID: listKappIntegrations. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/integrations. Tags: Integrations. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListKappIntegrations = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListKappIntegrations = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/integrations
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListKappIntegrations, input);
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

  registerOperationTool(server, "core_listKappIntegrations", "list_kapp_integrations", operationDescriptionListKappIntegrations, aliasDescriptionListKappIntegrations, inputSchemaListKappIntegrations, executeListKappIntegrations);

  const opListKapps = requireOperation(operationMap, "listKapps");
  const operationDescriptionListKapps = "[kapp] Kapp Search. (GET /kapps). Operation ID: listKapps. Custom logic: default OAS execution.";
  const aliasDescriptionListKapps = "[kapp] Kapp Search. (GET /kapps). Operation ID: listKapps. Custom logic: default OAS execution. Use this alias for GET /kapps. Tags: Kapps. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListKapps = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categories\n\n* categorizations\n\n* categoryAttributeDefinitions\n\n* formAttributeDefinitions\n\n* formAttributeDefinitions\n\n* integrations\n\n* kappAttributeDefinitions\n\n* securityPolicyDefinitions\n\n* securityPolicies\n\n* webhooks\n\n* space\n\n* space.{any space include property}"),
    count: z.boolean().optional().describe("If the count query parameter is specified, the server will respond with a count and no results for improved network performance of getting 'counts'."),
    limit: z.number().int().optional().describe("Limit the number of results returned.\n\nIf not provided, the server will return the default, maximum limit of `1000` results.\n\n**DEPRECATION NOTICE:** Pagination functionality was introduced in version 2.4. In order to provide backwards compatibility with previous versions, if you provide the limit parameter, results will be paginated. If you don't provide the limit parameter, the full result will be returned. The ability to return the full result set will be deprecated in a later version in favor of a paginated set of results."),
    orderBy: z.string().optional().describe("A comma separated list of any of the following kapp properties to order (sort) results by\n\n* `createdAt`\n\n* `updatedAt`\n\n* `name`\n\n* `slug`\n\n* `status`\n\n* `attributes[Attribute Name]`"),
    direction: z.enum(["ASC","DESC"]).optional().describe("The direction the results should be ordered by, either ascending or descending."),
    pageToken: z.string().optional().describe("The token to get the next page of results.\n\nThis value is set using the nextPageToken value returned by a search with the same query to get the next page or results."),
    q: z.string().optional().describe("Search qualification parameter used to find kapps within the system.\n\n\n#### Common Example Queries\n\n* `q=name =* \"Catalog\"`\n\n    Returns all Kapps that have a name that begins with \"Catalog\".\n\n\n#### Operators:\n\n* `BETWEEN`\n\n    left side is between two values - first value is inclusive, second value is exclusive\n\n* `IN`\n\n    left side is equal to one of provided items\n\n* `=`\n\n    equal\n\n* `=*`\n\n    starts with\n\n* `*=*`\n\n    contains\n\n* `>`\n\n    greater than\n\n* `>=`\n\n    greater than or equal\n\n* `<`\n\n    less than\n\n* `<=`\n\n    less than or equal\n\n* `AND`\n\n    Returns boolean true if and only if both expressions are true\n\n* `OR`\n\n    Returns boolean true if at least one expression is true\n\n\n#### Queryable Properties\n\n##### The following properties can be used within a search with the `=`, `IN`, `=*` (starts with), `*=*` (contains), `<`, `<=`, `>`, `>=`, and `BETWEEN` operators.\n\n* `createdAt`                         (The ISO 8601 time that when the kapp was created)\n\n    *Example:*                        `q=createdAt BETWEEN (\"2018-04-16T18:42:56.000Z\",\"2019-04-16T18:42:56.000Z\")`\n\n* `name`                              (Name of the kapp)\n\n    *Example:*                        `q=name=\"HR Approval\"`\n\n* `slug`                              (Slug of the kapp)\n\n    *Example:*                        `q=slug=\"hr-approval\"`\n\n* `updatedAt`                         (The ISO 8601 time that when the kapp was last updated)\n\n    *Example:*                        `q=updatedAt >= \"2018-04-16T18:42:56.000Z\"`\n\n* `attributes[Attribute Name]`        (Attribute Value of a kapp)\n\n    *Example:*                        `q=attributes[Icon]=\"fa-comment\"`\n\n\n#### Pagination\n\nThe system will paginate search results based on the `limit` parameter.  If there are more results than the `limit` parameter (or more than 1000 results if the limit parameter is not provided), a `nextPageToken` will be included in the response.  The `nextPageToken` value can be passed as the `pageToken` parameter in subsequent queries to obtain the next page of results.\n\n**DEPRECATION NOTICE:** Pagination functionality was introduced in version 2.4. In order to provide backwards compatibility with previous versions, if you provide the limit parameter, results will be paginated. If you don't provide the limit parameter, the full result will be returned. The ability to return the full result set will be deprecated in a later version in favor of a paginated set of results.\n\nExample Response with a next page token:\n\n```javascript\n{\n  \"kapps\": [{...}, {...}],\n  \"nextPageToken\": \"YWJib3R0LmRldmFuQHRoaWVsLm9yZw.4wg2me95blthjyzdvkfs56oc3\"\n}\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListKapps = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListKapps, input);
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

  registerOperationTool(server, "core_listKapps", "list_kapps", operationDescriptionListKapps, aliasDescriptionListKapps, inputSchemaListKapps, executeListKapps);

  const opListKappSecurityPolicyDefinitions = requireOperation(operationMap, "listKappSecurityPolicyDefinitions");
  const operationDescriptionListKappSecurityPolicyDefinitions = "[kapp] Kapp Security Policy Definition List. (GET /kapps/{kappSlug}/securityPolicyDefinitions). Operation ID: listKappSecurityPolicyDefinitions. Custom logic: default OAS execution.";
  const aliasDescriptionListKappSecurityPolicyDefinitions = "[kapp] Kapp Security Policy Definition List. (GET /kapps/{kappSlug}/securityPolicyDefinitions). Operation ID: listKappSecurityPolicyDefinitions. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/securityPolicyDefinitions. Tags: Security Policy Definitions. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListKappSecurityPolicyDefinitions = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListKappSecurityPolicyDefinitions = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/securityPolicyDefinitions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListKappSecurityPolicyDefinitions, input);
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

  registerOperationTool(server, "core_listKappSecurityPolicyDefinitions", "list_kapp_security_policy_definitions", operationDescriptionListKappSecurityPolicyDefinitions, aliasDescriptionListKappSecurityPolicyDefinitions, inputSchemaListKappSecurityPolicyDefinitions, executeListKappSecurityPolicyDefinitions);

  const opListKappWebAPIs = requireOperation(operationMap, "listKappWebAPIs");
  const operationDescriptionListKappWebAPIs = "[kapp] Kapp WebAPI List. (GET /kapps/{kappSlug}/webApis). Operation ID: listKappWebAPIs. Custom logic: default OAS execution.";
  const aliasDescriptionListKappWebAPIs = "[kapp] Kapp WebAPI List. (GET /kapps/{kappSlug}/webApis). Operation ID: listKappWebAPIs. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/webApis. Tags: WebAPIs. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListKappWebAPIs = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    kappSlug: z.string().describe("The slug of the Kapp"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListKappWebAPIs = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/webApis
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListKappWebAPIs, input);
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

  registerOperationTool(server, "core_listKappWebAPIs", "list_kapp_web_apis", operationDescriptionListKappWebAPIs, aliasDescriptionListKappWebAPIs, inputSchemaListKappWebAPIs, executeListKappWebAPIs);

  const opListKappWebhookJobs = requireOperation(operationMap, "listKappWebhookJobs");
  const operationDescriptionListKappWebhookJobs = "[kapp] Kapp Webhook Job Search. (GET /kapps/{kappSlug}/webhookJobs). Operation ID: listKappWebhookJobs. Custom logic: default OAS execution.";
  const aliasDescriptionListKappWebhookJobs = "[kapp] Kapp Webhook Job Search. (GET /kapps/{kappSlug}/webhookJobs). Operation ID: listKappWebhookJobs. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/webhookJobs. Tags: Webhook Jobs. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListKappWebhookJobs = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    all: z.boolean().optional().describe("Indicates all webhook jobs that exist within the Space should be retrieved."),
    status: z.enum(["failed","queued"]).optional().describe("Filter the webhook jobs to optionally display only records that are failed or queued."),
    webhook: z.string().optional().describe("Name of the webhook to search for."),
    parentType: z.enum(["Form","Submission"]).optional().describe("The Parent object type."),
    parentKey: z.string().optional().describe("The unique key value for the specified record.\n\nThe value will depend on the parentType selected.\n\n* If parentKey is `Form`, then key should be the value of the form slug\n\n* If parentKey is `Submission`, then key should be the value of the submission id"),
    limit: z.number().int().optional().describe("Limit the number of results returned.\n\nIf not provided, the server will limit the results to 25 jobs."),
    pageToken: z.string().optional().describe("The token to get the next page of results.\n\nThis value is set using the nextPageToken value returned by a search with the same query to get the next page or results."),
    start: z.string().optional().describe("Inclusive starting date/time boundary for when the job was scheduled at.\n\nMust be in the following ISO8601 format; `yyyy-MM-dd'T'HH:mm:ss'Z'`"),
    end: z.string().optional().describe("Exclusive ending date/time boundary for when the job was scheduled at.\n\nMust be in the following ISO8601 format; `yyyy-MM-dd'T'HH:mm:ss'Z'`"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListKappWebhookJobs = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/webhookJobs
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListKappWebhookJobs, input);
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

  registerOperationTool(server, "core_listKappWebhookJobs", "list_kapp_webhook_jobs", operationDescriptionListKappWebhookJobs, aliasDescriptionListKappWebhookJobs, inputSchemaListKappWebhookJobs, executeListKappWebhookJobs);

  const opListKappWebhooks = requireOperation(operationMap, "listKappWebhooks");
  const operationDescriptionListKappWebhooks = "[kapp] Kapp Webhook List. (GET /kapps/{kappSlug}/webhooks). Operation ID: listKappWebhooks. Custom logic: default OAS execution.";
  const aliasDescriptionListKappWebhooks = "[kapp] Kapp Webhook List. (GET /kapps/{kappSlug}/webhooks). Operation ID: listKappWebhooks. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/webhooks. Tags: Webhooks. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListKappWebhooks = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListKappWebhooks = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/webhooks
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListKappWebhooks, input);
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

  registerOperationTool(server, "core_listKappWebhooks", "list_kapp_webhooks", operationDescriptionListKappWebhooks, aliasDescriptionListKappWebhooks, inputSchemaListKappWebhooks, executeListKappWebhooks);

  const opRepairKappWorkflow = requireOperation(operationMap, "repairKappWorkflow");
  const operationDescriptionRepairKappWorkflow = "[kapp] Kapp Workflow Repair. (POST /kapps/{kappSlug}/workflows/repair). Operation ID: repairKappWorkflow. Custom logic: default OAS execution.";
  const aliasDescriptionRepairKappWorkflow = "[kapp] Kapp Workflow Repair. (POST /kapps/{kappSlug}/workflows/repair). Operation ID: repairKappWorkflow. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/workflows/repair. Tags: Workflows. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRepairKappWorkflow = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRepairKappWorkflow = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/workflows/repair
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRepairKappWorkflow, input);
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

  registerOperationTool(server, "core_repairKappWorkflow", "repair_kapp_workflow", operationDescriptionRepairKappWorkflow, aliasDescriptionRepairKappWorkflow, inputSchemaRepairKappWorkflow, executeRepairKappWorkflow);

  const opRetrieveCategoryAttributeDefinition = requireOperation(operationMap, "retrieveCategoryAttributeDefinition");
  const operationDescriptionRetrieveCategoryAttributeDefinition = "[kapp] Kapp Category Attribute Definition Retrieve. (GET /kapps/{kappSlug}/categoryAttributeDefinitions/{name}). Operation ID: retrieveCategoryAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveCategoryAttributeDefinition = "[kapp] Kapp Category Attribute Definition Retrieve. (GET /kapps/{kappSlug}/categoryAttributeDefinitions/{name}). Operation ID: retrieveCategoryAttributeDefinition. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/categoryAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveCategoryAttributeDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the attribute definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveCategoryAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/categoryAttributeDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveCategoryAttributeDefinition, input);
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

  registerOperationTool(server, "core_retrieveCategoryAttributeDefinition", "retrieve_category_attribute_definition", operationDescriptionRetrieveCategoryAttributeDefinition, aliasDescriptionRetrieveCategoryAttributeDefinition, inputSchemaRetrieveCategoryAttributeDefinition, executeRetrieveCategoryAttributeDefinition);

  const opRetrieveKapp = requireOperation(operationMap, "retrieveKapp");
  const operationDescriptionRetrieveKapp = "[kapp] Kapp Retrieve. (GET /kapps/{kappSlug}). Operation ID: retrieveKapp. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveKapp = "[kapp] Kapp Retrieve. (GET /kapps/{kappSlug}). Operation ID: retrieveKapp. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}. Tags: Kapps. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveKapp = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categories\n\n* categorizations\n\n* categoryAttributeDefinitions\n\n* formAttributeDefinitions\n\n* formAttributeDefinitions\n\n* integrations\n\n* kappAttributeDefinitions\n\n* securityPolicyDefinitions\n\n* securityPolicies\n\n* webhooks\n\n* space\n\n* space.{any space include property}"),
    export: z.boolean().optional().describe("flag indicating the API should export all child components of the kapp."),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveKapp = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveKapp, input);
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

  registerOperationTool(server, "core_retrieveKapp", "retrieve_kapp", operationDescriptionRetrieveKapp, aliasDescriptionRetrieveKapp, inputSchemaRetrieveKapp, executeRetrieveKapp);

  const opRetrieveKappAttributeDefinition = requireOperation(operationMap, "retrieveKappAttributeDefinition");
  const operationDescriptionRetrieveKappAttributeDefinition = "[kapp] Kapp Attribute Definition Retrieve. (GET /kapps/{kappSlug}/kappAttributeDefinitions/{name}). Operation ID: retrieveKappAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveKappAttributeDefinition = "[kapp] Kapp Attribute Definition Retrieve. (GET /kapps/{kappSlug}/kappAttributeDefinitions/{name}). Operation ID: retrieveKappAttributeDefinition. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/kappAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveKappAttributeDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the attribute definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveKappAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/kappAttributeDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveKappAttributeDefinition, input);
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

  registerOperationTool(server, "core_retrieveKappAttributeDefinition", "retrieve_kapp_attribute_definition", operationDescriptionRetrieveKappAttributeDefinition, aliasDescriptionRetrieveKappAttributeDefinition, inputSchemaRetrieveKappAttributeDefinition, executeRetrieveKappAttributeDefinition);

  const opRetrieveKappSecurityPolicyDefinition = requireOperation(operationMap, "retrieveKappSecurityPolicyDefinition");
  const operationDescriptionRetrieveKappSecurityPolicyDefinition = "[kapp] Kapp Security Policy Definition Retrieve. (GET /kapps/{kappSlug}/securityPolicyDefinitions/{name}). Operation ID: retrieveKappSecurityPolicyDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveKappSecurityPolicyDefinition = "[kapp] Kapp Security Policy Definition Retrieve. (GET /kapps/{kappSlug}/securityPolicyDefinitions/{name}). Operation ID: retrieveKappSecurityPolicyDefinition. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/securityPolicyDefinitions/{name}. Tags: Security Policy Definitions. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveKappSecurityPolicyDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the security policy definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveKappSecurityPolicyDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/securityPolicyDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveKappSecurityPolicyDefinition, input);
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

  registerOperationTool(server, "core_retrieveKappSecurityPolicyDefinition", "retrieve_kapp_security_policy_definition", operationDescriptionRetrieveKappSecurityPolicyDefinition, aliasDescriptionRetrieveKappSecurityPolicyDefinition, inputSchemaRetrieveKappSecurityPolicyDefinition, executeRetrieveKappSecurityPolicyDefinition);

  const opRetrieveKappWebhook = requireOperation(operationMap, "retrieveKappWebhook");
  const operationDescriptionRetrieveKappWebhook = "[kapp] Kapp Webhook Retrieve. (GET /kapps/{kappSlug}/webhooks/{name}). Operation ID: retrieveKappWebhook. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveKappWebhook = "[kapp] Kapp Webhook Retrieve. (GET /kapps/{kappSlug}/webhooks/{name}). Operation ID: retrieveKappWebhook. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/webhooks/{name}. Tags: Webhooks. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveKappWebhook = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the webhook"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveKappWebhook = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/webhooks/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveKappWebhook, input);
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

  registerOperationTool(server, "core_retrieveKappWebhook", "retrieve_kapp_webhook", operationDescriptionRetrieveKappWebhook, aliasDescriptionRetrieveKappWebhook, inputSchemaRetrieveKappWebhook, executeRetrieveKappWebhook);

  const opRetrieveKappWebhookJob = requireOperation(operationMap, "retrieveKappWebhookJob");
  const operationDescriptionRetrieveKappWebhookJob = "[kapp] Kapp Webhook Job Retrieve. (GET /kapps/{kappSlug}/webhookJobs/{id}). Operation ID: retrieveKappWebhookJob. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveKappWebhookJob = "[kapp] Kapp Webhook Job Retrieve. (GET /kapps/{kappSlug}/webhookJobs/{id}). Operation ID: retrieveKappWebhookJob. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/webhookJobs/{id}. Tags: Webhook Jobs. Required inputs: kappSlug (path), id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveKappWebhookJob = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    id: z.string().describe("The id of the webhook job"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveKappWebhookJob = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/webhookJobs/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveKappWebhookJob, input);
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

  registerOperationTool(server, "core_retrieveKappWebhookJob", "retrieve_kapp_webhook_job", operationDescriptionRetrieveKappWebhookJob, aliasDescriptionRetrieveKappWebhookJob, inputSchemaRetrieveKappWebhookJob, executeRetrieveKappWebhookJob);

  const opRetrieveKappWorkflow = requireOperation(operationMap, "retrieveKappWorkflow");
  const operationDescriptionRetrieveKappWorkflow = "[kapp] Kapp Workflow Retrieve. (GET /kapps/{kappSlug}/workflows/{id}). Operation ID: retrieveKappWorkflow. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveKappWorkflow = "[kapp] Kapp Workflow Retrieve. (GET /kapps/{kappSlug}/workflows/{id}). Operation ID: retrieveKappWorkflow. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/workflows/{id}. Tags: Workflows. Required inputs: kappSlug (path), id (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveKappWorkflow = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    id: z.string().describe("The id of the workflow"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveKappWorkflow = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/workflows/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveKappWorkflow, input);
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

  registerOperationTool(server, "core_retrieveKappWorkflow", "retrieve_kapp_workflow", operationDescriptionRetrieveKappWorkflow, aliasDescriptionRetrieveKappWorkflow, inputSchemaRetrieveKappWorkflow, executeRetrieveKappWorkflow);

  const opRetrieveKappWorkflows = requireOperation(operationMap, "retrieveKappWorkflows");
  const operationDescriptionRetrieveKappWorkflows = "[kapp] Kapp Workflows Retrieve. (GET /kapps/{kappSlug}/workflows). Operation ID: retrieveKappWorkflows. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveKappWorkflows = "[kapp] Kapp Workflows Retrieve. (GET /kapps/{kappSlug}/workflows). Operation ID: retrieveKappWorkflows. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/workflows. Tags: Workflows. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveKappWorkflows = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveKappWorkflows = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/workflows
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveKappWorkflows, input);
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

  registerOperationTool(server, "core_retrieveKappWorkflows", "retrieve_kapp_workflows", operationDescriptionRetrieveKappWorkflows, aliasDescriptionRetrieveKappWorkflows, inputSchemaRetrieveKappWorkflows, executeRetrieveKappWorkflows);

  const opUpdateCategoryAttributeDefinition = requireOperation(operationMap, "updateCategoryAttributeDefinition");
  const operationDescriptionUpdateCategoryAttributeDefinition = "[kapp] Kapp Category Attribute Definition Update. (PUT /kapps/{kappSlug}/categoryAttributeDefinitions/{name}). Operation ID: updateCategoryAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateCategoryAttributeDefinition = "[kapp] Kapp Category Attribute Definition Update. (PUT /kapps/{kappSlug}/categoryAttributeDefinitions/{name}). Operation ID: updateCategoryAttributeDefinition. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/categoryAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: kappSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateCategoryAttributeDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the attribute definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the attribute definition properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateCategoryAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/categoryAttributeDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateCategoryAttributeDefinition, input);
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

  registerOperationTool(server, "core_updateCategoryAttributeDefinition", "update_category_attribute_definition", operationDescriptionUpdateCategoryAttributeDefinition, aliasDescriptionUpdateCategoryAttributeDefinition, inputSchemaUpdateCategoryAttributeDefinition, executeUpdateCategoryAttributeDefinition);

  const opUpdateKapp = requireOperation(operationMap, "updateKapp");
  const operationDescriptionUpdateKapp = "[kapp] Kapp Update. (PUT /kapps/{kappSlug}). Operation ID: updateKapp. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateKapp = "[kapp] Kapp Update. (PUT /kapps/{kappSlug}). Operation ID: updateKapp. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}. Tags: Kapps. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateKapp = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categories\n\n* categorizations\n\n* categoryAttributeDefinitions\n\n* formAttributeDefinitions\n\n* formAttributeDefinitions\n\n* integrations\n\n* kappAttributeDefinitions\n\n* securityPolicyDefinitions\n\n* securityPolicies\n\n* webhooks\n\n* space\n\n* space.{any space include property}"),
    body: z.any().describe("The content for the kapp properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateKapp = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateKapp, input);
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

  registerOperationTool(server, "core_updateKapp", "update_kapp", operationDescriptionUpdateKapp, aliasDescriptionUpdateKapp, inputSchemaUpdateKapp, executeUpdateKapp);

  const opUpdateKappAttributeDefinition = requireOperation(operationMap, "updateKappAttributeDefinition");
  const operationDescriptionUpdateKappAttributeDefinition = "[kapp] Kapp Attribute Definition Update. (PUT /kapps/{kappSlug}/kappAttributeDefinitions/{name}). Operation ID: updateKappAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateKappAttributeDefinition = "[kapp] Kapp Attribute Definition Update. (PUT /kapps/{kappSlug}/kappAttributeDefinitions/{name}). Operation ID: updateKappAttributeDefinition. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/kappAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: kappSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateKappAttributeDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the attribute definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the attribute definition properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateKappAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/kappAttributeDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateKappAttributeDefinition, input);
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

  registerOperationTool(server, "core_updateKappAttributeDefinition", "update_kapp_attribute_definition", operationDescriptionUpdateKappAttributeDefinition, aliasDescriptionUpdateKappAttributeDefinition, inputSchemaUpdateKappAttributeDefinition, executeUpdateKappAttributeDefinition);

  const opUpdateKappIntegration = requireOperation(operationMap, "updateKappIntegration");
  const operationDescriptionUpdateKappIntegration = "[kapp] Kapp Integration Update. (PUT /kapps/{kappSlug}/integrations/{name}). Operation ID: updateKappIntegration. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateKappIntegration = "[kapp] Kapp Integration Update. (PUT /kapps/{kappSlug}/integrations/{name}). Operation ID: updateKappIntegration. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/integrations/{name}. Tags: Integrations. Required inputs: kappSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateKappIntegration = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the integration"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("The content for the integration properties"),
  };
  const executeUpdateKappIntegration = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/integrations/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateKappIntegration, input);
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

  registerOperationTool(server, "core_updateKappIntegration", "update_kapp_integration", operationDescriptionUpdateKappIntegration, aliasDescriptionUpdateKappIntegration, inputSchemaUpdateKappIntegration, executeUpdateKappIntegration);

  const opUpdateKappSecurityPolicyDefinition = requireOperation(operationMap, "updateKappSecurityPolicyDefinition");
  const operationDescriptionUpdateKappSecurityPolicyDefinition = "[kapp] Kapp Security Policy Definition Update. (PUT /kapps/{kappSlug}/securityPolicyDefinitions/{name}). Operation ID: updateKappSecurityPolicyDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateKappSecurityPolicyDefinition = "[kapp] Kapp Security Policy Definition Update. (PUT /kapps/{kappSlug}/securityPolicyDefinitions/{name}). Operation ID: updateKappSecurityPolicyDefinition. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/securityPolicyDefinitions/{name}. Tags: Security Policy Definitions. Required inputs: kappSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateKappSecurityPolicyDefinition = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the security policy definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the security policy definition properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateKappSecurityPolicyDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/securityPolicyDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateKappSecurityPolicyDefinition, input);
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

  registerOperationTool(server, "core_updateKappSecurityPolicyDefinition", "update_kapp_security_policy_definition", operationDescriptionUpdateKappSecurityPolicyDefinition, aliasDescriptionUpdateKappSecurityPolicyDefinition, inputSchemaUpdateKappSecurityPolicyDefinition, executeUpdateKappSecurityPolicyDefinition);

  const opUpdateKappWebAPI = requireOperation(operationMap, "updateKappWebAPI");
  const operationDescriptionUpdateKappWebAPI = "[kapp] Kapp WebAPI Update. (PUT /kapps/{kappSlug}/webApis/{webApiSlug}). Operation ID: updateKappWebAPI. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateKappWebAPI = "[kapp] Kapp WebAPI Update. (PUT /kapps/{kappSlug}/webApis/{webApiSlug}). Operation ID: updateKappWebAPI. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/webApis/{webApiSlug}. Tags: WebAPIs. Required inputs: kappSlug (path), webApiSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateKappWebAPI = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    webApiSlug: z.string().describe("The slug of the WebAPI"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
    body: z.any().describe("The content for the webapi properties to update"),
  };
  const executeUpdateKappWebAPI = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/webApis/{webApiSlug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateKappWebAPI, input);
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

  registerOperationTool(server, "core_updateKappWebAPI", "update_kapp_web_api", operationDescriptionUpdateKappWebAPI, aliasDescriptionUpdateKappWebAPI, inputSchemaUpdateKappWebAPI, executeUpdateKappWebAPI);

  const opUpdateKappWebhook = requireOperation(operationMap, "updateKappWebhook");
  const operationDescriptionUpdateKappWebhook = "[kapp] Kapp Webhook Update. (PUT /kapps/{kappSlug}/webhooks/{name}). Operation ID: updateKappWebhook. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateKappWebhook = "[kapp] Kapp Webhook Update. (PUT /kapps/{kappSlug}/webhooks/{name}). Operation ID: updateKappWebhook. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/webhooks/{name}. Tags: Webhooks. Required inputs: kappSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateKappWebhook = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the webhook"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the webhook properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateKappWebhook = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/webhooks/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateKappWebhook, input);
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

  registerOperationTool(server, "core_updateKappWebhook", "update_kapp_webhook", operationDescriptionUpdateKappWebhook, aliasDescriptionUpdateKappWebhook, inputSchemaUpdateKappWebhook, executeUpdateKappWebhook);

  const opUpdateKappWebhookJob = requireOperation(operationMap, "updateKappWebhookJob");
  const operationDescriptionUpdateKappWebhookJob = "[kapp] Kapp Webhook Job Update. (PUT /kapps/{kappSlug}/webhookJobs/{id}). Operation ID: updateKappWebhookJob. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateKappWebhookJob = "[kapp] Kapp Webhook Job Update. (PUT /kapps/{kappSlug}/webhookJobs/{id}). Operation ID: updateKappWebhookJob. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/webhookJobs/{id}. Tags: Webhook Jobs. Required inputs: kappSlug (path), id (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateKappWebhookJob = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    id: z.string().describe("The id of the webhook job"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the webhook job properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateKappWebhookJob = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/webhookJobs/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateKappWebhookJob, input);
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

  registerOperationTool(server, "core_updateKappWebhookJob", "update_kapp_webhook_job", operationDescriptionUpdateKappWebhookJob, aliasDescriptionUpdateKappWebhookJob, inputSchemaUpdateKappWebhookJob, executeUpdateKappWebhookJob);

  const opUpdateKappWorkflow = requireOperation(operationMap, "updateKappWorkflow");
  const operationDescriptionUpdateKappWorkflow = "[kapp] Kapp Workflow Update. (PUT /kapps/{kappSlug}/workflows/{id}). Operation ID: updateKappWorkflow. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateKappWorkflow = "[kapp] Kapp Workflow Update. (PUT /kapps/{kappSlug}/workflows/{id}). Operation ID: updateKappWorkflow. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/workflows/{id}. Tags: Workflows. Required inputs: kappSlug (path), id (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateKappWorkflow = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    id: z.string().describe("The id of the workflow"),
    body: z.any().describe("The content for the workflow properties to update"),
  };
  const executeUpdateKappWorkflow = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/workflows/{id}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateKappWorkflow, input);
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

  registerOperationTool(server, "core_updateKappWorkflow", "update_kapp_workflow", operationDescriptionUpdateKappWorkflow, aliasDescriptionUpdateKappWorkflow, inputSchemaUpdateKappWorkflow, executeUpdateKappWorkflow);

}
