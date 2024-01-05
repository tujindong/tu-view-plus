import { defineComponent as e, openBlock as t, createElementBlock as r, createTextVNode as n, renderSlot as p } from "vue";
import { weekProps as l } from "./week.mjs";
const s = e({
  name: "TuWeek"
}), u = /* @__PURE__ */ e({
  ...s,
  props: l,
  setup(a) {
    return (o, c) => (t(), r("div", null, [
      n(" week "),
      p(o.$slots, "default")
    ]));
  }
});
export {
  u as default
};
