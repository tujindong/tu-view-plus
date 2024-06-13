import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type { Color } from './interface';

export const colorPickerPaletteProps = buildProps({
  color: {
    type: Object as PropType<Color>,
    required: true
  },
  disabled: Boolean,
  onChange: {
    type: Function as PropType<(s: number, v: number) => void>
  }
} as const);

export type ColorPickerPaletteProps = ExtractPropTypes<
  typeof colorPickerPaletteProps
>;
