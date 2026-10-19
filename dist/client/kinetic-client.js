export class KineticApiClient {
    baseUrl;
    basicHeader;
    tokens;
    constructor(baseUrl, basicHeader, tokens) {
        this.baseUrl = baseUrl.replace(/\/+$/, "");
        this.basicHeader = basicHeader;
        this.tokens = tokens;
    }
    static withBasicAuth(baseUrl, username, password) {
        const header = "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
        return new KineticApiClient(baseUrl, header, null);
    }
    /** Bearer auth from a token source; a 401 gets a fresh token and one retry. */
    static withBearerTokens(baseUrl, tokens) {
        return new KineticApiClient(baseUrl, null, tokens);
    }
    async request(method, path, options) {
        const url = new URL(this.baseUrl + path);
        if (options?.query) {
            for (const [key, value] of Object.entries(options.query)) {
                if (value === undefined || value === null)
                    continue;
                if (Array.isArray(value)) {
                    for (const item of value) {
                        if (item === undefined || item === null)
                            continue;
                        url.searchParams.append(key, String(item));
                    }
                    continue;
                }
                url.searchParams.set(key, String(value));
            }
        }
        const hasBody = options?.body !== undefined &&
            method !== "GET" &&
            method !== "HEAD";
        const send = (authorization) => fetch(url.toString(), {
            method,
            headers: {
                Authorization: authorization,
                Accept: "application/json",
                ...(hasBody ? { "Content-Type": "application/json" } : {}),
                ...(options?.headers ?? {}),
            },
            body: hasBody ? JSON.stringify(options.body) : undefined,
        });
        let response;
        if (this.tokens) {
            // 7.x Integrator tokens last 5 minutes and can be revoked; sign in again once on a 401.
            const token = await this.tokens.getToken();
            response = await send(`Bearer ${token}`);
            if (response.status === 401) {
                await response.body?.cancel();
                response = await send(`Bearer ${await this.tokens.getToken(token)}`);
            }
        }
        else {
            response = await send(this.basicHeader);
        }
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
