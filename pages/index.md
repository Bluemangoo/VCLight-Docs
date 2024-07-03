---
layout: home

title: VCLight
titleTemplate: A framework for Vercel Serverless Function

hero:
  name: VCLight
  text: |
    A Framework
    For Serverless
  tagline: |
    Unleash the full potential of serverless,
    And build your world on it.
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/Bluemangoo/VCLight
  image:
    src: /vclight.png
    alt: VCLight Logo

features:
  - icon: 📝
    title: Focus on Your Logic
    details: Write your logic, and let VCLight handle the rest.
  - icon: ▲
    title: Powered by Vercel
    details: Instant server start, lightning fast hot updates, and other extensions brought by Vercel
  - icon: 📦
    title: Middleware Based
    details: Use middleware to extend the functionality of your app, and make it more powerful. Also find third-party modules in npm.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #FFCC00 30%, #FFFF00);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #FFCC00 50%, #FFFF00 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
