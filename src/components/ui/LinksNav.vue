<!-- 导航栏 -->

<template>
    <nav id="links-nav">
        <!-- 站内导航 -->
        <template v-for="link in internalLink" :key="link.name">
            <RouterLink :to="link.path" active-class="on" :title="link.name">
                {{ link.name }}
            </RouterLink>
        </template>

        <!-- 站外导航 -->
        <!-- <template v-for="item in publicExternalLinks" :key="item.title">
            <a :href="item.href" :title="item.title" target="_blank" rel="noopener noreferrer">
                {{ item.title }}
            </a>
        </template> -->
    </nav>
</template>

<script setup lang="ts">
import { useNavLinks } from "@/utils";
import { publicPages, publicExternalLinks } from "@/router/routes";

// 内链
const internalLink = useNavLinks(publicPages);
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

#links-nav {
    .flex-between-center();
    flex-wrap: wrap;
    gap: 1.25rem;
    max-width: 37.5rem;
    text-align: center;
    white-space: nowrap;

    a {
        padding: 0 0.25rem;
        color: @text-color;
        text-decoration: none;
        border-bottom: 0.0625rem solid transparent;

        &:hover {
            border-bottom-color: @link-on-color;
        }

        &.on {
            color: @inline-title;
            font-weight: bold;
            border-bottom-color: @inline-title;

            &:hover {
                border-bottom-color: @inline-title;
            }
        }
    }
}
</style>
