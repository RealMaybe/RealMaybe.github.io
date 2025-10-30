/* 特殊页面路由配置 */

import type { RouteRecordRaw } from "@tsTypes";
import { createRedirects } from "../factory";

/* ========== */

export const specialRoutes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/index" }, // 重定向到首页
    ...createRedirects("/original-character", ["/oc"]), // 重定向到原创角色
    ...createRedirects("/acknowledgments", ["/thank", "/thanks"]), // 重定向到感谢页面
    ...createRedirects("/documents", ["/doc", "/docs", "/document"]), // 重定向到文档页面
];
