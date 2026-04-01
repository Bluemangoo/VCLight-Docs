---
prev:
    text: Using Router
    link: /getting-started/using-router
next: false
---

# Routing Requests

Use `vercel.json` to route traffic into your VCLight entry function.

::: tip
See Vercel project configuration docs: [Project Configuration](https://vercel.com/docs/project-configuration)
:::

## Route all requests

```json
{
  "builds": [
    {
      "src": "src/*",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/vercelEntry.ts"
    }
  ]
}
```

## Route only part of requests

If only `/api/*` should go through VCLight:

```json
{
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "src/vercelEntry.ts"
    }
  ]
}
```

## Keep static assets outside VCLight

```json
{
  "builds": [
    {
      "src": "public/assets/*",
      "use": "@vercel/static"
    },
    {
      "src": "src/*",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/assets/(?<file>[^/]*)",
      "dest": "public/assets/$file"
    },
    {
      "src": "/(.*)",
      "dest": "src/vercelEntry.ts"
    }
  ]
}
```
