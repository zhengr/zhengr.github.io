# Robin's Blog

> 用 GitHub Issues 写博客，用 GitHub Pages 托管 —— 免服务器、免数据库、纯静态。

[English](./README.md) / [中文](./README-zh.md)

基于 [Yidadaa/Issue-Blog-With-Github-Action](https://github.com/Yidadaa/Issue-Blog-With-Github-Action) 思路，使用 **VuePress 1.x** 构建，内容直接来自本仓库的 **GitHub Issues**，每次 Issue 变动都会通过 GitHub Action 自动重新构建并部署到 `master` 分支（GitHub Pages），自定义域名 `blog.taoktao.com`。

---

## ✨ 主题特性

博客经过重新设计，风格现代、克制、阅读友好：

- 🎨 **现代配色** — 蓝 → 靛 → 紫渐变主色，CSS 变量驱动，便于统一调整
- 🌓 **暗色模式** — 右上角一键切换，自动记忆选择，首次加载防闪烁，默认跟随系统
- 🧊 **毛玻璃吸顶导航** — 滚动时半透明模糊顶栏，带品牌标志与搜索框
- 🌈 **Hero Banner** — 大字号渐变 slogan + 文章/分类统计，背景流动光斑动效
- 🃏 **卡片式文章列表** — 圆角阴影卡片，hover 上浮，日期/分类胶囊徽章
- 📖 **优化的正文排版** — 舒适的标题层级、代码块、引用、表格与图片样式
- 📱 **完全响应式** — 桌面双栏、移动端自动单栏
- 💬 **Vssue 评论** — 每篇文章底部用 GitHub 账号直接评论

## 🔧 工作原理

```
你发/改一条 GitHub Issue
        │
        ▼
GitHub Action 监听到 issues 事件（或 push 到 source）
        │
        ▼
run.js 拉取 Issues + Milestones → 生成 Markdown 文件
        │
        ▼
vuepress build 生成静态站点 → deploy.js 推送到 master 分支
        │
        ▼
GitHub Pages (blog.taoktao.com) 自动更新
```

- **文章** = 仓库的 Issue（标题即文章标题，正文即内容）
- **分类** = Issue 的 Milestone（里程碑）
- **首页** = 所有 Issue 的卡片列表 + 侧边分类栏

## 📁 目录结构

```
.
├── .github/workflows/blog.yml   # 自动构建部署流水线
├── src/
│   ├── .vuepress/
│   │   ├── components/          # Header / Footer / PostCard / Category / ThemeToggle ...
│   │   ├── styles/              # palette.styl（配色变量）+ index.styl（全局样式）
│   │   ├── theme/               # Layout / PostLayout / 404 / ResumeLayout
│   │   ├── config.js            # VuePress 配置（插件、head、防闪烁脚本）
│   │   └── custom.js            # ⭐ 你的站点配置（标题、slogan、导航、Vssue 等）
│   ├── posts/                   # 由工具自动生成，无需手动修改
│   └── categories/              # 由工具自动生成，无需手动修改
├── tools/                       # run.js（拉取 Issues）、deploy.js（部署）
└── package.json
```

## 🚀 本地预览

```bash
# 安装依赖（需要 Node 19.x 与 pnpm）
npm install -g pnpm
pnpm install

# 配置本地 token（从 GitHub 生成一个有 repo 权限的 PAT）
cp tools/config.template.js tools/config.js
# 编辑 tools/config.js，填入你的 token

# 拉取 Issues 并启动本地开发服务器
pnpm local:run     # 下载 Issues / Milestones 生成 md 文件
pnpm dev           # 启动 http://localhost:8080 预览
```

> 注意：VuePress 1.x 在较新 Node 版本上需加 `--openssl-legacy-provider`，
> `pnpm build` 脚本已内置该参数。

## 🎨 自定义

大部分站点配置都在 **`src/.vuepress/custom.js`**：

| 配置项 | 说明 |
| --- | --- |
| `title` / `description` | 站点标题与描述 |
| `slogan` | 首页 Hero 的大字标语（`main` / `sub`） |
| `themeConfig.nav` | 顶部导航链接 |
| `themeConfig.headTitle` | 顶栏下方的小字 motto |
| `customDomain` | 自定义域名（会写入 CNAME） |
| `vssueConfig` | Vssue 评论的 GitHub OAuth 应用 |
| `repoConfig` | 内容来源仓库与部署目标分支 |

**改配色**：编辑 `src/.vuepress/styles/palette.styl` 顶部的 CSS 变量（`:root` 为浅色，`[data-theme="dark"]` 为暗色），只需改 `--c-accent` 等几个变量即可整体换肤。

## 📄 License

博客主题参考 [Yidadaa/Issue-Blog-With-Github-Action](https://github.com/Yidadaa/Issue-Blog-With-Github-Action)，遵循其开源协议。
