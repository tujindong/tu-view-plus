import { defineComponent as e, openBlock as r, createElementBlock as o, createTextVNode as l, renderSlot as n } from "vue";
import { treeSelectProps as c } from "./tree-select.mjs";
import "../style/tree-select.css";
const p = e({
  name: "TuTreeSelect"
}), d = /* @__PURE__ */ e({
  ...p,
  props: c,
  setup(s) {
    return (t, a) => (r(), o("div", null, [
      l(" treeSelect "),
      n(t.$slots, "default")
    ]));
  }
});
export {
  d as default
};
