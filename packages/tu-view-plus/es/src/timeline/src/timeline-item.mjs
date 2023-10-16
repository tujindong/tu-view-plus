import { buildProps as t } from "@tu-view-plus/utils";
const i = t({
  /**
   * @zh 节点颜色
   * @en Dot color
   */
  dotColor: {
    type: String
  },
  /**
   * @zh 节点类型：空心圆/实心圆
   * @en Dot type
   * @values 'hollow', 'solid'
   * @defaultValue 'solid'
   */
  dotType: {
    type: String,
    default: "solid"
  },
  /**
   * @zh 时间轴类型：实线/虚线/点状线
   * @en Line type
   * @values 'solid', 'dashed', 'dotted'
   * @defaultValue 'solid
   */
  lineType: {
    type: String,
    default: "solid"
  },
  /**
   * @zh 时间轴颜色
   * @en Line Color
   */
  lineColor: {
    type: String
  },
  /**
   * @zh 标签文本
   * @en Label text
   */
  label: {
    type: String
  },
  /**
   * @zh Item 位置
   * @en Item position
   * @values 'left', 'right', 'top', 'bottom'
   */
  position: {
    type: String
  }
});
export {
  i as timelineItemProps
};
