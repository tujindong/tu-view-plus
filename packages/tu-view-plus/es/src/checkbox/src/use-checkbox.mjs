import { getCurrentInstance as j, ref as f, computed as s, inject as w, toRaw as c, watch as A } from "vue";
import { isUndefined as r, isArray as g, isBoolean as O, isObject as U, debugWarn as _ } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as q } from "@tu-view-plus/constants";
import { checkboxGroupContextKey as B } from "./constants.mjs";
import "../../form/index.mjs";
import { isEqual as K } from "lodash-unified";
import { useFormItem as N, useFormItemInputId as P } from "../../form/src/hooks/use-form-item.mjs";
import { useFormSize as R, useFormDisabled as W } from "../../form/src/hooks/use-form-props.mjs";
const x = (a, L) => {
  const { emit: I } = j(), C = f(!1), u = f(!1), o = f(!1), d = s(() => !r(t)), { formItem: m } = N(), { inputId: y } = P(a, {
    formItemContext: m,
    disableIdManagement: d
  }), t = w(B, void 0), n = s({
    get() {
      var e;
      return d.value ? (e = t == null ? void 0 : t.modelValue) == null ? void 0 : e.value : a.modelValue ?? o.value;
    },
    set(e) {
      var l, i;
      d.value && g(e) ? (u.value = ((l = t == null ? void 0 : t.max) == null ? void 0 : l.value) !== void 0 && e.length > (t == null ? void 0 : t.max.value), u.value === !1 && ((i = t == null ? void 0 : t.changeEvent) == null || i.call(t, e))) : (I(q, e), o.value = e);
    }
  }), D = s(() => {
    var i, E;
    const e = (i = t == null ? void 0 : t.max) == null ? void 0 : i.value, l = (E = t == null ? void 0 : t.min) == null ? void 0 : E.value;
    return !r(e) && n.value.length >= e && !v.value || !r(l) && n.value.length <= l && v.value;
  }), V = R(s(() => {
    var e;
    return (e = t == null ? void 0 : t.size) == null ? void 0 : e.value;
  })), F = s(() => {
    var e;
    return ((e = t == null ? void 0 : t.type) == null ? void 0 : e.value) || a.type;
  }), T = W(
    s(() => {
      var e;
      return ((e = t == null ? void 0 : t.disabled) == null ? void 0 : e.value) || !!D.value;
    })
  ), v = s(() => {
    const e = n.value;
    return O(e) ? e : g(e) ? U(a.label) ? e.map(c).some((l) => K(l, a.label)) : e.map(c).includes(a.label) : e != null ? e === a.trueLabel : !!e;
  }), z = s(
    () => (t == null ? void 0 : t.validateEvent) || a.validateEvent
  ), M = () => {
    g(n.value) && !n.value.includes(a.label) ? n.value.push(a.label) : n.value = a.trueLabel || !0;
  }, S = (e) => e === a.trueLabel || e === !0 ? a.trueLabel ?? !0 : a.falseLabel ?? !1, b = (e) => {
    var i;
    if (u.value)
      return;
    const l = (i = e.target) == null ? void 0 : i.checked;
    L("change", S(l), e);
  };
  return A(
    () => a.modelValue,
    () => {
      z.value && (m == null || m.validate("change").catch((e) => _(e)));
    }
  ), {
    checkboxGroup: t,
    inputId: y,
    model: n,
    checkboxDisabled: T,
    checkboxSize: V,
    checkboxType: F,
    isChecked: v,
    isFocused: C,
    handleChange: b,
    addToStore: M
  };
};
export {
  x as useCheckbox
};
