import { defineComponent as P, toRefs as ae, ref as r, computed as h, watch as B, nextTick as E, onMounted as le, openBlock as u, createElementBlock as C, normalizeClass as b, unref as t, createBlock as g, createCommentVNode as p, createVNode as T, withCtx as x, createElementVNode as S, normalizeStyle as ie, Fragment as I, renderList as se, resolveDynamicComponent as oe, createTextVNode as ne, toDisplayString as re, renderSlot as ue } from "vue";
import { useNamespace as fe } from "@tu-view-plus/hooks";
import { isUndefined as ve } from "@tu-view-plus/utils";
import { tabsNavProps as ce, tabsNavEmits as de } from "./tabs-nav.mjs";
import { CirclePlus as me } from "@tu-view-plus/icons-vue";
import L from "./tabs-button.vue.mjs";
import pe from "./tabs-tab.vue.mjs";
import ke from "./tabs-nav-indicate.vue.mjs";
import { TuIcon as ye } from "../../icon/index.mjs";
import { TuResizeObserver as D } from "../../resize-observer/index.mjs";
import { gap as M, getTabListStyle as he } from "./utils.mjs";
import "../style/tabs.css";
const be = P({
  name: "TuTabsNav"
}), $e = /* @__PURE__ */ P({
  ...be,
  props: ce,
  emits: de,
  setup(U, { emit: N }) {
    const s = U, { tabs: w, activeKey: k, activeIndex: A, direction: v } = ae(s), n = fe("tabs"), o = r(), f = r(), z = r({}), O = r(), c = r(!1), y = r(0), d = r(0), m = r([]), i = r(0), W = h(() => {
      if (!ve(k == null ? void 0 : k.value))
        return z.value[k.value];
    }), F = h(() => ({
      [n.e("nav")]: !0,
      [n.em("nav", s.direction)]: s.direction,
      [n.em("nav", s.position)]: s.position,
      [n.em("nav", s.type)]: s.type
    })), G = h(() => ({
      [n.e("nav-tab")]: !0,
      [n.em("nav-tab", "scroll")]: c.value
    })), $ = h(
      () => s.direction === "horizontal" ? M : M - 4
    ), j = h(
      () => he({
        direction: s.direction,
        type: s.type,
        offset: i.value,
        gap: $.value
      })
    ), q = (e) => !o.value || !f.value || e < 0 ? 0 : e > d.value ? d.value : e, J = (e) => o.value ? e === "previous" ? i.value - y.value : i.value + y.value : 0, Q = () => o.value && f.value ? s.direction === "vertical" ? f.value.offsetHeight > o.value.offsetHeight : f.value.offsetWidth > o.value.offsetWidth : !1, X = () => {
      var e, a;
      return (v.value === "vertical" ? (e = o.value) == null ? void 0 : e.offsetHeight : (a = o.value) == null ? void 0 : a.offsetWidth) ?? 0;
    }, Y = () => !f.value || !o.value ? 0 : v.value === "vertical" ? f.value.offsetHeight - o.value.offsetHeight : f.value.offsetWidth - o.value.offsetWidth, Z = () => w.value.map((e) => {
      const a = z.value[e.key];
      return v.value === "vertical" ? a.offsetTop + a.offsetHeight : a.offsetLeft + a.offsetWidth;
    }), H = (e) => (m.value[e - 1] ?? 0) >= i.value && m.value[e] <= i.value + y.value, V = (e) => {
      i.value = q(J(e));
    }, _ = () => {
      c.value = Q(), c.value ? (y.value = X(), d.value = Y(), m.value = Z(), i.value > d.value && (i.value = d.value)) : i.value = 0;
    }, K = () => {
      _(), O.value && O.value.$forceUpdate();
    }, ee = (e, a) => {
      N("click", e, a);
    }, te = (e, a) => {
      N("delete", e, a);
    };
    return B(w, () => {
      E(() => _());
    }), B(A, (e, a) => {
      E(() => {
        if (c.value)
          if (e >= a) {
            const l = e < m.value.length - 1 ? e + 1 : e;
            H(l) || (i.value = m.value[l] - y.value + $.value);
          } else {
            const l = e > 0 ? e - 1 : e;
            H(l) || (i.value = m.value[l - 1] ?? 0);
          }
      });
    }), le(() => {
      _();
    }), (e, a) => (u(), C("div", {
      class: b(t(F))
    }, [
      c.value ? (u(), g(L, {
        key: 0,
        type: "previous",
        direction: t(v),
        disabled: i.value <= 0,
        onClick: V
      }, null, 8, ["direction", "disabled"])) : p("", !0),
      T(t(D), { onResize: _ }, {
        default: x(() => [
          S("div", {
            ref_key: "wrapperRef",
            ref: o,
            class: b(t(G))
          }, [
            T(t(D), { onResize: K }, {
              default: x(() => [
                S("div", {
                  ref_key: "listRef",
                  ref: f,
                  class: b(t(n).e("nav-tab-list")),
                  style: ie(t(j))
                }, [
                  (u(!0), C(I, null, se(t(w), (l) => (u(), g(pe, {
                    key: l.key,
                    ref_for: !0,
                    ref: (R) => {
                      R != null && R.$el && (z.value[l.key] = R.$el);
                    },
                    active: l.key === t(k),
                    tab: l,
                    editable: e.editable,
                    onClick: ee,
                    onDelete: te
                  }, {
                    default: x(() => [
                      l.slots.title ? (u(), g(oe(l.slots.title), { key: 0 })) : p("", !0),
                      l.title ? (u(), C(I, { key: 1 }, [
                        ne(re(l.title), 1)
                      ], 64)) : p("", !0)
                    ]),
                    _: 2
                  }, 1032, ["active", "tab", "editable"]))), 128)),
                  t(W) ? (u(), g(ke, {
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
      c.value ? (u(), g(L, {
        key: 1,
        type: "next",
        direction: t(v),
        disabled: i.value >= d.value,
        onClick: V
      }, null, 8, ["direction", "disabled"])) : p("", !0),
      S("div", {
        class: b(t(n).e("nav-extra"))
      }, [
        e.showAddButton ? (u(), C("div", {
          key: 0,
          class: b(t(n).e("button-add")),
          onClick: a[0] || (a[0] = (l) => N("add", l))
        }, [
          T(t(ye), null, {
            default: x(() => [
              T(t(me))
            ]),
            _: 1
          })
        ], 2)) : p("", !0),
        ue(e.$slots, "extra")
      ], 2)
    ], 2));
  }
});
export {
  $e as default
};
