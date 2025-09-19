# 更新日志

> **🐾 喵喵说明**
>
> - 本项目正在茁壮成长，会经常"打打闹闹"地更新版本！
> - 不用担心错过什么，记得常回来摸摸鱼、看看新变化就好啦～ 🐟
> - 某一天更新了好几个版本也是很正常的事情
> - 不用担心，每次更新都会尽量保持向下兼容，尽量减少对现有功能的影响

---

## v1.1.3 – 2025/09/20

- <span class="tag-Inline-title">【样式】</span>更新了<router-link to="/about">「关于我」</router-link>和<router-link to="/change-log">「更新日志」</router-link>页面的样式内容，让界面更符合全局的文档样式风格
- <span class="tag-Inline-title">【样式】</span>更新了<router-link to="/work">「我的作品」</router-link>页面的样式内容，对其中的部分内容进行模块拆分
- <span class="tag-Inline-title">【功能】</span>给部分文档内容的区域增加了一个移动端的随机提示，提示用户使用更大的屏幕访问页面以获得更好的体验
- <span class="tag-Inline-title">【修复】</span>修复页脚区域的一些外链的顺序，加入了 title 提示

## v1.1.2 – 2025/09/06

- <span class="tag-Inline-title">【功能】</span>正式完成<router-link to="/change-log">「更新日志」</router-link>页面的构建，并在页脚添加访问入口
- <span class="tag-Inline-title">【基建】</span>提供了全局的 MarkDown 渲染器和相关样式，以支持在页面中直接渲染 MarkDown 文档
- <span class="tag-Inline-title">【修复】</span>修复<router-link to="/change-log">「更新日志」</router-link>页面的样式问题
- <span class="tag-Inline-title">【备注】</span>
  - 目前页脚链接仅支持在 PC 端显示，移动设备用户可通过直接输入链接访问
  - 「致谢名单」页面暂时是空的，后续会逐步完善

## v1.1.1 – 2025/09/05

- <span class="tag-Inline-title">【功能】</span>新增<router-link to="/change-log">「更新日志」</router-link>、「致谢名单」和「原创角色」页面
- <span class="tag-Inline-title">【重构】</span>将以上页面设置为隐藏路由
  - 仅可通过链接访问，不显示在导航中
  - 暂时无内容或暂时不开放访问的页面暂时不在本文档中提供链接

## v1.1.0 – 2025/09/04

- <span class="tag-Inline-title">【基建】</span>初步搭建博客页面框架（功能尚未开放）

## v1.0.2 – 2025/09/03

- <span class="tag-Inline-title">【样式】</span>微调作品展示区域的视觉样式
- <span class="tag-Inline-title">【性能】</span>优化作品区域的加载逻辑
  - ⚠️当前加载性能仍需进一步优化
  
> 这个性能问题貌似是 B 站的渲染逻辑导致

## v1.0.1 – 2025/09/03

- <span class="tag-Inline-title">【修复】</span>完善 404 页面及相关路由配置
- <span class="tag-Inline-title">【修复】</span>修正依赖安装配置，修复部分页面访问异常问题

## v1.0.0 – 2025/09/03

- <span class="tag-Inline-title">【重构】</span>将项目整体迁移至 Vite + Vue 3 + TypeScript + Less 技术架构
- <span class="tag-Inline-title">【文档】</span>新增<a href="https://icp.gov.moe/?keyword=20250294" target="_blank">萌 ICP 备</a>备案信息

## v0.0.2 – 2025/08/31

- <span class="tag-Inline-title">【样式】</span>调整页面视口的默认缩放比例
- <span class="tag-Inline-title">【功能】</span>新增多个内容页面

## v0.0.1 – 2025/02/22

- <span class="tag-Inline-title">【功能】</span>基于 Jekyll 初始化项目站点
- <span class="tag-Inline-title">【功能】</span>创建 404 页面
- <span class="tag-Inline-title">【初始化】</span>完成首次提交（hello world）
