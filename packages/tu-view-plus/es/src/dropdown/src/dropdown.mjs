import { buildProps as t } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
const l = t({
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
    default: "bottom"
  },
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object]
  },
  popupMaxHeight: {
    type: [Boolean, Number],
    default: !0
  },
  /**
   * @zh 下拉菜单的尺寸
   * @en dropdown size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...o, default: "medium" },
  /**
   * @zh 是否在用户选择后隐藏弹出框
   * @en Whether to hide popup when the user selects
   */
  hideOnSelect: {
    type: Boolean,
    default: !0
  }
}), r = {
  "update:popupVisible": (e) => !0,
  popupVisibleChange: (e) => !0,
  select: (e, p) => !0
};
export {
  r as dropdownEmits,
  l as dropdownProps
};
