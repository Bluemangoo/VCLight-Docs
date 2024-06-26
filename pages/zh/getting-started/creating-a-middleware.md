---
prev:
    text: 创建一个应用
    link: /zh/getting-started/create-an-application
next:
    text: 路由请求
    link: /zh/getting-started/routing-requests
---

# 创建一个中间件

在这一节中，你将了解到如何创建并应用一个中间件。

## 接口

中间件接口是这样被声明的：

```Typescript
export default interface VCLightMiddleware {
    process(request: VCLightRequest, response: VCLightResponse, responseContent: VCLightResponse, app: VCLight): Promise<void>;

    post(request: VCLightRequest, response: VCLightResponse, responseContent: VCLightResponse, app: VCLight): Promise<void>;
}
```

这意味着，你需要让你的中间件含有 `process` 和 `post` 两个函数。

其中，`process` 函数中应该包含对请求的处理，`post` 函数应该包含对请求的处理结束后的处理。需要注意的是，越早被应用的中间件，越早被调用 `process` 函数，越晚被调用 `post` 函数。


## 创建中间件类

中间件类需要满足接口 `VCLightMiddleware`。[VCLightRequest](../../reference/vclight-request) 和 [VCLightResponse](../../reference/vclight-response) 是 VCLight 的请求和响应类。

```Typescript
export default interface VCLightMiddleware {
    process(request: VCLightRequest, response: VCLightResponse, responseContent: VCLightResponse, app: VCLightApp): Promise<void>;

    post(request: VCLightRequest, response: VCLightResponse, responseContent: VCLightResponse, app: VCLightApp): Promise<void>;
}
```

接下来你可以在两个函数内填写相关代码。

例如，你想在访问 `/hello/` 时展示 "Hello!"，你可以这样做：

```Typescript
class ExampleMiddleware implements VCLightMiddleware {
    async process(request: VCLightRequest, response: VCLightResponse, responseContent: Response, app: VCLightApp): Promise<void> {
        if(url.parse(<string>request.url).pathname == "/hello/") {
            responseContent.response = "Hello!";
        }
    }

    async post(request: VCLightRequest, response: VCLightResponse, app: VCLightApp): Promise<void> {
        // 我们暂时不需要在这里做什么
    }
}
```

## 应用实例

要应用这个中间件，我们需要先创建一个中间件实例：

```Typescript
const exampleMiddleware = new ExampleMiddleware();
```

使用 `app.use()` 来应用中间件实例：

```Typescript
app.use(exampleMiddleware);
```

至此，你已经学会如何创建并应用一个中间件了。
