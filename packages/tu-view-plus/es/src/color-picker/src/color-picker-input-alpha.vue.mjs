import { defineComponent as r, createVNode as t } from "vue";
import { useNamespace as a } from "@tu-view-plus/hooks";
import { colorPickerInputAlphaProps as m } from "./color-picker-input-alpha.mjs";
import { TuInputNumber as l } from "../../input-number/index.mjs";
import "../style/color-picker.css";
const p = /* @__PURE__ */ r({
  name: "TuColorPickerInputAlpha",
  props: m,
  setup(e) {
    const i = a("color-picker");
    return () => t(l, {
      class: i.e("input-alpha"),
      size: "mini",
      min: 0,
      max: 100,
      "controls-position": "right",
      disabled: e.disabled,
      modelValue: Math.round(e.value * 100),
      onChange: (n = 100) => {
        var o;
        return (o = e.onChange) == null ? void 0 : o.call(e, n / 100);
      }
    }, {
      suffix: () => "%"
    });
  }
});
export {
  p as default
};
