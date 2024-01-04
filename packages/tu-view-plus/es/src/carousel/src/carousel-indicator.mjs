import { buildProps as o } from "@tu-view-plus/utils";
const i = o({
  count: {
    type: Number,
    default: 2
  },
  activeIndex: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: "line"
  },
  position: {
    type: String,
    default: "bottom"
  },
  trigger: {
    type: String,
    default: "click"
  }
}), c = {
  select: (t, e) => e !== t
};
export {
  c as carouselIndicatorEmits,
  i as carouselIndicatorProps
};
