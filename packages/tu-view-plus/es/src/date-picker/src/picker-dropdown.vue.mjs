import { defineComponent as e, openBlock as r, createElementBlock as t, createTextVNode as n, renderSlot as p } from "vue";
import { pickerDropdownProps as c } from "./picker-dropdown.mjs";
const d = e({
  name: "PickerDropdown"
}), i = /* @__PURE__ */ e({
  ...d,
  props: c,
  setup(l) {
    return (o, s) => (r(), t("div", null, [
      n(" picker-dropdown "),
      p(o.$slots, "default")
    ]));
  }
});
export {
  i as default
};
