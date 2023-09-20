import { defineComponent as e, openBlock as t, createElementBlock as r, renderSlot as n } from "vue";
import { tabPaneProps as a } from "./tab-pane.mjs";
import "../style/tabs.css";
const p = e({
  name: "TuTabPane"
}), u = /* @__PURE__ */ e({
  ...p,
  props: a,
  setup(l) {
    return (o, s) => (t(), r("div", null, [
      n(o.$slots, "default")
    ]));
  }
});
export {
  u as default
};
