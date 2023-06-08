import { defineComponent as o, openBlock as r, createElementBlock as t, renderSlot as n } from "vue";
import { radioProps as p } from "./radio.mjs";
import "../style/radio.css";
const a = o({
  name: "TuRadio"
}), d = /* @__PURE__ */ o({
  ...a,
  props: p,
  setup(l) {
    return (e, s) => (r(), t("div", null, [
      n(e.$slots, "default")
    ]));
  }
});
export {
  d as default
};
