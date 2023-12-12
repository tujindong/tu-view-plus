import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type RangePicker from './range-picker.vue';

export const rangePickerProps = buildProps({});

export type RangePickerProps = ExtractPropTypes<typeof rangePickerProps>;
export type RangePickerInstance = InstanceType<typeof RangePicker>;
