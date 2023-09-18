import { defineComponent as m, useSlots as v, computed as i, openBlock as n, createElementBlock as a, normalizeClass as l, unref as s, normalizeStyle as y, renderSlot as b, createCommentVNode as z } from "vue";
import { dividerProps as h } from "./divider.mjs";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import { addUnit as d } from "@tu-view-plus/utils";
import "../style/divider.css";
const g = m({
  name: "TuDivider"
}), D = /* @__PURE__ */ m({
  ...g,
  props: h,
  setup(c) {
    const e = c, p = v(), o = _("divider"), r = i(() => e.direction === "horizontal"), u = i(() => ({
      [o.b()]: !0,
      [o.m(e.direction)]: e.direction,
      [o.is(e.orientation)]: e.orientation,
      [o.is("with-text")]: p.default
    })), f = i(() => {
      const t = {};
      return e.size && (t[r.value ? "border-bottom-width" : "border-left-width"] = d(e.size)), e.type && (t[r.value ? "border-bottom-style" : "border-left-style"] = e.type), e.margin && (t.margin = r.value ? `${e.margin} 0` : `0 ${d(e.margin)}`), t;
    });
    return (t, C) => (n(), a("div", {
      role: "separator",
      class: l(s(u)),
      style: y(s(f))
    }, [
      t.$slots.default && t.direction === "horizontal" ? (n(), a("div", {
        key: 0,
        class: l(s(o).e("text"))
      }, [
        b(t.$slots, "default")
      ], 2)) : z("", !0)
    ], 6));
  }
});
export {
  D as default
};
