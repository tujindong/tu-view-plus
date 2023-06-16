import { defineComponent as v, computed as f, openBlock as B, createElementBlock as E, normalizeClass as n, unref as a, createElementVNode as d, withDirectives as N, isRef as S, vModelRadio as T, withModifiers as $, renderSlot as h, createTextVNode as z, toDisplayString as D } from "vue";
import { radioProps as I, radioEmits as M } from "./radio.mjs";
import { useNamespace as x } from "@tu-view-plus/hooks";
import { useRadio as F } from "./use-radio.mjs";
import "../style/radio.css";
const G = ["aria-checked", "aria-disabled", "tabindex"], K = ["value", "name", "disabled"], P = v({
  name: "TuRadio"
}), J = /* @__PURE__ */ v({
  ...P,
  props: I,
  emits: M,
  setup(c, { emit: k }) {
    const r = c, {
      radioRef: R,
      radioGroup: y,
      focus: t,
      radioSize: g,
      radioType: p,
      disabled: u,
      modelValue: o,
      tabIndex: C,
      handleChange: m
    } = F(r, k), e = x("radio"), V = f(() => ({
      [e.b()]: !0,
      [e.m(g.value)]: !0,
      [e.m(p.value)]: !!p.value,
      [e.is("disabled")]: u.value,
      [e.is("focus")]: t.value,
      [e.is("bordered")]: r.border,
      [e.is("checked")]: o.value === r.label
    })), w = f(() => ({
      [e.e("input")]: !0,
      [e.is("checked")]: o.value === r.label
    }));
    return (s, l) => {
      var b;
      return B(), E("label", {
        class: n(V.value),
        "aria-checked": a(o) === s.label,
        "aria-disabled": a(u),
        tabindex: a(C)
      }, [
        d("span", {
          class: n(w.value)
        }, [
          N(d("input", {
            ref_key: "radioRef",
            ref: R,
            type: "radio",
            "onUpdate:modelValue": l[0] || (l[0] = (i) => S(o) ? o.value = i : null),
            class: n(a(e).e("original")),
            value: s.label,
            name: s.name || ((b = a(y)) == null ? void 0 : b.name),
            disabled: a(u),
            onFocus: l[1] || (l[1] = (i) => t.value = !0),
            onBlur: l[2] || (l[2] = (i) => t.value = !1),
            onChange: l[3] || (l[3] = //@ts-ignore
            (...i) => a(m) && a(m)(...i))
          }, null, 42, K), [
            [T, a(o)]
          ]),
          d("span", {
            class: n(a(e).e("inner"))
          }, null, 2)
        ], 2),
        d("span", {
          class: n(a(e).e("label")),
          onKeydown: l[4] || (l[4] = $(() => {
          }, ["stop"]))
        }, [
          h(s.$slots, "default", {}, () => [
            z(D(s.label), 1)
          ])
        ], 34)
      ], 10, G);
    };
  }
});
export {
  J as default
};
