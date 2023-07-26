import { UPDATE_MODEL_EVENT as o } from "@tu-view-plus/constants";
import { useSizeProp as r } from "@tu-view-plus/hooks";
import { buildProps as i, definePropType as a, isArray as t } from "@tu-view-plus/utils";
import { checkboxTypes as p } from "./constants.mjs";
const n = i({
  /**
   * @zh 绑定值
   * @en binding value
   */
  modelValue: {
    type: a(Array),
    default: () => []
  },
  /**
   * @zh 复选框类型
   * @en type of the Checkbox
   * @values 'border','button'
   * @defaultValue ''
   */
  type: {
    type: String,
    values: p,
    default: ""
  },
  /**
   * @zh 是否禁用
   * @en whether the nesting checkboxes are disabled
   */
  disabled: Boolean,
  /**
   * @zh 可被勾选的 checkbox 的最小数量
   * @en minimum number of checkbox checked
   */
  min: Number,
  /**
   * @zh 可被勾选的 checkbox 的最大数量
   * @en maximum number of checkbox checked
   */
  max: Number,
  /**
   * @zh 按钮类型或边框类型单选框的尺寸
   * @en the size of checkbox buttons or bordered radios
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...r, default: "medium" },
  /**
   * @zh 为屏幕阅读器准备的标签
   * @en label for screen reader
   */
  label: String,
  /**
   * @zh 选中状态时的字体颜色
   * @en font color when button is active
   */
  textColor: String,
  /**
   * @zh 复选框组元素标签
   * @en element tag of the checkbox group
   */
  tag: {
    type: String,
    default: "div"
  },
  /**
   * @zh 是否触发表单验证
   * @en whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), s = {
  [o]: (e) => t(e),
  change: (e) => t(e)
};
export {
  s as checkboxGroupEmits,
  n as checkboxGroupProps
};
