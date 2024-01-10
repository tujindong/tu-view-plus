import { buildProps as e } from "@tu-view-plus/utils";
const r = e({
  mode: {
    type: String,
    default: "date"
  },
  value: {
    type: Array,
    default: () => []
  },
  // footerValue: {
  //   type: Array as PropType<Array<Dayjs | undefined>>
  // },
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
  }
});
export {
  r as rangePickerDropdownProps
};
