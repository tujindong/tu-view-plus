import { buildProps as r } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
const u = r({
  modelValue: {
    type: Array,
    required: !0
  },
  size: {
    ...t
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  },
  step: {
    type: Number
  },
  disabled: {
    type: Boolean
  },
  range: {
    type: Boolean
  }
}), a = {
  startChange: (e) => !0,
  endChange: (e) => !0
};
export {
  a as sliderInputEmits,
  u as sliderInputProps
};
