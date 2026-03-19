/**
 * Custom tools for Kinetic Platform background job endpoints.
 *
 * These endpoints are NOT in the OAS spec but work at runtime. They are used
 * to trigger index builds for both form-level and kapp-level index definitions.
 *
 * Form-level:  POST /kapps/{kappSlug}/forms/{formSlug}/backgroundJobs
 * Kapp-level:  POST /kapps/{kappSlug}/backgroundJobs
 *
 * Both accept the same body shape:
 *   { "type": "Build Index", "content": { "indexes": ["values[Status]", ...] } }
 *
 * After triggering, poll the form or kapp's indexDefinitions until all statuses
 * change from "New" to "Built".
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { KineticApiClient } from "../client/kinetic-client.js";

export type BackgroundJobsRuntime = {
  getClient: (sessionId: string) => KineticApiClient | Promise<KineticApiClient>;
};

const backgroundJobBodySchema = z.object({
  type: z.string().describe('Job type. Use "Build Index" to build index definitions.'),
  content: z
    .object({
      indexes: z
        .array(z.string())
        .describe('Array of index names to build, e.g. ["values[Status]", "type,values[Event ID]"]'),
    })
    .describe("Job content"),
});

export function registerBackgroundJobTools(server: McpServer, runtime: BackgroundJobsRuntime): void {
  const { getClient } = runtime;

  // ── Kapp-level background jobs ─────────────────────────────────────────────

  const kappDescription =
    "[kapp] Kapp Background Job Create. (POST /kapps/{kappSlug}/backgroundJobs). " +
    "Triggers an index build for kapp-level index definitions. " +
    "This endpoint is not in the OAS spec but works at runtime. " +
    'Use type "Build Index" with content.indexes listing the index names to build ' +
    '(e.g. ["type,values[Event ID]"]). ' +
    "After triggering, poll GET /kapps/{kappSlug}?include=indexDefinitions until all statuses are Built.";

  const kappInputSchema = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    body: backgroundJobBodySchema.describe("Background job payload"),
  };

  const executeKappBackgroundJob = async (
    input: { kappSlug: string; body: z.infer<typeof backgroundJobBodySchema> },
    extra: { sessionId?: string } | undefined,
  ) => {
    try {
      const sessionId = extra?.sessionId ?? "stdio";
      const client = await getClient(sessionId);
      const result = await client.request("POST", `/kapps/${encodeURIComponent(input.kappSlug)}/backgroundJobs`, {
        body: input.body,
      });
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

  server.tool("core_createKappBackgroundJob", kappDescription, kappInputSchema, executeKappBackgroundJob);
  server.tool("create_kapp_background_job", kappDescription, kappInputSchema, executeKappBackgroundJob);

  // ── Form-level background jobs ─────────────────────────────────────────────

  const formDescription =
    "[form] Form Background Job Create. (POST /kapps/{kappSlug}/forms/{formSlug}/backgroundJobs). " +
    "Triggers an index build for form-level index definitions. " +
    "This endpoint is not in the OAS spec but works at runtime. " +
    'Use type "Build Index" with content.indexes listing the index names to build ' +
    '(e.g. ["values[Status]", "values[Status],values[Category]"]). ' +
    "After triggering, poll GET /kapps/{kappSlug}/forms/{formSlug}?include=indexDefinitions until all statuses are Built.";

  const formInputSchema = {
    kappSlug: z.string().describe("The slug of the Kapp"),
    formSlug: z.string().describe("The slug of the Form"),
    body: backgroundJobBodySchema.describe("Background job payload"),
  };

  const executeFormBackgroundJob = async (
    input: { kappSlug: string; formSlug: string; body: z.infer<typeof backgroundJobBodySchema> },
    extra: { sessionId?: string } | undefined,
  ) => {
    try {
      const sessionId = extra?.sessionId ?? "stdio";
      const client = await getClient(sessionId);
      const result = await client.request(
        "POST",
        `/kapps/${encodeURIComponent(input.kappSlug)}/forms/${encodeURIComponent(input.formSlug)}/backgroundJobs`,
        { body: input.body },
      );
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

  server.tool("core_createFormBackgroundJob", formDescription, formInputSchema, executeFormBackgroundJob);
  server.tool("create_form_background_job", formDescription, formInputSchema, executeFormBackgroundJob);
}
