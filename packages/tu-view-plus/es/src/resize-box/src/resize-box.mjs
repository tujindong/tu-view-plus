import { buildProps as e } from "@tu-view-plus/utils";
const o = e({
  /**
   * @zh 宽度
   * @en Width
   * @vModel
   */
  width: {
    type: Number
  },
  /**
   * @zh 高度
   * @en Height
   * @vModel
   */
  height: {
    type: Number
  },
  /**
   * @zh 伸缩框的 html 标签
   * @en The html tag of the telescopic box
   */
  component: {
    type: String,
    default: "div"
  },
  /**
   * @zh 可以进行伸缩的边，有上、下、左、右可以使用
   * @en Can be stretched side, there are up, down, left and right can be used
   * */
  directions: {
    type: Array,
    default: () => ["right"]
  }
}), u = {
  "update:width": (t) => !0,
  "update:height": (t) => !0,
  /**
   * @zh 拖拽开始时触发
   * @en Triggered when dragging starts
   * @param {MouseEvent} ev
   */
  movingStart: (t) => !0,
  /**
   * @zh 拖拽时触发
   * @en Triggered when dragging
   * @param {{ width: number; height: number; }} size
   * @param {MouseEvent} ev
   */
  moving: (t, i) => !0,
  /**
   * @zh 拖拽结束时触发
   * @en Triggered when the drag ends
   * @param {MouseEvent} ev
   */
  movingEnd: (t) => !0
};
export {
  u as resizeBoxEmits,
  o as resizeBoxProps
};
