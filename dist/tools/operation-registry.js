import { resolveContextForOperation } from "./context-mapping.js";
import { overrides as categoryOverrides } from "./handlers/category.js";
import { overrides as fileResourceOverrides } from "./handlers/file-resource.js";
import { overrides as formOverrides } from "./handlers/form.js";
import { overrides as kappOverrides } from "./handlers/kapp.js";
import { overrides as miscOverrides } from "./handlers/misc.js";
import { overrides as modelOverrides } from "./handlers/model.js";
import { overrides as spaceOverrides } from "./handlers/space.js";
import { overrides as submissionOverrides } from "./handlers/submission.js";
import { overrides as teamOverrides } from "./handlers/team.js";
import { overrides as userOverrides } from "./handlers/user.js";
import { registerContextOperationTools } from "./shared.js";
const CONTEXT_OVERRIDES = {
    space: spaceOverrides,
    kapp: kappOverrides,
    form: formOverrides,
    submission: submissionOverrides,
    user: userOverrides,
    team: teamOverrides,
    model: modelOverrides,
    category: categoryOverrides,
    fileResource: fileResourceOverrides,
    misc: miscOverrides,
};
export function buildOperationRegistry(operations) {
    return buildRegistryEntries(operations).map((entry) => entry.meta);
}
export function resolveOperationHandler(operationId) {
    let found = null;
    let foundContext = null;
    for (const [contextName, overrides] of Object.entries(CONTEXT_OVERRIDES)) {
        const candidate = overrides[operationId]?.handler;
        if (!candidate)
            continue;
        if (found) {
            throw new Error(`Operation handler collision for ${operationId}. Found in both ${foundContext} and ${contextName}.`);
        }
        found = candidate;
        foundContext = contextName;
    }
    return found;
}
export function registerToolsFromRegistry(server, operations, invokeDefaultOperation) {
    const entries = buildRegistryEntries(operations);
    const grouped = groupEntriesByContext(entries);
    registerContextOperationTools("space", { server, entries: grouped.space, invokeDefaultOperation });
    registerContextOperationTools("kapp", { server, entries: grouped.kapp, invokeDefaultOperation });
    registerContextOperationTools("form", { server, entries: grouped.form, invokeDefaultOperation });
    registerContextOperationTools("submission", { server, entries: grouped.submission, invokeDefaultOperation });
    registerContextOperationTools("user", { server, entries: grouped.user, invokeDefaultOperation });
    registerContextOperationTools("team", { server, entries: grouped.team, invokeDefaultOperation });
    registerContextOperationTools("model", { server, entries: grouped.model, invokeDefaultOperation });
    registerContextOperationTools("category", { server, entries: grouped.category, invokeDefaultOperation });
    registerContextOperationTools("fileResource", { server, entries: grouped.fileResource, invokeDefaultOperation });
    registerContextOperationTools("misc", { server, entries: grouped.misc, invokeDefaultOperation });
}
function buildRegistryEntries(operations) {
    const operationIdSet = new Set();
    const usedAliases = new Set(["connect"]);
    const entries = [];
    for (const op of operations) {
        if (operationIdSet.has(op.operationId)) {
            throw new Error(`Duplicate operationId detected in OAS: ${op.operationId}`);
        }
        operationIdSet.add(op.operationId);
        const context = resolveContextForOperation(op);
        const alias = reserveAlias(toAliasName(op.operationId), usedAliases, op.operationId);
        const override = resolveOperationOverride(context, op.operationId);
        const handler = override.handler ?? null;
        entries.push({
            op,
            meta: {
                operationId: op.operationId,
                alias,
                context,
                custom: Boolean(handler),
            },
            handler,
            override,
        });
    }
    entries.sort((a, b) => {
        if (a.meta.context === b.meta.context) {
            return a.meta.operationId.localeCompare(b.meta.operationId);
        }
        return a.meta.context.localeCompare(b.meta.context);
    });
    return entries;
}
function reserveAlias(baseAlias, usedAliases, operationId) {
    if (!usedAliases.has(baseAlias)) {
        usedAliases.add(baseAlias);
        return baseAlias;
    }
    let suffix = 2;
    let alias = `${baseAlias}_${suffix}`;
    while (usedAliases.has(alias)) {
        suffix += 1;
        alias = `${baseAlias}_${suffix}`;
    }
    usedAliases.add(alias);
    console.warn(`Alias collision detected for ${operationId}. Using alias ${alias}.`);
    return alias;
}
function toAliasName(operationId) {
    const snake = operationId
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .toLowerCase();
    return /^[a-z]/.test(snake) ? snake : `op_${snake}`;
}
function groupEntriesByContext(entries) {
    const grouped = {
        space: [],
        kapp: [],
        form: [],
        submission: [],
        user: [],
        team: [],
        model: [],
        category: [],
        fileResource: [],
        misc: [],
    };
    for (const entry of entries) {
        grouped[entry.meta.context].push(entry);
    }
    return grouped;
}
function resolveOperationOverride(context, operationId) {
    const contextOverrides = CONTEXT_OVERRIDES[context];
    if (!contextOverrides || !(operationId in contextOverrides)) {
        throw new Error(`Missing operation override entry for ${operationId} in context ${context}.`);
    }
    return contextOverrides[operationId] ?? {};
}
