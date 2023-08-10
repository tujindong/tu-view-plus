import { defineComponent as D, ref as m, computed as y, openBlock as T, createElementBlock as q, normalizeClass as C, unref as o, createElementVNode as E, createVNode as N, createBlock as G, normalizeStyle as R, createCommentVNode as H } from "vue";
import { useNamespace as I } from "@tu-view-plus/hooks";
import { isArray as p, isUndefined as J } from "@tu-view-plus/utils";
import { sliderProps as K, sliderEmits as Q } from "./slider.mjs";
import "../../form/index.mjs";
import M from "number-precision";
import { getPositionStyle as W, getOffsetPercent as Z } from "./utils.mjs";
import x from "./slider-ticks.vue.mjs";
import P from "./slider-button.vue.mjs";
import "../style/slider.css";
import { useFormDisabled as ee } from "../../form/src/hooks/use-form-props.mjs";
const te = D({
  name: "TuSlider"
}), fe = /* @__PURE__ */ D({
  ...te,
  props: K,
  emits: Q,
  setup(L, { emit: d }) {
    const e = L;
    M.enableBoundaryChecking(!1);
    const l = I("slider"), c = ee(), i = m(null), f = m(), r = e.modelValue ? e.modelValue : e.defaultValue, s = m(p(r) ? r[0] : 0), a = m(p(r) ? r[1] : r), b = m(!1), _ = y(() => ({
      [l.b()]: !0,
      [l.m("vertical")]: e.direction === "vertical",
      [l.m(e.size)]: e.size,
      [l.is("with-marks")]: !!e.marks
    })), $ = y(() => ({
      [l.e("track")]: !0,
      [l.m("vertical")]: e.direction === "vertical",
      [l.is("disabled")]: c.value
    })), v = y(() => e.range ? p(e.modelValue) ? e.modelValue : [s.value, e.modelValue ?? a.value] : J(e.modelValue) ? [s.value, a.value] : p(e.modelValue) ? [e.min ?? 0, e.modelValue[1]] : [e.min ?? 0, e.modelValue]), h = (t, n) => {
      if (!f.value)
        return 0;
      const { left: V, top: U, width: X, height: z } = f.value, k = e.direction === "horizontal" ? X : z, Y = k * e.step / (e.max - e.min);
      let u = e.direction === "horizontal" ? t - V : U + z - n;
      u < 0 && (u = 0), u > k && (u = k);
      const j = Math.round(u / Y);
      return M.plus(e.min, M.times(j, e.step));
    }, B = (t) => W(
      Z(t, [e.min, e.max]),
      e.direction
    ), g = () => {
      e.range ? (d("update:modelValue", [s.value, a.value]), d("change", [s.value, a.value])) : (d("update:modelValue", a.value), d("change", a.value));
    }, A = (t) => {
      if (c.value)
        return;
      const { clientX: n, clientY: V } = t;
      i.value && (f.value = i.value.getBoundingClientRect()), a.value = h(n, V), g();
    }, w = () => {
      b.value = !0, i.value && (f.value = i.value.getBoundingClientRect());
    }, F = (t, n) => {
      s.value = h(t, n), g();
    }, S = () => {
      b.value = !1;
    }, O = (t, n) => {
      a.value = h(t, n), g();
    };
    return (t, n) => (T(), q("div", {
      class: C(o(_))
    }, [
      E("div", {
        ref_key: "trackRef",
        ref: i,
        class: C(o($)),
        onClick: A
      }, [
        E("div", {
          class: C(o(l).e("bar"))
        }, null, 2),
        N(x),
        t.range ? (T(), G(P, {
          key: 0,
          style: R(B(o(v)[0])),
          min: t.min,
          max: t.max,
          disabled: o(c),
          direction: t.direction,
          value: o(v)[0],
          "format-tooltip": t.formatTooltip,
          "show-tooltip": t.showTooltip,
          onMovestart: w,
          onMoving: F,
          onMoveend: S
        }, null, 8, ["style", "min", "max", "disabled", "direction", "value", "format-tooltip", "show-tooltip"])) : H("", !0),
        N(P, {
          style: R(B(o(v)[1])),
          min: t.min,
          max: t.max,
          direction: t.direction,
          disabled: o(c),
          value: o(v)[1],
          "format-tooltip": t.formatTooltip,
          "show-tooltip": t.showTooltip,
          onMovestart: w,
          onMoving: O,
          onMoveend: S
        }, null, 8, ["style", "min", "max", "direction", "disabled", "value", "format-tooltip", "show-tooltip"])
      ], 2)
    ], 2));
  }
});
export {
  fe as default
};
