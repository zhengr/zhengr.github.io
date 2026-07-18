const mk = require("markdown-it-katex");
const ck = require("markdown-it-task-checkbox")
const customConfig = require("./custom")

module.exports = {
  ...customConfig,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/prism/9000.0.1/themes/prism.min.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/KaTeX/0.5.1/katex.min.css"
      }
    ],
    [
      "script",
      {
        charset: "utf-8",
        src: "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
        async: true
      }
    ],
    // anti-FOUC: apply theme as early as possible
    [
      "script",
      {},
      `;(function(){try{var k=localStorage.getItem('blog-theme');if(!k){k=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',k);}catch(e){}})();`
    ],
    ...customConfig.head
  ],

  themeConfig: {
    ...customConfig.themeConfig,
    base: customConfig.base
  },

  // dev config
  host: "0.0.0.0",
  plugins: [
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github-v4",
        ...customConfig.vssueConfig
      }
    ]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(mk);
      md.use(ck);
    }
  }
};
