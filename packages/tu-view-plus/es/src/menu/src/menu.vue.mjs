import { defineComponent as e, toRefs as o } from "vue";
import { menuProps as s } from "./menu.mjs";
import "../style/menu.css";
const f = /* @__PURE__ */ e({
  name: "TuMenu",
  inheritAttrs: !1,
  props: s,
  setup(t, {
    emit: m,
    slots: r
  }) {
    o(t);
  }
});
export {
  f as default
};
