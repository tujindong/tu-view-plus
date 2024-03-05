import { defineComponent as t, createVNode as e, createTextVNode as o } from "vue";
import { paginationProps as i, paginationEmits as n } from "./pagination.mjs";
import "../style/pagination.css";
const d = /* @__PURE__ */ t({
  name: "TuPagination",
  props: i,
  emits: n,
  setup(r, {
    emit: p,
    slots: a
  }) {
    return () => e("div", null, [o("123")]);
  }
});
export {
  d as default
};
