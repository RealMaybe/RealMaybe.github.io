import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

/* ========== */

export default defineConfig({
    plugins: [vue(), vueDevTools()],
    server: {
        port: 429, // 设置服务器端口号
        open: true, // 启动时自动打开浏览器
        host: "0.0.0.0", // 可选：允许外部访问
    },
    resolve: {
        alias: {
            // 主要的别名
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@tsTypes": fileURLToPath(new URL("./tsTypes/index.d.ts", import.meta.url)),
            // 数据
            "@pageData": fileURLToPath(new URL("./src/assets/data/data.ts", import.meta.url)),
            // 路径
            "@style": fileURLToPath(new URL("./src/assets/style", import.meta.url)),
            "@img": fileURLToPath(new URL("./public/images", import.meta.url)),
            "@images": fileURLToPath(new URL("./public/images", import.meta.url)),
        },
    },
    build: {
        assetsDir: "assets", // 将所有静态资源放在 assets 文件夹中
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                "404": resolve(__dirname, "404.html"),
            },
            output: {
                entryFileNames: "script/main-[hash].js", // 入口文件放在 script 文件夹中
                chunkFileNames: "script/[name]-[hash].js", // JS 文件放在 script 文件夹中
                assetFileNames: ({ name }) => {
                    // CSS 文件放在 style 文件夹中
                    if (/\.(css|scss|sass|less)$/.test(name || ""))
                        return "style/[name]-[hash].[ext]";

                    // 图片资源放在 images 文件夹中
                    if (/\.(png|jpe?g|gif|svg)$/.test(name || ""))
                        return "images/[name]-[hash].[ext]";

                    // 字体文件放在 fonts 文件夹中
                    if (/\.(woff2?|eot|ttf|otf)$/.test(name || ""))
                        return "fonts/[name]-[hash].[ext]";

                    // 媒体文件放在 media 文件夹中
                    if (/\.(mp3|mp4|webm)$/.test(name || "")) return "media/[name]-[hash].[ext]";

                    // 文档文件放在 documents 文件夹中
                    if (/\.(pdf|md|txt)$/.test(name || "")) return "documents/[name]-[hash].[ext]";

                    // 其他静态资源放在 assets 文件夹中
                    return "assets/[name]-[hash].[ext]";
                },
                manualChunks: id => {
                    if (id.includes("node_modules")) return "vendor"; // 将所有第三方依赖打包到一个名为 vendor 的文件中
                },
            },
        },
    },
});
