import { buildProps as o, definePropType as r } from "@tu-view-plus/utils";
const p = o({
  /**
   * @zh 图标的尺寸
   * @en size
   */
  size: {
    type: r([Number, String])
  },
  /**
   * @zh 图标的颜色
   * @en color
   */
  color: {
    type: String
  }
});
export {
  p as iconProps
};
