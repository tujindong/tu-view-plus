import { getCurrentInstance as A, ref as f, computed as i, inject as O, watch as U } from "vue";
import { isUndefined as r, isArray as g, isBoolean as _, debugWarn as j } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as w } from "@tu-view-plus/constants";
import { checkboxGroupContextKey as B } from "./constants.mjs";
import "../../form/index.mjs";
import { useFormItem as K, useFormItemInputId as N } from "../../form/src/hooks/use-form-item.mjs";
import { useFormSize as P, useFormDisabled as W } from "../../form/src/hooks/use-form-props.mjs";
const Z = (a, L) => {
  const { emit: I } = A(), c = f(!1), d = f(!1), o = f(!1), m = i(() => !r(t)), { formItem: u } = K(), { inputId: C } = N(a, {
    formItemContext: u,
    disableIdManagement: m
  }), t = O(B, void 0), l = i({
    get() {
      var e;
      return m.value ? (e = t == null ? void 0 : t.modelValue) == null ? void 0 : e.value : a.modelValue ?? o.value;
    },
    set(e) {
      var s, n;
      m.value && g(e) ? (d.value = ((s = t == null ? void 0 : t.max) == null ? void 0 : s.value) !== void 0 && e.length > (t == null ? void 0 : t.max.value), d.value === !1 && ((n = t == null ? void 0 : t.changeEvent) == null || n.call(t, e))) : (I(w, e), o.value = e);
    }
  }), y = i(() => {
    var n, E;
    const e = (n = t == null ? void 0 : t.max) == null ? void 0 : n.value, s = (E = t == null ? void 0 : t.min) == null ? void 0 : E.value;
    return !r(e) && l.value.length >= e && !v.value || !r(s) && l.value.length <= s && v.value;
  }), D = P(i(() => {
    var e;
    return (e = t == null ? void 0 : t.size) == null ? void 0 : e.value;
  })), V = i(() => {
    var e;
    return ((e = t == null ? void 0 : t.type) == null ? void 0 : e.value) || a.type;
  }), F = W(
    i(() => {
      var e;
      return ((e = t == null ? void 0 : t.disabled) == null ? void 0 : e.value) || !!y.value;
    })
  ), v = i(() => {
    const e = l.value;
    return _(e) ? e : g(e) ? e.indexOf(a.label) > -1 : e != null ? e === a.trueLabel : !!e;
  }), T = i(
    () => (t == null ? void 0 : t.validateEvent) || a.validateEvent
  ), z = () => {
    g(l.value) && !l.value.includes(a.label) ? l.value.push(a.label) : l.value = a.trueLabel || !0;
  }, M = (e) => e === a.trueLabel || e === !0 ? a.trueLabel ?? !0 : a.falseLabel ?? !1, S = (e) => {
    var n;
    if (d.value)
      return;
    const s = (n = e.target) == null ? void 0 : n.checked;
    L("change", M(s));
  };
  return U(
    () => a.modelValue,
    () => {
      T.value && (u == null || u.validate("change").catch((e) => j(e)));
    }
  ), {
    checkboxGroup: t,
    inputId: C,
    model: l,
    checkboxDisabled: F,
    checkboxSize: D,
    checkboxType: V,
    isChecked: v,
    isFocused: c,
    handleChange: S,
    addToStore: z
  };
};
export {
  Z as useCheckbox
};
