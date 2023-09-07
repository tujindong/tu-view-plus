import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as p } from "@tu-view-plus/hooks";
const i = e({
  /**
   * @zh 文字气泡是否可见
   * @en Whether the popover is visible
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  /**
   * @zh 文字气泡默认是否可见（非受控模式）
   * @en Whether the popover is visible by default (uncontrolled mode)
   */
  defaultPopupVisible: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 标题
   * @en Title
   */
  title: String,
  /**
   * @zh 内容
   * @en Content
   */
  content: String,
  /**
   * @zh 触发方式
   * @en Trigger method
   * @values 'hover','click','focus','contextMenu'
   */
  trigger: {
    type: [String, Array],
    default: "hover"
  },
  /**
   * @zh 弹出位置
   * @en Pop-up position
   * @values 'top','tl','tr','bottom','bl','br','left','lt','lb','right','rt','rb'
   */
  position: {
    type: String,
    default: "top"
  },
  /**
   * @zh popover 尺寸
   * @en size of the popover
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...p, default: "medium" },
  /**
   * @zh 弹出框内容的类名
   * @en The class name of the popup content
   */
  contentClass: {
    type: [String, Array, Object]
  },
  /**
   * @zh 弹出框内容的样式
   * @en The style of the popup content
   */
  contentStyle: {
    type: Object
  },
  /**
   * @zh 弹出框箭头的类名
   * @en The class name of the popup arrow
   */
  arrowClass: {
    type: [String, Array, Object]
  },
  /**
   * @zh 弹出框箭头的样式
   * @en The style of the popup arrow
   */
  arrowStyle: {
    type: Object
  },
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for pop-up box
   */
  popupContainer: {
    type: [String, Object]
  }
}), l = {
  "update:popupVisible": (t) => !0,
  popupVisibleChange: (t) => !0
};
export {
  l as popoverEmits,
  i as popoverProps
};
