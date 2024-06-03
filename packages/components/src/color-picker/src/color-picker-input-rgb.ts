import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const colorPickerInputRgbProps = buildProps({} as const);

export type ColorPickerInputRgbProps = ExtractPropTypes<
  typeof colorPickerInputRgbProps
>;
