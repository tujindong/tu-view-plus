import { buildProps as r, isString as t, isNumber as o, isBoolean as i } from "@tu-view-plus/utils";
import { useSizeProp as a } from "@tu-view-plus/hooks";
import { checkboxTypes as d } from "./constants.mjs";
import { UPDATE_MODEL_EVENT as n } from "@tu-view-plus/constants";
const f = r({
  /**
   * @zh 绑定值
   * @en binding value
   */
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
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
    default: void 0
  },
  /**
   * @zh 选中时的值
   * @en value of the Checkbox if it's checked
   */
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  /**
   * @zh 未选中时的值
   * @en value of the Checkbox if it's not checked
   */
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  /**
   * @zh input id
   * @en input id
   */
  id: {
    type: String,
    default: void 0
  },
  /**
   * @zh 与 aria-control一致, 当 indeterminate为 true时生效
   * @en same as aria-controls, takes effect when `indeterminate` is `true`
   */
  controls: {
    type: String,
    default: void 0
  },
  /**
   * @zh 复选框类型
   * @en type of the Radio
   * @values 'border', 'button'
   * @defaultValue ''
   */
  type: {
    type: String,
    values: d,
    default: ""
  },
  /**
   * @zh 复选框尺寸
   * @en size of the Radio
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...a, default: "medium" },
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
    default: !0
  }
}), s = {
  [n]: (e) => t(e) || o(e) || i(e),
  change: (e, l) => t(e) || o(e) || i(e)
};
export {
  s as checkboxEmits,
  f as checkboxProps
};
