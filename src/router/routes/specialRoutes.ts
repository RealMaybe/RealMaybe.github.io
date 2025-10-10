/* 特殊页面路由配置 */

import type { RouteRecordRaw } from "vue-router";
import { views } from "./routesMaps";

/* ========== */

// 重定向到原创角色
const oc: Array<RouteRecordRaw> = [
    {
        path: "/oc",
        redirect: "/original-character",
    },
    {
        // 原创角色子页面路由转发
        path: "/oc/:path(.*)",
        redirect: to => `/original-character/${to.params.path}`,
    },
];

// 重定向到感谢页面
const thanks: Array<RouteRecordRaw> = [
    {
        path: "/thank",
        redirect: "/acknowledgments",
    },
    {
        path: "/thank/:path(.*)",
        redirect: to => `/acknowledgments/${to.params.path}`,
    },
    {
        path: "/thanks",
        redirect: "/acknowledgments",
    },
    {
        path: "/thanks/:path(.*)",
        redirect: to => `/acknowledgments/${to.params.path}`,
    },
];

// 重定向到文档页面
const document: Array<RouteRecordRaw> = [
    {
        path: "/doc",
        redirect: "/documents",
    },
    {
        path: "/doc/:path(.*)",
        redirect: to => `/documents/${to.params.path}`,
    },
    {
        path: "/docs",
        redirect: "/documents",
    },
    {
        path: "/docs/:path(.*)",
        redirect: to => `/documents/${to.params.path}`,
    },
    {
        path: "/document",
        redirect: "/documents",
    },
    {
        path: "/document/:path(.*)",
        redirect: to => `/documents/${to.params.path}`,
    },
];

/* ========== */

export const specialRoutes: Array<RouteRecordRaw> = [
    {
        // 重定向到首页
        path: "/",
        redirect: "/index",
    },
    ...oc,
    ...thanks,
    ...document,
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
