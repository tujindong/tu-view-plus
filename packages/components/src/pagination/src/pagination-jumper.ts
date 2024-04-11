import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType } from 'vue';

export const paginationJumperProps = buildProps({
  current: {
    type: Number,
    required: true
  },
  simple: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  pages: {
    type: Number,
    required: true
  },
  size: useSizeProp,
  onChange: {
    type: Function as PropType<(value: number) => void>
  }
} as const);

export const paginationJumperEmits = ['change'];

export type PaginationJumperProps = ExtractPropTypes<
  typeof paginationJumperProps
>;
