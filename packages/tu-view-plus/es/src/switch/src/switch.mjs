import { buildProps as a, iconPropType as o, definePropType as r, isBoolean as t, isString as i, isNumber as n } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as l, CHANGE_EVENT as p, INPUT_EVENT as u } from "@tu-view-plus/constants";
import { useSizeProp as d } from "@tu-view-plus/hooks";
const f = ["circle", "round", "line"], m = a({
  /**
   * @zh 绑定值，需要等于 active-value 或 inactive-value，默认为 Boolean 类型
   * @en binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type
   */
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  /**
   * @zh 开关类型
   * @en type of the Switch
   * @values 'circle', 'round'
   * @defaultValue 'circle'
   */
  type: {
    type: String,
    values: f,
    default: "circle"
  },
  /**
   * @zh 是否禁用
   * @en whether Switch is disabled
   * @defaultValue false
   */
  disabled: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否显示加载中
   * @en whether Switch is in loading state
   * @defaultValue false
   */
  loading: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 切换按钮的尺寸
   * @en Switch size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...d, default: "medium" },
  /**
   * @zh switch 的宽度
   * @en width of Switch
   */
  width: {
    type: [String, Number],
    default: ""
  },
  /**
   * @zh 无论图标或文本是否显示在点内，只会呈现文本的第一个字符
   * @en whether icon or text is displayed inside dot, only the first character will be rendered for text
   * @defaultValue false
   */
  inlinePrompt: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh switch 状态为 on 时所显示图标，设置此项会忽略 active-text
   * @en component of the icon displayed when in `on` state, overrides `active-text`
   */
  activeIcon: {
    type: o
  },
  /**
   * @zh switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text
   * @en component of the icon displayed when in `off` state, overrides `inactive-text`
   */
  inactiveIcon: {
    type: o
  },
  /**
   * @zh switch 打开时的文字描述
   * @en text displayed when in `on` state
   */
  activeText: {
    type: String,
    default: ""
  },
  /**
   * @zh switch 的状态为 off 时的文字描述
   * @en text displayed when in `off` state
   */
  inactiveText: {
    type: String,
    default: ""
  },
  /**
   * @zh switch 状态为 on 时的值
   * @en switch value when in `on` state
   * @defaultValue true
   */
  activeValue: {
    type: [Boolean, String, Number],
    default: !0
  },
  /**
   * @zh switch的状态为 off 时的值
   * @en switch value when in `off` state
   * @defaultValue false
   */
  inactiveValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  /**
   * @zh switch 对应的 name 属性
   * @en input name of Switch
   */
  name: {
    type: String,
    default: ""
  },
  /**
   * @zh 改变 switch 状态时是否触发表单的校验
   * @en whether to trigger form validation
   * @defaultValue true
   */
  validateEvent: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换
   * @en before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching
   */
  beforeChange: {
    type: r(Function)
  },
  /**
   * @zh input 的 id
   * @en id for input
   */
  id: String,
  /**
   * @zh input 的 tabindex
   * @en tabindex for input
   */
  tabindex: {
    type: [String, Number]
  }
}), g = {
  [l]: (e) => t(e) || i(e) || n(e),
  [p]: (e) => t(e) || i(e) || n(e),
  [u]: (e) => t(e) || i(e) || n(e)
};
export {
  g as switchEmits,
  m as switchProps,
  f as switchTypes
};
