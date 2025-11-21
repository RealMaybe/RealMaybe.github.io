<template>
    <section class="document-page">
        <h1 class="title page-title">
            <i class="fa fa-book"></i>
            <span>官方文档</span>
        </h1>

        <DocumentLinks />

        <div class="markdown-body">
            <blockquote>
                <p>如下内容仅用于测试，并不代表实际效果</p>
                <hr />
                <p>仅用于测试！！！</p>
                <p>仅用于测试！！！</p>
                <p>仅用于测试！！！</p>
            </blockquote>
        </div>

        <article class="doc-content">
            <div class="content-box">
                <DocumentView :mdUrl="url" />
            </div>
        </article>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DocumentLinks from "@/features/document/DocumentLinks.vue";
import DocumentView from "@/components/shared/DocumentView.vue";

// const url = ref("https://raw.githubusercontent.com/RealMaybe/realmaybe-io-website-data/main/documents/2025-11-14.md")
const url = ref("/docs/版本号管理规范.md")
</script>

<style scoped lang="less">
@import url("@style/public-page.less");
</style>
