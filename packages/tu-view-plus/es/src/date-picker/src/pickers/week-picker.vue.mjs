import { defineComponent as e, openBlock as o, createElementBlock as t, createTextVNode as n, renderSlot as c } from "vue";
import { weekPickerProps as p } from "./week-picker.mjs";
const l = e({
  name: "TuWeekPicker"
}), k = /* @__PURE__ */ e({
  ...l,
  props: p,
  setup(s) {
    return (r, a) => (o(), t("div", null, [
      n(" week-picker "),
      c(r.$slots, "default")
    ]));
  }
});
export {
  k as default
};
