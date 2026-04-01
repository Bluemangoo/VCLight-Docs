---
prev: false
next: false
---

# VCLightResponse

A `VCLightResponse` object includes the following fields:

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

Set `redirect = true` and `redirectUrl` to enable redirect behavior.

If `redirect` is `true` and status is not 3xx, VCLight adjusts status to `307`.

## status

`status` is the HTTP status code. Default is `200`.

## response

`response` is the response payload. Objects are serialized to JSON strings before sending.

## headers

`headers` is the outgoing header map.

## end

Set `end = true` to stop executing remaining middleware in the `process` phase.

## context

`context` is a shared object for passing data between middleware.
