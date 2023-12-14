import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as r } from "@tu-view-plus/hooks";
const t = e({
  size: r,
  focused: {
    type: Boolean
  },
  focusedIndex: {
    type: Number
  },
  disabled: {
    type: [Boolean, Array],
    default: !1
  },
  readonly: {
    type: Boolean
  },
  allowClear: {
    type: Boolean
  },
  placeholder: {
    type: Array,
    default: () => []
  },
  inputValue: {
    type: Array
  },
  value: {
    type: Array,
    default: () => []
  },
  format: {
    type: [String, Function],
    required: !0
  }
}), l = [
  "focused-index-change",
  "update:focusedIndex",
  "change",
  "clear",
  "press-enter"
];
export {
  l as rangePickerEmits,
  t as rangePickerProps
};
