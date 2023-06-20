import { defineComponent as v, computed as f, openBlock as B, createElementBlock as E, normalizeClass as n, unref as e, createElementVNode as d, withDirectives as N, isRef as S, vModelRadio as T, withModifiers as $, renderSlot as h, createTextVNode as z, toDisplayString as D } from "vue";
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
      modelValue: l,
      tabIndex: C,
      handleChange: m
    } = F(r, k), a = x("radio"), V = f(() => ({
      [a.b()]: !0,
      [a.m(g.value)]: !0,
      [a.m(p.value)]: !!p.value,
      [a.is("disabled")]: u.value,
      [a.is("focus")]: t.value,
      [a.is("bordered")]: r.border,
      [a.is("checked")]: l.value === r.label
    })), w = f(() => ({
      [a.e("input")]: !0,
      [a.is("checked")]: l.value === r.label
    }));
    return (s, o) => {
      var b;
      return B(), E("label", {
        class: n(e(V)),
        "aria-checked": e(l) === s.label,
        "aria-disabled": e(u),
        tabindex: e(C)
      }, [
        d("span", {
          class: n(e(w))
        }, [
          N(d("input", {
            ref_key: "radioRef",
            ref: R,
            type: "radio",
            "onUpdate:modelValue": o[0] || (o[0] = (i) => S(l) ? l.value = i : null),
            class: n(e(a).e("original")),
            value: s.label,
            name: s.name || ((b = e(y)) == null ? void 0 : b.name),
            disabled: e(u),
            onFocus: o[1] || (o[1] = (i) => t.value = !0),
            onBlur: o[2] || (o[2] = (i) => t.value = !1),
            onChange: o[3] || (o[3] = //@ts-ignore
            (...i) => e(m) && e(m)(...i))
          }, null, 42, K), [
            [T, e(l)]
          ]),
          d("span", {
            class: n(e(a).e("inner"))
          }, null, 2)
        ], 2),
        d("span", {
          class: n(e(a).e("label")),
          onKeydown: o[4] || (o[4] = $(() => {
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
