import { buildProps as e } from "@tu-view-plus/utils";
const a = e({
  isRange: {
    type: Boolean
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
    type: Boolean
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
});
export {
  a as dateProps
};
