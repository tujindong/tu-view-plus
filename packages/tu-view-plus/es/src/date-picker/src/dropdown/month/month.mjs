import { buildProps as e } from "@tu-view-plus/utils";
const a = e({
  headerValue: {
    type: Object,
    required: !0
  },
  headerOperations: {
    type: Object,
    default: () => ({})
  },
  headerIcons: {
    type: Object,
    default: () => ({})
  },
  value: {
    type: Object
  },
  disabledDate: {
    type: Function
  },
  rangeValues: {
    type: Array
  },
  dateRender: {
    type: Function
  },
  onHeaderLabelClick: {
    type: Function
  },
  abbreviation: {
    type: Boolean,
    default: !0
  }
}), r = ["select", "cell-mouse-enter"];
export {
  r as monthEmits,
  a as monthProps
};
