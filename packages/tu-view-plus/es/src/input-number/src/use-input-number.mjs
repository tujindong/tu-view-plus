import { reactive as H, computed as v, watch as L, onMounted as W, onUpdated as j } from "vue";
import { isNumber as d, debugWarn as A, throwError as k } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import { isNil as S, isUndefined as h, isString as q } from "lodash-unified";
import { UPDATE_MODEL_EVENT as g, INPUT_EVENT as F, CHANGE_EVENT as J } from "@tu-view-plus/constants";
import { useFormSize as K, useFormDisabled as Q } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as R } from "../../form/src/hooks/use-form-item.mjs";
function ue(r, l, f) {
  const i = H({
    currentValue: r.modelValue,
    userInput: null
  }), y = K(), m = Q(), { formItem: s } = R(), I = v(
    () => d(r.modelValue) && r.modelValue <= r.min || m.value
  ), P = v(
    () => d(r.modelValue) && r.modelValue >= r.max || m.value
  ), x = v(() => {
    if (i.userInput !== null)
      return i.userInput;
    let e = i.currentValue;
    if (S(e))
      return "";
    if (d(e)) {
      if (Number.isNaN(e))
        return "";
      h(r.precision) || (e = e.toFixed(r.precision));
    }
    return e;
  }), D = (e) => {
    if (S(e))
      return 0;
    const t = e.toString(), n = t.indexOf(".");
    let u = 0;
    return n !== -1 && (u = t.length - n - 1), u;
  }, T = v(() => {
    const e = D(r.step);
    return h(r.precision) ? Math.max(D(r.modelValue), e) : (e > r.precision && A(
      "InputNumber",
      "precision should not be less than the decimal places of step"
    ), r.precision);
  }), E = (e, t) => {
    if (h(t) && (t = T.value), t === 0)
      return Math.round(e);
    let n = String(e);
    const u = n.indexOf(".");
    if (u === -1 || !n.replace(".", "").split("")[u + t])
      return e;
    const N = n.length;
    return n.charAt(N - 1) === "5" && (n = `${n.slice(0, Math.max(0, N - 1))}6`), Number.parseFloat(Number(n).toFixed(t));
  }, M = (e, t = 1) => d(e) ? E(e + r.step * t) : i.currentValue, w = (e, t) => {
    const { max: n, min: u, step: c, precision: o, stepStrictly: N, valueOnClear: V } = r;
    n < u && k("InputNumber", "min should not be greater than max.");
    let a = Number(e);
    if (S(e) || Number.isNaN(a))
      return null;
    if (e === "") {
      if (V === null)
        return null;
      a = q(V) ? { min: u, max: n }[V] : V;
    }
    return N && (a = E(Math.round(a / c) * c, o)), h(o) || (a = E(a, o)), (a > n || a < u) && (a = a > n ? n : u, t && l(g, a)), a;
  }, b = (e, t = !0) => {
    var c;
    const n = i.currentValue, u = w(e);
    if (!t) {
      l(g, u);
      return;
    }
    n !== u && (i.userInput = null, l(g, u), l(J, u, n), r.validateEvent && ((c = s == null ? void 0 : s.validate) == null || c.call(s, "change").catch((o) => A(o))), i.currentValue = u);
  }, C = () => {
    if (r.readonly || m.value || P.value)
      return;
    const e = Number(x.value) || 0, t = M(e);
    b(t), l(F, i.currentValue);
  }, O = () => {
    if (r.readonly || m.value || I.value)
      return;
    const e = Number(x.value) || 0, t = M(e, -1);
    b(t), l(F, i.currentValue);
  }, U = () => {
    var e, t;
    (t = (e = f.value) == null ? void 0 : e.focus) == null || t.call(e);
  }, _ = () => {
    var e, t;
    (t = (e = f.value) == null ? void 0 : e.blur) == null || t.call(e);
  }, z = (e) => {
    l("focus", e);
  }, $ = (e) => {
    var t;
    l("blur", e), r.validateEvent && ((t = s == null ? void 0 : s.validate) == null || t.call(s, "blur").catch((n) => A(n)));
  }, B = (e) => {
    i.userInput = e;
    const t = e === "" ? null : Number(e);
    l(F, t), b(t, !1);
  }, G = (e) => {
    const t = e !== "" ? Number(e) : "";
    (d(t) && !Number.isNaN(t) || e === "") && b(t), i.userInput = null;
  };
  return L(
    () => r.modelValue,
    (e) => {
      const t = w(i.userInput), n = w(e, !0);
      !d(t) && (!t || t !== n) && (i.currentValue = n, i.userInput = null);
    },
    { immediate: !0 }
  ), W(() => {
    var c;
    const { min: e, max: t, modelValue: n } = r, u = (c = f.value) == null ? void 0 : c.input;
    if (u.setAttribute("role", "spinbutton"), Number.isFinite(t) ? u.setAttribute("aria-valuemax", String(t)) : u.removeAttribute("aria-valuemax"), Number.isFinite(e) ? u.setAttribute("aria-valuemin", String(e)) : u.removeAttribute("aria-valuemin"), u.setAttribute("aria-valuenow", String(i.currentValue)), u.setAttribute("aria-disabled", String(m.value)), !d(n) && n != null) {
      let o = Number(n);
      Number.isNaN(o) && (o = null), l(g, o);
    }
  }), j(() => {
    var t;
    const e = (t = f.value) == null ? void 0 : t.input;
    e == null || e.setAttribute("aria-valuenow", `${i.currentValue}`);
  }), {
    inputNumberSize: y,
    inputNumberDisabled: m,
    minDisabled: I,
    maxDisabled: P,
    displayValue: x,
    handleIncrease: C,
    handleDecrease: O,
    handleFocus: z,
    handleBlur: $,
    handleInput: B,
    handleChange: G,
    focus: U,
    blur: _
  };
}
export {
  ue as default
};
