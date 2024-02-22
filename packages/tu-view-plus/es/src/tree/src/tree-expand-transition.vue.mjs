import { defineComponent as n, openBlock as c, createBlock as l, Transition as f, withCtx as m, renderSlot as h } from "vue";
import { treeExpandTransitionProps as x, treeExpandTransitionEmits as u } from "./tree-expand-transition.mjs";
const _ = n({
  name: "TuTreeExpandTransition"
}), y = /* @__PURE__ */ n({
  ..._,
  props: x,
  emits: u,
  setup(o, { emit: r }) {
    const t = o, s = r, i = (e) => {
      e.style.height = t.expanded ? "0" : `${e.scrollHeight}px`;
    }, a = (e) => {
      e.style.height = t.expanded ? `${e.scrollHeight}px` : "0";
    }, p = (e) => {
      e.style.height = t.expanded ? "" : "0", s("end");
    }, d = (e) => {
      e.style.display = "none";
    };
    return (e, E) => (c(), l(f, {
      onBeforeEnter: i,
      onEnter: a,
      onAfterEnter: p,
      onBeforeLeave: d
    }, {
      default: m(() => [
        h(e.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  y as default
};
