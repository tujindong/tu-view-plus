import { buildProps as e } from "@tu-view-plus/utils";
const r = e({
  color: {
    type: Object,
    required: !0
  },
  alpha: {
    type: Number,
    required: !0
  },
  disabled: Boolean,
  disabledAlpha: Boolean,
  onHsvChange: { type: Function },
  onAlphaChange: { type: Function }
});
export {
  r as colorPickerInputHexProps
};
