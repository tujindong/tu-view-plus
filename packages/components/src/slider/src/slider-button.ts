import { buildProps } from '@tu-view-plus/utils';
import { DIRECTIONS } from './constants';

import type { ExtractPropTypes, PropType } from 'vue';

export const sliderButtonProps = buildProps({
  direction: {
    type: String as PropType<(typeof DIRECTIONS)[number]>,
    default: 'horizontal'
  },

  disabled: {
    type: Boolean,
    default: false
  },

  min: {
    type: Number,
    required: true
  },

  max: {
    type: Number,
    required: true
  },

  formatTooltip: {
    type: Function
  },

  value: {
    type: [String, Number]
  },

  tooltipPosition: {
    type: String
  },

  showTooltip: {
    type: Boolean,
    default: true
  }
} as const);

export const sliderButtonEmits = {
  movestart: () => true,
  moving: (x: number, y: number) => true,
  moveend: () => true
};

export type SliderButtonProps = ExtractPropTypes<typeof sliderButtonProps>;
export type SliderButtonEmits = typeof sliderButtonEmits;
