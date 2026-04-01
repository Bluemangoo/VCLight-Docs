---
prev:
    text: 简介
    link: /zh/getting-started/introduction
next:
    text: 创建一个应用
    link: /zh/getting-started/creating-an-application
---

# 快速开始

## 开始前准备

- 安装较新的 [Node.js](https://nodejs.org/)（建议 18+）
- 如果要部署到 Vercel，请先准备 [Vercel](https://vercel.com/) 账号

## 使用 VCLight CLI（推荐）

创建项目：

::: code-group
```shell [npm]
npx @vclight/cli create my-vclight-app
```

```shell [pnpm]
pnpx @vclight/cli create my-vclight-app
```
:::

或先全局安装 CLI：

::: code-group
```shell [npm]
npm install -g @vclight/cli
vclight create my-vclight-app
```

```shell [pnpm]
pnpm add -g @vclight/cli
vclight create my-vclight-app
```
:::

CLI 会让你选择：

- 模板：带 Router 或空白模板
- 处理器：Vercel / Netlify / Node HTTP
- 可选功能：Prettier / `.gitignore`

## 手动搭建

::: code-group
```shell [npm]
npm init -y
npm install vclight
npm install -D @types/node typescript
```

```shell [pnpm]
pnpm init
pnpm add vclight
pnpm add -D @types/node typescript
```
:::

如果要使用 Router，还需要安装：

::: code-group
```shell [npm]
npm install @vclight/router
```

```shell [pnpm]
pnpm add @vclight/router
```
:::

## 入口文件示例

### Vercel（Node 运行时）

```typescript
import app from "./app/app";

export default app.vercelHandler();
```

### Node HTTP

```typescript
import * as http from "http";
import app from "./app/app";

const server = http.createServer();
server.on("request", app.httpHandler());
server.listen(3000);
```

### Netlify Functions

```typescript
import app from "../../src/app/app";

export default app.netlifyHandler();
```

## 本地调试

根据你选择的处理器，使用对应脚本：

- `dev:vercel`
- `dev:netlify`
- `dev:http`

例如：

```shell
npm run dev:vercel
```
