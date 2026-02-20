// AUTO-GENERATED FILE. Do not edit manually.
// Regenerate with: npm run ops:generate-tools
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ContextToolRuntime, requireOperation } from "./shared.js";

export function registerTeamTools(server: McpServer, runtime: ContextToolRuntime): void {
  const { operationMap, invokeDefaultOperation } = runtime;

  const opCreateMembership = requireOperation(operationMap, "createMembership");
  const operationDescriptionCreateMembership = "[team] Team Membership Create. (POST /memberships). Operation ID: createMembership. Custom logic: default OAS execution.";
  const aliasDescriptionCreateMembership = "[team] Team Membership Create. (POST /memberships). Operation ID: createMembership. Custom logic: default OAS execution. Use this alias for POST /memberships. Tags: Memberships. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateMembership = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* team\n\n* user"),
    body: z.any().describe("The content for the membership properties"),
  };
  const executeCreateMembership = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /memberships
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateMembership, input);
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

  server.tool("core_createMembership", operationDescriptionCreateMembership, inputSchemaCreateMembership, executeCreateMembership);
  server.tool("create_membership", aliasDescriptionCreateMembership, inputSchemaCreateMembership, executeCreateMembership);

  const opCreateTeam = requireOperation(operationMap, "createTeam");
  const operationDescriptionCreateTeam = "[team] Team Create. (POST /teams). Operation ID: createTeam. Custom logic: default OAS execution.";
  const aliasDescriptionCreateTeam = "[team] Team Create. (POST /teams). Operation ID: createTeam. Custom logic: default OAS execution. Use this alias for POST /teams. Tags: Teams. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateTeam = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* memberships"),
    restorationToken: z.string().optional().describe("the archived team's restoration token"),
    body: z.any().describe("The content for the team properties"),
  };
  const executeCreateTeam = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /teams
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateTeam, input);
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

  server.tool("core_createTeam", operationDescriptionCreateTeam, inputSchemaCreateTeam, executeCreateTeam);
  server.tool("create_team", aliasDescriptionCreateTeam, inputSchemaCreateTeam, executeCreateTeam);

  const opCreateTeamAttributeDefinition = requireOperation(operationMap, "createTeamAttributeDefinition");
  const operationDescriptionCreateTeamAttributeDefinition = "[team] Team Attribute Definition Create. (POST /teamAttributeDefinitions). Operation ID: createTeamAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionCreateTeamAttributeDefinition = "[team] Team Attribute Definition Create. (POST /teamAttributeDefinitions). Operation ID: createTeamAttributeDefinition. Custom logic: default OAS execution. Use this alias for POST /teamAttributeDefinitions. Tags: Attribute Definitions. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaCreateTeamAttributeDefinition = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the attribute definition properties"),
  };
  const executeCreateTeamAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for POST /teamAttributeDefinitions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opCreateTeamAttributeDefinition, input);
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

  server.tool("core_createTeamAttributeDefinition", operationDescriptionCreateTeamAttributeDefinition, inputSchemaCreateTeamAttributeDefinition, executeCreateTeamAttributeDefinition);
  server.tool("create_team_attribute_definition", aliasDescriptionCreateTeamAttributeDefinition, inputSchemaCreateTeamAttributeDefinition, executeCreateTeamAttributeDefinition);

  const opDeleteMembership = requireOperation(operationMap, "deleteMembership");
  const operationDescriptionDeleteMembership = "[team] Team Membership Delete. (DELETE /memberships/{slug}). Operation ID: deleteMembership. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteMembership = "[team] Team Membership Delete. (DELETE /memberships/{slug}). Operation ID: deleteMembership. Custom logic: default OAS execution. Use this alias for DELETE /memberships/{slug}. Tags: Memberships. Required inputs: slug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteMembership = {
    slug: z.string().describe("The membership identified by the team slug and user login name concatenated with an underscore.\n\nFor example - `teamslug_username`"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* team\n\n* user"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteMembership = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /memberships/{slug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteMembership, input);
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

  server.tool("core_deleteMembership", operationDescriptionDeleteMembership, inputSchemaDeleteMembership, executeDeleteMembership);
  server.tool("delete_membership", aliasDescriptionDeleteMembership, inputSchemaDeleteMembership, executeDeleteMembership);

  const opDeleteTeam = requireOperation(operationMap, "deleteTeam");
  const operationDescriptionDeleteTeam = "[team] Team Delete. (DELETE /teams/{slug}). Operation ID: deleteTeam. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteTeam = "[team] Team Delete. (DELETE /teams/{slug}). Operation ID: deleteTeam. Custom logic: default OAS execution. Use this alias for DELETE /teams/{slug}. Tags: Teams. Required inputs: slug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteTeam = {
    slug: z.string().describe("The slug of the team"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* memberships"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteTeam = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /teams/{slug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteTeam, input);
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

  server.tool("core_deleteTeam", operationDescriptionDeleteTeam, inputSchemaDeleteTeam, executeDeleteTeam);
  server.tool("delete_team", aliasDescriptionDeleteTeam, inputSchemaDeleteTeam, executeDeleteTeam);

  const opDeleteTeamAttributeDefinition = requireOperation(operationMap, "deleteTeamAttributeDefinition");
  const operationDescriptionDeleteTeamAttributeDefinition = "[team] Team Attribute Definition Delete. (DELETE /teamAttributeDefinitions/{name}). Operation ID: deleteTeamAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionDeleteTeamAttributeDefinition = "[team] Team Attribute Definition Delete. (DELETE /teamAttributeDefinitions/{name}). Operation ID: deleteTeamAttributeDefinition. Custom logic: default OAS execution. Use this alias for DELETE /teamAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaDeleteTeamAttributeDefinition = {
    name: z.string().describe("The name of the attribute definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeDeleteTeamAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for DELETE /teamAttributeDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opDeleteTeamAttributeDefinition, input);
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

  server.tool("core_deleteTeamAttributeDefinition", operationDescriptionDeleteTeamAttributeDefinition, inputSchemaDeleteTeamAttributeDefinition, executeDeleteTeamAttributeDefinition);
  server.tool("delete_team_attribute_definition", aliasDescriptionDeleteTeamAttributeDefinition, inputSchemaDeleteTeamAttributeDefinition, executeDeleteTeamAttributeDefinition);

  const opListTeamAttributeDefinitions = requireOperation(operationMap, "listTeamAttributeDefinitions");
  const operationDescriptionListTeamAttributeDefinitions = "[team] Team Attribute Definition List. (GET /teamAttributeDefinitions). Operation ID: listTeamAttributeDefinitions. Custom logic: default OAS execution.";
  const aliasDescriptionListTeamAttributeDefinitions = "[team] Team Attribute Definition List. (GET /teamAttributeDefinitions). Operation ID: listTeamAttributeDefinitions. Custom logic: default OAS execution. Use this alias for GET /teamAttributeDefinitions. Tags: Attribute Definitions. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListTeamAttributeDefinitions = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListTeamAttributeDefinitions = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /teamAttributeDefinitions
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListTeamAttributeDefinitions, input);
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

  server.tool("core_listTeamAttributeDefinitions", operationDescriptionListTeamAttributeDefinitions, inputSchemaListTeamAttributeDefinitions, executeListTeamAttributeDefinitions);
  server.tool("list_team_attribute_definitions", aliasDescriptionListTeamAttributeDefinitions, inputSchemaListTeamAttributeDefinitions, executeListTeamAttributeDefinitions);

  const opListTeams = requireOperation(operationMap, "listTeams");
  const operationDescriptionListTeams = "[team] Team List. (GET /teams). Operation ID: listTeams. Custom logic: default OAS execution.";
  const aliasDescriptionListTeams = "[team] Team List. (GET /teams). Operation ID: listTeams. Custom logic: default OAS execution. Use this alias for GET /teams. Tags: Teams. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaListTeams = {
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* memberships"),
    count: z.boolean().optional().describe("If the count query parameter is specified, the server will respond with a count and no results for improved network performance of getting 'counts'."),
    archived: z.boolean().optional().describe("list archive teams"),
    limit: z.number().int().optional().describe("Limit the number of results returned.\n\nIf not provided, the server will return the default, maximum limit of `1000` results.\n\n**DEPRECATION NOTICE:** Pagination functionality was introduced in version 2.4. In order to provide backwards compatibility with previous versions, if you provide the limit parameter, results will be paginated. If you don't provide the limit parameter, the full result will be returned. The ability to return the full result set will be deprecated in a later version in favor of a paginated set of results."),
    orderBy: z.enum(["name","localName","updatedAt","createdAt"]).optional().describe("The team property to order (sort) results by.\n\nThis order by value can be one of the allowed properties, and that property must also be part of the search qualification.\n\nIf no `orderBy` parameter is passed, the query will be ordered by the first usage of `name`, `localName`, `updatedAt` or `createdAt` included in the search qualification. If none of these are used in the search qualification, the results will be ordered by `name`."),
    direction: z.enum(["ASC","DESC"]).optional().describe("The direction the results should be ordered by; ascending or descending."),
    pageToken: z.string().optional().describe("The token to get the next page of results. This value is set using the nextPageToken value returned by a search with the same query to get the next page or results."),
    q: z.string().optional().describe("Search qualification parameter used to find teams within the system.\n\n\n#### Common Example Queries\n\n* `q=name =* \"HR\"`\n\n    Returns all teams in the system have a full name starting with \"HR\" (ie \"HR\", \"HR::Benefits\", \"HR::Benefits::Administrators\", and \"HR-IT\")\n\n* `q=name =* \"HR::\"`\n\n    Returns all teams in the system that are descendants of the HR team (ie \"HR::Benefits\" and \"HR::Benefits::Administrators\")\n\n* `q=parentName = \"HR\"`\n\n    Returns all teams in the system with a parent team of HR (ie \"HR::Benefits\").\n\n* `q=attributes[Assignable] = \"True\" AND name =* \"HR::\"`\n\n    Returns all teams in the system with that are a decendant of HR and how have an \"Assignable\" attribute value of \"True\"\n\n\n#### Operators:\n\n* `BETWEEN`\n\n    left side is between two values - first value is inclusive, second value is exclusive\n\n* `IN`\n\n    left side is equal to one of provided items\n\n* `=`\n\n    equal\n\n* `=*`\n\n    starts with\n\n* `>`\n\n    greater than\n\n* `>=`\n\n    greater than or equal\n\n* `<`\n\n    less than\n\n* `<=`\n\n    less than or equal\n\n* `AND`\n\n    Returns boolean true if and only if both expressions are true\n\n* `OR`\n\n    Returns boolean true if at least one expression is true\n\n\n#### Queryable Properties\n\n##### The following properties can be used within a search with the `=`, `IN`, `=*` (starts with), `<`, `<=`, `>`, `>=`, and `BETWEEN` operators, however some limitations apply to ensure consistent performance (See Complex Query Limitations below).\n\n* `createdAt`                         (The ISO 8601 time that when the team was created)\n\n    *Example:*                        `q=createdAt BETWEEN (\"2018-04-16T18:42:56.000Z\",\"2019-04-16T18:42:56.000Z\")`\n\n* `localName`                         (Local name of the team)\n\n    *Example:*                        `q=localName=\"Employees\"`\n\n* `name`                              (Name of the team)\n\n    *Example:*                        `q=name=\"HR::Employees\"`\n\n* `updatedAt`                         (The ISO 8601 time that when the team was last updated)\n\n    *Example:*                        `q=updatedAt >= \"2018-04-16T18:42:56.000Z\"`\n\n\n##### The following properties can _only_ be used within a search with the `=` and `IN` operators, however some limitations apply to ensure consistent performance (See Complex Query Limitations below).\n\n* `parentName`                        (The parent name of the team)\n\n    *Example:*                        `q=parentName=\"HR\"`\n\n* `attributes[Attribute Name]`        (Attribute Value of a team)\n\n    *Example:*                        `q=attributes[Icon]=\"fa-fork\"`\n\n\n#### Complex Query Limitations\n\nProperties can be combined to create subexpressions within a query qualification, however some limits are enforced to ensure a stable and performant system.\n\n* The `parentName` property can only be combined with other subexpressions using the `AND` operator.\n\n    * Examples of **valid** queries using the `parentName` property\n\n        `q=parentName=\"HR\" AND ...`\n\n    * Examples of **invalid** queries using the `parentName` property\n\n        `q=parentName=\"HR\" OR ...`\n\n* Only one `attributes[]` property can be used within a search qualification\n\n    * Examples of **valid** queries using Attributes\n\n        `q=parentName=\"HR\" AND attributes[FOO] = \"Bar\"`\n\n    * Examples of **invalid** queries using Attributes\n\n        `q=parentName=\"HR\" AND attributes[FOO] = \"Bar\" AND attribute[BAZ] = \"Bang\"`\n\n* When combining the `createdAt`, `localName`, `name`, or `updatedAt` properties with the `OR` operator, the subexpressions must be surrounded with parentheses `()`. If the subexpressions can not be completed efficiently, an error message will be returned that includes information on how to structure a more efficient query.\n\n    * Examples of **valid** queries using the `=*` (starts with), `<`, `<=`, `>`, `>=`, and `BETWEEN` operators\n\n        `q=enabled=\"true\" AND (name =* \"employees\" OR localName =*employees)`\n\n        `q=attributes[Manager]=\"mary.manager\" AND (name =* \"employees\" OR localName =*employees)`\n\n    * Examples of **invalid** queries using the `=*` (starts with), `<`, `<=`, `>`, `>=`, and `BETWEEN` operators\n\n        `q=attributes[Manager]=\"mary.manager\" AND name =* \"employees\" OR localName =*employees`\n\n\n#### Pagination\n\nThe system will paginate search results based on the `limit` parameter.  If there are more results than the `limit` parameter (or more than 1000 results if the limit parameter is not provided), a `nextPageToken` will be included in the response.  The `nextPageToken` value can be passed as the `pageToken` parameter in subsequent queries to obtain the next page of results.\n\n**DEPRECATION NOTICE:** Pagination functionality was introduced in version 2.4. In order to provide backwards compatibility with previous versions, if you provide the limit parameter, results will be paginated. If you don't provide the limit parameter, the full result will be returned. The ability to return the full result set will be deprecated in a later version in favor of a paginated set of results.\n\nExample Response with a next page token:\n```javascript\n{\n  \"teams\": [{...}, {...}],\n  \"nextPageToken\": \"YWJib3R0LmRldmFuQHRoaWVsLm9yZw.4wg2me95blthjyzdvkfs56oc3\"\n}\n```"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeListTeams = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /teams
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opListTeams, input);
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

  server.tool("core_listTeams", operationDescriptionListTeams, inputSchemaListTeams, executeListTeams);
  server.tool("list_teams", aliasDescriptionListTeams, inputSchemaListTeams, executeListTeams);

  const opRetrieveTeam = requireOperation(operationMap, "retrieveTeam");
  const operationDescriptionRetrieveTeam = "[team] Team Retrieve. (GET /teams/{slug}). Operation ID: retrieveTeam. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveTeam = "[team] Team Retrieve. (GET /teams/{slug}). Operation ID: retrieveTeam. Custom logic: default OAS execution. Use this alias for GET /teams/{slug}. Tags: Teams. Required inputs: slug (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveTeam = {
    slug: z.string().describe("The slug of the team"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* memberships"),
    export: z.boolean().optional().describe("flag indicating the API should export all child components of the team."),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveTeam = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /teams/{slug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveTeam, input);
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

  server.tool("core_retrieveTeam", operationDescriptionRetrieveTeam, inputSchemaRetrieveTeam, executeRetrieveTeam);
  server.tool("retrieve_team", aliasDescriptionRetrieveTeam, inputSchemaRetrieveTeam, executeRetrieveTeam);

  const opRetrieveTeamAttributeDefinition = requireOperation(operationMap, "retrieveTeamAttributeDefinition");
  const operationDescriptionRetrieveTeamAttributeDefinition = "[team] Team Attribute Definition Retrieve. (GET /teamAttributeDefinitions/{name}). Operation ID: retrieveTeamAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionRetrieveTeamAttributeDefinition = "[team] Team Attribute Definition Retrieve. (GET /teamAttributeDefinitions/{name}). Operation ID: retrieveTeamAttributeDefinition. Custom logic: default OAS execution. Use this alias for GET /teamAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
  const inputSchemaRetrieveTeamAttributeDefinition = {
    name: z.string().describe("The name of the attribute definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("Request body payload").optional(),
  };
  const executeRetrieveTeamAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for GET /teamAttributeDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opRetrieveTeamAttributeDefinition, input);
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

  server.tool("core_retrieveTeamAttributeDefinition", operationDescriptionRetrieveTeamAttributeDefinition, inputSchemaRetrieveTeamAttributeDefinition, executeRetrieveTeamAttributeDefinition);
  server.tool("retrieve_team_attribute_definition", aliasDescriptionRetrieveTeamAttributeDefinition, inputSchemaRetrieveTeamAttributeDefinition, executeRetrieveTeamAttributeDefinition);

  const opUpdateTeam = requireOperation(operationMap, "updateTeam");
  const operationDescriptionUpdateTeam = "[team] Team Update. (PUT /teams/{slug}). Operation ID: updateTeam. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateTeam = "[team] Team Update. (PUT /teams/{slug}). Operation ID: updateTeam. Custom logic: default OAS execution. Use this alias for PUT /teams/{slug}. Tags: Teams. Required inputs: slug (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateTeam = {
    slug: z.string().describe("The slug of the team"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* memberships"),
    body: z.any().describe("The content for the team properties to update\n\nUser memberships can be specified by including a `\"memberships\":[]` property in the body, but this list is inclusive of all users. This means if any user memberships already exist, then they must be included in this list.  If any existing memberships are excluded from the list, those memberships will be deleted.\n\n**NOTE** All properties in the request body are optional, and only the properties supplied will be updated.\n\n**The current user must have Space management privileges to perform this action.**"),
  };
  const executeUpdateTeam = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /teams/{slug}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateTeam, input);
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

  server.tool("core_updateTeam", operationDescriptionUpdateTeam, inputSchemaUpdateTeam, executeUpdateTeam);
  server.tool("update_team", aliasDescriptionUpdateTeam, inputSchemaUpdateTeam, executeUpdateTeam);

  const opUpdateTeamAttributeDefinition = requireOperation(operationMap, "updateTeamAttributeDefinition");
  const operationDescriptionUpdateTeamAttributeDefinition = "[team] Team Attribute Definition Update. (PUT /teamAttributeDefinitions/{name}). Operation ID: updateTeamAttributeDefinition. Custom logic: default OAS execution.";
  const aliasDescriptionUpdateTeamAttributeDefinition = "[team] Team Attribute Definition Update. (PUT /teamAttributeDefinitions/{name}). Operation ID: updateTeamAttributeDefinition. Custom logic: default OAS execution. Use this alias for PUT /teamAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: required. Call `connect` first if a session is not already configured.";
  const inputSchemaUpdateTeamAttributeDefinition = {
    name: z.string().describe("The name of the attribute definition"),
    include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
    body: z.any().describe("The content for the attribute definition properties to update\n\n**Only** the properties supplied will be updated."),
  };
  const executeUpdateTeamAttributeDefinition = async (input: any, extra: { sessionId?: string } | undefined) => {
    try {
      // TODO: add custom logic for PUT /teamAttributeDefinitions/{name}
      const sessionId = extra?.sessionId ?? "stdio";
      const result = await invokeDefaultOperation(sessionId, opUpdateTeamAttributeDefinition, input);
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

  server.tool("core_updateTeamAttributeDefinition", operationDescriptionUpdateTeamAttributeDefinition, inputSchemaUpdateTeamAttributeDefinition, executeUpdateTeamAttributeDefinition);
  server.tool("update_team_attribute_definition", aliasDescriptionUpdateTeamAttributeDefinition, inputSchemaUpdateTeamAttributeDefinition, executeUpdateTeamAttributeDefinition);

}
