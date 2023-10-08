import { defineComponent as D, toRefs as ee, ref as r, computed as R, watch as V, nextTick as B, onMounted as te, openBlock as u, createElementBlock as C, normalizeClass as b, unref as t, createBlock as h, createCommentVNode as p, createVNode as T, withCtx as x, createElementVNode as S, normalizeStyle as ae, Fragment as E, renderList as le, resolveDynamicComponent as ie, createTextVNode as se, toDisplayString as oe, renderSlot as ne } from "vue";
import { useNamespace as re } from "@tu-view-plus/hooks";
import { isUndefined as ue } from "@tu-view-plus/utils";
import { tabsNavProps as fe, tabsNavEmits as ve } from "./tabs-nav.mjs";
import { Plus as ce } from "@tu-view-plus/icons-vue";
import I from "./tabs-button.vue.mjs";
import de from "./tabs-tab.vue.mjs";
import me from "./tabs-nav-indicate.vue.mjs";
import { TuIcon as pe } from "../../icon/index.mjs";
import { TuResizeObserver as L } from "../../resize-observer/index.mjs";
import { getTabListStyle as ke, gap as ye } from "./utils.mjs";
import "../style/tabs.css";
const be = D({
  name: "TuTabsNav"
}), We = /* @__PURE__ */ D({
  ...be,
  props: fe,
  emits: ve,
  setup(M, { emit: z }) {
    const s = M, { tabs: N, activeKey: k, activeIndex: P, direction: v } = ee(s), n = re("tabs"), o = r(), f = r(), w = r({}), O = r(), c = r(!1), y = r(0), d = r(0), m = r([]), i = r(0), W = R(() => {
      if (!ue(k == null ? void 0 : k.value))
        return w.value[k.value];
    }), U = R(() => ({
      [n.e("nav")]: !0,
      [n.em("nav", s.direction)]: s.direction,
      [n.em("nav", s.position)]: s.position,
      [n.em("nav", s.size)]: s.size,
      [n.em("nav", s.type)]: s.type
    })), A = R(() => ({
      [n.e("nav-tab")]: !0,
      [n.em("nav-tab", "scroll")]: c.value
    })), F = R(
      () => ke({
        direction: s.direction,
        type: s.type,
        offset: i.value
      })
    ), j = (e) => !o.value || !f.value || e < 0 ? 0 : e > d.value ? d.value : e, q = (e) => o.value ? e === "previous" ? i.value - y.value : i.value + y.value : 0, G = () => o.value && f.value ? s.direction === "vertical" ? f.value.offsetHeight > o.value.offsetHeight : f.value.offsetWidth > o.value.offsetWidth : !1, J = () => {
      var e, a;
      return (v.value === "vertical" ? (e = o.value) == null ? void 0 : e.offsetHeight : (a = o.value) == null ? void 0 : a.offsetWidth) ?? 0;
    }, Q = () => !f.value || !o.value ? 0 : v.value === "vertical" ? f.value.offsetHeight - o.value.offsetHeight : f.value.offsetWidth - o.value.offsetWidth, X = () => N.value.map((e) => {
      const a = w.value[e.key];
      return v.value === "vertical" ? a.offsetTop + a.offsetHeight : a.offsetLeft + a.offsetWidth;
    }), $ = (e) => (m.value[e - 1] ?? 0) >= i.value && m.value[e] <= i.value + y.value, H = (e) => {
      i.value = j(q(e));
    }, g = () => {
      c.value = G(), c.value ? (y.value = J(), d.value = Q(), m.value = X(), i.value > d.value && (i.value = d.value)) : i.value = 0;
    }, Y = () => {
      g(), O.value && O.value.$forceUpdate();
    }, Z = (e, a) => {
      z("click", e, a);
    }, K = (e, a) => {
      z("delete", e, a);
    };
    return V(N, () => {
      B(() => g());
    }), V(P, (e, a) => {
      B(() => {
        if (c.value)
          if (e >= a) {
            const l = e < m.value.length - 1 ? e + 1 : e;
            $(l) || (i.value = m.value[l] - y.value + ye);
          } else {
            const l = e > 0 ? e - 1 : e;
            $(l) || (i.value = m.value[l - 1] ?? 0);
          }
      });
    }), te(() => {
      g();
    }), (e, a) => (u(), C("div", {
      class: b(t(U))
    }, [
      c.value ? (u(), h(I, {
        key: 0,
        type: "previous",
        direction: t(v),
        disabled: i.value <= 0,
        onClick: H
      }, null, 8, ["direction", "disabled"])) : p("", !0),
      T(t(L), { onResize: g }, {
        default: x(() => [
          S("div", {
            ref_key: "wrapperRef",
            ref: o,
            class: b(t(A))
          }, [
            T(t(L), { onResize: Y }, {
              default: x(() => [
                S("div", {
                  ref_key: "listRef",
                  ref: f,
                  class: b(t(n).e("nav-tab-list")),
                  style: ae(t(F))
                }, [
                  (u(!0), C(E, null, le(t(N), (l) => (u(), h(de, {
                    key: l.key,
                    ref_for: !0,
                    ref: (_) => {
                      _ != null && _.$el && (w.value[l.key] = _.$el);
                    },
                    active: l.key === t(k),
                    tab: l,
                    editable: e.editable,
                    onClick: Z,
                    onDelete: K
                  }, {
                    default: x(() => [
                      l.slots.title ? (u(), h(ie(l.slots.title), { key: 0 })) : p("", !0),
                      l.title ? (u(), C(E, { key: 1 }, [
                        se(oe(l.title), 1)
                      ], 64)) : p("", !0)
                    ]),
                    _: 2
                  }, 1032, ["active", "tab", "editable"]))), 128)),
                  t(W) ? (u(), h(me, {
                    key: 0,
                    ref_key: "indicateRef",
                    ref: O,
                    activeTabRef: t(W),
                    direction: t(v),
                    disabled: !1,
                    animation: e.animation
                  }, null, 8, ["activeTabRef", "direction", "animation"])) : p("", !0)
                ], 6)
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 1
      }),
      c.value ? (u(), h(I, {
        key: 1,
        type: "next",
        direction: t(v),
        disabled: i.value >= d.value,
        onClick: H
      }, null, 8, ["direction", "disabled"])) : p("", !0),
      S("div", {
        class: b(t(n).e("nav-extra"))
      }, [
        e.showAddButton ? (u(), C("div", {
          key: 0,
          class: b(t(n).e("button-add")),
          onClick: a[0] || (a[0] = (l) => z("add", l))
        }, [
          T(t(pe), null, {
            default: x(() => [
              T(t(ce))
            ]),
            _: 1
          })
        ], 2)) : p("", !0),
        ne(e.$slots, "extra")
      ], 2)
    ], 2));
  }
});
export {
  We as default
};
