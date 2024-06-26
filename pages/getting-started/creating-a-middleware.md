---
prev:
    text: Create an Application
    link: /getting-started/create-an-application
next:
    text: Routing Requests
    link: /getting-started/routing-requests
---

# Creating a Middleware

In this section, you will learn how to create and apply a middleware.

## Middleware Interface

The middleware interface is declared like this:

```Typescript
export default interface VCLightMiddleware {
    process(request: VCLightRequest, response: VCLightResponse, responseContent: VCLightResponse, app: VCLight): Promise<void>;

    post(request: VCLightRequest, response: VCLightResponse, responseContent: VCLightResponse, app: VCLight): Promise<void>;
}
```

This means that you need to have two functions in your middleware, `process` and `post`.

In `process`, you should include the request processing, and in `post`, you should include the processing after the request is processed. Note that the earlier the middleware is applied, the earlier the `process` function is called, and the later the `post` function is called.

## Creating a Middleware Class

The middleware class needs to meet the `VCLightMiddleware` interface. [VCLightRequest](../../reference/vclight-request) and [VCLightResponse](../../reference/vclight-response) are VCLight's request and response classes.

```Typescript
export default interface VCLightMiddleware {
    process(request: VCLightRequest, response: VCLightResponse, responseContent: VCLightResponse, app: VCLightApp): Promise<void>;

    post(request: VCLightRequest, response: VCLightResponse, responseContent: VCLightResponse, app: VCLightApp): Promise<void>;
}
```

Now you can fill in the code in these two functions.

For example, if you want to display "Hello!" when accessing `/hello/`, you can do this:

```Typescript
class ExampleMiddleware implements VCLightMiddleware {
    async process(request: VCLightRequest, response: VCLightResponse, responseContent: Response, app: VCLightApp): Promise<void> {
        if(url.parse(<string>request.url).pathname == "/hello/") {
            responseContent.response = "Hello!";
        }
    }

    async post(request: VCLightRequest, response: VCLightResponse, app: VCLightApp): Promise<void> {
        // We don't need to do anything here for now
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
