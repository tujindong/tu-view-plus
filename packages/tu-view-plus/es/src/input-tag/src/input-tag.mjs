import { buildProps as a } from "@tu-view-plus/utils";
import { useSizeProp as u } from "@tu-view-plus/hooks";
const r = a({
  /**
   * @zh 绑定值
   * @en Value
   * @vModel
   */
  modelValue: {
    type: Array
  },
  /**
   * @zh 默认值（非受控状态）
   * @en Default value (uncontrolled state)
   */
  defaultValue: {
    type: Array,
    default: () => []
  },
  /**
   * @zh 输入框的值
   * @en The value of the input
   * @vModel
   */
  inputValue: String,
  /**
   * @zh 输入框的默认值（非受控状态）
   * @en The default value of the input (uncontrolled state)
   */
  defaultInputValue: {
    type: String,
    default: ""
  },
  /**
   * @zh 占位符
   * @en Placeholder
   */
  placeholder: String,
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否为错误状态
   * @en Whether it is an error state
   */
  error: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否为只读模式
   * @en Whether it is read-only mode
   */
  readonly: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否允许清空
   * @en Whether to allowClear
   */
  allowClear: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 输入框的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue ''
   */
  size: u,
  /**
   * @zh 最多展示的标签个数，`0` 表示不限制
   * @en The maximum number of tags displayed, `0` means unlimited
   */
  maxTagCount: {
    type: Number,
    default: 0
  },
  /**
   * @zh 是否保留输入框的内容
   * @en Whether to keep the content of the input box
   */
  retainInputValue: {
    type: [Boolean, Object],
    default: !1
  },
  /**
   * @zh 格式化标签内容
   * @en Format tag content
   */
  formatTag: {
    type: Function
  },
  /**
   * @zh 是否仅创建唯一的值
   * @en Whether to create only unique values
   */
  uniqueValue: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 自定义 `TagData` 中的字段
   * @en Customize fields in `TagData`
   */
  fieldNames: {
    type: Object
  },
  // private
  baseClass: String,
  focused: Boolean,
  disabledInput: Boolean,
  uninjectFormItemContext: Boolean
}), n = {
  "update:modelValue": (e) => !0,
  "update:inputValue": (e) => !0,
  change: (e, t) => !0,
  inputValueChange: (e, t) => !0,
  pressEnter: (e, t) => !0,
  remove: (e, t) => !0,
  clear: (e) => !0,
  focus: (e) => !0,
  blur: (e) => !0,
  mouseleave: (e) => !0,
  mouseenter: (e) => !0
};
export {
  n as inputTagEmits,
  r as inputTagProps
};
