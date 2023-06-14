import { buildProps as i, isString as o, isNumber as r, isBoolean as t } from "@tu-view-plus/utils";
import { useSizeProp as m } from "@tu-view-plus/hooks";
import { radioTypes as a } from "./constants.mjs";
import { CHANGE_EVENT as d, UPDATE_MODEL_EVENT as p } from "@tu-view-plus/constants";
const f = i({
  /**
   * @zh 单选框类型
   * @en type of the Radio
   * @values 'border', 'button'
   * @defaultValue ''
   */
  type: {
    type: String,
    values: a,
    default: ""
  },
  /**
   * @zh 单选框尺寸
   * @en size of the Radio
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...m, default: "medium" },
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
  },
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
}), E = {
  [d]: (e) => o(e) || r(e) || t(e),
  [p]: (e) => o(e) || r(e) || t(e)
};
export {
  E as radioEmits,
  f as radioProps
};
