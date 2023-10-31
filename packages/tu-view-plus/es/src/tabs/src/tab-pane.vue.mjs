import { defineComponent as y, getCurrentInstance as R, useSlots as T, toRefs as h, ref as m, inject as j, computed as r, reactive as z, watch as C, onBeforeUnmount as H, onUpdated as K, openBlock as f, createElementBlock as p, normalizeClass as v, unref as N, renderSlot as O, createCommentVNode as S } from "vue";
import { useNamespace as U } from "@tu-view-plus/hooks";
import { tabPaneProps as g } from "./tab-pane.mjs";
import { tabsInjectionKey as w } from "./constants.mjs";
import "../style/tabs.css";
const E = y({
  name: "TuTabPane"
}), F = /* @__PURE__ */ y({
  ...E,
  props: g,
  setup(_) {
    var i;
    const e = R(), l = _, c = T(), { title: k, disabled: b, closable: I } = h(l), a = U("tabs"), P = m(), t = j(w, {}), u = r(() => e == null ? void 0 : e.vnode.key), n = r(() => u.value === t.activeKey), s = m(t.lazyLoad ? n.value : !0), d = z({
      key: u,
      title: k,
      disabled: b,
      closable: I,
      slots: c
    });
    e != null && e.uid && ((i = t.addItem) == null || i.call(t, e.uid, d));
    const B = r(() => ({
      [a.e("pane")]: !0,
      [a.is("active")]: n.value
    }));
    return C(n, (o) => {
      o ? s.value || (s.value = !0) : (l.destroyOnHide || t.destroyOnHide) && (s.value = !1);
    }), H(() => {
      var o;
      e != null && e.uid && ((o = t.removeItem) == null || o.call(t, e.uid));
    }), K(() => {
      d.slots = { ...c };
    }), (o, L) => (f(), p("div", {
      ref_key: "itemRef",
      ref: P,
      class: v(B.value)
    }, [
      s.value ? (f(), p("div", {
        key: 0,
        class: v(N(a).e("pane-content"))
      }, [
        O(o.$slots, "default")
      ], 2)) : S("", !0)
    ], 2));
  }
});
export {
  F as default
};
