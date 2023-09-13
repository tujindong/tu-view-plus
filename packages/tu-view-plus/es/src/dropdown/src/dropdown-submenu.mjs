import { buildProps as t } from "@tu-view-plus/utils";
const o = t({
  /**
   * @zh 选项值
   * @en Value
   */
  value: {
    type: [String, Number]
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 触发方式
   * @en Trigger method
   * @values 'hover','click'
   */
  trigger: {
    type: [String, Array],
    default: "click"
  },
  /**
   * @zh 弹出位置
   * @en Popup position
   * @values 'rt','lt'
   */
  position: {
    type: String,
    default: "rt"
  },
  /**
   * @zh 弹出框是否可见
   * @en Whether the popup is visible
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  /**
   * @zh 弹出框默认是否可见（非受控模式）
   * @en Whether the popup is visible by default (uncontrolled mode)
   */
  defaultPopupVisible: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 自定义选项属性
   * @en Custom option properties
   */
  optionProps: {
    type: Object
  }
}), i = {
  "update:popupVisible": (e) => !0,
  /**
   * @zh 下拉框显示状态发生改变时触发
   * @en Triggered when the display status of the drop-down box changes
   * @property {boolean} visible
   */
  popupVisibleChange: (e) => !0
};
export {
  i as dropdownSubmenuEmits,
  o as dropdownSubmenuProps
};
