import { defineComponent as e, openBlock as t, createElementBlock as n, renderSlot as r, createTextVNode as a } from "vue";
import { paginationProps as p } from "./pagination.mjs";
import "../style/pagination.css";
const i = /* @__PURE__ */ a(" pagination "), s = e({
  name: "TuPagination"
}), u = /* @__PURE__ */ e({
  ...s,
  props: p,
  setup(_) {
    return (o, c) => (t(), n("div", null, [
      i,
      r(o.$slots, "default")
    ]));
  }
});
export {
  u as default
};
