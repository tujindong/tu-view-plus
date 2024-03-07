import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type PaginationItemEllipsis from './pagination-item-ellipsis.vue';

export const paginationItemEllipsisProps = buildProps({
  current: {
    type: Number,
    required: true
  },
  step: {
    type: Number,
    default: 5
  },
  pages: {
    type: Number,
    required: true
  },
  key: {
    type: [String, Number]
  }
} as const);

export const paginationItemEllipsisEmits = ['click'];

export type PaginationItemEllipsisProps = ExtractPropTypes<
  typeof paginationItemEllipsisProps
>;
export type PaginationItemEllipsisInstance = InstanceType<
  typeof PaginationItemEllipsis
>;
