import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type PaginationOptions from './pagination-options.vue';

export const paginationOptionsProps = buildProps({});

export type paginationOptionsProps = ExtractPropTypes<
  typeof paginationOptionsProps
>;
export type PaginationOptionsInstance = InstanceType<typeof PaginationOptions>;
