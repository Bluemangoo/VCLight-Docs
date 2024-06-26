import { DefaultTheme } from "vitepress";
import versions from "./versions";

export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Guide",
            link: "/getting-started/introduction/",
            activeMatch: "/guide/"
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
                sidebarItem.gettingStarted(false),
                sidebarItem.reference(true)
            ]
        },
        "/reference/": {
            base: "",
            items: [
                sidebarItem.gettingStarted(true),
                sidebarItem.reference(false)
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
    },
    reference(collapsed: boolean): DefaultTheme.SidebarItem {
        return {
            text: "Reference",
            collapsed,
            items: [
                {
                    text: "VCLightRequest",
                    link: "/reference/vclight-request"
                },
                {
                    text: "VCLightResponse",
                    link: "/reference/vclight-response"
                }
            ]
        };
    }
};
