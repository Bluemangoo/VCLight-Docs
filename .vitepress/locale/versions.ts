import { DefaultTheme } from "vitepress";

export default function versions():DefaultTheme.NavItemWithLink[]{
    return [
        {
            text: "v3 (latest)",
            link: "https://vclight.bluemangoo.net/"
        },
        {
            text: "v2",
            link: "https://vclight-docs-git-v2-bluemangoo-projects.vercel.app/"
        }
    ]
}