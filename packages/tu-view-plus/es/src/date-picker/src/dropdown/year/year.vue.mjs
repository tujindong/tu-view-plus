import { defineComponent as e, openBlock as o, createElementBlock as t, createTextVNode as n, renderSlot as a } from "vue";
import { yearProps as p } from "./year.mjs";
const l = e({
  name: "TuYear"
}), u = /* @__PURE__ */ e({
  ...l,
  props: p,
  setup(s) {
    return (r, c) => (o(), t("div", null, [
      n(" year "),
      a(r.$slots, "default")
    ]));
  }
});
export {
  u as default
};
