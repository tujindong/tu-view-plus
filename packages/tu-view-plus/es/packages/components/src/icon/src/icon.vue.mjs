import { defineComponent as p, computed as f, openBlock as t, createElementBlock as n, mergeProps as $, unref as s, normalizeClass as l, renderSlot as i, createCommentVNode as a } from "vue";
import { useNamespace as k } from "@tu-view-plus/hooks";
import { isUndefined as y, addUnit as z } from "@tu-view-plus/utils";
import { iconProps as C } from "./icon.mjs";
import "../style/icon.css";
const h = p({
  name: "TuIcon",
  inheritAttrs: !1
}), S = /* @__PURE__ */ p({
  ...h,
  props: C,
  setup(c) {
    const m = c, o = k("icon"), u = f(() => [o.b()]), d = f(() => {
      const { size: e, color: r } = m;
      return !e && !r ? {} : {
        fontSize: y(e) ? void 0 : z(e),
        "--color": r
      };
    });
    return (e, r) => (t(), n("i", $({
      class: s(u),
      style: s(d)
    }, e.$attrs), [
      e.$slots.prefix ? (t(), n("span", {
        key: 0,
        class: l(s(o).e("prefix"))
      }, [
        i(e.$slots, "prefix")
      ], 2)) : a("", !0),
      i(e.$slots, "default"),
      e.$slots.suffix ? (t(), n("span", {
        key: 1,
        class: l(s(o).e("suffix"))
      }, [
        i(e.$slots, "suffix")
      ], 2)) : a("", !0)
    ], 16));
  }
});
export {
  S as default
};
