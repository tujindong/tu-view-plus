import { buildProps as r } from "@tu-view-plus/utils";
const t = r({
  /**
   * @zh 分隔符文字
   * @en Delimiter text
   */
  separator: {
    type: [String, Number]
  },
  /**
   * @zh 下拉菜单内容
   * @en Dropdown content
   */
  droplist: {
    type: Array
  },
  /**
   * @zh 下拉菜单属性
   * @en Dropdown props
   */
  dropdownProps: {
    type: Object
  },
  // private
  index: {
    type: Number,
    default: 0
  }
});
export {
  t as breadcrumbItemProps
};
