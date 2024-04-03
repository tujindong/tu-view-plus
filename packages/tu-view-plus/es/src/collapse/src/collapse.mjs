import { buildProps as t, definePropType as r, mutable as p, isNumber as o } from "@tu-view-plus/utils";
import { useSizeProp as l } from "@tu-view-plus/hooks";
import { UPDATE_MODEL_EVENT as m, CHANGE_EVENT as f } from "@tu-view-plus/constants";
import { collapseEffects as i } from "./constants.mjs";
const E = t({
  /**
   * @zh 是否手风琴模式
   * @en whether to activate accordion mode
   */
  accordion: Boolean,
  /**
   * @zh 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)
   * @en currently active panel
   */
  modelValue: {
    type: r([Array, String, Number]),
    default: () => p([])
  },
  /**
   * @zh 折叠面板的主题
   * @en effect of Collapse
   */
  effect: {
    type: String,
    values: i,
    default: "outset"
  },
  /**
   * @zh 折叠面板的尺寸
   * @en size of Collapse
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...l, default: "medium" }
}), d = {
  [m]: (e) => typeof o(e),
  [f]: (e) => typeof o(e)
};
export {
  d as collapseEmits,
  E as collapseProps
};
