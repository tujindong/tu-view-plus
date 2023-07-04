import { defineComponent as o, computed as t, withDirectives as u, openBlock as c, createElementBlock as m, mergeProps as a, unref as e, renderSlot as l, vShow as d, createTextVNode as _ } from "vue";
import { inputProps as f, inputEmits as h } from "./input.mjs";
import { useNamespace as v } from "@tu-view-plus/hooks";
import "../style/input.css";
const y = /* @__PURE__ */ _(" 12 "), S = o({
  name: "TuInput"
}), P = /* @__PURE__ */ o({
  ...S,
  props: f,
  emits: h,
  setup(k, { emit: w }) {
    const n = v("input"), p = t(() => ({
      [n.b()]: !0
    })), r = t(() => []), i = t(() => {
    });
    return (s, B) => u((c(), m("div", a(e(i), {
      class: e(p),
      style: e(r)
    }), [
      y,
      l(s.$slots, "default")
    ], 16)), [
      [d, s.type !== "hidden"]
    ]);
  }
});
export {
  P as default
};
