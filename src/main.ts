/* 引入核心库 */
import { createApp } from "vue";
import { createPinia } from "pinia";

/* 引入项目根组件和路由配置 */
import App from "./App.vue";
import router from "./router";

/* 引入自定义插件 */
// import { autoRefresh } from "@/plugin";

/* 引入全局样式 */
import "./assets/style/public-global.less";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "highlight.js/styles/github-dark.css";

/* ========== */

// 创建 Vue 应用实例
const app = createApp(App);

// 注册 Pinia 状态管理和 Vue Router
app.use(createPinia());
app.use(router);

// 挂载应用到 DOM 元素 #app
app.mount("#app");

/* ========== */

/* 使用自定义插件 */
// autoRefresh(1000 * 60 * 5); // 每五分钟检查一次