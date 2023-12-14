import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as r } from "@tu-view-plus/hooks";
const p = e({
  value: {
    type: Array
  },
  displayIndex: {
    type: Number,
    default: 0
  },
  size: r
}), t = [
  "select",
  "confirm",
  "update:displayIndex",
  "display-index-change"
];
export {
  t as timePickerRangeDropdownEmits,
  p as timePickerRangeDropdownProps
};
