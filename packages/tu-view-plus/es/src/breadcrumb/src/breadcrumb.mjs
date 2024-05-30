import { buildProps as r } from "@tu-view-plus/utils";
const e = r({
  /**
   * @zh 最多展示的面包屑数量（0表示不限制）
   * @en Maximum number of breadcrumbs displayed (0 means no limit)
   */
  maxCount: {
    type: Number,
    default: 0
  },
  /**
   * @zh 设置路径
   * @en Set routes
   */
  routes: {
    type: Array
  },
  /**
   * @zh 分隔符文字
   * @en Delimiter text
   */
  separator: {
    type: [String, Number],
    default: "/"
  },
  /**
   * @zh 自定义链接地址
   * @en Custom link address
   */
  customUrl: {
    type: Function
  }
});
export {
  e as breadcrumbProps
};
