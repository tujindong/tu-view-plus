import { defineComponent as S, computed as p, openBlock as u, createElementBlock as m, normalizeClass as t, createElementVNode as k, withDirectives as y, unref as n, isRef as g, vModelCheckbox as x, normalizeStyle as w, withModifiers as z, renderSlot as D, Fragment as E, createTextVNode as M, toDisplayString as U, createCommentVNode as I } from "vue";
import { checkboxProps as K, checkboxEmits as P } from "./checkbox.mjs";
import { useNamespace as R } from "@tu-view-plus/hooks";
import { useCheckbox as j } from "./use-checkbox.mjs";
import "../style/checkbox.css";
const q = ["aria-controls"], A = ["tabindex", "role", "aria-checked"], H = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], J = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], O = S({
  name: "TuCheckbox"
}), G = /* @__PURE__ */ S({
  ...O,
  props: K,
  emits: P,
  setup($, { emit: V }) {
    const b = $, B = V, {
      checkboxGroup: v,
      inputId: f,
      model: i,
      checkboxDisabled: d,
      checkboxSize: c,
      checkboxType: h,
      isChecked: C,
      isFocused: s,
      handleChange: r,
      addToStore: F
    } = j(b, B), l = R("checkbox"), L = p(() => ({
      [l.b()]: !0,
      [l.m(c.value)]: c.value,
      [l.m(h.value)]: h.value,
      [l.is("disabled")]: d.value,
      [l.is("checked")]: C.value
    })), N = p(() => ({
      [l.e("input")]: !0,
      [l.is("disabled")]: d.value,
      [l.is("checked")]: C.value,
      [l.is("indeterminate")]: b.indeterminate,
      [l.is("focus")]: s.value
    })), T = p(() => {
      var e;
      return {
        color: ((e = v == null ? void 0 : v.textColor) == null ? void 0 : e.value) || ""
      };
    });
    return b.checked && F(), (e, a) => (u(), m("label", {
      class: t(L.value),
      "aria-controls": e.controls
    }, [
      k("span", {
        class: t(N.value),
        tabindex: e.indeterminate ? 0 : void 0,
        role: e.indeterminate ? "checkbox" : void 0,
        "aria-checked": e.indeterminate ? "mixed" : void 0
      }, [
        e.trueLabel || e.falseLabel ? y((u(), m("input", {
          key: 0,
          id: n(f),
          "onUpdate:modelValue": a[0] || (a[0] = (o) => g(i) ? i.value = o : null),
          class: t(n(l).e("original")),
          type: "checkbox",
          "aria-hidden": !!e.indeterminate,
          name: e.name,
          tabindex: e.tabindex,
          disabled: n(d),
          "true-value": e.trueLabel,
          "false-value": e.falseLabel,
          onChange: a[1] || (a[1] = //@ts-ignore
          (...o) => n(r) && n(r)(...o)),
          onFocus: a[2] || (a[2] = (o) => s.value = !0),
          onBlur: a[3] || (a[3] = (o) => s.value = !1)
        }, null, 42, H)), [
          [x, n(i)]
        ]) : y((u(), m("input", {
          key: 1,
          id: n(f),
          "onUpdate:modelValue": a[4] || (a[4] = (o) => g(i) ? i.value = o : null),
          class: t(n(l).e("original")),
          type: "checkbox",
          "aria-hidden": !!e.indeterminate,
          disabled: n(d),
          value: e.label,
          name: e.name,
          tabindex: e.tabindex,
          onChange: a[5] || (a[5] = //@ts-ignore
          (...o) => n(r) && n(r)(...o)),
          onFocus: a[6] || (a[6] = (o) => s.value = !0),
          onBlur: a[7] || (a[7] = (o) => s.value = !1)
        }, null, 42, J)), [
          [x, n(i)]
        ]),
        k("span", {
          class: t(n(l).e("inner"))
        }, null, 2)
      ], 10, A),
      k("span", {
        class: t(n(l).e("label")),
        style: w(T.value),
        onKeydown: a[8] || (a[8] = z(() => {
        }, ["stop"]))
      }, [
        D(e.$slots, "default"),
        !e.$slots.default && e.label ? (u(), m(E, { key: 0 }, [
          M(U(e.label), 1)
        ], 64)) : I("", !0)
      ], 38)
    ], 10, q));
  }
});
export {
  G as default
};
