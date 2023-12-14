import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
const r = e({
  size: t,
  focused: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  error: {
    type: Boolean,
    default: !1
  },
  allowClear: {
    type: Boolean,
    default: !1
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
}), a = ["clear", "press-enter", "change", "blur"];
export {
  a as pickerEmits,
  r as pickerProps
};
