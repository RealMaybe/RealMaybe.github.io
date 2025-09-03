/* 路由 key 转 id */

import type { RouteLocationNormalized } from "vue-router";

/* ========== */

export function setDocumentTitle(to: RouteLocationNormalized, siteName: string): void {
    if (typeof document === "undefined") return;

    // 获取目标路由的 meta 信息
    const id = to.params.id as string | undefined;

    // 获取页面标题
    const page = ((to.meta.title as string) || "Vite App").replace(/\{id\}/g, id ?? "").trim();

    // 设置页面标题
    document.title = page && page !== siteName ? `${page} - ${siteName}` : siteName;
}
