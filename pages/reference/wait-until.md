---
prev: false
next: false
---

# waitUntil API

The `waitUntil` function allows you to schedule background tasks that will be awaited after the response is sent.

## Import

```typescript
import { waitUntil } from "vclight";
```

## Usage

```typescript
import { waitUntil } from "vclight";

// Schedule a background task
waitUntil(
    fetch("https://example.com/log", {
        method: "POST",
        body: JSON.stringify({ event: "user_action" })
    })
);
```

## How it works

- Tasks are collected during request processing
- After sending the response, VCLight waits for all scheduled tasks to complete
- Platform-specific behavior:
  - **Vercel Functions**: Uses Vercel's `waitUntil()`
  - **Netlify Functions**: Uses Netlify's `context.waitUntil()`
  - **Cloudflare Workers**: Uses Cloudflare's `ctx.waitUntil()`
  - **Node HTTP / Vercel Node**: Waits directly

## Example: Logging after response

```typescript
import VCLight from "vclight";
import { waitUntil } from "vclight";

const app = new VCLight();

app.use({
    async process(_request, response) {
        response.response = "OK";
        
        // Schedule log after response
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

