---
prev:
    text: Create a Middleware
    link: /getting-started/creating-a-middleware
next:
    text: Routing Requests
    link: /getting-started/routing-requests
---

# Using Router

`@vclight/router` is an official middleware package that maps URL paths to handlers.

## Install

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

## Create and apply a router instance

```typescript
import VCLight from "vclight";
import VCLightRouter from "@vclight/router";

const app = new VCLight();
const router = new VCLightRouter();

app.use(router);
```

## Add routes

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

## Router options

```typescript
const router = new VCLightRouter({
    buildInRouters: { _404: true },
    use404Router: true
});
```

- `buildInRouters._404`: whether to register a built-in `/404/` handler (default `true`)
- `use404Router`: whether to return the `/404/` handler when no route matches (default `true`)

