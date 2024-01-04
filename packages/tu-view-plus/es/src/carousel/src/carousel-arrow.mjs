import { buildProps as r } from "@tu-view-plus/utils";
const e = r({
  direction: {
    type: String,
    default: "horizontal"
  },
  showArrow: {
    type: String,
    default: "always"
  }
}), s = {
  previousClick: (o) => o instanceof MouseEvent,
  nextClick: (o) => o instanceof MouseEvent
};
export {
  s as carouselArrowEmits,
  e as carouselArrowProps
};
