import { defineComponent as e, openBlock as o, createElementBlock as r, renderSlot as a } from "vue";
import { avatarProps as n } from "./avatar.mjs";
import "../style/avatar.css";
const p = e({
  name: "TuAvatar"
}), u = /* @__PURE__ */ e({
  ...p,
  props: n,
  setup(l) {
    return (t, s) => (o(), r("div", null, [
      a(t.$slots, "default")
    ]));
  }
});
export {
  u as default
};
