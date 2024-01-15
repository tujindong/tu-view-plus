import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
const i = e({
  mode: {
    type: String
  },
  headerMode: {
    type: String
  },
  value: {
    type: Object
  },
  headerValue: {
    type: Object,
    required: !0
  },
  timePickerValue: {
    type: Object
  },
  showTime: {
    type: Boolean
  },
  showConfirmBtn: {
    type: Boolean
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  shortcutsPosition: {
    type: String,
    default: "bottom"
  },
  format: {
    type: String,
    required: !0
  },
  dayStartOfWeek: {
    type: Number,
    default: 0
  },
  disabledDate: {
    type: Function
  },
  disabledTime: {
    type: Function
  },
  timePickerProps: {
    type: Object
  },
  extra: {
    type: Function
  },
  dateRender: {
    type: Function
  },
  hideTrigger: {
    type: Boolean
  },
  confirmBtnDisabled: {
    type: Boolean
  },
  showNowBtn: {
    type: Boolean
  },
  headerIcons: {
    type: Object,
    default: () => ({})
  },
  headerOperations: {
    type: Object
  },
  abbreviation: {
    type: Boolean
  },
  size: t
}), c = [
  "cell-click",
  "time-picker-select",
  "shortcut-click",
  "shortcut-mouse-enter",
  "shortcut-mouse-leave",
  "confirm",
  "today-btn-click",
  "header-label-click",
  "header-select",
  "month-header-click"
];
export {
  c as pickerDropdownEmits,
  i as pickerDropdownProps
};
