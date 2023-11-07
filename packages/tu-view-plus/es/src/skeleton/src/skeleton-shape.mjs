import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
const t = e({
  /**
   * @zh 图形骨架的形状
   * @en The shape of the graph skeleton
   */
  shape: {
    type: String,
    default: "square"
  },
  /**
   * @zh 图形骨架的大小
   * @en The size of the graph's skeleton
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...o, default: "medium" }
});
export {
  t as skeletonShapeProps
};
