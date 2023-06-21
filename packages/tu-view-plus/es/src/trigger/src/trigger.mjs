import { defineComponent as m, createVNode as n, createTextVNode as p } from "vue";
import { triggerProps as u } from "./triggerProps.mjs";
import "../style/trigger.css";
import { useFirstElement as a } from "@tu-view-plus/hooks";
const E = /* @__PURE__ */ m({
  name: "TuTrigger",
  props: u,
  setup(d, {
    emit: f,
    slots: e,
    attrs: o
  }) {
    const {
      children: i,
      firstElement: g
    } = a();
    return () => {
      var r, t;
      return i.value = ((r = e.default) == null ? void 0 : r.call(e)) ?? [], n("div", null, [p("1233"), (t = e.default) == null ? void 0 : t.call(e)]);
    };
  }
});
export {
  E as default
};
