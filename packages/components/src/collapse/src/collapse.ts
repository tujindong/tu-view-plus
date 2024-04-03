import {
  buildProps,
  definePropType,
  mutable,
  isString,
  isNumber
} from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { collapseEffects } from './constants';

import type { ExtractPropTypes, PropType } from 'vue';
import type Collapse from './collapse.vue';
import type { Arrayable } from '@tu-view-plus/utils';
import type { CollapseEffects } from './constants';

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
  },

  /**
   * @zh 折叠面板的主题
   * @en effect of Collapse
   */
  effect: {
    type: String as PropType<CollapseEffects>,
    values: collapseEffects,
    default: 'outset'
  },

  /**
   * @zh 折叠面板的尺寸
   * @en size of Collapse
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' }
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
