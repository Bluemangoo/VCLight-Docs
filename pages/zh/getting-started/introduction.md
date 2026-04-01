---
prev: false
next:
    text: 快速开始
    link: /zh/getting-started/getting-started
---

# 简介

VCLight 是一个轻量的中间件框架，用于 Serverless / Edge 风格的请求处理。

## 什么是 VCLight？

VCLight 通过中间件流水线处理请求，并可按部署目标导出不同 handler：

- `httpHandler()`：Node HTTP
- `vercelHandler()`：Vercel Node 运行时
- `vercelFunctionHandler()`：Vercel Functions
- `netlifyHandler()`：Netlify Functions
- `cloudflareHandler()`：Cloudflare Workers

你可以从空白应用开始，也可以配合 `@vclight/router` 快速完成路由。

::: tip
**预备知识：**

建议先具备基础的 JavaScript / TypeScript 知识。
:::
