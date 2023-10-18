import { buildProps as r, definePropType as t, mutable as p, isNumber as o } from "@tu-view-plus/utils";
import { useSizeProp as l } from "@tu-view-plus/hooks";
import { UPDATE_MODEL_EVENT as i, CHANGE_EVENT as m } from "@tu-view-plus/constants";
import { collapseEffects as f } from "./constants.mjs";
const E = r({
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
    type: t([Array, String, Number]),
    default: () => p([])
  },
  /**
   * @zh 折叠面板的主题
   * @en effect of Collapse
   */
  effect: {
    type: String,
    values: f,
    default: "line"
  },
  /**
   * @zh 折叠面板的尺寸
   * @en size of Collapse
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...l, default: "medium" }
}), d = {
  [i]: (e) => typeof o(e),
  [m]: (e) => typeof o(e)
};
export {
  d as collapseEmits,
  E as collapseProps
};
