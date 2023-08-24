import { defineComponent as e, openBlock as t, createElementBlock as o } from "vue";
import { selectOptionProps as n } from "./select-option.mjs";
const p = e({
  name: "TuSelectOption"
}), i = /* @__PURE__ */ e({
  ...p,
  props: n,
  setup(r) {
    return (c, l) => (t(), o("div", null, "select-option"));
  }
});
export {
  i as default
};
