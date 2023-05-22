export default {
  title: "tu-view-plus",
  base: process.env.NODE_ENV === "production" ? "/tu-view-plus/" : "/",
  themeConfig: {
    nav: [{ text: "文档", link: "/guild/introduce" }],
    sidebar: {
      "/": [
        {
          text: "引入",
          items: [
            {
              text: "介绍",
              link: "/guild/introduce",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "基础组件",
          items: [
            {
              text: "按钮 Button",
              link: "/components/button/index",
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/tujindong/tu-view" }],
  },
};
