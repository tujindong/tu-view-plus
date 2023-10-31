import { defineComponent as t, useSlots as n, computed as l, openBlock as a, createElementBlock as c, normalizeClass as p, renderSlot as d } from "vue";
import { selectProps as m } from "./select.mjs";
import { useNamespace as u } from "@tu-view-plus/hooks";
const f = t({
  name: "TuSelectDropDown"
}), h = /* @__PURE__ */ t({
  ...f,
  props: m,
  setup(_) {
    const o = n(), e = u("select-dropdown"), s = l(() => ({
      [e.b()]: !0,
      [e.e("header")]: !!o.header,
      [e.e("footer")]: !!o.footer
    }));
    return (r, i) => (a(), c("div", {
      class: p(s.value)
    }, [
      d(r.$slots, "default")
    ], 2));
  }
});
export {
  h as default
};
