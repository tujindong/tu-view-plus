import { buildProps as i, isString as o, isNumber as r, isBoolean as t } from "@tu-view-plus/utils";
import { useSizeProp as a } from "@tu-view-plus/hooks";
const d = i({
  /**
   * @zh 单选框尺寸
   * @en size of the Radio
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...a, default: "medium" },
  /**
   * @zh 是否禁用单选框
   * @en whether Radio is disabled
   */
  disabled: Boolean,
  /**
   * @zh 单选框的值
   * @en the value of Radio
   * @defaultValue ''
   */
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
}), l = i({
  ...d,
  /**
   * @zh 绑定值
   * @en binding value
   * @defaultValue ''
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  /**
   * @zh 单选框原生name属性
   * @en native `name` attribute
   * @defaultValue ''
   */
  name: {
    type: String,
    default: ""
  },
  /**
   * @zh 是否为单选框添加边框
   * @en whether to add a border around Radio
   */
  border: Boolean
}), m = {
  change: (e) => o(e) || r(e) || t(e),
  ["update:modelValue"]: (e) => o(e) || r(e) || t(e)
};
export {
  m as radioEmits,
  l as radioProps,
  d as radioPropsBase
};
