import { defineComponent as f, useSlots as T, computed as k, openBlock as v, createElementBlock as h, normalizeClass as i, unref as a, createElementVNode as t, withDirectives as V, isRef as $, vModelCheckbox as B, renderSlot as D, Fragment as E, createTextVNode as F, toDisplayString as z, createCommentVNode as w } from "vue";
import { checkboxProps as I, checkboxEmits as M } from "./checkbox.mjs";
import { useNamespace as P } from "@tu-view-plus/hooks";
import { useCheckbox as R } from "./use-checkbox.mjs";
import "../style/checkbox.css";
const U = ["aria-controls"], j = ["tabindex", "role", "aria-checked"], q = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], A = f({
  name: "TuCheckbox"
}), O = /* @__PURE__ */ f({
  ...A,
  props: I,
  emits: M,
  setup(C, { emit: x }) {
    const l = C;
    T();
    const {
      inputId: g,
      model: d,
      checkboxDisabled: r,
      checkboxSize: c,
      checkboxType: m,
      isChecked: b,
      isFocused: u,
      handleChange: p,
      addToStore: S
    } = R(l, x), e = P("checkbox"), y = k(() => ({
      [e.b()]: !0,
      [e.m(c.value)]: c.value,
      [e.m(m.value)]: m.value,
      [e.is("disabled")]: r.value,
      [e.is("checked")]: b.value
    })), N = k(() => ({
      [e.e("input")]: !0,
      [e.is("disabled")]: r.value,
      [e.is("checked")]: b.value,
      [e.is("indeterminate")]: l.indeterminate,
      [e.is("focus")]: u.value
    }));
    return l.checked && S(), (o, n) => (v(), h("label", {
      class: i(a(y)),
      "aria-controls": o.controls
    }, [
      t("span", {
        class: i(a(N)),
        tabindex: o.indeterminate ? 0 : void 0,
        role: o.indeterminate ? "checkbox" : void 0,
        "aria-checked": o.indeterminate ? "mixed" : void 0
      }, [
        V(t("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (s) => $(d) ? d.value = s : null),
          type: "checkbox",
          id: a(g),
          class: i(a(e).e("original")),
          "aria-hidden": !!o.indeterminate,
          disabled: a(r),
          value: o.label,
          name: o.name,
          tabindex: o.tabindex,
          onChange: n[1] || (n[1] = //@ts-ignore
          (...s) => a(p) && a(p)(...s)),
          onFocus: n[2] || (n[2] = (s) => u.value = !0),
          onBlur: n[3] || (n[3] = (s) => u.value = !1)
        }, null, 42, q), [
          [B, a(d)]
        ]),
        t("span", {
          class: i(a(e).e("inner"))
        }, null, 2)
      ], 10, j),
      t("span", {
        class: i(a(e).e("label"))
      }, [
        D(o.$slots, "default"),
        o.$slots.default ? w("", !0) : (v(), h(E, { key: 0 }, [
          F(z(o.label), 1)
        ], 64))
      ], 2)
    ], 10, U));
  }
});
export {
  O as default
};
