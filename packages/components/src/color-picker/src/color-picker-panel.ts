import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type { Color, HSV } from './interface';

export const colorPickerPanelProps = buildProps({
  color: {
    type: Object as PropType<Color>,
    required: true
  },
  alpha: {
    type: Number,
    required: true
  },
  colorString: String,
  disabled: Boolean,
  disabledAlpha: Boolean,
  showHistory: Boolean,
  showPreset: Boolean,
  format: {
    type: String as PropType<'hex' | 'rgb'>,
    validator: (value: string): boolean => ['hex', 'rgb'].includes(value)
  },
  historyColors: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  presetColors: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  onAlphaChange: {
    type: Function as PropType<(alpha: number) => void> | undefined
  },
  onHsvChange: {
    type: Function as PropType<(hsv: HSV) => void> | undefined
  }
} as const);

export type ColorPickerPanelProps = ExtractPropTypes<
  typeof colorPickerPanelProps
>;
