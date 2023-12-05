import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type SelectGroup from './select-group.vue';

export const selectGroupProps = buildProps({
  /**
   * @zh 选项组的标题
   * @en Title of option group
   */
  label: {
    type: String
  }
} as const);

export type SelectGroupProps = ExtractPropTypes<typeof selectGroupProps>;
export type SelectGroupPropsInstance = InstanceType<typeof SelectGroup>;
