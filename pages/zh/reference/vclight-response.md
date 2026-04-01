---
prev: false
next: false
---

# VCLightResponse

`VCLightResponse` 包含以下字段：

```typescript
class VCLightResponse {
    redirect: boolean;
    redirectUrl: string;
    status: number;
    response: any;
    headers: OutgoingHttpHeaders;
    end: boolean;
    context: { [key: string]: any };
}
```

## redirect / redirectUrl

设置 `redirect = true` 并指定 `redirectUrl` 可触发重定向。

当 `redirect` 为 `true` 且状态码不是 3xx 时，VCLight 会把状态码调整为 `307`。

## status

`status` 是 HTTP 状态码，默认 `200`。

## response

`response` 是响应内容。对象会在发送前被序列化为 JSON 字符串。

## headers

`headers` 是响应头映射。

## end

设置 `end = true` 后，`process` 阶段不会继续执行后续中间件。

## context

`context` 用于在中间件间传递共享数据。
