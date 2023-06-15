import { buildProps } from '@tu-view-plus/utils';
import { roleTypes } from './constants';

import type { ExtractPropTypes } from 'vue';
import type Popper from './popper.vue';

export const popperProps = buildProps({
  /**
   * @zh Tooltip 角色
   * @en Tooltip Role
   * @values 'dialog','grid','group','listbox','menu','navigation','tooltip','tree'
   * @defaultValue 'tooltip'
   */
  role: {
    type: String,
    values: roleTypes,
    default: 'tootip'
  }
} as const);

export type PopperProps = ExtractPropTypes<typeof popperProps>;
export type PopperInstance = InstanceType<typeof Popper>;
