import { buildProps } from '@tu-view-plus/utils';
import { Direction } from './constants';
import { useSizeProp } from '@tu-view-plus/hooks';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';

import type { ExtractPropTypes, PropType } from 'vue';
import type Slider from './slider.vue';

export const sliderProps = buildProps({
  /**
   * @zh 绑定值
   * @en Value
   * @vModel
   */
  modelValue: {
    type: [Number, Array] as PropType<number | [number, number]>,
    default: undefined
  },

  /**
   * @zh 默认值（非受控状态）
   * @en Default value (uncontrolled state)
   */
  defaultValue: {
    type: [Number, Array] as PropType<number | [number, number]>,
    default: 0
  },

  /**
   * @zh 滑块的尺寸
   * @en slider size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 滑动的步长
   * @en Sliding step
   */
  step: {
    type: Number,
    default: 1
  },

  /**
   * @zh 滑动范围的最小值
   * @en Minimum sliding range
   */
  min: {
    type: Number,
    default: 0
  },

  /**
   * @zh 设置显示的标签
   * @en Set the displayed label
   */
  marks: {
    type: Object as PropType<Record<number, string>>
  },

  /**
   * @zh 滑动范围的最大值
   * @en Maximum sliding range
   */
  max: {
    type: Number,
    default: 100
  },

  /**
   * @zh 滑动输入条的方向
   * @en The direction of the slider
   */
  direction: {
    type: String as PropType<Direction>,
    default: 'horizontal'
  },

  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否显示刻度线
   * @en Whether to show ticks
   */
  showTicks: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否显示输入框
   * @en Whether to show the input
   */
  showInput: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否开启范围选择
   * @en Whether to use range selection
   */
  range: {
    type: Boolean,
    default: false
  },

  formatTooltip: {
    type: Function
  },

  /**
   * @zh 是否显示tooltip
   * @en Whether to show tooltip
   */
  showTooltip: {
    type: Boolean,
    default: true
  }
} as const);

export const sliderEmits = {
  [UPDATE_MODEL_EVENT]: (value: number | [number, number]) => true,
  [CHANGE_EVENT]: (value: number | [number, number]) => true
};

export type SliderProps = ExtractPropTypes<typeof sliderProps>;
export type SliderInstance = InstanceType<typeof Slider>;
export type SliderEmits = typeof sliderEmits;
