import { defineComponent as e, openBlock as o, createElementBlock as t, createTextVNode as n, renderSlot as p } from "vue";
import { rangePickerProps as a } from "./range-picker.mjs";
import "../style/range-picker.css";
const c = e({
  name: "TuRangePicker"
}), u = /* @__PURE__ */ e({
  ...c,
  props: a,
  setup(l) {
    return (r, s) => (o(), t("div", null, [
      n(" range-picker "),
      p(r.$slots, "default")
    ]));
  }
});
export {
  u as default
};
