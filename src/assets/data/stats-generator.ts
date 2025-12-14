import type { Endpoint } from "@tsTypes";

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
    endpoint: Endpoint = ""
): string {
    const search = new URLSearchParams(
        Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)]))
    ).toString();

    return `${API_ROOT}${endpoint ? `/${endpoint}` : ""}/?${search}`;
}

/* ========== */

/**
 * GitHub 卡片
 */
export const githubImgs = {
    /* 语言排行 */
    topLangs: buildGitHubStatsURL(
        {
            ...baseParam,
            layout: "compact", // 紧凑模式
            langs_count: 10, // 显示前 10 种
        },
        "top-langs"
    ),
    /* 用户统计 */
    stats: buildGitHubStatsURL({
        ...baseParam,
        // include_all_commits: true,
        show_icons: true,
    }),
};
