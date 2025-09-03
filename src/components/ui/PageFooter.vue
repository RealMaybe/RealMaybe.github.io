<!-- 底部 -->

<template>
    <footer id="page-footer">
        <div class="social-links">
            <template v-for="item in links" :key="item.name">
                <a :href="item.link" target="_blank" rel="noopener noreferrer">
                    <i :class="item.icon"></i>
                </a>
            </template>
        </div>

        <div class="right">
            <LinksNav />

            <section class="copyright">
                <span>© 2025 RealMaybe</span>
                <span>
                    <a href="https://icp.gov.moe/?keyword=20250294" target="_blank">萌ICP备20250294号</a>
                </span>
            </section>
        </div>
    </footer>
</template>

<script setup lang="ts">
import LinksNav from "./LinksNav.vue";
import { reactive } from "vue";

const links = reactive([
    { name: "Weibo", icon: "fab fa-weibo", link: "https://weibo.com/u/5678690912" },
    { name: "Bilibili", icon: "fab fa-bilibili", link: "https://space.bilibili.com/175020735" },
    { name: "GitHub", icon: "fab fa-github", link: "https://github.com/realmaybe" },
    { name: "Twitter", icon: "fab fa-twitter", link: "https://x.com/RealMaybe0429" },
]);
</script>

<style scoped lang="less">
@import url("@style/public/flex.less");
@import url("@style/public/var.less");

footer {
    .flex-between-center();
    width: 100%;
    text-align: center;
    margin-top: @main-content-padding-top;
    padding: 1.25rem 0;
    color: @text-muted;

    .right {
        .flex-start-end();
        flex-direction: column;

        nav {
            margin-bottom: 1rem;
        }
    }

    @media (max-width: @tablet-breakpoint) {
        flex-direction: column;

        nav {
            display: none !important;
        }

        .social-links {
            margin-bottom: 0.5rem;
        }
    }

    @media (max-width: @mobile-breakpoint) {
        .copyright {
            .flex-center();
            flex-direction: column
        }
    }

    .social-links {
        .flex-between-center();
        gap: 1.25rem;

        a {
            color: @text-color;
            font-size: 1.5rem;
            transition: color 0.3s;

            &:hover {
                color: @secondary-color;
            }
        }
    }

    .copyright {
        span {
            padding: 0 0.25rem;
        }

        a {
            color: @text-muted;
        }
    }
}
</style>
