/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "zhengr",
    repo: "zhengr.github.io",
    clientId: "Ov23liMo07p92KjzONJp",
    clientSecret: "49b4a7a228802e8f6da792ba9af65f373977b98b"
  },

  repoConfig: {
    owner: "zhengr",
    repo: "zhengr.github.io",
    pushBranch: "master",
    email: "",
    filterUsers: ['zhengr']
  },

  title: "Robin's Blog",
  description: "发现事情的乐趣，本身就是奖赏。",
  customDomain: "blog.taoktao.com",
  base: "/",

  slogan: {
    main: "有逻辑的灵魂，",
    sub: "造就有温度的编码。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/"
      },
    ],
    headTitle: ["如果能用文字记录一生点滴那是多磨美好的事情！"],
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
