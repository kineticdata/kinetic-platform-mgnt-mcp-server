// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ContextToolRuntime, requireOperation } from "./shared.js";

export function registerCategoryTools(server: McpServer, runtime: ContextToolRuntime): void {
  const { operationMap, invokeDefaultOperation } = runtime;

  const opCreateCategorization = requireOperation(operationMap, "createCategorization");
  const operationDescriptionCreateCategorization = "[category] Categorization Create. (POST /kapps/{kappSlug}/categorizations). Operation ID: createCategorization. Custom logic: default OAS execution.";
  const aliasDescriptionCreateCategorization = "[category] Categorization Create. (POST /kapps/{kappSlug}/categorizations). Operation ID: createCategorization. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/categorizations. Tags: Categories. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateCategorization = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* category\n\n* form\n\n* category.{any category include property}\n\n* form.{any form include property}"),
    body: z.any().describe("The content for the categorization properties"),
  };
  const executeCreateCategorization = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/categorizations
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateCategorization, input);
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

  server.tool("core_createCategorization", operationDescriptionCreateCategorization, inputSchemaCreateCategorization, executeCreateCategorization);
  server.tool("create_categorization", aliasDescriptionCreateCategorization, inputSchemaCreateCategorization, executeCreateCategorization);

  const opCreateCategory = requireOperation(operationMap, "createCategory");
  const operationDescriptionCreateCategory = "[category] Category Create. (POST /kapps/{kappSlug}/categories). Operation ID: createCategory. Custom logic: default OAS execution.";
  const aliasDescriptionCreateCategory = "[category] Category Create. (POST /kapps/{kappSlug}/categories). Operation ID: createCategory. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/categories. Tags: Categories. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateCategory = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categorizations\n\n* kapp\n\n* kapp.{any kapp include property}"),
    body: z.any().describe("The content for the category properties"),
  };
  const executeCreateCategory = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/categories
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateCategory, input);
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

  server.tool("core_createCategory", operationDescriptionCreateCategory, inputSchemaCreateCategory, executeCreateCategory);
  server.tool("create_category", aliasDescriptionCreateCategory, inputSchemaCreateCategory, executeCreateCategory);

  const opDeleteCategorization = requireOperation(operationMap, "deleteCategorization");
  const operationDescriptionDeleteCategorization = "[category] Categorization Delete. (DELETE /kapps/{kappSlug}/categorizations/{categorizationName}). Operation ID: deleteCategorization. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteCategorization = "[category] Categorization Delete. (DELETE /kapps/{kappSlug}/categorizations/{categorizationName}). Operation ID: deleteCategorization. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/categorizations/{categorizationName}. Tags: Categories. Required inputs: kappSlug (path), categorizationName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteCategorization = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    categorizationName: z.string().describe("Combination of the Category and Form slugs, separated by an underscore.\n\n**`category.slug_form.slug`**\n\n**`foo_bar`**"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* category\n\n* form\n\n* category.{any category include property}\n\n* form.{any form include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteCategorization = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/categorizations/{categorizationName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteCategorization, input);
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

  server.tool("core_deleteCategorization", operationDescriptionDeleteCategorization, inputSchemaDeleteCategorization, executeDeleteCategorization);
  server.tool("delete_categorization", aliasDescriptionDeleteCategorization, inputSchemaDeleteCategorization, executeDeleteCategorization);

  const opDeleteCategory = requireOperation(operationMap, "deleteCategory");
  const operationDescriptionDeleteCategory = "[category] Category Delete. (DELETE /kapps/{kappSlug}/categories/{name}). Operation ID: deleteCategory. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteCategory = "[category] Category Delete. (DELETE /kapps/{kappSlug}/categories/{name}). Operation ID: deleteCategory. Custom logic: default OAS execution. Use this alias for DELETE /kapps/{kappSlug}/categories/{name}. Tags: Categories. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteCategory = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the Category"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categorizations\n\n* kapp\n\n* kapp.{any kapp include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteCategory = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /kapps/{kappSlug}/categories/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteCategory, input);
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

  server.tool("core_deleteCategory", operationDescriptionDeleteCategory, inputSchemaDeleteCategory, executeDeleteCategory);
  server.tool("delete_category", aliasDescriptionDeleteCategory, inputSchemaDeleteCategory, executeDeleteCategory);

  const opListCategories = requireOperation(operationMap, "listCategories");
  const operationDescriptionListCategories = "[category] Category List. (GET /kapps/{kappSlug}/categories). Operation ID: listCategories. Custom logic: default OAS execution.";
  const aliasDescriptionListCategories = "[category] Category List. (GET /kapps/{kappSlug}/categories). Operation ID: listCategories. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/categories. Tags: Categories. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListCategories = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categorizations\n\n* kapp\n\n* kapp.{any kapp include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListCategories = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/categories
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListCategories, input);
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

  server.tool("core_listCategories", operationDescriptionListCategories, inputSchemaListCategories, executeListCategories);
  server.tool("list_categories", aliasDescriptionListCategories, inputSchemaListCategories, executeListCategories);

  const opListCategorizations = requireOperation(operationMap, "listCategorizations");
  const operationDescriptionListCategorizations = "[category] Categorization List. (GET /kapps/{kappSlug}/categorizations). Operation ID: listCategorizations. Custom logic: default OAS execution.";
  const aliasDescriptionListCategorizations = "[category] Categorization List. (GET /kapps/{kappSlug}/categorizations). Operation ID: listCategorizations. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/categorizations. Tags: Categories. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListCategorizations = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* category\n\n* form\n\n* category.{any category include property}\n\n* form.{any form include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListCategorizations = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/categorizations
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListCategorizations, input);
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

  server.tool("core_listCategorizations", operationDescriptionListCategorizations, inputSchemaListCategorizations, executeListCategorizations);
  server.tool("list_categorizations", aliasDescriptionListCategorizations, inputSchemaListCategorizations, executeListCategorizations);

  const opRetrieveCategorization = requireOperation(operationMap, "retrieveCategorization");
  const operationDescriptionRetrieveCategorization = "[category] Categorization Retrieve. (GET /kapps/{kappSlug}/categorizations/{categorizationName}). Operation ID: retrieveCategorization. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveCategorization = "[category] Categorization Retrieve. (GET /kapps/{kappSlug}/categorizations/{categorizationName}). Operation ID: retrieveCategorization. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/categorizations/{categorizationName}. Tags: Categories. Required inputs: kappSlug (path), categorizationName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveCategorization = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    categorizationName: z.string().describe("Combination of the Category and Form slugs, separated by an underscore.\n\n**`category.slug_form.slug`**\n\n**`foo_bar`**"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* category\n\n* form\n\n* category.{any category include property}\n\n* form.{any form include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveCategorization = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/categorizations/{categorizationName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveCategorization, input);
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

  server.tool("core_retrieveCategorization", operationDescriptionRetrieveCategorization, inputSchemaRetrieveCategorization, executeRetrieveCategorization);
  server.tool("retrieve_categorization", aliasDescriptionRetrieveCategorization, inputSchemaRetrieveCategorization, executeRetrieveCategorization);

  const opRetrieveCategory = requireOperation(operationMap, "retrieveCategory");
  const operationDescriptionRetrieveCategory = "[category] Category Retrieve. (GET /kapps/{kappSlug}/categories/{name}). Operation ID: retrieveCategory. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveCategory = "[category] Category Retrieve. (GET /kapps/{kappSlug}/categories/{name}). Operation ID: retrieveCategory. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/categories/{name}. Tags: Categories. Required inputs: kappSlug (path), name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveCategory = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the Category"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categorizations\n\n* kapp\n\n* kapp.{any kapp include property}"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveCategory = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/categories/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveCategory, input);
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

  server.tool("core_retrieveCategory", operationDescriptionRetrieveCategory, inputSchemaRetrieveCategory, executeRetrieveCategory);
  server.tool("retrieve_category", aliasDescriptionRetrieveCategory, inputSchemaRetrieveCategory, executeRetrieveCategory);

  const opUpdateCategorization = requireOperation(operationMap, "updateCategorization");
  const operationDescriptionUpdateCategorization = "[category] Categorization Update. (PUT /kapps/{kappSlug}/categorizations/{categorizationName}). Operation ID: updateCategorization. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateCategorization = "[category] Categorization Update. (PUT /kapps/{kappSlug}/categorizations/{categorizationName}). Operation ID: updateCategorization. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/categorizations/{categorizationName}. Tags: Categories. Required inputs: kappSlug (path), categorizationName (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateCategorization = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    categorizationName: z.string().describe("Combination of the Category and Form slugs, separated by an underscore.\n\n**`category.slug_form.slug`**\n\n**`foo_bar`**"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* category\n\n* form\n\n* category.{any category include property}\n\n* form.{any form include property}"),
    body: z.any().describe("The content for the categorization properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateCategorization = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/categorizations/{categorizationName}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateCategorization, input);
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

  server.tool("core_updateCategorization", operationDescriptionUpdateCategorization, inputSchemaUpdateCategorization, executeUpdateCategorization);
  server.tool("update_categorization", aliasDescriptionUpdateCategorization, inputSchemaUpdateCategorization, executeUpdateCategorization);

  const opUpdateCategory = requireOperation(operationMap, "updateCategory");
  const operationDescriptionUpdateCategory = "[category] Category Update. (PUT /kapps/{kappSlug}/categories/{name}). Operation ID: updateCategory. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateCategory = "[category] Category Update. (PUT /kapps/{kappSlug}/categories/{name}). Operation ID: updateCategory. Custom logic: default OAS execution. Use this alias for PUT /kapps/{kappSlug}/categories/{name}. Tags: Categories. Required inputs: kappSlug (path), name (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateCategory = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    name: z.string().describe("The name of the Category"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE NAME]\n\n* categorizations\n\n* kapp\n\n* kapp.{any kapp include property}"),
    body: z.any().describe("The content for the category properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateCategory = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /kapps/{kappSlug}/categories/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateCategory, input);
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

  server.tool("core_updateCategory", operationDescriptionUpdateCategory, inputSchemaUpdateCategory, executeUpdateCategory);
  server.tool("update_category", aliasDescriptionUpdateCategory, inputSchemaUpdateCategory, executeUpdateCategory);

}
