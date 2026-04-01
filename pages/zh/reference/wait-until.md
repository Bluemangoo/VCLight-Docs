---
prev: false
next: false
---

# waitUntil API

`waitUntil` 函数用于调度后台任务，这些任务会在响应发送后被等待完成。

## 导入

```typescript
import { waitUntil } from "vclight";
```

## 使用方式

```typescript
import { waitUntil } from "vclight";

// 调度一个后台任务
waitUntil(
    fetch("https://example.com/log", {
        method: "POST",
        body: JSON.stringify({ event: "user_action" })
    })
);
```

## 工作原理

- 任务在请求处理过程中被收集
- 发送响应后，VCLight 会等待所有调度的任务完成
- 平台特定行为：
  - **Vercel Functions**：使用 Vercel 的 `waitUntil()`
  - **Netlify Functions**：使用 Netlify 的 `context.waitUntil()`
  - **Cloudflare Workers**：使用 Cloudflare 的 `ctx.waitUntil()`
  - **Node HTTP / Vercel Node**：直接等待

## 示例：在响应后记录日志

```typescript
import VCLight from "vclight";
import { waitUntil } from "vclight";

const app = new VCLight();

app.use({
    async process(_request, response) {
        response.response = "OK";
        
        // 在响应后调度日志记录
        waitUntil(
            logEvent("request_processed", {
                status: response.status,
                timestamp: new Date().toISOString()
            })
        );
    },
    async post() {}
});

async function logEvent(event: string, data: any) {
    return fetch("https://logs.example.com/api/events", {
        method: "POST",
        body: JSON.stringify({ event, data })
    });
}
```

