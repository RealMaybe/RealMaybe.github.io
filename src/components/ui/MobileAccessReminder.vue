<!-- 移动设备访问提醒 -->

<template>
    <!-- 只有当检测到是移动设备且用户未关闭时，才会显示这个提示 -->
    <div v-if="isMobile && isVisible" class="mobile-access-reminder" role="alert">
        <!-- 关闭按钮 -->
        <div class="close-btn" @click="closeNotice" aria-label="关闭提示">
            <i class="fas fa-times"></i>
        </div>

        <!-- 提示标题和内容 -->
        <h3>{{ currentMessage.title }}</h3>
        <p v-for="(line, index) in currentMessage.content" :key="index">
            {{ line }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

/* ========== */

// 1. 定义单条消息的接口
interface MobileMessage {
    title: string;
    content: Array<string>;
}

/* ========== */

// 提示消息
const mobileMessages: Array<MobileMessage> = [
    {
        title: "💡 温馨提示",
        content: [
            "本页面针对桌面端体验进行了优化，在移动设备上可能无法完美呈现。",
            "为了获得最佳效果，建议使用电脑或平板访问。",
        ],
    },
    {
        title: "🐾 移动端访问提示",
        content: [
            "亲爱的小伙伴，这个页面在手机上看起来可能有点“拘谨”哦！",
            "为了更舒心的体验，推荐在屏幕更大的设备上查看。",
        ],
    },
    {
        title: "💡 体验提示：",
        content: [
            "为了更好的阅读体验，本页面推荐在电脑或平板等大屏设备上浏览。",
            "在手机上查看可能会有布局上的小遗憾哦！",
        ],
    },
];

// 当前选中的消息，初始化为列表中的第一条消息
const currentMessage = ref<MobileMessage>(mobileMessages[0]);
/** sessionStorage 的键名 */
const STORAGE_KEY: string = "dismissedMobileDocNotice";
/** 可见状态 */
const isVisible = ref(true);
/** 移动设备检测状态 */
const isMobile = ref(false);

/* ========== */

// 检测移动设备的函数
const checkIfMobile = (): void => {
    /** 移动设备断点 */
    const isSmallScreen: boolean = window.matchMedia("(max-width: 767px)").matches;
    /** 移动设备检测 */
    const isMobileDevice: boolean =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    isMobile.value = isMobileDevice || isSmallScreen;
};

// 随机选择一条消息的函数
const selectRandomMessage = (): void => {
    const randomIndex: number = Math.floor(Math.random() * mobileMessages.length);
    currentMessage.value = mobileMessages[randomIndex];
};

// 关闭提示的方法
const closeNotice = (): void => {
    isVisible.value = false;

    // 将关闭状态存入 sessionStorage
    try {
        sessionStorage.setItem(STORAGE_KEY, "true");
    } catch (err: unknown) {
        console.warn("无法写入 sessionStorage:", err); // 如果 sessionStorage 不可用，组件行为会回退到每次都显示
    }
};

// 生命周期钩子

onMounted(() => {
    // 检查 sessionStorage 决定是否可能显示
    let shouldShow = true;

    // 尝试从 sessionStorage 读取关闭状态
    try {
        const isDismissed: string | null = sessionStorage.getItem(STORAGE_KEY);

        if (isDismissed === "true") {
            isVisible.value = false;
            shouldShow = false; // 不需要显示，也就不需要选消息
        }
    } catch (err) {
        console.warn("无法读取 sessionStorage:", err);
    }

    // 如果可能显示，则选择消息并检测设备
    if (shouldShow) selectRandomMessage(); // 只在可能显示时才选消息

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile as EventListener);
});

onUnmounted(() => window.removeEventListener("resize", checkIfMobile as EventListener));
</script>

<style scoped lang="less">
@import url("@style/public-page.less");

// 移动端访问提醒
.mobile-access-reminder {
    font-size: 0.875rem;
    border: 0.0625rem solid @text-muted;
    border-radius: 0.5rem;
    padding: 1rem;
    display: none;
    position: relative;

    h3 {
        color: #82aaff;
        width: 100%;
        text-align: center;
        margin: 0 0 0.5rem;
    }

    .close-btn {
        @margin: 0.7rem;

        position: absolute;
        top: @margin;
        right: @margin;
        width: 1rem;
        height: 1rem;
        .flex-center();
        cursor: pointer;
        opacity: 0.7;

        i {
            font-size: 1rem;
        }

        &:hover {
            opacity: 1;
        }
    }

    @media (max-width: @mobile-breakpoint) {
        display: block;
        width: 100%;
    }
}
</style>
