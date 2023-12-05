import { buildProps as u } from "@tu-view-plus/utils";
import { useSizeProp as a } from "@tu-view-plus/hooks";
const n = u({
  /**
   * @zh 绑定值
   * @en Value
   * @vModel
   */
  modelValue: {
    type: Object
  },
  /**
   * @zh 输入框的值
   * @en The value of the input
   * @vModel
   */
  inputValue: {
    type: String,
    default: ""
  },
  /**
   * @zh 是否能输入
   * @en Whether to input
   * @vModel
   */
  enabledInput: { type: Boolean, default: !1 },
  /**
   * @zh 格式化标签内容
   * @en Format tag content
   */
  formatLabel: {
    type: Function
  },
  /**
   * @zh 占位符
   * @en Placeholder
   */
  placeholder: String,
  /**
   * @zh 是否保留输入框的内容
   * @en Whether to keep the content of the input box
   */
  retainInputValue: Boolean,
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: Boolean,
  /**
   * @zh 按钮的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...a, default: "medium" },
  // private
  baseClass: String,
  focused: Boolean,
  uninjectFormItemContext: Boolean
}), r = {
  "update:modelValue": (e) => !0,
  "update:inputValue": (e) => !0,
  input: (e, t) => !0,
  change: (e, t) => !0,
  inputValueChange: (e) => !0,
  focus: (e) => !0,
  blur: (e) => !0
};
export {
  r as inputLabelEmits,
  n as inputLabelProps
};
