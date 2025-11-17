/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "zhengr",
    repo: "Issue-Blog-With-Github-Action",
    clientId: "Ov23liMo07p92KjzONJp",
    clientSecret: "49b4a7a228802e8f6da792ba9af65f373977b98b"
  },

  repoConfig: {
    owner: "zhengr",
    repo: "Issue-Blog-With-Github-Action",
    pushBranch: "master",
    email: "",
    filterUsers: ['zhengr']
  },

  title: "Robin's Blog",
  description: "在这里了解我的一切，对编程的热爱永不停歇。",
  customDomain: "",
  base: "/Issue-Blog-With-Github-Action/",

  slogan: {
    main: "有逻辑的灵魂，",
    sub: "造就有温度的编码。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/Issue-Blog-With-Github-Action"
      },
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    pageCount: false
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
