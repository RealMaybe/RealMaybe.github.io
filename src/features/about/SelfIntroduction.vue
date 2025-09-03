<!-- 自我介绍 -->

<template>
    <section class="self-introduction">
        <h2>
            <i class="fas fa-feather-alt"></i>
            <span>关于我</span>
        </h2>

        <div class="introduction-text">
            <p>嗨，初次见面，我是 RealMaybe，你也可以叫我「许真」或「尘羽」。</p>

            <br>

            <p>在屏幕的这一端，我同时扮演两种身份：</p>
            <ul>
                <li>白天，用代码把想象力翻译成可见的界面；</li>
                <li>夜晚，把键盘换成笔与麦克风，让旋律和文字替我继续做梦。</li>
            </ul>

            <br>

            <p>我喜欢三件事：</p>
            <ul>
                <li>第一，用声音讲故事。不管是翻唱还是即兴哼唱，我总想把当下的情绪唱成一段可以回放的时光。</li>
                <li>第二，用文字搭桥梁。写下的每一句，都是给未来自己的一封信，也希望能与陌生的你擦肩而过时，交换一个会心的眼神。</li>
                <li>第三，用游戏看世界。每一次按下开始键，都是一次短暂的远行——在别人的规则里，练习成为更勇敢的自己。</li>
            </ul>

            <br>

            <p>语言是我偷偷收藏的钥匙。英语、日语、德语……每多学会一句，就像多开了一扇窗，让风从更远的地方吹进来。</p>
            <p>当世界静得只剩心跳，不妨来打个招呼。也许我们能在某段旋律里、某行诗句中、某场游戏的终点，恰好相遇。</p>
            <p>相遇已是奇迹，偏偏那一刻你我同时回头。既然命运按下了暂停键，不如把这一秒存成好友申请？</p>
        </div>
    </section>
</template>

<style scoped lang="less">
@import url("@style/page/index-public.less");

.self-introduction {
    flex: 1 1 100% !important;

    .introduction-text {
        p {
            line-height: 1.5;
            margin-bottom: 0.5rem;

            &:last-child {
                margin-bottom: 0;
            }
        }

        ul {
            padding-left: 1.5rem;
        }
    }
}
</style>