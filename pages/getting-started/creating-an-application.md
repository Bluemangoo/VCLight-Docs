---
prev:
    text: Getting Started
    link: /getting-started/getting-started
next:
    text: Create a Middleware
    link: /getting-started/creating-a-middleware
---

# Creating an Application

Create a VCLight app instance in `src/app/app.ts`:

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

Then register middleware with `app.use(...)`.

```typescript
import router from "./router";

app.use(router);
```

## Entry files

Choose one or more handlers based on your deployment target.

### Vercel

```typescript
import app from "./app/app";

export default app.vercelHandler();
```

### Vercel Functions

Vercel Functions (Edge Runtime) require wrapping with a `fetch` property:

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
