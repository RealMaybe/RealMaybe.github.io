type Endpoint = "" | "top-langs";

/* ========== */

/**
 * GitHub 统计跟地址
 */
const API_ROOT = "https://github-readme-stats.vercel.app/api";

/**
 * GitHub 统计默认参数
 */
export const baseParam = {
    username: "RealMaybe",
    theme: "radical",
    hide_border: true,
};

/**
 * 构建 GitHub 统计链接
 * @param params 参数
 * @param endpoint api 路径
 * @returns 链接
 */
export function buildGitHubStatsURL(
    params: Record<string, string | number | boolean>,
    endpoint: Endpoint = "" // 空字符串代表 /api
): string {
    const search = new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)])
    ).toString();
    return `${API_ROOT}${endpoint ? `/${endpoint}` : ""}/?${search}`;
}
