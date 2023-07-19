import { CSSProperties } from 'vue';
import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type Badge from './badge.vue';

export const badgeTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger'
] as const;

export const badgeProps = buildProps({
  /**
   * @zh  标记显示值
   * @en  badge display value
   * @defaultValue ''
   */
  value: {
    type: [String, Number],
    default: ''
  },

  /**
   * @zh  最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型
   * @en  maximum value, shows `{max}+` when exceeded. Only works if value is a number.
   * @defaultValue 99
   */
  max: {
    type: Number,
    default: 99
  },

  /**
   * @zh  是否显示小圆点
   * @en  if a little dot is displayed.
   */
  isDot: {
    type: Boolean
  },

  /**
   * @zh  隐藏 badge
   * @en  hidden badge.
   */
  hidden: {
    type: Boolean
  },

  /**
   * @zh  类型
   * @en  badge type
   * @values 'default','primary','success','warning','info', 'danger'
   * @defaultValue 'danger'
   */
  type: {
    type: String,
    values: badgeTypes,
    default: 'danger'
  },

  /**
   * @zh  自定义小圆点颜色
   * @en  Custom small dot color
   */
  color: {
    type: String
  },
  /**
   * @zh  状态点的文本，在设置 color 的前提下有效
   * @en  The text of the status point is valid when the color is set
   */
  text: {
    type: String
  },

  /**
   * @zh 独立使用时，自定义样式展示
   * @en Custom style
   */
  numberStyle: {
    type: Object as PropType<CSSProperties>
  }
});

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
export type BadgeInstance = InstanceType<typeof Badge>;
