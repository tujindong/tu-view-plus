import { defineComponent as o, provide as t, reactive as p, toRefs as n, openBlock as m, createElementBlock as s, renderSlot as f } from "vue";
import { formProps as c } from "./form.mjs";
import { formContextKey as l } from "./constants.mjs";
import "../style/form.css";
const a = o({
  name: "TuForm"
}), x = /* @__PURE__ */ o({
  ...a,
  props: c,
  setup(e) {
    return t(l, p({ ...n(e) })), (r, u) => (m(), s("div", null, [
      f(r.$slots, "default")
    ]));
  }
});
export {
  x as default
};
