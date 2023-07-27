import { defineComponent as C, computed as c, openBlock as h, createElementBlock as f, normalizeClass as i, unref as n, createElementVNode as s, withDirectives as $, isRef as w, vModelCheckbox as z, normalizeStyle as B, withModifiers as D, renderSlot as E, Fragment as F, createTextVNode as M, toDisplayString as I, createCommentVNode as K } from "vue";
import { checkboxProps as P, checkboxEmits as R } from "./checkbox.mjs";
import { useNamespace as U } from "@tu-view-plus/hooks";
import { useCheckbox as j } from "./use-checkbox.mjs";
import "../style/checkbox.css";
const q = ["aria-controls"], A = ["tabindex", "role", "aria-checked"], H = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], J = C({
  name: "TuCheckbox"
}), Y = /* @__PURE__ */ C({
  ...J,
  props: P,
  emits: R,
  setup(x, { emit: y }) {
    const l = x, {
      checkboxGroup: d,
      inputId: S,
      model: r,
      checkboxDisabled: u,
      checkboxSize: p,
      checkboxType: b,
      isChecked: v,
      isFocused: m,
      handleChange: k,
      addToStore: g
    } = j(l, y), o = U("checkbox"), N = c(() => ({
      [o.b()]: !0,
      [o.m(p.value)]: p.value,
      [o.m(b.value)]: b.value,
      [o.is("disabled")]: u.value,
      [o.is("checked")]: v.value
    })), T = c(() => ({
      [o.e("input")]: !0,
      [o.is("disabled")]: u.value,
      [o.is("checked")]: v.value,
      [o.is("indeterminate")]: l.indeterminate,
      [o.is("focus")]: m.value
    })), V = c(() => {
      var e;
      return {
        color: ((e = d == null ? void 0 : d.textColor) == null ? void 0 : e.value) || ""
      };
    });
    return l.checked && g(), (e, t) => (h(), f("label", {
      class: i(n(N)),
      "aria-controls": e.controls
    }, [
      s("span", {
        class: i(n(T)),
        tabindex: e.indeterminate ? 0 : void 0,
        role: e.indeterminate ? "checkbox" : void 0,
        "aria-checked": e.indeterminate ? "mixed" : void 0
      }, [
        $(s("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (a) => w(r) ? r.value = a : null),
          type: "checkbox",
          id: n(S),
          class: i(n(o).e("original")),
          "aria-hidden": !!e.indeterminate,
          disabled: n(u),
          value: e.label,
          name: e.name,
          tabindex: e.tabindex,
          onChange: t[1] || (t[1] = //@ts-ignore
          (...a) => n(k) && n(k)(...a)),
          onFocus: t[2] || (t[2] = (a) => m.value = !0),
          onBlur: t[3] || (t[3] = (a) => m.value = !1)
        }, null, 42, H), [
          [z, n(r)]
        ]),
        s("span", {
          class: i(n(o).e("inner"))
        }, null, 2)
      ], 10, A),
      s("span", {
        class: i(n(o).e("label")),
        style: B(n(V)),
        onKeydown: t[4] || (t[4] = D(() => {
        }, ["stop"]))
      }, [
        E(e.$slots, "default"),
        e.$slots.default ? K("", !0) : (h(), f(F, { key: 0 }, [
          M(I(e.label), 1)
        ], 64))
      ], 38)
    ], 10, q));
  }
});
export {
  Y as default
};
