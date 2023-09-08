import { buildProps as t } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
const i = t({
  /**
   * @zh 内容
   * @en Content
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
   * @zh 气泡确认框是否可见
   * @en Whether the popconfirm is visible
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  /**
   * @zh 气泡确认框默认是否可见（非受控模式）
   * @en Whether the popconfirm is visible by default (uncontrolled mode)
   */
  defaultPopupVisible: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 气泡确认框的类型
   * @en Types of the popconfirm
   * @values 'info','success','warning','error'
   */
  type: {
    type: String,
    default: ""
  },
  /**
   * @zh popconfirm 尺寸
   * @en size of the popconfirm
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...o, default: "medium" },
  /**
   * @zh 确认按钮的内容
   * @en The content of the ok button
   */
  okText: String,
  /**
   * @zh 取消按钮的内容
   * @en The content of the cancel button
   */
  cancelText: String,
  /**
   * @zh 确认按钮是否为加载中状态
   * @en Whether the ok button is in the loading state
   */
  okLoading: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 确认按钮的Props
   * @en Props of ok button
   */
  okButtonProps: {
    type: Object
  },
  /**
   * @zh 取消按钮的Props
   * @en Props of cancel button
   */
  cancelButtonProps: {
    type: Object
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
   * @zh 弹出框的挂载点
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object]
  },
  /**
   * @zh 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。
   * @en The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously.
   */
  onBeforeOk: {
    type: Function
  },
  /**
   * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
   * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
   */
  onBeforeCancel: {
    type: Function
  }
}), r = {
  "update:popupVisible": (e) => !0,
  popupVisibleChange: (e) => !0,
  ok: () => !0,
  cancel: () => !0
};
export {
  r as popconfirmEmits,
  i as popconfirmProps
};
