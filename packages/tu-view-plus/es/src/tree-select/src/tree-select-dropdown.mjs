import { buildProps as e } from "@tu-view-plus/utils";
const o = e({
  treeProps: {
    type: Object,
    default: () => ({})
  },
  selectedKeys: {
    type: Array
  },
  showCheckable: {
    type: Boolean,
    default: !1
  },
  treeSlots: {
    type: Object,
    default: () => ({})
  },
  scrollbar: {
    type: [Boolean, Object],
    default: !0
  }
}), r = ["change"];
export {
  r as treeSelectDropdownEmits,
  o as treeSelectDropdownProps
};
