import { defineComponent as k, computed as P, ref as y, createVNode as l } from "vue";
import { colorPickerPanelProps as _ } from "./color-picker-panel.mjs";
import { useLocale as H, useNamespace as w, useState as x } from "@tu-view-plus/hooks";
import { hexToRgb as S, rgbToHsv as A } from "@tu-view-plus/utils";
import T from "./color-picker-palette.vue.mjs";
import h from "./color-picker-control-bar.vue.mjs";
import { TuSelect as $ } from "../../select/index.mjs";
import B from "./color-picker-input-rgb.vue.mjs";
import I from "./color-picker-input-hex.vue.mjs";
import "../style/color-picker.css";
const D = /* @__PURE__ */ k({
  name: "TuColorPickerPanel",
  props: _,
  setup(e) {
    const {
      t: c
    } = H(), n = w("color-picker"), t = P(() => e.color.hsv), s = y(t.value.h), [i, m] = x(e.format || "hex"), v = (o) => m(o), g = (o) => {
      var d;
      const a = S(o) || {
        r: 255,
        g: 0,
        b: 0
      }, r = A(a.r, a.g, a.b);
      (d = e.onHsvChange) == null || d.call(e, r);
    }, C = () => {
      const o = {
        color: e.color,
        alpha: e.alpha,
        disabled: e.disabled,
        disabledAlpha: e.disabledAlpha,
        onHsvChange: e.onHsvChange,
        onAlphaChange: e.onAlphaChange
      };
      return i.value === "rgb" ? l(B, o, null) : l(I, o, null);
    }, b = (o) => l("div", {
      key: o,
      class: n.e("color-block"),
      style: {
        backgroundColor: o
      },
      onClick: () => g(o)
    }, [l("div", {
      class: n.e("block"),
      style: {
        backgroundColor: o
      }
    }, null)]), u = (o, a) => l("div", {
      class: n.e("colors-section")
    }, [l("div", {
      class: n.e("colors-text")
    }, [o]), l("div", {
      class: n.e("colors-wrapper")
    }, [a != null && a.length ? l("div", {
      class: n.e("colors-list")
    }, [a.map(b)]) : l("span", {
      class: n.e("colors-empty")
    }, [c("tu.colorPicker.empty")])])]), f = () => e.showHistory || e.showPreset ? l("div", {
      class: n.e("panel-colors")
    }, [e.showHistory && u(c("tu.colorPicker.history"), e.historyColors), e.showPreset && u(c("tu.colorPicker.preset"), e.presetColors)]) : null;
    return () => l("div", {
      class: {
        [n.e("panel")]: !0,
        [n.is("disabled")]: e.disabled
      }
    }, [l(T, {
      color: e.color,
      disabled: e.disabled,
      onChange: (o, a) => {
        var r;
        return (r = e.onHsvChange) == null ? void 0 : r.call(e, {
          h: t.value.h,
          s: o,
          v: a
        });
      }
    }, null), l("div", {
      class: n.e("panel-control")
    }, [l("div", {
      class: n.e("control-wrapper")
    }, [l("div", null, [l(h, {
      type: "hue",
      x: s.value,
      color: e.color,
      colorString: e.colorString,
      onChange: (o) => {
        var a;
        s.value = o, (a = e.onHsvChange) == null || a.call(e, {
          h: o,
          s: t.value.s,
          v: t.value.v
        });
      }
    }, null), !e.disabledAlpha && l(h, {
      type: "alpha",
      x: e.alpha,
      color: e.color,
      colorString: e.colorString,
      onChange: e.onAlphaChange
    }, null)]), l("div", {
      class: n.e("cotrol-preview")
    }, [l("div", {
      class: n.e("control-preview-inner"),
      style: {
        backgroundColor: e.colorString
      }
    }, null)])]), l("div", {
      class: n.e("input-wrapper")
    }, [l($, {
      class: n.e("select"),
      size: "mini",
      "trigger-props": {
        class: n.e("select-popup")
      },
      options: [{
        value: "hex",
        label: "Hex"
      }, {
        value: "rgb",
        label: "RGB"
      }],
      modelValue: i.value,
      onChange: v
    }, null), C()])]), f()]);
  }
});
export {
  D as default
};
