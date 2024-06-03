import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const colorPickerInputAlphaProps = buildProps({} as const);

export type ColorPickerInputAlphaProps = ExtractPropTypes<
  typeof colorPickerInputAlphaProps
>;
