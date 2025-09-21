<!-- 页脚 -->

<template>
    <footer id="page-footer">
        <!-- 上方 -->
        <div class="footer-content top">
            <!-- 左侧 -->
            <div class="left">
                <SocialLinks />
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
                <MetaLink />
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
import MetaLink from "./MetaLink.vue";
import SocialLinks from "./SocialLinks.vue";
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
