import { buildProps as e } from "@tu-view-plus/utils";
const o = e({
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
  }
});
export {
  o as pickerDropdownProps
};
