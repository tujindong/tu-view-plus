import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type { Color, HSV } from './interface';

export const colorPickerInputRgbProps = buildProps({
  color: {
    type: Object as PropType<Color>,
    required: true
  },
  alpha: {
    type: Number,
    required: true
  },
  disabled: Boolean,
  disabledAlpha: Boolean,
  onHsvChange: { type: Function as PropType<(value: HSV) => void> },
  onAlphaChange: { type: Function as PropType<(value: number) => void> }
} as const);

export type ColorPickerInputRgbProps = ExtractPropTypes<
  typeof colorPickerInputRgbProps
>;
