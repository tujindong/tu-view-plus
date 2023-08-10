import { buildProps } from '@tu-view-plus/utils';
import { DIRECTIONS } from './constants';

import type { ExtractPropTypes, PropType } from 'vue';

export const sliderDotsProps = buildProps({
  dots: {
    type: Array as PropType<
      Array<{ key: number; content?: string; isActive?: boolean }>
    >,
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
    type: String as PropType<(typeof DIRECTIONS)[number]>,
    default: 'horizontal'
  }
} as const);

export type SliderDotsProps = ExtractPropTypes<typeof sliderDotsProps>;
