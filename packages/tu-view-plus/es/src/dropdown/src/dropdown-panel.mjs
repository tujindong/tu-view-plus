import { buildProps as t, isNumber as r } from "@tu-view-plus/utils";
const n = t({
  loading: {
    type: Boolean,
    default: !1
  },
  isEmpty: {
    type: Boolean,
    default: !1
  },
  bottomOffset: {
    type: Number,
    default: 0
  },
  onScroll: {
    type: [Function, Array]
  },
  onReachBottom: {
    type: [Function, Array]
  }
}), a = {
  scroll: ({
    scrollTop: o,
    scrollLeft: e
  }) => [o, e].every(r)
};
export {
  a as dropdownPanelEmits,
  n as dropdownPanelProps
};
