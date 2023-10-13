import { defineComponent as e, openBlock as t, createElementBlock as r, renderSlot as l } from "vue";
import { collapseItemProps as p } from "./collapse-item.mjs";
import "../style/collapse.css";
const n = e({
  name: "TuCollapseItem"
}), u = /* @__PURE__ */ e({
  ...n,
  props: p,
  setup(s) {
    return (o, m) => (t(), r("div", null, [
      l(o.$slots, "default")
    ]));
  }
});
export {
  u as default
};
