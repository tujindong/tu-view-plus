import { buildProps } from '@tu-view-plus/utils';
import { TriggerEvent } from '@tu-view-plus/constants';
import { useSizeProp } from '@tu-view-plus/hooks';
import { buttonTypes } from '../../button';

import type { ExtractPropTypes, PropType } from 'vue';
import type { ButtonProps } from '../../button';
import type { DropdownPosition } from './constants';

export const dropdownButtonProps = buildProps({
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
    default: 'br'
  },

  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
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
   * @zh 按钮类型
   * @en Button type
   */
  type: {
    type: String,
    values: buttonTypes,
    default: 'default'
  },

  /**
   * @zh 按钮的尺寸
   * @en Button size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 按钮属性
   * @en Button props
   */
  buttonProps: {
    type: Object as PropType<ButtonProps>
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

export const dropdownButtonEmits = {
  'update:popupVisible': (visible: boolean) => true,

  /**
   * @zh 下拉框显示状态发生改变时触发
   * @en Triggered when the display status of the drop-down box changes
   * @param {boolean} visible
   */
  popupVisibleChange: (visible: boolean) => true,

  /**
   * @zh 点击按钮时触发
   * @en Emitted when the button is clicked
   * @param {MouseEvent} ev
   */
  click: (ev: MouseEvent) => true,

  /**
   * @zh 用户选择时触发
   * @en Triggered when the user selects
   * @param {string | number | Record<string, any> | undefined} value
   * @param {Event} ev
   */
  select: (
    value: string | number | Record<string, any> | undefined,
    ev: Event
  ) => true
};

export type DropdownButtonProps = ExtractPropTypes<typeof dropdownButtonProps>;
export type DropdownButtonEmits = typeof dropdownButtonEmits;
