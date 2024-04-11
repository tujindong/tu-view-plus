import { buildProps, iconPropType, definePropType } from '@tu-view-plus/utils';
import { notificationTypes, notificationPositions } from './constants';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, VNode, PropType } from 'vue';
import type { NotificationPositions } from './constants';

export const notificationProps = buildProps({
  /**
   * @zh 自定义类名
   * @en custom class name for Notification
   */
  customClass: {
    type: String,
    default: ''
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
   * @zh 显示时间, 单位为毫秒。 值为 0 则不会自动关闭
   * @en duration before close. It will not automatically close if set 0
   */
  duration: {
    type: Number,
    default: 4500
  },

  /**
   * @zh 自定义图标。 若设置了 type，则 icon 会被覆盖
   * @en custom icon component. It will be overridden by `type`
   */
  icon: {
    type: iconPropType
  },

  /**
   * @zh 通知栏元素id
   * @en notification dom id
   */
  id: {
    type: String,
    default: ''
  },

  /**
   * @zh 通知栏正文内容
   * @en en text
   */
  message: {
    type: definePropType<string | VNode>([String, Object]),
    default: ''
  },

  /**
   * @zh 相对屏幕顶部的偏移量 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量
   * @en offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset
   */
  offset: {
    type: Number,
    default: 0
  },

  /**
   * @zh 点击 Notification 时的回调函数
   * @en callback function when notification clicked
   */
  onClick: {
    type: definePropType<() => void>(Function),
    default: () => undefined
  },

  /**
   * @zh 关闭时的回调函数
   * @en callback function when closed
   */
  onClose: {
    type: definePropType<() => void>(Function),
    required: true
  },

  /**
   * @zh 自定义弹出位置
   * @en custom position
   */
  position: {
    type: String as PropType<NotificationPositions>,
    values: notificationPositions,
    default: 'tr'
  },

  /**
   * @zh 是否显示关闭按钮
   * @en whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 标题
   * @en title
   */
  title: {
    type: String,
    default: ''
  },

  /**
   * @zh 通知的类型
   * @en notification type
   */
  type: {
    type: String,
    values: [...notificationTypes, ''],
    default: ''
  },

  /**
   * @zh popover 尺寸
   * @en size of the popover
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 初始 zIndex
   * @en initial zIndex
   */
  zIndex: Number
} as const);

export const notificationEmits = {
  destroy: () => true
};

export type NotificationProps = ExtractPropTypes<typeof notificationProps>;
export type NotificationEmits = typeof notificationEmits;

export type NotificationOptions = Omit<NotificationProps, 'id'> & {
  appendTo?: HTMLElement | string;
};

export type NotificationOptionsTyped = Omit<NotificationOptions, 'type'>;

export interface NotificationHandle {
  close: () => void;
}

export type NotificationParams = Partial<NotificationOptions> | string | VNode;

export type NotificationParamsTyped =
  | Partial<NotificationOptionsTyped>
  | string
  | VNode;

export type NotifyFn = ((
  options?: NotificationParams
) => NotificationHandle) & { closeAll: () => void };

export type NotifyTypedFn = (
  options?: NotificationParamsTyped
) => NotificationHandle;

export interface Notify extends NotifyFn {
  success: NotifyTypedFn;
  warning: NotifyTypedFn;
  error: NotifyTypedFn;
  info: NotifyTypedFn;
}
export interface NotificationQueueItem {
  vm: VNode;
}

export type NotificationQueue = NotificationQueueItem[];
