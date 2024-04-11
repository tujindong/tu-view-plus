import { buildProps } from '@tu-view-plus/utils';
import type { ExtractPropTypes } from 'vue';

export const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },

  width: String,

  height: String,

  ratioX: {
    type: Number,
    default: 1
  },

  ratioY: {
    type: Number,
    default: 1
  }
} as const);

export type BarProps = ExtractPropTypes<typeof barProps>;
