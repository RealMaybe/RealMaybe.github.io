import type { Ref } from "vue";
import { ref, onMounted, onUnmounted } from "vue";

/**
 * 响应式媒体查询 Hook
 * - 该 Hook 用于监听 CSS 媒体查询的变化，并返回一个响应式的布尔值，
 * - 表示当前设备是否匹配指定的媒体查询条件。
 * 
 * @param { string } query CSS 媒体查询字符串，例如 "(max-width: 768px)" 或 "(min-width: 1024px)"
 * @returns { Ref<boolean> } 一个响应式的布尔值引用，表示媒体查询是否匹配
 * 
 * @example
 * ```typescript
 * // 在组件中使用
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * 
 * // 当屏幕宽度小于等于 768px 时，isMobile.value 为 true
 * // 当屏幕宽度大于 768px 时，isMobile.value 为 false
 * ```
 * 
 * @description
 * - 该 Hook 会在组件挂载时自动添加媒体查询监听器
 * - 会在组件卸载时自动移除监听器，防止内存泄漏
 * - 使用 window.matchMedia API 进行媒体查询检测
 * - 支持所有标准的 CSS 媒体查询语法
*/
export function useMediaQuery(query: string): Ref<boolean> {
    const matches = ref(false); // 创建一个响应式引用，用于存储媒体查询的匹配状态
    const media = window.matchMedia(query); // 获取媒体查询列表对象
    const update = () => (matches.value = media.matches); // 更新匹配状态的函数
    const handler = (e: MediaQueryListEvent) => update(); // 媒体查询变化时的处理函数

    // 组件挂载时的生命周期钩子
    onMounted(() => {
        update(); // 初始化匹配状态
        media.addEventListener("change", handler); // 添加媒体查询变化监听器
    });

    // 组件卸载时的生命周期钩子
    onUnmounted(
        () => media.removeEventListener("change", handler) // 移除媒体查询变化监听器，防止内存泄漏
    );

    // 返回响应式的匹配状态
    return matches;
}
