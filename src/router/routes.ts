/* 路由配置文件 */

import type { RouteRecordRaw } from "vue-router";

/* ========== */

import IndexPage from "@/views/IndexPage.vue";

/* ========== */

// 定义视图组件映射
export const views = {
    notFound: () => import("@/views/NotFoundPage.vue"), // 404
    index: IndexPage, // 首页
    about: () => import("@/views/AboutPage.vue"), // 关于
    blog: () => import("@/views/BlogPage.vue"), // 博客
    work: () => import("@/views/WorkPage.vue"), // 作品
    originalCharacter: () => import("@/views/OriginalCharacterPage.vue"), // 原创角色
};

// 定义子组件元素
export const components = {
    work: {},
};

/* ========== */

// 普通页面路由配置
const pages: Array<RouteRecordRaw> = [
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
    /* {
        path: "/blog",
        component: views.blog,
        meta: {
            title: "博客",
            disableZoom: true,
            nav: true,
        }
    }, */
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
        path: "/original-character",
        component: views.originalCharacter,
        meta: {
            title: "原创角色",
            disableZoom: true,
            nav: true,
        },
    },
];

/* ========== */

// 特殊页面路由配置
const specialRoutes: Array<RouteRecordRaw> = [
    {
        // 重定向到首页
        path: "/",
        redirect: "/index",
    },
    {
        path: "/oc",
        redirect: "/original-character",
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

/* ========== */

// 导出路由配置
export const routes = [
    ...pages,
    ...specialRoutes.filter(r => r.path !== "/:pathMatch(.*)*"),
    specialRoutes.find(r => r.path === "/:pathMatch(.*)*")!,
];
