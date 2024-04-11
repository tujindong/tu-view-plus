import { buildProps } from '@tu-view-plus/utils';
import { shape, triggerType, avartEffects } from './constants';

import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type { Shape, TriggerType } from './constants';

export const avatarProps = buildProps({
  /**
   * @zh 头像的形状
   * @en The shape of the head
   */
  shape: {
    values: shape,
    type: String as PropType<Shape>,
    default: 'circle'
  },

  /**
   * @zh 头像图片的地址
   * @en The address of the avatar image
   */
  imageUrl: {
    type: String
  },

  /**
   * @zh 头像的大小
   * @en The size of the avatar
   */
  size: {
    type: Number,
    default: 40
  },

  /**
   * @zh 是否自动根据头像尺寸调整字体大小
   * @en Whether to automatically resize the font based on the avatar size
   */
  autoFixFontSize: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 可点击的头像交互类型
   * @en Clickable avatar interaction type
   */
  triggerType: {
    values: triggerType,
    type: String as PropType<TriggerType>,
    default: 'button'
  },

  /**
   * @zh 交互图标的样式
   * @en Interactive icon styles
   */
  triggerIconStyle: {
    type: Object as PropType<CSSProperties>
  },

  /**
   * @zh  主题
   * @en  theme of Avatar
   * @values 'inset' 'bordered', 'outlined', 'flat'
   * @defaultValue 'outset'
   */
  effect: {
    type: String,
    values: avartEffects,
    default: 'outset'
  },

  /**
   * @zh 头像背景颜色
   * @en background color of avatar
   */
  background: {
    type: String
  },

  /**
   * @zh 头像文字颜色
   * @en color of avatar
   */
  color: {
    type: String
  }
});

export const avatarEmits = {
  click: (e: Event) => true,
  error: () => true,
  load: () => true
};

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
