---
prev: 
    text: Getting Started
    link: /getting-started/getting-started
next: 
    text: Create a Middleware
    link: /getting-started/create-a-middleware
---

# Creating an Application

In this section, you will learn how to create an VCLight application.

Tips: This may be a repeat of the previous section.

If you don't want to learn it, you can skip this section.

## Entry Point

For Vercel, it needs an exported function.

```TypeScript
module.exports = async function(request:VercelRequest, response:VercelResponse) {};
```

Inside this function, we can write our main code.

### Main Function

First, we need to create a new **VCLight Instance**.

```TypeScript
const app = new VCLight();
```

you can use `app.use(middleware)` to apply the middleware instance.

::: tip

It is not recommended writing main part of your code here.

In the following sections, we will write the main part of code under `src/app/`.
:::
