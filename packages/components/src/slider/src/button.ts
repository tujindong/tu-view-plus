import { buildProps, isNumber } from '@tu-view-plus/utils';
import { TRIGGER_POSITIONS } from '@tu-view-plus/constants';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';

import type Button from '../../button/src/button.vue';
import type { ExtractPropTypes, Ref } from 'vue';

export const buttonProps = buildProps({
  /**
   * @zh 绑定值
   * @en binding value
   * @defaultValue 0
   */
  modelValue: {
    type: Number,
    default: 0
  },

  /**
   * @zh 垂直模式
   * @en vertical mode
   */
  vertical: Boolean,

  /**
   * @zh tooltip 的自定义类名
   * @en custom class name for the tooltip
   */
  tooltipClass: String,

  /**
   * @zh Tooltip 出现的位置
   * @en position of Tooltip
   * @values 'top','tl','tr','bottom','bl','br','left','lt','lb','right','rt','rb'
   */
  placement: {
    type: String,
    values: TRIGGER_POSITIONS,
    default: 'top'
  }
} as const);

export const buttonEmits = {
  [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value)
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export type ButtonEmits = typeof buttonEmits;

export type ButtonInstance = InstanceType<typeof Button>;

export type ButtonRefs = Record<
  'firstButton' | 'secondButton',
  Ref<ButtonInstance | undefined>
>;

export interface ButtonInitData {
  hovering: boolean;
  dragging: boolean;
  isClick: boolean;
  startX: number;
  currentX: number;
  startY: number;
  currentY: number;
  startPosition: number;
  newPosition: number;
  oldValue: number;
}
