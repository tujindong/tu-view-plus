import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Week from './week.vue';

export const weekProps = buildProps({} as const);

export type WeekProps = ExtractPropTypes<typeof weekProps>;
export type WeekInstance = InstanceType<typeof Week>;
