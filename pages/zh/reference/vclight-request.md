---
prev: false
next: false
---

# VCLightRequest

一个 VCLightRequest 对象有如下字段：

```typescript
class VCLightRequest{
    rawRequest: RawRequest;
    source: "http" | "vercel" | "netlify";

    headers: IncomingHttpHeaders;
    method: string;
    url: string;

    body: any;
}
```

## rawRequest

`rawRequest` 是原始请求对象，其类型取决于 `source` 字段。

它包含了原始 request 对象和原始 response 对象。你可以通过 `instanceof` 来判断它的类型。

### headers

`headers` 是请求头对象，它**实际上**是一个键值对，键是请求头的名称，值是请求头的值。

需要提醒的是，很多框架会提供很多信息例如 get 查询参数、cookie 等。VCLight 并不是没有提供这些信息，只是没有解析，需要你自己从 `headers` 中解析。
