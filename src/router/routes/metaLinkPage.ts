/* 功能路由 */

import type { RouteRecordRaw } from "@tsTypes";
import { views, components } from "./routesMaps";

/* ========== */

/**
 * 导航栏内的路由
 */
const used: Array<RouteRecordRaw> = [
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
        meta: {
            title: "致谢专栏",
            nav: true,
        },
        children: [
            {
                path: "",
                component: views.acknowledgments,
                meta: {
                    disableZoom: true,
                },
            },
            /* {
                path: "contribution-guidelines",
                component: components.acknowledgments.ContributionGuidelines,
                meta: {
                    title: "建言献策",
                    disableZoom: true,
                },
            }, */
        ],
    },
];

/* ========== */

/**
 * 非导航栏内的路由
 */
const notNav: Array<RouteRecordRaw> = [
    {
        path: "/original-character",
        component: views.originalCharacter,
        meta: {
            title: "原创角色",
            disableZoom: true,
            nav: false,
        },
    },
    {
        path: "/documents",
        component: views.document,
        meta: {
            title: "文档",
            disableZoom: true,
            nav: false,
        },
        children: [
            // {
            //     path: "idea",
            //     component: components.document.idea,
            // },
        ],
    },
];

/* ========== */

/**
 * 功能路由
 */
export const metaLinkPage: Array<RouteRecordRaw> = [...used, ...notNav];
