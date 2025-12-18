<template>
    <div class="qrcode-box hide-below-mobile">
        <img :src="product.qrcode" :alt="product.name">
        <div class="qrcode-tips">
            <p>扫一扫</p>
            <p>在手机淘宝查看</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入类型
import type { Product } from "@tsTypes";

// 接收父组件传值
const { product } = defineProps<{
    product: Product // 单个产品对象
}>();
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

@w: 6rem;

.qrcode-box {
    position: absolute;
    top: 40%;
    right: 0;
    transform: translateY(-50%);
    max-width: @w;
    .flex-between-center();
    flex-direction: column;

    img {
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
</style>