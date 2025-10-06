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
        // 原创角色子页面路由转发
        path: "/oc/:path(.*)",
        redirect: to => `/original-character/${to.params.path}`,
    },
    {
        // 重定向到致谢页面
        path: "/thanks",
        redirect: "/acknowledgments",
    },
    {
        // 致谢子页面路由转发
        path: "/thanks/:path(.*)",
        redirect: to => `/acknowledgments/${to.params.path}`,
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
