export const CONTEXT_RULES = [
    { context: "submission", pathPrefix: "/submissions", priority: 10 },
    { context: "submission", pathRegex: "^/kapps/.*/submissions", priority: 11 },
    { context: "form", pathRegex: "/forms", priority: 20 },
    { context: "form", pathRegex: "/formTypes", priority: 21 },
    { context: "form", pathRegex: "/formAttributeDefinitions", priority: 22 },
    { context: "user", pathRegex: "^/me$", priority: 30 },
    { context: "user", pathPrefix: "/users", priority: 31 },
    { context: "user", pathPrefix: "/userPreferences", priority: 32 },
    { context: "user", pathPrefix: "/userAttributeDefinitions", priority: 33 },
    { context: "user", pathPrefix: "/userInvitationTokens", priority: 34 },
    { context: "user", pathPrefix: "/userProfileAttributeDefinitions", priority: 35 },
    { context: "team", pathPrefix: "/teams", priority: 40 },
    { context: "team", pathPrefix: "/memberships", priority: 41 },
    { context: "team", pathPrefix: "/teamAttributeDefinitions", priority: 42 },
    { context: "model", pathPrefix: "/models", priority: 50 },
    { context: "category", pathRegex: "/categories", priority: 60 },
    { context: "category", pathRegex: "/categorizations", priority: 61 },
    { context: "fileResource", pathPrefix: "/fileResources", priority: 70 },
    { context: "kapp", pathPrefix: "/kapps", priority: 80 },
    { context: "space", pathPrefix: "/backgroundJobs", priority: 90 },
    { context: "space", pathPrefix: "/space", priority: 91 },
    { context: "space", pathPrefix: "/spaceAttributeDefinitions", priority: 92 },
    { context: "space", pathPrefix: "/securityPolicyDefinitions", priority: 93 },
    { context: "space", pathPrefix: "/translations", priority: 94 },
    { context: "space", pathPrefix: "/webApis", priority: 95 },
    { context: "space", pathPrefix: "/webApiImport", priority: 96 },
    { context: "space", pathPrefix: "/webhooks", priority: 97 },
    { context: "space", pathPrefix: "/webhookJobs", priority: 98 },
    { context: "space", pathPrefix: "/workflows", priority: 99 },
    { context: "space", pathPrefix: "/activity", priority: 100 },
    { context: "space", pathPrefix: "/meta", priority: 101 },
    { context: "space", pathPrefix: "/version", priority: 102 },
    { context: "space", pathPrefix: "/license-check", priority: 103 },
    { context: "space", pathPrefix: "/notices", priority: 104 },
    { context: "space", pathPrefix: "/integrations", priority: 105 },
    { context: "space", tag: "Metadata", priority: 2000 },
    { context: "misc", priority: 9999 },
];
export function resolveContextForOperation(op) {
    const sortedRules = [...CONTEXT_RULES].sort((a, b) => a.priority - b.priority);
    for (const rule of sortedRules) {
        if (matchesRule(op, rule)) {
            return rule.context;
        }
    }
    if (process.env.NODE_ENV !== "production") {
        console.warn(`Unmatched operation context for ${op.operationId} (${op.method} ${op.path}). Falling back to misc.`);
    }
    return "misc";
}
function matchesRule(op, rule) {
    if (rule.pathPrefix && op.path.startsWith(rule.pathPrefix)) {
        return true;
    }
    if (rule.pathRegex && new RegExp(rule.pathRegex).test(op.path)) {
        return true;
    }
    if (rule.tag && op.tags.some((tag) => tag.toLowerCase() === rule.tag?.toLowerCase())) {
        return true;
    }
    return !rule.pathPrefix && !rule.pathRegex && !rule.tag;
}
