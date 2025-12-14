import type { RouteRecordRaw } from "@tsTypes";
import { computed } from "vue";

import { isObject, isString } from "@/utils";

/* ========== */

/**
 * 从路由表中提取可用于导航的链接列表。
 * @param routes 原始路由记录数组，通常来自 `publicPages`、`metaLinkPage` 等
 * @returns 导航链接数组，每个元素包含 `name`（页面标题）和 `path`（路由路径）
 */
export const pickNavLinks = (routes: Array<RouteRecordRaw>) =>
    routes
        .filter(route => {
            const nav = route.meta?.nav;
            // 对象形式：以 nav.show 为准；布尔形式：直接当做开关
            return isObject(nav) ? nav.show : Boolean(nav);
        })
        .map(route => {
            const nav = route.meta!.nav!;
            // 对象且自带 title 时优先用 nav.title，否则退回到 meta.title
            const name = isObject(nav) && isString(nav.title) ? nav.title : route.meta!.title!;
            return { name, path: route.path };
        });

/**
 * Vue 组合式函数：返回响应式的导航链接列表。
 *
 * 内部使用 `computed` 包装，当传入的 `routes` 发生变化时，返回的列表会自动更新。
 * 仅限在 Vue 组件 `setup()` 或 `<script setup>` 上下文中调用。
 *
 * @param routes 原始路由记录数组（建议传入 `ref` 或 `reactive` 数组以实现响应式）
 * @returns 计算属性，值为导航链接数组
 */
export const useNavLinks = (routes: Array<RouteRecordRaw>) => computed(() => pickNavLinks(routes));
