---
prev: 
    text: Getting Started
    link: /getting-started/getting-started
next: 
    text: Create a Middleware
    link: /getting-started/creating-a-middleware
---

# Creating an Application

In this section, you will learn about the files of the project we created in the previous section.

Tips: This may be a repeat of the previous section. If you don't want to learn it, you can skip this section.

First, we need to create a new **application instance**. And export it.

```TypeScript
const app = new VCLight();
export default app;
```

In the following sections, you can use `app.use(middleware)` to apply the middleware instance.

::: tip
We do not recommend that you write your main code in this section.

In the following tutorials, the main code will be under `src/app/`.
:::

## Entry Point File

For Vercel, it needs an exported function.

```TypeScript
export default app.vercelHandler();
```
