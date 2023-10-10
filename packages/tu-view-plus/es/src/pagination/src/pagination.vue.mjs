import { defineComponent as o, openBlock as t, createElementBlock as n, renderSlot as r } from "vue";
import { paginationProps as p } from "./pagination.mjs";
import "../style/pagination.css";
const a = o({
  name: "TuPagination"
}), c = /* @__PURE__ */ o({
  ...a,
  props: p,
  setup(i) {
    return (e, l) => (t(), n("div", null, [
      r(e.$slots, "default")
    ]));
  }
});
export {
  c as default
};
