import { defineComponent as c, computed as p, openBlock as z, createElementBlock as B, normalizeClass as i, unref as e, createElementVNode as d, withDirectives as E, isRef as N, vModelRadio as T, normalizeStyle as $, withModifiers as h, renderSlot as D, createTextVNode as I, toDisplayString as M } from "vue";
import { radioProps as x, radioEmits as F } from "./radio.mjs";
import { useNamespace as K } from "@tu-view-plus/hooks";
import { useRadio as P } from "./use-radio.mjs";
import "../style/radio.css";
const U = ["aria-checked", "aria-disabled", "tabindex"], j = ["value", "name", "disabled"], q = c({
  name: "TuRadio"
}), Q = /* @__PURE__ */ c({
  ...q,
  props: x,
  emits: F,
  setup(y, { emit: k }) {
    const n = y, {
      radioRef: R,
      radioGroup: r,
      focus: u,
      radioSize: C,
      radioType: b,
      disabled: m,
      modelValue: o,
      tabIndex: S,
      handleChange: f
    } = P(n, k), a = K("radio"), g = p(() => ({
      [a.b()]: !0,
      [a.m(C.value)]: !0,
      [a.m(b.value)]: !!b.value,
      [a.is("disabled")]: m.value,
      [a.is("focus")]: u.value,
      [a.is("bordered")]: n.border,
      [a.is("checked")]: o.value === n.label
    })), V = p(() => ({
      [a.e("input")]: !0,
      [a.is("checked")]: o.value === n.label
    })), w = p(() => ({
      color: (r == null ? void 0 : r.textColor) || ""
    }));
    return (s, l) => {
      var v;
      return z(), B("label", {
        class: i(e(g)),
        "aria-checked": e(o) === s.label,
        "aria-disabled": e(m),
        tabindex: e(S)
      }, [
        d("span", {
          class: i(e(V))
        }, [
          E(d("input", {
            ref_key: "radioRef",
            ref: R,
            type: "radio",
            "onUpdate:modelValue": l[0] || (l[0] = (t) => N(o) ? o.value = t : null),
            class: i(e(a).e("original")),
            value: s.label,
            name: s.name || ((v = e(r)) == null ? void 0 : v.name),
            disabled: e(m),
            onFocus: l[1] || (l[1] = (t) => u.value = !0),
            onBlur: l[2] || (l[2] = (t) => u.value = !1),
            onChange: l[3] || (l[3] = //@ts-ignore
            (...t) => e(f) && e(f)(...t))
          }, null, 42, j), [
            [T, e(o)]
          ]),
          d("span", {
            class: i(e(a).e("inner"))
          }, null, 2)
        ], 2),
        d("span", {
          class: i(e(a).e("label")),
          style: $(e(o) === s.label ? e(w) : {}),
          onKeydown: l[4] || (l[4] = h(() => {
          }, ["stop"]))
        }, [
          D(s.$slots, "default", {}, () => [
            I(M(s.label), 1)
          ])
        ], 38)
      ], 10, U);
    };
  }
});
export {
  Q as default
};
