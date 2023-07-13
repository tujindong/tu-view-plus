import { buildProps as r, definePropType as t, iconPropType as o, mutable as u } from "@tu-view-plus/utils";
import { useSizeProp as a } from "@tu-view-plus/hooks";
import { UPDATE_MODEL_EVENT as l } from "@tu-view-plus/constants";
const d = r({
  /**
   * @zh 原生的输入框id
   * @en native input id
   */
  id: {
    type: String,
    default: void 0
  },
  /**
   * @zh 按钮的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...a, default: "medium" },
  /**
   * @zh 是否禁用
   * @en whether to disable
   */
  disabled: Boolean,
  /**
   * @zh 绑定值
   * @en binding value
   */
  modelValue: {
    type: t([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  /**
   * @zh 输入框类型
   * @en type of input
   */
  type: {
    type: String,
    default: "text"
  },
  /**
   * @zh 原生输入框自动填充
   * @en native input autocomplete
   */
  autocomplete: {
    type: String,
    default: "off"
  },
  /**
   * @zh 内容格式化
   * @en format content
   */
  formatter: {
    type: Function
  },
  /**
   * @zh 内容解析
   * @en parse content
   */
  parser: {
    type: Function
  },
  /**
   * @zh 占位内容
   * @en placeholder
   */
  placeholder: {
    type: String
  },
  /**
   * @zh 原生输入表单
   * @en native input form
   */
  form: {
    type: String
  },
  /**
   * @zh 原生输入框只读属性
   * @en native input readonly
   */
  readonly: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否清空内容
   * @en whether to clearable
   */
  clearable: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 可切换为密码输入
   * @en toggleable password input
   */
  showPassword: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否显示输入字数统计
   * @en word count
   */
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 输入框尾部图标
   * @en suffix icon
   */
  suffixIcon: {
    type: o
  },
  /**
   * @zh 输入框头部图标
   * @en prefix icon
   */
  prefixIcon: {
    type: o
  },
  /**
   * @zh 选择器组件使用的内部属性
   * @en container role, internal properties provided for use by the picker component
   */
  containerRole: {
    type: String,
    default: void 0
  },
  /**
   * @zh 原生输入框 aria-label
   * @en native input aria-label
   */
  label: {
    type: String,
    default: void 0
  },
  /**
   * @zh 输入框 tabIndex
   * @en input tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0
  },
  /**
   * @zh 是否触发表单验证
   * @en whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 输入框元素样式
   * @en input element style
   */
  inputStyle: {
    type: t([Object, Array, String]),
    default: () => u({})
  }
}), f = {
  [l]: (e) => !0,
  input: (e) => !0,
  change: (e) => !0,
  focus: (e) => !0,
  blur: (e) => !0,
  clear: () => !0,
  mouseleave: (e) => !0,
  mouseenter: (e) => !0,
  keydown: (e) => !0,
  compositionstart: (e) => !0,
  compositionupdate: (e) => !0,
  compositionend: (e) => !0
};
export {
  f as inputEmits,
  d as inputProps
};
