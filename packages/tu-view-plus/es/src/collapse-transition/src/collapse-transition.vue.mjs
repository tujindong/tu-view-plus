import { defineComponent as o, openBlock as s, createBlock as e, Transition as n, mergeProps as i, toHandlers as p, withCtx as r, renderSlot as l } from "vue";
import { useNamespace as g } from "@tu-view-plus/hooks";
import "../style/collapse-transition.css";
const m = o({
  name: "TuCollapseTransition"
}), B = /* @__PURE__ */ o({
  ...m,
  setup(y) {
    const a = g("collapse-transition");
    console.log("nsCollapseTransition~~", a.b());
    const d = {
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
    return (t, f) => (s(), e(n, i({ name: "tu-collapse-transition" }, p(d)), {
      default: r(() => [
        l(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  B as default
};
