<!-- 自我介绍 -->

<template>
    <section class="self-introduction">
        <aboutMe />
    </section>
</template>

<script setup lang="ts">
import aboutMe from "@/assets/docs/aboutMe.md";
</script>

<style scoped lang="less">
@import url("@style/page/index-public.less");

.self-introduction {
    flex: 1 1 100% !important;
    padding: 0 3rem 1.5rem !important;

    .introduction-text {
        p {
            line-height: 1.5;
            margin-bottom: 0.5rem;

            &:last-child {
                margin-bottom: 0;
            }
        }

        ul {
            padding-left: 1.5rem;
        }
    }
}
</style>