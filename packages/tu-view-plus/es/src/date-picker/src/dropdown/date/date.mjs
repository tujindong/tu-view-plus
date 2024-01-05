import { buildProps as e } from "@tu-view-plus/utils";
const a = e({
  isRange: {
    type: Boolean,
    default: !1
  },
  value: {
    type: Object
  },
  rangeValues: {
    type: Array
  },
  headerValue: {
    type: Object,
    required: !0
  },
  footerValue: {
    type: Object
  },
  timePickerValue: {
    type: Object
  },
  headerOperations: {
    type: Object,
    default: () => ({})
  },
  headerIcons: {
    type: Object,
    default: () => ({})
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
  isSameTime: {
    type: Function
  },
  mode: {
    type: String,
    default: "date"
  },
  showTime: {
    type: Boolean,
    default: !1
  },
  timePickerProps: {
    type: Object
  },
  currentView: {
    type: String
  },
  dateRender: {
    type: Function
  },
  disabled: {
    type: Boolean
  },
  onHeaderLabelClick: {
    type: Function
  }
}), r = [
  "select",
  "time-picker-select",
  "cell-mouse-enter",
  "current-view-change",
  "update:currentView"
];
export {
  r as dateEmits,
  a as dateProps
};
