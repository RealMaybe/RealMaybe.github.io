<template>
    <div class="technologies-section">
        <header class="section-header">
            <h2 class="section-title">
                <span class="emoji">{{ data.category.emoji }}</span>
                {{ data.category.name }}
            </h2>
            <p class="section-description">{{ data.category.description }}</p>
        </header>

        <div class="technologies-grid">
            <TechCard v-for="tech in data.members" :key="tech.id" :technology="tech" class="tech-card" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TechnologiesData } from "@/tsTypes";
import TechCard from "./TechCard.vue";

// 定义 props 接口
interface Props {
    technologiesData: TechnologiesData;
}

// 从父组件接收数据
const props = defineProps<Props>();

// 直接使用 props 中的数据
const data = props.technologiesData;
</script>

<style scoped lang="less">
.technologies-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;

    .emoji {
        margin-right: 0.5rem;
    }
}

.section-description {
    font-size: 1.125rem;
    color: #6b7280;
    line-height: 1.6;
}

.technologies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
    align-items: start;
}

@media (max-width: 768px) {
    .technologies-section {
        padding: 1rem;
    }

    .technologies-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .section-title {
        font-size: 2rem;
    }
}
</style>