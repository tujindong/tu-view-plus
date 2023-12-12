import { defineComponent as e, openBlock as r, createElementBlock as t, createTextVNode as n, renderSlot as p } from "vue";
import { timePickerDropdownProps as c } from "./time-picker-dropdown.mjs";
import "../style/time-picker.css";
const d = e({
  name: "TuTimePickerDropdown"
}), _ = /* @__PURE__ */ e({
  ...d,
  props: c,
  setup(m) {
    return (o, i) => (r(), t("div", null, [
      n(" dropdown "),
      p(o.$slots, "default")
    ]));
  }
});
export {
  _ as default
};
