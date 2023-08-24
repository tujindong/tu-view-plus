import { buildProps as e } from "@tu-view-plus/utils";
const i = e({
  /**
   * @zh 可视区域高度
   * @en Viewable area height
   */
  height: {
    type: [Number, String],
    default: 200
  },
  data: {
    type: Array,
    default: () => []
  },
  /**
   * @zh 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。
   * @en The threshold of the number of elements to enable virtual scrolling. When the number of data is less than the threshold, virtual scrolling will not be enabled.
   */
  threshold: {
    type: Number,
    default: 0
  },
  itemKey: {
    type: String,
    default: "key"
  },
  /**
   * @zh 元素高度是否是固定的。
   * @en Is the element height fixed.
   */
  fixedSize: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 元素高度不固定时的预估高度。
   * @en Is the element height fixed.
   */
  estimatedSize: {
    type: Number,
    default: 30
  },
  /**
   * @zh 视口边界外提前挂载的元素数量。
   * @en The number of elements mounted in advance outside the boundary of the viewport.
   * @defaultValue 10
   */
  buffer: {
    type: Number,
    default: 10
  },
  component: {
    type: [String, Object],
    default: "div"
  },
  listAttrs: {
    type: Object
  },
  contentAttrs: {
    type: Object
  },
  paddingPosition: {
    type: String,
    default: "content"
  }
}), a = {
  scroll: (t) => !0,
  reachBottom: (t) => !0
};
export {
  a as virtualListEmits,
  i as virtualListProps
};
