export const overrides = {
    "applicationVersion": {
        // GET /version
        additionalContext: "Returns the Core API application version metadata.",
        handler: async ({ invokeDefault }) => {
            return invokeDefault();
        },
    },
    "checkLicense": {
    // GET /license-check
    },
    "clearTranslationsCache": {
    // DELETE /translations/cache
    },
    "createSecurityPolicyDefinition": {
    // POST /securityPolicyDefinitions
    },
    "createSpaceAttributeDefinition": {
    // POST /spaceAttributeDefinitions
    },
    "createSpaceWebAPI": {
    // POST /webApis
    },
    "createSpaceWebhook": {
    // POST /webhooks
    },
    "createSpaceWebhookJob": {
    // POST /webhookJobs
    },
    "createSpaceWorkflow": {
    // POST /workflows
    },
    "createTranslationContext": {
    // POST /translations/contexts
    },
    "deleteSecurityPolicyDefinition": {
    // DELETE /securityPolicyDefinitions/{name}
    },
    "deleteSpaceActivityCache": {
    // DELETE /activity
    },
    "deleteSpaceAttributeDefinition": {
    // DELETE /spaceAttributeDefinitions/{name}
    },
    "deleteSpaceWebAPI": {
    // DELETE /webApis/{webApiSlug}
    },
    "deleteSpaceWebhook": {
    // DELETE /webhooks/{name}
    },
    "deleteSpaceWebhookJob": {
    // DELETE /webhookJobs/{id}
    },
    "deleteSpaceWorkflow": {
    // DELETE /workflows/{id}
    },
    "deleteTranslationContext": {
    // DELETE /translations/contexts/{context}
    },
    "deleteTranslationEntries": {
    // DELETE /translations/entries
    },
    "disableTranslationLocale": {
    // DELETE /translations/settings/locales/{locale}
    },
    "enableTranslationLocale": {
    // POST /translations/settings/locales
    },
    "executeKappIntegration": {
    // POST /integrations/kapps/{kappSlug}/{name}
    },
    "exportSpaceWebAPI": {
    // GET /webApis/{webApiSlug}/export
    },
    "fetchSpaceActivityMetrics": {
    // GET /activity
    },
    "fetchSpaceWebAPI": {
    // GET /webApis/{webApiSlug}
    },
    "importSpaceWebAPI": {
    // POST /webApiImport
    },
    "importTranslationEntries": {
    // POST /translations/entries
    },
    "kappWebhookEvents": {
    // GET /meta/webhooks/events/kapp
    },
    "kappWebhookEventsByType": {
    // GET /meta/webhooks/events/kapp/{type}
    },
    "kappWebhookTypes": {
    // GET /meta/webhooks/types/kapp
    },
    "listBackgroundJobs": {
    // GET /backgroundJobs
    },
    "listLocales": {
    // GET /meta/locales
    },
    "listNotices": {
    // GET /notices
    },
    "listSecurityPolicyDefinitions": {
    // GET /securityPolicyDefinitions
    },
    "listSpaceAttributeDefinitions": {
    // GET /spaceAttributeDefinitions
    },
    "listSpaceWebAPIs": {
    // GET /webApis
    },
    "listSpaceWebhookJobs": {
    // GET /webhookJobs
    },
    "listSpaceWebhooks": {
    // GET /webhooks
    },
    "listTimezones": {
    // GET /meta/timezones
    },
    "renameTranslationContext": {
    // PUT /translations/contexts/{context}
    },
    "renameTranslationContextKey": {
    // PUT /translations/contexts/{context}/keys/{keyHash}
    },
    "repairSpaceWorkflow": {
    // POST /workflows/repair
    },
    "retrieveSecurityPolicyDefinition": {
    // GET /securityPolicyDefinitions/{name}
    },
    "retrieveSpace": {
    // GET /space
    },
    "retrieveSpaceAttributeDefinition": {
    // GET /spaceAttributeDefinitions/{name}
    },
    "retrieveSpaceWebhook": {
    // GET /webhooks/{name}
    },
    "retrieveSpaceWebhookJob": {
    // GET /webhookJobs/{id}
    },
    "retrieveSpaceWorkflow": {
    // GET /workflows/{id}
    },
    "retrieveSpaceWorkflows": {
    // GET /workflows
    },
    "retrieveTranslationChanges": {
    // GET /translations/staged
    },
    "retrieveTranslationContextKeys": {
    // GET /translations/contexts/{context}/keys
    },
    "retrieveTranslationContexts": {
    // GET /translations/contexts
    },
    "retrieveTranslationDefaultLocale": {
    // GET /translations/settings/defaultLocale
    },
    "retrieveTranslationEntries": {
    // GET /translations/entries
    },
    "retrieveTranslationLocales": {
    // GET /translations/settings/locales
    },
    "spaceWebhookEvents": {
    // GET /meta/webhooks/events/space
    },
    "spaceWebhookEventsByType": {
    // GET /meta/webhooks/events/space/{type}
    },
    "spaceWebhookTypes": {
    // GET /meta/webhooks/types/space
    },
    "updateSecurityPolicyDefinition": {
    // PUT /securityPolicyDefinitions/{name}
    },
    "updateSpace": {
    // PUT /space
    },
    "updateSpaceAttributeDefinition": {
    // PUT /spaceAttributeDefinitions/{name}
    },
    "updateSpaceWebAPI": {
    // PUT /webApis/{webApiSlug}
    },
    "updateSpaceWebhook": {
    // PUT /webhooks/{name}
    },
    "updateSpaceWebhookJob": {
    // PUT /webhookJobs/{id}
    },
    "updateSpaceWorkflow": {
    // PUT /workflows/{id}
    },
    "updateTranslationDefaultLocale": {
    // PUT /translations/settings/defaultLocale
    },
};
