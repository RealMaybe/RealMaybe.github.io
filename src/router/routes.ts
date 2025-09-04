/* 路由配置文件 */

import { publicPages } from "./routes/publicPage";
import { nonPublicPages } from "./routes/nonPublicPage";
import { specialRoutes } from "./routes/specialRoutes";

/* ========== */

// 导出路由配置
export const routes = [
    ...publicPages,
    ...nonPublicPages,
    ...specialRoutes.filter(r => r.path !== "/:pathMatch(.*)*"),
    specialRoutes.find(r => r.path === "/:pathMatch(.*)*")!,
];
