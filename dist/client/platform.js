/**
 * Which Kinetic Platform version a space runs. Both version endpoints answer
 * on 6.x and 7.x:
 * - GET /app/integrator/api/version (no auth)
 * - GET /app/api/v1/version (Basic auth; 7.x also answers without)
 * The Integrator's is asked first since it needs no credentials. Nothing here
 * throws: an unreachable or unreadable answer is UNKNOWN_PLATFORM.
 *
 * Ported from kinetic-migrate (lib/sync/platform.mjs).
 */
export const UNKNOWN_PLATFORM = Object.freeze({ version: null, major: null, minor: null, source: null });
const VERSION = /^\d+(?:\.\d+)*(?:[-+][\w.+-]*)?$/;
/** { version, major, minor } from a version string ("7.0.0-rc3", "06.01.07"), or null. */
export function parseVersion(text) {
    const v = typeof text === "string" ? text.trim() : "";
    if (!v || v.length > 40 || !VERSION.test(v))
        return null;
    const [major, minor = 0] = v.split(/[-+]/)[0].split(".").map(Number);
    if (!Number.isInteger(major))
        return null;
    return { version: v, major, minor: Number.isInteger(minor) ? minor : 0 };
}
const SOURCES = [
    { source: "integrator", path: "/app/integrator/api/version", auth: false },
    { source: "core", path: "/app/api/v1/version", auth: true },
];
async function readVersion(url, headers, fetchImpl) {
    try {
        const res = await fetchImpl(url, { method: "GET", headers, redirect: "manual" });
        if (!res.ok)
            return null;
        const body = await res.json();
        return parseVersion(body?.version?.version ?? body?.version);
    }
    catch {
        return null;
    }
}
/** The platform `serverUrl` runs. `basic` is the Authorization header for Core's endpoint. */
export async function detectPlatform(serverUrl, { fetchImpl = globalThis.fetch, basic } = {}) {
    for (const s of SOURCES) {
        const headers = { Accept: "application/json" };
        if (s.auth && basic)
            headers.Authorization = basic;
        const v = await readVersion(`${serverUrl}${s.path}`, headers, fetchImpl);
        if (v)
            return Object.freeze({ ...v, source: s.source });
    }
    return UNKNOWN_PLATFORM;
}
/**
 * The one place that says what differs by platform version. Core API calls
 * use Basic auth on both; only the Integrator sign-in differs.
 */
export function integratorAuthMode(platform) {
    const major = platform?.major;
    if (!Number.isInteger(major))
        return "unknown";
    return major >= 7 ? "pkce" : "implicit";
}
/** "Kinetic Platform 7.0.0-rc3", or "Kinetic Platform (version unknown)". */
export const platformLabel = (p) => p?.version ? `Kinetic Platform ${p.version}` : "Kinetic Platform (version unknown)";
