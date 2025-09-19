// scripts/docs-index.js  (ESM)
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import matter from "gray-matter";

const docsDir = join(process.cwd(), "public/documents");
const result = [];

/** 递归读取所有 .md 文件 */
async function walk(dir, base = docsDir) {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const ent of entries) {
        const full = join(dir, ent.name);
        if (ent.isDirectory())
            await walk(full, base); // 继续下潜
        else if (ent.name.endsWith(".md") && ent.name !== "index.json") {
            const slug = relative(base, full) // 保留嵌套路径
                .replace(/\.md$/, "")
                .replace(/\\/g, "/"); // Win 兼容
            const raw = await readFile(full, "utf8");
            const { data } = matter(raw);

            result.push({
                slug, // 如 "deep/nested/post"
                title: data.title ?? ent.name.replace(/\.md$/, ""),
                date: data.date ?? "",
                description: data.description ?? "",
                tags: Array.isArray(data.tags) ? data.tags : [],
            });
        }
    }
}

await walk(docsDir);

// 按日期倒序
result.sort((a, b) => (b.date || "0").localeCompare(a.date || "0"));

await writeFile(join(docsDir, "index.json"), JSON.stringify(result), "utf8");

console.log("✅ 已扫描嵌套目录，生成 index.json");
