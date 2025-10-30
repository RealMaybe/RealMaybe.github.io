<template>
    <MobileAccessReminder />

    <section class="acknowledgments">
        <!-- 标题区域 -->
        <thanksDocs />

        <!-- 致谢内容列表区域 -->
        <ListOfThanks :thanksList="thanksData.list" />

        <!-- 页脚区域 -->
        <ClosingRemarks />
        <footer class="thanks-page-footer">
            <div class="update-info">
                <span>本页面数据最后更新时间: {{ thanksData.lastUpdated }}</span>
            </div>
        </footer>
    </section>
</template>

<script setup lang="ts">
// 引入组件
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
import thanksDocs from "@/assets/docs/thanks/Acknowledgments.md";
import ListOfThanks from "@/features/thanks/ListOfThanks.vue";
import ClosingRemarks from "@/assets/docs/thanks/ClosingRemarks.md";

// 引入数据
import thanksData from "@data/thanks";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.thanks-page-footer {
    width: 100%;

    .update-info {
        .flex-end-center();
        width: 100%;
        color: @text-muted;
        font-size: 0.75rem;

        .separator {
            margin: 0 0.5rem;
        }
    }
}
</style>
