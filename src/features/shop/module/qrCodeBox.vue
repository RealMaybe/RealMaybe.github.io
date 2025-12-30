<template>
    <div class="product-code hide-below-mobile">
        <div class="product-code-box">
            <!-- 提示码 -->
            <div class="svg-box" @mouseenter="showQrcode = true" @mouseleave="handleSvgMouseLeave">
                <svg t="1767102813881" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="1735" width="30" height="30">
                    <path d="M279.407615 240.369341l89.025682 0 0 96.393325-89.025682 0 0-96.393325Z" p-id="1736"
                        fill="#ffffff"></path>
                    <path d="M655.15739 239.8577l89.025682 0 0 96.393325-89.025682 0 0-96.393325Z" p-id="1737"
                        fill="#ffffff"></path>
                    <path d="M279.816928 615.812132l89.025682 0 0 96.393325-89.025682 0 0-96.393325Z" p-id="1738"
                        fill="#ffffff"></path>
                    <path d="M551.908064 583.374038l89.025682 0 0 96.393325-89.025682 0 0-96.393325Z" p-id="1739"
                        fill="#ffffff"></path>
                    <path d="M759.225342 583.374038l89.025682 0 0 96.393325-89.025682 0 0-96.393325Z" p-id="1740"
                        fill="#ffffff"></path>
                    <path d="M536.763466 760.811432l328.064755 0 0 70.29959-328.064755 0 0-70.29959Z" p-id="1741"
                        fill="#ffffff"></path>
                    <path
                        d="M424.509244 191.047067l0 200.972919L223.433996 392.019986 223.433996 191.047067 424.509244 191.047067M487.952833 127.603478 159.990407 127.603478 159.990407 455.668232 487.952833 455.668232 487.952833 127.603478 487.952833 127.603478z"
                        p-id="1742" fill="#ffffff"></path>
                    <path
                        d="M800.15669 191.661037l0 201.177576L600.309383 392.838613 600.309383 191.661037l201.177576 0M863.395623 128.217448 536.865794 128.217448l0 328.064755 326.632157 0L863.497951 128.217448 863.395623 128.217448z"
                        p-id="1743" fill="#ffffff"></path>
                    <path
                        d="M424.304587 568.945738l0 198.721695L223.229339 767.667433 223.229339 568.536425l201.177576 0M487.748176 503.046268 159.78575 503.046268l0 328.064755 328.064755 0L487.850505 503.046268 487.748176 503.046268z"
                        p-id="1744" fill="#ffffff"></path>
                </svg>
                <p class="svg-tips">商品码</p>
            </div>

            <!-- 二维码 -->
            <div class="qrcode-box" v-show="showQrcode" @mouseenter="showQrcode = true"
                @mouseleave="handleQrcodeMouseLeave">
                <QrcodeVue class="img" :value="product.taobaoLink" :size="96" level="M" background="transparent"
                    foreground="#ffffff" render-as="svg" />
                <div class="qrcode-tips">
                    <p>扫一扫</p>
                    <p>在手机淘宝查看</p>
                </div>
            </div>

            <!--  -->
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from "@tsTypes"; // 引入类型
import { ref } from "vue";
import QrcodeVue from "qrcode.vue"

// 接收父组件传值
const { product } = defineProps<{
    product: Product; // 单个产品对象
}>();

// 控制二维码显示的状态
const showQrcode = ref(false);

// 鼠标离开 SVG 时的处理
const handleSvgMouseLeave = () => {
    // 添加延迟，避免鼠标移动到二维码时立即消失
    setTimeout(() => {
        showQrcode.value = false;
    }, 100);
};

// 鼠标离开二维码时的处理
const handleQrcodeMouseLeave = () => {
    showQrcode.value = false;
};
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

@w: 6rem;
@s-w: 3rem;

.product-code {
    position: absolute;
    top: 10%;
    right: 0;
    transform: translateY(-50%);
    max-width: @w;
    .flex-between-center();
    flex-direction: column;

    .product-code-box {
        position: relative;
        width: @s-w;
        height: auto;
    }

    .svg-box {
        position: absolute;
        top: 0;
        right: 0;
        .flex-center();
        flex-direction: column;
        width: @s-w;
        height: auto;
        cursor: pointer;

        .svg-tips {
            font-size: 0.75rem;
        }
    }

    .qrcode-box {
        position: absolute;
        top: 0;
        right: 105%;
        padding: 0.6rem 0.75rem 0.5rem;
        background: @card-bg;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.7);
        border-radius: 0.5rem;

        .img {
            width: @w;
            height: @w;
            margin-bottom: 0.25rem;
        }

        .qrcode-tips {
            width: 100%;
            text-align: center;
            font-size: 0.75rem;
        }
    }
}
</style>
