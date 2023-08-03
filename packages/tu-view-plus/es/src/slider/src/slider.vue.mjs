import { defineComponent as h, reactive as B, computed as t, openBlock as M, createElementBlock as $, normalizeClass as m, unref as r, createElementVNode as S, normalizeStyle as I } from "vue";
import { sliderProps as k } from "./slider.mjs";
import { useSlider as E } from "./use-slider.mjs";
import { useNamespace as N, useLocale as P } from "@tu-view-plus/hooks";
import "../../form/index.mjs";
import "../style/slider.css";
import { useFormItem as W, useFormItemInputId as j } from "../../form/src/hooks/use-form-item.mjs";
import { useFormSize as q, useFormDisabled as A } from "../../form/src/hooks/use-form-props.mjs";
const G = ["id", "role", "aria-label", "aria-labelledby"], H = h({
  name: "TuSlider"
}), Z = /* @__PURE__ */ h({
  ...H,
  props: k,
  setup(V) {
    const e = V, a = N("slider"), { t: w } = P(), { formItem: d } = W(), { inputId: y, isLabeledByFormItem: p } = j(e, {
      formItemContext: d
    }), s = B({
      firstValue: 0,
      secondValue: 0,
      oldValue: 0,
      dragging: !1,
      sliderSize: 1
    }), c = q(), x = A(), z = t(
      () => e.label || w("tu.slider.defaultLabel", { min: e.min, max: e.max })
    ), F = t(() => ({
      [a.b()]: !0,
      [a.m(c.value)]: c.value,
      [a.m("with-input")]: e.showInput,
      [a.is("vertical")]: e.vertical
    })), C = t(() => ({
      [a.e("runway")]: !0,
      [a.is("show-input")]: e.showInput && !e.range,
      [a.is("disabled")]: x.value
    })), D = t(() => e.vertical ? { height: e.height } : {}), v = t(
      () => Math.min(s.firstValue, s.secondValue)
    ), L = t(
      () => Math.max(s.firstValue, s.secondValue)
    ), f = t(() => e.range ? `${(L.value - v.value) / (e.max - e.min) * 100}%` : `${(s.firstValue - e.min) / (e.max - e.min) * 100}%`), T = t(() => e.vertical ? { height: f.value, bottom: b.value } : { width: f.value, left: b.value }), b = t(() => e.range ? `${(v.value - e.min) / (e.max - e.min) * 100}%` : "0%"), { onSliderWrapperPrevent: i, handleSliderDown: n } = E();
    return (u, o) => {
      var g;
      return M(), $("div", {
        ref: "sliderWrapper",
        class: m(r(F)),
        id: u.range ? r(y) : void 0,
        role: u.range ? "group" : void 0,
        "aria-label": u.range && !r(p) ? r(z) : void 0,
        "aria-labelledby": u.range && r(p) ? (g = r(d)) == null ? void 0 : g.labelId : void 0,
        onTouchstart: o[2] || (o[2] = //@ts-ignore
        (...l) => r(i) && r(i)(...l)),
        onTouchmove: o[3] || (o[3] = //@ts-ignore
        (...l) => r(i) && r(i)(...l))
      }, [
        S("div", {
          ref: "slider",
          class: m(r(C)),
          style: I(r(D)),
          onMousedown: o[0] || (o[0] = //@ts-ignore
          (...l) => r(n) && r(n)(...l)),
          onTouchstart: o[1] || (o[1] = //@ts-ignore
          (...l) => r(n) && r(n)(...l))
        }, [
          S("div", {
            class: m(r(a).e("bar")),
            style: I(r(T))
          }, null, 6)
        ], 38)
      ], 42, G);
    };
  }
});
export {
  Z as default
};
