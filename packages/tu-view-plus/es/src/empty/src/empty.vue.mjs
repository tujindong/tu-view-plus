import { defineComponent as e, openBlock as t, createElementBlock as o, createVNode as r } from "vue";
import { emptyProps as p } from "./empty.mjs";
import m from "./empty-image.vue.mjs";
import "../style/empty.css";
const n = e({
  name: "TuEmpty"
}), u = /* @__PURE__ */ e({
  ...n,
  props: p,
  setup(c) {
    return (_, a) => (t(), o("div", null, [
      r(m)
    ]));
  }
});
export {
  u as default
};
