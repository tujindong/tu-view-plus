import { defineComponent as p, computed as i, openBlock as r, createElementBlock as t, mergeProps as $, normalizeClass as l, unref as a, renderSlot as n, createCommentVNode as f } from "vue";
import { useNamespace as k } from "@tu-view-plus/hooks";
import { isUndefined as y, addUnit as v } from "@tu-view-plus/utils";
import { iconProps as z } from "./icon.mjs";
import "../style/icon.css";
const C = p({
  name: "TuIcon",
  inheritAttrs: !1
}), P = /* @__PURE__ */ p({
  ...C,
  props: z,
  setup(c) {
    const m = c, s = k("icon"), u = i(() => [s.b()]), d = i(() => {
      const { size: e, color: o } = m;
      return !e && !o ? {} : {
        fontSize: y(e) ? void 0 : v(e),
        "--color": o
      };
    });
    return (e, o) => (r(), t("i", $({
      class: u.value,
      style: d.value
    }, e.$attrs), [
      e.$slots.prefix ? (r(), t("span", {
        key: 0,
        class: l(a(s).e("prefix"))
      }, [
        n(e.$slots, "prefix")
      ], 2)) : f("", !0),
      n(e.$slots, "default"),
      e.$slots.suffix ? (r(), t("span", {
        key: 1,
        class: l(a(s).e("suffix"))
      }, [
        n(e.$slots, "suffix")
      ], 2)) : f("", !0)
    ], 16));
  }
});
export {
  P as default
};
