import { parseUrlParams } from "./url.js";

export const getVideoID = url => {
    const params = parseUrlParams(1, url);
    if (params.bvid) return params.bvid;

    return null;
};

/* ========== */

const { createApp, reactive } = Vue;

const app = createApp({
    setup() {
        const characters = reactive([
            { name: "Real_KyoShinn", description: "许家大少爷，蓝发正太外表，有点天然呆" },
            { name: "Unreal_KyoKa", description: "许家二少爷，异色瞳少年，冷静寡言，只把温柔留给哥哥" },
            { name: "尘羽流年", description: "猫系亚人少主，银发猫耳，温柔守矩，尾巴常被妹妹当抱枕" },
            { name: "尘羽翊岚", description: "傲娇大小姐，橘红发赤瞳，讨厌传统，最黏哥哥" },
        ]);

        const skills = reactive([
            { name: "HTML5", level: 90 },
            { name: "CSS3 / Less", level: 85 },
            { name: "JavaScript", level: 88 },
            { name: "TypeScript", level: 80 },
            { name: "Vue3", level: 85 },
        ]);

        const languages = reactive([
            { name: "英语", level: 50, icon: "fas fa-language" },
            { name: "日语", level: 20, icon: "fas fa-language" },
            { name: "德语", level: 10, icon: "fas fa-language" },
        ]);

        const hobbies = reactive([
            { name: "唱歌", icon: "fas fa-music" },
            { name: "写作", icon: "fas fa-pen" },
            { name: "游戏", icon: "fas fa-gamepad" },
            { name: "编程", icon: "fas fa-laptop-code" },
        ]);

        const links = reactive([
            { name: "Weibo", icon: "fab fa-weibo", link: "https://weibo.com/u/5678690912" },
            { name: "Bilibili", icon: "fab fa-bilibili", link: "https://space.bilibili.com/175020735" },
            { name: "GitHub", icon: "fab fa-github", link: "https://github.com/realmaybe" },
            { name: "Twitter", icon: "fab fa-twitter", link: "https://x.com/RealMaybe0429" },
        ]);

        const creations = reactive([
            {
                link: "https://player.bilibili.com/player.html?autoplay=false&bvid=BV1v6N1znEKw",
                title: "让现在……成为永远……｜记 · 念｜RealMaybe｜中文翻唱",
            },
        ]);

        console.log(getVideoID(creations[0].link));

        return {
            characters,
            skills,
            languages,
            hobbies,
            links,
            creations,
        };
    },
});

app.mount("#app");
