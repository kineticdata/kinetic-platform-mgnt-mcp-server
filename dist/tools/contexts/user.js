import { z } from "zod";
import { requireOperation } from "./shared.js";
export function registerUserTools(server, runtime) {
    const { operationMap, invokeDefaultOperation } = runtime;
    const opCreateUser = requireOperation(operationMap, "createUser");
    const operationDescriptionCreateUser = "[user] User Create. (POST /users). Operation ID: createUser. Custom logic: default OAS execution.";
    const aliasDescriptionCreateUser = "[user] User Create. (POST /users). Operation ID: createUser. Custom logic: default OAS execution. Use this alias for POST /users. Tags: Users. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateUser = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* memberships\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* profileAttributes[ATTRIBUTE NAME]\n\n* profileAttributesMap[ATTRIBUTE NAME]\n\n* space.{any Space include property}"),
        body: z.any().describe("The content for the user properties"),
    };
    const executeCreateUser = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /users
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateUser, input);
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
    server.tool("core_createUser", operationDescriptionCreateUser, inputSchemaCreateUser, executeCreateUser);
    server.tool("create_user", aliasDescriptionCreateUser, inputSchemaCreateUser, executeCreateUser);
    const opCreateUserAttributeDefinition = requireOperation(operationMap, "createUserAttributeDefinition");
    const operationDescriptionCreateUserAttributeDefinition = "[user] User Attribute Definition Create. (POST /userAttributeDefinitions). Operation ID: createUserAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionCreateUserAttributeDefinition = "[user] User Attribute Definition Create. (POST /userAttributeDefinitions). Operation ID: createUserAttributeDefinition. Custom logic: default OAS execution. Use this alias for POST /userAttributeDefinitions. Tags: Attribute Definitions. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateUserAttributeDefinition = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the attribute definition properties"),
    };
    const executeCreateUserAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /userAttributeDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateUserAttributeDefinition, input);
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
    server.tool("core_createUserAttributeDefinition", operationDescriptionCreateUserAttributeDefinition, inputSchemaCreateUserAttributeDefinition, executeCreateUserAttributeDefinition);
    server.tool("create_user_attribute_definition", aliasDescriptionCreateUserAttributeDefinition, inputSchemaCreateUserAttributeDefinition, executeCreateUserAttributeDefinition);
    const opCreateUserInvitationToken = requireOperation(operationMap, "createUserInvitationToken");
    const operationDescriptionCreateUserInvitationToken = "[user] User Invitation Token Create. (POST /userInvitationTokens). Operation ID: createUserInvitationToken. Custom logic: default OAS execution.";
    const aliasDescriptionCreateUserInvitationToken = "[user] User Invitation Token Create. (POST /userInvitationTokens). Operation ID: createUserInvitationToken. Custom logic: default OAS execution. Use this alias for POST /userInvitationTokens. Tags: Users. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateUserInvitationToken = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the user invitation token"),
    };
    const executeCreateUserInvitationToken = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /userInvitationTokens
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateUserInvitationToken, input);
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
    server.tool("core_createUserInvitationToken", operationDescriptionCreateUserInvitationToken, inputSchemaCreateUserInvitationToken, executeCreateUserInvitationToken);
    server.tool("create_user_invitation_token", aliasDescriptionCreateUserInvitationToken, inputSchemaCreateUserInvitationToken, executeCreateUserInvitationToken);
    const opCreateUserProfileAttributeDefinition = requireOperation(operationMap, "createUserProfileAttributeDefinition");
    const operationDescriptionCreateUserProfileAttributeDefinition = "[user] User Profile Attribute Definition Create. (POST /userProfileAttributeDefinitions). Operation ID: createUserProfileAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionCreateUserProfileAttributeDefinition = "[user] User Profile Attribute Definition Create. (POST /userProfileAttributeDefinitions). Operation ID: createUserProfileAttributeDefinition. Custom logic: default OAS execution. Use this alias for POST /userProfileAttributeDefinitions. Tags: Attribute Definitions. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaCreateUserProfileAttributeDefinition = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the attribute definition properties"),
    };
    const executeCreateUserProfileAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /userProfileAttributeDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opCreateUserProfileAttributeDefinition, input);
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
    server.tool("core_createUserProfileAttributeDefinition", operationDescriptionCreateUserProfileAttributeDefinition, inputSchemaCreateUserProfileAttributeDefinition, executeCreateUserProfileAttributeDefinition);
    server.tool("create_user_profile_attribute_definition", aliasDescriptionCreateUserProfileAttributeDefinition, inputSchemaCreateUserProfileAttributeDefinition, executeCreateUserProfileAttributeDefinition);
    const opDeleteUser = requireOperation(operationMap, "deleteUser");
    const operationDescriptionDeleteUser = "[user] User Delete. (DELETE /users/{username}). Operation ID: deleteUser. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteUser = "[user] User Delete. (DELETE /users/{username}). Operation ID: deleteUser. Custom logic: default OAS execution. Use this alias for DELETE /users/{username}. Tags: Users. Required inputs: username (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteUser = {
        username: z.string().describe("The username of the user"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* memberships\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* profileAttributes[ATTRIBUTE NAME]\n\n* profileAttributesMap[ATTRIBUTE NAME]\n\n* space.{any Space include property}"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteUser = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /users/{username}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteUser, input);
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
    server.tool("core_deleteUser", operationDescriptionDeleteUser, inputSchemaDeleteUser, executeDeleteUser);
    server.tool("delete_user", aliasDescriptionDeleteUser, inputSchemaDeleteUser, executeDeleteUser);
    const opDeleteUserAttributeDefinition = requireOperation(operationMap, "deleteUserAttributeDefinition");
    const operationDescriptionDeleteUserAttributeDefinition = "[user] User Attribute Definition Delete. (DELETE /userAttributeDefinitions/{name}). Operation ID: deleteUserAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteUserAttributeDefinition = "[user] User Attribute Definition Delete. (DELETE /userAttributeDefinitions/{name}). Operation ID: deleteUserAttributeDefinition. Custom logic: default OAS execution. Use this alias for DELETE /userAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteUserAttributeDefinition = {
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteUserAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /userAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteUserAttributeDefinition, input);
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
    server.tool("core_deleteUserAttributeDefinition", operationDescriptionDeleteUserAttributeDefinition, inputSchemaDeleteUserAttributeDefinition, executeDeleteUserAttributeDefinition);
    server.tool("delete_user_attribute_definition", aliasDescriptionDeleteUserAttributeDefinition, inputSchemaDeleteUserAttributeDefinition, executeDeleteUserAttributeDefinition);
    const opDeleteUserInvitationToken = requireOperation(operationMap, "deleteUserInvitationToken");
    const operationDescriptionDeleteUserInvitationToken = "[user] User Invitation Token Delete. (DELETE /userInvitationTokens/{id}). Operation ID: deleteUserInvitationToken. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteUserInvitationToken = "[user] User Invitation Token Delete. (DELETE /userInvitationTokens/{id}). Operation ID: deleteUserInvitationToken. Custom logic: default OAS execution. Use this alias for DELETE /userInvitationTokens/{id}. Tags: Users. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteUserInvitationToken = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        id: z.string().describe("The id of the user invitation token"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteUserInvitationToken = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /userInvitationTokens/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteUserInvitationToken, input);
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
    server.tool("core_deleteUserInvitationToken", operationDescriptionDeleteUserInvitationToken, inputSchemaDeleteUserInvitationToken, executeDeleteUserInvitationToken);
    server.tool("delete_user_invitation_token", aliasDescriptionDeleteUserInvitationToken, inputSchemaDeleteUserInvitationToken, executeDeleteUserInvitationToken);
    const opDeleteUserPreference = requireOperation(operationMap, "deleteUserPreference");
    const operationDescriptionDeleteUserPreference = "[user] User Preference Delete. (DELETE /userPreferences/{key}). Operation ID: deleteUserPreference. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteUserPreference = "[user] User Preference Delete. (DELETE /userPreferences/{key}). Operation ID: deleteUserPreference. Custom logic: default OAS execution. Use this alias for DELETE /userPreferences/{key}. Tags: User Preferences. Required inputs: key (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteUserPreference = {
        key: z.string().describe("The key that identified the user preference"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteUserPreference = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /userPreferences/{key}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteUserPreference, input);
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
    server.tool("core_deleteUserPreference", operationDescriptionDeleteUserPreference, inputSchemaDeleteUserPreference, executeDeleteUserPreference);
    server.tool("delete_user_preference", aliasDescriptionDeleteUserPreference, inputSchemaDeleteUserPreference, executeDeleteUserPreference);
    const opDeleteUserProfileAttributeDefinition = requireOperation(operationMap, "deleteUserProfileAttributeDefinition");
    const operationDescriptionDeleteUserProfileAttributeDefinition = "[user] User Profile Attribute Definition Delete. (DELETE /userProfileAttributeDefinitions/{name}). Operation ID: deleteUserProfileAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionDeleteUserProfileAttributeDefinition = "[user] User Profile Attribute Definition Delete. (DELETE /userProfileAttributeDefinitions/{name}). Operation ID: deleteUserProfileAttributeDefinition. Custom logic: default OAS execution. Use this alias for DELETE /userProfileAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaDeleteUserProfileAttributeDefinition = {
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeDeleteUserProfileAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for DELETE /userProfileAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opDeleteUserProfileAttributeDefinition, input);
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
    server.tool("core_deleteUserProfileAttributeDefinition", operationDescriptionDeleteUserProfileAttributeDefinition, inputSchemaDeleteUserProfileAttributeDefinition, executeDeleteUserProfileAttributeDefinition);
    server.tool("delete_user_profile_attribute_definition", aliasDescriptionDeleteUserProfileAttributeDefinition, inputSchemaDeleteUserProfileAttributeDefinition, executeDeleteUserProfileAttributeDefinition);
    const opListUserAttributeDefinitions = requireOperation(operationMap, "listUserAttributeDefinitions");
    const operationDescriptionListUserAttributeDefinitions = "[user] User Attribute Definition List. (GET /userAttributeDefinitions). Operation ID: listUserAttributeDefinitions. Custom logic: default OAS execution.";
    const aliasDescriptionListUserAttributeDefinitions = "[user] User Attribute Definition List. (GET /userAttributeDefinitions). Operation ID: listUserAttributeDefinitions. Custom logic: default OAS execution. Use this alias for GET /userAttributeDefinitions. Tags: Attribute Definitions. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListUserAttributeDefinitions = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListUserAttributeDefinitions = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /userAttributeDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListUserAttributeDefinitions, input);
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
    server.tool("core_listUserAttributeDefinitions", operationDescriptionListUserAttributeDefinitions, inputSchemaListUserAttributeDefinitions, executeListUserAttributeDefinitions);
    server.tool("list_user_attribute_definitions", aliasDescriptionListUserAttributeDefinitions, inputSchemaListUserAttributeDefinitions, executeListUserAttributeDefinitions);
    const opListUserInvitationTokens = requireOperation(operationMap, "listUserInvitationTokens");
    const operationDescriptionListUserInvitationTokens = "[user] User Invitation Token List. (GET /userInvitationTokens). Operation ID: listUserInvitationTokens. Custom logic: default OAS execution.";
    const aliasDescriptionListUserInvitationTokens = "[user] User Invitation Token List. (GET /userInvitationTokens). Operation ID: listUserInvitationTokens. Custom logic: default OAS execution. Use this alias for GET /userInvitationTokens. Tags: Users. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListUserInvitationTokens = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        limit: z.string().optional().describe("The token to get the next page of results.\n\nThis value is set using the nextPageToken value returned by a search with the same query to get the next page or results."),
        pageToken: z.string().optional().describe("The token to get the next page of results.\n\nThis value is set using the nextPageToken value returned by a search with the same query to get the next page or results."),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListUserInvitationTokens = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /userInvitationTokens
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListUserInvitationTokens, input);
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
    server.tool("core_listUserInvitationTokens", operationDescriptionListUserInvitationTokens, inputSchemaListUserInvitationTokens, executeListUserInvitationTokens);
    server.tool("list_user_invitation_tokens", aliasDescriptionListUserInvitationTokens, inputSchemaListUserInvitationTokens, executeListUserInvitationTokens);
    const opListUserProfileAttributeDefinitions = requireOperation(operationMap, "listUserProfileAttributeDefinitions");
    const operationDescriptionListUserProfileAttributeDefinitions = "[user] User Profile Attribute Definition List. (GET /userProfileAttributeDefinitions). Operation ID: listUserProfileAttributeDefinitions. Custom logic: default OAS execution.";
    const aliasDescriptionListUserProfileAttributeDefinitions = "[user] User Profile Attribute Definition List. (GET /userProfileAttributeDefinitions). Operation ID: listUserProfileAttributeDefinitions. Custom logic: default OAS execution. Use this alias for GET /userProfileAttributeDefinitions. Tags: Attribute Definitions. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListUserProfileAttributeDefinitions = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListUserProfileAttributeDefinitions = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /userProfileAttributeDefinitions
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListUserProfileAttributeDefinitions, input);
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
    server.tool("core_listUserProfileAttributeDefinitions", operationDescriptionListUserProfileAttributeDefinitions, inputSchemaListUserProfileAttributeDefinitions, executeListUserProfileAttributeDefinitions);
    server.tool("list_user_profile_attribute_definitions", aliasDescriptionListUserProfileAttributeDefinitions, inputSchemaListUserProfileAttributeDefinitions, executeListUserProfileAttributeDefinitions);
    const opListUsers = requireOperation(operationMap, "listUsers");
    const operationDescriptionListUsers = "[user] User List. (GET /users). Operation ID: listUsers. Custom logic: default OAS execution.";
    const aliasDescriptionListUsers = "[user] User List. (GET /users). Operation ID: listUsers. Custom logic: default OAS execution. Use this alias for GET /users. Tags: Users. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaListUsers = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* memberships\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* profileAttributes[ATTRIBUTE NAME]\n\n* profileAttributesMap[ATTRIBUTE NAME]\n\n* space.{any Space include property}"),
        count: z.boolean().optional().describe("If the count query parameter is specified, the server will respond with a count and no results for improved network performance of getting 'counts'."),
        limit: z.number().int().optional().describe("Limit the number of results returned.\n\nIf not provided, the server will return the default, maximum limit of `1000` results.\n\n**DEPRECATION NOTICE:** Pagination functionality was introduced in version 2.4. In order to provide backwards compatibility with previous versions, if you provide the limit parameter, results will be paginated. If you don&#x2019;t provide the limit parameter, the full result will be returned. The ability to return the full result set will be deprecated in a later version in favor of a paginated set of results."),
        orderBy: z.enum(["username", "email", "displayName", "updatedAt", "createdAt"]).optional().describe("The user property to order (sort) results by.\n\nThe orderBy value can be one of the available properties, and that property must also be part of the search qualification. If no `orderBy` parameter is passed, the query will be ordered by the first usage of `username`, `email`, `displayName`, `updatedAt` or `createdAt` included in the search qualification. If none of these are used in the search qualification, the results will be ordered by `username`."),
        direction: z.enum(["ASC", "DESC"]).optional().describe("The direction the results should be ordered."),
        pageToken: z.string().optional().describe("The token to get the next page of results.\n\nThis value is set using the nextPageToken value returned by a search with the same query to get the next page or results."),
        q: z.string().optional().describe("Search qualification parameter used to find users within the system.\n\n### Common Example Queries\n\n* `q=enabled = \"true\"`\n\n    Returns all enabled users in the system.\n\n* `q=enabled = \"true\" AND spaceAdmin = \"true\"`\n\n    Returns all enabled users that are also space admins\n\n* `q=enabled = \"true\" AND spaceAdmin = \"true\" AND (username =* \"joh\" OR email =* \"joh\" OR displayName =* \"joh\")`\n\n    Returns all enabled users that are also space admins who have a username, email, or displayName that start with &#x201c;joh&#x201d;\n\n\n### Operators\n\n* `BETWEEN`\n\n    left side is between two values - first value is inclusive, second value is exclusive\n\n* `IN`\n\n    left side is equal to one of provided items\n\n* `=`\n\n    equal\n\n* `=*`\n\n    starts with\n\n* `>`\n\n    greater than\n\n* `>=`\n\n    greater than or equal\n\n* `<`\n\n    less than\n\n* `<=`\n\n    less than or equal\n\n* `AND`\n\n    Returns boolean true if and only if both expressions are true\n\n* `OR`\n\n    Returns boolean true if at least one expression is true\n\n\n### Queryable Properties\n\n#### The following properties can be used within a search with the `=`, `IN`, `=*` (starts with), `<`, `<=`, `>`, `>=`, and `BETWEEN` operators, however some limitations apply to ensure consistent performance (See Complex Query Limitations below).\n\n* `createdAt`                         (The ISO 8601 time that when the user was created)\n\n    *Example:*\n\n    * `q=createdAt BETWEEN (\"2018-04-16T18:42:56.000Z\",\"2019-04-16T18:42:56.000Z\")`\n\n* `displayName`                       (Display Name of the user)\n\n    *Example:*\n\n    * `q=displayName=\"John\"`\n\n* `email`                             (Email Address of the user)\n\n    *Example:*\n\n    * `q=email=\"john@example.com\"`\n\n* `updatedAt`                         (The ISO 8601 time that when the user was last updated)\n\n    *Example:*\n\n    * `q=updatedAt >= \"2018-04-16T18:42:56.000Z\"`\n\n* `username`                          (Username of the user)\n\n    *Example:*\n\n    * `q=username IN (\"john.doe\",\"mary.manager\")`\n\n\n#### The following properties can _only_ be used within a search with the `=` and `IN` operators, however some limitations apply to ensure consistent performance (See Complex Query Limitations below).\n\n* `enabled`                           (If the user is enabled (`true` or `false`))\n\n    *Example:*\n\n    * `q=enabled=\"true\"`\n\n* `spaceAdmin`                        (If the user is a Space Admin (`true` or `false`))\n\n    *Example:*\n\n    * `q=spaceAdmin=\"false\"`\n\n* `attributes[Attribute Name]`        (Attribute Value of a user)\n\n    *Example:*\n\n    * `q=attributes[Manager]=\"mary_manager@example.com\"`\n\n* `profileAttributes[Attribute Name]` (Profile Attribute Value of a user)\n\n    *Example:*\n\n    * `q=profileAttributes[Phone Number]=\"888-446-9292\"`\n\n\n### Complex Query Limitations\n\nProperties can be combined to create subexpressions within a query qualification, however some limits are enforced to ensure a stable and performant system.\n\n* The `enabled` and `spaceAdmin` properties can only be combined with other subexpressions using the `AND` operator.\n\n    Examples of **valid** queries using the `spaceAdmin` and `enabled` properties\n\n    * `q=enabled=\"true\" AND spaceAdmin = \"false\" AND ...`\n\n    Examples of **invalid** queries using the `spaceAdmin` and `enabled` properties\n\n    * `q=enabled=\"true\" OR spaceAdmin = \"false\" OR ...`\n\n* Only one `attributes[]` or `profileAttributes[]` property can be used within a search qualification\n\n    Examples of **valid** queries using Attributes and Profile Attributes\n\n    * `q=displayName=\"John\" AND attributes[FOO] = \"Bar\"`\n\n    * `q=displayName=\"John\" AND profileAttribute[FOO] = \"Bar\"`\n\n    Examples of **invalid** queries using Attributes and Profile Attributes\n\n    * `q=displayName=\"John\" AND attributes[FOO] = \"Bar\" AND attribute[BAZ] = \"Bang\"`\n\n    * `q=displayName=\"John\" AND profileAttributes[FOO] = \"Bar\" AND profileAttributes[BAZ] = \"Bang\"`\n\n    * `q=displayName=\"John\" AND attributes[FOO] = \"Bar\" AND profileAttributes[BAZ] = \"Bang\"`\n\n* When combining the `createdAt`, `displayName`, `email`, `updatedAt` or `username` properties with the `OR` operator, the subexpressions must be surrounded with parentheses `()`. If the subexpressions can not be completed efficiently, an error message will be returned that includes information on how to structure a more efficient query.\n\n    Examples of **valid** queries using the `=*` (starts with), `<`, `<=`, `>`, `>=`, and `BETWEEN` operators\n\n    * `q=enabled=\"true\" AND (username =* \"John\" OR email =*john)`\n\n    * `q=profileAttributes[Manager]=\"mary.manager\" AND (username =* \"John\" OR email =*john)`\n\n    Examples of **invalid** queries using the `=*` (starts with), `<`, `<=`, `>`, `>=`, and `BETWEEN` operators\n\n    * `q=profileAttributes[Manager]=\"mary.manager\" AND username =* \"John\" OR email =*john`\n\n\n### Pagination\n\nThe system will paginate search results based on the `limit` parameter.  If there are more results than the `limit` parameter (or more than 1000 results if the limit parameter is not provided), a `nextPageToken` will be included in the response.  The `nextPageToken` value can be passed as the `pageToken` parameter in subsequent queries to obtain the next page of results.\n\n**DEPRECATION NOTICE:** Pagination functionality was introduced in version 2.4. In order to provide backwards compatibility with previous versions, if you provide the limit parameter, results will be paginated. If you don&#x2019;t provide the limit parameter, the full result will be returned. The ability to return the full result set will be deprecated in a later version in favor of a paginated set of results.\n\n\nExample Response with a next page token\n\n```javascript\n{\n  \"users\": [{...}, {...}],\n  \"nextPageToken\": \"YWJib3R0LmRldmFuQHRoaWVsLm9yZw.4wg2me95blthjyzdvkfs56oc3\"\n}\n```"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeListUsers = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /users
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opListUsers, input);
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
    server.tool("core_listUsers", operationDescriptionListUsers, inputSchemaListUsers, executeListUsers);
    server.tool("list_users", aliasDescriptionListUsers, inputSchemaListUsers, executeListUsers);
    const opPasswordResetToken = requireOperation(operationMap, "passwordResetToken");
    const operationDescriptionPasswordResetToken = "[user] Password Reset Token Create. (POST /users/{username}/passwordResetToken). Operation ID: passwordResetToken. Custom logic: default OAS execution.";
    const aliasDescriptionPasswordResetToken = "[user] Password Reset Token Create. (POST /users/{username}/passwordResetToken). Operation ID: passwordResetToken. Custom logic: default OAS execution. Use this alias for POST /users/{username}/passwordResetToken. Tags: Users. Required inputs: username (path). Request body: optional. Call `connect` first if a session is not already configured.";
    const inputSchemaPasswordResetToken = {
        username: z.string().describe("The username of the user"),
        body: z.any().describe("The content for the user properties to update\n\n**Only** the properties supplied will be updated.").optional(),
    };
    const executePasswordResetToken = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /users/{username}/passwordResetToken
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opPasswordResetToken, input);
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
    server.tool("core_passwordResetToken", operationDescriptionPasswordResetToken, inputSchemaPasswordResetToken, executePasswordResetToken);
    server.tool("password_reset_token", aliasDescriptionPasswordResetToken, inputSchemaPasswordResetToken, executePasswordResetToken);
    const opResetUserPreferences = requireOperation(operationMap, "resetUserPreferences");
    const operationDescriptionResetUserPreferences = "[user] User Preferences Reset. (POST /userPreferences/reset). Operation ID: resetUserPreferences. Custom logic: default OAS execution.";
    const aliasDescriptionResetUserPreferences = "[user] User Preferences Reset. (POST /userPreferences/reset). Operation ID: resetUserPreferences. Custom logic: default OAS execution. Use this alias for POST /userPreferences/reset. Tags: User Preferences. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaResetUserPreferences = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeResetUserPreferences = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /userPreferences/reset
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opResetUserPreferences, input);
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
    server.tool("core_resetUserPreferences", operationDescriptionResetUserPreferences, inputSchemaResetUserPreferences, executeResetUserPreferences);
    server.tool("reset_user_preferences", aliasDescriptionResetUserPreferences, inputSchemaResetUserPreferences, executeResetUserPreferences);
    const opRetrieveMe = requireOperation(operationMap, "retrieveMe");
    const operationDescriptionRetrieveMe = "[user] Me Retrieve. (GET /me). Operation ID: retrieveMe. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveMe = "[user] Me Retrieve. (GET /me). Operation ID: retrieveMe. Custom logic: default OAS execution. Use this alias for GET /me. Tags: Me. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveMe = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\nAny of the following properties are valid\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE_NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE_NAME]\n\n* memberships\n\n* profileAttributes\n\n* profileAttributes[ATTRIBUTE_NAME]\n\n* profileAttributesMap\n\n* profileAttributesMap[ATTRIBUTE_NAME]\n\n* space\n\n* space.{any space include property}"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveMe = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /me
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveMe, input);
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
    server.tool("core_retrieveMe", operationDescriptionRetrieveMe, inputSchemaRetrieveMe, executeRetrieveMe);
    server.tool("retrieve_me", aliasDescriptionRetrieveMe, inputSchemaRetrieveMe, executeRetrieveMe);
    const opRetrieveUser = requireOperation(operationMap, "retrieveUser");
    const operationDescriptionRetrieveUser = "[user] User Retrieve. (GET /users/{username}). Operation ID: retrieveUser. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveUser = "[user] User Retrieve. (GET /users/{username}). Operation ID: retrieveUser. Custom logic: default OAS execution. Use this alias for GET /users/{username}. Tags: Users. Required inputs: username (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveUser = {
        username: z.string().describe("The username of the user"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* memberships\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* profileAttributes[ATTRIBUTE NAME]\n\n* profileAttributesMap[ATTRIBUTE NAME]\n\n* space.{any Space include property}"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveUser = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /users/{username}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveUser, input);
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
    server.tool("core_retrieveUser", operationDescriptionRetrieveUser, inputSchemaRetrieveUser, executeRetrieveUser);
    server.tool("retrieve_user", aliasDescriptionRetrieveUser, inputSchemaRetrieveUser, executeRetrieveUser);
    const opRetrieveUserAttributeDefinition = requireOperation(operationMap, "retrieveUserAttributeDefinition");
    const operationDescriptionRetrieveUserAttributeDefinition = "[user] User Attribute Definition Retrieve. (GET /userAttributeDefinitions/{name}). Operation ID: retrieveUserAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveUserAttributeDefinition = "[user] User Attribute Definition Retrieve. (GET /userAttributeDefinitions/{name}). Operation ID: retrieveUserAttributeDefinition. Custom logic: default OAS execution. Use this alias for GET /userAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveUserAttributeDefinition = {
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveUserAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /userAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveUserAttributeDefinition, input);
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
    server.tool("core_retrieveUserAttributeDefinition", operationDescriptionRetrieveUserAttributeDefinition, inputSchemaRetrieveUserAttributeDefinition, executeRetrieveUserAttributeDefinition);
    server.tool("retrieve_user_attribute_definition", aliasDescriptionRetrieveUserAttributeDefinition, inputSchemaRetrieveUserAttributeDefinition, executeRetrieveUserAttributeDefinition);
    const opRetrieveUserInvitationToken = requireOperation(operationMap, "retrieveUserInvitationToken");
    const operationDescriptionRetrieveUserInvitationToken = "[user] User Invitation Token Retrieve. (GET /userInvitationTokens/{id}). Operation ID: retrieveUserInvitationToken. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveUserInvitationToken = "[user] User Invitation Token Retrieve. (GET /userInvitationTokens/{id}). Operation ID: retrieveUserInvitationToken. Custom logic: default OAS execution. Use this alias for GET /userInvitationTokens/{id}. Tags: Users. Required inputs: id (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveUserInvitationToken = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        id: z.string().describe("The id of the user invitation token"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveUserInvitationToken = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /userInvitationTokens/{id}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveUserInvitationToken, input);
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
    server.tool("core_retrieveUserInvitationToken", operationDescriptionRetrieveUserInvitationToken, inputSchemaRetrieveUserInvitationToken, executeRetrieveUserInvitationToken);
    server.tool("retrieve_user_invitation_token", aliasDescriptionRetrieveUserInvitationToken, inputSchemaRetrieveUserInvitationToken, executeRetrieveUserInvitationToken);
    const opRetrieveUserPreference = requireOperation(operationMap, "retrieveUserPreference");
    const operationDescriptionRetrieveUserPreference = "[user] User Preference Retrieve. (GET /userPreferences/{key}). Operation ID: retrieveUserPreference. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveUserPreference = "[user] User Preference Retrieve. (GET /userPreferences/{key}). Operation ID: retrieveUserPreference. Custom logic: default OAS execution. Use this alias for GET /userPreferences/{key}. Tags: User Preferences. Required inputs: key (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveUserPreference = {
        key: z.string().describe("The key that identified the user preference"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveUserPreference = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /userPreferences/{key}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveUserPreference, input);
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
    server.tool("core_retrieveUserPreference", operationDescriptionRetrieveUserPreference, inputSchemaRetrieveUserPreference, executeRetrieveUserPreference);
    server.tool("retrieve_user_preference", aliasDescriptionRetrieveUserPreference, inputSchemaRetrieveUserPreference, executeRetrieveUserPreference);
    const opRetrieveUserPreferences = requireOperation(operationMap, "retrieveUserPreferences");
    const operationDescriptionRetrieveUserPreferences = "[user] Retrieve All. (GET /userPreferences). Operation ID: retrieveUserPreferences. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveUserPreferences = "[user] Retrieve All. (GET /userPreferences). Operation ID: retrieveUserPreferences. Custom logic: default OAS execution. Use this alias for GET /userPreferences. Tags: User Preferences. Required inputs: none. Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveUserPreferences = {
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveUserPreferences = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /userPreferences
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveUserPreferences, input);
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
    server.tool("core_retrieveUserPreferences", operationDescriptionRetrieveUserPreferences, inputSchemaRetrieveUserPreferences, executeRetrieveUserPreferences);
    server.tool("retrieve_user_preferences", aliasDescriptionRetrieveUserPreferences, inputSchemaRetrieveUserPreferences, executeRetrieveUserPreferences);
    const opRetrieveUserProfileAttributeDefinition = requireOperation(operationMap, "retrieveUserProfileAttributeDefinition");
    const operationDescriptionRetrieveUserProfileAttributeDefinition = "[user] User Profile Attribute Definition Retrieve. (GET /userProfileAttributeDefinitions/{name}). Operation ID: retrieveUserProfileAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionRetrieveUserProfileAttributeDefinition = "[user] User Profile Attribute Definition Retrieve. (GET /userProfileAttributeDefinitions/{name}). Operation ID: retrieveUserProfileAttributeDefinition. Custom logic: default OAS execution. Use this alias for GET /userProfileAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: not used. Call `connect` first if a session is not already configured.";
    const inputSchemaRetrieveUserProfileAttributeDefinition = {
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("Request body payload").optional(),
    };
    const executeRetrieveUserProfileAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for GET /userProfileAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opRetrieveUserProfileAttributeDefinition, input);
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
    server.tool("core_retrieveUserProfileAttributeDefinition", operationDescriptionRetrieveUserProfileAttributeDefinition, inputSchemaRetrieveUserProfileAttributeDefinition, executeRetrieveUserProfileAttributeDefinition);
    server.tool("retrieve_user_profile_attribute_definition", aliasDescriptionRetrieveUserProfileAttributeDefinition, inputSchemaRetrieveUserProfileAttributeDefinition, executeRetrieveUserProfileAttributeDefinition);
    const opUpdateMe = requireOperation(operationMap, "updateMe");
    const operationDescriptionUpdateMe = "[user] Me Update. (PUT /me). Operation ID: updateMe. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateMe = "[user] Me Update. (PUT /me). Operation ID: updateMe. Custom logic: default OAS execution. Use this alias for PUT /me. Tags: Me. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateMe = {
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\nAny of the following properties are valid\n\n* details\n\n* attributes\n\n* attributes[ATTRIBUTE_NAME]\n\n* attributesMap\n\n* attributesMap[ATTRIBUTE_NAME]\n\n* memberships\n\n* profileAttributes\n\n* profileAttributes[ATTRIBUTE_NAME]\n\n* profileAttributesMap\n\n* profileAttributesMap[ATTRIBUTE_NAME]\n\n* space\n\n* space.{any space include property}"),
        body: z.any().describe("All properties in the request body are optional.\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateMe = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /me
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateMe, input);
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
    server.tool("core_updateMe", operationDescriptionUpdateMe, inputSchemaUpdateMe, executeUpdateMe);
    server.tool("update_me", aliasDescriptionUpdateMe, inputSchemaUpdateMe, executeUpdateMe);
    const opUpdateUser = requireOperation(operationMap, "updateUser");
    const operationDescriptionUpdateUser = "[user] User Update. (PUT /users/{username}). Operation ID: updateUser. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateUser = "[user] User Update. (PUT /users/{username}). Operation ID: updateUser. Custom logic: default OAS execution. Use this alias for PUT /users/{username}. Tags: Users. Required inputs: username (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateUser = {
        username: z.string().describe("The username of the user"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details\n\n* memberships\n\n* attributes[ATTRIBUTE NAME]\n\n* attributesMap[ATTRIBUTE NAME]\n\n* profileAttributes[ATTRIBUTE NAME]\n\n* profileAttributesMap[ATTRIBUTE NAME]\n\n* space.{any Space include property}"),
        body: z.any().describe("The content for the user properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateUser = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /users/{username}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateUser, input);
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
    server.tool("core_updateUser", operationDescriptionUpdateUser, inputSchemaUpdateUser, executeUpdateUser);
    server.tool("update_user", aliasDescriptionUpdateUser, inputSchemaUpdateUser, executeUpdateUser);
    const opUpdateUserAttributeDefinition = requireOperation(operationMap, "updateUserAttributeDefinition");
    const operationDescriptionUpdateUserAttributeDefinition = "[user] User Attribute Definition Update. (PUT /userAttributeDefinitions/{name}). Operation ID: updateUserAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateUserAttributeDefinition = "[user] User Attribute Definition Update. (PUT /userAttributeDefinitions/{name}). Operation ID: updateUserAttributeDefinition. Custom logic: default OAS execution. Use this alias for PUT /userAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateUserAttributeDefinition = {
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the attribute definition properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateUserAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /userAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateUserAttributeDefinition, input);
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
    server.tool("core_updateUserAttributeDefinition", operationDescriptionUpdateUserAttributeDefinition, inputSchemaUpdateUserAttributeDefinition, executeUpdateUserAttributeDefinition);
    server.tool("update_user_attribute_definition", aliasDescriptionUpdateUserAttributeDefinition, inputSchemaUpdateUserAttributeDefinition, executeUpdateUserAttributeDefinition);
    const opUpdateUserProfileAttributeDefinition = requireOperation(operationMap, "updateUserProfileAttributeDefinition");
    const operationDescriptionUpdateUserProfileAttributeDefinition = "[user] User Profile Attribute Definition Update. (PUT /userProfileAttributeDefinitions/{name}). Operation ID: updateUserProfileAttributeDefinition. Custom logic: default OAS execution.";
    const aliasDescriptionUpdateUserProfileAttributeDefinition = "[user] User Profile Attribute Definition Update. (PUT /userProfileAttributeDefinitions/{name}). Operation ID: updateUserProfileAttributeDefinition. Custom logic: default OAS execution. Use this alias for PUT /userProfileAttributeDefinitions/{name}. Tags: Attribute Definitions. Required inputs: name (path). Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpdateUserProfileAttributeDefinition = {
        name: z.string().describe("The name of the attribute definition"),
        include: z.string().optional().describe("comma-separated list of properties to include in the response\n\n* details"),
        body: z.any().describe("The content for the attribute definition properties to update\n\n**Only** the properties supplied will be updated."),
    };
    const executeUpdateUserProfileAttributeDefinition = async (input, extra) => {
        try {
            // TODO: add custom logic for PUT /userProfileAttributeDefinitions/{name}
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpdateUserProfileAttributeDefinition, input);
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
    server.tool("core_updateUserProfileAttributeDefinition", operationDescriptionUpdateUserProfileAttributeDefinition, inputSchemaUpdateUserProfileAttributeDefinition, executeUpdateUserProfileAttributeDefinition);
    server.tool("update_user_profile_attribute_definition", aliasDescriptionUpdateUserProfileAttributeDefinition, inputSchemaUpdateUserProfileAttributeDefinition, executeUpdateUserProfileAttributeDefinition);
    const opUpsertUserPreference = requireOperation(operationMap, "upsertUserPreference");
    const operationDescriptionUpsertUserPreference = "[user] User Preference Upsert. (POST /userPreferences). Operation ID: upsertUserPreference. Custom logic: default OAS execution.";
    const aliasDescriptionUpsertUserPreference = "[user] User Preference Upsert. (POST /userPreferences). Operation ID: upsertUserPreference. Custom logic: default OAS execution. Use this alias for POST /userPreferences. Tags: User Preferences. Required inputs: none. Request body: required. Call `connect` first if a session is not already configured.";
    const inputSchemaUpsertUserPreference = {
        body: z.any().describe("The content for the user preference properties"),
    };
    const executeUpsertUserPreference = async (input, extra) => {
        try {
            // TODO: add custom logic for POST /userPreferences
            const sessionId = extra?.sessionId ?? "stdio";
            const result = await invokeDefaultOperation(sessionId, opUpsertUserPreference, input);
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
    server.tool("core_upsertUserPreference", operationDescriptionUpsertUserPreference, inputSchemaUpsertUserPreference, executeUpsertUserPreference);
    server.tool("upsert_user_preference", aliasDescriptionUpsertUserPreference, inputSchemaUpsertUserPreference, executeUpsertUserPreference);
}
