import { defineComponent as V, computed as m, openBlock as b, createElementBlock as v, normalizeClass as t, unref as l, createElementVNode as k, withDirectives as y, isRef as g, vModelCheckbox as x, normalizeStyle as T, withModifiers as w, renderSlot as z, Fragment as D, createTextVNode as E, toDisplayString as M, createCommentVNode as U } from "vue";
import { checkboxProps as I, checkboxEmits as K } from "./checkbox.mjs";
import { useNamespace as P } from "@tu-view-plus/hooks";
import { useCheckbox as R } from "./use-checkbox.mjs";
import "../style/checkbox.css";
const j = ["aria-controls"], q = ["tabindex", "role", "aria-checked"], A = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], H = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], J = V({
  name: "TuCheckbox"
}), Z = /* @__PURE__ */ V({
  ...J,
  props: I,
  emits: K,
  setup(L, { emit: S }) {
    const s = L, {
      checkboxGroup: p,
      inputId: f,
      model: i,
      checkboxDisabled: r,
      checkboxSize: c,
      checkboxType: h,
      isChecked: C,
      isFocused: d,
      handleChange: u,
      addToStore: $
    } = R(s, S), n = P("checkbox"), B = m(() => ({
      [n.b()]: !0,
      [n.m(c.value)]: c.value,
      [n.m(h.value)]: h.value,
      [n.is("disabled")]: r.value,
      [n.is("checked")]: C.value
    })), F = m(() => ({
      [n.e("input")]: !0,
      [n.is("disabled")]: r.value,
      [n.is("checked")]: C.value,
      [n.is("indeterminate")]: s.indeterminate,
      [n.is("focus")]: d.value
    })), N = m(() => {
      var e;
      return {
        color: ((e = p == null ? void 0 : p.textColor) == null ? void 0 : e.value) || ""
      };
    });
    return m(() => ({
      trueValue: s.trueLabel,
      falseValue: s.falseLabel
    })), s.checked && $(), (e, a) => (b(), v("label", {
      class: t(l(B)),
      "aria-controls": e.controls
    }, [
      k("span", {
        class: t(l(F)),
        tabindex: e.indeterminate ? 0 : void 0,
        role: e.indeterminate ? "checkbox" : void 0,
        "aria-checked": e.indeterminate ? "mixed" : void 0
      }, [
        e.trueLabel || e.falseLabel ? y((b(), v("input", {
          key: 0,
          id: l(f),
          "onUpdate:modelValue": a[0] || (a[0] = (o) => g(i) ? i.value = o : null),
          class: t(l(n).e("original")),
          type: "checkbox",
          "aria-hidden": !!e.indeterminate,
          name: e.name,
          tabindex: e.tabindex,
          disabled: l(r),
          "true-value": e.trueLabel,
          "false-value": e.falseLabel,
          onChange: a[1] || (a[1] = //@ts-ignore
          (...o) => l(u) && l(u)(...o)),
          onFocus: a[2] || (a[2] = (o) => d.value = !0),
          onBlur: a[3] || (a[3] = (o) => d.value = !1)
        }, null, 42, A)), [
          [x, l(i)]
        ]) : y((b(), v("input", {
          key: 1,
          id: l(f),
          "onUpdate:modelValue": a[4] || (a[4] = (o) => g(i) ? i.value = o : null),
          class: t(l(n).e("original")),
          type: "checkbox",
          "aria-hidden": !!e.indeterminate,
          disabled: l(r),
          value: e.label,
          name: e.name,
          tabindex: e.tabindex,
          onChange: a[5] || (a[5] = //@ts-ignore
          (...o) => l(u) && l(u)(...o)),
          onFocus: a[6] || (a[6] = (o) => d.value = !0),
          onBlur: a[7] || (a[7] = (o) => d.value = !1)
        }, null, 42, H)), [
          [x, l(i)]
        ]),
        k("span", {
          class: t(l(n).e("inner"))
        }, null, 2)
      ], 10, q),
      k("span", {
        class: t(l(n).e("label")),
        style: T(l(N)),
        onKeydown: a[8] || (a[8] = w(() => {
        }, ["stop"]))
      }, [
        z(e.$slots, "default"),
        e.$slots.default ? U("", !0) : (b(), v(D, { key: 0 }, [
          E(M(e.label), 1)
        ], 64))
      ], 38)
    ], 10, j));
  }
});
export {
  Z as default
};
