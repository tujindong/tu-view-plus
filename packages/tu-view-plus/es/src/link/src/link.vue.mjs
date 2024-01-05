import { defineComponent as c, computed as h, openBlock as n, createElementBlock as i, normalizeClass as r, createBlock as l, unref as a, withCtx as C, resolveDynamicComponent as b, createCommentVNode as t, renderSlot as m } from "vue";
import { linkProps as y, linkEmits as $ } from "./link.mjs";
import { useNamespace as v } from "@tu-view-plus/hooks";
import { TuIcon as B } from "../../icon/index.mjs";
import "../style/link.css";
const E = ["href"], L = c({
  name: "TuLink"
}), I = /* @__PURE__ */ c({
  ...L,
  props: y,
  emits: $,
  setup(d, { emit: p }) {
    const o = d, u = p, s = v("link"), f = h(() => ({
      [s.b()]: !0,
      [s.m(`${o.type}`)]: o.type,
      [s.is("disabled")]: o.disabled,
      [s.is("underline")]: o.underline && !o.disabled
    })), k = (e) => {
      o.disabled || u("click", e);
    };
    return (e, N) => (n(), i("a", {
      class: r(f.value),
      href: e.disabled || !e.href ? void 0 : e.href,
      onClick: k
    }, [
      e.icon ? (n(), l(a(B), { key: 0 }, {
        default: C(() => [
          (n(), l(b(e.icon)))
        ]),
        _: 1
      })) : t("", !0),
      e.$slots.default ? (n(), i("span", {
        key: 1,
        class: r(a(s).e("inner"))
      }, [
        m(e.$slots, "default")
      ], 2)) : t("", !0),
      e.$slots.icon ? m(e.$slots, "icon", { key: 2 }) : t("", !0)
    ], 10, E));
  }
});
export {
  I as default
};
