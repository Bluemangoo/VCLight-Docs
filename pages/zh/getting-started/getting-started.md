---
prev: 
    text: 简介
    link: /zh/getting-started/introduction
next: 
    text: 创建一个应用
    link: /zh/getting-started/creating-an-application
---

# 快速开始

## 在开始之前

在开始之前，你需要完成以下事情：

- 创建一个 [Vercel](https://vercel.com/) 账号
- 创建一个 Vercel 项目

你可以选择[直接开始](#创建一个-vclight-应用)或者[使用VCLight Cli开始](#使用-vclight-cli-开始)（推荐）。

## 创建一个 VCLight 应用

在本节中，我们将介绍如何在本地搭建一个空白的 VCLight 项目。创建的项目将使用 TypeScript ，并且使用基于 Vercel 的本地构建和调试。

当然，如果你偏好 JavaScript ，你也可以选择 JavaScript ，但是接下来的步骤可能需要进行一些调整。

首先，确保你安装了最新版本的 [Node.js](https://nodejs.org/)

然后创建一个空的项目
```shell
$ npm init -y
```

### 安装依赖

接下来，我们需要安装 Vercel 和 VCLight 的包，还有ts类型支持。

::: code-group
```shell [npm]
$ npm install vercel vclight
$ npm install @vercel/node -D
```

```shell [yarn]
$ yarn add vercel vclight
$ yarn add @vercel/node -D
```

```shell [pnpm]
$ pnpm add vercel vclight
$ pnpm add @vercel/node -D
```
:::

### 创建入口点

接下来，你需要创建项目的入口点文件 `src/main.ts`

```TypeScript
import VCLight from "vclight";
import { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = async function(request:VercelRequest, response:VercelResponse) {
    const app = new VCLight();
    //在此处添加插件
    await app.fetch(request, response);
};
```

### 路由流量

接下来，你需要在根目录新建 `vercel.json` 文件以配置 vercel 的行为，使得所有请求都经过这个云函数：

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
      "dest": "src/main.ts"
    }
  ]
}
```

至此，一个空白项目已经搭建好了。你可以在[本地调试](##本地调试)或者上传到云端。

::: info
现在的应用在访问时会报错，因为我们还没有为其处理请求并响应。在下一个章节，你将学会如何创建一个插件来响应请求。
:::

## 使用 VCLight Cli 开始

### 创建项目

::: code-group
```shell [npm]
$ npx install -g @vclight/cli@latest
```

```shell [yarn]
$ yarn dlx @vclight/cli@latest
```

```shell [pnpm]
$ pnpx  @vclight/cli@latest
```
:::

你需要将 `$projectName` 替换为你需要创建的项目名称。

## 本地调试

你可以使用以下命令在本地调试你的应用：

```shell
$ npx vercel dev
```

::: tip
你可以将调试指令添加到 `package.json` 中以使其更加方便：

```json
"scripts": {
  "dev": "vercel dev"
},
```
:::

如果你已经将调试指令添加到 `package.json` 中了（模板项目默认添加），你可以使用以下指令更加便捷的调试：

::: code-group
```shell [npm]
$ npm run serve
```

```shell [yarn]
$ yarn run serve
```

```shell [pnpm]
$ pnpm run serve
```
:::
