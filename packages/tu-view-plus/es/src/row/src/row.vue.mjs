import { defineComponent as e, openBlock as t, createElementBlock as r, renderSlot as n, createTextVNode as p } from "vue";
import { rowProps as s } from "./row.mjs";
import "../style/row.css";
const _ = /* @__PURE__ */ p(" row~~~~~~~ "), c = e({
  name: "TuRow"
}), f = /* @__PURE__ */ e({
  ...c,
  props: s,
  setup(l) {
    return (o, a) => (t(), r("div", null, [
      _,
      n(o.$slots, "default")
    ]));
  }
});
export {
  f as default
};
