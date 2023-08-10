import { buildProps as t } from "@tu-view-plus/utils";
const i = t({
  direction: {
    type: String,
    default: "horizontal"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  min: {
    type: Number,
    required: !0
  },
  max: {
    type: Number,
    required: !0
  },
  formatTooltip: {
    type: Function
  },
  value: {
    type: [String, Number]
  },
  tooltipPosition: {
    type: String
  },
  showTooltip: {
    type: Boolean,
    default: !0
  }
}), u = {
  movestart: () => !0,
  moving: (e, o) => !0,
  moveend: () => !0
};
export {
  u as sliderButtonEmits,
  i as sliderButtonProps
};
