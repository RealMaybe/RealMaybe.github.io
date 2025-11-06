<template>
    <MobileAccessReminder />

    <section class="acknowledgments">
        <!-- 标题区域 -->
        <thanksDocs />

        <!-- 致谢内容列表区域 -->
        <ListOfThanks :thanksList="thanksData.list" :orderedKeys="orderedThanksKeys" />

        <!-- 联系我们区域 -->
        <!-- <div class="markdown-body">
            <hr />
        </div>
        <div class="call-to-action">
            <h2>共同塑造未来</h2>
            <p>这个专栏记录着每一位推动网站进步的贡献者。</p>
            <p>
                <span>如果您也发现了问题，或有一个让网站变得更好的绝妙想法，欢迎您</span>
                <RouterLink to="/acknowledgments/feedback" aria-label="提交反馈">
                    <i class="fa fa-pencil-alt fa-fw"></i> 提交反馈
                </RouterLink>
                <span>。</span>
            </p>
            <p class="center">
                <span>您的名字</span>
                <span class="hide-below-mobile">，</span>
                <span>将很可能出现在这里</span>
                <span class="hide-below-mobile">。</span>
            </p>
        </div> -->

        <!-- 页脚区域 -->
        <footer class="thanks-page-footer">
            <p class="info-text">
                <span>以上各模块所列，皆为星空中平等的光点</span>
                <span class="hide-below-mobile">，</span>
                <span>谨此致以同等谢意</span>
            </p>
            <p>本页面数据最后更新日期: {{ thanksData.lastUpdated }}</p>
        </footer>
    </section>
</template>

<script setup lang="ts">
// 引入组件
import MobileAccessReminder from "@/components/ui/MobileAccessReminder.vue";
import thanksDocs from "@/assets/docs/thanks/Acknowledgments.md";
import ListOfThanks from "@/features/thanks/ListOfThanks.vue";

// 引入数据
import { default as thanksData, orderedThanksKeys } from "@data/thanks";
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

// .call-to-action {
//     // 变量
//     @cta-bg: rgba(30, 30, 46, 0.45);
//     @cta-backdrop: blur(8px);
//     @cta-text: #e0e0e0;
//     @cta-heading: #ffffff;
//     @cta-link: #66b2ff;
//     @cta-max-width: 40rem;
//     @cta-padding: 1.5rem 1.75rem;
//     @cta-border-radius: 0.5rem;

//     // 样式
//     background: @cta-bg;
//     backdrop-filter: @cta-backdrop;
//     -webkit-backdrop-filter: @cta-backdrop;
//     color: @cta-text;
//     padding: @cta-padding;
//     border-radius: @cta-border-radius;
//     margin: 3rem auto;
//     max-width: @cta-max-width;
//     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//     box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.35);

//     .center {
//         width: 100%;
//         text-align: center;

//         @media (max-width: @mobile-breakpoint) {
//             display: flex;
//             flex-direction: column;
//         }
//     }

//     h2 {
//         font-size: 1.125rem;
//         font-weight: 600;
//         margin: 0 0 0.5rem;
//         color: @cta-heading;

//         @media (max-width: @mobile-breakpoint) {
//             font-size: 1rem;
//         }
//     }

//     p {
//         font-size: 0.875rem;
//         line-height: 1.6;
//         margin: 0 0 0.5rem;

//         @media (max-width: @mobile-breakpoint) {
//             font-size: 0.75rem;
//         }

//         &:last-of-type {
//             margin-bottom: 0;
//             opacity: 0.85;
//         }
//     }

//     a {
//         display: inline-flex;
//         align-items: center;
//         gap: 0.25rem;
//         margin: 0 0.25rem;
//         color: @cta-link;
//         font-weight: 600;
//         text-decoration: none;
//         border-bottom: 0.0625rem solid transparent;
//         transition: all 0.2s ease;

//         &:hover,
//         &:focus {
//             border-bottom-color: @cta-link;
//             outline: none;
//         }
//     }
// }

.thanks-page-footer {
    width: 100%;
    text-align: right;
    color: @text-muted;
    font-size: 0.75rem;
    line-height: 1.5rem;

    @media (max-width: @mobile-breakpoint) {
        .info-text {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
