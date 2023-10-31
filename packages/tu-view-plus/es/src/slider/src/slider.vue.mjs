import { defineComponent as A, ref as v, computed as b, watch as Z, openBlock as m, createElementBlock as x, normalizeClass as w, createElementVNode as D, unref as S, normalizeStyle as z, createBlock as f, createCommentVNode as p, createVNode as _ } from "vue";
import { useNamespace as ee } from "@tu-view-plus/hooks";
import { isArray as h, isUndefined as oe } from "@tu-view-plus/utils";
import { sliderProps as ne, sliderEmits as ie } from "./slider.mjs";
import "../../form/index.mjs";
import B from "number-precision";
import { getOffsetPercent as g, getPositionStyle as ae } from "./utils.mjs";
import te from "./slider-ticks.vue.mjs";
import le from "./slider-dots.vue.mjs";
import re from "./slider-marks.vue.mjs";
import L from "./slider-button.vue.mjs";
import me from "./slider-input.vue.mjs";
import "../style/slider.css";
import { useFormDisabled as se } from "../../form/src/hooks/use-form-props.mjs";
const ue = A({
  name: "TuSlider"
}), Se = /* @__PURE__ */ A({
  ...ue,
  props: ne,
  emits: ie,
  setup(O, { emit: j }) {
    B.enableBoundaryChecking(!1);
    const o = O, k = j, t = ee("slider"), V = se(), s = v(null), y = v(), u = o.modelValue ? o.modelValue : o.defaultValue, l = v(h(u) ? u[0] : 0), i = v(h(u) ? u[1] : u), E = v(!1), F = b(() => ({
      [t.b()]: !0,
      [t.m(o.direction)]: o.direction,
      [t.m(o.size)]: o.size
    })), I = b(() => ({
      [t.e("track")]: !0,
      [t.em("track", o.direction)]: o.direction,
      [t.is("disabled")]: V.value
    })), a = b(() => o.range ? h(o.modelValue) ? o.modelValue : [l.value, o.modelValue ?? i.value] : oe(o.modelValue) ? [l.value, i.value] : h(o.modelValue) ? [o.min ?? 0, o.modelValue[1]] : [o.min ?? 0, o.modelValue]), C = (e, n) => {
      if (!y.value)
        return 0;
      const { left: r, top: J, width: K, height: P } = y.value, M = o.direction === "horizontal" ? K : P, Q = M * o.step / (o.max - o.min);
      let c = o.direction === "horizontal" ? e - r : J + P - n;
      c < 0 && (c = 0), c > M && (c = M);
      const W = Math.round(c / Q);
      return B.plus(o.min, B.times(W, o.step));
    }, U = ([e, n]) => (e > n && ([e, n] = [n, e]), o.direction === "vertical" ? {
      bottom: g(e, [o.min, o.max]),
      top: g(o.max + o.min - n, [
        o.min,
        o.max
      ])
    } : {
      left: g(e, [o.min, o.max]),
      right: g(o.max + o.min - n, [
        o.min,
        o.max
      ])
    }), T = b(
      () => Object.keys(o.marks || {}).map((e) => {
        var r;
        const n = Number(e);
        return {
          key: n,
          content: (r = o.marks) == null ? void 0 : r[n],
          isActive: n >= a.value[0] && n <= a.value[1]
        };
      })
    ), N = (e) => ae(
      g(e, [o.min, o.max]),
      o.direction
    ), d = () => {
      o.range ? (k("update:modelValue", [l.value, i.value]), k("change", [l.value, i.value])) : (k("update:modelValue", i.value), k("change", i.value));
    }, X = (e) => {
      if (V.value)
        return;
      const { clientX: n, clientY: r } = e;
      s.value && (y.value = s.value.getBoundingClientRect()), i.value = C(n, r), d();
    }, R = () => {
      E.value = !0, s.value && (y.value = s.value.getBoundingClientRect());
    }, Y = (e, n) => {
      l.value = C(e, n), d();
    }, $ = () => {
      E.value = !1;
    }, q = (e, n) => {
      i.value = C(e, n), d();
    }, G = (e) => {
      e = e ?? o.min, l.value = e, d();
    }, H = (e) => {
      e = e ?? o.min, i.value = e, d();
    };
    return Z(
      () => o.modelValue,
      (e) => {
        h(e) ? (l.value = e[0] ?? o.min ?? 0, i.value = e[1] ?? o.min ?? 0) : i.value = e ?? o.min ?? 0;
      }
    ), (e, n) => (m(), x("div", {
      class: w(F.value)
    }, [
      D("div", {
        ref_key: "trackRef",
        ref: s,
        class: w(I.value),
        onClick: X
      }, [
        D("div", {
          class: w(S(t).e("bar")),
          style: z(U(a.value))
        }, null, 6),
        e.showTicks ? (m(), f(te, {
          key: 0,
          value: a.value,
          step: e.step,
          min: e.min,
          max: e.max,
          direction: e.direction
        }, null, 8, ["value", "step", "min", "max", "direction"])) : p("", !0),
        e.marks ? (m(), f(le, {
          key: 1,
          dots: T.value,
          min: e.min,
          max: e.max,
          direction: e.direction
        }, null, 8, ["dots", "min", "max", "direction"])) : p("", !0),
        e.marks ? (m(), f(re, {
          key: 2,
          marks: T.value,
          min: e.min,
          max: e.max,
          direction: e.direction
        }, null, 8, ["marks", "min", "max", "direction"])) : p("", !0),
        e.range ? (m(), f(L, {
          key: 3,
          style: z(N(a.value[0])),
          value: a.value[0],
          min: e.min,
          max: e.max,
          disabled: S(V),
          direction: e.direction,
          "format-tooltip": e.formatTooltip,
          "show-tooltip": e.showTooltip,
          onMovestart: R,
          onMoving: Y,
          onMoveend: $
        }, null, 8, ["style", "value", "min", "max", "disabled", "direction", "format-tooltip", "show-tooltip"])) : p("", !0),
        _(L, {
          style: z(N(a.value[1])),
          value: a.value[1],
          min: e.min,
          max: e.max,
          direction: e.direction,
          disabled: S(V),
          "format-tooltip": e.formatTooltip,
          "show-tooltip": e.showTooltip,
          onMovestart: R,
          onMoving: q,
          onMoveend: $
        }, null, 8, ["style", "value", "min", "max", "direction", "disabled", "format-tooltip", "show-tooltip"])
      ], 2),
      e.showInput ? (m(), f(me, {
        key: 0,
        "model-value": a.value,
        size: e.size,
        min: e.min,
        max: e.max,
        step: e.step,
        range: e.range,
        disabled: e.disabled,
        onStartChange: G,
        onEndChange: H
      }, null, 8, ["model-value", "size", "min", "max", "step", "range", "disabled"])) : p("", !0)
    ], 2));
  }
});
export {
  Se as default
};
