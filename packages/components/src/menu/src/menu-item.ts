import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type MenuItem from './menu-item.vue';

export const menuItemProps = buildProps({
  /**
   * @zh 唯一标志
   * @en Unique key
   */
  key: {
    type: String
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false
  }
} as const);

export const menuItemEmits = ['click'];

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
export type MenuItemInstance = InstanceType<typeof MenuItem>;
