import { defineComponent as s, toRefs as u, createVNode as a } from "vue";
import { useNamespace as c } from "@tu-view-plus/hooks";
import { rgbToHsv as d } from "@tu-view-plus/utils";
import { colorPickerInputRgbProps as g } from "./color-picker-input-rgb.mjs";
import { TuInputNumber as b } from "../../input-number/index.mjs";
import f from "./color-picker-input-alpha.vue.mjs";
import "../style/color-picker.css";
const I = /* @__PURE__ */ s({
  name: "TuColorPickerInputRgb",
  props: g,
  setup(e, {
    slots: h
  }) {
    const {
      color: i
    } = u(e), r = c("color-picker"), l = (o) => {
      var t;
      const n = {
        ...i.value.rgb,
        ...o
      }, m = d(n.r, n.g, n.b);
      (t = e.onHsvChange) == null || t.call(e, m);
    };
    return () => a("div", {
      class: r.e("input-group")
    }, [["r", "g", "b"].map((o) => a(b, {
      key: o,
      size: "mini",
      min: 0,
      max: 255,
      "controls-position": "right",
      disabled: e.disabled,
      modelValue: i.value.rgb[o],
      onChange: (n = 0) => l({
        [o]: n
      })
    }, null)), !e.disabledAlpha && a(f, {
      disabled: e.disabled,
      value: e.alpha,
      onChange: e.onAlphaChange
    }, null)]);
  }
});
export {
  I as default
};
