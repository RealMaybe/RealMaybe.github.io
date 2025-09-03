import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { manageViewportZoom, setDocumentTitle } from "./factory";

/* ========== */

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// 路由守卫
router.beforeEach((to, _form, next) => {
    // 设置文档标题
    setDocumentTitle(to, "RealMaybe 个人网站");

    // 管理视口缩放
    manageViewportZoom(to.meta);

    next();
});

export default router;
