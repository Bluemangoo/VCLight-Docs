---
prev: 
    text: Introduction
    link: /getting-started/introduction
next: 
    text: Create an Application
    link: /getting-started/creating-an-application
---

# Getting Started

## Before Starting

Before starting, you have to complete the following things:

- Create a [Vercel](https://vercel.com/) account;
- Create a Vercel Project.

## Create a VCLight app

In this section we will introduce how to build an empty project on your local machine. Created projects will use TypeScript and use Vercel-based native builds and debugging.

Of course you can choose JavaScript if you prefer it, but the following steps may require some adjustments.

First, make sure you have an up-to-date version of [Node.js](https://nodejs.org/).

Then create an empty project

```shell
$ npm init -y
```

### Install Requirements

Next, we need to install the packages of Vercel and VCLight, as well as ts type support

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

### Create the Entry Point

Next, you need to create the project's entry point file `src/main.ts`

```TypeScript
import VCLight from "vclight";
import { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = async function(request:VercelRequest, response:VercelResponse) {
    const app = new VCLight();
    //Add the middlewares here
    await app.fetch(request, response);
};
```

### Routing Traffic

Next, you need to create a `vercel.json` file in the root directory to configure the vercel project, so that all requests will go through this function:

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

So far, a blank project has been built. You can [debug it locally](#local-debugging) or upload it to the cloud.

::: info
The application will report an error when accessed because we haven't respond the request for it. In the next section, you will learn how to create a plugin to respond to requests.
:::

## Start with VCLight Cli

### Create a Project

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

You should replace `$projectName` to your project name.

## Local Debugging

You can debug your application locally using the following command.

```shell
$ npx vercel dev
```

::: tip
You can add the debug command to `package.json` to make it easier.

```json
"scripts": {
  "dev": "vercel dev"
},
```
:::

If you have already added the debug script into `package.json` (added by default for template projects), you can debug more easily using the following script.

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
