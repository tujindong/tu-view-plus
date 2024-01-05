import { buildProps as e } from "@tu-view-plus/utils";
const n = e({
  title: {
    type: String,
    required: !0
  },
  mode: {
    type: String,
    default: "date"
  },
  value: {
    type: Object
  },
  icons: {
    type: Object
  },
  onPrev: {
    type: Function
  },
  onSuperPrev: {
    type: Function
  },
  onNext: {
    type: Function
  },
  onSuperNext: {
    type: Function
  },
  onLabelClick: {
    type: Function
  }
});
export {
  n as headerProps
};
