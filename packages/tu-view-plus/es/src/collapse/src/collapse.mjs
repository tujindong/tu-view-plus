import { buildProps as r, definePropType as p, mutable as t, isNumber as o } from "@tu-view-plus/utils";
import { useSizeProp as l } from "@tu-view-plus/hooks";
import { UPDATE_MODEL_EVENT as i, CHANGE_EVENT as m } from "@tu-view-plus/constants";
import { collapseTypes as s } from "./constants.mjs";
const n = r({
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
    type: p([Array, String, Number]),
    default: () => t([])
  },
  /**
   * @zh 折叠面板类型
   * @en type of Collapse
   */
  type: {
    type: String,
    values: s,
    default: "line"
  },
  /**
   * @zh 折叠面板的尺寸
   * @en size of Collapse
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...l, default: "medium" }
}), y = {
  [i]: (e) => typeof o(e),
  [m]: (e) => typeof o(e)
};
export {
  y as collapseEmits,
  n as collapseProps
};
