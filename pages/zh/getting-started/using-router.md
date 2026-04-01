---
prev:
    text: 创建一个中间件
    link: /zh/getting-started/creating-a-middleware
next:
    text: 路由请求
    link: /zh/getting-started/routing-requests
---

# 使用 Router

`@vclight/router` 是官方中间件包，用于将 URL 路径映射到处理函数。

## 安装

::: code-group
```shell [npm]
npm install @vclight/router
```

```shell [yarn]
yarn add @vclight/router
```

```shell [pnpm]
pnpm add @vclight/router
```
:::

## 创建并应用 Router 实例

```typescript
import VCLight from "vclight";
import VCLightRouter from "@vclight/router";

const app = new VCLight();
const router = new VCLightRouter();

app.use(router);
```

## 添加路由

```typescript
router.on("/", async (_request, response) => {
    response.contentType = "text/plain";
    response.response = "Hello VCLight";
});

router.pattern(/^\/users\/\d+\/?$/, async (request, response) => {
    response.response = {
        path: request.url,
        method: request.method
    };
});
```

## Router 配置

```typescript
const router = new VCLightRouter({
    buildInRouters: { _404: true },
    use404Router: true
});
```

- `buildInRouters._404`：是否注册内置 `/404/` 路由（默认 `true`）
- `use404Router`：无匹配路由时是否回落到 `/404/`（默认 `true`）

