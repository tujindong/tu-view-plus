import { defineComponent as e, openBlock as t, createElementBlock as r, renderSlot as n } from "vue";
import { tabsProps as p } from "./tabs.mjs";
import "../style/tabs.css";
const s = e({
  name: "TuTabs"
}), u = /* @__PURE__ */ e({
  ...s,
  props: p,
  setup(a) {
    return (o, l) => (t(), r("div", null, [
      n(o.$slots, "default")
    ]));
  }
});
export {
  u as default
};
