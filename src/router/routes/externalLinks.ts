/* 外部页面路由 */
const externalLinks = {
    public: {
        blog: {
            href: import.meta.env.VITE_APP_BLOG_URL, // 博客
            title: "博客",
            content: "博客",
        },
    },
    meta: {
        docs: {
            href: import.meta.env.VITE_APP_DOCS_URL, // 官方文档
            title: "官方文档",
            conteng: "官方文档",
        },
    },
};

/**
 * 公开外部链接
 */
export const publicExternalLinks = Object.values(externalLinks.public);

/**
 * 功能外部链接
 */
export const metaExternalLinks = Object.values(externalLinks.meta);
