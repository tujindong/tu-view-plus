import { buildProps as o } from "@tu-view-plus/utils";
const t = o({
  /**
   * @zh 尺寸
   * @en Size
   */
  size: {
    type: Number,
    default: 14
  },
  /**
   * @zh 是否为加载中状态（仅在容器模式下生效）
   * @en Whether it is loading state (Only effective in container mode)
   */
  loading: Boolean,
  /**
   * @zh 是否使用点类型的动画
   * @en Whether to use dot type animation
   */
  dot: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 提示内容
   * @en Prompt content
   */
  tip: String
});
export {
  t as spinProps
};
