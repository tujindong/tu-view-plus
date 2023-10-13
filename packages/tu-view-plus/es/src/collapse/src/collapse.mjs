import { buildProps as r, definePropType as p, mutable as t, isNumber as e } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as l, CHANGE_EVENT as m } from "@tu-view-plus/constants";
const s = r({
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
  }
}), E = {
  [l]: (o) => typeof e(o),
  [m]: (o) => typeof e(o)
};
export {
  E as collapseEmits,
  s as collapseProps
};
