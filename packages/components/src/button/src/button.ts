import { buildProps, iconPropType } from '@tu-view-plus/utils';
import { Loading } from '@tu-view-plus/icons-vue';
import { useSizeProp } from '@tu-view-plus/hooks';
import { buttonTypes, buttonNativeTypes } from './constants';

import type { ExtractPropTypes } from 'vue';
import type Button from './button.vue';

export const buttonProps = buildProps({
  /**
   * @zh 是否禁用按钮
   * @en disable the button
   */
  disabled: Boolean,

  /**
   * @zh 按钮的尺寸
   * @en Button size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 按钮的类型
   * @en Button type
   * @values 'default','primary','success','warning', 'info', 'danger', 'text', ''
   * @defaultValue 'default'
   */
  type: {
    type: String,
    values: buttonTypes,
    default: 'default'
  },

  /**
   * @zh 图标
   * @en Icon
   * @slot icon
   */
  icon: {
    type: iconPropType
  },

  /**
   * @zh 按钮的原始类型
   * @en native button type
   */
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button'
  },

  /**
   * @zh 按钮是否为加载中状态
   * @en Whether the button is in the loading state
   */
  loading: Boolean,

  /**
   * @zh 按钮加载中状态使用的组件
   * @en customize loading icon component
   */
  loadingIcon: {
    type: iconPropType,
    default: () => Loading
  },

  /**
   * @zh 按钮原始属性 autofocus
   * @en native button autofocus
   */
  autofocus: Boolean,

  /**
   * @zh 按钮是否为圆角属性
   * @en determine whether it's a round button
   */
  round: Boolean,

  /**
   * @zh 按钮是否为圆形属性
   * @en determine whether it's a circle button
   */
  circle: Boolean
});

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
export type ButtonInstance = InstanceType<typeof Button>;

export interface ButtonConfigContext {}
