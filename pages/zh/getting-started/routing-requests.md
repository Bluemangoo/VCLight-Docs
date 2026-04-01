---
prev:
    text: 使用 Router
    link: /zh/getting-started/using-router
next: false
---

# 路由请求

通过 `vercel.json` 将请求路由到 VCLight 入口函数。

::: tip
Vercel 配置文档：[Project Configuration](https://vercel.com/docs/project-configuration)
:::

## 所有请求都交给 VCLight

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

## 仅路由部分请求

如果只希望 `/api/*` 走 VCLight：

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

## 让静态资源不经过 VCLight

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
