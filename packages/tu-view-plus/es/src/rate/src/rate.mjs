import { buildProps as d, definePropType as o, mutable as l, iconPropType as r, isNumber as a } from "@tu-view-plus/utils";
import { CHANGE_EVENT as i, UPDATE_MODEL_EVENT as p } from "@tu-view-plus/constants";
import { StarFilled as e, Star as u } from "@tu-view-plus/icons-vue";
import { useSizeProp as f } from "@tu-view-plus/hooks";
const b = d({
  /**
   * @description binding value
   */
  modelValue: {
    type: Number,
    default: 0
  },
  /**
   * @description native `id` attribute
   */
  id: {
    type: String,
    default: void 0
  },
  /**
   * @description threshold value between low and medium level. The value itself will be included in low level
   */
  lowThreshold: {
    type: Number,
    default: 2
  },
  /**
   * @description threshold value between medium and high level. The value itself will be included in high level
   */
  highThreshold: {
    type: Number,
    default: 4
  },
  /**
   * @description max rating score
   */
  max: {
    type: Number,
    default: 5
  },
  /**
   * @description colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color
   */
  colors: {
    type: o([Array, Object]),
    default: () => l(["", "", ""])
  },
  /**
   * @description color of unselected icons
   */
  voidColor: {
    type: String,
    default: ""
  },
  /**
   * @description color of unselected read-only icons
   */
  disabledVoidColor: {
    type: String,
    default: ""
  },
  /**
   * @description icon components. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component
   */
  icons: {
    type: o([Array, Object]),
    default: () => [e, e, e]
  },
  /**
   * @description component of unselected icons
   */
  voidIcon: {
    type: r,
    default: () => u
  },
  /**
   * @description component of unselected read-only icons
   */
  disabledVoidIcon: {
    type: r,
    default: () => e
  },
  /**
   * @description whether Rate is read-only
   */
  disabled: Boolean,
  /**
   * @description whether picking half start is allowed
   */
  allowHalf: Boolean,
  /**
   * @description whether to display texts
   */
  showText: Boolean,
  /**
   * @description whether to display current score. show-score and show-text cannot be true at the same time
   */
  showScore: Boolean,
  /**
   * @description color of texts
   */
  textColor: {
    type: String,
    default: ""
  },
  /**
   * @description text array
   */
  texts: {
    type: o(Array),
    default: () => l([
      "Extremely bad",
      "Disappointed",
      "Fair",
      "Satisfied",
      "Surprise"
    ])
  },
  /**
   * @description score template
   */
  scoreTemplate: {
    type: String,
    default: "{value}"
  },
  /**
   * @description size of Rate
   */
  size: { ...f, default: "medium" },
  /**
   * @description same as `aria-label` in Rate
   */
  label: {
    type: String,
    default: void 0
  },
  /**
   * @description whether value can be reset to `0`
   */
  clearable: {
    type: Boolean,
    default: !1
  }
}), c = {
  [i]: (t) => a(t),
  [p]: (t) => a(t)
};
export {
  c as rateEmits,
  b as rateProps
};
