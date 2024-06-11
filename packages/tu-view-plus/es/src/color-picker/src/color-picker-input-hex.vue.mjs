import { defineComponent as d, toRefs as f, watch as g, createVNode as i } from "vue";
import { useNamespace as x, useState as b } from "@tu-view-plus/hooks";
import { colorPickerInputHexProps as p } from "./color-picker-input-hex.mjs";
import { hexToRgb as v, rgbToHsv as C } from "@tu-view-plus/utils";
import { TuInput as P } from "../../input/index.mjs";
import H from "./color-picker-input-alpha.vue.mjs";
import "../style/color-picker.css";
const N = /* @__PURE__ */ d({
  name: "TuColorPickerInputHex",
  props: p,
  setup(t) {
    const {
      color: o
    } = f(t), l = x("color-picker"), [r, s] = b(o.value.hex), c = (a) => {
      var h;
      const e = v(a) || {
        r: 255,
        g: 0,
        b: 0
      }, n = C(e.r, e.g, e.b);
      (h = t.onHsvChange) == null || h.call(t, n);
    }, u = (a) => {
      var n;
      const e = ((n = a.match(/[a-fA-F0-9]*/g)) == null ? void 0 : n.join("")) ?? "";
      e !== o.value.hex && c(e.toUpperCase());
    }, m = (a) => {
      if (!a.clipboardData)
        return;
      let e = a.clipboardData.getData("Text");
      e.startsWith("#") && (e = e.slice(1)), u(e), a.preventDefault();
    };
    return g(o, () => {
      o.value.hex !== r.value && s(o.value.hex);
    }), () => i("div", {
      class: l.e("input-group")
    }, [i(P, {
      class: l.e("input-hex"),
      size: "mini",
      disabled: t.disabled,
      modelValue: r.value,
      onInput: s,
      onChange: u,
      onBlur: () => c,
      onPaste: m
    }, {
      prefix: () => "#"
    }), !t.disabledAlpha && i(H, {
      disabled: t.disabled,
      value: t.alpha,
      onChange: t.onAlphaChange
    }, null)]);
  }
});
export {
  N as default
};
