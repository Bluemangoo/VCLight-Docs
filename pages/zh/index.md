---
layout: home

title: VCLight
titleTemplate: 一个轻量的 Serverless / Edge 处理框架

hero:
  name: VCLight
  text: |
    简单易用的
    Serverless 框架
  tagline: |
    发挥 Serverless 的全部潜力，
    在其上构建你的整个世界。
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/getting-started/getting-started
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/Bluemangoo/VCLight
  image:
    src: /vclight.png
    alt: VCLight Logo

features:
  - icon: 📝
    title: 专注于你的逻辑
    details: 编写你的逻辑，让 VCLight 处理其余的事情。
  - icon: ▲
    title: 基于 Vercel
    details: 瞬间启动服务器，闪电般快速的热更新，以及 Vercel 带来的其他扩展
  - icon: 📦
    title: 基于中间件
    details: 使用中间件扩展你的应用的功能，使其更加强大。也可以在 npm 中找到第三方模块。
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
