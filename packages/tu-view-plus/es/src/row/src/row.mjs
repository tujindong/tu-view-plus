import { buildProps as t } from "@tu-view-plus/utils";
const e = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
], o = ["top", "middle", "bottom"], a = t({
  /**
   * @zh 自定义元素标签
   * @en custom element tag
   * @defaultValue 'div'
   */
  tag: {
    type: String,
    default: "div"
  },
  /**
   * @zh 栅格间距
   * @en grid spacing
   * @values
   * @defaultValue 0
   */
  gutter: {
    type: Number,
    default: 0
  },
  /**
   * @zh flex 布局下的水平排列方式
   * @en horizontal alignment of flex layout
   * @values 'start', 'end', 'center', 'space-around', 'space-between'
   * @defaultValue 'start'
   */
  justify: {
    type: String,
    values: e,
    default: "start"
  },
  /**
   * @zh flex 布局下的垂直排列方式
   * @en vertical alignment of flex layout
   * @values 'top', 'middle', 'bottom'
   * @defaultValue 'top'
   */
  align: {
    type: String,
    values: o,
    default: "top"
  }
});
export {
  o as RowAlign,
  e as RowJustify,
  a as rowProps
};
