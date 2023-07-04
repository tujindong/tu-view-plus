import { defineComponent as e, openBlock as o, createElementBlock as r, renderSlot as n } from "vue";
import { textareaProps as a } from "./textarea.mjs";
import "../style/textarea.css";
const p = e({
  name: "TuTextarea"
}), u = /* @__PURE__ */ e({
  ...p,
  props: a,
  setup(l) {
    return (t, s) => (o(), r("div", null, [
      n(t.$slots, "default")
    ]));
  }
});
export {
  u as default
};
