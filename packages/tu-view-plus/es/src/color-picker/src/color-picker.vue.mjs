import { defineComponent as y, computed as u, watch as C, createVNode as l, mergeProps as S } from "vue";
import { colorPickerProps as F, colorPickerEmits as _ } from "./color-picker.mjs";
import { useNamespace as I, useState as P } from "@tu-view-plus/hooks";
import { formatInputToHSVA as N, hsvToRgb as z, rgbToHex as $, rgbaToHex as D } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import { TuTrigger as E } from "../../trigger/index.mjs";
import O from "./color-picker-panel.vue.mjs";
import "../style/color-picker.css";
import { useFormSize as R, useFormDisabled as j } from "../../form/src/hooks/use-form-props.mjs";
const W = /* @__PURE__ */ y({
  name: "TuColorPicker",
  props: F,
  emits: _,
  setup(o, {
    emit: d,
    slots: g
  }) {
    const r = I("color-picker"), h = R(), t = j(), k = u(() => o.modelValue ?? o.defaultValue), i = u(() => N(k.value || "")), [s, b] = P(i.value.a), [v, p] = P({
      h: i.value.h,
      s: i.value.s,
      v: i.value.v
    });
    C(() => i.value, (e) => {
      b(e.a), p({
        h: e.h,
        s: e.s,
        v: e.v
      });
    });
    const m = u(() => {
      const e = z(v.value.h, v.value.s, v.value.v), a = $(e.r, e.g, e.b);
      return {
        hsv: v.value,
        rgb: e,
        hex: a
      };
    }), T = u(() => {
      const {
        r: e,
        g: a,
        b: n
      } = m.value.rgb;
      return `rgba(${e}, ${a}, ${n}, ${s.value.toFixed(2)})`;
    }), c = u(() => {
      const {
        r: e,
        g: a,
        b: n
      } = m.value.rgb;
      return o.format === "rgb" ? s.value < 1 && !o.disabledAlpha ? `rgba(${e}, ${a}, ${n}, ${s.value.toFixed(2)})` : `rgb(${e}, ${a}, ${n})` : s.value < 1 && !o.disabledAlpha ? `#${D(e, a, n, s.value)}` : `#${$(e, a, n)}`;
    }), V = u(() => ({
      [r.b()]: !0,
      [r.m(h.value)]: h.value,
      [r.is("disabled")]: t.value
    }));
    C(c, (e) => {
      d("update:modelValue", e), d("change", e);
    });
    const w = (e) => {
      !t.value && p(e);
    }, A = (e) => {
      !t.value && b(e);
    }, H = (e) => {
      d("popup-visible-change", e, c.value);
    }, x = () => l("div", {
      class: V.value
    }, [l("div", {
      class: r.e("preview")
    }, [l("div", {
      class: r.e("preview-inner"),
      style: {
        backgroundColor: c.value
      }
    }, null)]), o.showText && l("div", {
      class: r.e("value")
    }, [c.value]), l("input", {
      class: r.e("input"),
      value: c.value,
      disabled: t.value
    }, null)]), f = () => l(O, {
      color: m.value,
      alpha: s.value,
      colorString: T.value,
      historyColors: o.historyColors,
      presetColors: o.presetColors,
      showHistory: o.showHistory,
      showPreset: o.showPreset,
      disabled: t.value,
      disabledAlpha: o.disabledAlpha,
      format: o.format,
      onHsvChange: w,
      onAlphaChange: A
    }, null);
    return () => o.hideTrigger ? f() : l(E, S({
      trigger: "click",
      position: "bl",
      animationName: "slide-dynamic-origin",
      popupOffset: 10,
      disabled: t.value
    }, o.triggerProps, {
      onPopupVisibleChange: H
    }), {
      default: () => [g.default ? g.default() : x()],
      content: f
    });
  }
});
export {
  W as default
};
