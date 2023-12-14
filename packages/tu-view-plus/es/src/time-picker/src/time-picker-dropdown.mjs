import { buildProps as o, isDayjs as t } from "@tu-view-plus/utils";
import { useSizeProp as s } from "@tu-view-plus/hooks";
const l = o({
  value: {
    type: Object
  },
  visible: {
    type: Boolean,
    default: !1
  },
  format: {
    type: String,
    default: "HH:mm:ss"
  },
  use12Hours: {
    type: Boolean
  },
  step: {
    type: Object
  },
  disabledHours: {
    type: Function
  },
  disabledMinutes: {
    type: Function
  },
  disabledSeconds: {
    type: Function
  },
  hideDisabledOptions: {
    type: Boolean,
    default: !1
  },
  hideFooter: {
    type: Boolean,
    default: !1
  },
  isRange: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  size: s
}), n = {
  select: (e) => t(e),
  confirm: (e) => t(e)
};
export {
  n as timePickerDropdownEmits,
  l as timePickerDropdownProps
};
