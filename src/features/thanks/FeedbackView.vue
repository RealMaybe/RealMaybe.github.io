<!-- 建言献策 表单填写 页面 -->

<template>
    <MobileAccessReminder />

    <section class="feedback-page">
        <h1 class="title page-title">
            <i class="fa-regular fa-lightbulb"></i>
            <span>建言献策</span>
        </h1>

        <article>
            <!-- 提示 -->
            <div class="instructions">
                <h3>为确保沟通顺畅，请务必先行阅读</h3>

                <p>
                    <RouterLink to="/acknowledgments/contribution-guidelines">《建言献策 · 填表须知》</RouterLink>
                    <span>将帮助您了解反馈的流程与规范。</span>
                    <span>阅读完毕后，勾选确认框即可解锁表单链接。</span>
                </p>
            </div>

            <!-- 表单 -->
        </article>
    </section>
</template>

<script setup lang="ts">
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";

import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { isMobile as checkMobile } from "@/utils";

/** 是否已阅读过说明内容 */
const noted = ref(false);

/** 移动设备检测状态 */
const isMobile = ref(false);

/* ========== */

// 检测移动设备
const checkIfMobile = (): void => {
    isMobile.value = checkMobile();
};

/* ========== */

onMounted(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile as EventListener);
});

onUnmounted(() => window.removeEventListener("resize", checkIfMobile as EventListener));
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.instructions {
    .card();
    width: fit-content;
    margin: 0 auto;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.5);

    h3 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 0.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    a {
        .link-t-border(@inline-title, @link-on-color)
    }
}
</style>
