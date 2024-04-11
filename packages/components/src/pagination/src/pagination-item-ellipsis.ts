import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

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
