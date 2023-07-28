import { defineComponent as a, openBlock as s, createBlock as n, Transition as i, mergeProps as r, unref as l, toHandlers as p, withCtx as g, renderSlot as m } from "vue";
import { useNamespace as f } from "@tu-view-plus/hooks";
import "../style/collapse-transition.css";
const y = a({
  name: "TuCollapseTransition"
}), H = /* @__PURE__ */ a({
  ...y,
  setup(c) {
    const e = f("collapse-transition"), o = (t) => {
      t.style.maxHeight = "", t.style.overflow = t.dataset.oldOverflow, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom;
    }, d = {
      beforeEnter(t) {
        t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0;
      },
      enter(t) {
        t.dataset.oldOverflow = t.style.overflow, t.scrollHeight !== 0 ? t.style.maxHeight = `${t.scrollHeight}px` : t.style.maxHeight = 0, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom, t.style.overflow = "hidden";
      },
      afterEnter(t) {
        t.style.maxHeight = "", t.style.overflow = t.dataset.oldOverflow;
      },
      enterCancelled(t) {
        o(t);
      },
      beforeLeave(t) {
        t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.dataset.oldOverflow = t.style.overflow, t.style.maxHeight = `${t.scrollHeight}px`, t.style.overflow = "hidden";
      },
      leave(t) {
        t.scrollHeight !== 0 && (t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0);
      },
      afterLeave(t) {
        o(t);
      },
      leaveCancelled(t) {
        o(t);
      }
    };
    return (t, h) => (s(), n(i, r({
      name: l(e).b()
    }, p(d)), {
      default: g(() => [
        m(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
export {
  H as default
};
