/* 功能路由 */

import type { RouteRecordRaw } from "@tsTypes";
import { views, components } from "./routesMaps";
import { createRoute, createHiddenRoute } from "../factory";

/* ========== */

/**
 * 功能路由
 */
export const metaLinkPage: Array<RouteRecordRaw> = [
    /*
     * 功能导航栏内的路由
     */
    createRoute("/change-log", views.changeLog, "更新日志", void 0, [
        createHiddenRoute("", components.changeLog.index, "更新日志"),
        createHiddenRoute("history", components.changeLog.history, "更新日志 - 历史版本"),
    ]),
    createRoute("/acknowledgments", void 0, "致谢专栏", void 0, [
        createRoute("", views.acknowledgments, "致谢专栏"),
        createHiddenRoute(
            "contribution-guidelines",
            components.acknowledgments.ContributionGuidelines,
            "建言献策"
        ),
        createHiddenRoute("feedback", components.acknowledgments.FeedbackView, "反馈"),
    ]),

    /*
     * 不在导航栏内的路由
     * - 即便是之后会添加到导航栏内，也是放在功能导航中
     */
    createHiddenRoute("/original-character", views.originalCharacter, "原创角色"),
];
