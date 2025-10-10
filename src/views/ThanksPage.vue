<template>
    <MobileAccessReminder />

    <section class="acknowledgments">
        <thanksDocs />

        <footer class="page-footer">
            <span>最后更新: {{ lastUpdated }}</span>
            <span class="separator">|</span>
            <span>版本: {{ version }}</span>
        </footer>
    </section>
</template>

<script setup lang="ts">
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
import thanksDocs from "@/assets/docs/Acknowledgments.md";
import * as thanksData from "@/assets/data/thanks";

const lastUpdated: string = "2025-10-04";
const version: string = "1.0";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.page-footer {
    .flex-end-center();
    color: @text-muted;
    font-size: 14.4px;

    .separator {
        margin: 0 8px;
    }
}
</style>