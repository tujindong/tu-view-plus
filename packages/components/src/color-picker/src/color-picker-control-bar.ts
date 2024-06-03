import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type { Color } from './interface';

export const colorPickerControlBarProps = buildProps({
  x: {
    type: Number,
    required: true
  },
  color: {
    type: Object as PropType<Color>,
    required: true
  },
  colorString: String,
  type: {
    type: String as PropType<'hue' | 'alpha'>
  },
  onChange: { type: Function as PropType<(x: number) => void> }
} as const);

export type ColorPickerControlBarProps = ExtractPropTypes<
  typeof colorPickerControlBarProps
>;
