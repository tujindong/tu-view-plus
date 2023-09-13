import { buildProps as t } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
import "../../button/index.mjs";
import { buttonTypes as p } from "../../button/src/constants.mjs";
const d = t({
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
   * @zh 触发方式
   * @en Trigger method
   * @values 'hover','click','focus','contextMenu'
   */
  trigger: {
    type: [String, Array],
    default: "click"
  },
  /**
   * @zh 弹出位置
   * @en Popup position
   * @values 'top','tl','tr','bottom','bl','br'
   */
  position: {
    type: String,
    default: "br"
  },
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object]
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
   * @zh 按钮类型
   * @en Button type
   */
  type: {
    type: String,
    values: p,
    default: "default"
  },
  /**
   * @zh 按钮的尺寸
   * @en Button size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...o, default: "medium" },
  /**
   * @zh 按钮属性
   * @en Button props
   */
  buttonProps: {
    type: Object
  },
  /**
   * @zh 是否在用户选择后隐藏弹出框
   * @en Whether to hide popup when the user selects
   */
  hideOnSelect: {
    type: Boolean,
    default: !0
  }
}), n = {
  "update:popupVisible": (e) => !0,
  /**
   * @zh 下拉框显示状态发生改变时触发
   * @en Triggered when the display status of the drop-down box changes
   * @param {boolean} visible
   */
  popupVisibleChange: (e) => !0,
  /**
   * @zh 点击按钮时触发
   * @en Emitted when the button is clicked
   * @param {MouseEvent} ev
   */
  click: (e) => !0,
  /**
   * @zh 用户选择时触发
   * @en Triggered when the user selects
   * @param {string | number | Record<string, any> | undefined} value
   * @param {Event} ev
   */
  select: (e, i) => !0
};
export {
  n as dropdownButtonEmits,
  d as dropdownButtonProps
};
