import { buildProps as t } from "@tu-view-plus/utils";
const o = t({
  /**
   * @zh 文字气泡是否可见
   * @en Whether the tooltip is visible
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  /**
   * @zh 文字气泡默认是否可见（非受控模式）
   * @en Whether the tooltip is visible by default (uncontrolled mode)
   */
  defaultPopupVisible: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 文字气泡内容
   * @en Tooltip content
   */
  content: String,
  /**
   * @zh 弹出位置
   * @en Popup position
   * @values 'top','tl','tr','bottom','bl','br','left','lt','lb','right','rt','rb'
   */
  position: {
    type: String,
    default: "top"
  },
  /**
   * @zh 是否展示为迷你尺寸
   * @en Whether to display as a mini size
   */
  mini: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 弹出框的背景颜色
   * @en Background color of the popover
   */
  backgroundColor: {
    type: String
  },
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
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object]
  }
});
export {
  o as tooltipProps
};
