import { defineComponent as e, openBlock as o, createElementBlock as t, createTextVNode as n, renderSlot as a } from "vue";
import { yearPickerProps as c } from "./year-picker.mjs";
const p = e({
  name: "TuYearPicker"
}), m = /* @__PURE__ */ e({
  ...p,
  props: c,
  setup(l) {
    return (r, s) => (o(), t("div", null, [
      n(" year-picker "),
      a(r.$slots, "default")
    ]));
  }
});
export {
  m as default
};
