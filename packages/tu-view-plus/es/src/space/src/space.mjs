import { buildProps as t } from "@tu-view-plus/utils";
const r = t({
  /**
   * @zh 对齐方式
   * @en Alignment
   * @values 'start', 'end', 'center', 'baseline'
   */
  align: {
    type: String
  },
  /**
   * @zh 间距方向
   * @en Spacing direction
   */
  direction: {
    type: String,
    default: "horizontal"
  },
  /**
   * @zh 间距大小，支持分别制定横向和竖向的间距
   * @en Spacing size, support for setting horizontal and vertical spacing separately
   */
  size: {
    type: [Number, String, Array],
    default: "small"
  },
  /**
   * @zh 环绕类型的间距，用于折行的场景。
   * @en The spacing of the wrapping type, used in the scene of wrapping.
   */
  wrap: {
    type: Boolean
  },
  /**
   * @zh 充满整行
   * @en fill the block
   */
  fill: {
    type: Boolean
  }
});
export {
  r as spaceProps
};
