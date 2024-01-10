import { buildProps as e } from "@tu-view-plus/utils";
const r = e({
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
  }
}), a = ["select", "cell-mouse-enter"];
export {
  a as quarterEmits,
  r as quarterProps
};
