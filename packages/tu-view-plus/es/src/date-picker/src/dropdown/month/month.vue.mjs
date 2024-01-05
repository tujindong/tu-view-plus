import { defineComponent as e, openBlock as t, createElementBlock as r, createTextVNode as n, renderSlot as p } from "vue";
import { monthProps as m } from "./month.mjs";
import { useNamespace as s } from "@tu-view-plus/hooks";
const a = e({
  name: "TuMonth"
}), d = /* @__PURE__ */ e({
  ...a,
  props: m,
  setup(c) {
    return s("picker"), (o, l) => (t(), r("div", null, [
      n(" month "),
      p(o.$slots, "default")
    ]));
  }
});
export {
  d as default
};
