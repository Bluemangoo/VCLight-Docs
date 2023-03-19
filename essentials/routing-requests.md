# Routing Requests

In this section, you will learn how to use `vercel.json` to route requests to your VCLight instance.

{% hint style="info" %}
**Tips:** Detailed documentation about `vercel.json` can be found [here](https://vercel.com/docs/project-configuration)
{% endhint %}

## Routing all Requests to the Instance

This will make all traffic to go through the instance.

```Json
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

Among them, the `builds` item indicates how the project will be built.

It should be noted that, if `builds` item is missing, Vercel will use the `build` script in `package.json` to build.

The `routes` item indicates where the request should be routed.

If several routes conflict, Vercel will use the one that is higher in the list.

## Routing Part of Requests to the Instance

If you just want the `/api/*` part to go through the instance, you should fill the `routes` item like this:

```Json
"routes": [
  {
    "src": "/api/(.*)",
    "dest": "src/main.ts"
  }
]
```

If you want static files to not pass through the instance, you can fill `vercel.json` like this:

```Json
{
  "builds": [
    {
      "src": "public/assets/*",
      "use": "@vercel/static"
    },
    {
      "src": "src/*",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/assets/(?<file>[^/]*)",
      "dest": "public/assets/$file"
    },
    {
      "src": "/(.*)",
      "dest": "src/main.ts"
    }
  ]
}
```
