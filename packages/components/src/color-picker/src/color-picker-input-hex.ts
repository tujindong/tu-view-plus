import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const colorPickerInputHexProps = buildProps({} as const);

export type ColorPickerInputHexProps = ExtractPropTypes<
  typeof colorPickerInputHexProps
>;
