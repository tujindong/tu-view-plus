import { buildProps as e } from "@tu-view-plus/utils";
const t = e({
  value: {
    type: Array,
    required: !0
  },
  step: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  max: {
    type: Number,
    required: !0
  },
  direction: {
    type: String,
    default: "horizontal"
  }
});
export {
  t as sliderTicksProps
};
