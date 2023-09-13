import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const dropdownSubmenuProps = buildProps({
  /**
   * @zh 选项值
   * @en Value
   */
  value: {
    type: [String, Number]
  },

  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 触发方式
   * @en Trigger method
   * @values 'hover','click'
   */
  trigger: {
    type: [String, Array] as PropType<
      'hover' | 'click' | ('hover' | 'click')[]
    >,
    default: 'click'
  },

  /**
   * @zh 弹出位置
   * @en Popup position
   * @values 'rt','lt'
   */
  position: {
    type: String as PropType<'rt' | 'lt'>,
    default: 'rt'
  },

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
   * @zh 自定义选项属性
   * @en Custom option properties
   */
  optionProps: {
    type: Object
  }
} as const);

export const dropdownSubmenuEmits = {
  'update:popupVisible': (visible: boolean) => true,

  /**
   * @zh 下拉框显示状态发生改变时触发
   * @en Triggered when the display status of the drop-down box changes
   * @property {boolean} visible
   */
  popupVisibleChange: (visible: boolean) => true
};

export type DropdownSubmenuProps = ExtractPropTypes<
  typeof dropdownSubmenuProps
>;
export type DropdownSubmenuEmit = typeof dropdownSubmenuEmits;
