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
        text: '通用',
        items: [
          {
            text: 'Button 按钮',
            link: '/zh-CN/components/button/index'
          },
          {
            text: 'Icon 图标',
            link: '/zh-CN/components/icon/index'
          }
        ]
      },
      {
        text: '数据输入',
        items: [
          {
            text: 'Radio 单选框',
            link: 'zh-CN/components/radio/index'
          }
        ]
      },
      {
        text: '布局',
        items: [
          {
            text: 'Grid 栅格',
            link: '/zh-CN/components/grid/index'
          }
        ]
      },
      {
        text: '反馈',
        items: [
          {
            text: 'Tooltip 提示',
            link: '/zh-CN/components/tooltip/index'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: 'Trigger 触发器',
            link: '/zh-CN/components/trigger/index'
          }
        ]
      }
    ]
  };
}

export const sidebar = getSidebar();
