<!-- 功能导航 -->

<template>
    <div class="meta-link">
        <template v-for="item in footerDocLinks" :key="item.name">
            <RouterLink :to="item.to" rel="noopener noreferrer">
                {{ item.text }}
            </RouterLink>
        </template>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const footerDocLinks = reactive([
    { text: "更新日志", to: "/change-log" },
    { text: "致谢名单", to: "/acknowledgments" },
]);
</script>

<style scoped lang="less">
@import url("@style/public/flex.less");
@import url("@style/public/var.less");

.meta-link {
    .flex-start();

    a {
        color: @text-muted;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s;
        margin: 0 .25rem;

        &:hover {
            color: @secondary-color;
            text-decoration: underline;
        }

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }

        @media (max-width: 768px) {
            width: 100%;
            margin: 0 0 .25rem 0;
            text-align: center;
        }
    }
}
</style>