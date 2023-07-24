import { mutable as o, isClient as s, buildProps as a, iconPropType as n, definePropType as t } from "@tu-view-plus/utils";
import { messageTypes as u } from "./constants.mjs";
const e = o({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "",
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: s ? document.body : void 0
}), p = a({
  /**
   * @zh 自定义类名
   * @en custom class name for Message
   */
  customClass: {
    type: String,
    default: e.customClass
  },
  /**
   * @zh 文字是否居中
   * @en whether to center the text
   */
  center: {
    type: Boolean,
    default: e.center
  },
  /**
   * @zh 是否将 message 属性作为 HTML 片段处理
   * @en whether `message` is treated as HTML string
   */
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: e.dangerouslyUseHTMLString
  },
  /**
   * @zh 	显示时间，单位为毫秒。 设为 0 则不会自动关闭
   * @en display duration, millisecond. If set to 0, it will not turn off automatically
   */
  duration: {
    type: Number,
    default: e.duration
  },
  /**
   * @zh 自定义图标。
   * @en custom icon component。
   */
  icon: {
    type: n,
    default: e.icon
  },
  /**
   * @zh 消息元素id
   * @en message dom id
   */
  id: {
    type: String,
    default: e.id
  },
  /**
   * @zh 消息文字
   * @en message text
   */
  message: {
    type: t([
      String,
      Object,
      Function
    ]),
    default: e.message
  },
  /**
   * @zh 关闭时的回调函数, 参数为被关闭的 message 实例
   * @en callback function when closed with the message instance as the parameter
   */
  onClose: {
    type: t(Function),
    required: e.onClose
  },
  /**
   * @zh 是否显示关闭按钮
   * @en whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: e.showClose
  },
  /**
   * @zh 消息类型
   * @en message type
   */
  type: {
    type: String,
    values: u,
    default: e.type
  },
  /**
   * @zh Message 距离窗口顶部的偏移量
   * @en set the distance to the top of viewport
   */
  offset: {
    type: Number,
    default: e.offset
  },
  /**
   * @zh 层级
   * @en input box z-index
   */
  zIndex: {
    type: Number,
    default: e.zIndex
  },
  /**
   * @zh 合并内容相同的消息，不支持 VNode 类型的消息
   * @en merge messages with the same content, type of VNode message is not supported
   */
  grouping: {
    type: Boolean,
    default: e.grouping
  },
  /**
   * @zh 重复次数，类似于 Badge 。当和 grouping 属性一起使用时作为初始数量使用
   * @en The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
   */
  repeatNum: {
    type: Number,
    default: e.repeatNum
  }
});
export {
  e as messageDefaults,
  p as messageProps
};
