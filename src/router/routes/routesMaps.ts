import IndexPage from "@/views/IndexPage.vue";

/* ========== */

// 定义视图组件映射
export const views = {
    notFound: () => import("@/views/NotFoundPage.vue"), // 404
    index: IndexPage, // 首页
    about: () => import("@/views/AboutPage.vue"), // 关于
    blog: () => import("@/views/BlogPage.vue"), // 博客
    work: () => import("@/views/WorkPage.vue"), // 作品
    shop: () => import("@/views/ShopPage.vue"), // 小店
    originalCharacter: () => import("@/views/OriginalCharacterPage.vue"), // 原创角色
    acknowledgments: () => import("@/views/ThanksPage.vue"), // 致谢
    changeLog: () => import("@/views/ChangeLogPage.vue"), // 更新日志
    document: () => import("@/views/DocumentPage.vue"),
};

// 定义子组件元素
export const components = {
    blog: {
        display: () => import("@/features/blog/BlogDisplay.vue"),
        detail: () => import("@/features/blog/BlogDetail.vue"),
        list: () => import("@/features/blog/BlogList.vue"),
        update: () => import("@/features/blog/BlogUpdate.vue"),
    },
    shop: {
        shopPolicies: () => import("@/features/shop/ShopPolicies.vue"),
    },
    acknowledgments: {
        ContributionGuidelines: () => import("@/features/thanks/ContributionGuidelines.vue"),
        FeedbackView: () => import("@/features/thanks/FeedbackView.vue"),
    },
};
