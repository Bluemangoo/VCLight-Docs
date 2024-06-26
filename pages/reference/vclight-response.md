---
prev: false
next: false
---

# VCLightResponse

A VCLightResponse object has the following fields:

```typescript
class VCLightResponse{
    redirect: boolean = false;
    redirectUrl: string = "/";
    status: number = 200;
    response: any = "";
    headers: OutgoingHttpHeaders = {};
    builder: ResponseBuilder | undefined;
    end: boolean = false;
    context: { [key: string]: any } = {};
}
```

## redirect

`redirect` is a boolean value that indicates whether to redirect.

If this value is set to true, non-3xx status codes will be ignored and forcibly changed to 307, and `redirectUrl` will be used for redirection.

## response

`response` is the response content. If you fill in something that is not a string, it will be converted to a string.

## headers

The header content.

## end

`end` is a boolean value that indicates whether the processing is over. If it is over, the subsequent middleware will not be executed.

## context

`context` is an object used to store data between some middleware.
