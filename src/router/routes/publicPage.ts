/* 普通页面路由配置 */

import type { RouteRecordRaw } from "@tsTypes";
import { views } from "./routesMaps";
import { components } from "./routesMaps";
import { createRoute, createHiddenRoute } from "../factory";

/* ========== */

/**
 * 普通页面路由
 */
export const publicPages: Array<RouteRecordRaw> = [
    createRoute("/index", views.index, "首页"),
    createRoute("/about", views.about, "关于"),
    createRoute("/work", views.work, "作品"),
    /* createHiddenRoute("/blog", views.blog, "博客", void 0, [
        createRoute("", components.blog.list, ""),
        createHiddenRoute("/:pathMatch(.*)*", components.blog.show, "博客文章"),
    ]), */
    createRoute("/shop", void 0, "小店", void 0, [
        createRoute("", views.shop, "小店"),
        createHiddenRoute("policies", components.shop.shopPolicies, "店铺政策"),
    ]),
];
