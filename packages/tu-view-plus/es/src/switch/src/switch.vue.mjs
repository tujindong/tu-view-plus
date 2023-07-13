import { defineComponent as t, openBlock as o, createElementBlock as r, renderSlot as s } from "vue";
import { switchProps as n, switchEmits as i } from "./switch.mjs";
import "../style/switch.css";
const m = t({
  name: "TuSwitch"
}), f = /* @__PURE__ */ t({
  ...m,
  props: n,
  emits: i,
  setup(p, { emit: c }) {
    return (e, l) => (o(), r("div", null, [
      s(e.$slots, "default")
    ]));
  }
});
export {
  f as default
};
