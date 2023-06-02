import { defineComponent as o, openBlock as t, createElementBlock as r, renderSlot as n } from "vue";
import { colProps as l } from "./col.mjs";
import "../style/col.css";
const p = o({
  name: "TuCol"
}), u = /* @__PURE__ */ o({
  ...p,
  props: l,
  setup(s) {
    return (e, c) => (t(), r("div", null, [
      n(e.$slots, "default")
    ]));
  }
});
export {
  u as default
};
