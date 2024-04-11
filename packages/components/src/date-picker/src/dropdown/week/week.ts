import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import { WeekStart } from '../../interface';

export const weekProps = buildProps({
  dayStartOfWeek: {
    type: Number as PropType<WeekStart>,
    default: 0
  }
} as const);

export const weekEmits = ['select', 'cell-mouse-enter'];

export type WeekProps = ExtractPropTypes<typeof weekProps>;
