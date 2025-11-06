import type { RouteRecordRaw, RouteMeta } from "@tsTypes";

/* ========== */

type Component = RouteRecordRaw["component"] | undefined;
type Children = RouteRecordRaw["children"];

/* ========== */

/**
 * 主站点路由工厂函数。
 *
 * 快速生成一条供主导航使用的 `RouteRecordRaw`，已内置常用 `meta`：
 * - `title` / `disableZoom` / `nav.show` / `nav.title`
 *
 * **注意：**
 * - 当需要子路由时，**父级记录不会挂载 `component`**，避免 Vue-Router 子路由视图冲突；
 * - 子路由请把 `path` 设为空串 `""` 作为默认页。
 *
 * @param path      一级路径，必须以 `/` 开头，例如 `/shop`（如果是作为子路由的时候请勿带 `/` 前缀）
 * @param component 页面组件（无子级时必填；有子级时仅用于类型推导，不会挂载，有子级时可以直接写为 `undefined`）
 * @param navTitle  导航栏展示名称，也会作为 `nav.title` 和默认 `document.title`
 * @param title     浏览器页签标题；缺省同 `navTitle`
 * @param children  子路由数组；提供后父级不再携带 `component`
 *
 * @returns 可直接放入路由表的完整记录
 *
 * @example
 * ```ts
 * // 无子级
 * createRoute("/about", views.about, "关于", "个人简介")
 *
 * // 有子级
 * createRoute("/shop", void 0, "精品小店", void 0, [
 *     createRoute("", views.shop, "小店首页"),        // 默认页
 *     createRoute("policies", ShopPolicies, "店铺政策")
 * ])
 * ```
 */
export function createRoute(
    path: string,
    component: Component,
    navTitle: string,
    title?: string,
    children?: Children
): RouteRecordRaw {
    const base: Omit<RouteRecordRaw, "component" | "children"> = {
        path,
        meta: {
            title: title ?? navTitle,
            disableZoom: true,
            nav: { show: true, title: navTitle },
        },
    };

    return children
        ? ({ ...base, children } as RouteRecordRaw)
        : ({ ...base, component } as RouteRecordRaw);
}

/**
 * 隐藏导航路由工厂函数。
 *
 * 在 `createRoute` 基础上生成**不会出现在主导航**的 `RouteRecordRaw`。
 * 唯一差异：把 `meta.nav` 强制设为 `false`，其余 `title / disableZoom` 等保持不变。
 *
 * 适用场景：
 * - 登录页、404、独立活动页等无需入口的页面；
 * - 需要保持路由结构，但不想让主导航抓取。
 *
 * 参数列表与 `createRoute` 完全一致，可无缝替换：
 *
 * @param path      一级路径，必须以 `/` 开头
 * @param component 页面组件（无子级时必填；有子级时传 `undefined`）
 * @param navTitle  导航名称，仍会写入 `nav.title`（仅作标识，不会展示）
 * @param title     浏览器页签标题；缺省同 `navTitle`
 * @param children  子路由数组；提供后父级不再挂载 `component`
 *
 * @returns 已关闭导航的完整路由记录，可直接放入路由表
 *
 * @example
 * ```ts
 * // 隐藏的单页
 * createHiddenRoute("/callback", OAuthCallback, "三方回调")
 *
 * // 隐藏的嵌套路由
 * createHiddenRoute("/debug", void 0, "调试面板", void 0, [
 *     createRoute("", DebugHome, "首页"),
 *     createRoute("log", DebugLog, "日志")
 * ])
 * ```
 */
export function createHiddenRoute(
    path: string,
    component?: Component,
    navTitle?: string,
    title?: string,
    children?: Children
): RouteRecordRaw {
    const r = createRoute(path, component, navTitle!, title, children);

    // 保证 meta 存在
    if (!r.meta) r.meta = {};

    // 保证 nav 是对象（而不是 false）
    const m = r.meta as RouteMeta;

    // 关闭导航
    m.nav = false;

    return r;
}

/**
 * 批量重定向工厂函数。
 *
 * 针对同一个“目标路径”批量生成多条 `RouteRecordRaw`，覆盖两种场景：
 * 1. 精确匹配：`/foo` → 重定向到 `to`
 * 2. 通配子路径：`/foo/:path(.*)` → 重定向到 `to/$path`
 *
 * 常用于旧路径兼容、缩写路径、大小写归一等场景。
 *
 * @param to   目标路径，必须以 `/` 开头，例如 `/documents`
 * @param from 来源路径数组，每一项必须以 `/` 开头，例如 `["/doc", "/docs"]`
 *
 * @returns 扁平化的路由记录数组，可直接展开到路由表
 *
 * @example
 * ```ts
 * const specialRoutes: Array<RouteRecordRaw> = [
 *     ...createRedirects("/documents", ["/doc", "/docs", "/document"]),
 * ]
 * ```
 */
export function createRedirects(
    to: `/${string}`,
    from: Array<`/${string}`>
): Array<RouteRecordRaw> {
    const routes: Array<RouteRecordRaw> = [];

    from.forEach(prefix => {
        // 精确重定向
        routes.push({ path: prefix, redirect: to });
        // 子路径通配重定向
        routes.push({
            path: `${prefix}/:path(.*)`,
            redirect: route => `${to}/${route.params.path as string}`,
        });
    });

    return routes;
}
