/* 路由配置文件 */

import { publicPages } from "./routes/publicPage";
import { metaLinkPage } from "./routes/metaLinkPage";
import { specialRoutes } from "./routes/specialRoutes";

/* ========== */

// 导出路由配置
export const routes = [
    ...publicPages,
    ...metaLinkPage,
    ...specialRoutes.filter(r => r.path !== "/:pathMatch(.*)*"),
    specialRoutes.find(r => r.path === "/:pathMatch(.*)*")!,
];
