<template>
    <MobileAccessReminder />

    <section class="acknowledgments">
        <thanksDocs />

        <!-- <div class="call-to-action">
            <h2>共同塑造未来</h2>
            <p>
                这个专栏记录着每一位推动网站进步的贡献者。如果您也发现了问题，或有一个让网站变得更好的绝妙想法，欢迎您<RouterLink
                    to="/acknowledgments/contribution-guidelines">提交反馈</RouterLink>。
            </p>
            <p class="center">您的名字，或许将出现在这里。</p>
        </div> -->

        <footer class="page-footer">
            <span>最后更新: {{ lastUpdated }}</span>
            <span class="separator">|</span>
            <span>版本: {{ version }}</span>
        </footer>
    </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
import thanksDocs from "@/assets/docs/thanks/Acknowledgments.md";

const lastUpdated: string = "2025-10-04";
const version: string = "1.0";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.center {
    width: 100%;
    text-align: center;
}

.call-to-action {
    color: #e0e0e0;
    padding: 20px 24px;
    border-radius: 8px;
    margin: 16px auto;
    max-width: 640px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);

    h2 {
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 8px;
        color: #ffffff;
    }

    p {
        font-size: 14px;
        line-height: 1.5;
        margin: 0 0 6px;

        &:last-of-type {
            margin-bottom: 0;
            opacity: 0.85;
        }
    }

    a {
        color: #66b2ff;
        font-weight: 600;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease;

        &:hover,
        &:focus {
            border-bottom-color: #66b2ff;
            outline: none;
        }
    }
}

.page-footer {
    .flex-end-center();
    color: @text-muted;
    font-size: 14.4px;

    .separator {
        margin: 0 8px;
    }
}
</style>
