import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type TimePickerColumn from './time-picker-column.vue';

export const timePickerColumnProps = buildProps({} as const);

export type TimePickerColumnProps = ExtractPropTypes<
  typeof timePickerColumnProps
>;
export type TimePickerColumnInstance = InstanceType<typeof TimePickerColumn>;
