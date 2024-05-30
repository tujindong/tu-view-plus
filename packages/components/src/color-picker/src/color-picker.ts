import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const colorPickerProps = buildProps({});

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;
