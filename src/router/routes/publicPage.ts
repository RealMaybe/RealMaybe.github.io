/* 普通页面路由配置 */

import type { RouteRecordRaw } from "vue-router";
import { views } from "./routesMaps";

/* ========== */

export const publicPages: Array<RouteRecordRaw> = [
    {
        path: "/index",
        component: views.index,
        meta: {
            title: "首页",
            disableZoom: true,
            nav: true,
        },
    },
    {
        path: "/about",
        component: views.about,
        meta: {
            title: "关于",
            disableZoom: true,
            nav: true,
        },
    },
    {
        path: "/work",
        component: views.work,
        meta: {
            title: "作品",
            disableZoom: true,
            nav: true,
        },
    },
    {
        path: "/shop",
        component: views.shop,
        meta: {
            title: "小店",
            disableZoom: true,
            // nav: true,
        },
    },
];
