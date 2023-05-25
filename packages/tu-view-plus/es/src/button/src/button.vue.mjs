import { defineComponent as t, openBlock as n, createElementBlock as s, renderSlot as c, createTextVNode as r } from "vue";
import { useNamespace as u } from "@tu-view-plus/hooks";
import "../style/index.css";
const _ = { class: "tu-button" }, a = /* @__PURE__ */ r("1233"), l = t({ name: "TuButton" }), b = /* @__PURE__ */ t({
  ...l,
  setup(m) {
    const e = u("button");
    return console.log("ns", e.b()), (o, p) => (n(), s("button", _, [
      a,
      c(o.$slots, "default")
    ]));
  }
});
export {
  b as default
};
