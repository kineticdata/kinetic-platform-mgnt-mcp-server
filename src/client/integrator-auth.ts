import { createHash, randomBytes } from "node:crypto";
import type { IntegratorAuthMode, PlatformVersion } from "./platform.js";
import { integratorAuthMode, platformLabel } from "./platform.js";

/**
 * Integrator bearer tokens on Kinetic Platform 6.x and 7.x. Core API calls use
 * Basic auth on both versions; only this sign-in differs:
 * - 6.x: GET /app/oauth/authorize implicit grant with Basic auth. The token
 *   is in the redirect fragment and lasts 12 hours.
 * - 7.x: sign in through /app/login.do (form login, XSRF-protected), then the
 *   authorization code flow with PKCE (/app/oauth2/authorize + /app/oauth2/token).
 *   The token lasts 5 minutes with no refresh token; while the session cookie
 *   lasts a new one is got by authorizing again, otherwise by signing in again.
 *
 * Ported from kinetic-migrate (lib/sync/http.mjs), verified there against
 * 6.1.7 and 7.0.0-rc3.
 */

export type Credentials = { serverUrl: string; username: string; password: string };

type StrategyArgs = Credentials & { basic: string; fetchImpl: typeof fetch; session: CookieSession };

/**
 * A strategy returns a token, `unsupported` when the platform does not offer
 * that sign-in (the next strategy is tried), or `failed` which stops the sign-in.
 */
type StrategyResult =
  | { token: string; expiresIn: number }
  | { unsupported: number }
  | { failed: number; redirected?: boolean; sso?: boolean; refused?: boolean; noSession?: boolean };

type Strategy = (args: StrategyArgs) => Promise<StrategyResult>;

export class IntegratorSignInError extends Error {
  constructor(message: string, readonly status: number | null = null) {
    super(message);
    this.name = "IntegratorSignInError";
  }
}

/** A response body nobody reads (login.do's carries the session id). */
async function discard(res: Response) {
  try {
    await res.body?.cancel();
  } catch {
    /* already consumed or closed */
  }
}

// ---- 6.x -------------------------------------------------------------------

export function parseTokenFromLocation(location: string): { token: string; expiresIn: number } | null {
  const params = new URLSearchParams(String(location).split("#")[1] ?? "");
  const token = params.get("access_token");
  if (!token) return null;
  return { token, expiresIn: Number(params.get("expires_in") ?? 43200) };
}

export const implicitGrant: Strategy = async ({ serverUrl, basic, fetchImpl }) => {
  const url = `${serverUrl}/app/oauth/authorize?grant_type=implicit&response_type=token&client_id=system`;
  const res = await fetchImpl(url, { method: "GET", headers: { Authorization: basic }, redirect: "manual" });
  await discard(res);
  // Only a missing endpoint means "not offered" (7.x answers 404 here).
  if (res.status === 404) return { unsupported: 404 };
  const location = res.headers.get("location");
  if (!location) return { failed: res.status, redirected: false };
  return parseTokenFromLocation(location) ?? { failed: res.status, redirected: true };
};

// ---- 7.x -------------------------------------------------------------------

export type CookieSession = ReturnType<typeof cookieSession>;

/** The cookies of one sign-in session (JSESSIONID, XSRF-TOKEN, load balancer cookies). */
export function cookieSession() {
  const jar = new Map<string, string>();
  return {
    has: (name: string) => jar.has(name),
    get: (name: string) => jar.get(name),
    clear: () => jar.clear(),
    header: () => [...jar].map(([k, v]) => `${k}=${v}`).join("; "),
    update(res: Response) {
      const h = res.headers as Headers & { getSetCookie?: () => string[] };
      const single = h.get("set-cookie");
      const list = typeof h.getSetCookie === "function" ? h.getSetCookie() : single ? [single] : [];
      for (const line of list) {
        const [pair, ...attrs] = String(line).split(";");
        const i = pair.indexOf("=");
        if (i <= 0) continue;
        const name = pair.slice(0, i).trim();
        const value = pair.slice(i + 1).trim();
        const expired = attrs.some((a) => /^\s*max-age\s*=\s*(0|-\d+)\s*$/i.test(a));
        if (!value || expired) jar.delete(name);
        else jar.set(name, value);
      }
    },
  };
}

const b64url = (buf: Buffer) => buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

/** PKCE (RFC 7636): a verifier of 32 random bytes and its S256 challenge. */
export function pkcePair() {
  const verifier = b64url(randomBytes(32));
  return { verifier, challenge: b64url(createHash("sha256").update(verifier).digest()) };
}

const LOGIN_PAGE = /\/app\/login(?:[/?#.]|$)/;

export const pkceGrant: Strategy = async ({ serverUrl, username, password, basic, fetchImpl, session }) => {
  const redirectUri = `${serverUrl}/app/oauth/callback`;

  async function signIn(): Promise<StrategyResult | null> {
    // Seeds the XSRF-TOKEN cookie; may answer 400 when not signed in.
    const spa = await fetchImpl(`${serverUrl}/app/api/v1/meta/spa`, {
      method: "GET",
      headers: { Accept: "application/json" },
      redirect: "manual",
    });
    session.update(spa);
    await discard(spa);
    const xsrf = session.get("XSRF-TOKEN");
    const res = await fetchImpl(`${serverUrl}/app/login.do`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        ...(xsrf ? { "X-XSRF-TOKEN": xsrf } : {}),
        cookie: session.header(),
      },
      body: JSON.stringify({ j_username: username, j_password: password }),
      redirect: "manual",
    });
    session.update(res);
    await discard(res);
    if (res.status === 404) return { unsupported: 404 };
    if (res.status >= 300 && res.status < 400) {
      // Sent to an identity provider instead of signed in.
      const to = res.headers.get("location") ?? "";
      return { failed: res.status, redirected: true, sso: !LOGIN_PAGE.test(to) };
    }
    // Credentials Core accepts but the sign-in page refuses: SSO-only space.
    if (res.status === 401) return { failed: 401, sso: await coreAccepts() };
    // The XSRF check or the space's sign-in settings, never read as SSO.
    if (res.status === 403) return { failed: 403, refused: true };
    if (!res.ok) return { failed: res.status };
    if (!session.has("JSESSIONID")) return { failed: res.status, noSession: true };
    return null;
  }

  async function coreAccepts() {
    try {
      const r = await fetchImpl(`${serverUrl}/app/api/v1/me`, {
        method: "GET",
        headers: { Authorization: basic, Accept: "application/json" },
        redirect: "manual",
      });
      await discard(r);
      return r.ok;
    } catch {
      return false;
    }
  }

  async function authorize(): Promise<StrategyResult | { login: true }> {
    const { verifier, challenge } = pkcePair();
    const q = new URLSearchParams({
      response_type: "code",
      client_id: "system",
      redirect_uri: redirectUri,
      code_challenge: challenge,
      code_challenge_method: "S256",
    });
    const res = await fetchImpl(`${serverUrl}/app/oauth2/authorize?${q}`, {
      method: "GET",
      headers: { cookie: session.header() },
      redirect: "manual",
    });
    session.update(res);
    await discard(res);
    if (res.status === 404) return { unsupported: 404 };
    const location = res.headers.get("location");
    if (!location) return { failed: res.status, redirected: false };
    let target: URL;
    try {
      target = new URL(location, serverUrl);
    } catch {
      return { failed: res.status, redirected: true };
    }
    const code = target.searchParams.get("code");
    if (!code) return LOGIN_PAGE.test(target.pathname) ? { login: true } : { failed: res.status, redirected: true };

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: "system",
      code_verifier: verifier,
    });
    const t = await fetchImpl(`${serverUrl}/app/oauth2/token`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        cookie: session.header(),
      },
      body: body.toString(),
      redirect: "manual",
    });
    session.update(t);
    if (!t.ok) {
      await discard(t);
      return { failed: t.status };
    }
    let json: any;
    try {
      json = await t.json();
    } catch {
      return { failed: t.status };
    }
    if (typeof json?.access_token !== "string" || !json.access_token) return { failed: t.status };
    const expiresIn = Number(json.expires_in);
    return { token: json.access_token, expiresIn: Number.isFinite(expiresIn) && expiresIn > 0 ? expiresIn : 299 };
  }

  if (session.has("JSESSIONID")) {
    // Re-authorize with the existing session; if that no longer works, sign in afresh once.
    const again = await authorize();
    if ("token" in again || "unsupported" in again) return again;
    session.clear();
  }
  const failed = await signIn();
  if (failed) return failed;
  const r = await authorize();
  return "login" in r ? { failed: 302, redirected: true } : r;
};

// ---- Token provider ----------------------------------------------------------

const STRATEGIES: Record<IntegratorAuthMode, Strategy[]> = {
  implicit: [implicitGrant],
  pkce: [pkceGrant],
  // Version not known: 6.x first, then 7.x when the implicit endpoint is missing.
  unknown: [implicitGrant, pkceGrant],
};

function failureMessage(r: Extract<StrategyResult, { failed: number }>, host: string): string {
  const code = r.failed;
  if (r.sso) return `${host} signs in with single sign-on; the Integrator API needs a local account with a password.`;
  if (r.refused) return `${host} rejected the sign-in (${code}): check the username and password, or the space's sign-in settings.`;
  if (code === 401 || code === 403) return `The Integrator rejected the sign-in (${code}): check the username and password.`;
  if (r.redirected) return `The Integrator sign-in did not return a token (${code}, redirected without one): check the username and password.`;
  if (r.noSession) return `The sign-in did not start a session (${code}): check the username and password.`;
  return `The Integrator sign-in failed (${code}).`;
}

/**
 * Hands out a valid Integrator bearer token for one set of credentials,
 * signing in with whichever flow the platform version needs. Concurrent
 * callers share one sign-in.
 */
export class IntegratorTokenProvider {
  private readonly basic: string;
  private readonly session = cookieSession();
  private readonly host: string;
  private token: { value: string; expiresAt: number; margin: number } | null = null;
  private strategy: Strategy | null = null;
  private signingIn: Promise<string> | null = null;

  constructor(
    private readonly creds: Credentials,
    private readonly platform: () => Promise<PlatformVersion>,
    private readonly fetchImpl: typeof fetch = globalThis.fetch,
    private readonly now: () => number = Date.now,
  ) {
    this.basic = "Basic " + Buffer.from(`${creds.username}:${creds.password}`).toString("base64");
    try {
      this.host = new URL(creds.serverUrl).host;
    } catch {
      this.host = "The space";
    }
  }

  /**
   * A token valid for 30 more seconds (half its life, if shorter), or a new
   * one. `stale` is a token the server just answered 401 to; it is dropped
   * unless already replaced.
   */
  async getToken(stale?: string): Promise<string> {
    if (stale && this.token?.value === stale) this.token = null;
    if (this.token && this.now() < this.token.expiresAt - this.token.margin) return this.token.value;
    this.signingIn ??= this.signIn().finally(() => {
      this.signingIn = null;
    });
    return this.signingIn;
  }

  private async signIn(): Promise<string> {
    const p = this.strategy ? null : await this.platform();
    const strategies = this.strategy ? [this.strategy] : STRATEGIES[integratorAuthMode(p)];
    let lastStatus = 404;
    for (const s of strategies) {
      const r = await s({ ...this.creds, basic: this.basic, fetchImpl: this.fetchImpl, session: this.session });
      if ("token" in r) {
        this.strategy = s;
        const life = (r.expiresIn || 43200) * 1000;
        this.token = { value: r.token, expiresAt: this.now() + life, margin: Math.min(30_000, life / 2) };
        return r.token;
      }
      if ("failed" in r) throw new IntegratorSignInError(failureMessage(r, this.host), r.failed);
      lastStatus = r.unsupported;
    }
    const version = (p ?? (await this.platform())).version;
    throw new IntegratorSignInError(
      `${this.host} (${platformLabel(p)}) doesn't offer an Integrator sign-in this server supports (it answered ${lastStatus}).` +
        (version ? "" : " Set KINETIC_PLATFORM_VERSION if the version endpoints are blocked."),
      lastStatus,
    );
  }
}
