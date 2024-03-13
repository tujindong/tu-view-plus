import { defineComponent as e, openBlock as t, createElementBlock as r, createTextVNode as n, renderSlot as p } from "vue";
import { menuItemGroupProps as m } from "./menu-item-group.mjs";
import "../style/menu.css";
const u = e({
  name: "TuMenuItemGroup"
}), d = /* @__PURE__ */ e({
  ...u,
  props: m,
  setup(l) {
    return (o, s) => (t(), r("div", null, [
      n(" menu-item-group "),
      p(o.$slots, "default")
    ]));
  }
});
export {
  d as default
};
