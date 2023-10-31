import { defineComponent as e, openBlock as t, createElementBlock as r, renderSlot as p } from "vue";
import { spaceProps as n } from "./space.mjs";
import "../style/space.css";
const s = e({
  name: "TuSpace"
}), u = /* @__PURE__ */ e({
  ...s,
  props: n,
  setup(a) {
    return (o, c) => (t(), r("div", null, [
      p(o.$slots, "default")
    ]));
  }
});
export {
  u as default
};
