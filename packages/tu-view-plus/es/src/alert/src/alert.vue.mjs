import { defineComponent as e, openBlock as o, createElementBlock as r, renderSlot as n } from "vue";
import { alertProps as l } from "./alert.mjs";
const p = e({
  name: "TuAlert"
}), m = /* @__PURE__ */ e({
  ...p,
  props: l,
  setup(s) {
    return (t, a) => (o(), r("div", null, [
      n(t.$slots, "default")
    ]));
  }
});
export {
  m as default
};
