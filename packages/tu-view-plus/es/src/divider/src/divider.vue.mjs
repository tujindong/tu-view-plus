import { defineComponent as d, useSlots as v, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, unref as i, normalizeStyle as y, renderSlot as z, createCommentVNode as _ } from "vue";
import { dividerProps as g } from "./divider.mjs";
import { useNamespace as h } from "@tu-view-plus/hooks";
import { addUnit as l } from "@tu-view-plus/utils";
import "../style/divider.css";
const C = d({
  name: "TuDivider"
}), b = /* @__PURE__ */ d({
  ...C,
  props: g,
  setup(m) {
    const e = m, c = v(), o = h("divider"), p = r(() => e.direction === "horizontal"), u = r(() => ({
      [o.b()]: !0,
      [o.m(e.direction)]: e.direction,
      [o.is(e.orientation)]: e.orientation,
      [o.is("with-text")]: c.default
    })), f = r(() => {
      const t = {};
      return e.margin && (t.margin = p.value ? `${l(e.margin)} 0` : `0 ${l(e.margin)}`), t;
    });
    return (t, S) => (s(), n("div", {
      role: "separator",
      class: a(i(u)),
      style: y(i(f))
    }, [
      t.$slots.default && t.direction === "horizontal" ? (s(), n("div", {
        key: 0,
        class: a(i(o).e("text"))
      }, [
        z(t.$slots, "default")
      ], 2)) : _("", !0)
    ], 6));
  }
});
export {
  b as default
};
