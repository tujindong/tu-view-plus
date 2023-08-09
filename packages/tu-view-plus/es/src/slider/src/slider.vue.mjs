import { defineComponent as _, ref as m, computed as v, openBlock as w, createElementBlock as D, normalizeClass as u, unref as d, createElementVNode as k, createVNode as E } from "vue";
import { useNamespace as L } from "@tu-view-plus/hooks";
import { isArray as P } from "@tu-view-plus/utils";
import { sliderProps as S } from "./slider.mjs";
import "../../form/index.mjs";
import h from "number-precision";
import T from "./ticks.vue.mjs";
import "../style/slider.css";
import { useFormDisabled as A } from "../../form/src/hooks/use-form-props.mjs";
const F = _({
  name: "TuSlider"
}), J = /* @__PURE__ */ _({
  ...F,
  props: S,
  setup(V) {
    const e = V, t = L("slider"), f = A(), i = m(null), a = m(), l = e.modelValue ? e.modelValue : e.defaultValue, C = m(P(l) ? l[1] : l), g = v(() => ({
      [t.b()]: !0,
      [t.m("vertical")]: e.direction === "vertical",
      [t.m(e.size)]: e.size,
      [t.is("with-marks")]: !!e.marks
    })), b = v(() => ({
      [t.e("track")]: !0,
      [t.m("vertical")]: e.direction === "vertical",
      [t.is("disabled")]: f.value
    })), z = (o, s) => {
      if (!a.value)
        return 0;
      const { left: n, top: N, width: R, height: p } = a.value, c = e.direction === "horizontal" ? R : p, x = c * e.step / (e.max - e.min);
      let r = e.direction === "horizontal" ? o - n : N + p - s;
      r < 0 && (r = 0), r > c && (r = c);
      const y = Math.round(r / x);
      return h.plus(e.min, h.times(y, e.step));
    }, B = (o) => {
      if (f.value)
        return;
      const { clientX: s, clientY: n } = o;
      i.value && (a.value = i.value.getBoundingClientRect()), C.value = z(s, n);
    };
    return (o, s) => (w(), D("div", {
      class: u(d(g))
    }, [
      k("div", {
        ref_key: "trackRef",
        ref: i,
        class: u(d(b)),
        onClick: B
      }, [
        k("div", {
          class: u(d(t).e("bar"))
        }, null, 2),
        E(T)
      ], 2)
    ], 2));
  }
});
export {
  J as default
};
