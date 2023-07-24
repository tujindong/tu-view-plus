import {
  buildProps,
  iconPropType,
  definePropType,
  isClient,
  mutable
} from '@tu-view-plus/utils';
import { messageTypes } from './constants';

import type { AppContext, ExtractPropTypes, VNode } from 'vue';
import type Message from './message.vue';
import type { Mutable } from '@tu-view-plus/utils';

export const messageDefaults = mutable({
  customClass: '',
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3000,
  icon: undefined,
  id: '',
  message: '',
  onClose: undefined,
  showClose: false,
  type: '',
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: isClient ? document.body : (undefined as never)
} as const);

export const messageProps = buildProps({
  /**
   * @zh 自定义类名
   * @en custom class name for Message
   */
  customClass: {
    type: String,
    default: messageDefaults.customClass
  },

  /**
   * @zh 文字是否居中
   * @en whether to center the text
   */
  center: {
    type: Boolean,
    default: messageDefaults.center
  },

  /**
   * @zh 是否将 message 属性作为 HTML 片段处理
   * @en whether `message` is treated as HTML string
   */
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString
  },

  /**
   * @zh 	显示时间，单位为毫秒。 设为 0 则不会自动关闭
   * @en display duration, millisecond. If set to 0, it will not turn off automatically
   */
  duration: {
    type: Number,
    default: messageDefaults.duration
  },

  /**
   * @zh 自定义图标。
   * @en custom icon component。
   */
  icon: {
    type: iconPropType,
    default: messageDefaults.icon
  },

  /**
   * @zh 消息元素id
   * @en message dom id
   */
  id: {
    type: String,
    default: messageDefaults.id
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
    default: messageDefaults.message
  },

  /**
   * @zh 关闭时的回调函数, 参数为被关闭的 message 实例
   * @en callback function when closed with the message instance as the parameter
   */
  onClose: {
    type: definePropType<() => void>(Function),
    required: messageDefaults.onClose
  },

  /**
   * @zh 是否显示关闭按钮
   * @en whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose
  },

  /**
   * @zh 消息类型
   * @en message type
   */
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type
  },

  /**
   * @zh Message 距离窗口顶部的偏移量
   * @en set the distance to the top of viewport
   */
  offset: {
    type: Number,
    default: messageDefaults.offset
  },

  /**
   * @zh 层级
   * @en input box z-index
   */
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex
  },

  /**
   * @zh 合并内容相同的消息，不支持 VNode 类型的消息
   * @en merge messages with the same content, type of VNode message is not supported
   */
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping
  },

  /**
   * @zh 重复次数，类似于 Badge 。当和 grouping 属性一起使用时作为初始数量使用
   * @en The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
   */
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum
  }
} as const);

export const messageEmits = {
  destroy: () => true
};

export type MessageEmits = typeof messageEmits;
export type MessageProps = ExtractPropTypes<typeof messageProps>;
export type MessageInstance = InstanceType<typeof Message>;

export type messageType = (typeof messageTypes)[number];

export type MessageOptions = Partial<
  Mutable<
    Omit<MessageProps, 'id'> & {
      appendTo?: HTMLElement | string;
    }
  >
>;

export type MessageParams = MessageOptions | MessageOptions['message'];

export type MessageParamsNormalized = Omit<MessageProps, 'id'> & {
  appendTo: HTMLElement;
};

export interface MessageHandler {
  close: () => void;
}

export interface MessageConfigContext {
  max?: number;
}

export type MessageFn = {
  (options?: MessageParams, appContext?: null | AppContext): MessageHandler;
  closeAll(type?: messageType): void;
};

export type MessageOptionsWithType = Omit<MessageOptions, 'type'>;

export type MessageParamsWithType =
  | MessageOptionsWithType
  | MessageOptions['message'];

export type MessageTypedFn = (
  options?: MessageParamsWithType,
  appContext?: null | AppContext
) => MessageHandler;

export interface Message extends MessageFn {
  success: MessageTypedFn;
  warning: MessageTypedFn;
  info: MessageTypedFn;
  error: MessageTypedFn;
}
