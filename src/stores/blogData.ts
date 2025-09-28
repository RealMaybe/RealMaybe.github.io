import { defineStore } from "pinia";
import { ref, computed } from "vue";

/* 类型 */

export interface BlogItem {
    slug: string;
    title: string;
    description?: string;
    type?: string;
    path?: string;
    link: string /* 二次链接 */;
    generatedAt?: number;
    date?: string;
    tags?: string[];
}

/* 正文缓存：slug -> markdown 字符串 */
interface ContentCache {
    [slug: string]: string;
}

/* ========== */

/**
 * 博客数据接口
 */
export const url = "https://raw.githubusercontent.com/RealMaybe/RealMaybe/main/data/index.json";

export const useBlogDataStore = defineStore("blogData", () => {
    /* 状态 */
    const list = ref<BlogItem[]>([]); // 索引数组
    const loaded = ref(false); // 索引是否已拉取
    const contentCache = ref<ContentCache>({}); // 正文缓存

    /* Getter */
    const bySlug = computed(() => (slug: string) => list.value.find(i => i.slug === slug));

    /* Actions */

    /* 1. 拉取索引（只跑一次） */
    async function fetchIndex() {
        if (loaded.value) return;
        const res = await fetch(url);
        list.value = (await res.json()) as BlogItem[];
        loaded.value = true;
    }

    /* 2. 拉取正文：先查缓存，没有再 fetch */
    async function fetchContent(slug: string) {
        if (contentCache.value[slug]) return contentCache.value[slug];

        const meta = bySlug.value(slug);
        if (!meta) throw new Error(`找不到 slug: ${slug}`);

        /* 去空格 + 防缓存 */
        const cleanURL = meta.link.trim().replace(/ /g, "%20");
        const url = `${cleanURL}?t=${Date.now()}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`正文加载失败 ${res.status}`);
        const md = await res.text();

        contentCache.value[slug] = md;
        return md;
    }

    return {
        list,
        loaded,
        fetchIndex,
        bySlug,
        fetchContent,
        contentCache,
    };
});
