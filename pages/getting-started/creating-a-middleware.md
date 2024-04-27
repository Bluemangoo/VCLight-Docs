---
prev:
    text: Create an Application
    link: /getting-started/create-an-application
next:
    text: Routing Requests
    link: /getting-started/routing-requests
---

# Creating a Middleware

In this section, you will learn how to create and apply a plugin.

## Middleware Interface

A middleware should implement the `VCLightMiddleware` interface.

```Typescript
export default interface VCLightMiddleware {
    process(request: VercelRequest, response: ServerResponse, responseContent: VCLightResponse, app: VCLight): Promise<void>;

    post(request: VercelRequest, response: ServerResponse, responseContent: VCLightResponse, app: VCLight): Promise<void>;
}
```

This means that your middleware should have two functions, `init` and `process`.

In `init`, you should put the initialization code of the middleware, and in `process`, you should put the code to handle the request.

We recommend you to put the initialization code in the `init` function instead of the constructor. Also, you can do some initialization operations here (like fetching data).

## Creating a Middleware Class

A middleware class should implement the `VCLightMiddleware` interface.

```Typescript
export default interface VCLightMiddleware {
    process(request: VercelRequest, response: ServerResponse, responseContent: VCLightResponse, app: VCLight): Promise<void>;

    post(request: VercelRequest, response: ServerResponse, responseContent: VCLightResponse, app: VCLight): Promise<void>;
}
```

Now you can fill in the code in these two functions.

For example, if you want to show "Hello!" when accessing `/hello/`, you can do this:

```Typescript
class ExampleMiddleware implements VCLightMiddleware {
    async process(request: VercelRequest, response: ServerResponse, responseContent: Response, app: VCLight): Promise<void> {
        if(url.parse(<string>request.url).pathname == "/hello/") {
            responseContent.response = "Hello!";
        }
    }

    async post(request: VercelRequest, app: VCLight): Promise<void> {
        //We don't need to do things here
    }
}
```

## Applying the Middleware

To apply the middleware, you need to create a middleware instance first:

```Typescript
const exampleMiddleware = new ExampleMiddleware();
```

Then, you can use it like this:

```Typescript
app.use(exampleMiddleware);
```

Now, the middleware will be applied to the app.
