---
prev: 
    text: 快速开始
    link: /zh/getting-started/getting-started
next: 
    text: 创建一个中间件
    link: /zh/getting-started/create-a-middleware
---

# 创建一个应用

在这一节中，你会了解到我们在上一节中创建的项目各个文件的含义。

如果你不想了解这么多，你可以直接跳过这一节。

### 创建实例

首先，我们需要创建一个新的 **应用实例**。并将它导出。

```TypeScript
const app = new VCLight();
export default app;
```

接下来的部分中，你可以使用`app.use(middleware)`来应用中间件实例。

::: tip

我们不建议你在这个部分编写你的主体代码。

在接下来的教程中，主体代码会在`src/app/` 底下。
:::

## 入口点文件

对于 Vercel 来说，它需要一个导出的函数。

```TypeScript
export default app.vercelHandler();
```
