import { defineComponent as e, openBlock as o, createElementBlock as r, renderSlot as n, createTextVNode as p } from "vue";
import { emptyProps as s } from "./empty.mjs";
import "../style/empty.css";
const m = /* @__PURE__ */ p(" 空状态"), _ = e({
  name: "TuEmpty"
}), f = /* @__PURE__ */ e({
  ..._,
  props: s,
  setup(c) {
    return (t, l) => (o(), r("div", null, [
      n(t.$slots, "default"),
      m
    ]));
  }
});
export {
  f as default
};
