import { defineComponent as o, openBlock as r, createElementBlock as e } from "vue";
import { radioGroupProps as t, radioGroupEmits as p } from "./radio-group.mjs";
import "../style/radio-group.css";
const i = o({
  name: "TuRadioGroup"
}), d = /* @__PURE__ */ o({
  ...i,
  props: t,
  emits: p,
  setup(m, { emit: n }) {
    return (a, s) => (r(), e("div", null, "Radio组合"));
  }
});
export {
  d as default
};
