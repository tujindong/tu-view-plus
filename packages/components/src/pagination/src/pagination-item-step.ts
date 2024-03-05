import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type PaginationItemStep from './pagination-item-step.vue';

export const paginationItemStepProps = buildProps({});

export type PaginationItemStepProps = ExtractPropTypes<
  typeof paginationItemStepProps
>;
export type PaginationItemStepInstance = InstanceType<
  typeof PaginationItemStep
>;
