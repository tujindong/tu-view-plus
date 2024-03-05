import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type PaginationItemEllipsis from './pagination-item-ellipsis.vue';

export const paginationItemEllipsisProps = buildProps({});

export type PaginationItemEllipsisProps = ExtractPropTypes<
  typeof paginationItemEllipsisProps
>;
export type PaginationItemEllipsisInstance = InstanceType<
  typeof PaginationItemEllipsis
>;
