import {
  buildProps,
  definePropType,
  mutable,
  isString,
  isNumber
} from '@tu-view-plus/utils';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';

import type { ExtractPropTypes } from 'vue';
import type Collapse from './collapse.vue';
import type { Arrayable } from '@tu-view-plus/utils';

export type CollapseActiveName = string | number;
export type CollapseModelValue = Arrayable<CollapseActiveName>;

export const collapseProps = buildProps({
  /**
   * @zh 是否手风琴模式
   * @en whether to activate accordion mode
   */
  accordion: Boolean,

  /**
   * @zh 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)
   * @en currently active panel
   */
  modelValue: {
    type: definePropType<CollapseModelValue>([Array, String, Number]),
    default: () => mutable([] as const)
  }
} as const);

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: (value: CollapseModelValue) =>
    typeof isNumber(value) || isString(value) || Array.isArray(value),

  [CHANGE_EVENT]: (value: CollapseModelValue) =>
    typeof isNumber(value) || isString(value) || Array.isArray(value)
};

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;
export type CollapseInstance = InstanceType<typeof Collapse>;
export type CollapseEmits = typeof collapseEmits;
