<style scoped lang="less">
@cta-bg: rgba(30, 30, 46, 0.45);
@cta-backdrop: blur(8px);
@cta-text: #e0e0e0;
@cta-heading: #ffffff;
@cta-link: #66b2ff;
@cta-max-width: 40rem;
@cta-padding: 1.5rem 1.75rem;
@cta-border-radius: 0.5rem;

.call-to-action {
    background: @cta-bg;
    backdrop-filter: @cta-backdrop;
    -webkit-backdrop-filter: @cta-backdrop;
    color: @cta-text;
    padding: @cta-padding;
    border-radius: @cta-border-radius;
    margin: 3rem auto 2rem;
    max-width: @cta-max-width;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.35);

    .center {
        width: 100%;
        text-align: center;
    }

    h2 {
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
        color: @cta-heading;
    }

    p {
        font-size: 0.875rem;
        line-height: 1.6;
        margin: 0 0 0.5rem;

        &:last-of-type {
            margin-bottom: 0;
            opacity: 0.85;
        }
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        color: @cta-link;
        font-weight: 600;
        text-decoration: none;
        border-bottom: 0.0625rem solid transparent;
        transition: all 0.2s ease;

        &:hover,
        &:focus {
            border-bottom-color: @cta-link;
            outline: none;
        }
    }
}
</style>

---

<div class="call-to-action">
    <h2>共同塑造未来</h2>
    <p>
        这个专栏记录着每一位推动网站进步的贡献者。如果您也发现了问题，或有一个让网站变得更好的绝妙想法，欢迎您
        <RouterLink to="/acknowledgments/contribution-guidelines" aria-label="查看贡献指南">
            <i class="fa fa-pencil-alt fa-fw"></i> 提交反馈
        </RouterLink>。
    </p>
    <p class="center">您的名字，将很可能出现在这里。</p>
</div>
