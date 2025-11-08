---
{ version: { now: 1.3.2, old: 1.2.5 } }
---

# <i class="fa-solid fa-paw"></i> 更新日志

> **<i class="fa-solid fa-cat"></i> 喵喵说明**
>
> - 本网站正在茁壮成长，会经常“打打闹闹”地更新版本！
> - 不用担心错过什么，记得常回来摸摸鱼、看看新变化就好啦～ 🐟
> - 某一天更新了好几个版本也是很正常的事情
> - 不用担心，每次更新都会尽量保持向下兼容，以减少对现有功能的影响

<!-- > - **📚 探索历史**：想了解网站的完整成长故事？请访问<RouterLink to="/change-log/history">「更新日志 - 历史版本」</RouterLink>页面。 -->

<!-- > <i class="fa-solid fa-box-archive"></i> 历史版本（v{{ frontmatter.version.old }} 及更早）已移至<RouterLink to="/change-log/history">「更新日志 · 历史版本」</RouterLink>页面。 -->

---

## v1.3.2 – 2025/11/09

**一次面向未来的基础设施准备 🚧**

> 本版本主要为后续的重要更新进行底层铺垫，对用户当前体验无任何影响。

- <span class="tag-inline-title">【基建】</span>新增多项<ins>隐藏路由</ins>，为未来功能铺路
    - 初始化「更新日志 · 历史版本」页面，为即将到来的日志分页功能奠定基础
    - 新增「文档」页面，用于新功能的前置测试与验证
    - 已完成相关页面的路由配置与渲染逻辑调整
- <span class="tag-inline-title">【优化】</span>全面优化项目的 TypeScript 类型定义
    - 提升了代码的类型安全性与开发体验
    - 为后续复杂功能的开发奠定了更可靠的基础

## v1.3.1 – 2025/11/06

**「致谢专栏」核心功能上线，正式发布！** ✨

> 本版本完成了<RouterLink to="/acknowledgments">「致谢专栏」</RouterLink>页面的**核心内容建设**与体验优化，使其以完整的形态与大家见面。

- <span class="tag-inline-title">【功能】</span>正式发布<RouterLink to="/acknowledgments">「致谢专栏」</RouterLink>页面，构建了页面的实际内容
    - 完成了从内容框架、数据结构到视觉样式的全面构建
    - 核心致谢模块已全部就位，包含：
        - **🌌 筑星者：** <ins>构筑此片星空基座的梦想家与工程师</ins>
        - **✨ 塑星者：** <ins>通过测试、反馈、建议等方式帮助网站改进的伙伴</ins>
        - **🚀 引星者：** <ins>提供灵感、资源、推广等支持的伙伴</ins>
        - **🌟 智慧星：** <ins>在创意的星河中，为我照亮未知可能性的 AI 伙伴</ins>
        - **⚙️ 辰星石：** <ins>构建这个数字世界所依赖的技术、框架与工具</ins>
- <span class="tag-inline-title">【样式】</span>为「致谢专栏」打造了全新的视觉设计与交互体验
    - 基于预览版反馈，优化了整体排版、视觉细节与模块展示效果
- <span class="tag-inline-title">【样式】</span>对所有文档类页面的样式进行了微调，使其更符合整体风格与阅读体验
- <span class="tag-inline-title">【重构】</span>对「404」页面进行升级
    - 更新了提示文案、视觉样式与交互功能，让未知旅程也变得友善
- <span class="tag-inline-title">【优化】</span>持续优化导航栏的交互与渲染逻辑
    - 进一步提升了响应速度与操作流畅度

> 衷心感谢所有在预览期间给予反馈的朋友，是你们的建议让这个页面变得更好！🎉
>
> **版本管理说明：** 随着 `v1.3.1` 正式版的发布，`v1.3.1-preview` 系列的预览日志已被**归档**，以确保更新日志的清晰与聚焦。

> 我们将在后续版本中为「致谢专栏」增建独立的「反馈」页面，为您提供更便捷的建议提交渠道。

## v1.3.0 – 2025/10/22

**一次专注于导航与体验的全面升级 🚀**

- <span class="tag-inline-title">【功能】</span>正式发布<RouterLink to="/shop">「我的小店」</RouterLink>页面，由<ins>**隐藏路由**</ins>升级为<ins>**标准路由**</ins>
    - 采用站内页面中转形式，用户可先浏览商品详情，再自主决定是否跳转购买
    - 支持商品图片、名称、价格与简介的**结构化展示**
    - 当前建议在**宽屏设备**（宽度 ≥ 768 px）下浏览以获得完整体验
        - 在超窄屏（宽度 < 480 px）下，部分内容可能无法完整显示
        - 我们将在后续版本中持续优化其多端适配表现
- <span class="tag-inline-title">【功能】</span>在<RouterLink to="/work">「我的作品」</RouterLink>中新增「写的小说」模块
    - 集中展示小说创作内容，方便查阅~ 📚
- <span class="tag-inline-title">【样式】</span>优化<RouterLink to="/shop">「我的小店」</RouterLink>页面商品卡片的视觉样式与交互细节，提升信息可读性与操作反馈
- <span class="tag-inline-title">【样式】</span>更新「OC 角色」页面样式，精简重复渲染逻辑，提升页面加载效率
- <span class="tag-inline-title">【重构】</span>**完全重做<ins>移动端侧向导航栏</ins>**，交互更自然流畅
    - 将其重构为独立组件，提升了代码的可维护性与模块化程度
    - 增加点击空白区域自动收起导航栏的交互逻辑及相应提示

> 致谢专栏的完整内容更新已安排进 v1.3.1，届时再来和大家认真道谢！✨

---

## v1.2.5 – 2025/10/11

- <span class="tag-inline-title">【功能】</span>新增隐藏路由「文档」页面，用于集中管理项目相关文档
    - 该页面暂未对外开放，为后续内容发布做准备
- <span class="tag-inline-title">【重构】</span>调整部分页面的内容渲染逻辑，提升一致性与可维护性
- <span class="tag-inline-title">【优化】</span>更新导航栏中部分条目标题，使其更清晰地反映对应页面功能

## v1.2.4 – 2025/10/06

- <span class="tag-inline-title">【优化】</span>统一处理全站路由链接，确保跨页面跳转的一致性与可靠性
- <span class="tag-inline-title">【优化】</span>在<RouterLink to="/work">「我的作品」</RouterLink>页面的模块刷新逻辑中引入节流控制，防止重复操作
- <span class="tag-inline-title">【文档】</span>重构<RouterLink to="/change-log">「更新日志」</RouterLink>文档的历史记录表述与格式，提升整体规范性与可读性
- <span class="tag-inline-title">【性能】</span>优化站点 LOGO 渲染逻辑，提升页面加载性能与视觉一致性
- <span class="tag-inline-title">【样式】</span>调整导航栏与 LOGO 区域的视觉样式，增强阅读体验与整体美观度

## v1.2.3 – 2025/10/02

- <span class="tag-inline-title">【优化】</span>全面调整各模块的样式引入逻辑，提升在不同屏幕尺寸下的自适应表现
- <span class="tag-inline-title">【优化】</span>为页脚的特殊导航栏添加了路由高亮效果，与主导航栏保持一致的交互体验
- <span class="tag-inline-title">【调整】</span>暂时移除导航栏中的「小店」外部跳转链接
    - 暂且将「小店」入口改为隐藏路由
    - 正在精心设计独立的「小店」页面，将直接跳转淘宝的设计改为更符合一体化理念的站内页面
    - 预计在 `v1.3.0` 版本中与大家见面 🛍️
- <span class="tag-inline-title">【文档】</span>小幅更新<RouterLink to="/acknowledgments">「致谢专栏」</RouterLink>页面内容
    - 这只是个开始，后续版本会为大家带来更完整、更详细的致谢内容整理 ✨

## v1.2.2 – 2025/09/28

- <span class="tag-inline-title">【优化】</span>优化导航栏的点击响应体验
- <span class="tag-inline-title">【重构】</span>更新页脚导航栏的样式和渲染逻辑
- <span class="tag-inline-title">【重构】</span>调整<RouterLink to="/work">「我的作品」</RouterLink>页面的渲染方式，为后续功能开发做准备
- <span class="tag-inline-title">【调整】</span>暂时关闭「博客」页面访问路由，待技术方案完善后重新开放
    - 博客功能仍在规划中，当前调整是为了提供更完善的使用体验
- <span class="tag-inline-title">【优化】</span>更新<RouterLink to="/about">「关于我」</RouterLink>页面的内容，加入新的展示元素
- <span class="tag-inline-title">【修复】</span>修复部分内容的表述错误

## v1.2.1 – 2025/09/22

- <span class="tag-inline-title">【优化】</span>清理并移除了未使用的字体文件，减小项目体积
- <span class="tag-inline-title">【基建】</span>将 Font Awesome 图标库的引入方式从 CDN 改为通过 `pnpm` 包管理 (`@fortawesome/fontawesome-free`)
    - 此举提升了开发依赖管理的规范性和可靠性

## v1.2.0 – 2025/09/21

- <span class="tag-inline-title">【优化】</span>升级导航栏，提升移动体验
    - <RouterLink to="/acknowledgments">「致谢专栏」</RouterLink>页面和<RouterLink to="/change-log">「更新日志」</RouterLink>页面的入口已正式开放
    - 可通过 PC 端的页脚链接访问，移动端用户可通过侧边栏底部链接访问
- <span class="tag-inline-title">【功能】</span>新增回到顶部按钮（仅移动端 / 窄屏状态显示），方便用户快速返回页面顶部
- <span class="tag-inline-title">【优化】</span>优化移动端兼容提示组件
    - 新增「关闭」按钮，并支持在当前浏览会话中记忆用户的关闭选择
- <span class="tag-inline-title">【样式】</span>优化侧边栏的动画效果和视觉样式

---

## v1.1.1 – 2025/09/20

- <span class="tag-inline-title">【功能】</span>为部分文档内容区域添加移动端随机提示，建议用户使用更大屏幕访问以获得更佳体验
- <span class="tag-inline-title">【样式】</span>更新<RouterLink to="/about">「关于我」</RouterLink>与<RouterLink to="/change-log">「更新日志」</RouterLink>页面的视觉样式，使其更符合全局文档风格
- <span class="tag-inline-title">【样式】</span>更新<RouterLink to="/work">「我的作品」</RouterLink>页面样式，对其中的部分内容进行模块化拆分
- <span class="tag-inline-title">【修复】</span>调整页脚外链顺序并补充 title 提示信息
- <span class="tag-inline-title">【修复】</span>修复移动端随机提示组件的类型定义错误

## v1.1.0 – 2025/09/06

- <span class="tag-inline-title">【基建】</span>提供全局 Markdown 渲染器及相关样式，支持在页面中直接渲染 Markdown 文档
- <span class="tag-inline-title">【功能】</span>正式完成<RouterLink to="/change-log">「更新日志」</RouterLink>页面的构建，并在页脚添加访问入口
- <span class="tag-inline-title">【功能】</span>将<RouterLink to="/acknowledgments">「致谢专栏」</RouterLink>页面加入页脚导航栏
- <span class="tag-inline-title">【修复】</span>修复<RouterLink to="/change-log">「更新日志」</RouterLink>页面的样式问题
- <span class="tag-inline-title">【备注】</span>
    - 目前页脚链接仅支持在 PC 端显示，移动设备用户可通过直接输入链接访问
    - <RouterLink to="/acknowledgments">「致谢专栏」</RouterLink>页面内容将随版本迭代逐步完善

---

## v1.0.4 – 2025/09/05

- <span class="tag-inline-title">【功能】</span>新增<RouterLink to="/change-log">「更新日志」</RouterLink>、<RouterLink to="/acknowledgments">「致谢专栏」</RouterLink>与「原创角色」页面
- <span class="tag-inline-title">【重构】</span>将以上页面设置为隐藏路由
    - 仅可通过链接访问，不显示在导航中
    - 暂未完成内容的页面不在本文档中提供访问链接

## v1.0.3 – 2025/09/04

- <span class="tag-inline-title">【基建】</span>初步搭建「博客」页面框架（功能尚未开放）

## v1.0.2 – 2025/09/03

- <span class="tag-inline-title">【样式】</span>微调作品展示区域的视觉样式
- <span class="tag-inline-title">【性能】</span>优化作品区域的加载逻辑
    - ⚠️ 当前加载性能仍需进一步优化

> 此性能问题疑似由 B 站渲染逻辑引起，具体修复方案待定。

## v1.0.1 – 2025/09/03

- <span class="tag-inline-title">【修复】</span>完善 404 页面及相关路由配置
- <span class="tag-inline-title">【修复】</span>修正依赖安装配置，修复部分页面访问异常问题

## v1.0.0 – 2025/09/03

- <span class="tag-inline-title">【重构】</span>将项目整体迁移至 Vite + Vue 3 + TypeScript + Less 技术架构
- <span class="tag-inline-title">【文档】</span>新增<a href="https://icp.gov.moe/?keyword=20250294" target="_blank">萌 ICP 备</a>备案信息

---

## v0.0.2 – 2025/08/31

- <span class="tag-inline-title">【功能】</span>新增多个内容页面
- <span class="tag-inline-title">【样式】</span>调整页面视口的默认缩放比例

## v0.0.1 – 2025/02/22

- <span class="tag-inline-title">【功能】</span>基于 Jekyll 初始化项目站点
- <span class="tag-inline-title">【功能】</span>创建 404 页面
- <span class="tag-inline-title">【基建】</span>完成首次提交（Hello World）
