# RealMaybe's Personal Website

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vue.js](https://img.shields.io/badge/vue.js-%2342b883.svg?style=for-the-badge&logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

这是我的个人网站项目，使用现代前端技术栈构建，部署在 GitHub Pages 上。

## ✨ 特性

- ⚡ 基于 Vite 构建，极速的开发服务器和构建过程
- 🎨 使用 Vue 3 Composition API 开发，响应式编程体验
- 📱 响应式设计，适配各种屏幕尺寸
- 🚀 自动部署到 GitHub Pages，通过 GitHub Actions 实现 CI/CD
- 🔧 使用 pnpm 作为包管理器，更快的安装速度和磁盘效率

## 🛠️ 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **开发语言**: TypeScript
- **包管理器**: pnpm
- **部署平台**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 项目设置

### 前置要求

确保您的系统已安装:

- Node.js (推荐 LTS 版本)
- pnpm (可通过 `npm install -g pnpm` 安装)

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

项目将在 `http://localhost:5173` 上运行，并支持热重载。

### 编译和生产构建

```bash
pnpm build
```

构建完成后，静态文件将生成在 `dist/` 目录中。

### 预览生产构建

```bash
pnpm preview
```

这将在本地启动一个服务器来预览生产构建的效果。

## 🌐 部署

本项目使用 GitHub Actions 实现自动部署。当代码推送到 `main` 分支时，会自动触发构建和部署流程。

部署流程包括:

1. 安装 Node.js 和 pnpm
2. 安装项目依赖
3. 构建生产版本
4. 部署到 GitHub Pages

网站地址: [https://www.realmaybe0429.space/](https://www.realmaybe0429.space/)

## 🤝 贡献

虽然这是一个个人项目，但欢迎提出建议和反馈。如果您发现任何问题或有改进建议，请创建 Issue 或 Pull Request。

## 📄 许可证

此项目采用 MIT 许可证 - 查看 [LICENSE](./MIT-LICENSE.md) 文件了解详情。

---

⭐ 如果您喜欢这个项目，请给它一个星标！
