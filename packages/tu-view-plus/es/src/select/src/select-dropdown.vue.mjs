import { defineComponent as t, useSlots as n, computed as l, openBlock as a, createElementBlock as c, normalizeClass as p, unref as d, renderSlot as m } from "vue";
import { selectProps as u } from "./select.mjs";
import { useNamespace as f } from "@tu-view-plus/hooks";
const _ = t({
  name: "TuSelectDropDown"
}), C = /* @__PURE__ */ t({
  ..._,
  props: u,
  setup(i) {
    const o = n(), e = f("select-dropdown"), r = l(() => ({
      [e.b()]: !0,
      [e.e("header")]: !!o.header,
      [e.e("footer")]: !!o.footer
    }));
    return (s, w) => (a(), c("div", {
      class: p(d(r))
    }, [
      m(s.$slots, "default")
    ], 2));
  }
});
export {
  C as default
};
