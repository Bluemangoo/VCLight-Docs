---
prev: false
next: false
---

# VCLightResponse

一个 VCLightResponse 对象有如下字段：

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

`redirect` 是一个布尔值，表示是否重定向。

如果此值被设置为 true, 那么非 3xx 的状态码将被忽略并强制修改为 307，而 `redirectUrl` 将被用于重定向。

## response

`response` 是响应内容。如果你填写的不是字符串，那么它将被转换为字符串。

## headers

返回头内容。

## end

`end` 是一个布尔值，表示处理是否结束。如果已结束，那么不会再执行后续的中间件。

## context

`context` 是一个对象，用于存储一些中间件之间的数据。
