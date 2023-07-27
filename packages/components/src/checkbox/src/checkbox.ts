import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { checkboxTypes, CheckboxValueType } from './constants';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { isBoolean, isNumber, isString } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Checkbox from './checkbox.vue';

export const checkboxProps = buildProps({
  /**
   * @zh 绑定值
   * @en binding value
   */
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined
  },

  /**
   * @zh 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）
   * @en value of the Checkbox when used inside a `checkbox-group`
   */
  label: {
    type: [String, Boolean, Number, Object]
  },

  /**
   * @zh 设置不确定状态，仅负责样式控制
   * @en Set indeterminate state, only responsible for style control
   */
  indeterminate: Boolean,

  /**
   * @zh 是否禁用
   * @en whether the Checkbox is disabled
   */
  disabled: Boolean,

  /**
   * @zh 当前是否勾选
   * @en if the Checkbox is checked
   */
  checked: Boolean,

  /**
   * @zh 原生 name 属性
   * @en native 'name' attribute
   */
  name: {
    type: String,
    default: undefined
  },

  /**
   * @zh 选中时的值
   * @en value of the Checkbox if it's checked
   */
  trueLabel: {
    type: [String, Number],
    default: undefined
  },

  /**
   * @zh 未选中时的值
   * @en value of the Checkbox if it's not checked
   */
  falseLabel: {
    type: [String, Number],
    default: undefined
  },

  /**
   * @zh input id
   * @en input id
   */
  id: {
    type: String,
    default: undefined
  },

  /**
   * @zh 与 aria-control一致, 当 indeterminate为 true时生效
   * @en same as aria-controls, takes effect when `indeterminate` is `true`
   */
  controls: {
    type: String,
    default: undefined
  },

  /**
   * @zh 复选框类型
   * @en type of the Radio
   * @values 'border', 'button'
   * @defaultValue ''
   */
  type: {
    type: String,
    values: checkboxTypes,
    default: ''
  },

  /**
   * @zh 复选框尺寸
   * @en size of the Radio
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 复选框 tabIndex
   * @en checkbox tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0
  },

  /**
   * @zh 输入时是否触发表单的校验
   * @en whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
} as const);

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType, evt: Event) =>
    isString(val) || isNumber(val) || isBoolean(val)
};

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export type CheckboxEmits = typeof checkboxEmits;
export type CheckboxInstance = InstanceType<typeof Checkbox>;
