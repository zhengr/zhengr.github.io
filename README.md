# Robin's Blog

> Write your blog with GitHub Issues, host it on GitHub Pages — serverless, database-free, pure static.

[English](./README.md) / [中文](./README-zh.md)

Built on the idea of [Yidadaa/Issue-Blog-With-Github-Action](https://github.com/Yidadaa/Issue-Blog-With-Github-Action), powered by **VuePress 1.x**. The content comes directly from this repo's **GitHub Issues** — every time an Issue changes, a GitHub Action rebuilds the site and deploys it to the `master` branch (GitHub Pages), served at the custom domain `blog.taoktao.com`.

---

## ✨ Theme Features

The blog has been redesigned with a modern, restrained and reader-friendly look:

- 🎨 **Modern palette** — blue → indigo → purple gradient accent, driven by CSS variables for easy theming
- 🌓 **Dark mode** — one-click toggle in the header, remembers your choice, no flash on load, follows system by default
- 🧊 **Glassmorphism sticky header** — translucent blurred top bar on scroll, with brand mark and search box
- 🌈 **Hero banner** — large gradient slogan + post/category stats, with animated floating color blobs
- 🃏 **Card-style post list** — rounded shadowed cards, hover lift, date/category pill badges
- 📖 **Polished typography** — comfortable heading hierarchy, code blocks, blockquotes, tables and image framing
- 📱 **Fully responsive** — two-column desktop layout that collapses to a single column on mobile
- 💬 **Vssue comments** — comment on each post directly with your GitHub account

## 🔧 How It Works

```
You open / edit a GitHub Issue
        │
        ▼
GitHub Action detects the issues event (or a push to source)
        │
        ▼
run.js fetches Issues + Milestones → generates Markdown files
        │
        ▼
vuepress build → deploy.js pushes the static site to the master branch
        │
        ▼
GitHub Pages (blog.taoktao.com) updates automatically
```

- **Posts** = Issues in this repo (title = post title, body = content)
- **Categories** = Issue Milestones
- **Homepage** = card list of all Issues + sidebar category list

## 📁 Project Structure

```
.
├── .github/workflows/blog.yml   # auto build & deploy pipeline
├── src/
│   ├── .vuepress/
│   │   ├── components/          # Header / Footer / PostCard / Category / ThemeToggle ...
│   │   ├── styles/              # palette.styl (color tokens) + index.styl (global styles)
│   │   ├── theme/               # Layout / PostLayout / 404 / ResumeLayout
│   │   ├── config.js            # VuePress config (plugins, head, anti-FOUC script)
│   │   └── custom.js            # ⭐ your site config (title, slogan, nav, Vssue, ...)
│   ├── posts/                   # auto-generated, do not edit by hand
│   └── categories/              # auto-generated, do not edit by hand
├── tools/                       # run.js (fetch issues), deploy.js (deploy)
└── package.json
```

## 🚀 Local Preview

```bash
# install deps (Node 19.x + pnpm)
npm install -g pnpm
pnpm install

# configure a local token (create a PAT with repo scope on GitHub)
cp tools/config.template.js tools/config.js
# edit tools/config.js and paste your token

# fetch issues and start the dev server
pnpm local:run     # download Issues / Milestones into md files
pnpm dev           # preview at http://localhost:8080
```

> Note: VuePress 1.x on newer Node needs `--openssl-legacy-provider`,
> which is already included in the `pnpm build` script.

## 🎨 Customization

Most site config lives in **`src/.vuepress/custom.js`**:

| Option | Description |
| --- | --- |
| `title` / `description` | Site title and description |
| `slogan` | Hero banner headline (`main` / `sub`) |
| `themeConfig.nav` | Top navigation links |
| `themeConfig.headTitle` | Small motto under the brand in the header |
| `customDomain` | Custom domain (written to CNAME) |
| `vssueConfig` | GitHub OAuth app for Vssue comments |
| `repoConfig` | Source repo and deploy target branch |

**Change colors**: edit the CSS variables at the top of `src/.vuepress/styles/palette.styl` (`:root` for light, `[data-theme="dark"]` for dark). Changing `--c-accent` alone re-skins the whole site.

## 📄 License

Blog theme inspired by [Yidadaa/Issue-Blog-With-Github-Action](https://github.com/Yidadaa/Issue-Blog-With-Github-Action), under its open-source license.
