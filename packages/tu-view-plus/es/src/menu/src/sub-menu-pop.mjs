import { buildProps as e } from "@tu-view-plus/utils";
const t = e({
  title: {
    type: String
  },
  selectable: {
    type: Boolean,
    default: !1
  },
  isChildrenSelected: {
    type: Boolean
  },
  popupMaxHeight: {
    type: [Boolean, Number],
    default: void 0
  }
});
export {
  t as subMenuPopProps
};
