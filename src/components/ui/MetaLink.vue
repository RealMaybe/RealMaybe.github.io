<!-- 功能导航 -->

<template>
    <div class="meta-link">
        <!-- 站外导航 -->
        <!-- <template v-for="item in metaExternalLinks" :key="item.title">
            <a :href="item.href" :title="item.title" target="_blank" rel="noopener noreferrer">
                {{ item.title }}
            </a>
        </template> -->

        <!-- 站内导航 -->
        <template v-for="item in metaLinkPages" :key="item.name">
            <RouterLink :to="item.path" active-class="on">
                {{ item.name }}
            </RouterLink>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useNavLinks } from "@/utils";
import { metaLinkPage, metaExternalLinks } from "@/router/routes";

// 内链
const metaLinkPages = useNavLinks(metaLinkPage);
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

.meta-link {
    .flex-start();

    a {
        color: @text-muted;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s;
        margin: 0 0.25rem;

        &:hover {
            text-decoration: underline;
        }

        &.on {
            color: @secondary-color;
        }

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }

        @media (max-width: 768px) {
            width: 100%;
            margin: 0 0 0.25rem 0;
            text-align: center;
        }
    }
}
</style>
