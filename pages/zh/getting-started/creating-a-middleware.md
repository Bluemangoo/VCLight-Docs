---
prev:
    text: 创建一个应用
    link: /zh/getting-started/creating-an-application
next:
    text: 使用 Router
    link: /zh/getting-started/using-router
---

# 创建一个中间件

中间件需要实现 `VCLightMiddleware` 接口。

## 接口定义

```typescript
import { VCLightMiddleware, VCLightRequest, VCLightResponse, VCLightApp } from "vclight";

export default interface VCLightMiddleware {
    process(request: VCLightRequest, response: VCLightResponse, app: VCLightApp): Promise<void>;
    post(request: VCLightRequest, response: VCLightResponse, app: VCLightApp): Promise<void>;
}
```

- `process` 按注册顺序执行
- `post` 在 `process` 阶段结束后按逆序执行

## 示例

```typescript
import { VCLightMiddleware, VCLightRequest, VCLightResponse, VCLightApp } from "vclight";

class ExampleMiddleware implements VCLightMiddleware {
    async process(request: VCLightRequest, response: VCLightResponse, _app: VCLightApp): Promise<void> {
        if (request.url === "/hello/") {
            response.response = "Hello!";
            response.end = true;
        }
    }

    async post(_request: VCLightRequest, _response: VCLightResponse, _app: VCLightApp): Promise<void> {
        // 可选的后处理
    }
}
```

## 应用中间件

```typescript
const exampleMiddleware = new ExampleMiddleware();
app.use(exampleMiddleware);
```
