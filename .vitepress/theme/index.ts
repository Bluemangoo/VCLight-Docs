// .vitepress/theme/index.js
import { h } from "vue";
import DefaultTheme from "vitepress/theme";

import "./index.css";

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null);
    }
};
