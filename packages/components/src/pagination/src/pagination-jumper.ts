import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type PaginationJumper from './pagination-jumper.vue';

export const paginationJumperProps = buildProps({});

export type PaginationJumperProps = ExtractPropTypes<
  typeof paginationJumperProps
>;
export type PaginationJumperInstance = InstanceType<typeof PaginationJumper>;
