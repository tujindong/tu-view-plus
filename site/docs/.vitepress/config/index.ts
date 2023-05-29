export default {
  title: 'Tu View Plus',
  base: process.env.NODE_ENV === 'production' ? '/tu-view-plus/' : '/',
  themeConfig: {
    logo: '../../assets/logo.svg',
    locales: {
      '/': {
        lang: 'zh-CN',
        label: '简体中文'
      },
      '/en-US': {
        lang: 'en-US',
        label: 'English'
      }
    },
    sidebar: {
      '/guide/': [
        {
          text: '引入',
          items: [
            {
              text: '介绍',
              link: '/guide/introduce'
            },
            {
              text: '快速开始',
              link: '/guide/quickstart'
            }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button 按钮',
              link: '/components/button/index'
            },
            {
              text: 'Icon 图标',
              link: '/components/icon/index'
            }
          ]
        }
      ]
    },
    nav: [
      { text: '指南', link: '/guide/introduce' },
      { text: '组件', link: '/components/button/index' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tujindong/tu-view-plus' }
    ]
  }
};
