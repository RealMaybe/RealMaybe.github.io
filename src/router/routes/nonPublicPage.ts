/* 非标准路由 */

import type { RouteRecordRaw } from "vue-router";
import { views, components } from "./routesMaps";

/* ========== */

export const nonPublicPages: Array<RouteRecordRaw> = [
    {
        path: "/acknowledgments",
        component: views.acknowledgments,
        meta: {
            title: "致谢",
            disableZoom: true,
            nav: true,
        },
    },
    {
        path: "/change-log",
        component: views.changeLog,
        meta: {
            title: "更新日志",
            disableZoom: true,
            nav: true,
        },
    },
    {
        path: "/blog",
        component: views.blog,
        meta: {
            title: "博客",
            disableZoom: true,
            nav: true,
        },
        children: [
            {
                path: "",
                name: "blog",
                component: components.blog.index,
                meta: {
                    title: "博客",
                    disableZoom: true,
                },
            },
        ],
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
