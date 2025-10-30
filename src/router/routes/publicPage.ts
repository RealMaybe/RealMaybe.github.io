/* 普通页面路由配置 */

import type { RouteRecordRaw } from "@tsTypes";
import { views } from "./routesMaps";
import { components } from "./routesMaps";
import { createRoute } from "../factory";

/* ========== */

export const publicPages: Array<RouteRecordRaw> = [
    createRoute("/index", views.index, "首页"),
    createRoute("/about", views.about, "关于"),
    createRoute("/work", views.work, "作品"),
    createRoute("/shop", void 0, "小店", void 0, [
        createRoute("", views.shop, "精品小店"),
        createRoute("policies", components.shop.shopPolicies, "店铺政策"),
    ]),
];
