import { buildProps as r } from "@tu-view-plus/utils";
const t = r({
  marks: {
    type: Array,
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
  t as sliderMarksProps
};
