---
{ version: { now: 1.4.1, old: 1.3.2 } }
---

# <i class="fa-solid fa-paw"></i> 更新日志

> **<i class="fa-solid fa-cat"></i> 喵喵说明**
>
> - 本网站正在茁壮成长，会经常“打打闹闹”地更新版本！
> - 不用担心错过什么，记得常回来摸摸鱼、看看新变化就好啦～ 🐟
> - 某一天更新了好几个版本也是很正常的事情
> - 不用担心，每次更新都会尽量保持向下兼容，以减少对现有功能的影响

---

> **🔖 快速导航**
>
> - 本页收录至最新版本 **v{{frontmatter.version.now}}**。
> - 若需查看 **v{{frontmatter.version.old}}** 及更早的完整历史，请前往<RouterLink to="/change-log/history">「更新日志 · 历史版本」</RouterLink>页面。

---

## v1.4.2 – 2025/12/19

**功能增强与体验优化 🛠**

> 本次更新引入跨端访问新功能，并同步优化了数据渲染与核心内容，旨在提供更流畅、统一的浏览体验。

- <span class="tag-inline-title">【功能】</span> **新增商品二维码，支持跨端无缝访问**
    - 在电脑及平板端的商品页中，新增了商品二维码。
    - 用户使用<ins>手机淘宝</ins>扫码，即可在移动设备快速打开商品详情页。
- <span class="tag-inline-title">【优化】</span> **重构核心数据渲染逻辑，提升项目的可维护性与扩展性。**
- <span class="tag-inline-title">【内容】</span> **同步并更新了核心文档与展示数据**。
- <span class="tag-inline-title">【修复】</span> **修复了<RouterLink to="/shop">「我的小店」</RouterLink>页面的布局错位与部分商品信息显示问题**。

## v1.4.1 – 2025/12/15

**文档内容优化与细节调整 📝**

> 本次更新聚焦于内容优化与细节打磨，持续提升用户体验。

- <span class="tag-inline-title">【内容】</span> **更新部分文档与数据**
    - 更新了店铺数据与致谢名单。
- <span class="tag-inline-title">【优化】</span> **优化文档结构与路由逻辑**
    - 重构了文档层次，提升了信息查找效率。
    - 优化了路由配置及部分路由链接的渲染逻辑。
- <span class="tag-inline-title">【修复】</span> **修复<RouterLink to="/acknowledgments">「致谢专栏」</RouterLink>中的显示与数据问题**
    - 解决了页面内容显示异常，并修正了原始数据中的错误。

## v1.4.0 – 2025/11/22

**架构升级与战略调整 🚀**

> 本次更新专注于核心架构重构与内容战略调整，为项目未来的专业化发展与多平台体系奠定基础。

- <span class="tag-inline-title">【重构】</span> **重构「更新日志」体系，启用<ins>历史版本</ins>页面**
    - 主页面<RouterLink to="/change-log">「更新日志」</RouterLink>现专注于展示**近期版本与未来规划**
    - 旧版本已整体迁移至<RouterLink to="/change-log/history">「更新日志 · 历史版本」</RouterLink>页面，确保完整项目历史的可追溯性
- <span class="tag-inline-title">【优化】</span> **优化 Markdown 代码块的语法高亮与主题适配**
    - 统一并美化了文档中代码块的视觉样式，提升技术内容的可读性
- <span class="tag-inline-title">【战略】</span> **启动多域名内容战略，优化主站定位**
    - 已暂停主站内<ins>「文档」</ins>与<ins>「博客」</ins>页面的开发，相关功能将规划迁移至**专属新域名**
    - 此举旨在为主站提供更清晰的定位，并为「文档」与「博客」打造更专业、独立的平台体验

> 具体的域名方案与迁移计划正在<ins>**规划制定中**</ins>，将在后续版本中公布，敬请期待！

---

> **📚 探索完整历史**：<i class="fa-solid fa-box-archive"></i> 历史版本（v{{ frontmatter.version.old }} 及更早）已移至<RouterLink to="/change-log/history">「更新日志 · 历史版本」</RouterLink>页面，记录了项目的完整成长故事。
