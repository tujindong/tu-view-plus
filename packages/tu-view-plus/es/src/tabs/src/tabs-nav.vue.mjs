import { defineComponent as P, toRefs as le, ref as r, computed as h, watch as B, nextTick as E, onMounted as ie, openBlock as u, createElementBlock as C, normalizeClass as b, createBlock as g, unref as i, createCommentVNode as p, createVNode as T, withCtx as x, createElementVNode as S, normalizeStyle as se, Fragment as I, renderList as oe, resolveDynamicComponent as ne, createTextVNode as re, toDisplayString as ue, renderSlot as fe } from "vue";
import { useNamespace as ve } from "@tu-view-plus/hooks";
import { isUndefined as ce } from "@tu-view-plus/utils";
import { tabsNavProps as de, tabsNavEmits as me } from "./tabs-nav.mjs";
import { CirclePlus as pe } from "@tu-view-plus/icons-vue";
import L from "./tabs-button.vue.mjs";
import ke from "./tabs-tab.vue.mjs";
import ye from "./tabs-nav-indicate.vue.mjs";
import { TuIcon as he } from "../../icon/index.mjs";
import { TuResizeObserver as D } from "../../resize-observer/index.mjs";
import { gap as M, getTabListStyle as be } from "./utils.mjs";
import "../style/tabs.css";
const ge = P({
  name: "TuTabsNav"
}), He = /* @__PURE__ */ P({
  ...ge,
  props: de,
  emits: me,
  setup(U, { emit: A }) {
    const s = U, N = A, { tabs: w, activeKey: k, activeIndex: F, direction: v } = le(s), n = ve("tabs"), o = r(), f = r(), z = r({}), O = r(), c = r(!1), y = r(0), d = r(0), m = r([]), l = r(0), W = h(() => {
      if (!ce(k == null ? void 0 : k.value))
        return z.value[k.value];
    }), G = h(() => ({
      [n.e("nav")]: !0,
      [n.em("nav", s.direction)]: s.direction,
      [n.em("nav", s.position)]: s.position,
      [n.em("nav", s.type)]: s.type
    })), j = h(() => ({
      [n.e("nav-tab")]: !0,
      [n.em("nav-tab", "scroll")]: c.value
    })), $ = h(
      () => s.direction === "horizontal" ? M : M - 4
    ), q = h(
      () => be({
        direction: s.direction,
        type: s.type,
        offset: l.value,
        gap: $.value
      })
    ), J = (e) => !o.value || !f.value || e < 0 ? 0 : e > d.value ? d.value : e, Q = (e) => o.value ? e === "previous" ? l.value - y.value : l.value + y.value : 0, X = () => o.value && f.value ? s.direction === "vertical" ? f.value.offsetHeight > o.value.offsetHeight : f.value.offsetWidth > o.value.offsetWidth : !1, Y = () => {
      var e, t;
      return (v.value === "vertical" ? (e = o.value) == null ? void 0 : e.offsetHeight : (t = o.value) == null ? void 0 : t.offsetWidth) ?? 0;
    }, Z = () => !f.value || !o.value ? 0 : v.value === "vertical" ? f.value.offsetHeight - o.value.offsetHeight : f.value.offsetWidth - o.value.offsetWidth, K = () => w.value.map((e) => {
      const t = z.value[e.key];
      return v.value === "vertical" ? t.offsetTop + t.offsetHeight : t.offsetLeft + t.offsetWidth;
    }), H = (e) => (m.value[e - 1] ?? 0) >= l.value && m.value[e] <= l.value + y.value, V = (e) => {
      l.value = J(Q(e));
    }, _ = () => {
      c.value = X(), c.value ? (y.value = Y(), d.value = Z(), m.value = K(), l.value > d.value && (l.value = d.value)) : l.value = 0;
    }, ee = () => {
      _(), O.value && O.value.$forceUpdate();
    }, te = (e, t) => {
      N("click", e, t);
    }, ae = (e, t) => {
      N("delete", e, t);
    };
    return B(w, () => {
      E(() => _());
    }), B(F, (e, t) => {
      E(() => {
        if (c.value)
          if (e >= t) {
            const a = e < m.value.length - 1 ? e + 1 : e;
            H(a) || (l.value = m.value[a] - y.value + $.value);
          } else {
            const a = e > 0 ? e - 1 : e;
            H(a) || (l.value = m.value[a - 1] ?? 0);
          }
      });
    }), ie(() => {
      _();
    }), (e, t) => (u(), C("div", {
      class: b(G.value)
    }, [
      c.value ? (u(), g(L, {
        key: 0,
        type: "previous",
        direction: i(v),
        disabled: l.value <= 0,
        onClick: V
      }, null, 8, ["direction", "disabled"])) : p("", !0),
      T(i(D), { onResize: _ }, {
        default: x(() => [
          S("div", {
            ref_key: "wrapperRef",
            ref: o,
            class: b(j.value)
          }, [
            T(i(D), { onResize: ee }, {
              default: x(() => [
                S("div", {
                  ref_key: "listRef",
                  ref: f,
                  class: b(i(n).e("nav-tab-list")),
                  style: se(q.value)
                }, [
                  (u(!0), C(I, null, oe(i(w), (a) => (u(), g(ke, {
                    key: a.key,
                    ref_for: !0,
                    ref: (R) => {
                      R != null && R.$el && (z.value[a.key] = R.$el);
                    },
                    active: a.key === i(k),
                    tab: a,
                    editable: e.editable,
                    onClick: te,
                    onDelete: ae
                  }, {
                    default: x(() => [
                      a.slots.title ? (u(), g(ne(a.slots.title), { key: 0 })) : p("", !0),
                      a.title ? (u(), C(I, { key: 1 }, [
                        re(ue(a.title), 1)
                      ], 64)) : p("", !0)
                    ]),
                    _: 2
                  }, 1032, ["active", "tab", "editable"]))), 128)),
                  W.value ? (u(), g(ye, {
                    key: 0,
                    ref_key: "indicateRef",
                    ref: O,
                    activeTabRef: W.value,
                    direction: i(v),
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
        direction: i(v),
        disabled: l.value >= d.value,
        onClick: V
      }, null, 8, ["direction", "disabled"])) : p("", !0),
      S("div", {
        class: b(i(n).e("nav-extra"))
      }, [
        e.showAddButton ? (u(), C("div", {
          key: 0,
          class: b(i(n).e("button-add")),
          onClick: t[0] || (t[0] = (a) => N("add", a))
        }, [
          T(i(he), null, {
            default: x(() => [
              T(i(pe))
            ]),
            _: 1
          })
        ], 2)) : p("", !0),
        fe(e.$slots, "extra")
      ], 2)
    ], 2));
  }
});
export {
  He as default
};
