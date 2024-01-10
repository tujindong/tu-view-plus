import { defineComponent as e, openBlock as r, createElementBlock as n, createTextVNode as t, renderSlot as p } from "vue";
import { rangePickerDropdownProps as a } from "./range-picker-dropdown.mjs";
const c = e({
  name: "TuRangePickerDropdown"
}), i = /* @__PURE__ */ e({
  ...c,
  props: a,
  setup(d) {
    return (o, l) => (r(), n("div", null, [
      t(" range-picker-dropdown "),
      p(o.$slots, "default")
    ]));
  }
});
export {
  i as default
};
