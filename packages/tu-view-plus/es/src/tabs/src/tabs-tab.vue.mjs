import { defineComponent as r, inject as C, computed as l, openBlock as c, createElementBlock as T, mergeProps as y, createElementVNode as v, normalizeClass as i, unref as s, renderSlot as _, createBlock as g, withCtx as h, createVNode as E, createCommentVNode as N } from "vue";
import { tabsTabProps as j, tabsTabEmits as w } from "./tabs-tab.mjs";
import { useNamespace as B } from "@tu-view-plus/hooks";
import { Close as K } from "@tu-view-plus/icons-vue";
import { tabsInjectionKey as V } from "./constants.mjs";
import { TuIcon as x } from "../../icon/index.mjs";
import "../style/tabs.css";
const D = r({
  name: "TuTabsTab"
}), q = /* @__PURE__ */ r({
  ...D,
  props: j,
  emits: w,
  setup(b, { emit: m }) {
    const t = b, n = m, a = B("tabs"), d = C(V, {}), p = l(() => ({
      [a.e("tab")]: !0,
      [a.is("active")]: t.active,
      [a.is("closable")]: t.editable && t.tab.closable,
      [a.is("disabled")]: t.tab.disabled
    })), u = l(() => Object.assign(
      d.trigger === "click" ? { onClick: o } : { onMouseover: o },
      { onKeydown: k }
    )), o = (e) => {
      t.tab.disabled || n("click", t.tab.key, e);
    }, f = (e) => {
      t.tab.disabled || n("delete", t.tab.key, e);
    }, k = (e) => {
      e.key === "Enter" && o(e);
    };
    return (e, I) => (c(), T("div", y({
      tabindex: "0",
      class: p.value
    }, u.value), [
      v("span", {
        class: i(s(a).e("tab-title"))
      }, [
        _(e.$slots, "default")
      ], 2),
      e.editable && e.tab.closable ? (c(), g(s(x), {
        key: 0,
        class: i(s(a).e("button-close")),
        onClick: f
      }, {
        default: h(() => [
          E(s(K))
        ]),
        _: 1
      }, 8, ["class"])) : N("", !0)
    ], 16));
  }
});
export {
  q as default
};
