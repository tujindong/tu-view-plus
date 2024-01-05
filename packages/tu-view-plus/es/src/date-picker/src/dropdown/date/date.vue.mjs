import { defineComponent as e, openBlock as o, createElementBlock as r, createTextVNode as n, renderSlot as a } from "vue";
import { dateProps as p } from "./date.mjs";
const l = e({
  name: "TuDate"
}), m = /* @__PURE__ */ e({
  ...l,
  props: p,
  setup(s) {
    return (t, c) => (o(), r("div", null, [
      n(" date "),
      a(t.$slots, "default")
    ]));
  }
});
export {
  m as default
};
