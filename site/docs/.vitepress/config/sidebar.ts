function getSidebar() {
  return {
    '/zh-CN/guide/': [
      {
        text: '引入',
        items: [
          {
            text: '介绍',
            link: '/zh-CN/guide/introduce'
          },
          {
            text: '快速开始',
            link: '/zh-CN/guide/quickstart'
          }
        ]
      }
    ],
    '/zh-CN/components/': [
      {
        text: '基础组件',
        items: [
          {
            text: 'Layout 布局',
            link: '/zh-CN/components/layout/index'
          },
          {
            text: 'Button 按钮',
            link: '/zh-CN/components/button/index'
          },
          {
            text: 'Icon 图标',
            link: '/zh-CN/components/icon/index'
          }
        ]
      }
    ]
  };
}

export const sidebar = getSidebar();
