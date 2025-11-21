<template>
    <MobileAccessReminder />

    <section class="acknowledgments">
        <!-- 标题区域 -->
        <thanksDocs />

        <!-- 致谢内容列表区域 -->
        <ListOfThanks :thanksList="thanksData.list" :orderedKeys="orderedThanksKeys" />

        <!-- 联系我们区域 -->
        <!-- <ContactUs /> -->

        <!-- 页脚区域 -->
        <footer class="thanks-page-footer">
            <p class="info-text">
                <span>以上各模块所列，皆为星空中平等的光点</span>
                <span class="hide-below-mobile">，</span>
                <span>谨此致以同等谢意</span>
            </p>
            <p class="info-text">本页面数据最后更新日期: {{ thanksData.lastUpdated }}</p>
        </footer>
    </section>
</template>

<script setup lang="ts">
// 引入组件
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
import thanksDocs from "@/assets/docs/thanks/Acknowledgments.md";
import ListOfThanks from "@/features/thanks/ListOfThanks.vue";
// import ContactUs from "@/features/thanks/ContactUs.vue";

// 引入数据
import { default as thanksData, orderedThanksKeys } from "@data/thanks";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.thanks-page-footer {
    width: 100%;
    text-align: right;
    color: @text-muted;
    font-size: 0.75rem;
    line-height: 1.5rem;

    @media (max-width: @mobile-breakpoint) {
        .info-text {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
