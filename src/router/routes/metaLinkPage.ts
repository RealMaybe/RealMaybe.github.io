/* 功能路由 */

import type { RouteRecordRaw } from "vue-router";
import { views } from "./routesMaps";

/* ========== */

export const metaLinkPage: Array<RouteRecordRaw> = [
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
        path: "/acknowledgments",
        component: views.acknowledgments,
        meta: {
            title: "致谢名单",
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
            nav: false,
        },
    },
    /* {
        path: "/blog",
        component: views.blog,
        meta: {
            nav: true,
        },
        children: [
            {
                path: "",
                name: "blog-display",
                component: components.blog.display,
                meta: {
                    title: "博客",
                    disableZoom: true,
                },
            },
            {
                path: "list",
                name: "blog-list",
                component: components.blog.list,
                meta: {
                    title: "博客列表",
                    disableZoom: true,
                },
            },
            {
                path: "detail",
                name: "blog-detail",
                component: components.blog.detail,
                meta: {
                    title: "博客详情",
                    disableZoom: true,
                },
            },
            {
                path: "update",
                name: "blog-update",
                component: components.blog.update,
                meta: {
                    title: "博客更新记录",
                    disableZoom: true,
                },
            },
        ],
    }, */
];
