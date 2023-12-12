import { defineComponent as e, openBlock as r, createElementBlock as t, createTextVNode as n, renderSlot as p } from "vue";
import { timePickerRangeDropdownProps as a } from "./time-picker-range-dropdown.mjs";
import "../style/time-picker.css";
const c = e({
  name: "TuTimePickerRangeDropdown"
}), _ = /* @__PURE__ */ e({
  ...c,
  props: a,
  setup(d) {
    return (o, m) => (r(), t("div", null, [
      n(" range-dropdown "),
      p(o.$slots, "default")
    ]));
  }
});
export {
  _ as default
};
