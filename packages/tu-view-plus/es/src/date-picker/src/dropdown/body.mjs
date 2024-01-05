import { buildProps as e } from "@tu-view-plus/utils";
const r = e({
  rows: {
    type: Array,
    default: () => []
  },
  value: {
    type: Object
  },
  disabledDate: {
    type: Function
  },
  isSameTime: {
    type: Function,
    required: !0
  },
  mode: {
    type: String
  },
  rangeValues: {
    type: Array
  },
  dateRender: {
    type: Function
  }
}), o = ["cell-click", "cell-mouse-enter"];
export {
  o as bodyEmits,
  r as bodyProps
};
