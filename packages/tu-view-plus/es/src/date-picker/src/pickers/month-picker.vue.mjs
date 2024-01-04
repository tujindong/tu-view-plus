import { defineComponent as e, openBlock as t, createElementBlock as r, createTextVNode as n, renderSlot as c } from "vue";
import { monthPickerProps as p } from "./month-picker.mjs";
const l = e({
  name: "TuMonthPicker"
}), i = /* @__PURE__ */ e({
  ...l,
  props: p,
  setup(m) {
    return (o, s) => (t(), r("div", null, [
      n(" month-picker "),
      c(o.$slots, "default")
    ]));
  }
});
export {
  i as default
};
