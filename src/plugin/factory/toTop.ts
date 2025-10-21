import type { App } from "vue";
import type { Router } from "vue-router";

/**
 * 回到顶部
 */
export const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

/**
 * 滚动到顶部的插件
 */
export const scrollToTopPlugin = {
    install(app: App, options: { behavior?: ScrollBehavior } = {}) {
        // 从 app 实例里拿到 router 实例
        const router: Router = app.config.globalProperties.$router;

        // 监听路由变化，每次路由变化后滚动到顶部
        router.afterEach(() =>
            window.scrollTo({
                top: 0,
                behavior: options.behavior ?? "instant",
            })
        );
    },
};
