import { defineConfig } from "vitepress";
import { nav as navEn, sidebar as sidebarEn } from "./locale/en";
import { nav as navZh, sidebar as sidebarZh } from "./locale/zh";

export default defineConfig({
    srcDir: "./pages",

    rewrites: {
        "index.md": "index.md",
        ":file(.*)/index.md": ":file/index.md",
        ":file(.*).md": ":file/index.md"
    },

    locales: {
        root: {
            label: "English",
            lang: "en",
            title: "VCLight",
            titleTemplate: "VCLight Docs",
            description: "A lightweight framework for serverless and edge handlers",
            themeConfig: {
                editLink: {
                    pattern:
                        "https://github.com/Bluemangoo/VCLight-Docs/edit/master/:path",
                    text: "Edit this page on GitHub"
                },
                nav: navEn(),
                sidebar: sidebarEn()
            },
            head: [["meta", { name: "og:locale", content: "en" }]]
        },
        zh: {
            label: "简体中文",
            lang: "zh",
            link: "/zh/",
            title: "VCLight",
            titleTemplate: "VCLight 文档",
            description: "一个轻量的 Serverless / Edge 处理框架",
            themeConfig: {
                editLink: {
                    pattern:
                        "https://github.com/Bluemangoo/VCLight-Docs/edit/master/:path",
                    text: "在 GitHub 上编辑此页"
                },
                nav: navZh(),
                sidebar: sidebarZh()
            },
            head: [["meta", { name: "og:locale", content: "zh" }]]
        }
    },

    srcExclude: [],

    lastUpdated: false,
    cleanUrls: true,

    markdown: {
        math: true
    },

    sitemap: {
        hostname: "https://vclight.bluemangoo.net/"
    },

    /* prettier-ignore */
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { name: "theme-color", content: "#FF9900" }],
        ["meta", { name: "og:type", content: "website" }],
        ["meta", { name: "og:site_name", content: "VCLight" }]
        // ['meta', { name: 'og:image', content: '' }],
    ],

    themeConfig: {
        logo: { src: "/favicon.ico", width: 24, height: 24 },

        search: {
            provider: "local"
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/Bluemangoo/VCLight" }
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present Bluemangoo"
        }
    }
});
