/* 路由配置文件 */

import type { RouteRecordRaw } from "@tsTypes";
import { views } from "./routes/routesMaps";

import { publicPages } from "./routes/publicPage";
import { metaLinkPage } from "./routes/metaLinkPage";
import { specialRoutes } from "./routes/specialRoutes";

/* ========== */

// 导出路由配置
export const routes: Array<RouteRecordRaw> = [
    ...publicPages,
    ...metaLinkPage,
    ...specialRoutes,
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
