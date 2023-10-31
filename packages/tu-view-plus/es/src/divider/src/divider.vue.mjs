import { defineComponent as l, useSlots as f, computed as r, openBlock as i, createElementBlock as s, normalizeClass as n, normalizeStyle as v, unref as y, renderSlot as z, createCommentVNode as _ } from "vue";
import { dividerProps as g } from "./divider.mjs";
import { useNamespace as h } from "@tu-view-plus/hooks";
import { addUnit as a } from "@tu-view-plus/utils";
import "../style/divider.css";
const C = l({
  name: "TuDivider"
}), b = /* @__PURE__ */ l({
  ...C,
  props: g,
  setup(d) {
    const e = d, m = f(), o = h("divider"), c = r(() => e.direction === "horizontal"), u = r(() => ({
      [o.b()]: !0,
      [o.m(e.direction)]: e.direction,
      [o.is(e.orientation)]: e.orientation,
      [o.is("with-text")]: m.default
    })), p = r(() => {
      const t = {};
      return e.margin && (t.margin = c.value ? `${a(e.margin)} 0` : `0 ${a(e.margin)}`), t;
    });
    return (t, S) => (i(), s("div", {
      role: "separator",
      class: n(u.value),
      style: v(p.value)
    }, [
      t.$slots.default && t.direction === "horizontal" ? (i(), s("div", {
        key: 0,
        class: n(y(o).e("text"))
      }, [
        z(t.$slots, "default")
      ], 2)) : _("", !0)
    ], 6));
  }
});
export {
  b as default
};
