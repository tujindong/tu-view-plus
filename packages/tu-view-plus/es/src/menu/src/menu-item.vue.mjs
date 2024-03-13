import { defineComponent as e, openBlock as o, createElementBlock as r, createTextVNode as n, renderSlot as m } from "vue";
import { menuItemProps as p } from "./menu-item.mjs";
import "../style/menu.css";
const u = e({
  name: "TuMenuItem"
}), d = /* @__PURE__ */ e({
  ...u,
  props: p,
  setup(l) {
    return (t, s) => (o(), r("div", null, [
      n(" menu-item "),
      m(t.$slots, "default")
    ]));
  }
});
export {
  d as default
};
