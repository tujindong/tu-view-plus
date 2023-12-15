import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type MonthPicker from './month-picker.vue';

export const monthPickerProps = buildProps({} as const);

export type MonthPickerProps = ExtractPropTypes<typeof monthPickerProps>;
export type MonthPickerInstance = InstanceType<typeof MonthPicker>;
