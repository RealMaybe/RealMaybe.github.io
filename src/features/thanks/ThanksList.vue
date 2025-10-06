<!-- 鸣谢列表 -->

<template>
    <div class="credits-page">
        <TechnologiesCard :technologies-data="technologiesData" />
    </div>
</template>

<script setup lang="ts">
import TechnologiesCard from "./card/TechnologiesCard.vue";
import { technologies } from "@/assets/data/thanks";
import type { TechnologiesData } from "@/tsTypes";

// 直接使用导入的数据
const technologiesData: TechnologiesData = technologies;
</script>

<style scoped lang="less">
.credits-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem 1rem;
}

.page-header {
    text-align: center;
    color: white;
    margin-bottom: 3rem;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
}

.page-subtitle {
    font-size: 1.125rem;
    line-height: 1.6;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .credits-page {
        padding: 1rem 0.5rem;
    }

    .page-header h1 {
        font-size: 2rem;
    }
}
</style>