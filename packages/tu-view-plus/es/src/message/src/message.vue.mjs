import { defineComponent as e, openBlock as o, createElementBlock as r, createVNode as t, Transition as s } from "vue";
import { messageProps as n } from "./message.mjs";
import { useNamespace as p } from "@tu-view-plus/hooks";
import "../style/message.css";
const a = e({
  name: "TuMessage"
}), d = /* @__PURE__ */ e({
  ...a,
  props: n,
  setup(m) {
    return p(""), (c, _) => (o(), r("div", null, [
      t(s)
    ]));
  }
});
export {
  d as default
};
