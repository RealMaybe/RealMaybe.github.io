/* 特殊页面路由配置 */

import type { Redirects, RouteRecordRaw } from "@tsTypes";
import { createRedirects } from "../factory";

/* ========== */

// 重定向配置
const REDIRECT_CONFIGS: Redirects = [
    // 更新日志
    { to: "/change-log", from: ["/changelog", "/changelogs"] },
    { to: "/change-log/history", from: ["/change-log/archive"] },
    // 原创角色
    { to: "/original-character", from: ["/oc"] },
    // 鸣谢
    { to: "/acknowledgments", from: ["/thank", "/thanks"] },
    { to: "/acknowledgments/contribution-guidelines", from: ["/acknowledgments/cg"] },
    // 文档
    // { to: "/documents", from: ["/doc", "/docs", "/document", "/documentation"] },
] as const;

/* ========== */

// 创建路由
export const specialRoutes: RouteRecordRaw[] = [
    { path: "/", redirect: "/index" },
    ...REDIRECT_CONFIGS.flatMap(config => createRedirects(config.to, config.from)),
];
