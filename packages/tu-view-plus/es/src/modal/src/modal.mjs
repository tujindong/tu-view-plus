import { buildProps as t } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
import "../../message/index.mjs";
import { messageTypes as l } from "../../message/src/constants.mjs";
import { messageDefaults as a } from "../../message/src/message.mjs";
const s = t({
  /**
   * @zh 对话框是否可见
   * @en Whether the modal is visible
   * @vModel
   */
  visible: {
    type: Boolean,
    default: void 0
  },
  /**
   * @zh 对话框默认是否可见（非受控状态）
   * @en Whether the modal is visible by default (uncontrolled state)
   */
  defaultVisible: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 对话框的宽度，不设置的情况下会使用样式中的宽度值
   * @en The width of the dialog box, if not set, the width value in the style will be used
   */
  width: {
    type: [Number, String]
  },
  /**
   * @zh 对话框的距离顶部的高度，居中显示开启的情况下不生效
   * @en The height from the top of the dialog box. It does not take effect when the center display is turned on.
   */
  top: {
    type: [Number, String]
  },
  /**
   * @zh 是否显示遮罩层
   * @en Whether to show the mask
   */
  mask: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 标题
   * @en Title
   */
  title: {
    type: String
  },
  /**
   * @zh 标题的水平对齐方向
   * @en horizontal alignment of the title
   */
  titleAlign: {
    type: String,
    default: "start"
  },
  /**
   * @zh 对话框是否居中显示
   * @en Whether the dialog box is displayed in the center
   */
  alignCenter: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 关闭时是否卸载节点
   * @en Whether to uninstall the node when close
   */
  unmountOnClose: Boolean,
  /**
   * @zh 是否点击遮罩层可以关闭对话框
   * @en Whether to close the modal when click the mask
   */
  maskClosable: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 是否隐藏取消按钮
   * @en Whether to hide the cancel button
   */
  hideCancel: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否开启简单模式
   * @en Whether to enable simple mode
   */
  simple: {
    type: Boolean,
    default: (e) => e.notice
  },
  /**
   * @zh 是否显示关闭按钮
   * @en Whether to show the close button
   */
  closable: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 确认按钮的内容
   * @en The content of the confirm button
   */
  okText: String,
  /**
   * @zh 取消按钮的内容
   * @en The content of the cancel button
   */
  cancelText: String,
  /**
   * @zh 确认按钮是否为加载中状态
   * @en Whether the confirm button is in the loading state
   */
  okLoading: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 确认按钮的Props
   * @en Props of confirm button
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
   * @zh 是否展示页脚部分
   * @en Whether to show the footer
   */
  footer: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 对话框是否挂载在 `body` 元素下
   * @en Whether the modal is mounted under the `body` element
   */
  renderToBody: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for modal
   */
  popupContainer: {
    type: [String, Object],
    default: "body"
  },
  /**
   * @zh 蒙层的样式
   * @en Mask style
   */
  maskStyle: {
    type: Object
  },
  /**
   * @zh 对话框的类名
   * @en The classname of the modal
   */
  modalClass: {
    type: [String, Array]
  },
  /**
   * @zh 对话框的样式
   * @en Modal style
   */
  modalStyle: {
    type: Object
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
  },
  /**
   * @zh 是否支持 ESC 键关闭对话框
   * @en Whether to support the ESC key to close the dialog
   */
  escToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 模态框的尺寸
   * @en Modal size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...o, default: "medium" },
  /**
   * @zh 是否支持拖动
   * @en Whether to support drag
   */
  draggable: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否开启全屏
   * @en Whether to enable full screen
   */
  fullscreen: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 遮罩层动画名字
   * @en Mask layer animation name
   * @defaultValue -
   */
  maskAnimationName: {
    type: String,
    default: (e) => e.fullscreen ? "fade-in-standard" : "fade-modal"
  },
  /**
   * @zh 对话框动画名字
   * @en Modal animation name
   * @defaultValue -
   */
  modalAnimationName: {
    type: String,
    default: (e) => e.fullscreen ? "zoom-in" : "zoom-modal"
  },
  /**
   * @zh 对话框内容部分的类名
   * @en The classname of the modal
   */
  bodyClass: {
    type: [String, Array]
  },
  /**
   * @zh 对话框内容部分的样式
   * @en Modal style
   */
  bodyStyle: {
    type: [String, Object, Array]
  },
  // private
  messageType: {
    type: String,
    values: l,
    default: a.type
  }
}), d = {
  "update:visible": (e) => !0,
  ok: (e) => !0,
  cancel: (e) => !0,
  open: () => !0,
  close: () => !0,
  beforeOpen: () => !0,
  beforeClose: () => !0
};
export {
  d as modalEmits,
  s as modalProps
};
