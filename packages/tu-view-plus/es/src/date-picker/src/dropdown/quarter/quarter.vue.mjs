import { defineComponent as e, openBlock as t, createElementBlock as o, createTextVNode as n, renderSlot as a } from "vue";
import { quarterProps as p } from "./quarter.mjs";
const u = e({
  name: "TuQuarter"
}), m = /* @__PURE__ */ e({
  ...u,
  props: p,
  setup(l) {
    return (r, s) => (t(), o("div", null, [
      n(" quarter "),
      a(r.$slots, "default")
    ]));
  }
});
export {
  m as default
};
