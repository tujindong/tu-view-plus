import { defineComponent as i, inject as k, computed as l, openBlock as c, createElementBlock as C, mergeProps as T, unref as a, createElementVNode as y, normalizeClass as r, renderSlot as _, createBlock as g, withCtx as h, createVNode as v, createCommentVNode as E } from "vue";
import { tabsTabProps as N, tabsTabEmits as j } from "./tabs-tab.mjs";
import { useNamespace as w } from "@tu-view-plus/hooks";
import { Close as B } from "@tu-view-plus/icons-vue";
import { tabsInjectionKey as K } from "./constants.mjs";
import { TuIcon as V } from "../../icon/index.mjs";
import "../style/tabs.css";
const x = i({
  name: "TuTabsTab"
}), $ = /* @__PURE__ */ i({
  ...x,
  props: N,
  emits: j,
  setup(b, { emit: n }) {
    const t = b, s = w("tabs"), d = k(K, {}), m = l(() => ({
      [s.e("tab")]: !0,
      [s.is("active")]: t.active,
      [s.is("closable")]: t.editable && t.tab.closable,
      [s.is("disabled")]: t.tab.disabled
    })), p = l(() => Object.assign(
      d.trigger === "click" ? { onClick: o } : { onMouseover: o },
      { onKeydown: f }
    )), o = (e) => {
      t.tab.disabled || n("click", t.tab.key, e);
    }, u = (e) => {
      t.tab.disabled || n("delete", t.tab.key, e);
    }, f = (e) => {
      e.key === "Enter" && o(e);
    };
    return (e, D) => (c(), C("div", T({
      tabindex: "0",
      class: a(m)
    }, a(p)), [
      y("span", {
        class: r(a(s).e("tab-title"))
      }, [
        _(e.$slots, "default")
      ], 2),
      e.editable && e.tab.closable ? (c(), g(a(V), {
        key: 0,
        class: r(a(s).e("button-close")),
        onClick: u
      }, {
        default: h(() => [
          v(a(B))
        ]),
        _: 1
      }, 8, ["class"])) : E("", !0)
    ], 16));
  }
});
export {
  $ as default
};
