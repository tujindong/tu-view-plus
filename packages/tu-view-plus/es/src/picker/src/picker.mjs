import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
const p = e({
  size: o,
  focused: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  readonly: {
    type: Boolean
  },
  error: {
    type: Boolean
  },
  allowClear: {
    type: Boolean
  },
  placeholder: {
    type: String
  },
  inputValue: {
    type: String
  },
  value: {
    type: Object
  },
  format: {
    type: [String, Function],
    required: !0
  }
}), l = ["clear", "press-enter", "change", "blur"];
export {
  l as pickerEmits,
  p as pickerProps
};
