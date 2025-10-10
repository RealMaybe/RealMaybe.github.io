/**
 * 文档路由
 * 动态导入 docs-pages 下的所有文档
 */
const documentRoutes = Object.entries(import.meta.glob("@/assets/docs/docs-pages/*.md")).map(
    ([path, component]) => {
        const name = path.split("/").pop()?.replace(".md", "");
        return {
            path: `/documents/${name}`,
            component: component,
            name: `document-${name}`,
        };
    }
);

console.log(documentRoutes);

export default documentRoutes;