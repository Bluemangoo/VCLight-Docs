---
prev: false
next: false
---

# VCLightRequest

A `VCLightRequest` object includes the following fields:

```typescript
class VCLightRequest {
    rawRequest: RawRequest;
    source: "http" | "vercel" | "vercel-function" | "netlify" | "cloudflare";

    headers: IncomingHttpHeaders;
    method: string;
    url: string;

    body: any;
    env: any;
}
```

## rawRequest

`rawRequest` stores the platform-specific request wrapper. Its concrete type depends on `source`.

## source

`source` indicates which handler created the request:

- `http` from `app.httpHandler()`
- `vercel` from `app.vercelHandler()`
- `vercel-function` from `app.vercelFunctionHandler()`
- `netlify` from `app.netlifyHandler()`
- `cloudflare` from `app.cloudflareHandler()`

## headers

`headers` is a key-value map of request headers.

## body

`body` is parsed from the incoming request. Parsing behavior depends on the platform and content type.

## env

`env` contains runtime environment data:

- Node-based handlers: `process.env`
- Vercel Functions: value from `@vercel/functions` `getEnv()`
- Cloudflare: the `env` argument passed to `cloudflareHandler()`
