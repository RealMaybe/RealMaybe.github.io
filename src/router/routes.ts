/* 路由配置文件 */

import type { RouteRecordRaw } from "@tsTypes";
import { views } from "./routes/routesMaps";

import { publicPages } from "./routes/publicPage";
import { metaLinkPage } from "./routes/metaLinkPage";
import { specialRoutes } from "./routes/specialRoutes";
import { createHiddenRoute } from "./factory";

/* ========== */

export * from "./routes/externalLinks";
export { publicPages, metaLinkPage };

// 导出路由配置
export const routes: Array<RouteRecordRaw> = [
    ...publicPages,
    ...metaLinkPage,
    ...specialRoutes,
    createHiddenRoute("/:pathMatch(.*)*", views.notFound, "NotFound", "404 - 页面不存在"),
];
