import { defineComponent as o, openBlock as r, createElementBlock as t, renderSlot as p } from "vue";
import { popoverProps as n } from "./popover.mjs";
import "../style/popover.css";
const l = o({
  name: "TuPopover"
}), u = /* @__PURE__ */ o({
  ...l,
  props: n,
  setup(s) {
    return (e, m) => (r(), t("div", null, [
      p(e.$slots, "default")
    ]));
  }
});
export {
  u as default
};
