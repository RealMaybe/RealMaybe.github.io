/**
 * `isMobile` 的可选参数封装。
 *
 * @property width 
 * - 视口宽度断点（单位：px）。默认 `768`。
 * - 当 `window.innerWidth <= width` 时视为移动端。
 * @property ua
 * - 自定义 User-Agent 字符串。
 * - 在 SSR 或爬虫场景下，可提前解析请求头并传入，避免
 * - 后端渲染与客户端 hydration 不一致。若省略，则优先使用
 * - `navigator.userAgentData?.mobile`，回落到 `navigator.userAgent`。
 */
interface MobileOpts {
    width?: number;
    ua?: string;
}

/**
 * 判断当前是否处于移动端环境。
 *
 * 综合以下三项指标，只要任意一项成立即返回 `true`：
 * 1. 用户代理字符串（或 userAgentData.mobile）命中主流移动设备关键字。
 * 2. 识别“伪装成 Mac”的 iPad（iPadOS 13+）。
 * 3. 可视窗口宽度 ≤ 指定断点（默认 768）。
 *
 * SSR 安全：无 `window` 时返回 `false`。
 *
 * @param opts  number → 自定义断点；对象 → { width?, ua? }
 * @returns `true`  移动端
 *          `false` 非移动端 或 SSR
 */
export const isMobile = (opts: number | MobileOpts = {}): boolean => {
    const { width = 768, ua } = typeof opts === "number" ? { width: opts } : opts;

    /* SSR 守卫 */
    if (typeof window === "undefined") return false;

    /* UA 获取（优先新 API） */
    const getUA = (): string =>
        (navigator as any).userAgentData?.mobile ? "mobile" : (navigator.userAgent ?? "");

    const rawUA = ua ?? getUA();

    /* 关键字匹配 */
    const agents = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isUA = agents.test(rawUA);

    /* iPadOS 13+ 伪装 Mac */
    const plat = navigator.platform ?? "";
    const isIPad =
        plat === "MacIntel" &&
        navigator.maxTouchPoints > 1 &&
        typeof (window as any).ontouchstart !== "undefined";

    /* CSS 断点 */
    const isSmallScreen = window.innerWidth <= width;

    /* 结论 */
    return isUA || isIPad || isSmallScreen;
};
