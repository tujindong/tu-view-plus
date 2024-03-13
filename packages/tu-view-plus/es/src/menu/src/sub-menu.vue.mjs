import { defineComponent as e, openBlock as t, createElementBlock as r, createTextVNode as n, renderSlot as u } from "vue";
import { subMenuProps as p } from "./sub-menu.mjs";
import "../style/menu.css";
const s = e({
  name: "TuSubMenu"
}), d = /* @__PURE__ */ e({
  ...s,
  props: p,
  setup(l) {
    return (o, m) => (t(), r("div", null, [
      n(" sub-menu "),
      u(o.$slots, "default")
    ]));
  }
});
export {
  d as default
};
