import { defineComponent as A, ref as p, computed as C, watch as W, openBlock as s, createElementBlock as Z, normalizeClass as S, unref as i, createElementVNode as D, normalizeStyle as z, createBlock as v, createCommentVNode as h, createVNode as x } from "vue";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import { isArray as g, isUndefined as ee } from "@tu-view-plus/utils";
import { sliderProps as oe, sliderEmits as ne } from "./slider.mjs";
import "../../form/index.mjs";
import B from "number-precision";
import { getOffsetPercent as k, getPositionStyle as ie } from "./utils.mjs";
import te from "./slider-ticks.vue.mjs";
import ae from "./slider-dots.vue.mjs";
import le from "./slider-marks.vue.mjs";
import L from "./slider-button.vue.mjs";
import re from "./slider-input.vue.mjs";
import "../style/slider.css";
import { useFormDisabled as me } from "../../form/src/hooks/use-form-props.mjs";
const se = A({
  name: "TuSlider"
}), we = /* @__PURE__ */ A({
  ...se,
  props: oe,
  emits: ne,
  setup(O, { emit: V }) {
    const o = O;
    B.enableBoundaryChecking(!1);
    const l = _("slider"), y = me(), u = p(null), b = p(), d = o.modelValue ? o.modelValue : o.defaultValue, r = p(g(d) ? d[0] : 0), t = p(g(d) ? d[1] : d), E = p(!1), j = C(() => ({
      [l.b()]: !0,
      [l.m(o.direction)]: o.direction,
      [l.m(o.size)]: o.size
    })), F = C(() => ({
      [l.e("track")]: !0,
      [l.em("track", o.direction)]: o.direction,
      [l.is("disabled")]: y.value
    })), a = C(() => o.range ? g(o.modelValue) ? o.modelValue : [r.value, o.modelValue ?? t.value] : ee(o.modelValue) ? [r.value, t.value] : g(o.modelValue) ? [o.min ?? 0, o.modelValue[1]] : [o.min ?? 0, o.modelValue]), M = (e, n) => {
      if (!b.value)
        return 0;
      const { left: m, top: H, width: J, height: P } = b.value, w = o.direction === "horizontal" ? J : P, K = w * o.step / (o.max - o.min);
      let f = o.direction === "horizontal" ? e - m : H + P - n;
      f < 0 && (f = 0), f > w && (f = w);
      const Q = Math.round(f / K);
      return B.plus(o.min, B.times(Q, o.step));
    }, I = ([e, n]) => (e > n && ([e, n] = [n, e]), o.direction === "vertical" ? {
      bottom: k(e, [o.min, o.max]),
      top: k(o.max + o.min - n, [
        o.min,
        o.max
      ])
    } : {
      left: k(e, [o.min, o.max]),
      right: k(o.max + o.min - n, [
        o.min,
        o.max
      ])
    }), T = C(
      () => Object.keys(o.marks || {}).map((e) => {
        var m;
        const n = Number(e);
        return {
          key: n,
          content: (m = o.marks) == null ? void 0 : m[n],
          isActive: n >= a.value[0] && n <= a.value[1]
        };
      })
    ), N = (e) => ie(
      k(e, [o.min, o.max]),
      o.direction
    ), c = () => {
      o.range ? (V("update:modelValue", [r.value, t.value]), V("change", [r.value, t.value])) : (V("update:modelValue", t.value), V("change", t.value));
    }, U = (e) => {
      if (y.value)
        return;
      const { clientX: n, clientY: m } = e;
      u.value && (b.value = u.value.getBoundingClientRect()), t.value = M(n, m), c();
    }, R = () => {
      E.value = !0, u.value && (b.value = u.value.getBoundingClientRect());
    }, X = (e, n) => {
      r.value = M(e, n), c();
    }, $ = () => {
      E.value = !1;
    }, Y = (e, n) => {
      t.value = M(e, n), c();
    }, q = (e) => {
      e = e ?? o.min, r.value = e, c();
    }, G = (e) => {
      e = e ?? o.min, t.value = e, c();
    };
    return W(
      () => o.modelValue,
      (e) => {
        g(e) ? (r.value = e[0] ?? o.min ?? 0, t.value = e[1] ?? o.min ?? 0) : t.value = e ?? o.min ?? 0;
      }
    ), (e, n) => (s(), Z("div", {
      class: S(i(j))
    }, [
      D("div", {
        ref_key: "trackRef",
        ref: u,
        class: S(i(F)),
        onClick: U
      }, [
        D("div", {
          class: S(i(l).e("bar")),
          style: z(I(i(a)))
        }, null, 6),
        e.showTicks ? (s(), v(te, {
          key: 0,
          value: i(a),
          step: e.step,
          min: e.min,
          max: e.max,
          direction: e.direction
        }, null, 8, ["value", "step", "min", "max", "direction"])) : h("", !0),
        e.marks ? (s(), v(ae, {
          key: 1,
          dots: i(T),
          min: e.min,
          max: e.max,
          direction: e.direction
        }, null, 8, ["dots", "min", "max", "direction"])) : h("", !0),
        e.marks ? (s(), v(le, {
          key: 2,
          marks: i(T),
          min: e.min,
          max: e.max,
          direction: e.direction
        }, null, 8, ["marks", "min", "max", "direction"])) : h("", !0),
        e.range ? (s(), v(L, {
          key: 3,
          style: z(N(i(a)[0])),
          value: i(a)[0],
          min: e.min,
          max: e.max,
          disabled: i(y),
          direction: e.direction,
          "format-tooltip": e.formatTooltip,
          "show-tooltip": e.showTooltip,
          onMovestart: R,
          onMoving: X,
          onMoveend: $
        }, null, 8, ["style", "value", "min", "max", "disabled", "direction", "format-tooltip", "show-tooltip"])) : h("", !0),
        x(L, {
          style: z(N(i(a)[1])),
          value: i(a)[1],
          min: e.min,
          max: e.max,
          direction: e.direction,
          disabled: i(y),
          "format-tooltip": e.formatTooltip,
          "show-tooltip": e.showTooltip,
          onMovestart: R,
          onMoving: Y,
          onMoveend: $
        }, null, 8, ["style", "value", "min", "max", "direction", "disabled", "format-tooltip", "show-tooltip"])
      ], 2),
      e.showInput ? (s(), v(re, {
        key: 0,
        "model-value": i(a),
        size: e.size,
        min: e.min,
        max: e.max,
        step: e.step,
        range: e.range,
        disabled: e.disabled,
        onStartChange: q,
        onEndChange: G
      }, null, 8, ["model-value", "size", "min", "max", "step", "range", "disabled"])) : h("", !0)
    ], 2));
  }
});
export {
  we as default
};
