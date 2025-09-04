/* 特殊页面路由配置 */

import type { RouteRecordRaw } from "vue-router";
import { views } from "./routesMaps";

/* ========== */

export const specialRoutes: Array<RouteRecordRaw> = [
    {
        // 重定向到首页
        path: "/",
        redirect: "/index",
    },
    {
        // 重定向到原创角色
        path: "/oc",
        redirect: "/original-character",
    },
    {
        // 重定向到致谢页面
        path: "/thanks",
        redirect: "/acknowledgments",
    },
    {
        // 404 页面
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: views.notFound,
        meta: {
            title: "404 - 页面不存在",
            disableZoom: true,
        },
    },
];
