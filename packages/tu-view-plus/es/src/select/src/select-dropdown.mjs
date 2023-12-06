import { buildProps as o } from "@tu-view-plus/utils";
const e = o({
  loading: Boolean,
  empty: Boolean,
  virtualList: Boolean,
  bottomOffset: {
    type: Number,
    default: 0
  },
  scrollbar: {
    type: [Boolean, Object],
    default: !0
  },
  onScroll: {
    type: [Function, Array]
  },
  onReachBottom: {
    type: [Function, Array]
  },
  showHeaderOnEmpty: {
    type: Boolean,
    default: !1
  },
  showFooterOnEmpty: {
    type: Boolean,
    default: !1
  }
}), l = ["scroll", "reachBottom"];
export {
  l as selectDropDownEmits,
  e as selectDropDownProps
};
