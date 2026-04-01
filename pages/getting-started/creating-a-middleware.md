---
prev:
    text: Create an Application
    link: /getting-started/creating-an-application
next:
    text: Using Router
    link: /getting-started/using-router
---

# Creating a Middleware

A middleware must implement `VCLightMiddleware`.

## Middleware interface

```typescript
import { VCLightMiddleware, VCLightRequest, VCLightResponse, VCLightApp } from "vclight";

export default interface VCLightMiddleware {
    process(request: VCLightRequest, response: VCLightResponse, app: VCLightApp): Promise<void>;
    post(request: VCLightRequest, response: VCLightResponse, app: VCLightApp): Promise<void>;
}
```

- `process` runs in registration order
- `post` runs in reverse order after all `process` calls

## Example middleware

```typescript
import { VCLightMiddleware, VCLightRequest, VCLightResponse, VCLightApp } from "vclight";

class ExampleMiddleware implements VCLightMiddleware {
    async process(request: VCLightRequest, response: VCLightResponse, _app: VCLightApp): Promise<void> {
        if (request.url === "/hello/") {
            response.response = "Hello!";
            response.end = true;
        }
    }

    async post(_request: VCLightRequest, _response: VCLightResponse, _app: VCLightApp): Promise<void> {
        // Optional post-processing
    }
}
```

## Apply middleware

```typescript
const exampleMiddleware = new ExampleMiddleware();
app.use(exampleMiddleware);
```
