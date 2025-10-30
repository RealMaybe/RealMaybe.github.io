<!-- 产品信息 -->

<template>
    <div class="product-info">
        <!-- 产品标题和标签 -->
        <div class="product-header">
            <h3 class="product-name">
                <a :href="product.taobaoLink" :title="product.name">{{ product.name }}</a>
            </h3>
            <div class="product-tags" v-if="product.tags?.length">
                <span v-for="tag in product.tags" :key="tag" class="tag" :class="getTagClass(tag)">
                    {{ tag }}
                </span>
            </div>
        </div>

        <!-- 产品描述 -->
        <p class="product-description" v-if="product.description">
            {{ product.description }}
        </p>

        <!-- 价格信息 -->
        <div class="price-section">
            <!-- 区间价 -->
            <template v-if="isRange">
                <span class="current-price">¥ {{ priceRange[0] }} ~ ¥ {{ priceRange[1] }}</span>
            </template>
            <!-- 单价格 -->
            <template v-else>
                <span class="current-price">¥ {{ priceRange[0] }}</span>
            </template>

            <!-- 原价 / 折扣 -->
            <template v-if="hasDiscount">
                <span class="original-price">&nbsp;¥{{ original }}&nbsp;</span>
                <span class="discount">省 ¥{{ saved }}</span>
            </template>
        </div>

        <!-- 产品特色 -->
        <div class="features-section" v-if="product.features?.length">
            <h3>产品特色</h3>
            <ul class="features-list">
                <li v-for="feature in product.features" :key="feature" class="feature-item">
                    <i class="fas fa-check"></i>
                    <span>{{ feature }}</span>
                </li>
            </ul>
        </div>

        <!-- 规格选择 -->
        <div class="specifications-section" v-if="product.specifications?.length">
            <div v-for="spec in product.specifications" :key="spec.type" class="specification">
                <h4>{{ spec.name }}</h4>
                <div class="spec-options">
                    <button v-for="option in spec.options" :key="option.value" type="button" class="spec-option" :class="{
                        selected: selectedSpecs[spec.type] === option.value,
                        'out-of-stock': !option.inStock,
                    }" :disabled="!option.inStock" @click="selectSpec(spec.type, option.value)">
                        <span v-if="option.colorCode" class="color-indicator"
                            :style="{ backgroundColor: option.colorCode }"></span>
                        <span class="option-text">{{ option.displayName }}</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- 购买按钮 -->
        <div class="action-section">
            <button type="button" class="buy-button" @click="goToTaobao">
                <i class="fas fa-shopping-cart"></i>
                <span>跳转淘宝</span>
                <span>立即购买</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from "@tsTypes";
import { ref, computed } from "vue";

const { product } = defineProps<{
    product: Product;
}>();

/* 规格选择 */
const selectedSpecs = ref<Record<string, string | number>>({});

// 初始化：默认选中每个规格里第一个有库存的选项
(product.specifications ?? []).forEach(spec => {
    const available = spec.options.find(o => o.inStock);
    if (available) selectedSpecs.value[spec.type] = available.value;
});

/* 选择规格 */
const selectSpec = (type: string, value: string | number) => { selectedSpecs.value[type] = value };

/* 标签样式 */
const TAG_CLASS: Record<string, string> = {
    新品: "tag-new",
    热卖: "tag-hot",
    限时优惠: "tag-discount",
    推荐: "tag-recommend",
};

/* 获取标签样式 */
const getTagClass = (tag: string) => TAG_CLASS[tag] || "tag-default";

/* 把价格统一成 [lowest, highest] */
const priceRange = computed((): [number, number] => {
    const p = product.price;
    return Array.isArray(p) ? p : [p, p];
});

/* 是否是区间价 */
const isRange = computed(() => priceRange.value[0] !== priceRange.value[1]);

/* 统一用最高价跟原价比较，保证折扣口径一致 */
const original = computed(() => product.originalPrice ?? 0);

/* 是否有折扣 */
const hasDiscount = computed(() => original.value > priceRange.value[1]);

/* 折扣金额 */
const saved = computed(() => (original.value - priceRange.value[1]).toFixed(1));

/* 跳转 */
const goToTaobao = () => { window.open(product.taobaoLink, "_blank") };
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

/* 深色背景变量 */
@bg: @card-bg; // 模块背景
@primary: #FF8C42; // 主色（高亮橙）
@accent: #2DD881; // 强调色（省¥标签）
@text: #EAEAEA; // 主要文字
@gray: #A0AEC0; // 次要文字
@border: rgba(224, 224, 224, 0.15); // 半透明边框
@disabled: #4A5568; // 缺货/禁用

/* 混合器 */
.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

/* 根节点 */
.product-info {
    color: @text;
    font-size: 0.875rem;
    line-height: 1.5;
}

/* 头部：标题 + 标签 */
.product-header {
    .product-name {
        .ellipsis;
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0 0 0.5rem;

        a {
            color: @text;
            text-decoration: none;

            &:hover {
                color: @inline-title;
                text-decoration: underline;
            }
        }
    }

    .product-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.375rem;

        .tag {
            padding: 0.125rem 0.375rem;
            border-radius: 0.125rem;
            font-size: 0.75rem;
            color: @bg;

            &-new {
                background: #FFB86C;
            }

            &-hot {
                background: #FF5F57;
            }

            &-discount {
                background: @primary;
            }

            &-recommend {
                background: #5E9DFF;
            }

            &-default {
                background: @gray;
            }
        }
    }
}

/* 描述 */
.product-description {
    margin: 0.75rem 0;
    color: @gray;
    font-size: 0.8125rem;
}

/* 价格区域 */
.price-section {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin: 0.75rem 0;

    .current-price {
        font-size: 1.375rem;
        font-weight: 700;
        color: @primary;
    }

    .original-price {
        font-size: 0.875rem;
        color: @gray;
        text-decoration: line-through;
    }

    .discount {
        font-size: 0.8125rem;
        color: @accent;
        font-weight: 600;
    }
}

/* 特色列表 */
.features-section {
    margin: 1rem 0;

    h3 {
        font-size: 0.9375rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
        color: @text;
    }

    .features-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.375rem;

        .feature-item {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-size: 0.8125rem;
            color: @text;

            .fa-check {
                color: @accent;
                font-size: 0.75rem;
            }
        }
    }
}

/* 规格选择 */
.specifications-section {
    margin: 1rem 0;

    .specification {
        margin-bottom: 0.75rem;

        h4 {
            font-size: 0.875rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
            color: @text;
        }

        .spec-options {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .spec-option {
            padding: 0.375rem 0.75rem;
            border: 1px solid @border;
            border-radius: 0.25rem;
            background: transparent;
            color: @text;
            font-size: 0.8125rem;
            cursor: pointer;
            .flex-center();
            gap: 0.25rem;
            transition: all .2s;

            &:hover:not(:disabled) {
                border-color: @primary;
                color: @primary;
            }

            &.selected {
                border-color: @primary;
                background: fade(@primary, 15%);
                color: @primary;
                font-weight: 600;
            }

            &.out-of-stock {
                border-style: dashed;
                color: @disabled;
                cursor: not-allowed;
            }

            .color-indicator {
                width: 0.875rem;
                height: 0.875rem;
                margin-right: 0.125rem;
                border-radius: 50%;
                border: 1px solid fade(@text, 20%);
            }
        }
    }
}

/* 购买按钮 */
.action-section {
    margin-top: 1.5rem;

    .buy-button {
        width: 100%;
        height: 2.75rem;
        .flex-center();
        gap: 0.375rem;
        border: none;
        border-radius: 0.5rem;
        background: linear-gradient(135deg, @primary 0%, darken(@primary, 8%) 100%);
        color: @bg;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: opacity .2s;

        &:hover {
            opacity: .9;
        }

        &:active {
            opacity: .8;
        }

        .fa-shopping-cart {
            font-size: 1.125rem;
        }
    }
}

@media (max-width: @mobile-breakpoint) {

    .product-tags,
    .product-description,
    .features-section,
    .specifications-section {
        display: none !important;
    }

    .product-header {
        margin-bottom: 0.5rem;
    }

    .price-section {
        margin: 0.5rem 0;
    }

    .action-section {
        margin-top: 1rem;
    }
}
</style>
