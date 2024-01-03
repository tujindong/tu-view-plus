import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type WeekList from './week-list.vue';

export const weekListProps = buildProps({
  weekList: {
    type: Array as PropType<number[]>,
    required: true
  }
} as const);

export type WeekListProps = ExtractPropTypes<typeof weekListProps>;
export type WeekListInstance = InstanceType<typeof WeekList>;
