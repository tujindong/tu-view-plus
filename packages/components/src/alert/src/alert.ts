import { buildProps, TypeComponentsMap, keysOf } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { alertEffects } from './constants';

import type { ExtractPropTypes } from 'vue';
import type Alert from './alert.vue';

export const alertProps = buildProps({
  /**
   * @zh Alert标题。
   * @en alert title.
   */
  title: {
    type: String,
    default: ''
  },

  /**
   * @zh 描述性文本
   * @en alert description.
   */
  description: {
    type: String,
    default: ''
  },

  /**
   * @zh Alert类型。
   * @en alert type.
   */
  type: {
    type: String,
    values: keysOf(TypeComponentsMap),
    default: ''
  },

  /**
   * @zh 是否可以关闭
   * @en whether alert can be dismissed.
   */
  closable: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 自定义关闭按钮文本
   * @en text for replacing x button
   */
  closeText: {
    type: String,
    default: ''
  },

  /**
   * @zh 是否显示类型图标
   * @en whether show icon
   */
  showIcon: Boolean,

  /**
   * @zh 文字是否居中
   * @en should content be placed in center.
   */
  center: Boolean,

  /**
   * @zh 警告的尺寸
   * @en Alert size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 主题样式
   * @en theme style.
   * @values 'dark', 'light', 'plain', 'outset', 'inset'
   */
  effect: {
    type: String,
    values: alertEffects,
    default: 'outset'
  }
} as const);

export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent
};

export type AlertProps = ExtractPropTypes<typeof alertProps>;
export type AlertInstance = InstanceType<typeof Alert>;
export type AlertEmits = typeof alertEmits;
