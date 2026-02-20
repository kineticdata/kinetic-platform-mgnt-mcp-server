export type KineticApi = "core";

export interface KineticSessionConfig {
  serverUrl: string;
  username: string;
  password: string;
  agentSlug?: string;
}

export class KineticApiClient {
  private baseUrl: string;
  private authHeader: string;

  constructor(baseUrl: string, username: string, password: string) {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
    this.authHeader =
      "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
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
