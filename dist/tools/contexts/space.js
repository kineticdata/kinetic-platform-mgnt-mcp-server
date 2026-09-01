import { z } from "zod";
import { registerOperationTool, requireOperation } from "./shared.js";
export function registerSpaceTools(server, runtime) {
    const { operationMap, invokeDefaultOperation } = runtime;
    const opApplicationVersion = requireOperation(operationMap, "applicationVersion");
    const operationDescriptionApplicationVersion = "[space] Version Retrieve. (GET /version). Operation ID: applicationVersion. Custom logic: default OAS execution.";
    const aliasDescriptionApplicationVersion = "[space] Version Retrieve. (GET /version). Operation ID: applicationVersion. Custom logic: default OAS execution. Use this alias for GET /version. Tags: Metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaApplicationVersion = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeApplicationVersion = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /version
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opApplicationVersion, input);
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
    };
    registerOperationTool(server, "core_applicationVersion", "application_version", operationDescriptionApplicationVersion, aliasDescriptionApplicationVersion, inputSchemaApplicationVersion, executeApplicationVersion);
    const opCheckLicense = requireOperation(operationMap, "checkLicense");
    const operationDescriptionCheckLicense = "[space] License Retrieve. (GET /license-check). Operation ID: checkLicense. Custom logic: default OAS execution.";
    const aliasDescriptionCheckLicense = "[space] License Retrieve. (GET /license-check). Operation ID: checkLicense. Custom logic: default OAS execution. Use this alias for GET /license-check. Tags: Metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaCheckLicense = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeCheckLicense = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /license-check
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCheckLicense, input);
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
    };
    registerOperationTool(server, "core_checkLicense", "check_license", operationDescriptionCheckLicense, aliasDescriptionCheckLicense, inputSchemaCheckLicense, executeCheckLicense);
    const opClearTranslationsCache = requireOperation(operationMap, "clearTranslationsCache");
    const operationDescriptionClearTranslationsCache = "[space] Translation Cache Delete. (DELETE /translations/cache). Operation ID: clearTranslationsCache. Custom logic: default OAS execution.";
    const aliasDescriptionClearTranslationsCache = "[space] Translation Cache Delete. (DELETE /translations/cache). Operation ID: clearTranslationsCache. Custom logic: default OAS execution. Use this alias for DELETE /translations/cache. Tags: Translations. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaClearTranslationsCache = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeClearTranslationsCache = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /translations/cache
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opClearTranslationsCache, input);
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
    };
    registerOperationTool(server, "core_clearTranslationsCache", "clear_translations_cache", operationDescriptionClearTranslationsCache, aliasDescriptionClearTranslationsCache, inputSchemaClearTranslationsCache, executeClearTranslationsCache);
    const opCreateSecurityPolicyDefinition = requireOperation(operationMap, "createSecurityPolicyDefinition");
    const operationDescriptionCreateSecurityPolicyDefinition = "[space] Space Security Policy Definition Create. (POST /securityPolicyDefinitions). Operation ID: createSecurityPolicyDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionCreateSecurityPolicyDefinition = "[space] Space Security Policy Definition Create. (POST /securityPolicyDefinitions). Operation ID: createSecurityPolicyDefinition. Custom logic: default OAS execution. Use this alias for POST /securityPolicyDefinitions. Tags: Security Policy Definitions. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateSecurityPolicyDefinition = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the security policy definition properties"),
    };
    const executeCreateSecurityPolicyDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /securityPolicyDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateSecurityPolicyDefinition, input);
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
    };
    registerOperationTool(server, "core_createSecurityPolicyDefinition", "create_security_policy_definition", operationDescriptionCreateSecurityPolicyDefinition, aliasDescriptionCreateSecurityPolicyDefinition, inputSchemaCreateSecurityPolicyDefinition, executeCreateSecurityPolicyDefinition);
    const opCreateSpaceAttributeDefinition = requireOperation(operationMap, "createSpaceAttributeDefinition");
    const operationDescriptionCreateSpaceAttributeDefinition = "[space] Space Attribute Definition Create. (POST /spaceAttributeDefinitions). Operation ID: createSpaceAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionCreateSpaceAttributeDefinition = "[space] Space Attribute Definition Create. (POST /spaceAttributeDefinitions). Operation ID: createSpaceAttributeDefinition. Custom logic: default OAS execution. Use this alias for POST /spaceAttributeDefinitions. Tags: Attribute Definitions. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateSpaceAttributeDefinition = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the attribute definition properties"),
    };
    const executeCreateSpaceAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /spaceAttributeDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateSpaceAttributeDefinition, input);
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
    };
    registerOperationTool(server, "core_createSpaceAttributeDefinition", "create_space_attribute_definition", operationDescriptionCreateSpaceAttributeDefinition, aliasDescriptionCreateSpaceAttributeDefinition, inputSchemaCreateSpaceAttributeDefinition, executeCreateSpaceAttributeDefinition);
    const opCreateSpaceWebAPI = requireOperation(operationMap, "createSpaceWebAPI");
    const operationDescriptionCreateSpaceWebAPI = "[space] Space WebAPI Create. (POST /webApis). Operation ID: createSpaceWebAPI. Custom logic: default OAS execution.";
    const aliasDescriptionCreateSpaceWebAPI = "[space] Space WebAPI Create. (POST /webApis). Operation ID: createSpaceWebAPI. Custom logic: default OAS execution. Use this alias for POST /webApis. Tags: WebAPIs. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateSpaceWebAPI = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
        body: z.any().describe("The content for the webapi properties"),
    };
    const executeCreateSpaceWebAPI = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /webApis
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateSpaceWebAPI, input);
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
    };
    registerOperationTool(server, "core_createSpaceWebAPI", "create_space_web_api", operationDescriptionCreateSpaceWebAPI, aliasDescriptionCreateSpaceWebAPI, inputSchemaCreateSpaceWebAPI, executeCreateSpaceWebAPI);
    const opCreateSpaceWebhook = requireOperation(operationMap, "createSpaceWebhook");
    const operationDescriptionCreateSpaceWebhook = "[space] Space Webhook Create. (POST /webhooks). Operation ID: createSpaceWebhook. Custom logic: default OAS execution.";
    const aliasDescriptionCreateSpaceWebhook = "[space] Space Webhook Create. (POST /webhooks). Operation ID: createSpaceWebhook. Custom logic: default OAS execution. Use this alias for POST /webhooks. Tags: Webhooks. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateSpaceWebhook = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the webhook properties"),
    };
    const executeCreateSpaceWebhook = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /webhooks
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateSpaceWebhook, input);
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
    };
    registerOperationTool(server, "core_createSpaceWebhook", "create_space_webhook", operationDescriptionCreateSpaceWebhook, aliasDescriptionCreateSpaceWebhook, inputSchemaCreateSpaceWebhook, executeCreateSpaceWebhook);
    const opCreateSpaceWebhookJob = requireOperation(operationMap, "createSpaceWebhookJob");
    const operationDescriptionCreateSpaceWebhookJob = "[space] Space Webhook Job Create. (POST /webhookJobs). Operation ID: createSpaceWebhookJob. Custom logic: default OAS execution.";
    const aliasDescriptionCreateSpaceWebhookJob = "[space] Space Webhook Job Create. (POST /webhookJobs). Operation ID: createSpaceWebhookJob. Custom logic: default OAS execution. Use this alias for POST /webhookJobs. Tags: Webhook Jobs. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateSpaceWebhookJob = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the webhook job properties."),
    };
    const executeCreateSpaceWebhookJob = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /webhookJobs
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateSpaceWebhookJob, input);
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
    };
    registerOperationTool(server, "core_createSpaceWebhookJob", "create_space_webhook_job", operationDescriptionCreateSpaceWebhookJob, aliasDescriptionCreateSpaceWebhookJob, inputSchemaCreateSpaceWebhookJob, executeCreateSpaceWebhookJob);
    const opCreateSpaceWorkflow = requireOperation(operationMap, "createSpaceWorkflow");
    const operationDescriptionCreateSpaceWorkflow = "[space] Space Workflow Create. (POST /workflows). Operation ID: createSpaceWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionCreateSpaceWorkflow = "[space] Space Workflow Create. (POST /workflows). Operation ID: createSpaceWorkflow. Custom logic: default OAS execution. Use this alias for POST /workflows. Tags: Workflows. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateSpaceWorkflow = {
        force: z.boolean().optional().describe("Force the overwrite of an existing workflow on import"),
        body: z.any().describe("The content for the workflow properties"),
    };
    const executeCreateSpaceWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /workflows
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateSpaceWorkflow, input);
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
    };
    registerOperationTool(server, "core_createSpaceWorkflow", "create_space_workflow", operationDescriptionCreateSpaceWorkflow, aliasDescriptionCreateSpaceWorkflow, inputSchemaCreateSpaceWorkflow, executeCreateSpaceWorkflow);
    const opCreateTranslationContext = requireOperation(operationMap, "createTranslationContext");
    const operationDescriptionCreateTranslationContext = "[space] Translation Context Create. (POST /translations/contexts). Operation ID: createTranslationContext. Custom logic: default OAS execution.";
    const aliasDescriptionCreateTranslationContext = "[space] Translation Context Create. (POST /translations/contexts). Operation ID: createTranslationContext. Custom logic: default OAS execution. Use this alias for POST /translations/contexts. Tags: Translations. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateTranslationContext = {
        custom: z.enum(["custom"]).optional().describe("parameter indicating only custom contexts should be retrieved"),
        expected: z.enum(["expected"]).optional().describe("parameter indicating only expected contexts should be retrieved"),
        unexpected: z.enum(["unexpected"]).optional().describe("parameter indicating only unexpected contexts should be retrieved"),
        body: z.any().describe("The name of the locale to create."),
    };
    const executeCreateTranslationContext = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /translations/contexts
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateTranslationContext, input);
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
    };
    registerOperationTool(server, "core_createTranslationContext", "create_translation_context", operationDescriptionCreateTranslationContext, aliasDescriptionCreateTranslationContext, inputSchemaCreateTranslationContext, executeCreateTranslationContext);
    const opDeleteSecurityPolicyDefinition = requireOperation(operationMap, "deleteSecurityPolicyDefinition");
    const operationDescriptionDeleteSecurityPolicyDefinition = "[space] Space Security Policy Definition Delete. (DELETE /securityPolicyDefinitions/{name}). Operation ID: deleteSecurityPolicyDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteSecurityPolicyDefinition = "[space] Space Security Policy Definition Delete. (DELETE /securityPolicyDefinitions/{name}). Operation ID: deleteSecurityPolicyDefinition. Custom logic: default OAS execution. Use this alias for DELETE /securityPolicyDefinitions/{name}. Tags: Security Policy Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteSecurityPolicyDefinition = {
        name: z.string().describe("The name of the security policy definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteSecurityPolicyDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /securityPolicyDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteSecurityPolicyDefinition, input);
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
    };
    registerOperationTool(server, "core_deleteSecurityPolicyDefinition", "delete_security_policy_definition", operationDescriptionDeleteSecurityPolicyDefinition, aliasDescriptionDeleteSecurityPolicyDefinition, inputSchemaDeleteSecurityPolicyDefinition, executeDeleteSecurityPolicyDefinition);
    const opDeleteSpaceActivityCache = requireOperation(operationMap, "deleteSpaceActivityCache");
    const operationDescriptionDeleteSpaceActivityCache = "[space] Space Submission Metrics Delete. (DELETE /activity). Operation ID: deleteSpaceActivityCache. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteSpaceActivityCache = "[space] Space Submission Metrics Delete. (DELETE /activity). Operation ID: deleteSpaceActivityCache. Custom logic: default OAS execution. Use this alias for DELETE /activity. Tags: Metrics. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteSpaceActivityCache = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteSpaceActivityCache = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /activity
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteSpaceActivityCache, input);
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
    };
    registerOperationTool(server, "core_deleteSpaceActivityCache", "delete_space_activity_cache", operationDescriptionDeleteSpaceActivityCache, aliasDescriptionDeleteSpaceActivityCache, inputSchemaDeleteSpaceActivityCache, executeDeleteSpaceActivityCache);
    const opDeleteSpaceAttributeDefinition = requireOperation(operationMap, "deleteSpaceAttributeDefinition");
    const operationDescriptionDeleteSpaceAttributeDefinition = "[space] Space Attribute Definition Delete. (DELETE /spaceAttributeDefinitions/{name}). Operation ID: deleteSpaceAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteSpaceAttributeDefinition = "[space] Space Attribute Definition Delete. (DELETE /spaceAttributeDefinitions/{name}). Operation ID: deleteSpaceAttributeDefinition. Custom logic: default OAS execution. Use this alias for DELETE /spaceAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteSpaceAttributeDefinition = {
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteSpaceAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /spaceAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteSpaceAttributeDefinition, input);
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
    };
    registerOperationTool(server, "core_deleteSpaceAttributeDefinition", "delete_space_attribute_definition", operationDescriptionDeleteSpaceAttributeDefinition, aliasDescriptionDeleteSpaceAttributeDefinition, inputSchemaDeleteSpaceAttributeDefinition, executeDeleteSpaceAttributeDefinition);
    const opDeleteSpaceWebAPI = requireOperation(operationMap, "deleteSpaceWebAPI");
    const operationDescriptionDeleteSpaceWebAPI = "[space] Space WebAPI Delete. (DELETE /webApis/{webApiSlug}). Operation ID: deleteSpaceWebAPI. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteSpaceWebAPI = "[space] Space WebAPI Delete. (DELETE /webApis/{webApiSlug}). Operation ID: deleteSpaceWebAPI. Custom logic: default OAS execution. Use this alias for DELETE /webApis/{webApiSlug}. Tags: WebAPIs. Required inputs: webApiSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteSpaceWebAPI = {
        webApiSlug: z.string().describe("The slug of the WebAPI"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteSpaceWebAPI = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /webApis/{webApiSlug}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteSpaceWebAPI, input);
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
    };
    registerOperationTool(server, "core_deleteSpaceWebAPI", "delete_space_web_api", operationDescriptionDeleteSpaceWebAPI, aliasDescriptionDeleteSpaceWebAPI, inputSchemaDeleteSpaceWebAPI, executeDeleteSpaceWebAPI);
    const opDeleteSpaceWebhook = requireOperation(operationMap, "deleteSpaceWebhook");
    const operationDescriptionDeleteSpaceWebhook = "[space] Space Webhook Delete. (DELETE /webhooks/{name}). Operation ID: deleteSpaceWebhook. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteSpaceWebhook = "[space] Space Webhook Delete. (DELETE /webhooks/{name}). Operation ID: deleteSpaceWebhook. Custom logic: default OAS execution. Use this alias for DELETE /webhooks/{name}. Tags: Webhooks. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteSpaceWebhook = {
        name: z.string().describe("The name of the webhook"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteSpaceWebhook = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /webhooks/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteSpaceWebhook, input);
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
    };
    registerOperationTool(server, "core_deleteSpaceWebhook", "delete_space_webhook", operationDescriptionDeleteSpaceWebhook, aliasDescriptionDeleteSpaceWebhook, inputSchemaDeleteSpaceWebhook, executeDeleteSpaceWebhook);
    const opDeleteSpaceWebhookJob = requireOperation(operationMap, "deleteSpaceWebhookJob");
    const operationDescriptionDeleteSpaceWebhookJob = "[space] Space Webhook Job Delete. (DELETE /webhookJobs/{id}). Operation ID: deleteSpaceWebhookJob. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteSpaceWebhookJob = "[space] Space Webhook Job Delete. (DELETE /webhookJobs/{id}). Operation ID: deleteSpaceWebhookJob. Custom logic: default OAS execution. Use this alias for DELETE /webhookJobs/{id}. Tags: Webhook Jobs. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteSpaceWebhookJob = {
        id: z.string().describe("The id of the webhook job"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteSpaceWebhookJob = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /webhookJobs/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteSpaceWebhookJob, input);
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
    };
    registerOperationTool(server, "core_deleteSpaceWebhookJob", "delete_space_webhook_job", operationDescriptionDeleteSpaceWebhookJob, aliasDescriptionDeleteSpaceWebhookJob, inputSchemaDeleteSpaceWebhookJob, executeDeleteSpaceWebhookJob);
    const opDeleteSpaceWorkflow = requireOperation(operationMap, "deleteSpaceWorkflow");
    const operationDescriptionDeleteSpaceWorkflow = "[space] Space Workflow Delete. (DELETE /workflows/{id}). Operation ID: deleteSpaceWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteSpaceWorkflow = "[space] Space Workflow Delete. (DELETE /workflows/{id}). Operation ID: deleteSpaceWorkflow. Custom logic: default OAS execution. Use this alias for DELETE /workflows/{id}. Tags: Workflows. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteSpaceWorkflow = {
        id: z.string().describe("The id of the workflow"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteSpaceWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /workflows/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteSpaceWorkflow, input);
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
    };
    registerOperationTool(server, "core_deleteSpaceWorkflow", "delete_space_workflow", operationDescriptionDeleteSpaceWorkflow, aliasDescriptionDeleteSpaceWorkflow, inputSchemaDeleteSpaceWorkflow, executeDeleteSpaceWorkflow);
    const opDeleteTranslationContext = requireOperation(operationMap, "deleteTranslationContext");
    const operationDescriptionDeleteTranslationContext = "[space] Translation Context Delete. (DELETE /translations/contexts/{context}). Operation ID: deleteTranslationContext. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteTranslationContext = "[space] Translation Context Delete. (DELETE /translations/contexts/{context}). Operation ID: deleteTranslationContext. Custom logic: default OAS execution. Use this alias for DELETE /translations/contexts/{context}. Tags: Translations. Required inputs: context (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteTranslationContext = {
        context: z.string().describe("name of the translation context"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteTranslationContext = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /translations/contexts/{context}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteTranslationContext, input);
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
    };
    registerOperationTool(server, "core_deleteTranslationContext", "delete_translation_context", operationDescriptionDeleteTranslationContext, aliasDescriptionDeleteTranslationContext, inputSchemaDeleteTranslationContext, executeDeleteTranslationContext);
    const opDeleteTranslationEntries = requireOperation(operationMap, "deleteTranslationEntries");
    const operationDescriptionDeleteTranslationEntries = "[space] Translation Entry Delete. (DELETE /translations/entries). Operation ID: deleteTranslationEntries. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteTranslationEntries = "[space] Translation Entry Delete. (DELETE /translations/entries). Operation ID: deleteTranslationEntries. Custom logic: default OAS execution. Use this alias for DELETE /translations/entries. Tags: Translations. Required inputs: context (query), keyHash (query), locale (query). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteTranslationEntries = {
        context: z.string().describe("name of the translation context"),
        keyHash: z.string().describe("hash value of the key"),
        locale: z.string().describe("The locale code"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteTranslationEntries = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /translations/entries
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteTranslationEntries, input);
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
    };
    registerOperationTool(server, "core_deleteTranslationEntries", "delete_translation_entries", operationDescriptionDeleteTranslationEntries, aliasDescriptionDeleteTranslationEntries, inputSchemaDeleteTranslationEntries, executeDeleteTranslationEntries);
    const opDisableTranslationLocale = requireOperation(operationMap, "disableTranslationLocale");
    const operationDescriptionDisableTranslationLocale = "[space] Locale Disable. (DELETE /translations/settings/locales/{locale}). Operation ID: disableTranslationLocale. Custom logic: default OAS execution.";
    const aliasDescriptionDisableTranslationLocale = "[space] Locale Disable. (DELETE /translations/settings/locales/{locale}). Operation ID: disableTranslationLocale. Custom logic: default OAS execution. Use this alias for DELETE /translations/settings/locales/{locale}. Tags: Translations. Required inputs: locale (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDisableTranslationLocale = {
        locale: z.string().describe("The locale code"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDisableTranslationLocale = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /translations/settings/locales/{locale}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDisableTranslationLocale, input);
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
    };
    registerOperationTool(server, "core_disableTranslationLocale", "disable_translation_locale", operationDescriptionDisableTranslationLocale, aliasDescriptionDisableTranslationLocale, inputSchemaDisableTranslationLocale, executeDisableTranslationLocale);
    const opEnableTranslationLocale = requireOperation(operationMap, "enableTranslationLocale");
    const operationDescriptionEnableTranslationLocale = "[space] Locale Enable. (POST /translations/settings/locales). Operation ID: enableTranslationLocale. Custom logic: default OAS execution.";
    const aliasDescriptionEnableTranslationLocale = "[space] Locale Enable. (POST /translations/settings/locales). Operation ID: enableTranslationLocale. Custom logic: default OAS execution. Use this alias for POST /translations/settings/locales. Tags: Translations. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaEnableTranslationLocale = {
        body: z.any().describe("The code of the locale to enable."),
    };
    const executeEnableTranslationLocale = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /translations/settings/locales
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opEnableTranslationLocale, input);
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
    };
    registerOperationTool(server, "core_enableTranslationLocale", "enable_translation_locale", operationDescriptionEnableTranslationLocale, aliasDescriptionEnableTranslationLocale, inputSchemaEnableTranslationLocale, executeEnableTranslationLocale);
    const opExecuteKappIntegration = requireOperation(operationMap, "executeKappIntegration");
    const operationDescriptionExecuteKappIntegration = "[space] Kapp Integration Execute. (POST /integrations/kapps/{kappSlug}/{name}). Operation ID: executeKappIntegration. Custom logic: default OAS execution.";
    const aliasDescriptionExecuteKappIntegration = "[space] Kapp Integration Execute. (POST /integrations/kapps/{kappSlug}/{name}). Operation ID: executeKappIntegration. Custom logic: default OAS execution. Use this alias for POST /integrations/kapps/{kappSlug}/{name}. Tags: Integrations. Required inputs: kappSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaExecuteKappIntegration = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        name: z.string().describe("The name of the integration"),
        body: z.any().describe("The input mapping parameter values to send to the integration"),
    };
    const executeExecuteKappIntegration = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /integrations/kapps/{kappSlug}/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opExecuteKappIntegration, input);
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
    };
    registerOperationTool(server, "core_executeKappIntegration", "execute_kapp_integration", operationDescriptionExecuteKappIntegration, aliasDescriptionExecuteKappIntegration, inputSchemaExecuteKappIntegration, executeExecuteKappIntegration);
    const opExportSpaceWebAPI = requireOperation(operationMap, "exportSpaceWebAPI");
    const operationDescriptionExportSpaceWebAPI = "[space] Space WebAPI Export. (GET /webApis/{webApiSlug}/export). Operation ID: exportSpaceWebAPI. Custom logic: default OAS execution.";
    const aliasDescriptionExportSpaceWebAPI = "[space] Space WebAPI Export. (GET /webApis/{webApiSlug}/export). Operation ID: exportSpaceWebAPI. Custom logic: default OAS execution. Use this alias for GET /webApis/{webApiSlug}/export. Tags: WebAPIs. Required inputs: webApiSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaExportSpaceWebAPI = {
        webApiSlug: z.string().describe("The slug of the WebAPI"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeExportSpaceWebAPI = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /webApis/{webApiSlug}/export
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opExportSpaceWebAPI, input);
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
    };
    registerOperationTool(server, "core_exportSpaceWebAPI", "export_space_web_api", operationDescriptionExportSpaceWebAPI, aliasDescriptionExportSpaceWebAPI, inputSchemaExportSpaceWebAPI, executeExportSpaceWebAPI);
    const opFetchSpaceActivityMetrics = requireOperation(operationMap, "fetchSpaceActivityMetrics");
    const operationDescriptionFetchSpaceActivityMetrics = "[space] Space Submission Metrics Retrieve. (GET /activity). Operation ID: fetchSpaceActivityMetrics. Custom logic: default OAS execution.";
    const aliasDescriptionFetchSpaceActivityMetrics = "[space] Space Submission Metrics Retrieve. (GET /activity). Operation ID: fetchSpaceActivityMetrics. Custom logic: default OAS execution. Use this alias for GET /activity. Tags: Metrics. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaFetchSpaceActivityMetrics = {
        days: z.number().int().optional().describe("Number of days to fetch activity metrics for"),
        tz: z.string().optional().describe("Number of days to fetch activity metrics for"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeFetchSpaceActivityMetrics = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /activity
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opFetchSpaceActivityMetrics, input);
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
    };
    registerOperationTool(server, "core_fetchSpaceActivityMetrics", "fetch_space_activity_metrics", operationDescriptionFetchSpaceActivityMetrics, aliasDescriptionFetchSpaceActivityMetrics, inputSchemaFetchSpaceActivityMetrics, executeFetchSpaceActivityMetrics);
    const opFetchSpaceWebAPI = requireOperation(operationMap, "fetchSpaceWebAPI");
    const operationDescriptionFetchSpaceWebAPI = "[space] Space WebAPI Retrieve. (GET /webApis/{webApiSlug}). Operation ID: fetchSpaceWebAPI. Custom logic: default OAS execution.";
    const aliasDescriptionFetchSpaceWebAPI = "[space] Space WebAPI Retrieve. (GET /webApis/{webApiSlug}). Operation ID: fetchSpaceWebAPI. Custom logic: default OAS execution. Use this alias for GET /webApis/{webApiSlug}. Tags: WebAPIs. Required inputs: webApiSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaFetchSpaceWebAPI = {
        webApiSlug: z.string().describe("The slug of the WebAPI"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeFetchSpaceWebAPI = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /webApis/{webApiSlug}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opFetchSpaceWebAPI, input);
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
    };
    registerOperationTool(server, "core_fetchSpaceWebAPI", "fetch_space_web_api", operationDescriptionFetchSpaceWebAPI, aliasDescriptionFetchSpaceWebAPI, inputSchemaFetchSpaceWebAPI, executeFetchSpaceWebAPI);
    const opImportSpaceWebAPI = requireOperation(operationMap, "importSpaceWebAPI");
    const operationDescriptionImportSpaceWebAPI = "[space] Space WebAPI Import. (POST /webApiImport). Operation ID: importSpaceWebAPI. Custom logic: default OAS execution.";
    const aliasDescriptionImportSpaceWebAPI = "[space] Space WebAPI Import. (POST /webApiImport). Operation ID: importSpaceWebAPI. Custom logic: default OAS execution. Use this alias for POST /webApiImport. Tags: WebAPIs. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaImportSpaceWebAPI = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
        force: z.boolean().optional().describe("Force the overwrite of an existing web API on import"),
        body: z.any().describe("The content for the webapi properties"),
    };
    const executeImportSpaceWebAPI = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /webApiImport
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opImportSpaceWebAPI, input);
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
    };
    registerOperationTool(server, "core_importSpaceWebAPI", "import_space_web_api", operationDescriptionImportSpaceWebAPI, aliasDescriptionImportSpaceWebAPI, inputSchemaImportSpaceWebAPI, executeImportSpaceWebAPI);
    const opImportTranslationEntries = requireOperation(operationMap, "importTranslationEntries");
    const operationDescriptionImportTranslationEntries = "[space] Translation Entry Import. (POST /translations/entries). Operation ID: importTranslationEntries. Custom logic: default OAS execution.";
    const aliasDescriptionImportTranslationEntries = "[space] Translation Entry Import. (POST /translations/entries). Operation ID: importTranslationEntries. Custom logic: default OAS execution. Use this alias for POST /translations/entries. Tags: Translations. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaImportTranslationEntries = {
        import: z.enum(["csv", "json"]).optional().describe("format of the data (csv,json)"),
        body: z.any().describe("The translation entries to import.\n\nContext,Locale,Key,Value"),
    };
    const executeImportTranslationEntries = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /translations/entries
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opImportTranslationEntries, input);
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
    };
    registerOperationTool(server, "core_importTranslationEntries", "import_translation_entries", operationDescriptionImportTranslationEntries, aliasDescriptionImportTranslationEntries, inputSchemaImportTranslationEntries, executeImportTranslationEntries);
    const opKappWebhookEvents = requireOperation(operationMap, "kappWebhookEvents");
    const operationDescriptionKappWebhookEvents = "[space] Kapp Webhook Event List. (GET /meta/webhooks/events/kapp). Operation ID: kappWebhookEvents. Custom logic: default OAS execution.";
    const aliasDescriptionKappWebhookEvents = "[space] Kapp Webhook Event List. (GET /meta/webhooks/events/kapp). Operation ID: kappWebhookEvents. Custom logic: default OAS execution. Use this alias for GET /meta/webhooks/events/kapp. Tags: Metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaKappWebhookEvents = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeKappWebhookEvents = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /meta/webhooks/events/kapp
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opKappWebhookEvents, input);
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
    };
    registerOperationTool(server, "core_kappWebhookEvents", "kapp_webhook_events", operationDescriptionKappWebhookEvents, aliasDescriptionKappWebhookEvents, inputSchemaKappWebhookEvents, executeKappWebhookEvents);
    const opKappWebhookEventsByType = requireOperation(operationMap, "kappWebhookEventsByType");
    const operationDescriptionKappWebhookEventsByType = "[space] Kapp Webhook Event List by Type. (GET /meta/webhooks/events/kapp/{type}). Operation ID: kappWebhookEventsByType. Custom logic: default OAS execution.";
    const aliasDescriptionKappWebhookEventsByType = "[space] Kapp Webhook Event List by Type. (GET /meta/webhooks/events/kapp/{type}). Operation ID: kappWebhookEventsByType. Custom logic: default OAS execution. Use this alias for GET /meta/webhooks/events/kapp/{type}. Tags: Metadata. Required inputs: type (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaKappWebhookEventsByType = {
        type: z.enum(["Form", "Submission"]).describe("The type of kapp webhook events to retrieve."),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeKappWebhookEventsByType = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /meta/webhooks/events/kapp/{type}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opKappWebhookEventsByType, input);
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
    };
    registerOperationTool(server, "core_kappWebhookEventsByType", "kapp_webhook_events_by_type", operationDescriptionKappWebhookEventsByType, aliasDescriptionKappWebhookEventsByType, inputSchemaKappWebhookEventsByType, executeKappWebhookEventsByType);
    const opKappWebhookTypes = requireOperation(operationMap, "kappWebhookTypes");
    const operationDescriptionKappWebhookTypes = "[space] Kapp Webhook Type List. (GET /meta/webhooks/types/kapp). Operation ID: kappWebhookTypes. Custom logic: default OAS execution.";
    const aliasDescriptionKappWebhookTypes = "[space] Kapp Webhook Type List. (GET /meta/webhooks/types/kapp). Operation ID: kappWebhookTypes. Custom logic: default OAS execution. Use this alias for GET /meta/webhooks/types/kapp. Tags: Metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaKappWebhookTypes = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeKappWebhookTypes = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /meta/webhooks/types/kapp
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opKappWebhookTypes, input);
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
    };
    registerOperationTool(server, "core_kappWebhookTypes", "kapp_webhook_types", operationDescriptionKappWebhookTypes, aliasDescriptionKappWebhookTypes, inputSchemaKappWebhookTypes, executeKappWebhookTypes);
    const opListBackgroundJobs = requireOperation(operationMap, "listBackgroundJobs");
    const operationDescriptionListBackgroundJobs = "[space] Background Job List. (GET /backgroundJobs). Operation ID: listBackgroundJobs. Custom logic: default OAS execution.";
    const aliasDescriptionListBackgroundJobs = "[space] Background Job List. (GET /backgroundJobs). Operation ID: listBackgroundJobs. Custom logic: default OAS execution. Use this alias for GET /backgroundJobs. Tags: Background Jobs. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListBackgroundJobs = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListBackgroundJobs = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /backgroundJobs
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListBackgroundJobs, input);
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
    };
    registerOperationTool(server, "core_listBackgroundJobs", "list_background_jobs", operationDescriptionListBackgroundJobs, aliasDescriptionListBackgroundJobs, inputSchemaListBackgroundJobs, executeListBackgroundJobs);
    const opListLocales = requireOperation(operationMap, "listLocales");
    const operationDescriptionListLocales = "[space] Locale List. (GET /meta/locales). Operation ID: listLocales. Custom logic: default OAS execution.";
    const aliasDescriptionListLocales = "[space] Locale List. (GET /meta/locales). Operation ID: listLocales. Custom logic: default OAS execution. Use this alias for GET /meta/locales. Tags: Metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListLocales = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListLocales = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /meta/locales
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListLocales, input);
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
    };
    registerOperationTool(server, "core_listLocales", "list_locales", operationDescriptionListLocales, aliasDescriptionListLocales, inputSchemaListLocales, executeListLocales);
    const opListNotices = requireOperation(operationMap, "listNotices");
    const operationDescriptionListNotices = "[space] Notices List. (GET /notices). Operation ID: listNotices. Custom logic: default OAS execution.";
    const aliasDescriptionListNotices = "[space] Notices List. (GET /notices). Operation ID: listNotices. Custom logic: default OAS execution. Use this alias for GET /notices. Tags: Notices. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListNotices = {
        simulated: z.string().optional().describe("flag used to indicate the request should simulate all possible notices"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListNotices = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /notices
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListNotices, input);
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
    };
    registerOperationTool(server, "core_listNotices", "list_notices", operationDescriptionListNotices, aliasDescriptionListNotices, inputSchemaListNotices, executeListNotices);
    const opListSecurityPolicyDefinitions = requireOperation(operationMap, "listSecurityPolicyDefinitions");
    const operationDescriptionListSecurityPolicyDefinitions = "[space] Space Security Policy Definition List. (GET /securityPolicyDefinitions). Operation ID: listSecurityPolicyDefinitions. Custom logic: default OAS execution.";
    const aliasDescriptionListSecurityPolicyDefinitions = "[space] Space Security Policy Definition List. (GET /securityPolicyDefinitions). Operation ID: listSecurityPolicyDefinitions. Custom logic: default OAS execution. Use this alias for GET /securityPolicyDefinitions. Tags: Security Policy Definitions. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListSecurityPolicyDefinitions = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListSecurityPolicyDefinitions = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /securityPolicyDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListSecurityPolicyDefinitions, input);
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
    };
    registerOperationTool(server, "core_listSecurityPolicyDefinitions", "list_security_policy_definitions", operationDescriptionListSecurityPolicyDefinitions, aliasDescriptionListSecurityPolicyDefinitions, inputSchemaListSecurityPolicyDefinitions, executeListSecurityPolicyDefinitions);
    const opListSpaceAttributeDefinitions = requireOperation(operationMap, "listSpaceAttributeDefinitions");
    const operationDescriptionListSpaceAttributeDefinitions = "[space] Space Attribute Definition List. (GET /spaceAttributeDefinitions). Operation ID: listSpaceAttributeDefinitions. Custom logic: default OAS execution.";
    const aliasDescriptionListSpaceAttributeDefinitions = "[space] Space Attribute Definition List. (GET /spaceAttributeDefinitions). Operation ID: listSpaceAttributeDefinitions. Custom logic: default OAS execution. Use this alias for GET /spaceAttributeDefinitions. Tags: Attribute Definitions. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListSpaceAttributeDefinitions = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListSpaceAttributeDefinitions = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /spaceAttributeDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListSpaceAttributeDefinitions, input);
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
    };
    registerOperationTool(server, "core_listSpaceAttributeDefinitions", "list_space_attribute_definitions", operationDescriptionListSpaceAttributeDefinitions, aliasDescriptionListSpaceAttributeDefinitions, inputSchemaListSpaceAttributeDefinitions, executeListSpaceAttributeDefinitions);
    const opListSpaceWebAPIs = requireOperation(operationMap, "listSpaceWebAPIs");
    const operationDescriptionListSpaceWebAPIs = "[space] Space WebAPI List. (GET /webApis). Operation ID: listSpaceWebAPIs. Custom logic: default OAS execution.";
    const aliasDescriptionListSpaceWebAPIs = "[space] Space WebAPI List. (GET /webApis). Operation ID: listSpaceWebAPIs. Custom logic: default OAS execution. Use this alias for GET /webApis. Tags: WebAPIs. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListSpaceWebAPIs = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListSpaceWebAPIs = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /webApis
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListSpaceWebAPIs, input);
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
    };
    registerOperationTool(server, "core_listSpaceWebAPIs", "list_space_web_apis", operationDescriptionListSpaceWebAPIs, aliasDescriptionListSpaceWebAPIs, inputSchemaListSpaceWebAPIs, executeListSpaceWebAPIs);
    const opListSpaceWebhookJobs = requireOperation(operationMap, "listSpaceWebhookJobs");
    const operationDescriptionListSpaceWebhookJobs = "[space] Space Webhook Job Search. (GET /webhookJobs). Operation ID: listSpaceWebhookJobs. Custom logic: default OAS execution.";
    const aliasDescriptionListSpaceWebhookJobs = "[space] Space Webhook Job Search. (GET /webhookJobs). Operation ID: listSpaceWebhookJobs. Custom logic: default OAS execution. Use this alias for GET /webhookJobs. Tags: Webhook Jobs. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListSpaceWebhookJobs = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        all: z.boolean().optional().describe("Indicates all webhook jobs that exist within the Space should be retrieved."),
        status: z.enum(["failed", "queued"]).optional().describe("Filter the webhook jobs to optionally display only records that are failed or queued."),
        webhook: z.string().optional().describe("Name of the webhook to search for."),
        parentType: z.enum(["Space", "User"]).optional().describe("The Parent object type."),
        parentKey: z.string().optional().describe("The unique key value for the specified record.\n\nThe value will depend on the parentType selected.\n\n* If parentKey is `Space`, then key should be value of the space slug\n\n* If parentKey is `User`, then key should be the value of the username"),
        limit: z.number().int().optional().describe("Limit the number of results returned.\n\nIf not provided, the server will limit the results to 25 jobs."),
        pageToken: z.string().optional().describe("The token to get the next page of results.\n\nThis value is set using the nextPageToken value returned by a search with the same query to get the next page or results."),
        start: z.string().optional().describe("Inclusive starting date/time boundary for when the job was scheduled at.\n\nMust be in the following ISO8601 format; `yyyy-MM-dd'T'HH:mm:ss'Z'`"),
        end: z.string().optional().describe("Exclusive ending date/time boundary for when the job was scheduled at.\n\nMust be in the following ISO8601 format; `yyyy-MM-dd'T'HH:mm:ss'Z'`"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListSpaceWebhookJobs = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /webhookJobs
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListSpaceWebhookJobs, input);
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
    };
    registerOperationTool(server, "core_listSpaceWebhookJobs", "list_space_webhook_jobs", operationDescriptionListSpaceWebhookJobs, aliasDescriptionListSpaceWebhookJobs, inputSchemaListSpaceWebhookJobs, executeListSpaceWebhookJobs);
    const opListSpaceWebhooks = requireOperation(operationMap, "listSpaceWebhooks");
    const operationDescriptionListSpaceWebhooks = "[space] Space Webhook List. (GET /webhooks). Operation ID: listSpaceWebhooks. Custom logic: default OAS execution.";
    const aliasDescriptionListSpaceWebhooks = "[space] Space Webhook List. (GET /webhooks). Operation ID: listSpaceWebhooks. Custom logic: default OAS execution. Use this alias for GET /webhooks. Tags: Webhooks. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListSpaceWebhooks = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListSpaceWebhooks = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /webhooks
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListSpaceWebhooks, input);
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
    };
    registerOperationTool(server, "core_listSpaceWebhooks", "list_space_webhooks", operationDescriptionListSpaceWebhooks, aliasDescriptionListSpaceWebhooks, inputSchemaListSpaceWebhooks, executeListSpaceWebhooks);
    const opListTimezones = requireOperation(operationMap, "listTimezones");
    const operationDescriptionListTimezones = "[space] Timezone List. (GET /meta/timezones). Operation ID: listTimezones. Custom logic: default OAS execution.";
    const aliasDescriptionListTimezones = "[space] Timezone List. (GET /meta/timezones). Operation ID: listTimezones. Custom logic: default OAS execution. Use this alias for GET /meta/timezones. Tags: Metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListTimezones = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListTimezones = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /meta/timezones
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListTimezones, input);
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
    };
    registerOperationTool(server, "core_listTimezones", "list_timezones", operationDescriptionListTimezones, aliasDescriptionListTimezones, inputSchemaListTimezones, executeListTimezones);
    const opRenameTranslationContext = requireOperation(operationMap, "renameTranslationContext");
    const operationDescriptionRenameTranslationContext = "[space] Translation Context Update. (PUT /translations/contexts/{context}). Operation ID: renameTranslationContext. Custom logic: default OAS execution.";
    const aliasDescriptionRenameTranslationContext = "[space] Translation Context Update. (PUT /translations/contexts/{context}). Operation ID: renameTranslationContext. Custom logic: default OAS execution. Use this alias for PUT /translations/contexts/{context}. Tags: Translations. Required inputs: context (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaRenameTranslationContext = {
        context: z.string().describe("name of the translation context"),
        body: z.any().describe("The new name of the locale to update."),
    };
    const executeRenameTranslationContext = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /translations/contexts/{context}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRenameTranslationContext, input);
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
    };
    registerOperationTool(server, "core_renameTranslationContext", "rename_translation_context", operationDescriptionRenameTranslationContext, aliasDescriptionRenameTranslationContext, inputSchemaRenameTranslationContext, executeRenameTranslationContext);
    const opRenameTranslationContextKey = requireOperation(operationMap, "renameTranslationContextKey");
    const operationDescriptionRenameTranslationContextKey = "[space] Translation Context Key Update. (PUT /translations/contexts/{context}/keys/{keyHash}). Operation ID: renameTranslationContextKey. Custom logic: default OAS execution.";
    const aliasDescriptionRenameTranslationContextKey = "[space] Translation Context Key Update. (PUT /translations/contexts/{context}/keys/{keyHash}). Operation ID: renameTranslationContextKey. Custom logic: default OAS execution. Use this alias for PUT /translations/contexts/{context}/keys/{keyHash}. Tags: Translations. Required inputs: context (path), keyHash (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaRenameTranslationContextKey = {
        context: z.string().describe("name of the translation context"),
        keyHash: z.string().describe("hash value of the key"),
        body: z.any().describe("The new name of the key to update."),
    };
    const executeRenameTranslationContextKey = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /translations/contexts/{context}/keys/{keyHash}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRenameTranslationContextKey, input);
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
    };
    registerOperationTool(server, "core_renameTranslationContextKey", "rename_translation_context_key", operationDescriptionRenameTranslationContextKey, aliasDescriptionRenameTranslationContextKey, inputSchemaRenameTranslationContextKey, executeRenameTranslationContextKey);
    const opRepairSpaceWorkflow = requireOperation(operationMap, "repairSpaceWorkflow");
    const operationDescriptionRepairSpaceWorkflow = "[space] Space Workflow Repair. (POST /workflows/repair). Operation ID: repairSpaceWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionRepairSpaceWorkflow = "[space] Space Workflow Repair. (POST /workflows/repair). Operation ID: repairSpaceWorkflow. Custom logic: default OAS execution. Use this alias for POST /workflows/repair. Tags: Workflows. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRepairSpaceWorkflow = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRepairSpaceWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /workflows/repair
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRepairSpaceWorkflow, input);
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
    };
    registerOperationTool(server, "core_repairSpaceWorkflow", "repair_space_workflow", operationDescriptionRepairSpaceWorkflow, aliasDescriptionRepairSpaceWorkflow, inputSchemaRepairSpaceWorkflow, executeRepairSpaceWorkflow);
    const opRetrieveSecurityPolicyDefinition = requireOperation(operationMap, "retrieveSecurityPolicyDefinition");
    const operationDescriptionRetrieveSecurityPolicyDefinition = "[space] Space Security Policy Definition Retrieve. (GET /securityPolicyDefinitions/{name}). Operation ID: retrieveSecurityPolicyDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveSecurityPolicyDefinition = "[space] Space Security Policy Definition Retrieve. (GET /securityPolicyDefinitions/{name}). Operation ID: retrieveSecurityPolicyDefinition. Custom logic: default OAS execution. Use this alias for GET /securityPolicyDefinitions/{name}. Tags: Security Policy Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveSecurityPolicyDefinition = {
        name: z.string().describe("The name of the security policy definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveSecurityPolicyDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /securityPolicyDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveSecurityPolicyDefinition, input);
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
    };
    registerOperationTool(server, "core_retrieveSecurityPolicyDefinition", "retrieve_security_policy_definition", operationDescriptionRetrieveSecurityPolicyDefinition, aliasDescriptionRetrieveSecurityPolicyDefinition, inputSchemaRetrieveSecurityPolicyDefinition, executeRetrieveSecurityPolicyDefinition);
    const opRetrieveSpace = requireOperation(operationMap, "retrieveSpace");
    const operationDescriptionRetrieveSpace = "[space] Space Retrieve. (GET /space). Operation ID: retrieveSpace. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveSpace = "[space] Space Retrieve. (GET /space). Operation ID: retrieveSpace. Custom logic: default OAS execution. Use this alias for GET /space. Tags: Spaces. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveSpace = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* bridgeModels\n\n* bridgeMappings\n\n* filestore\n\n* kapps\n\n* securityPolicyDefinitions\n\n* securityPolicies\n\n* spaceAttributeDefinitions\n\n* userAttributeDefinitions\n\n* userProfileAttributeDefinitions\n\n* webhooks"),
        export: z.boolean().optional().describe("flag indicating the API should export all child components of the space."),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveSpace = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /space
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveSpace, input);
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
    };
    registerOperationTool(server, "core_retrieveSpace", "retrieve_space", operationDescriptionRetrieveSpace, aliasDescriptionRetrieveSpace, inputSchemaRetrieveSpace, executeRetrieveSpace);
    const opRetrieveSpaceAttributeDefinition = requireOperation(operationMap, "retrieveSpaceAttributeDefinition");
    const operationDescriptionRetrieveSpaceAttributeDefinition = "[space] Space Attribute Definition Retrieve. (GET /spaceAttributeDefinitions/{name}). Operation ID: retrieveSpaceAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveSpaceAttributeDefinition = "[space] Space Attribute Definition Retrieve. (GET /spaceAttributeDefinitions/{name}). Operation ID: retrieveSpaceAttributeDefinition. Custom logic: default OAS execution. Use this alias for GET /spaceAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveSpaceAttributeDefinition = {
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveSpaceAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /spaceAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveSpaceAttributeDefinition, input);
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
    };
    registerOperationTool(server, "core_retrieveSpaceAttributeDefinition", "retrieve_space_attribute_definition", operationDescriptionRetrieveSpaceAttributeDefinition, aliasDescriptionRetrieveSpaceAttributeDefinition, inputSchemaRetrieveSpaceAttributeDefinition, executeRetrieveSpaceAttributeDefinition);
    const opRetrieveSpaceWebhook = requireOperation(operationMap, "retrieveSpaceWebhook");
    const operationDescriptionRetrieveSpaceWebhook = "[space] Space Webhook Retrieve. (GET /webhooks/{name}). Operation ID: retrieveSpaceWebhook. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveSpaceWebhook = "[space] Space Webhook Retrieve. (GET /webhooks/{name}). Operation ID: retrieveSpaceWebhook. Custom logic: default OAS execution. Use this alias for GET /webhooks/{name}. Tags: Webhooks. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveSpaceWebhook = {
        name: z.string().describe("The name of the webhook"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveSpaceWebhook = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /webhooks/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveSpaceWebhook, input);
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
    };
    registerOperationTool(server, "core_retrieveSpaceWebhook", "retrieve_space_webhook", operationDescriptionRetrieveSpaceWebhook, aliasDescriptionRetrieveSpaceWebhook, inputSchemaRetrieveSpaceWebhook, executeRetrieveSpaceWebhook);
    const opRetrieveSpaceWebhookJob = requireOperation(operationMap, "retrieveSpaceWebhookJob");
    const operationDescriptionRetrieveSpaceWebhookJob = "[space] Space Webhook Job Retrieve. (GET /webhookJobs/{id}). Operation ID: retrieveSpaceWebhookJob. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveSpaceWebhookJob = "[space] Space Webhook Job Retrieve. (GET /webhookJobs/{id}). Operation ID: retrieveSpaceWebhookJob. Custom logic: default OAS execution. Use this alias for GET /webhookJobs/{id}. Tags: Webhook Jobs. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveSpaceWebhookJob = {
        id: z.string().describe("The id of the webhook job"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveSpaceWebhookJob = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /webhookJobs/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveSpaceWebhookJob, input);
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
    };
    registerOperationTool(server, "core_retrieveSpaceWebhookJob", "retrieve_space_webhook_job", operationDescriptionRetrieveSpaceWebhookJob, aliasDescriptionRetrieveSpaceWebhookJob, inputSchemaRetrieveSpaceWebhookJob, executeRetrieveSpaceWebhookJob);
    const opRetrieveSpaceWorkflow = requireOperation(operationMap, "retrieveSpaceWorkflow");
    const operationDescriptionRetrieveSpaceWorkflow = "[space] Space Workflow Retrieve. (GET /workflows/{id}). Operation ID: retrieveSpaceWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveSpaceWorkflow = "[space] Space Workflow Retrieve. (GET /workflows/{id}). Operation ID: retrieveSpaceWorkflow. Custom logic: default OAS execution. Use this alias for GET /workflows/{id}. Tags: Workflows. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveSpaceWorkflow = {
        id: z.string().describe("The id of the workflow"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveSpaceWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /workflows/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveSpaceWorkflow, input);
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
    };
    registerOperationTool(server, "core_retrieveSpaceWorkflow", "retrieve_space_workflow", operationDescriptionRetrieveSpaceWorkflow, aliasDescriptionRetrieveSpaceWorkflow, inputSchemaRetrieveSpaceWorkflow, executeRetrieveSpaceWorkflow);
    const opRetrieveSpaceWorkflows = requireOperation(operationMap, "retrieveSpaceWorkflows");
    const operationDescriptionRetrieveSpaceWorkflows = "[space] Space Workflows Retrieve. (GET /workflows). Operation ID: retrieveSpaceWorkflows. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveSpaceWorkflows = "[space] Space Workflows Retrieve. (GET /workflows). Operation ID: retrieveSpaceWorkflows. Custom logic: default OAS execution. Use this alias for GET /workflows. Tags: Workflows. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveSpaceWorkflows = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveSpaceWorkflows = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /workflows
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveSpaceWorkflows, input);
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
    };
    registerOperationTool(server, "core_retrieveSpaceWorkflows", "retrieve_space_workflows", operationDescriptionRetrieveSpaceWorkflows, aliasDescriptionRetrieveSpaceWorkflows, inputSchemaRetrieveSpaceWorkflows, executeRetrieveSpaceWorkflows);
    const opRetrieveTranslationChanges = requireOperation(operationMap, "retrieveTranslationChanges");
    const operationDescriptionRetrieveTranslationChanges = "[space] Staged Translations Retrieve. (GET /translations/staged). Operation ID: retrieveTranslationChanges. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveTranslationChanges = "[space] Staged Translations Retrieve. (GET /translations/staged). Operation ID: retrieveTranslationChanges. Custom logic: default OAS execution. Use this alias for GET /translations/staged. Tags: Translations. Required inputs: context (query). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveTranslationChanges = {
        context: z.string().describe("name of the translation context"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveTranslationChanges = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /translations/staged
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveTranslationChanges, input);
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
    };
    registerOperationTool(server, "core_retrieveTranslationChanges", "retrieve_translation_changes", operationDescriptionRetrieveTranslationChanges, aliasDescriptionRetrieveTranslationChanges, inputSchemaRetrieveTranslationChanges, executeRetrieveTranslationChanges);
    const opRetrieveTranslationContextKeys = requireOperation(operationMap, "retrieveTranslationContextKeys");
    const operationDescriptionRetrieveTranslationContextKeys = "[space] Translation Context Key List. (GET /translations/contexts/{context}/keys). Operation ID: retrieveTranslationContextKeys. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveTranslationContextKeys = "[space] Translation Context Key List. (GET /translations/contexts/{context}/keys). Operation ID: retrieveTranslationContextKeys. Custom logic: default OAS execution. Use this alias for GET /translations/contexts/{context}/keys. Tags: Translations. Required inputs: context (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveTranslationContextKeys = {
        context: z.string().describe("name of the translation context"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveTranslationContextKeys = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /translations/contexts/{context}/keys
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveTranslationContextKeys, input);
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
    };
    registerOperationTool(server, "core_retrieveTranslationContextKeys", "retrieve_translation_context_keys", operationDescriptionRetrieveTranslationContextKeys, aliasDescriptionRetrieveTranslationContextKeys, inputSchemaRetrieveTranslationContextKeys, executeRetrieveTranslationContextKeys);
    const opRetrieveTranslationContexts = requireOperation(operationMap, "retrieveTranslationContexts");
    const operationDescriptionRetrieveTranslationContexts = "[space] Translation Context List. (GET /translations/contexts). Operation ID: retrieveTranslationContexts. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveTranslationContexts = "[space] Translation Context List. (GET /translations/contexts). Operation ID: retrieveTranslationContexts. Custom logic: default OAS execution. Use this alias for GET /translations/contexts. Tags: Translations. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveTranslationContexts = {
        custom: z.enum(["custom"]).optional().describe("parameter indicating only custom contexts should be retrieved"),
        expected: z.enum(["expected"]).optional().describe("parameter indicating only expected contexts should be retrieved"),
        unexpected: z.enum(["unexpected"]).optional().describe("parameter indicating only unexpected contexts should be retrieved"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveTranslationContexts = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /translations/contexts
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveTranslationContexts, input);
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
    };
    registerOperationTool(server, "core_retrieveTranslationContexts", "retrieve_translation_contexts", operationDescriptionRetrieveTranslationContexts, aliasDescriptionRetrieveTranslationContexts, inputSchemaRetrieveTranslationContexts, executeRetrieveTranslationContexts);
    const opRetrieveTranslationDefaultLocale = requireOperation(operationMap, "retrieveTranslationDefaultLocale");
    const operationDescriptionRetrieveTranslationDefaultLocale = "[space] Default Locale Retrieve. (GET /translations/settings/defaultLocale). Operation ID: retrieveTranslationDefaultLocale. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveTranslationDefaultLocale = "[space] Default Locale Retrieve. (GET /translations/settings/defaultLocale). Operation ID: retrieveTranslationDefaultLocale. Custom logic: default OAS execution. Use this alias for GET /translations/settings/defaultLocale. Tags: Translations. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveTranslationDefaultLocale = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveTranslationDefaultLocale = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /translations/settings/defaultLocale
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveTranslationDefaultLocale, input);
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
    };
    registerOperationTool(server, "core_retrieveTranslationDefaultLocale", "retrieve_translation_default_locale", operationDescriptionRetrieveTranslationDefaultLocale, aliasDescriptionRetrieveTranslationDefaultLocale, inputSchemaRetrieveTranslationDefaultLocale, executeRetrieveTranslationDefaultLocale);
    const opRetrieveTranslationEntries = requireOperation(operationMap, "retrieveTranslationEntries");
    const operationDescriptionRetrieveTranslationEntries = "[space] Translation Entry Retrieve. (GET /translations/entries). Operation ID: retrieveTranslationEntries. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveTranslationEntries = "[space] Translation Entry Retrieve. (GET /translations/entries). Operation ID: retrieveTranslationEntries. Custom logic: default OAS execution. Use this alias for GET /translations/entries. Tags: Translations. Required inputs: context (query), keyHash (query), locale (query). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveTranslationEntries = {
        context: z.string().describe("name of the translation context"),
        keyHash: z.string().describe("hash value of the key"),
        cache: z.enum(["cache"]).optional().describe("indicates the bundle should be retrieved from the cache"),
        locale: z.string().describe("The locale code"),
        missing: z.boolean().optional().describe("will only return missing entries"),
        download: z.enum(["download"]).optional().describe("download (export) translation entries"),
        export: z.enum(["csv", "json"]).optional().describe("format to use to export the data when downloading (csv, json)"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveTranslationEntries = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /translations/entries
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveTranslationEntries, input);
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
    };
    registerOperationTool(server, "core_retrieveTranslationEntries", "retrieve_translation_entries", operationDescriptionRetrieveTranslationEntries, aliasDescriptionRetrieveTranslationEntries, inputSchemaRetrieveTranslationEntries, executeRetrieveTranslationEntries);
    const opRetrieveTranslationLocales = requireOperation(operationMap, "retrieveTranslationLocales");
    const operationDescriptionRetrieveTranslationLocales = "[space] Enabled Locale List. (GET /translations/settings/locales). Operation ID: retrieveTranslationLocales. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveTranslationLocales = "[space] Enabled Locale List. (GET /translations/settings/locales). Operation ID: retrieveTranslationLocales. Custom logic: default OAS execution. Use this alias for GET /translations/settings/locales. Tags: Translations. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveTranslationLocales = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveTranslationLocales = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /translations/settings/locales
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveTranslationLocales, input);
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
    };
    registerOperationTool(server, "core_retrieveTranslationLocales", "retrieve_translation_locales", operationDescriptionRetrieveTranslationLocales, aliasDescriptionRetrieveTranslationLocales, inputSchemaRetrieveTranslationLocales, executeRetrieveTranslationLocales);
    const opSpaceWebhookEvents = requireOperation(operationMap, "spaceWebhookEvents");
    const operationDescriptionSpaceWebhookEvents = "[space] Space Webhook Event List. (GET /meta/webhooks/events/space). Operation ID: spaceWebhookEvents. Custom logic: default OAS execution.";
    const aliasDescriptionSpaceWebhookEvents = "[space] Space Webhook Event List. (GET /meta/webhooks/events/space). Operation ID: spaceWebhookEvents. Custom logic: default OAS execution. Use this alias for GET /meta/webhooks/events/space. Tags: Metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaSpaceWebhookEvents = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeSpaceWebhookEvents = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /meta/webhooks/events/space
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opSpaceWebhookEvents, input);
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
    };
    registerOperationTool(server, "core_spaceWebhookEvents", "space_webhook_events", operationDescriptionSpaceWebhookEvents, aliasDescriptionSpaceWebhookEvents, inputSchemaSpaceWebhookEvents, executeSpaceWebhookEvents);
    const opSpaceWebhookEventsByType = requireOperation(operationMap, "spaceWebhookEventsByType");
    const operationDescriptionSpaceWebhookEventsByType = "[space] Space Webhook Event List by Type. (GET /meta/webhooks/events/space/{type}). Operation ID: spaceWebhookEventsByType. Custom logic: default OAS execution.";
    const aliasDescriptionSpaceWebhookEventsByType = "[space] Space Webhook Event List by Type. (GET /meta/webhooks/events/space/{type}). Operation ID: spaceWebhookEventsByType. Custom logic: default OAS execution. Use this alias for GET /meta/webhooks/events/space/{type}. Tags: Metadata. Required inputs: type (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaSpaceWebhookEventsByType = {
        type: z.enum(["Discussion", "Form", "Space", "User", "Team", "Submission"]).describe("The type of space webhook events to retrieve."),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeSpaceWebhookEventsByType = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /meta/webhooks/events/space/{type}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opSpaceWebhookEventsByType, input);
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
    };
    registerOperationTool(server, "core_spaceWebhookEventsByType", "space_webhook_events_by_type", operationDescriptionSpaceWebhookEventsByType, aliasDescriptionSpaceWebhookEventsByType, inputSchemaSpaceWebhookEventsByType, executeSpaceWebhookEventsByType);
    const opSpaceWebhookTypes = requireOperation(operationMap, "spaceWebhookTypes");
    const operationDescriptionSpaceWebhookTypes = "[space] Space Webhook Type List. (GET /meta/webhooks/types/space). Operation ID: spaceWebhookTypes. Custom logic: default OAS execution.";
    const aliasDescriptionSpaceWebhookTypes = "[space] Space Webhook Type List. (GET /meta/webhooks/types/space). Operation ID: spaceWebhookTypes. Custom logic: default OAS execution. Use this alias for GET /meta/webhooks/types/space. Tags: Metadata. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaSpaceWebhookTypes = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeSpaceWebhookTypes = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /meta/webhooks/types/space
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opSpaceWebhookTypes, input);
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
    };
    registerOperationTool(server, "core_spaceWebhookTypes", "space_webhook_types", operationDescriptionSpaceWebhookTypes, aliasDescriptionSpaceWebhookTypes, inputSchemaSpaceWebhookTypes, executeSpaceWebhookTypes);
    const opUpdateSecurityPolicyDefinition = requireOperation(operationMap, "updateSecurityPolicyDefinition");
    const operationDescriptionUpdateSecurityPolicyDefinition = "[space] Space Security Policy Definition Update. (PUT /securityPolicyDefinitions/{name}). Operation ID: updateSecurityPolicyDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateSecurityPolicyDefinition = "[space] Space Security Policy Definition Update. (PUT /securityPolicyDefinitions/{name}). Operation ID: updateSecurityPolicyDefinition. Custom logic: default OAS execution. Use this alias for PUT /securityPolicyDefinitions/{name}. Tags: Security Policy Definitions. Required inputs: name (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateSecurityPolicyDefinition = {
        name: z.string().describe("The name of the security policy definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the security policy definition properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateSecurityPolicyDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /securityPolicyDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateSecurityPolicyDefinition, input);
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
    };
    registerOperationTool(server, "core_updateSecurityPolicyDefinition", "update_security_policy_definition", operationDescriptionUpdateSecurityPolicyDefinition, aliasDescriptionUpdateSecurityPolicyDefinition, inputSchemaUpdateSecurityPolicyDefinition, executeUpdateSecurityPolicyDefinition);
    const opUpdateSpace = requireOperation(operationMap, "updateSpace");
    const operationDescriptionUpdateSpace = "[space] Space Update. (PUT /space). Operation ID: updateSpace. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateSpace = "[space] Space Update. (PUT /space). Operation ID: updateSpace. Custom logic: default OAS execution. Use this alias for PUT /space. Tags: Spaces. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateSpace = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* bridgeModels\n\n* bridgeMappings\n\n* filestore\n\n* kapps\n\n* securityPolicyDefinitions\n\n* securityPolicies\n\n* spaceAttributeDefinitions\n\n* userAttributeDefinitions\n\n* userProfileAttributeDefinitions\n\n* webhooks"),
        body: z.any().describe("The content for the space properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateSpace = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /space
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateSpace, input);
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
    };
    registerOperationTool(server, "core_updateSpace", "update_space", operationDescriptionUpdateSpace, aliasDescriptionUpdateSpace, inputSchemaUpdateSpace, executeUpdateSpace);
    const opUpdateSpaceAttributeDefinition = requireOperation(operationMap, "updateSpaceAttributeDefinition");
    const operationDescriptionUpdateSpaceAttributeDefinition = "[space] Space Attribute Definition Update. (PUT /spaceAttributeDefinitions/{name}). Operation ID: updateSpaceAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateSpaceAttributeDefinition = "[space] Space Attribute Definition Update. (PUT /spaceAttributeDefinitions/{name}). Operation ID: updateSpaceAttributeDefinition. Custom logic: default OAS execution. Use this alias for PUT /spaceAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateSpaceAttributeDefinition = {
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the attribute definition properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateSpaceAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /spaceAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateSpaceAttributeDefinition, input);
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
    };
    registerOperationTool(server, "core_updateSpaceAttributeDefinition", "update_space_attribute_definition", operationDescriptionUpdateSpaceAttributeDefinition, aliasDescriptionUpdateSpaceAttributeDefinition, inputSchemaUpdateSpaceAttributeDefinition, executeUpdateSpaceAttributeDefinition);
    const opUpdateSpaceWebAPI = requireOperation(operationMap, "updateSpaceWebAPI");
    const operationDescriptionUpdateSpaceWebAPI = "[space] Space WebAPI Update. (PUT /webApis/{webApiSlug}). Operation ID: updateSpaceWebAPI. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateSpaceWebAPI = "[space] Space WebAPI Update. (PUT /webApis/{webApiSlug}). Operation ID: updateSpaceWebAPI. Custom logic: default OAS execution. Use this alias for PUT /webApis/{webApiSlug}. Tags: WebAPIs. Required inputs: webApiSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateSpaceWebAPI = {
        webApiSlug: z.string().describe("The slug of the WebAPI"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* securityPolicies"),
        body: z.any().describe("The content for the webapi properties to update"),
    };
    const executeUpdateSpaceWebAPI = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /webApis/{webApiSlug}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateSpaceWebAPI, input);
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
    };
    registerOperationTool(server, "core_updateSpaceWebAPI", "update_space_web_api", operationDescriptionUpdateSpaceWebAPI, aliasDescriptionUpdateSpaceWebAPI, inputSchemaUpdateSpaceWebAPI, executeUpdateSpaceWebAPI);
    const opUpdateSpaceWebhook = requireOperation(operationMap, "updateSpaceWebhook");
    const operationDescriptionUpdateSpaceWebhook = "[space] Space Webhook Update. (PUT /webhooks/{name}). Operation ID: updateSpaceWebhook. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateSpaceWebhook = "[space] Space Webhook Update. (PUT /webhooks/{name}). Operation ID: updateSpaceWebhook. Custom logic: default OAS execution. Use this alias for PUT /webhooks/{name}. Tags: Webhooks. Required inputs: name (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateSpaceWebhook = {
        name: z.string().describe("The name of the webhook"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the webhook properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateSpaceWebhook = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /webhooks/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateSpaceWebhook, input);
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
    };
    registerOperationTool(server, "core_updateSpaceWebhook", "update_space_webhook", operationDescriptionUpdateSpaceWebhook, aliasDescriptionUpdateSpaceWebhook, inputSchemaUpdateSpaceWebhook, executeUpdateSpaceWebhook);
    const opUpdateSpaceWebhookJob = requireOperation(operationMap, "updateSpaceWebhookJob");
    const operationDescriptionUpdateSpaceWebhookJob = "[space] Space Webhook Job Update. (PUT /webhookJobs/{id}). Operation ID: updateSpaceWebhookJob. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateSpaceWebhookJob = "[space] Space Webhook Job Update. (PUT /webhookJobs/{id}). Operation ID: updateSpaceWebhookJob. Custom logic: default OAS execution. Use this alias for PUT /webhookJobs/{id}. Tags: Webhook Jobs. Required inputs: id (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateSpaceWebhookJob = {
        id: z.string().describe("The id of the webhook job"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the webhook job properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateSpaceWebhookJob = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /webhookJobs/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateSpaceWebhookJob, input);
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
    };
    registerOperationTool(server, "core_updateSpaceWebhookJob", "update_space_webhook_job", operationDescriptionUpdateSpaceWebhookJob, aliasDescriptionUpdateSpaceWebhookJob, inputSchemaUpdateSpaceWebhookJob, executeUpdateSpaceWebhookJob);
    const opUpdateSpaceWorkflow = requireOperation(operationMap, "updateSpaceWorkflow");
    const operationDescriptionUpdateSpaceWorkflow = "[space] Space Workflow Update. (PUT /workflows/{id}). Operation ID: updateSpaceWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateSpaceWorkflow = "[space] Space Workflow Update. (PUT /workflows/{id}). Operation ID: updateSpaceWorkflow. Custom logic: default OAS execution. Use this alias for PUT /workflows/{id}. Tags: Workflows. Required inputs: id (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateSpaceWorkflow = {
        id: z.string().describe("The id of the workflow"),
        body: z.any().describe("The content for the workflow properties to update"),
    };
    const executeUpdateSpaceWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /workflows/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateSpaceWorkflow, input);
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
    };
    registerOperationTool(server, "core_updateSpaceWorkflow", "update_space_workflow", operationDescriptionUpdateSpaceWorkflow, aliasDescriptionUpdateSpaceWorkflow, inputSchemaUpdateSpaceWorkflow, executeUpdateSpaceWorkflow);
    const opUpdateTranslationDefaultLocale = requireOperation(operationMap, "updateTranslationDefaultLocale");
    const operationDescriptionUpdateTranslationDefaultLocale = "[space] Default Locale Update. (PUT /translations/settings/defaultLocale). Operation ID: updateTranslationDefaultLocale. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateTranslationDefaultLocale = "[space] Default Locale Update. (PUT /translations/settings/defaultLocale). Operation ID: updateTranslationDefaultLocale. Custom logic: default OAS execution. Use this alias for PUT /translations/settings/defaultLocale. Tags: Translations. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateTranslationDefaultLocale = {
        body: z.any().describe("The content for the translations default locale"),
    };
    const executeUpdateTranslationDefaultLocale = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /translations/settings/defaultLocale
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateTranslationDefaultLocale, input);
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
    };
    registerOperationTool(server, "core_updateTranslationDefaultLocale", "update_translation_default_locale", operationDescriptionUpdateTranslationDefaultLocale, aliasDescriptionUpdateTranslationDefaultLocale, inputSchemaUpdateTranslationDefaultLocale, executeUpdateTranslationDefaultLocale);
}
