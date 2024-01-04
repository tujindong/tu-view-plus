import { defineComponent as e, openBlock as t, createElementBlock as o, createTextVNode as n, renderSlot as c } from "vue";
import { quarterPickerProps as p } from "./quarter-picker.mjs";
const a = e({
  name: "TuQuarterPicker"
}), _ = /* @__PURE__ */ e({
  ...a,
  props: p,
  setup(l) {
    return (r, s) => (t(), o("div", null, [
      n(" month-picker "),
      c(r.$slots, "default")
    ]));
  }
});
export {
  _ as default
};
