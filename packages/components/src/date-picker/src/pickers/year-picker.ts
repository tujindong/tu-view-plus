import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type YearPicker from './year-picker.vue';

export const yearPickerProps = buildProps({} as const);

export type YearPickerProps = ExtractPropTypes<typeof yearPickerProps>;
export type YearPickerInstance = InstanceType<typeof YearPicker>;
