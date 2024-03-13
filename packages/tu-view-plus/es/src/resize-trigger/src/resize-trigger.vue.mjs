import { defineComponent as i, toRefs as u, computed as s, openBlock as f, createBlock as z, withCtx as g, createElementVNode as _, normalizeClass as d, renderSlot as v } from "vue";
import { resizeTriggerProps as T, resizeTriggerEmits as h } from "./resize-trigger.mjs";
import { useNamespace as R } from "@tu-view-plus/hooks";
import C from "../../resize-observer/src/resize-observer-v2.vue.mjs";
import "../style/resize-trigger.css";
const k = i({
  name: "TuResizeTrigger"
}), w = /* @__PURE__ */ i({
  ...k,
  props: T,
  emits: h,
  setup(a, { emit: n }) {
    const m = a, c = n, { direction: e } = u(m), t = R("resize-trigger"), o = s(() => (e == null ? void 0 : e.value) === "horizontal"), l = s(() => ({
      [t.b()]: !0,
      [t.m("horizontal")]: o.value,
      [t.m("vertical")]: !o.value
    })), p = (r) => {
      c("resize", r);
    };
    return (r, x) => (f(), z(C, { onResize: p }, {
      default: g(() => [
        _("div", {
          class: d(l.value)
        }, [
          v(r.$slots, "default")
        ], 2)
      ]),
      _: 3
    }));
  }
});
export {
  w as default
};
