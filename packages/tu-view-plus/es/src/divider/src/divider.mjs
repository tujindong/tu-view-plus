import { buildProps as t } from "@tu-view-plus/utils";
const r = t({
  /**
   * @zh 分割线的方向，是水平还是竖直
   * @en The direction of the dividing line. Can be horizontal or vertical
   * @values 'horizontal','vertical'
   */
  direction: {
    type: String,
    default: "horizontal"
  },
  /**
   * @zh 分割线文字的位置
   * @en The position of the dividing line text
   */
  orientation: {
    type: String,
    default: "center"
  },
  /**
   * @zh 分割线样式类型
   * @en Dividing line style type
   */
  type: {
    type: String
  },
  /**
   * @zh 分割线宽度/高度
   * @en The wide/height of the dividing line
   */
  size: {
    type: Number
  },
  /**
   * @zh 分割线上下 margin (垂直方向时为左右 margin)
   * @en Margin up and down the split line (left and right margin in vertical direction)
   */
  margin: {
    type: [Number, String]
  }
});
export {
  r as dividerProps
};
