import { defineComponent as e, openBlock as t, createElementBlock as n, createTextVNode as r, renderSlot as p } from "vue";
import { monthProps as l } from "./month.mjs";
const m = e({
  name: "TuMonth"
}), u = /* @__PURE__ */ e({
  ...m,
  props: l,
  setup(s) {
    return (o, a) => (t(), n("div", null, [
      r(" month "),
      p(o.$slots, "default")
    ]));
  }
});
export {
  u as default
};
