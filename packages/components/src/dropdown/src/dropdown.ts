import { buildProps } from '@tu-view-plus/utils';
import { TriggerEvent, TriggerPosition } from '@tu-view-plus/constants';

import type { ExtractPropTypes, PropType } from 'vue';
import type Dropdown from './dropdown.vue';
import type { DropdownPosition } from './constants';

export const dropdownProps = buildProps({
  /**
   * @zh 弹出框是否可见
   * @en Whether the popup is visible
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 弹出框默认是否可见（非受控模式）
   * @en Whether the popup is visible by default (uncontrolled mode)
   */
  defaultPopupVisible: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 触发方式
   * @en Trigger method
   * @values 'hover','click','focus','contextMenu'
   */
  trigger: {
    type: [String, Array] as PropType<TriggerEvent | TriggerEvent[]>,
    default: 'click'
  },

  /**
   * @zh 弹出位置
   * @en Popup position
   * @values 'top','tl','tr','bottom','bl','br'
   */
  position: {
    type: String as PropType<DropdownPosition>,
    default: 'bottom'
  },

  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
  },

  popupMaxHeight: {
    type: [Boolean, Number],
    default: true
  },

  /**
   * @zh 是否在用户选择后隐藏弹出框
   * @en Whether to hide popup when the user selects
   */
  hideOnSelect: {
    type: Boolean,
    default: true
  }
} as const);

export const dropdownEmits = {
  'update:popupVisible': (visible: boolean) => true,
  popupVisibleChange: (visible: boolean) => true,
  select: (
    value: string | number | Record<string, any> | undefined,
    ev: Event
  ) => true
};

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
export type DropdownInstance = InstanceType<typeof Dropdown>;
export type DropdownEmits = typeof dropdownEmits;
