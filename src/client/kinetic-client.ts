export type KineticApi = "core" | "integrator";

export interface KineticSessionConfig {
  serverUrl: string;
  username: string;
  password: string;
  agentSlug?: string;
}

export class KineticApiClient {
  private baseUrl: string;
  private authHeader: string;

  constructor(baseUrl: string, authHeader: string) {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
    this.authHeader = authHeader;
  }

  static withBasicAuth(baseUrl: string, username: string, password: string): KineticApiClient {
    const header = "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
    return new KineticApiClient(baseUrl, header);
  }

  static withBearerToken(baseUrl: string, token: string): KineticApiClient {
    return new KineticApiClient(baseUrl, `Bearer ${token}`);
  }

  async request(method: string, path: string, options?: { query?: Record<string, any>; body?: any; headers?: Record<string, string> }): Promise<any> {
    const url = new URL(this.baseUrl + path);
    if (options?.query) {
      for (const [key, value] of Object.entries(options.query)) {
        if (value === undefined || value === null) continue;
        if (Array.isArray(value)) {
          for (const item of value) {
            if (item === undefined || item === null) continue;
            url.searchParams.append(key, String(item));
          }
          continue;
        }
        url.searchParams.set(key, String(value));
      }
    }

    const hasBody =
      options?.body !== undefined &&
      method !== "GET" &&
      method !== "HEAD";

    const response = await fetch(url.toString(), {
      method,
      headers: {
        Authorization: this.authHeader,
        Accept: "application/json",
        ...(hasBody ? { "Content-Type": "application/json" } : {}),
        ...(options?.headers ?? {}),
      },
      body: hasBody ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Kinetic API error ${response.status} ${response.statusText}: ${text}`);
    }

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return response.json();
    }
    return response.text();
  }
}

/**
 * Obtain an OAuth 2.0 bearer token for the Integrator API using the
 * implicit grant flow. The token is extracted from the redirect Location header.
 */
export async function obtainOAuthToken(serverUrl: string, username: string, password: string): Promise<{ token: string; expiresAt: number }> {
  const authUrl = `${serverUrl.replace(/\/+$/, "")}/app/oauth/authorize?grant_type=implicit&response_type=token&client_id=system`;
  const basicAuth = "Basic " + Buffer.from(`${username}:${password}`).toString("base64");

  const response = await fetch(authUrl, {
    method: "GET",
    headers: { Authorization: basicAuth },
    redirect: "manual",
  });

  const location = response.headers.get("location");
  if (!location) {
    throw new Error(`OAuth authorize did not return a redirect (status ${response.status})`);
  }

  const fragment = location.split("#")[1];
  if (!fragment) {
    throw new Error("OAuth redirect missing fragment with access_token");
  }

  const params = new URLSearchParams(fragment);
  const token = params.get("access_token");
  if (!token) {
    throw new Error("OAuth redirect fragment missing access_token");
  }

  const expiresIn = parseInt(params.get("expires_in") ?? "43200", 10);
  // Subtract 30s buffer for safety
  const expiresAt = Date.now() + (expiresIn - 30) * 1000;

  return { token, expiresAt };
}
