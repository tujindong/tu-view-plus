import { defineComponent as v, computed as f, openBlock as B, createElementBlock as E, Fragment as N, createTextVNode as c, toDisplayString as b, unref as o, createElementVNode as l, normalizeClass as n, withDirectives as T, isRef as $, vModelRadio as z, withModifiers as D, renderSlot as F, nextTick as M } from "vue";
import { radioProps as S, radioEmits as h } from "./radio.mjs";
import { useNamespace as G } from "@tu-view-plus/hooks";
import { useRadio as I } from "./use-radio.mjs";
import "../style/radio.css";
const K = ["value", "name", "disabled"], P = v({
  name: "TuRadio"
}), H = /* @__PURE__ */ v({
  ...P,
  props: S,
  emits: h,
  setup(R, { emit: u }) {
    const t = R, { radioRef: g, radioGroup: k, focus: i, size: y, disabled: p, modelValue: a } = I(
      t,
      u
    ), e = G("radio"), C = f(() => ({
      [e.b()]: !0,
      [e.m(y.value)]: !0,
      [e.is("disabled")]: p,
      [e.is("focus")]: i,
      [e.is("bordered")]: t.border,
      [e.is("checked")]: a.value === t.label
    })), V = f(() => ({
      [e.e("input")]: !0
    }));
    function w() {
      M(() => u("change", a.value));
    }
    return (r, s) => {
      var m;
      return B(), E(N, null, [
        c(" ~~" + b(o(a)) + " ", 1),
        l("label", {
          class: n(o(C))
        }, [
          l("span", {
            class: n(o(V))
          }, [
            T(l("input", {
              ref_key: "radioRef",
              ref: g,
              type: "radio",
              "onUpdate:modelValue": s[0] || (s[0] = (d) => $(a) ? a.value = d : null),
              class: n(o(e).e("original")),
              value: r.label,
              name: r.name || ((m = o(k)) == null ? void 0 : m.name),
              disabled: o(p),
              onFocus: s[1] || (s[1] = (d) => i.value = !0),
              onBlur: s[2] || (s[2] = (d) => i.value = !1),
              onChange: w
            }, null, 42, K), [
              [z, o(a)]
            ]),
            l("span", {
              class: n(o(e).e("inner"))
            }, null, 2)
          ], 2),
          l("span", {
            class: n(o(e).e("label")),
            onKeydown: s[3] || (s[3] = D(() => {
            }, ["stop"]))
          }, [
            F(r.$slots, "default", {}, () => [
              c(b(r.label), 1)
            ])
          ], 34)
        ], 2)
      ], 64);
    };
  }
});
export {
  H as default
};
