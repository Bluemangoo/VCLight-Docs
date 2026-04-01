---
prev:
    text: 快速开始
    link: /zh/getting-started/getting-started
next:
    text: 创建一个中间件
    link: /zh/getting-started/creating-a-middleware
---

# 创建一个应用

在 `src/app/app.ts` 中创建 VCLight 实例：

```typescript
import VCLight from "vclight";

const app = new VCLight({
    onError: async (_request, response) => {
        response.status = 500;
        response.response = "Internal Server Error";
        response.end = true;
    }
});

export default app;
```

然后通过 `app.use(...)` 注册中间件：

```typescript
import router from "./router";

app.use(router);
```

## 入口文件

根据部署目标选择处理器。

### Vercel

```typescript
import app from "./app/app";

export default app.vercelHandler();
```

### Vercel Functions

Vercel Functions（Edge Runtime）需要用 `fetch` 属性包装：

```typescript
import app from "./app/app";

export default {
    fetch: app.vercelFunctionHandler()
};
```

### Netlify

```typescript
import app from "../../src/app/app";

export default app.netlifyHandler();
```

### Cloudflare Workers

```typescript
import app from "./app/app";

export default app.cloudflareHandler();
```

### Node HTTP

```typescript
import * as http from "http";
import app from "./app/app";

const server = http.createServer();
server.on("request", app.httpHandler());
```
