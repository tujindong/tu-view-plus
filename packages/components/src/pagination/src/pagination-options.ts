import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType } from 'vue';

export const paginationOptionsProps = buildProps({
  sizeOptions: {
    type: Array,
    required: true
  },
  pageSize: Number,
  disabled: Boolean,
  size: useSizeProp,
  onChange: {
    type: Function as PropType<(value: number) => void>
  },
  selectProps: {
    type: Object
  }
} as const);

export const paginationOptionsEmits = ['change'];

export type paginationOptionsProps = ExtractPropTypes<
  typeof paginationOptionsProps
>;
