import { buildProps as r, isNumber as i, isBoolean as o } from "@tu-view-plus/utils";
import { CHANGE_EVENT as f } from "@tu-view-plus/constants";
const a = r({
  /**
   * @en affix element zIndex value
   * */
  zIndex: {
    type: [Number, String],
    default: 100
  },
  /**
   * @en target container. (CSS selector)
   */
  target: {
    type: String,
    default: ""
  },
  /**
   * @en offset distance
   * */
  offset: {
    type: Number,
    default: 0
  },
  /**
   * @en position of affix
   * */
  position: {
    type: String,
    values: ["top", "bottom"],
    default: "top"
  }
}), l = {
  scroll: ({ scrollTop: t, fixed: e }) => i(t) && o(e),
  [f]: (t) => o(t)
};
export {
  l as affixEmits,
  a as affixProps
};
