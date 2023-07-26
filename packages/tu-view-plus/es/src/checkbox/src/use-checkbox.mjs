import { getCurrentInstance as z, ref as v, inject as M, computed as l, watch as S } from "vue";
import { isUndefined as A, isArray as f, isBoolean as O, debugWarn as U } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as _ } from "@tu-view-plus/constants";
import { checkboxGroupContextKey as j } from "./constants.mjs";
import "../../form/index.mjs";
import { useFormItem as w, useFormItemInputId as B } from "../../form/src/hooks/use-form-item.mjs";
import { useFormSize as K, useFormDisabled as N } from "../../form/src/hooks/use-form-props.mjs";
const X = (a, o, P) => {
  const { emit: c } = z(), g = v(!1), u = v(!1), r = v(!1), { formItem: s } = w(), t = M(j, void 0), m = l(() => !A(t)), E = l(() => !1), L = K(l(() => {
    var e;
    return (e = t == null ? void 0 : t.size) == null ? void 0 : e.value;
  })), I = l(() => {
    var e;
    return ((e = t == null ? void 0 : t.type) == null ? void 0 : e.value) || a.type;
  }), C = N(
    l(() => {
      var e;
      return ((e = t == null ? void 0 : t.disabled) == null ? void 0 : e.value) || E.value;
    })
  ), { inputId: y } = B(a, {
    formItemContext: s,
    disableIdManagement: m
  }), D = l(
    () => (t == null ? void 0 : t.validateEvent) || a.validateEvent
  ), n = l({
    get() {
      var e;
      return m.value ? (e = t == null ? void 0 : t.modelValue) == null ? void 0 : e.value : a.modelValue ?? r.value;
    },
    set(e) {
      var d, i;
      m.value && f(e) ? (u.value = ((d = t == null ? void 0 : t.max) == null ? void 0 : d.value) !== void 0 && e.length > (t == null ? void 0 : t.max.value), u.value === !1 && ((i = t == null ? void 0 : t.changeEvent) == null || i.call(t, e))) : (c(_, e), r.value = e);
    }
  }), V = l(() => {
    const e = n.value;
    return O(e) ? e : f(e) ? e.indexOf(a.label) > -1 : e != null ? e === a.trueLabel : !!e;
  }), F = () => {
    f(n.value) && !n.value.includes(a.label) ? n.value.push(a.label) : n.value = a.trueLabel || !0;
  }, T = (e) => e === a.trueLabel || e === !0 ? a.trueLabel ?? !0 : a.falseLabel ?? !1, b = (e) => {
    var i;
    if (u.value)
      return;
    const d = (i = e.target) == null ? void 0 : i.checked;
    o("change", T(d));
  };
  return S(
    () => a.modelValue,
    () => {
      D.value && (s == null || s.validate("change").catch((e) => U(e)));
    }
  ), {
    inputId: y,
    model: n,
    checkboxDisabled: C,
    checkboxSize: L,
    checkboxType: I,
    isChecked: V,
    isFocused: g,
    handleChange: b,
    addToStore: F
  };
};
export {
  X as useCheckbox
};
