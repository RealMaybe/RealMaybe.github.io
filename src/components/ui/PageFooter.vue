<!-- 页脚 -->

<template>
    <footer id="page-footer">
        <!-- 上方 -->
        <div class="footer-content top">
            <!-- 左侧 -->
            <div class="left">
                <div class="social-links">
                    <template v-for="item in socialLinks" :key="item.name">
                        <a :href="item.link" target="_blank" rel="noopener noreferrer">
                            <i :class="item.icon"></i>
                        </a>
                    </template>
                </div>
            </div>

            <!-- 右侧 -->
            <div class="right links-content">
                <LinksNav />
            </div>
        </div>

        <!-- 下方 -->
        <div class="footer-content bottom">
            <!-- 左侧 -->
            <div class="left links-content">
                <div class="meta-link">
                    <template v-for="item in footerDocLinks" :key="item.name">
                        <RouterLink :to="item.to" rel="noopener noreferrer">
                            {{ item.text }}
                        </RouterLink>
                    </template>
                </div>
            </div>

            <!-- 右侧 -->
            <div class="right">
                <section class="copyright">
                    <span class="personal">
                        <span>© 2025</span>
                        <a href="https://www.realmaybe0429.space/">RealMaybe</a>
                    </span>
                    <span class="divider">|</span>
                    <span>
                        <a href="https://icp.gov.moe/?keyword=20250294" target="_blank">萌ICP备20250294号</a>
                    </span>
                </section>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import LinksNav from "./LinksNav.vue";
import { reactive } from "vue";

const footerDocLinks = reactive([
    { text: "更新日志", to: "/change-log" },
    { text: "致谢名单", to: "/acknowledgments" },
]);

const socialLinks = reactive([
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
    width: 100%;
    text-align: center;
    margin-top: @main-content-padding-top;
    padding: 1.25rem 0;
    color: @text-muted;

    .footer-content {
        .flex-between-center();
        width: 100%;

        @media (max-width: @tablet-breakpoint) {
            .flex-center();

            .links-content {
                display: none;
            }
        }
    }

    .left {
        .social-links {
            .flex-between-start();
            margin-bottom: .5rem;
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

        // 功能链接样式
        .meta-link {
            .flex-start();

            a {
                color: @text-muted;
                text-decoration: none;
                font-size: 0.9rem;
                transition: color 0.3s;
                margin: 0 .25rem;

                &:hover {
                    color: @secondary-color;
                    text-decoration: underline;
                }

                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .right {
        .copyright {
            span {
                padding: 0 0.25rem;

                &.personal {
                    a {
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            a {
                color: @text-muted;
            }

            @media (max-width: @mobile-breakpoint) {
                .flex-center();
                flex-direction: column;

                .divider {
                    display: none;
                }
            }
        }
    }
}
</style>
