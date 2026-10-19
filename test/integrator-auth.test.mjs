// Offline tests for the 6.x / 7.x Integrator sign-in. Runs against dist/:
//   npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { IntegratorTokenProvider } from "../dist/client/integrator-auth.js";
import { KineticApiClient } from "../dist/client/kinetic-client.js";
import { detectPlatform, integratorAuthMode, parseVersion } from "../dist/client/platform.js";

const BASE = "https://space.example.com";
const CREDS = { serverUrl: BASE, username: "u", password: "p" };
const v = (version) => async () => ({ ...parseVersion(version), source: "integrator" });

// A fake fetch: `routes` maps "METHOD /path" to (url, init) => Response.
function fakeFetch(routes) {
  const calls = [];
  const fn = async (input, init = {}) => {
    const url = new URL(String(input));
    const key = `${init.method ?? "GET"} ${url.pathname}`;
    calls.push({ key, url, init });
    const route = routes[key];
    return route ? route(url, init) : new Response("not found", { status: 404 });
  };
  fn.calls = calls;
  return fn;
}

const redirect = (location, headers = {}) => new Response(null, { status: 302, headers: { location, ...headers } });

const v6Routes = (token = "tok6") => ({
  "GET /app/oauth/authorize": (_u, init) =>
    init.headers.Authorization === "Basic " + Buffer.from("u:p").toString("base64")
      ? redirect(`${BASE}/app/oauth/callback#access_token=${token}&expires_in=43200`)
      : new Response(null, { status: 401 }),
});

function v7Routes({ tokens = ["tok7a", "tok7b"], loginStatus = 200 } = {}) {
  let n = 0;
  return {
    "GET /app/api/v1/meta/spa": () => new Response("{}", { status: 400, headers: { "set-cookie": "XSRF-TOKEN=x1; Path=/" } }),
    "POST /app/login.do": (_u, init) => {
      assert.equal(init.headers["X-XSRF-TOKEN"], "x1");
      assert.deepEqual(JSON.parse(init.body), { j_username: "u", j_password: "p" });
      return new Response("{}", { status: loginStatus, headers: { "set-cookie": "JSESSIONID=s1; Path=/" } });
    },
    "GET /app/oauth2/authorize": (url, init) => {
      assert.equal(url.searchParams.get("code_challenge_method"), "S256");
      return init.headers.cookie.includes("JSESSIONID=s1")
        ? redirect(`${BASE}/app/oauth/callback?code=c${n}`)
        : redirect(`${BASE}/app/login`);
    },
    "POST /app/oauth2/token": (_u, init) => {
      const body = new URLSearchParams(init.body);
      assert.equal(body.get("grant_type"), "authorization_code");
      assert.ok(body.get("code_verifier"));
      return Response.json({ access_token: tokens[n++] ?? "tokN", expires_in: 299 });
    },
  };
}

test("parseVersion and integratorAuthMode", () => {
  assert.equal(integratorAuthMode(parseVersion("6.1.7")), "implicit");
  assert.equal(integratorAuthMode(parseVersion("7.0.0-rc4")), "pkce");
  assert.equal(integratorAuthMode(parseVersion("garbage")), "unknown");
});

test("detectPlatform reads the Integrator version endpoint without auth", async () => {
  const f = fakeFetch({ "GET /app/integrator/api/version": () => Response.json({ version: { version: "7.0.0-rc4" } }) });
  const p = await detectPlatform(BASE, { fetchImpl: f, basic: "Basic x" });
  assert.equal(p.major, 7);
  assert.equal(p.source, "integrator");
  assert.equal(f.calls[0].init.headers.Authorization, undefined);
});

test("detectPlatform falls back to Core, then unknown", async () => {
  const core = fakeFetch({ "GET /app/api/v1/version": () => Response.json({ version: { version: "6.1.7" } }) });
  assert.equal((await detectPlatform(BASE, { fetchImpl: core })).major, 6);
  assert.equal((await detectPlatform(BASE, { fetchImpl: fakeFetch({}) })).major, null);
});

test("6.x uses the implicit grant", async () => {
  const f = fakeFetch(v6Routes());
  const p = new IntegratorTokenProvider(CREDS, v("6.1.7"), f);
  assert.equal(await p.getToken(), "tok6");
  assert.equal(await p.getToken(), "tok6", "cached");
  assert.equal(f.calls.length, 1);
});

test("7.x signs in with login.do then PKCE", async () => {
  const f = fakeFetch(v7Routes());
  const p = new IntegratorTokenProvider(CREDS, v("7.0.0-rc4"), f);
  assert.equal(await p.getToken(), "tok7a");
  assert.deepEqual(f.calls.map((c) => c.key), [
    "GET /app/api/v1/meta/spa",
    "POST /app/login.do",
    "GET /app/oauth2/authorize",
    "POST /app/oauth2/token",
  ]);
});

test("7.x renews an expired token from the session without signing in again", async () => {
  let clock = 0;
  const f = fakeFetch(v7Routes());
  const p = new IntegratorTokenProvider(CREDS, v("7.0.0-rc4"), f, () => clock);
  assert.equal(await p.getToken(), "tok7a");
  clock += 300_000;
  assert.equal(await p.getToken(), "tok7b");
  assert.equal(f.calls.filter((c) => c.key === "POST /app/login.do").length, 1);
});

test("unknown version tries 6.x first, then 7.x on a 404", async () => {
  const f = fakeFetch(v7Routes());
  const p = new IntegratorTokenProvider(CREDS, async () => ({ version: null, major: null, minor: null, source: null }), f);
  assert.equal(await p.getToken(), "tok7a");
  assert.equal(f.calls[0].key, "GET /app/oauth/authorize");
});

test("unknown version on 6.x stops at the implicit grant", async () => {
  const f = fakeFetch(v6Routes());
  const p = new IntegratorTokenProvider(CREDS, async () => ({ version: null, major: null, minor: null, source: null }), f);
  assert.equal(await p.getToken(), "tok6");
});

test("a wrong password fails with a plain message", async () => {
  const p6 = new IntegratorTokenProvider({ ...CREDS, password: "bad" }, v("6.1.7"), fakeFetch(v6Routes()));
  await assert.rejects(p6.getToken(), /Integrator rejected the sign-in \(401\)/);
  const p7 = new IntegratorTokenProvider(CREDS, v("7.0.0-rc4"), fakeFetch(v7Routes({ loginStatus: 403 })));
  await assert.rejects(p7.getToken(), /rejected the sign-in \(403\)/);
});

test("concurrent callers share one sign-in", async () => {
  const f = fakeFetch(v7Routes());
  const p = new IntegratorTokenProvider(CREDS, v("7.0.0-rc4"), f);
  const [a, b] = await Promise.all([p.getToken(), p.getToken()]);
  assert.equal(a, b);
  assert.equal(f.calls.filter((c) => c.key === "POST /app/login.do").length, 1);
});

test("KineticApiClient retries once with a fresh token on 401", async (t) => {
  const seen = [];
  t.mock.method(globalThis, "fetch", async (_url, init) => {
    seen.push(init.headers.Authorization);
    return init.headers.Authorization === "Bearer old"
      ? new Response("expired", { status: 401 })
      : Response.json({ ok: true });
  });
  const tokens = ["old", "new"];
  const source = { getToken: async (stale) => (stale === "old" ? tokens[1] : tokens[0]) };
  const client = KineticApiClient.withBearerTokens(`${BASE}/app/integrator`, source);
  assert.deepEqual(await client.request("GET", "/api/connections"), { ok: true });
  assert.deepEqual(seen, ["Bearer old", "Bearer new"]);
});
