/* 普通页面路由配置 */

import type { RouteRecordRaw } from "vue-router";
import { views } from "./routesMaps";
import { components } from "./routesMaps";

/* ========== */

export const publicPages: Array<RouteRecordRaw> = [
    {
        path: "/index",
        component: views.index,
        meta: {
            title: "首页导览",
            disableZoom: true,
            nav: true,
        },
    },
    {
        path: "/about",
        component: views.about,
        meta: {
            title: "个人简介",
            disableZoom: true,
            nav: true,
        },
    },
    {
        path: "/work",
        component: views.work,
        meta: {
            title: "作品集锦",
            disableZoom: true,
            nav: true,
        },
    },
    {
        path: "/shop",
        meta: {
            title: "精品小店",
            nav: true,
        },
        children: [
            {
                path: "",
                component: views.shop,
                meta: {
                    disableZoom: true,
                },
            },
            {
                path: "policies",
                component: components.shop.shopPolicies,
                meta: {
                    title: "店铺政策",
                    disableZoom: true,
                },
            },
        ],
    },
];
