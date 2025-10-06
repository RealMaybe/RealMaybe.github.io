<template>
    <article class="tech-card" :style="cardStyle">
        <header class="tech-header">
            <div class="tech-icon-container">
                <img :src="getIconPath(technology.icon)" :alt="`${technology.name} icon`" class="tech-icon"
                    @error="handleImageError" />
            </div>
            <div class="tech-basic-info">
                <h3 class="tech-name">
                    <a :href="technology.link" target="_blank" rel="noopener noreferrer" class="tech-link">
                        {{ technology.name }}
                    </a>
                </h3>
                <span class="tech-type">{{ technology.type }}</span>
            </div>
        </header>

        <div class="tech-content">
            <p class="tech-purpose">{{ technology.purpose }}</p>
            <p class="tech-description">{{ technology.description }}</p>

            <div class="tech-tags">
                <span v-for="tag in technology.tags" :key="tag" class="tech-tag">
                    {{ tag }}
                </span>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Technology } from "@/tsTypes";

interface Props {
    technology: Technology;
}

const props = defineProps<Props>();

// 计算卡片样式
const cardStyle = computed(() => ({
    "--card-color": "#f8fafc",
    "--border-color": "#e2e8f0",
}));

// 处理图标路径
const getIconPath = (iconPath: string) => {
    if (iconPath.startsWith("http")) {
        return iconPath;
    }
    return new URL(`/src/assets${iconPath}`, import.meta.url).href;
};

// 图标加载失败处理
const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    img.style.display = "none";
    // 可以设置一个默认的占位图标
};
</script>

<style scoped lang="less">
.tech-card {
    background: var(--card-color, #ffffff);
    border: 1px solid var(--border-color, #e2e8f0);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    height: fit-content;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border-color: #3b82f6;
    }
}

.tech-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
}

.tech-icon-container {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tech-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
}

.tech-basic-info {
    flex: 1;
    min-width: 0;
}

.tech-name {
    margin: 0 0 0.25rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;

    .tech-link {
        color: inherit;
        text-decoration: none;

        &:hover {
            color: #3b82f6;
        }
    }
}

.tech-type {
    font-size: 0.875rem;
    color: #6b7280;
    background: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
}

.tech-content {
    space-y: 0.75rem;
}

.tech-purpose {
    font-weight: 500;
    color: #374151;
    margin: 0 0 0.5rem 0;
    font-size: 0.95rem;
}

.tech-description {
    color: #6b7280;
    line-height: 1.5;
    margin: 0 0 1rem 0;
    font-size: 0.9rem;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    background: #eff6ff;
    color: #1d4ed8;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
}

// 响应式设计
@media (max-width: 640px) {
    .tech-card {
        padding: 1rem;
    }

    .tech-header {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
    }

    .tech-icon-container {
        align-self: center;
    }
}
</style>
