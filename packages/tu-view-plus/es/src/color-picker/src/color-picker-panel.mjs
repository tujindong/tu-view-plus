import { buildProps as o } from "@tu-view-plus/utils";
const t = o({
  color: {
    type: Object,
    required: !0
  },
  alpha: {
    type: Number,
    required: !0
  },
  colorString: String,
  disabled: Boolean,
  disabledAlpha: Boolean,
  showHistory: Boolean,
  showPreset: Boolean,
  format: {
    type: String,
    validator: (e) => ["hex", "rgb"].includes(e)
  },
  historyColors: {
    type: Array,
    default: () => []
  },
  presetColors: {
    type: Array,
    default: () => []
  },
  onAlphaChange: {
    type: Function
  },
  onHsvChange: {
    type: Function
  }
});
export {
  t as colorPickerPanelProps
};
