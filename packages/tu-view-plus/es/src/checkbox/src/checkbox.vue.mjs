import { defineComponent as S, computed as p, openBlock as u, createElementBlock as m, normalizeClass as t, unref as n, createElementVNode as k, withDirectives as y, isRef as g, vModelCheckbox as x, normalizeStyle as T, withModifiers as w, renderSlot as z, Fragment as D, createTextVNode as E, toDisplayString as M, createCommentVNode as U } from "vue";
import { checkboxProps as I, checkboxEmits as K } from "./checkbox.mjs";
import { useNamespace as P } from "@tu-view-plus/hooks";
import { useCheckbox as R } from "./use-checkbox.mjs";
import "../style/checkbox.css";
const j = ["aria-controls"], q = ["tabindex", "role", "aria-checked"], A = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], H = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], J = S({
  name: "TuCheckbox"
}), Z = /* @__PURE__ */ S({
  ...J,
  props: I,
  emits: K,
  setup($, { emit: V }) {
    const b = $, {
      checkboxGroup: v,
      inputId: f,
      model: i,
      checkboxDisabled: d,
      checkboxSize: c,
      checkboxType: h,
      isChecked: C,
      isFocused: s,
      handleChange: r,
      addToStore: B
    } = R(b, V), l = P("checkbox"), F = p(() => ({
      [l.b()]: !0,
      [l.m(c.value)]: c.value,
      [l.m(h.value)]: h.value,
      [l.is("disabled")]: d.value,
      [l.is("checked")]: C.value
    })), L = p(() => ({
      [l.e("input")]: !0,
      [l.is("disabled")]: d.value,
      [l.is("checked")]: C.value,
      [l.is("indeterminate")]: b.indeterminate,
      [l.is("focus")]: s.value
    })), N = p(() => {
      var e;
      return {
        color: ((e = v == null ? void 0 : v.textColor) == null ? void 0 : e.value) || ""
      };
    });
    return b.checked && B(), (e, a) => (u(), m("label", {
      class: t(n(F)),
      "aria-controls": e.controls
    }, [
      k("span", {
        class: t(n(L)),
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
        }, null, 42, A)), [
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
        }, null, 42, H)), [
          [x, n(i)]
        ]),
        k("span", {
          class: t(n(l).e("inner"))
        }, null, 2)
      ], 10, q),
      k("span", {
        class: t(n(l).e("label")),
        style: T(n(N)),
        onKeydown: a[8] || (a[8] = w(() => {
        }, ["stop"]))
      }, [
        z(e.$slots, "default"),
        e.$slots.default ? U("", !0) : (u(), m(D, { key: 0 }, [
          E(M(e.label), 1)
        ], 64))
      ], 38)
    ], 10, j));
  }
});
export {
  Z as default
};
