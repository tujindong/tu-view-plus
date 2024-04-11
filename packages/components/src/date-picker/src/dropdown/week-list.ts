import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const weekListProps = buildProps({
  weekList: {
    type: Array as PropType<number[]>,
    required: true
  }
} as const);

export type WeekListProps = ExtractPropTypes<typeof weekListProps>;
