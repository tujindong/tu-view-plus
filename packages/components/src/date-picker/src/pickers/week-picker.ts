import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type WeekPicker from './week-picker.vue';

export const weekPickerProps = buildProps({} as const);

export type WeekPickerProps = ExtractPropTypes<typeof weekPickerProps>;
export type WeekPickerInstance = InstanceType<typeof WeekPicker>;
