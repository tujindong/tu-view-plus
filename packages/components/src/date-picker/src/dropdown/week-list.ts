import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type WeekList from './week-list.vue';

export const weekListProps = buildProps({} as const);

export type WeekListProps = ExtractPropTypes<typeof weekListProps>;
export type WeekListInstance = InstanceType<typeof WeekList>;
