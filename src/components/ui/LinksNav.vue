<!-- 导航栏 -->

<template>
    <nav id="links-nav">
        <template v-for="link in internalLink" :key="link.name">
            <RouterLink :to="link.path" active-class="on">
                {{ link.name }}
            </RouterLink>
        </template>
    </nav>
</template>

<script setup lang="ts">
import { useNavLinks } from "@/utils";
import { publicPages } from "@/router/routes/publicPage";

// 内链
const internalLink = useNavLinks(publicPages)
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

#links-nav {
    .flex-between-center();
    flex-wrap: wrap;
    gap: 1.25rem;
    max-width: 37.5rem;
    text-align: center;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;

    a {
        padding: 0 0.25rem;
        color: @text-color;
        text-decoration: none;

        &:hover {
            border-bottom: 0.0625rem solid @link-on-color;
        }

        &.on {
            color: @inline-title;
            font-weight: bold;
            border-bottom: 0.0625rem solid @inline-title;

            &:hover {
                border-bottom-color: @inline-title;
            }
        }
    }
}
</style>
