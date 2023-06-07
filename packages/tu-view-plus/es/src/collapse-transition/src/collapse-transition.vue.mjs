import { defineComponent as o, openBlock as e, createBlock as s, Transition as n, mergeProps as i, unref as r, toHandlers as p, withCtx as g, renderSlot as l } from "vue";
import { useNamespace as m } from "@tu-view-plus/hooks";
import "../style/collapse-transition.css";
const f = o({
  name: "TuCollapseTransition"
}), v = /* @__PURE__ */ o({
  ...f,
  setup(y) {
    const a = m("collapse-transition"), d = {
      beforeEnter(t) {
        t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0;
      },
      enter(t) {
        t.dataset.oldOverflow = t.style.overflow, t.scrollHeight !== 0 ? (t.style.maxHeight = `${t.scrollHeight}px`, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom) : (t.style.maxHeight = 0, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom), t.style.overflow = "hidden";
      },
      afterEnter(t) {
        t.style.maxHeight = "", t.style.overflow = t.dataset.oldOverflow;
      },
      beforeLeave(t) {
        t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.dataset.oldOverflow = t.style.overflow, t.style.maxHeight = `${t.scrollHeight}px`, t.style.overflow = "hidden";
      },
      leave(t) {
        t.scrollHeight !== 0 && (t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0);
      },
      afterLeave(t) {
        t.style.maxHeight = "", t.style.overflow = t.dataset.oldOverflow, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom;
      }
    };
    return (t, c) => (e(), s(n, i({
      name: r(a).b()
    }, p(d)), {
      default: g(() => [
        l(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
export {
  v as default
};
