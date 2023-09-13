import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const dropdownItemProps = buildProps({
  /**
   * @zh 选项值
   * @en Value
   */
  value: {
    type: [String, Number, Object]
  },

  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false
  },

  // private
  active: Boolean,

  uninjectContext: Boolean
} as const);

export const dropdownItemEmits = {
  click: (ev: MouseEvent) => true
};

export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>;
export type DropdownItemEmits = typeof dropdownItemEmits;
