import { buildProps as l, isNumber as t } from "@tu-view-plus/utils";
import { useSizeProp as u } from "@tu-view-plus/hooks";
import { CHANGE_EVENT as i, INPUT_EVENT as n, UPDATE_MODEL_EVENT as a } from "@tu-view-plus/constants";
import { isNil as r } from "lodash-unified";
const N = l({
  /**
   * @zh 等价于原生 input id 属性
   * @en same as `id` in native input
   */
  id: {
    type: String,
    default: void 0
  },
  /**
   * @zh 计数器步长
   * @en incremental step
   */
  step: {
    type: Number,
    default: 1
  },
  /**
   * @zh 是否只能输入 step 的倍数
   * @en whether input value can only be multiple of step
   */
  stepStrictly: Boolean,
  /**
   * @zh 设置计数器允许的最大值
   * @en the maximum allowed value
   */
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  /**
   * @zh 设置计数器允许的最小值
   * @en the minimum allowed value
   */
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  /**
   * @zh 选中项绑定值
   * @en binding value
   */
  modelValue: Number,
  /**
   * @zh 原生  readonly 属性，是否只读
   * @en same as `readonly` in native input
   */
  readonly: Boolean,
  /**
   * @zh 是否禁用状态
   * @en whether the component is disabled
   */
  disabled: Boolean,
  /**
   * @zh 按钮的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...u, default: "medium" },
  /**
   * @zh 是否清空内容
   * @en whether to clearable
   */
  clearable: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否使用控制按钮
   * @en whether to enable the control buttons
   */
  controls: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 控制按钮位置
   * @en position of the control buttons
   */
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  /**
   * @zh 当输入框被清空时显示的值
   * @en value should be set when input box is cleared
   */
  valueOnClear: {
    type: [String, Number, null],
    validator: (e) => e === null || t(e) || ["min", "max"].includes(e),
    default: null
  },
  /**
   * @zh 等价于原生 input name 属性
   * @en same as `name` in native input
   */
  name: String,
  /**
   * @zh 等价于原生 input label 属性
   * @en same as `label` in native input
   */
  label: String,
  /**
   * @zh 等价于原生 input placeholder 属性
   * @en same as `placeholder` in native input
   */
  placeholder: String,
  /**
   * @zh 数值精度
   * @en precision of input value
   */
  precision: {
    type: Number,
    validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10)
  },
  /**
   * @zh 是否触发表单验证
   * @en whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), f = {
  [i]: (e, o) => o !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [n]: (e) => t(e) || r(e),
  [a]: (e) => t(e) || r(e)
};
export {
  f as inputNumberEmits,
  N as inputNumberProps
};
