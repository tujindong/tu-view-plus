function getSidebar() {
  return {
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
            text: 'Layout 布局',
            link: '/components/layout/index'
          },
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
  };
}

export const sidebar = getSidebar();
