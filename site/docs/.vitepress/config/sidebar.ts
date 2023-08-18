function getSidebar() {
  return {
    '/zh-CN/guide/': [
      {
        text: '引入',
        items: [
          {
            text: '快速开始',
            link: '/zh-CN/guide/quickstart'
          },
          {
            text: '国际化',
            link: '/zh-CN/guide/i18n'
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
          },
          {
            text: 'Scrollbar 滚动条',
            link: '/zh-CN/components/scrollbar/index'
          }
        ]
      },
      {
        text: '数据输入',
        items: [
          {
            text: 'Input 输入框',
            link: 'zh-CN/components/input/index'
          },
          {
            text: 'Textarea 多行输入框',
            link: 'zh-CN/components/textarea/index'
          },
          {
            text: 'InputNumber 数字输入框',
            link: 'zh-CN/components/input-number/index'
          },
          {
            text: 'Radio 单选框',
            link: 'zh-CN/components/radio/index'
          },
          {
            text: 'Checkbox 复选框',
            link: 'zh-CN/components/checkbox/index'
          },
          {
            text: 'Switch 开关',
            link: 'zh-CN/components/switch/index'
          },
          {
            text: 'Slider 滑块',
            link: 'zh-CN/components/slider/index'
          }
        ]
      },
      {
        text: '数据展示',
        items: [
          {
            text: 'Badge 标记',
            link: 'zh-CN/components/badge/index'
          },
          {
            text: 'Tag 标签',
            link: 'zh-CN/components/tag/index'
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
          },
          {
            text: 'Message 消息提示',
            link: '/zh-CN/components/message/index'
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
