import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
const l = e({
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
  },
  size: t
}), p = ["change"];
export {
  p as treeSelectDropdownEmits,
  l as treeSelectDropdownProps
};
