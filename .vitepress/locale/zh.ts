import { DefaultTheme } from "vitepress";

export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "入门指南",
            link: "/zh/getting-started/introduction/",
            activeMatch: "/zh/guide/"
        }
    ];
}

export function sidebar(): DefaultTheme.SidebarMulti {
    return {
        "/zh/getting-started/": {
            base: "/zh/",
            items: [
                sidebarItem.gettingStarted(false)
            ]
        }
    };
}

const sidebarItem = {
    gettingStarted(collapsed: boolean): DefaultTheme.SidebarItem {
        return {
            text: "立即开始",
            collapsed,
            items: [
                {
                    text: "介绍",
                    link: "/getting-started/introduction"
                },
                {
                    text: "立即开始",
                    link: "/getting-started/getting-started"
                },
                {
                    text: "创建一个应用",
                    link: "/getting-started/creating-an-application"
                },
                {
                    text: "创建一个中间件",
                    link: "/getting-started/creating-a-middleware"
                },
                {
                    text: "路由请求",
                    link: "/getting-started/routing-requests"
                }
            ]
        };
    }
};

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
    zh: {
        placeholder: "搜索文档",
        translations: {
            button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
            },
            modal: {
                searchBox: {
                    resetButtonTitle: "清除查询条件",
                    resetButtonAriaLabel: "清除查询条件",
                    cancelButtonText: "取消",
                    cancelButtonAriaLabel: "取消"
                },
                startScreen: {
                    recentSearchesTitle: "搜索历史",
                    noRecentSearchesText: "没有搜索历史",
                    saveRecentSearchButtonTitle: "保存至搜索历史",
                    removeRecentSearchButtonTitle: "从搜索历史中移除",
                    favoriteSearchesTitle: "收藏",
                    removeFavoriteSearchButtonTitle: "从收藏中移除"
                },
                errorScreen: {
                    titleText: "无法获取结果",
                    helpText: "你可能需要检查你的网络连接"
                },
                footer: {
                    selectText: "选择",
                    navigateText: "切换",
                    closeText: "关闭",
                    searchByText: "搜索提供者"
                },
                noResultsScreen: {
                    noResultsText: "无法找到相关结果",
                    suggestedQueryText: "你可以尝试查询",
                    reportMissingResultsText: "你认为该查询应该有结果？",
                    reportMissingResultsLinkText: "点击反馈"
                }
            }
        }
    }
};
