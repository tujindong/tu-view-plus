import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
import { radioEmits as o } from "./radio.mjs";
import { radioTypes as r } from "./constants.mjs";
const p = e({
  /**
   * @zh 单选框类型
   * @en type of the Radio
   * @values 'border','button'
   * @defaultValue ''
   */
  type: {
    type: String,
    values: r,
    default: ""
  },
  /**
   * @zh 原生id属性
   * @en native `id` attribute
   * @defaultValue undefined
   */
  id: {
    type: String,
    default: void 0
  },
  /**
   * @zh 按钮类型或边框类型单选框的尺寸
   * @en the size of radio buttons or bordered radios
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...t, default: "medium" },
  /**
   * @zh 是否禁用单选框
   * @en whether the nesting radios are disabled
   */
  disabled: Boolean,
  /**
   * @zh 按钮组绑定值
   * @en binding value
   * @defaultValue ''
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  /**
   * @zh 按钮组的aria-label
   * @en same as `aria-label` in RadioGroup
   * @defaultValue undefined
   */
  label: {
    type: String,
    default: void 0
  },
  /**
   * @zh 标签文字颜色
   * @en font color when button is active
   * @defaultValue ''
   */
  textColor: {
    type: String,
    default: ""
  },
  /**
   * @zh 原生的name属性
   * @en native `name` attribute
   */
  name: {
    type: String,
    default: void 0
  },
  /**
   * @zh 是否触发表单验证
   * @en whether to trigger form validation
   * @defaultValue true
   */
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), u = o;
export {
  u as radioGroupEmits,
  p as radioGroupProps
};
