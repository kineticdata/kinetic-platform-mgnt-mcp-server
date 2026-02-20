import { z } from "zod";
import { requireOperation } from "./shared.js";
export function registerFormTools(server, runtime) {
    const { operationMap, invokeDefaultOperation } = runtime;
    const opCreateForm = requireOperation(operationMap, "createForm");
    const operationDescriptionCreateForm = "[form] Form Create. (POST /kapps/{kappSlug}/forms). Operation ID: createForm. Custom logic: default OAS execution.";
    const aliasDescriptionCreateForm = "[form] Form Create. (POST /kapps/{kappSlug}/forms). Operation ID: createForm. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/forms. Tags: Forms. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateForm = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* versionId\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* bridgedResources\n\n* categorizations\n\n* customHeadContent\n\n* fields\n\n* fields[FIELD NAME]\n\n* integrations\n\n* pages\n\n* securityPolicies\n\n* kapp\n\n* kapp.{any kapp include property}"),
        body: z.any().describe("The content for the form properties"),
    };
    const executeCreateForm = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /kapps/{kappSlug}/forms
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateForm, input);
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
    server.tool("core_createForm", operationDescriptionCreateForm, inputSchemaCreateForm, executeCreateForm);
    server.tool("create_form", aliasDescriptionCreateForm, inputSchemaCreateForm, executeCreateForm);
    const opCreateFormAttributeDefinition = requireOperation(operationMap, "createFormAttributeDefinition");
    const operationDescriptionCreateFormAttributeDefinition = "[form] Kapp Form Attribute Definition Create. (POST /kapps/{kappSlug}/formAttributeDefinitions). Operation ID: createFormAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionCreateFormAttributeDefinition = "[form] Kapp Form Attribute Definition Create. (POST /kapps/{kappSlug}/formAttributeDefinitions). Operation ID: createFormAttributeDefinition. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/formAttributeDefinitions. Tags: Attribute Definitions. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateFormAttributeDefinition = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the attribute definition properties"),
    };
    const executeCreateFormAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /kapps/{kappSlug}/formAttributeDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateFormAttributeDefinition, input);
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
    server.tool("core_createFormAttributeDefinition", operationDescriptionCreateFormAttributeDefinition, inputSchemaCreateFormAttributeDefinition, executeCreateFormAttributeDefinition);
    server.tool("create_form_attribute_definition", aliasDescriptionCreateFormAttributeDefinition, inputSchemaCreateFormAttributeDefinition, executeCreateFormAttributeDefinition);
    const opCreateFormWorkflow = requireOperation(operationMap, "createFormWorkflow");
    const operationDescriptionCreateFormWorkflow = "[form] Form Workflow Create. (POST /kapps/{kappSlug}/forms/{formSlug}/workflows). Operation ID: createFormWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionCreateFormWorkflow = "[form] Form Workflow Create. (POST /kapps/{kappSlug}/forms/{formSlug}/workflows). Operation ID: createFormWorkflow. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/forms/{formSlug}/workflows. Tags: Workflows. Required inputs: kappSlug (path), formSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateFormWorkflow = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        force: z.boolean().optional().describe("Force the overwrite of an existing workflow on import"),
        body: z.any().describe("The content for the workflow properties"),
    };
    const executeCreateFormWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /kapps/{kappSlug}/forms/{formSlug}/workflows
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateFormWorkflow, input);
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
    server.tool("core_createFormWorkflow", operationDescriptionCreateFormWorkflow, inputSchemaCreateFormWorkflow, executeCreateFormWorkflow);
    server.tool("create_form_workflow", aliasDescriptionCreateFormWorkflow, inputSchemaCreateFormWorkflow, executeCreateFormWorkflow);
    const opCreateKappFormType = requireOperation(operationMap, "createKappFormType");
    const operationDescriptionCreateKappFormType = "[form] Form Type Create. (POST /kapps/{kappSlug}/formTypes). Operation ID: createKappFormType. Custom logic: default OAS execution.";
    const aliasDescriptionCreateKappFormType = "[form] Form Type Create. (POST /kapps/{kappSlug}/formTypes). Operation ID: createKappFormType. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/formTypes. Tags: Form Types. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateKappFormType = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* kapp\n\n* kapp.{any kapp include property}"),
        body: z.any().describe("The content for the form type properties."),
    };
    const executeCreateKappFormType = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /kapps/{kappSlug}/formTypes
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateKappFormType, input);
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
    server.tool("core_createKappFormType", operationDescriptionCreateKappFormType, inputSchemaCreateKappFormType, executeCreateKappFormType);
    server.tool("create_kapp_form_type", aliasDescriptionCreateKappFormType, inputSchemaCreateKappFormType, executeCreateKappFormType);
    const opDeleteForm = requireOperation(operationMap, "deleteForm");
    const operationDescriptionDeleteForm = "[form] Form Delete. (DELETE /kapps/{kappSlug}/forms/{formSlug}). Operation ID: deleteForm. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteForm = "[form] Form Delete. (DELETE /kapps/{kappSlug}/forms/{formSlug}). Operation ID: deleteForm. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/forms/{formSlug}. Tags: Forms. Required inputs: kappSlug (path), formSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteForm = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* versionId\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* bridgedResources\n\n* categorizations\n\n* customHeadContent\n\n* fields\n\n* fields[FIELD NAME]\n\n* integrations\n\n* pages\n\n* securityPolicies\n\n* kapp\n\n* kapp.{any kapp include property}"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteForm = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /kapps/{kappSlug}/forms/{formSlug}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteForm, input);
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
    server.tool("core_deleteForm", operationDescriptionDeleteForm, inputSchemaDeleteForm, executeDeleteForm);
    server.tool("delete_form", aliasDescriptionDeleteForm, inputSchemaDeleteForm, executeDeleteForm);
    const opDeleteFormAttributeDefinition = requireOperation(operationMap, "deleteFormAttributeDefinition");
    const operationDescriptionDeleteFormAttributeDefinition = "[form] Kapp Form Attribute Definition Delete. (DELETE /kapps/{kappSlug}/formAttributeDefinitions/{name}). Operation ID: deleteFormAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteFormAttributeDefinition = "[form] Kapp Form Attribute Definition Delete. (DELETE /kapps/{kappSlug}/formAttributeDefinitions/{name}). Operation ID: deleteFormAttributeDefinition. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/formAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteFormAttributeDefinition = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteFormAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /kapps/{kappSlug}/formAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteFormAttributeDefinition, input);
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
    server.tool("core_deleteFormAttributeDefinition", operationDescriptionDeleteFormAttributeDefinition, inputSchemaDeleteFormAttributeDefinition, executeDeleteFormAttributeDefinition);
    server.tool("delete_form_attribute_definition", aliasDescriptionDeleteFormAttributeDefinition, inputSchemaDeleteFormAttributeDefinition, executeDeleteFormAttributeDefinition);
    const opDeleteFormWorkflow = requireOperation(operationMap, "deleteFormWorkflow");
    const operationDescriptionDeleteFormWorkflow = "[form] Form Workflow Delete. (DELETE /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}). Operation ID: deleteFormWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteFormWorkflow = "[form] Form Workflow Delete. (DELETE /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}). Operation ID: deleteFormWorkflow. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}. Tags: Workflows. Required inputs: kappSlug (path), formSlug (path), id (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteFormWorkflow = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        id: z.string().describe("The id of the workflow"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteFormWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteFormWorkflow, input);
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
    server.tool("core_deleteFormWorkflow", operationDescriptionDeleteFormWorkflow, inputSchemaDeleteFormWorkflow, executeDeleteFormWorkflow);
    server.tool("delete_form_workflow", aliasDescriptionDeleteFormWorkflow, inputSchemaDeleteFormWorkflow, executeDeleteFormWorkflow);
    const opDeleteKappFormType = requireOperation(operationMap, "deleteKappFormType");
    const operationDescriptionDeleteKappFormType = "[form] Form Type Delete. (DELETE /kapps/{kappSlug}/formTypes/{name}). Operation ID: deleteKappFormType. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteKappFormType = "[form] Form Type Delete. (DELETE /kapps/{kappSlug}/formTypes/{name}). Operation ID: deleteKappFormType. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/formTypes/{name}. Tags: Form Types. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteKappFormType = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        name: z.string().describe("The name of the form type"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* kapp\n\n* kapp.{any kapp include property}"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteKappFormType = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /kapps/{kappSlug}/formTypes/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteKappFormType, input);
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
    server.tool("core_deleteKappFormType", operationDescriptionDeleteKappFormType, inputSchemaDeleteKappFormType, executeDeleteKappFormType);
    server.tool("delete_kapp_form_type", aliasDescriptionDeleteKappFormType, inputSchemaDeleteKappFormType, executeDeleteKappFormType);
    const opExecuteFormIntegration = requireOperation(operationMap, "executeFormIntegration");
    const operationDescriptionExecuteFormIntegration = "[form] Form Integration Execute. (POST /integrations/kapps/{kappSlug}/forms/{formSlug}/{name}). Operation ID: executeFormIntegration. Custom logic: default OAS execution.";
    const aliasDescriptionExecuteFormIntegration = "[form] Form Integration Execute. (POST /integrations/kapps/{kappSlug}/forms/{formSlug}/{name}). Operation ID: executeFormIntegration. Custom logic: default OAS execution. Use this alias for POST /integrations/kapps/{kappSlug}/forms/{formSlug}/{name}. Tags: Integrations. Required inputs: kappSlug (path), formSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaExecuteFormIntegration = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        name: z.string().describe("The name of the integration"),
        body: z.any().describe("The input mapping parameter values to send to the integration"),
    };
    const executeExecuteFormIntegration = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /integrations/kapps/{kappSlug}/forms/{formSlug}/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opExecuteFormIntegration, input);
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
    server.tool("core_executeFormIntegration", operationDescriptionExecuteFormIntegration, inputSchemaExecuteFormIntegration, executeExecuteFormIntegration);
    server.tool("execute_form_integration", aliasDescriptionExecuteFormIntegration, inputSchemaExecuteFormIntegration, executeExecuteFormIntegration);
    const opFetchFormActivityMetrics = requireOperation(operationMap, "fetchFormActivityMetrics");
    const operationDescriptionFetchFormActivityMetrics = "[form] Kapp Form Submission Metrics Retrieve. (GET /kapps/{kappSlug}/forms/{formSlug}/activity). Operation ID: fetchFormActivityMetrics. Custom logic: default OAS execution.";
    const aliasDescriptionFetchFormActivityMetrics = "[form] Kapp Form Submission Metrics Retrieve. (GET /kapps/{kappSlug}/forms/{formSlug}/activity). Operation ID: fetchFormActivityMetrics. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/forms/{formSlug}/activity. Tags: Metrics. Required inputs: kappSlug (path), formSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaFetchFormActivityMetrics = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        days: z.number().int().optional().describe("Number of days to fetch activity metrics for"),
        tz: z.string().optional().describe("Number of days to fetch activity metrics for"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeFetchFormActivityMetrics = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /kapps/{kappSlug}/forms/{formSlug}/activity
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opFetchFormActivityMetrics, input);
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
    server.tool("core_fetchFormActivityMetrics", operationDescriptionFetchFormActivityMetrics, inputSchemaFetchFormActivityMetrics, executeFetchFormActivityMetrics);
    server.tool("fetch_form_activity_metrics", aliasDescriptionFetchFormActivityMetrics, inputSchemaFetchFormActivityMetrics, executeFetchFormActivityMetrics);
    const opListFormAttributeDefinitions = requireOperation(operationMap, "listFormAttributeDefinitions");
    const operationDescriptionListFormAttributeDefinitions = "[form] Kapp Form Attribute Definition List. (GET /kapps/{kappSlug}/formAttributeDefinitions). Operation ID: listFormAttributeDefinitions. Custom logic: default OAS execution.";
    const aliasDescriptionListFormAttributeDefinitions = "[form] Kapp Form Attribute Definition List. (GET /kapps/{kappSlug}/formAttributeDefinitions). Operation ID: listFormAttributeDefinitions. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/formAttributeDefinitions. Tags: Attribute Definitions. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListFormAttributeDefinitions = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListFormAttributeDefinitions = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /kapps/{kappSlug}/formAttributeDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListFormAttributeDefinitions, input);
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
    server.tool("core_listFormAttributeDefinitions", operationDescriptionListFormAttributeDefinitions, inputSchemaListFormAttributeDefinitions, executeListFormAttributeDefinitions);
    server.tool("list_form_attribute_definitions", aliasDescriptionListFormAttributeDefinitions, inputSchemaListFormAttributeDefinitions, executeListFormAttributeDefinitions);
    const opListForms = requireOperation(operationMap, "listForms");
    const operationDescriptionListForms = "[form] Form Search. (GET /kapps/{kappSlug}/forms). Operation ID: listForms. Custom logic: default OAS execution.";
    const aliasDescriptionListForms = "[form] Form Search. (GET /kapps/{kappSlug}/forms). Operation ID: listForms. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/forms. Tags: Forms. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListForms = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* versionId\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* bridgedResources\n\n* categorizations\n\n* customHeadContent\n\n* fields\n\n* fields[FIELD NAME]\n\n* integrations\n\n* pages\n\n* securityPolicies\n\n* kapp\n\n* kapp.{any kapp include property}"),
        count: z.boolean().optional().describe("If the count query parameter is specified, the server will respond with a count and no results for improved network performance of getting 'counts'."),
        archived: z.boolean().optional().describe("Flag indicating the API should return archived (i.e. deleted) forms.\n\n**The user must be a space admin to perform this action.**"),
        slug: z.string().optional().describe("When specified, will filter out archived forms that don't match the provided slug.\n\n**Only valid when the `archived` parameter is set to `true`.**"),
        start: z.string().optional().describe("Inclusive starting date/time boundary for when the form was archived (i.e. deleted).\n\nMust be in the following ISO8601 format; `yyyy-MM-dd'T'HH:mm:ss'Z'`\n\n**Only valid when the `archived` parameter is set to `true`.**"),
        end: z.string().optional().describe("Exclusive ending date/time boundary for when the form was archived (i.e. deleted).\n\nMust be in the following ISO8601 format; `yyyy-MM-dd'T'HH:mm:ss'Z'`\n\n**Only valid when the `archived` parameter is set to `true`.**"),
        limit: z.number().int().optional().describe("Limit the number of results returned.\n\nIf not provided, the server will return the default, maximum limit of `1000` results.\n\n**DEPRECATION NOTICE:** Pagination functionality was introduced in version 2.4. In order to provide backwards compatibility with previous versions, if you provide the limit parameter, results will be paginated. If you don't provide the limit parameter, the full result will be returned. The ability to return the full result set will be deprecated in a later version in favor of a paginated set of results."),
        orderBy: z.string().optional().describe("A comma separated list of any of the following form properties to order (sort) results by\n\n* `createdAt`\n\n* `updatedAt`\n\n* `name`\n\n* `slug`\n\n* `status`\n\n* `type`\n\n* `attributes[Attribute Name]`"),
        pageToken: z.string().optional().describe("The token to get the next page of results.\n\nThis value is set using the nextPageToken value returned by a search with the same query to get the next page or results."),
        direction: z.enum(["ASC", "DESC"]).optional().describe("The direction the results should be ordered by, either ascending or descending."),
        q: z.string().optional().describe("Search qualification parameter used to find forms within the system.\n\n\n#### Common Example Queries\n\n* `q=status = \"Active\"`\n\n    Returns all active forms in the kapp.\n\n* `q=status = \"Active\" AND type = \"Approval\"`\n\n    Returns all active forms in the kapp that are also of type Approval\n\n* `q=status = \"Active\" AND type = \"Approval\" AND (name =* \"approval\" OR slug =* \"approval\")`\n\n    Returns all active forms in the kapp that are also of type Approval and have a name or slug that start with \"approval\"\n\n\n#### Operators:\n\n* `BETWEEN`\n\n    left side is between two values - first value is inclusive, second value is exclusive\n\n* `IN`\n\n    left side is equal to one of provided items\n\n* `=`\n\n    equal\n\n* `=*`\n\n    starts with\n\n* `*=*`\n\n    contains\n\n* `>`\n\n    greater than\n\n* `>=`\n\n    greater than or equal\n\n* `<`\n\n    less than\n\n* `<=`\n\n    less than or equal\n\n* `AND`\n\n    Returns boolean true if and only if both expressions are true\n\n* `OR`\n\n    Returns boolean true if at least one expression is true\n\n\n#### Queryable Properties\n\n##### The following properties can be used within a search with the `=`, `IN`, `=*` (starts with), `*=*` (contains), `<`, `<=`, `>`, `>=`, and `BETWEEN` operators.\n\n* `category`                          (Category associated with a form)\n\n    *Example:*                        `q=category =* \"IT\"`\n\n* `createdAt`                         (The ISO 8601 time that when the form was created)\n\n    *Example:*                        `q=createdAt BETWEEN (\"2018-04-16T18:42:56.000Z\",\"2019-04-16T18:42:56.000Z\")`\n\n* `name`                              (Name of the form)\n\n    *Example:*                        `q=name=\"HR Approval\"`\n\n* `slug`                              (Slug of the form)\n\n    *Example:*                        `q=slug=\"hr-approval\"`\n\n* `updatedAt`                         (The ISO 8601 time that when the form was last updated)\n\n    *Example:*                        `q=updatedAt >= \"2018-04-16T18:42:56.000Z\"`\n\n* `status`                            (The status of the form)\n\n    *Example:*                        `q=enabled=\"true\"`\n\n* `type`                              (The form type)\n\n    *Example:*                        `q=spaceAdmin=\"false\"`\n\n* `attributes[Attribute Name]`        (Attribute Value of a form)\n\n    *Example:*                        `q=attributes[Icon]=\"fa-comment\"`\n\n\n#### Pagination\n\nThe system will paginate search results based on the `limit` parameter.  If there are more results than the `limit` parameter (or more than 1000 results if the limit parameter is not provided), a `nextPageToken` will be included in the response.  The `nextPageToken` value can be passed as the `pageToken` parameter in subsequent queries to obtain the next page of results.\n\n**DEPRECATION NOTICE:** Pagination functionality was introduced in version 2.4. In order to provide backwards compatibility with previous versions, if you provide the limit parameter, results will be paginated. If you don't provide the limit parameter, the full result will be returned. The ability to return the full result set will be deprecated in a later version in favor of a paginated set of results.\n\nExample Response with a next page token:\n\n```javascript\n{\n  \"forms\": [{...}, {...}],\n  \"nextPageToken\": \"YWJib3R0LmRldmFuQHRoaWVsLm9yZw.4wg2me95blthjyzdvkfs56oc3\"\n}\n```"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListForms = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /kapps/{kappSlug}/forms
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListForms, input);
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
    server.tool("core_listForms", operationDescriptionListForms, inputSchemaListForms, executeListForms);
    server.tool("list_forms", aliasDescriptionListForms, inputSchemaListForms, executeListForms);
    const opListKappFormTypes = requireOperation(operationMap, "listKappFormTypes");
    const operationDescriptionListKappFormTypes = "[form] Form Type List. (GET /kapps/{kappSlug}/formTypes). Operation ID: listKappFormTypes. Custom logic: default OAS execution.";
    const aliasDescriptionListKappFormTypes = "[form] Form Type List. (GET /kapps/{kappSlug}/formTypes). Operation ID: listKappFormTypes. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/formTypes. Tags: Form Types. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListKappFormTypes = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* kapp\n\n* kapp.{any kapp include property}"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListKappFormTypes = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /kapps/{kappSlug}/formTypes
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListKappFormTypes, input);
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
    server.tool("core_listKappFormTypes", operationDescriptionListKappFormTypes, inputSchemaListKappFormTypes, executeListKappFormTypes);
    server.tool("list_kapp_form_types", aliasDescriptionListKappFormTypes, inputSchemaListKappFormTypes, executeListKappFormTypes);
    const opRepairFormWorkflow = requireOperation(operationMap, "repairFormWorkflow");
    const operationDescriptionRepairFormWorkflow = "[form] Form Workflow Repair. (POST /kapps/{kappSlug}/forms/{formSlug}/workflows/repair). Operation ID: repairFormWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionRepairFormWorkflow = "[form] Form Workflow Repair. (POST /kapps/{kappSlug}/forms/{formSlug}/workflows/repair). Operation ID: repairFormWorkflow. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/forms/{formSlug}/workflows/repair. Tags: Workflows. Required inputs: kappSlug (path), formSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRepairFormWorkflow = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRepairFormWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /kapps/{kappSlug}/forms/{formSlug}/workflows/repair
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRepairFormWorkflow, input);
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
    server.tool("core_repairFormWorkflow", operationDescriptionRepairFormWorkflow, inputSchemaRepairFormWorkflow, executeRepairFormWorkflow);
    server.tool("repair_form_workflow", aliasDescriptionRepairFormWorkflow, inputSchemaRepairFormWorkflow, executeRepairFormWorkflow);
    const opRetrieveForm = requireOperation(operationMap, "retrieveForm");
    const operationDescriptionRetrieveForm = "[form] Form Retrieve. (GET /kapps/{kappSlug}/forms/{formSlug}). Operation ID: retrieveForm. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveForm = "[form] Form Retrieve. (GET /kapps/{kappSlug}/forms/{formSlug}). Operation ID: retrieveForm. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/forms/{formSlug}. Tags: Forms. Required inputs: kappSlug (path), formSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveForm = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* versionId\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* bridgedResources\n\n* categorizations\n\n* customHeadContent\n\n* fields\n\n* fields[FIELD NAME]\n\n* integrations\n\n* pages\n\n* securityPolicies\n\n* kapp\n\n* kapp.{any kapp include property}"),
        export: z.boolean().optional().describe("flag indicating the API should export all child components of the form."),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveForm = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /kapps/{kappSlug}/forms/{formSlug}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveForm, input);
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
    server.tool("core_retrieveForm", operationDescriptionRetrieveForm, inputSchemaRetrieveForm, executeRetrieveForm);
    server.tool("retrieve_form", aliasDescriptionRetrieveForm, inputSchemaRetrieveForm, executeRetrieveForm);
    const opRetrieveFormAttributeDefinition = requireOperation(operationMap, "retrieveFormAttributeDefinition");
    const operationDescriptionRetrieveFormAttributeDefinition = "[form] Kapp Form Attribute Definition Retrieve. (GET /kapps/{kappSlug}/formAttributeDefinitions/{name}). Operation ID: retrieveFormAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveFormAttributeDefinition = "[form] Kapp Form Attribute Definition Retrieve. (GET /kapps/{kappSlug}/formAttributeDefinitions/{name}). Operation ID: retrieveFormAttributeDefinition. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/formAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveFormAttributeDefinition = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveFormAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /kapps/{kappSlug}/formAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveFormAttributeDefinition, input);
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
    server.tool("core_retrieveFormAttributeDefinition", operationDescriptionRetrieveFormAttributeDefinition, inputSchemaRetrieveFormAttributeDefinition, executeRetrieveFormAttributeDefinition);
    server.tool("retrieve_form_attribute_definition", aliasDescriptionRetrieveFormAttributeDefinition, inputSchemaRetrieveFormAttributeDefinition, executeRetrieveFormAttributeDefinition);
    const opRetrieveFormWorkflow = requireOperation(operationMap, "retrieveFormWorkflow");
    const operationDescriptionRetrieveFormWorkflow = "[form] Form Workflow Retrieve. (GET /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}). Operation ID: retrieveFormWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveFormWorkflow = "[form] Form Workflow Retrieve. (GET /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}). Operation ID: retrieveFormWorkflow. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}. Tags: Workflows. Required inputs: kappSlug (path), formSlug (path), id (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveFormWorkflow = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        id: z.string().describe("The id of the workflow"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveFormWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveFormWorkflow, input);
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
    server.tool("core_retrieveFormWorkflow", operationDescriptionRetrieveFormWorkflow, inputSchemaRetrieveFormWorkflow, executeRetrieveFormWorkflow);
    server.tool("retrieve_form_workflow", aliasDescriptionRetrieveFormWorkflow, inputSchemaRetrieveFormWorkflow, executeRetrieveFormWorkflow);
    const opRetrieveFormWorkflows = requireOperation(operationMap, "retrieveFormWorkflows");
    const operationDescriptionRetrieveFormWorkflows = "[form] Form Workflows Retrieve. (GET /kapps/{kappSlug}/forms/{formSlug}/workflows). Operation ID: retrieveFormWorkflows. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveFormWorkflows = "[form] Form Workflows Retrieve. (GET /kapps/{kappSlug}/forms/{formSlug}/workflows). Operation ID: retrieveFormWorkflows. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/forms/{formSlug}/workflows. Tags: Workflows. Required inputs: kappSlug (path), formSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveFormWorkflows = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveFormWorkflows = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /kapps/{kappSlug}/forms/{formSlug}/workflows
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveFormWorkflows, input);
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
    server.tool("core_retrieveFormWorkflows", operationDescriptionRetrieveFormWorkflows, inputSchemaRetrieveFormWorkflows, executeRetrieveFormWorkflows);
    server.tool("retrieve_form_workflows", aliasDescriptionRetrieveFormWorkflows, inputSchemaRetrieveFormWorkflows, executeRetrieveFormWorkflows);
    const opRetrieveKappFormType = requireOperation(operationMap, "retrieveKappFormType");
    const operationDescriptionRetrieveKappFormType = "[form] Form Type Retrieve. (GET /kapps/{kappSlug}/formTypes/{name}). Operation ID: retrieveKappFormType. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveKappFormType = "[form] Form Type Retrieve. (GET /kapps/{kappSlug}/formTypes/{name}). Operation ID: retrieveKappFormType. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/formTypes/{name}. Tags: Form Types. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveKappFormType = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        name: z.string().describe("The name of the form type"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* kapp\n\n* kapp.{any kapp include property}"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveKappFormType = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /kapps/{kappSlug}/formTypes/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveKappFormType, input);
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
    server.tool("core_retrieveKappFormType", operationDescriptionRetrieveKappFormType, inputSchemaRetrieveKappFormType, executeRetrieveKappFormType);
    server.tool("retrieve_kapp_form_type", aliasDescriptionRetrieveKappFormType, inputSchemaRetrieveKappFormType, executeRetrieveKappFormType);
    const opUpdateForm = requireOperation(operationMap, "updateForm");
    const operationDescriptionUpdateForm = "[form] Form Update. (PUT /kapps/{kappSlug}/forms/{formSlug}). Operation ID: updateForm. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateForm = "[form] Form Update. (PUT /kapps/{kappSlug}/forms/{formSlug}). Operation ID: updateForm. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/forms/{formSlug}. Tags: Forms. Required inputs: kappSlug (path), formSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateForm = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* versionId\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* bridgedResources\n\n* categorizations\n\n* customHeadContent\n\n* fields\n\n* fields[FIELD NAME]\n\n* integrations\n\n* pages\n\n* securityPolicies\n\n* kapp\n\n* kapp.{any kapp include property}"),
        restorationToken: z.string().optional().describe("The `restorationToken` property returned by the *Search Forms* action and setting the `archived` parameter.\n\nFunctions similarly to the regular *Update Form* action, except for archived (deleted) forms.\n\nIt can be passed the same body content as a regular *Update Form* action, which is helpful if an archived form needs to be restored when there is an active form with the same slug.\n\nThis action automatically transitions the form from archived (deleted) to active.\n\n**The user must be a space admin when using this parameter.**"),
        body: z.any().describe("The content for the form properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateForm = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /kapps/{kappSlug}/forms/{formSlug}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateForm, input);
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
    server.tool("core_updateForm", operationDescriptionUpdateForm, inputSchemaUpdateForm, executeUpdateForm);
    server.tool("update_form", aliasDescriptionUpdateForm, inputSchemaUpdateForm, executeUpdateForm);
    const opUpdateFormAttributeDefinition = requireOperation(operationMap, "updateFormAttributeDefinition");
    const operationDescriptionUpdateFormAttributeDefinition = "[form] Kapp Form Attribute Definition Update. (PUT /kapps/{kappSlug}/formAttributeDefinitions/{name}). Operation ID: updateFormAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateFormAttributeDefinition = "[form] Kapp Form Attribute Definition Update. (PUT /kapps/{kappSlug}/formAttributeDefinitions/{name}). Operation ID: updateFormAttributeDefinition. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/formAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: kappSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateFormAttributeDefinition = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the attribute definition properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateFormAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /kapps/{kappSlug}/formAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateFormAttributeDefinition, input);
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
    server.tool("core_updateFormAttributeDefinition", operationDescriptionUpdateFormAttributeDefinition, inputSchemaUpdateFormAttributeDefinition, executeUpdateFormAttributeDefinition);
    server.tool("update_form_attribute_definition", aliasDescriptionUpdateFormAttributeDefinition, inputSchemaUpdateFormAttributeDefinition, executeUpdateFormAttributeDefinition);
    const opUpdateFormWorkflow = requireOperation(operationMap, "updateFormWorkflow");
    const operationDescriptionUpdateFormWorkflow = "[form] Form Workflow Update. (PUT /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}). Operation ID: updateFormWorkflow. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateFormWorkflow = "[form] Form Workflow Update. (PUT /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}). Operation ID: updateFormWorkflow. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}. Tags: Workflows. Required inputs: kappSlug (path), formSlug (path), id (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateFormWorkflow = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        formSlug: z.string().describe("The slug of the form"),
        id: z.string().describe("The id of the workflow"),
        body: z.any().describe("The content for the workflow properties to update"),
    };
    const executeUpdateFormWorkflow = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /kapps/{kappSlug}/forms/{formSlug}/workflows/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateFormWorkflow, input);
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
    server.tool("core_updateFormWorkflow", operationDescriptionUpdateFormWorkflow, inputSchemaUpdateFormWorkflow, executeUpdateFormWorkflow);
    server.tool("update_form_workflow", aliasDescriptionUpdateFormWorkflow, inputSchemaUpdateFormWorkflow, executeUpdateFormWorkflow);
    const opUpdateKappFormType = requireOperation(operationMap, "updateKappFormType");
    const operationDescriptionUpdateKappFormType = "[form] Form Type Update. (PUT /kapps/{kappSlug}/formTypes/{name}). Operation ID: updateKappFormType. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateKappFormType = "[form] Form Type Update. (PUT /kapps/{kappSlug}/formTypes/{name}). Operation ID: updateKappFormType. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/formTypes/{name}. Tags: Form Types. Required inputs: kappSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateKappFormType = {
        kappSlug: z.string().describe("The slug of the Kapp"),
        name: z.string().describe("The name of the form type"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* kapp\n\n* kapp.{any kapp include property}"),
        body: z.any().describe("The content for the form type properties.\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateKappFormType = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /kapps/{kappSlug}/formTypes/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateKappFormType, input);
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
    server.tool("core_updateKappFormType", operationDescriptionUpdateKappFormType, inputSchemaUpdateKappFormType, executeUpdateKappFormType);
    server.tool("update_kapp_form_type", aliasDescriptionUpdateKappFormType, inputSchemaUpdateKappFormType, executeUpdateKappFormType);
}
