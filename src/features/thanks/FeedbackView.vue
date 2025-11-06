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
                <div class="tips">如果您填写并提交了该表单，我们将默认您已阅读并同意《建言献策 · 填表须知》的全部内容。</div>
            </div>

            <!-- 表单 -->
            <div class="feedback-form"></div>
        </article>
    </section>
</template>

<script setup lang="ts">
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";

import { ref, onMounted, onUnmounted } from "vue";
import { isMobile as checkMobile } from "@/utils";

/** 是否已阅读过说明内容 */
const noted = ref(false);

/** 移动设备检测状态 */
const isMobile = ref(false);

/* ========== */

// 检测移动设备
const checkIfMobile = (): void => { isMobile.value = checkMobile() };

/* ========== */

onMounted(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile as EventListener);
});

onUnmounted(() => window.removeEventListener("resize", checkIfMobile as EventListener));
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.w() {
    width: 98%;
    margin: 0 auto;
}

.instructions {
    .w();
    margin-bottom: 1rem;
}

.feedback-form {
    .w();
    height: calc(100vh - 1rem);
    border: 0.125rem solid @dark-bg;
    border-radius: 1rem;
    transition: all 0.25s ease-in-out;

    &:hover {
        border-color: @inline-title
    }
}
</style>