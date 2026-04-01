---
prev: false
next: false
---

# VCLightRequest

`VCLightRequest` 包含以下字段：

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

`rawRequest` 是平台相关的原始请求包装对象，具体类型取决于 `source`。

## source

`source` 表示请求来源：

- `http`：来自 `app.httpHandler()`
- `vercel`：来自 `app.vercelHandler()`
- `vercel-function`：来自 `app.vercelFunctionHandler()`
- `netlify`：来自 `app.netlifyHandler()`
- `cloudflare`：来自 `app.cloudflareHandler()`

## headers

`headers` 是请求头键值映射。

## body

`body` 为请求体解析结果。不同平台和 `content-type` 下解析行为会有差异。

## env

`env` 保存运行时环境数据：

- Node 类处理器：`process.env`
- Vercel Functions：`@vercel/functions` 的 `getEnv()` 返回值
- Cloudflare：`cloudflareHandler()` 传入的 `env`
