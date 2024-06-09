import { DefaultTheme } from "vitepress";
import versions from "./versions";

export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Guide",
            link: "/zh/getting-started/introduction/",
            activeMatch: "/zh/guide/"
        },
        {
            text: "History Versions",
            items: versions()
        }
    ];
}

export function sidebar(): DefaultTheme.SidebarMulti {
    return {
        "/getting-started/": {
            base: "",
            items: [
                sidebarItem.gettingStarted(false)
            ]
        }
    };
}

const sidebarItem = {
    gettingStarted(collapsed: boolean): DefaultTheme.SidebarItem {
        return {
            text: "Getting Started",
            collapsed,
            items: [
                {
                    text: "Introduction",
                    link: "/getting-started/introduction"
                },
                {
                    text: "Getting Started",
                    link: "/getting-started/getting-started"
                },
                {
                    text: "Creating an Application",
                    link: "/getting-started/creating-an-application"
                },
                {
                    text: "Creating a Middleware",
                    link: "/getting-started/creating-a-middleware"
                },
                {
                    text: "Routing Requests",
                    link: "/getting-started/routing-requests"
                }
            ]
        };
    }
};
