import { buildProps, iconPropType, definePropType } from '@tu-view-plus/utils';
import { messageTypes } from './constants';

import type { ExtractPropTypes, VNode } from 'vue';
import type Message from './message.vue';

export const messageProps = buildProps({
  /**
   * @zh 自定义类名
   * @en custom class name for Message
   */
  customClass: {
    type: String,
    default: ''
  },

  /**
   * @zh 文字是否居中
   * @en whether to center the text
   */
  center: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否将 message 属性作为 HTML 片段处理
   * @en whether `message` is treated as HTML string
   */
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 	显示时间，单位为毫秒。 设为 0 则不会自动关闭
   * @en display duration, millisecond. If set to 0, it will not turn off automatically
   */
  duration: {
    type: Number,
    default: 3000
  },

  /**
   * @zh 自定义图标，该属性会覆盖 type 的图标。
   * @en custom icon component, overrides `type`
   */
  icon: {
    type: iconPropType,
    default: undefined
  },

  /**
   * @zh 消息元素id
   * @en message dom id
   */
  id: {
    type: String,
    default: ''
  },

  /**
   * @zh 消息文字
   * @en message text
   */
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function
    ]),
    default: ''
  },

  /**
   * @zh 关闭时的回调函数, 参数为被关闭的 message 实例
   * @en callback function when closed with the message instance as the parameter
   */
  onClose: {
    type: definePropType<() => void>(Function),
    required: false
  },

  /**
   * @zh 是否显示关闭按钮
   * @en whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 消息类型
   * @en message type
   */
  type: {
    type: String,
    values: messageTypes,
    default: 'info'
  },

  /**
   * @zh Message 距离窗口顶部的偏移量
   * @en set the distance to the top of viewport
   */
  offset: {
    type: Number,
    default: 16
  },

  /**
   * @zh 层级
   * @en input box z-index
   */
  zIndex: {
    type: Number,
    default: 0
  },

  /**
   * @zh 合并内容相同的消息，不支持 VNode 类型的消息
   * @en merge messages with the same content, type of VNode message is not supported
   */
  grouping: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 重复次数，类似于 Badge 。当和 grouping 属性一起使用时作为初始数量使用
   * @en The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
   */
  repeatNum: {
    type: Number,
    default: 1
  }
} as const);

export const messageEmits = {
  destroy: () => true
};

export type MessageEmits = typeof messageEmits;
export type MessageProps = ExtractPropTypes<typeof messageProps>;
export type MessageInstance = InstanceType<typeof Message>;

export interface MessageConfigContext {
  max?: number;
}
