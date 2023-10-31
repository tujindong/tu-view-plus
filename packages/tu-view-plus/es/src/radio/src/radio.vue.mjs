import { defineComponent as c, computed as p, openBlock as B, createElementBlock as E, normalizeClass as i, unref as a, createElementVNode as d, withDirectives as N, isRef as T, vModelRadio as $, normalizeStyle as h, withModifiers as D, renderSlot as I, createTextVNode as M, toDisplayString as x } from "vue";
import { radioProps as F, radioEmits as K } from "./radio.mjs";
import { useNamespace as P } from "@tu-view-plus/hooks";
import { useRadio as U } from "./use-radio.mjs";
import "../style/radio.css";
const j = ["aria-checked", "aria-disabled", "tabindex"], q = ["value", "name", "disabled"], A = c({
  name: "TuRadio"
}), W = /* @__PURE__ */ c({
  ...A,
  props: F,
  emits: K,
  setup(y, { emit: k }) {
    const n = y, R = k, {
      radioRef: C,
      radioGroup: r,
      focus: u,
      radioSize: S,
      radioType: b,
      disabled: m,
      modelValue: o,
      tabIndex: g,
      handleChange: v
    } = U(n, R), e = P("radio"), V = p(() => ({
      [e.b()]: !0,
      [e.m(S.value)]: !0,
      [e.m(b.value)]: !!b.value,
      [e.is("disabled")]: m.value,
      [e.is("focus")]: u.value,
      [e.is("bordered")]: n.border,
      [e.is("checked")]: o.value === n.label
    })), w = p(() => ({
      [e.e("input")]: !0,
      [e.is("checked")]: o.value === n.label
    })), z = p(() => ({
      color: (r == null ? void 0 : r.textColor) || ""
    }));
    return (s, l) => {
      var f;
      return B(), E("label", {
        class: i(V.value),
        "aria-checked": a(o) === s.label,
        "aria-disabled": a(m),
        tabindex: a(g)
      }, [
        d("span", {
          class: i(w.value)
        }, [
          N(d("input", {
            ref_key: "radioRef",
            ref: C,
            type: "radio",
            "onUpdate:modelValue": l[0] || (l[0] = (t) => T(o) ? o.value = t : null),
            class: i(a(e).e("original")),
            value: s.label,
            name: s.name || ((f = a(r)) == null ? void 0 : f.name),
            disabled: a(m),
            onFocus: l[1] || (l[1] = (t) => u.value = !0),
            onBlur: l[2] || (l[2] = (t) => u.value = !1),
            onChange: l[3] || (l[3] = //@ts-ignore
            (...t) => a(v) && a(v)(...t))
          }, null, 42, q), [
            [$, a(o)]
          ]),
          d("span", {
            class: i(a(e).e("inner"))
          }, null, 2)
        ], 2),
        d("span", {
          class: i(a(e).e("label")),
          style: h(a(o) === s.label ? z.value : {}),
          onKeydown: l[4] || (l[4] = D(() => {
          }, ["stop"]))
        }, [
          I(s.$slots, "default", {}, () => [
            M(x(s.label), 1)
          ])
        ], 38)
      ], 10, j);
    };
  }
});
export {
  W as default
};
