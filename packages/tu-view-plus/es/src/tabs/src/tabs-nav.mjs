import { buildProps as r } from "@tu-view-plus/utils";
const a = r({
  tabs: {
    type: Array,
    required: !0
  },
  direction: {
    type: String,
    required: !0
  },
  type: {
    type: String,
    required: !0
  },
  activeKey: {
    type: [String, Number]
  },
  activeIndex: {
    type: Number,
    required: !0
  },
  position: {
    type: String,
    required: !0
  },
  showAddButton: {
    type: Boolean,
    default: !1
  },
  editable: {
    type: Boolean,
    default: !1
  },
  animation: {
    type: Boolean,
    required: !0
  },
  headerPadding: {
    type: Boolean,
    default: !0
  }
}), u = {
  click: (e, t) => !0,
  add: (e) => !0,
  delete: (e, t) => !0
};
export {
  u as tabsNavEmits,
  a as tabsNavProps
};
