import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Empty from './empty.vue';

export const emptyProps = buildProps({
  /**
   * @zh 描述内容
   * @en Description
   */
  description: String
} as const);

export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
export type EmptyInstance = InstanceType<typeof Empty>;
