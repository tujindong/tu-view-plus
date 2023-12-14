import { buildProps as e } from "@tu-view-plus/utils";
const t = e({
  list: {
    type: Array,
    required: !0
  },
  value: {
    type: [Number, String]
  },
  visible: {
    type: Boolean
  }
}), i = ["select"];
export {
  i as timePickerColumnEmits,
  t as timePickerColumnProps
};
