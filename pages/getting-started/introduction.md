---
prev: false
next:
    text: Getting Started
    link: /getting-started/getting-started
---

# Introduction

VCLight is a lightweight middleware framework for serverless and edge-style request handling.

## What is VCLight?

VCLight lets you process requests through a middleware pipeline and then expose the app through different handlers:

- `httpHandler()` for Node HTTP
- `vercelHandler()` for Vercel Node runtime
- `vercelFunctionHandler()` for Vercel Functions
- `netlifyHandler()` for Netlify Functions
- `cloudflareHandler()` for Cloudflare Workers

You can start from a blank app or use `@vclight/router` to map URL paths to handlers quickly.

::: tip
**Prerequisites:**

The rest of the docs assume basic JavaScript and TypeScript familiarity.
:::
