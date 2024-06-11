import { buildProps as r } from "@tu-view-plus/utils";
const o = r({
  x: {
    type: Number,
    required: !0
  },
  color: {
    type: Object,
    required: !0
  },
  colorString: String,
  type: {
    type: String
  },
  onChange: { type: Function }
});
export {
  o as colorPickerControlBarProps
};
