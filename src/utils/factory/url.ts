// 重载
export function updateUrlParams(judge: true, params: Record<string, unknown>, url: string): string;
export function updateUrlParams(judge: false, params: Record<string, unknown>, url: string): void;

/**
 * 根据给定参数对象，更新当前页面或指定 URL 的查询串（query string）。
 *
 * 1. 当 `judge = true` 时，不会对浏览器历史记录做任何操作，而是把“带新查询串的完整 URL”
 *    以字符串形式返回，常用于需要跳转或生成链接的场景。
 * 2. 当 `judge = false` 时，直接通过 `history.replaceState` 把当前地址替换成新的
 *    查询串，无刷新、不新增历史记录，适用于“静默更新”。
 *
 * @param judge   判断模式开关
 *                - true  → 返回新 URL（字符串）
 *                - false → 直接修改当前地址（返回 void）
 * @param params  需要写入 URL 的键值对；所有值都会通过 `String()` 强制转换成字符串
 * @param url     仅在 `judge = true` 时生效，可为：
 *                - 相对路径（如 `./foo`, `../bar`）
 *                - 绝对路径（如 `/user`）
 *                - 完整 URL（如 `https://example.com/page`）
 *                若提供相对路径，则以当前页面地址作为基准解析
 *
 * @returns
 * - `judge = true` 时返回新的完整 URL（含协议、主机、路径、查询串）
 * - `judge = false` 时返回 `void`
 *
 * @example
 * // 静默更新当前地址栏参数
 * updateUrlParams(false, { id: 123, tab: "info" });
 *
 * // 生成带新参数的完整 URL，不修改地址栏
 * const newUrl = updateUrlParams(true, { page: 2 }, "https://site.com/list");
 * // newUrl -> "https://site.com/list?page=2"
 */
export function updateUrlParams(
    judge: boolean,
    params: Record<string, unknown>,
    url: string
): void | string {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
        searchParams.append(key, String(value));
    }

    const newSearch = searchParams.toString();
    let protocol,
        host,
        pathname,
        this_url = location.href;

    /* 判断传入的url地址是路径形式还是url形式 */
    if (judge) {
        if (url.indexOf("./") >= 0) ({ protocol, host, pathname } = new URL(url, this_url));
        else ({ protocol, host, pathname } = new URL(url));
    } else ({ protocol, host, pathname } = location);

    const newUrl = `${protocol}//${host}${pathname}?${newSearch}`;

    if (judge) return newUrl;
    else history.replaceState(null, "", newUrl);
}

/* ========== */

// 重载
export function parseUrlParams(judge: false): Record<string, unknown>;
export function parseUrlParams(judge: true, url: string): Record<string, unknown>;

/**
 * 解析指定 URL 或当前页面地址中的查询参数（query string），
 * 返回一个扁平的键值对对象。
 *
 * - 当 `judge = true` 时，以**传入的 `url`** 为基准解析查询参数；
 *   支持相对路径（如 `./foo`、`../bar`），
 *   此时会以当前页面地址作为基准进行解析。
 * - 当 `judge = false` 时，直接读取**当前页面** `location.search`。
 *
 * 返回值中的值均已使用 `decodeURIComponent` 解码。
 * 若查询串为空，返回空对象 `{}`。
 *
 * @param judge - 解析模式：
 *                - `true`  → 解析传入的 `url`
 *                - `false` → 解析当前页面地址
 * @param url   - 仅在 `judge = true` 时生效；
 *                允许为相对路径、绝对路径或完整 URL。
 *
 * @returns 扁平对象，键为参数名，值为已解码的字符串（未知类型统一标记为 `unknown`，
 *          实际运行时均为 `string`）。
 *
 * @example
 * // 当前地址栏： https://example.com/page?id=123&tab=info%20center
 * const params = parseUrlParams(false, "");
 * // params -> { id: "123", tab: "info center" }
 *
 * // 解析指定 URL
 * const params2 = parseUrlParams(true, "./detail?name=vue%20router");
 * // params2 -> { name: "vue router" }
 */
export function parseUrlParams(judge: boolean, url?: string): Record<string, unknown> {
    const params: Record<string, unknown> = {};
    let queryString: string;

    // 此时 url 必传
    if (judge === true) {
        const target =
            url!.startsWith("./") || url!.startsWith("../")
                ? new URL(url!, location.href)
                : new URL(url!);
        queryString = target.search.slice(1);
    }

    // judge === false，无需 url
    else queryString = location.search.slice(1);

    // 若查询串为空，返回空对象
    if (!queryString) return params;

    // 解析查询串
    for (const segment of queryString.split("&")) {
        const [key, value = ""] = segment.split("=");
        params[key] = decodeURIComponent(value);
    }

    return params;
}
