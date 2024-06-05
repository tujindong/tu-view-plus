import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const colorPickerInputAlphaProps = buildProps({
  value: {
    type: Number,
    required: true
  },
  disabled: Boolean,
  onChange: { type: Function as PropType<(value: number) => void> }
} as const);

export type ColorPickerInputAlphaProps = ExtractPropTypes<
  typeof colorPickerInputAlphaProps
>;
