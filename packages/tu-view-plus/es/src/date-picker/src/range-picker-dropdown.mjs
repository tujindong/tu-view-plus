import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
const a = e({
  mode: {
    type: String,
    default: "date"
  },
  value: {
    type: Array,
    default: () => []
  },
  footerValue: {
    type: Array
  },
  timePickerValue: {
    type: Array
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
  startHeaderProps: {
    type: Object,
    default: () => ({})
  },
  endHeaderProps: {
    type: Object,
    default: () => ({})
  },
  confirmBtnDisabled: {
    type: Boolean
  },
  disabled: {
    type: Array,
    default: () => [!1, !1]
  },
  visible: {
    type: Boolean
  },
  startHeaderMode: {
    type: String
  },
  endHeaderMode: {
    type: String
  },
  abbreviation: {
    type: Boolean
  },
  size: t
}), i = [
  "cell-click",
  "cell-mouse-enter",
  "time-picker-select",
  "shortcut-click",
  "shortcut-mouse-enter",
  "shortcut-mouse-leave",
  "confirm",
  "start-header-label-click",
  "end-header-label-click",
  "start-header-select",
  "end-header-select"
];
export {
  i as rangePickerDropdownEmits,
  a as rangePickerDropdownProps
};
