<template>
    <!-- 只有当检测到是移动设备时，才显示这个提示 -->
    <div v-if="isMobile" class="mobile-access-reminder">
        <h3>{{ currentMessage.title }}</h3>
        <p v-for="(line, index) in currentMessage.content" :key="index">{{ line }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 移动设备检测
const isMobile = ref(false);

// 检测移动设备
const checkIfMobile = () => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(navigator.userAgent);
    const isSmallScreen = window.innerWidth < 768; // 常见移动设备断点

    isMobile.value = isMobileDevice || isSmallScreen;
};

// 提示消息数组
const mobileMessages = [{
    title: "💡 温馨提示",
    content: [
        "本页面针对桌面端体验进行了优化，在移动设备上可能无法完美呈现。",
        "为了获得最佳效果，建议使用电脑或平板访问。",
    ],
}, {
    title: "🐾 移动端访问提示",
    content: [
        `亲爱的小伙伴，这个页面在手机上看起来可能有点"拘谨"哦！`,
        `为了更舒心的体验，推荐在屏幕更大的设备上查看。`,
    ],
}, {
    title: "⚠️ 兼容性说明",
    content: [
        "当前页面布局尚未适配移动端视图。",
        "部分内容在窄屏设备上的显示效果可能不符合预期，敬请知悉。",
    ],
}];

// 当前选中的消息
const currentMessage = ref(mobileMessages[0]);

// 随机选择一条消息
const selectRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * mobileMessages.length);
    currentMessage.value = mobileMessages[randomIndex];
};

// 生命周期钩子
onMounted(() => {
    checkIfMobile();
    selectRandomMessage();
    window.addEventListener("resize", checkIfMobile);
});

onUnmounted(() => {
    window.removeEventListener("resize", checkIfMobile);
});
</script>

<style scoped lang="less">
@import url("@style/public/var.less");

// 移动端访问提醒
.mobile-access-reminder {
    font-size: 0.875rem;
    border: 0.0625rem solid @text-muted;
    border-radius: 0.5rem;
    padding: 1rem;
    display: none;

    h3 {
        color: #82aaff;
        width: 100%;
        text-align: center;
        margin: 0 0 0.5rem;
    }

    @media (max-width: @mobile-breakpoint) {
        display: block;
        width: 100%;
    }
}
</style>
