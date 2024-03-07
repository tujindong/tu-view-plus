import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type PaginationItem from './pagination-item.vue';

export const paginationItemProps = buildProps({
  pageNumber: {
    type: Number
  },
  current: {
    type: Number
  },
  disabled: {
    type: Boolean,
    default: false
  },
  style: {
    type: Object as PropType<CSSProperties>
  },
  activeStyle: {
    type: Object as PropType<CSSProperties>
  }
} as const);

export const paginationItemEmits = ['click'];

export type PaginationItemProps = ExtractPropTypes<typeof paginationItemProps>;
export type PaginationItemInstance = InstanceType<typeof PaginationItem>;
