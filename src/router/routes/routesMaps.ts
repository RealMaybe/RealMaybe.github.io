import IndexPage from "@/views/IndexPage.vue";

/* ========== */

// 定义视图组件映射
export const views = {
    notFound: () => import("@/views/NotFoundPage.vue"), // 404
    redirect: () => import("@/views/RedirectView.vue"), // 重定向
    index: IndexPage, // 首页
    about: () => import("@/views/AboutPage.vue"), // 关于
    work: () => import("@/views/WorkPage.vue"), // 作品
    shop: () => import("@/views/ShopPage.vue"), // 小店
    originalCharacter: () => import("@/views/OriginalCharacterPage.vue"), // 原创角色
    acknowledgments: () => import("@/views/ThanksPage.vue"), // 致谢
    changeLog: () => import("@/views/ChangeLogPage.vue"), // 更新日志
};

// 定义子组件元素
export const components = {
    changeLog: {
        index: () => import("@/features/changeLog/ChangeLogIndex.vue"),
        history: () => import("@/features/changeLog/ChangeLogHistory.vue"),
    },
    shop: {
        shopPolicies: () => import("@/features/shop/ShopPolicies.vue"),
    },
    acknowledgments: {
        ContributionGuidelines: () => import("@/features/thanks/ContributionGuidelines.vue"),
        FeedbackView: () => import("@/features/thanks/FeedbackView.vue"),
    },
};
