# Quick Start

## Before Starting

Before starting, you have to complete the following things:

- Create a [Vercel](https://vercel.com/) account;
- Create a Vercel Project.

## Create a VCLight app

In this section we will introduce how to build an empty project on your local machine. Created projects will use TypeScript and use Vercel-based native builds and debugging.

Of course you can choose JavaScriptif you prefer it, but the following steps may require some adjustments.

First, make sure you have an up-to-date version of [Node.js](https://nodejs.org/).

Then create an empty project
```shell
$ npm init -y
```

### Install Requirements

Next, we need to install the packages of Vercel and VCLight.

You can choose your preferred package manager for this step.

Use npm:
```shell
$ npm install vercel vclight
```

Use yarn:
```shell
$ yarn add vercel vclight
```

USe pnpm:
```shell
$ pnpm add vercel vclight
```

### Create the Entry Point

Next, you need to create the project's entry point file `src/main.ts`

```TypeScript
import VCLight from "vclight";

module.exports = async function(request, response) {
    const app = new VCLight();
    //Add the plugins here
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

{% hint style="info" %}
The application will report an error when accessed because we haven't respond the request for it. In the next section, you will learn how to create a plugin to respond to requests.
{% endhint %}

## Local Debugging

You can debug your application locally using the following command.

```shell
$ npx vercel dev
```

{% hint style="info" %}
**Tip:** You can add the debug command to `package.json` to make it easier.

```json
"scripts": {
  "serve": "vercel dev"
},
```
{% endhint %}

If you have already added the debug script into `package.json` (added by default for template projects), you can debug more easily using the following script.

Use npm：
```shell
$ npm run serve
```

USe yarn：
```shell
$ yarn run serve
```

USe pnpm
```shell
$ pnpm run serve
```

Which command to use depends on your preferred package manager.
