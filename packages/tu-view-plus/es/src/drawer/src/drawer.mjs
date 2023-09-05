import { buildProps as t } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
import { DRAWER_PLACEMENTS as l } from "./constants.mjs";
const u = t({
  /**
   * @zh 抽屉是否可见
   * @en Whether the drawer is visible
   */
  visible: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 抽屉默认是否可见（非受控模式）
   * @en Whether the drawer is visible by default (uncontrolled mode)
   */
  defaultVisible: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 抽屉放置的位置
   * @en Where the drawer is placed
   * @values 'top','right','bottom','left'
   */
  placement: {
    type: String,
    default: "right",
    validator: (e) => l.includes(e)
  },
  /**
   * @zh 标题
   * @en Title
   */
  title: String,
  /**
   * @zh 是否显示遮罩层
   * @en Whether to show the mask
   */
  mask: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 点击遮罩层是否可以关闭
   * @en Click on the mask layer to be able to close
   */
  maskClosable: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 是否展示关闭按钮
   * @en Whether to show the close button
   */
  closable: {
    type: Boolean,
    default: !0
  },
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
   * @zh 关闭时是否卸载节点
   * @en Whether to uninstall the node when close
   */
  unmountOnClose: Boolean,
  /**
   * @zh 抽屉的宽度（仅在placement为right,left时可用）
   * @en The width of the drawer (only available when placement is right, left)
   */
  width: {
    type: [Number, String],
    default: 250
  },
  /**
   * @zh 抽屉的高度（仅在placement为top,bottom时可用）
   * @en The height of the drawer (only available when placement is top, bottom)
   */
  height: {
    type: [Number, String],
    default: 250
  },
  /**
   * @zh 抽屉的尺寸
   * @en Drawer size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...o, default: "medium" },
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object],
    default: "body"
  },
  /**
   * @zh 抽屉的样式
   * @en Drawer style
   */
  drawerStyle: {
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
   * @zh 是否支持 ESC 键关闭抽屉
   * @en Whether to support the ESC key to close the dialog
   */
  escToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 抽屉是否挂载在 `body` 元素下
   * @en Whether the drawer is mounted under the `body` element
   */
  renderToBody: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 是否展示头部内容
   * @en Whether to display high-quality content
   */
  header: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 是否展示底部内容
   * @en Whether to display the bottom content
   */
  footer: {
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
  }
}), p = {
  "update:visible": (e) => !0,
  ok: (e) => !0,
  cancel: (e) => !0,
  open: () => !0,
  close: () => !0,
  beforeOpen: () => !0,
  beforeClose: () => !0
};
export {
  p as drawerEmits,
  u as drawerProps
};
