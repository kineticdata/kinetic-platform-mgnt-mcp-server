// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ContextToolRuntime, requireOperation } from "./shared.js";

export function registerSubmissionTools(server: McpServer, runtime: ContextToolRuntime): void {
  const { operationMap, invokeDefaultOperation } = runtime;

  const opCloneSubmission = requireOperation(operationMap, "cloneSubmission");
  const operationDescriptionCloneSubmission = "[submission] Submission Clone. (POST /submissions/{submissionId}/clone). Operation ID: cloneSubmission. Custom logic: default OAS execution.";
  const aliasDescriptionCloneSubmission = "[submission] Submission Clone. (POST /submissions/{submissionId}/clone). Operation ID: cloneSubmission. Custom logic: default OAS execution. Use this alias for POST /submissions/{submissionId}/clone. Tags: Submissions. Required inputs: submissionId (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaCloneSubmission = {
    submissionId: z.string().describe("The id of the submission"),
    completed: z.boolean().optional().describe("signals that the submission should be completed (equivalent of submitting all of the pages at once)"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeCloneSubmission = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /submissions/{submissionId}/clone
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCloneSubmission, input);
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

  server.tool("core_cloneSubmission", operationDescriptionCloneSubmission, inputSchemaCloneSubmission, executeCloneSubmission);
  server.tool("clone_submission", aliasDescriptionCloneSubmission, inputSchemaCloneSubmission, executeCloneSubmission);

  const opCreateSubmission = requireOperation(operationMap, "createSubmission");
  const operationDescriptionCreateSubmission = "[submission] Submission Create. (POST /kapps/{kappSlug}/forms/{formSlug}/submissions). Operation ID: createSubmission. Custom logic: default OAS execution.";
  const aliasDescriptionCreateSubmission = "[submission] Submission Create. (POST /kapps/{kappSlug}/forms/{formSlug}/submissions). Operation ID: createSubmission. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/forms/{formSlug}/submissions. Tags: Submissions. Required inputs: kappSlug (path), formSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateSubmission = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    formSlug: z.string().describe("The slug of the form"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    completed: z.boolean().optional().describe("signals that the submission should be completed (equivalent of submitting all of the pages at once)"),
    page: z.string().optional().describe("The name of the Page being submitted."),
    staged: z.boolean().optional().describe("Indicates whether field validations and page advancement should take place."),
    defer: z.boolean().optional().describe("Indicates the submission is for a subform embedded in a parent submission."),
    body: z.any().describe("The content for the submission properties"),
  };
  const executeCreateSubmission = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/forms/{formSlug}/submissions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateSubmission, input);
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

  server.tool("core_createSubmission", operationDescriptionCreateSubmission, inputSchemaCreateSubmission, executeCreateSubmission);
  server.tool("create_submission", aliasDescriptionCreateSubmission, inputSchemaCreateSubmission, executeCreateSubmission);

  const opCreateSubmissionActivity = requireOperation(operationMap, "createSubmissionActivity");
  const operationDescriptionCreateSubmissionActivity = "[submission] Submission Activity Create. (POST /submissions/{submissionId}/activities). Operation ID: createSubmissionActivity. Custom logic: default OAS execution.";
  const aliasDescriptionCreateSubmissionActivity = "[submission] Submission Activity Create. (POST /submissions/{submissionId}/activities). Operation ID: createSubmissionActivity. Custom logic: default OAS execution. Use this alias for POST /submissions/{submissionId}/activities. Tags: Submissions. Required inputs: submissionId (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateSubmissionActivity = {
    submissionId: z.string().describe("The id of the submission"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the submission activity properties"),
  };
  const executeCreateSubmissionActivity = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /submissions/{submissionId}/activities
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateSubmissionActivity, input);
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

  server.tool("core_createSubmissionActivity", operationDescriptionCreateSubmissionActivity, inputSchemaCreateSubmissionActivity, executeCreateSubmissionActivity);
  server.tool("create_submission_activity", aliasDescriptionCreateSubmissionActivity, inputSchemaCreateSubmissionActivity, executeCreateSubmissionActivity);

  const opCreateSubmissionMultipart = requireOperation(operationMap, "createSubmissionMultipart");
  const operationDescriptionCreateSubmissionMultipart = "[submission] Submission Create (with Attachments). (POST /kapps/{kappSlug}/forms/{formSlug}/submissions-multipart). Operation ID: createSubmissionMultipart. Custom logic: default OAS execution.";
  const aliasDescriptionCreateSubmissionMultipart = "[submission] Submission Create (with Attachments). (POST /kapps/{kappSlug}/forms/{formSlug}/submissions-multipart). Operation ID: createSubmissionMultipart. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/forms/{formSlug}/submissions-multipart. Tags: Submissions. Required inputs: kappSlug (path), formSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateSubmissionMultipart = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    formSlug: z.string().describe("The slug of the form"),
    completed: z.boolean().optional().describe("signals that the submission should be completed (equivalent of submitting all of the pages at once)"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeCreateSubmissionMultipart = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/forms/{formSlug}/submissions-multipart
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateSubmissionMultipart, input);
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

  server.tool("core_createSubmissionMultipart", operationDescriptionCreateSubmissionMultipart, inputSchemaCreateSubmissionMultipart, executeCreateSubmissionMultipart);
  server.tool("create_submission_multipart", aliasDescriptionCreateSubmissionMultipart, inputSchemaCreateSubmissionMultipart, executeCreateSubmissionMultipart);

  const opDeleteSubmission = requireOperation(operationMap, "deleteSubmission");
  const operationDescriptionDeleteSubmission = "[submission] Submission Delete. (DELETE /submissions/{submissionId}). Operation ID: deleteSubmission. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteSubmission = "[submission] Submission Delete. (DELETE /submissions/{submissionId}). Operation ID: deleteSubmission. Custom logic: default OAS execution. Use this alias for DELETE /submissions/{submissionId}. Tags: Submissions. Required inputs: submissionId (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteSubmission = {
    submissionId: z.string().describe("The id of the submission"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteSubmission = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /submissions/{submissionId}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteSubmission, input);
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

  server.tool("core_deleteSubmission", operationDescriptionDeleteSubmission, inputSchemaDeleteSubmission, executeDeleteSubmission);
  server.tool("delete_submission", aliasDescriptionDeleteSubmission, inputSchemaDeleteSubmission, executeDeleteSubmission);

  const opDeleteSubmissionActivity = requireOperation(operationMap, "deleteSubmissionActivity");
  const operationDescriptionDeleteSubmissionActivity = "[submission] Submission Activity Delete. (DELETE /submissions/{submissionId}/activities/{activityId}). Operation ID: deleteSubmissionActivity. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteSubmissionActivity = "[submission] Submission Activity Delete. (DELETE /submissions/{submissionId}/activities/{activityId}). Operation ID: deleteSubmissionActivity. Custom logic: default OAS execution. Use this alias for DELETE /submissions/{submissionId}/activities/{activityId}. Tags: Submissions. Required inputs: submissionId (path), activityId (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteSubmissionActivity = {
    submissionId: z.string().describe("The id of the submission"),
    activityId: z.string().describe("The id of the submission activity"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteSubmissionActivity = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /submissions/{submissionId}/activities/{activityId}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteSubmissionActivity, input);
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

  server.tool("core_deleteSubmissionActivity", operationDescriptionDeleteSubmissionActivity, inputSchemaDeleteSubmissionActivity, executeDeleteSubmissionActivity);
  server.tool("delete_submission_activity", aliasDescriptionDeleteSubmissionActivity, inputSchemaDeleteSubmissionActivity, executeDeleteSubmissionActivity);

  const opListFormSubmissions = requireOperation(operationMap, "listFormSubmissions");
  const operationDescriptionListFormSubmissions = "[submission] Submission Search (by Form). (GET /kapps/{kappSlug}/forms/{formSlug}/submissions). Operation ID: listFormSubmissions. Custom logic: default OAS execution.";
  const aliasDescriptionListFormSubmissions = "[submission] Submission Search (by Form). (GET /kapps/{kappSlug}/forms/{formSlug}/submissions). Operation ID: listFormSubmissions. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/forms/{formSlug}/submissions. Tags: Submissions. Required inputs: kappSlug (path), formSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListFormSubmissions = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    formSlug: z.string().describe("The slug of the form"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    count: z.string().optional().describe("Include a count of the number of submissions that match the search parameters in the result."),
    direction: z.enum(["ASC","DESC"]).optional().describe("The direction to order the results"),
    limit: z.number().int().optional().describe("Limit the number of results returned.\n\nIf not provided, the server will limit the results to 25 submissions."),
    orderBy: z.string().optional().describe("Comma separated list of submission properties and fields to sort the response by.\n\nThe orderBy list:\n\n* May start with any combination of zero or more items that are used in query equality subexpressions (`=` or `IN`).\n* May continue with the item used in the query range subexpressions (`=*`, `>`, `>=`, `<`, `<=`, `BETWEEN`).  This item is required if a range subexpression is used and any further items are added to the orderBy list.\n* May continue with any combination of zero or more items that are not used in the query, but are specified as index parts in the same order and after any parts used by equality or range subexpressions.\n* May end with a single submission timeline fields (`createdAt`, `updatedAt`, `submittedAt`, `closedAt`).  If the timeline is not specified, `createdAt` is used as the default tie breaker.\n\nAll parts of the orderBy except the optionally specified timeline must be included in all indexes used by the query.\n\nExample: values[Make],values[Model],values[Year],updatedAt"),
    pageToken: z.string().optional().describe("The token to get the next page of results.\n\nThis value is set using the nextPageToken value returned by a search with the same query to get the next page of results.\n\nThe submission that matches this value will not be included in the results."),
    q: z.string().optional().describe("A custom qualification that can be constructed similar to a SQL `WHERE` clause that allows building complex expressions using logical and relational operators against submission properties and field values.\n\nIn order to execute a submission search, there must be one or more index definitions that correspond to the specified submission properties and field values.\n\nOnly a single property or field can be specified using a range subexpression.\n\n\n### Operators\n\n* `AND`\n\n  Returns boolean true if and only if both expressions are true\n\n  Example: expression1 AND expression2\n\n* `OR`\n\n  Returns boolean true if at least one expression is true\n\n  Example: expression1 OR expression2\n\n* `IN` *equality subexpression*\n\n  Returns boolean true if the key matches one of the list values\n\n  Example: key IN (\"Value One\", \"Value Two\", \"Value Three\")\n\n* `=` *equality subexpression*\n\n  Returns boolean true if the key is exactly equal to the value.\n\n  Example: key = \"Test Value\"\n\n* `BETWEEN` *range subexpression*\n\n  left side is between two values - first value is inclusive, second value is exclusive\n\n  Example: key BETWEEN (\"Value One\", \"Value Two\")\n\n* `=*` *range subexpression*\n\n  starts with\n\n* `>` *range subexpression*\n\n  greater than\n\n* `>=` *range subexpression*\n\n  greater than or equal\n\n* `<` *range subexpression*\n\n  less than\n\n* `<=` *range subexpression*\n\n  less than or equal\n\n### Expression Symbols\n\n* `null`\n\n  Means no value\n\n  Example: key = null\n\n* `(`\n\n  Left parentheses for logic grouping, MUST be used with right parentheses\n\n  Example: (key = \"Value 1\" OR key = \"Value Two\")\n\n* `)`\n\n  Right parentheses for logic grouping, MUST be used with left parentheses\n\n  Example: (key = \"Value 1\" OR key = \"Value Two\")\n\n\n### Submission Properties\n\nThese are the items that can be specified in the query subexpression.\n\n* `closedBy`\n\n  Username that closed the submission\n\n* `coreState`\n\n  The value of the core state the submission is in (\"Draft\", \"Submitted\", or \"Closed\")\n\n* `createdBy`\n\n  Username that created the submission\n\n* `handle`\n\n  A \"nearly-unique\" identifier for the submission\n\n* `sessionToken`\n\n  Used for anonymous submissions\n\n* `submittedBy`\n\n  Username that submitted the submission\n\n* `type`\n\n  The type of form the submission is associated to\n\n* `updatedBy`\n\n  Username that last updated the submission\n\n* `values`\n\n  Any field that is implemented by the Form.\n\n  Example: the field named 'Approver' would be referred as `values[Approver]`\n\n\n#### Example Qualifications\n\n```\n(values[Requested By] = \"john.doe\" OR values[Requested For] = \"john.doe\")\n  AND values[Status] IN (\"Pending Assignment\", \"On Hold\")\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListFormSubmissions = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/forms/{formSlug}/submissions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListFormSubmissions, input);
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

  server.tool("core_listFormSubmissions", operationDescriptionListFormSubmissions, inputSchemaListFormSubmissions, executeListFormSubmissions);
  server.tool("list_form_submissions", aliasDescriptionListFormSubmissions, inputSchemaListFormSubmissions, executeListFormSubmissions);

  const opListFormSubmissionsAsPost = requireOperation(operationMap, "listFormSubmissionsAsPost");
  const operationDescriptionListFormSubmissionsAsPost = "[submission] Submission Search (by Form as POST). (POST /kapps/{kappSlug}/forms/{formSlug}/submissions-search). Operation ID: listFormSubmissionsAsPost. Custom logic: default OAS execution.";
  const aliasDescriptionListFormSubmissionsAsPost = "[submission] Submission Search (by Form as POST). (POST /kapps/{kappSlug}/forms/{formSlug}/submissions-search). Operation ID: listFormSubmissionsAsPost. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/forms/{formSlug}/submissions-search. Tags: Submissions. Required inputs: kappSlug (path), formSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaListFormSubmissionsAsPost = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    formSlug: z.string().describe("The slug of the form"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("The content for the submissions search"),
  };
  const executeListFormSubmissionsAsPost = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/forms/{formSlug}/submissions-search
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListFormSubmissionsAsPost, input);
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

  server.tool("core_listFormSubmissionsAsPost", operationDescriptionListFormSubmissionsAsPost, inputSchemaListFormSubmissionsAsPost, executeListFormSubmissionsAsPost);
  server.tool("list_form_submissions_as_post", aliasDescriptionListFormSubmissionsAsPost, inputSchemaListFormSubmissionsAsPost, executeListFormSubmissionsAsPost);

  const opListKappSubmissions = requireOperation(operationMap, "listKappSubmissions");
  const operationDescriptionListKappSubmissions = "[submission] Submissions Search (by Kapp). (GET /kapps/{kappSlug}/submissions). Operation ID: listKappSubmissions. Custom logic: default OAS execution.";
  const aliasDescriptionListKappSubmissions = "[submission] Submissions Search (by Kapp). (GET /kapps/{kappSlug}/submissions). Operation ID: listKappSubmissions. Custom logic: default OAS execution. Use this alias for GET /kapps/{kappSlug}/submissions. Tags: Submissions. Required inputs: kappSlug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListKappSubmissions = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    count: z.string().optional().describe("Include a count of the number of submissions that match the search parameters in the result."),
    direction: z.enum(["ASC","DESC"]).optional().describe("The direction to order the results"),
    limit: z.number().int().optional().describe("Limit the number of results returned.\n\nIf not provided, the server will limit the results to 25 submissions."),
    orderBy: z.string().optional().describe("Comma separated list of submission properties and fields to sort the response by.\n\nThe orderBy list:\n\n* May start with any combination of zero or more items that are used in query equality subexpressions (`=` or `IN`).\n* May continue with the item used in the query range subexpressions (`=*`, `>`, `>=`, `<`, `<=`, `BETWEEN`).  This item is required if a range subexpression is used and any further items are added to the orderBy list.\n* May continue with any combination of zero or more items that are not used in the query, but are specified as index parts in the same order and after any parts used by equality or range subexpressions.\n* May end with a single submission timeline fields (`createdAt`, `updatedAt`, `submittedAt`, `closedAt`).  If the timeline is not specified, `createdAt` is used as the default tie breaker.\n\nAll parts of the orderBy except the optionally specified timeline must be included in all indexes used by the query.\n\nExample: values[Make],values[Model],values[Year],updatedAt"),
    pageToken: z.string().optional().describe("The token to get the next page of results.\n\nThis value is set using the nextPageToken value returned by a search with the same query to get the next page of results.\n\nThe submission that matches this value will not be included in the results."),
    q: z.string().optional().describe("A custom qualification that can be constructed similar to a SQL `WHERE` clause that allows building complex expressions using logical and relational operators against submission properties and field values.\n\nIn order to execute a submission search, there must be one or more index definitions that correspond to the specified submission properties and field values.\n\nOnly a single property or field can be specified using a range subexpression.\n\n\n### Operators\n\n* `AND`\n\n  Returns boolean true if and only if both expressions are true\n\n  Example: expression1 AND expression2\n\n* `OR`\n\n  Returns boolean true if at least one expression is true\n\n  Example: expression1 OR expression2\n\n* `IN` *equality subexpression*\n\n  Returns boolean true if the key matches one of the list values\n\n  Example: key IN (\"Value One\", \"Value Two\", \"Value Three\")\n\n* `=` *equality subexpression*\n\n  Returns boolean true if the key is exactly equal to the value.\n\n  Example: key = \"Test Value\"\n\n* `BETWEEN` *range subexpression*\n\n  left side is between two values - first value is inclusive, second value is exclusive\n\n  Example: key BETWEEN (\"Value One\", \"Value Two\")\n\n* `=*` *range subexpression*\n\n  starts with\n\n* `>` *range subexpression*\n\n  greater than\n\n* `>=` *range subexpression*\n\n  greater than or equal\n\n* `<` *range subexpression*\n\n  less than\n\n* `<=` *range subexpression*\n\n  less than or equal\n\n### Expression Symbols\n\n* `null`\n\n  Means no value\n\n  Example: key = null\n\n* `(`\n\n  Left parentheses for logic grouping, MUST be used with right parentheses\n\n  Example: (key = \"Value 1\" OR key = \"Value Two\")\n\n* `)`\n\n  Right parentheses for logic grouping, MUST be used with left parentheses\n\n  Example: (key = \"Value 1\" OR key = \"Value Two\")\n\n\n### Submission Properties\n\nThese are the items that can be specified in the query subexpression.\n\n* `closedBy`\n\n  Username that closed the submission\n\n* `coreState`\n\n  The value of the core state the submission is in (\"Draft\", \"Submitted\", or \"Closed\")\n\n* `createdBy`\n\n  Username that created the submission\n\n* `handle`\n\n  A \"nearly-unique\" identifier for the submission\n\n* `sessionToken`\n\n  Used for anonymous submissions\n\n* `submittedBy`\n\n  Username that submitted the submission\n\n* `type`\n\n  The type of form the submission is associated to\n\n* `updatedBy`\n\n  Username that last updated the submission\n\n* `values`\n\n  Any field that is implemented by the Form.\n\n  Example: the field named 'Approver' would be referred as `values[Approver]`\n\n\n#### Example Qualifications\n\n```\n(values[Requested By] = \"john.doe\" OR values[Requested For] = \"john.doe\")\n  AND values[Status] IN (\"Pending Assignment\", \"On Hold\")\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListKappSubmissions = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /kapps/{kappSlug}/submissions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListKappSubmissions, input);
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

  server.tool("core_listKappSubmissions", operationDescriptionListKappSubmissions, inputSchemaListKappSubmissions, executeListKappSubmissions);
  server.tool("list_kapp_submissions", aliasDescriptionListKappSubmissions, inputSchemaListKappSubmissions, executeListKappSubmissions);

  const opListKappSubmissionsAsPost = requireOperation(operationMap, "listKappSubmissionsAsPost");
  const operationDescriptionListKappSubmissionsAsPost = "[submission] Submissions Search (by Kapp as POST). (POST /kapps/{kappSlug}/submissions-search). Operation ID: listKappSubmissionsAsPost. Custom logic: default OAS execution.";
  const aliasDescriptionListKappSubmissionsAsPost = "[submission] Submissions Search (by Kapp as POST). (POST /kapps/{kappSlug}/submissions-search). Operation ID: listKappSubmissionsAsPost. Custom logic: default OAS execution. Use this alias for POST /kapps/{kappSlug}/submissions-search. Tags: Submissions. Required inputs: kappSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaListKappSubmissionsAsPost = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("The content for the submissions search"),
  };
  const executeListKappSubmissionsAsPost = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /kapps/{kappSlug}/submissions-search
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListKappSubmissionsAsPost, input);
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

  server.tool("core_listKappSubmissionsAsPost", operationDescriptionListKappSubmissionsAsPost, inputSchemaListKappSubmissionsAsPost, executeListKappSubmissionsAsPost);
  server.tool("list_kapp_submissions_as_post", aliasDescriptionListKappSubmissionsAsPost, inputSchemaListKappSubmissionsAsPost, executeListKappSubmissionsAsPost);

  const opListSubmissionActivities = requireOperation(operationMap, "listSubmissionActivities");
  const operationDescriptionListSubmissionActivities = "[submission] Submission Activity List. (GET /submissions/{submissionId}/activities). Operation ID: listSubmissionActivities. Custom logic: default OAS execution.";
  const aliasDescriptionListSubmissionActivities = "[submission] Submission Activity List. (GET /submissions/{submissionId}/activities). Operation ID: listSubmissionActivities. Custom logic: default OAS execution. Use this alias for GET /submissions/{submissionId}/activities. Tags: Submissions. Required inputs: submissionId (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListSubmissionActivities = {
    submissionId: z.string().describe("The id of the submission"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListSubmissionActivities = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /submissions/{submissionId}/activities
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListSubmissionActivities, input);
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

  server.tool("core_listSubmissionActivities", operationDescriptionListSubmissionActivities, inputSchemaListSubmissionActivities, executeListSubmissionActivities);
  server.tool("list_submission_activities", aliasDescriptionListSubmissionActivities, inputSchemaListSubmissionActivities, executeListSubmissionActivities);

  const opPatchExistingSubmission = requireOperation(operationMap, "patchExistingSubmission");
  const operationDescriptionPatchExistingSubmission = "[submission] Submission Patch (existing). (PATCH /submissions/{submissionId}). Operation ID: patchExistingSubmission. Custom logic: default OAS execution.";
  const aliasDescriptionPatchExistingSubmission = "[submission] Submission Patch (existing). (PATCH /submissions/{submissionId}). Operation ID: patchExistingSubmission. Custom logic: default OAS execution. Use this alias for PATCH /submissions/{submissionId}. Tags: Submissions. Required inputs: submissionId (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaPatchExistingSubmission = {
    submissionId: z.string().describe("The id of the submission"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("The content for the submission properties"),
  };
  const executePatchExistingSubmission = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PATCH /submissions/{submissionId}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opPatchExistingSubmission, input);
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

  server.tool("core_patchExistingSubmission", operationDescriptionPatchExistingSubmission, inputSchemaPatchExistingSubmission, executePatchExistingSubmission);
  server.tool("patch_existing_submission", aliasDescriptionPatchExistingSubmission, inputSchemaPatchExistingSubmission, executePatchExistingSubmission);

  const opPatchNewSubmission = requireOperation(operationMap, "patchNewSubmission");
  const operationDescriptionPatchNewSubmission = "[submission] Submission Patch (new). (PATCH /kapps/{kappSlug}/forms/{formSlug}/submissions). Operation ID: patchNewSubmission. Custom logic: default OAS execution.";
  const aliasDescriptionPatchNewSubmission = "[submission] Submission Patch (new). (PATCH /kapps/{kappSlug}/forms/{formSlug}/submissions). Operation ID: patchNewSubmission. Custom logic: default OAS execution. Use this alias for PATCH /kapps/{kappSlug}/forms/{formSlug}/submissions. Tags: Submissions. Required inputs: kappSlug (path), formSlug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaPatchNewSubmission = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    formSlug: z.string().describe("The slug of the form"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("The content for the submission properties"),
  };
  const executePatchNewSubmission = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PATCH /kapps/{kappSlug}/forms/{formSlug}/submissions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opPatchNewSubmission, input);
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

  server.tool("core_patchNewSubmission", operationDescriptionPatchNewSubmission, inputSchemaPatchNewSubmission, executePatchNewSubmission);
  server.tool("patch_new_submission", aliasDescriptionPatchNewSubmission, inputSchemaPatchNewSubmission, executePatchNewSubmission);

  const opReindexSubmissions = requireOperation(operationMap, "reindexSubmissions");
  const operationDescriptionReindexSubmissions = "[submission] Reindex Submissions. (PUT /submissions/{submissionId}/reindex). Operation ID: reindexSubmissions. Custom logic: default OAS execution.";
  const aliasDescriptionReindexSubmissions = "[submission] Reindex Submissions. (PUT /submissions/{submissionId}/reindex). Operation ID: reindexSubmissions. Custom logic: default OAS execution. Use this alias for PUT /submissions/{submissionId}/reindex. Tags: Submissions. Required inputs: submissionId (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaReindexSubmissions = {
    submissionId: z.string().describe("The id of the submission"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeReindexSubmissions = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /submissions/{submissionId}/reindex
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opReindexSubmissions, input);
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

  server.tool("core_reindexSubmissions", operationDescriptionReindexSubmissions, inputSchemaReindexSubmissions, executeReindexSubmissions);
  server.tool("reindex_submissions", aliasDescriptionReindexSubmissions, inputSchemaReindexSubmissions, executeReindexSubmissions);

  const opRetrieveSubmission = requireOperation(operationMap, "retrieveSubmission");
  const operationDescriptionRetrieveSubmission = "[submission] Submission Retrieve. (GET /submissions/{submissionId}). Operation ID: retrieveSubmission. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveSubmission = "[submission] Submission Retrieve. (GET /submissions/{submissionId}). Operation ID: retrieveSubmission. Custom logic: default OAS execution. Use this alias for GET /submissions/{submissionId}. Tags: Submissions. Required inputs: submissionId (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveSubmission = {
    submissionId: z.string().describe("The id of the submission"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveSubmission = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /submissions/{submissionId}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveSubmission, input);
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

  server.tool("core_retrieveSubmission", operationDescriptionRetrieveSubmission, inputSchemaRetrieveSubmission, executeRetrieveSubmission);
  server.tool("retrieve_submission", aliasDescriptionRetrieveSubmission, inputSchemaRetrieveSubmission, executeRetrieveSubmission);

  const opRetrieveSubmissionActivity = requireOperation(operationMap, "retrieveSubmissionActivity");
  const operationDescriptionRetrieveSubmissionActivity = "[submission] Submission Activity Retrieve. (GET /submissions/{submissionId}/activities/{activityId}). Operation ID: retrieveSubmissionActivity. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveSubmissionActivity = "[submission] Submission Activity Retrieve. (GET /submissions/{submissionId}/activities/{activityId}). Operation ID: retrieveSubmissionActivity. Custom logic: default OAS execution. Use this alias for GET /submissions/{submissionId}/activities/{activityId}. Tags: Submissions. Required inputs: submissionId (path), activityId (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveSubmissionActivity = {
    submissionId: z.string().describe("The id of the submission"),
    activityId: z.string().describe("The id of the submission activity"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveSubmissionActivity = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /submissions/{submissionId}/activities/{activityId}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveSubmissionActivity, input);
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

  server.tool("core_retrieveSubmissionActivity", operationDescriptionRetrieveSubmissionActivity, inputSchemaRetrieveSubmissionActivity, executeRetrieveSubmissionActivity);
  server.tool("retrieve_submission_activity", aliasDescriptionRetrieveSubmissionActivity, inputSchemaRetrieveSubmissionActivity, executeRetrieveSubmissionActivity);

  const opRetrieveSubmissionFileUrl = requireOperation(operationMap, "retrieveSubmissionFileUrl");
  const operationDescriptionRetrieveSubmissionFileUrl = "[submission] Submission Attachment File URL Retrieve. (GET /submissions/{submissionId}/files/{fieldName}/{fileIndex}/{fileName}/url). Operation ID: retrieveSubmissionFileUrl. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveSubmissionFileUrl = "[submission] Submission Attachment File URL Retrieve. (GET /submissions/{submissionId}/files/{fieldName}/{fileIndex}/{fileName}/url). Operation ID: retrieveSubmissionFileUrl. Custom logic: default OAS execution. Use this alias for GET /submissions/{submissionId}/files/{fieldName}/{fileIndex}/{fileName}/url. Tags: Submissions. Required inputs: submissionId (path), fieldName (path), fileIndex (path), fileName (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveSubmissionFileUrl = {
    submissionId: z.string().describe("The id of the submission"),
    fieldName: z.string().describe("Name of the field the file attachment was submitted for."),
    fileIndex: z.number().int().describe("The index in the array of attachments for the field.  This value will always be 0 for File fields that only allow a single value."),
    fileName: z.string().describe("Name of the file that was attached to the field."),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveSubmissionFileUrl = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /submissions/{submissionId}/files/{fieldName}/{fileIndex}/{fileName}/url
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveSubmissionFileUrl, input);
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

  server.tool("core_retrieveSubmissionFileUrl", operationDescriptionRetrieveSubmissionFileUrl, inputSchemaRetrieveSubmissionFileUrl, executeRetrieveSubmissionFileUrl);
  server.tool("retrieve_submission_file_url", aliasDescriptionRetrieveSubmissionFileUrl, inputSchemaRetrieveSubmissionFileUrl, executeRetrieveSubmissionFileUrl);

  const opSubmitSubmissionPage = requireOperation(operationMap, "submitSubmissionPage");
  const operationDescriptionSubmitSubmissionPage = "[submission] Submission Submit. (POST /submissions/{submissionId}). Operation ID: submitSubmissionPage. Custom logic: default OAS execution.";
  const aliasDescriptionSubmitSubmissionPage = "[submission] Submission Submit. (POST /submissions/{submissionId}). Operation ID: submitSubmissionPage. Custom logic: default OAS execution. Use this alias for POST /submissions/{submissionId}. Tags: Submissions. Required inputs: submissionId (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaSubmitSubmissionPage = {
    submissionId: z.string().describe("The id of the submission"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    page: z.string().optional().describe("The name of the Page being submitted."),
    staged: z.boolean().optional().describe("Indicates whether field validations and page advancement should take place."),
    defer: z.boolean().optional().describe("Indicates the submission is for a subform embedded in a parent submission."),
    body: z.any().describe("The content for the submission properties"),
  };
  const executeSubmitSubmissionPage = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /submissions/{submissionId}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opSubmitSubmissionPage, input);
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

  server.tool("core_submitSubmissionPage", operationDescriptionSubmitSubmissionPage, inputSchemaSubmitSubmissionPage, executeSubmitSubmissionPage);
  server.tool("submit_submission_page", aliasDescriptionSubmitSubmissionPage, inputSchemaSubmitSubmissionPage, executeSubmitSubmissionPage);

  const opUpdateSubmission = requireOperation(operationMap, "updateSubmission");
  const operationDescriptionUpdateSubmission = "[submission] Submission Update. (PUT /submissions/{submissionId}). Operation ID: updateSubmission. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateSubmission = "[submission] Submission Update. (PUT /submissions/{submissionId}). Operation ID: updateSubmission. Custom logic: default OAS execution. Use this alias for PUT /submissions/{submissionId}. Tags: Submissions. Required inputs: submissionId (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateSubmission = {
    submissionId: z.string().describe("The id of the submission"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("The content for the submission properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateSubmission = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /submissions/{submissionId}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateSubmission, input);
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

  server.tool("core_updateSubmission", operationDescriptionUpdateSubmission, inputSchemaUpdateSubmission, executeUpdateSubmission);
  server.tool("update_submission", aliasDescriptionUpdateSubmission, inputSchemaUpdateSubmission, executeUpdateSubmission);

  const opUpdateSubmissionActivity = requireOperation(operationMap, "updateSubmissionActivity");
  const operationDescriptionUpdateSubmissionActivity = "[submission] Submission Activity Update. (PUT /submissions/{submissionId}/activities/{activityId}). Operation ID: updateSubmissionActivity. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateSubmissionActivity = "[submission] Submission Activity Update. (PUT /submissions/{submissionId}/activities/{activityId}). Operation ID: updateSubmissionActivity. Custom logic: default OAS execution. Use this alias for PUT /submissions/{submissionId}/activities/{activityId}. Tags: Submissions. Required inputs: submissionId (path), activityId (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateSubmissionActivity = {
    submissionId: z.string().describe("The id of the submission"),
    activityId: z.string().describe("The id of the submission activity"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the submission activity properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateSubmissionActivity = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /submissions/{submissionId}/activities/{activityId}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateSubmissionActivity, input);
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

  server.tool("core_updateSubmissionActivity", operationDescriptionUpdateSubmissionActivity, inputSchemaUpdateSubmissionActivity, executeUpdateSubmissionActivity);
  server.tool("update_submission_activity", aliasDescriptionUpdateSubmissionActivity, inputSchemaUpdateSubmissionActivity, executeUpdateSubmissionActivity);

  const opUpdateSubmissionMultipart = requireOperation(operationMap, "updateSubmissionMultipart");
  const operationDescriptionUpdateSubmissionMultipart = "[submission] Submission Update (with Attachments). (POST /submissions-multipart/{submissionId}). Operation ID: updateSubmissionMultipart. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateSubmissionMultipart = "[submission] Submission Update (with Attachments). (POST /submissions-multipart/{submissionId}). Operation ID: updateSubmissionMultipart. Custom logic: default OAS execution. Use this alias for POST /submissions-multipart/{submissionId}. Tags: Submissions. Required inputs: submissionId (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateSubmissionMultipart = {
    submissionId: z.string().describe("The id of the submission"),
    completed: z.boolean().optional().describe("signals that the submission should be completed (equivalent of submitting all of the pages at once)"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* activities\n\n* children\n\n* descendants\n\n* origin\n\n* parent\n\n* type\n\n* values\n\n* values.raw\n\n* values[FIELD NAME]\n\n* form\n\n* form.{any form include property}\n\n\n#### `values`\n\nTypically when retrieving submissions an include of `values` will be specified.\nThis will return a map of field names to the values associated to that field.\n\n```json\n{\n  ...,\n  \"values\": {\n    \"Checkbox Field\": [\"Value 1\", \"Value 2\"],\n    \"Text Field\": \"Value\"\n  }\n}\n```\n\n#### `values.raw`\n\nSpecifying an include of `values.raw` is similar to specifying an include of\n`values`, except the values will be returned as a map of field keys to\nmetadata about the value associated to that field.\n\n* **isMalformed** indicates whether the value matches the expected format for the field type.\n\n* **isUnexpected** indicates whether the value corresponds to a field key that does not exist on the form.\n\n* **name** indicates the name of the field (if it exists on the form).\n\n* **rawValue** is the raw string that corresponds to the value.\n\n* **value** is the value in JSON format (if the value is not malformed).\n\nBecause the **rawValue** property is returned as a string, this include can be\nused to troubleshoot issues where a submission contains values in an\nunexpected format (such as when a field type changes).  Additionally,\n`values.raw` includes values for field keys that do not exist on the form\n(likely because the field was deleted).  This makes it possible to write\nscripts to access or manipulate historical values that no longer correspond to\nthe current form.\n\n```json\n{\n  ...,\n  \"valuesRaw\": {\n    \"f1\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": true,\n      \"name\": null,\n      \"rawValue\": \"Orphaned Value\",\n      \"value\": \"Orphaned Value\"\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Checkbox Field\",\n      \"rawValue\": \"[\\\"Value 1\\\", \\\"Value 2\\\"]\",\n      \"value\": [\"Value 1\", \"Value 2\"]\n    },\n    \"f2\": {\n      \"isMalformed\": false,\n      \"isUnexpected\": false,\n      \"name\": \"Text Field\",\n      \"rawValue\": \"Value\",\n      \"value\": \"Value\"\n    }\n  }\n}\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeUpdateSubmissionMultipart = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /submissions-multipart/{submissionId}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateSubmissionMultipart, input);
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

  server.tool("core_updateSubmissionMultipart", operationDescriptionUpdateSubmissionMultipart, inputSchemaUpdateSubmissionMultipart, executeUpdateSubmissionMultipart);
  server.tool("update_submission_multipart", aliasDescriptionUpdateSubmissionMultipart, inputSchemaUpdateSubmissionMultipart, executeUpdateSubmissionMultipart);

}
