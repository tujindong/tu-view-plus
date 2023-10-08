import { defineComponent as _, getCurrentInstance as T, useSlots as h, toRefs as j, ref as m, inject as z, computed as r, reactive as C, watch as H, onBeforeUnmount as K, onUpdated as N, openBlock as f, createElementBlock as p, normalizeClass as v, unref as y, renderSlot as O, createCommentVNode as S } from "vue";
import { useNamespace as U } from "@tu-view-plus/hooks";
import { tabPaneProps as g } from "./tab-pane.mjs";
import { tabsInjectionKey as w } from "./constants.mjs";
import "../style/tabs.css";
const E = _({
  name: "TuTabPane"
}), F = /* @__PURE__ */ _({
  ...E,
  props: g,
  setup(k) {
    var i;
    const c = k, e = T(), l = h(), { title: b, disabled: I, closable: P } = j(c), a = U("tabs"), B = m(), t = z(w, {}), u = r(() => e == null ? void 0 : e.vnode.key), n = r(() => u.value === t.activeKey), s = m(t.lazyLoad ? n.value : !0), d = C({
      key: u,
      title: b,
      disabled: I,
      closable: P,
      slots: l
    });
    e != null && e.uid && ((i = t.addItem) == null || i.call(t, e.uid, d));
    const R = r(() => ({
      [a.e("pane")]: !0,
      [a.is("active")]: n.value
    }));
    return H(n, (o) => {
      o ? s.value || (s.value = !0) : (c.destroyOnHide || t.destroyOnHide) && (s.value = !1);
    }), K(() => {
      var o;
      e != null && e.uid && ((o = t.removeItem) == null || o.call(t, e.uid));
    }), N(() => {
      d.slots = { ...l };
    }), (o, L) => (f(), p("div", {
      ref_key: "itemRef",
      ref: B,
      class: v(y(R))
    }, [
      s.value ? (f(), p("div", {
        key: 0,
        class: v(y(a).e("pane-content"))
      }, [
        O(o.$slots, "default")
      ], 2)) : S("", !0)
    ], 2));
  }
});
export {
  F as default
};
