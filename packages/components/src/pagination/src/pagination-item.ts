import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type PaginationItem from './pagination-item.vue';

export const paginationItemProps = buildProps({});

export type PaginationItemProps = ExtractPropTypes<typeof paginationItemProps>;
export type PaginationItemInstance = InstanceType<typeof PaginationItem>;
