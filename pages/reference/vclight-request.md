---
prev: false
next: false
---

# VCLightRequest

A VCLightRequest object has the following fields:

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

`rawRequest` is the raw request object, its type depends on the `source` field.

It contains the original request object and the original response object. You can use `instanceof` to determine its type.

### headers

`headers` is the request header object, which is **actually** a key-value pair, where the key is the name of the request header and the value is the value of the request header.
