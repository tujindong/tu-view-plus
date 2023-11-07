import { buildProps as o } from "@tu-view-plus/utils";
const t = o({
  /**
   * @zh 是否展示骨架屏
   * @en Whether to display a skeleton screen
   */
  loading: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 是否开启骨架屏动画
   * @en Whether to enable skeleton screen animation
   */
  animation: {
    type: Boolean,
    default: !1
  }
});
export {
  t as skeletonProps
};
