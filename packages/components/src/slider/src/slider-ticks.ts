import { buildProps } from '@tu-view-plus/utils';
import { Direction } from './constants';

import type { ExtractPropTypes, PropType } from 'vue';

export const sliderTicksProps = buildProps({
  value: {
    type: Array as unknown as PropType<[number, number]>,
    required: true
  },

  step: {
    type: Number,
    required: true
  },

  min: {
    type: Number,
    required: true
  },

  max: {
    type: Number,
    required: true
  },

  direction: {
    type: String as PropType<Direction>,
    default: 'horizontal'
  }
} as const);

export type SliderTicksProps = ExtractPropTypes<typeof sliderTicksProps>;
