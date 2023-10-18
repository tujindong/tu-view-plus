import { defineComponent as M, toRefs as te, ref as r, computed as b, watch as B, nextTick as E, onMounted as ae, openBlock as u, createElementBlock as C, normalizeClass as h, unref as t, createBlock as g, createCommentVNode as p, createVNode as T, withCtx as x, createElementVNode as S, normalizeStyle as le, Fragment as I, renderList as ie, resolveDynamicComponent as se, createTextVNode as oe, toDisplayString as ne, renderSlot as re } from "vue";
import { useNamespace as ue } from "@tu-view-plus/hooks";
import { isUndefined as fe } from "@tu-view-plus/utils";
import { tabsNavProps as ve, tabsNavEmits as ce } from "./tabs-nav.mjs";
import { CirclePlus as de } from "@tu-view-plus/icons-vue";
import L from "./tabs-button.vue.mjs";
import me from "./tabs-tab.vue.mjs";
import pe from "./tabs-nav-indicate.vue.mjs";
import { TuIcon as ye } from "../../icon/index.mjs";
import { TuResizeObserver as D } from "../../resize-observer/index.mjs";
import { gap as ke, getTabListStyle as be } from "./utils.mjs";
import "../style/tabs.css";
const he = M({
  name: "TuTabsNav"
}), $e = /* @__PURE__ */ M({
  ...he,
  props: ve,
  emits: ce,
  setup(P, { emit: z }) {
    const i = P, { tabs: N, activeKey: y, activeIndex: U, direction: v } = te(i), n = ue("tabs"), o = r(), f = r(), w = r({}), O = r(), c = r(!1), k = r(0), d = r(0), m = r([]), s = r(0), W = b(() => {
      if (!fe(y == null ? void 0 : y.value))
        return w.value[y.value];
    }), A = b(() => ({
      [n.e("nav")]: !0,
      [n.em("nav", i.direction)]: i.direction,
      [n.em("nav", i.position)]: i.position,
      [n.em("nav", i.size)]: i.size,
      [n.em("nav", i.type)]: i.type
    })), F = b(() => ({
      [n.e("nav-tab")]: !0,
      [n.em("nav-tab", "scroll")]: c.value
    })), $ = b(() => i.type === "slider" ? 0 : ke), G = b(
      () => be({
        direction: i.direction,
        type: i.type,
        offset: s.value,
        gap: $.value
      })
    ), j = (e) => !o.value || !f.value || e < 0 ? 0 : e > d.value ? d.value : e, q = (e) => o.value ? e === "previous" ? s.value - k.value : s.value + k.value : 0, J = () => o.value && f.value ? i.direction === "vertical" ? f.value.offsetHeight > o.value.offsetHeight : f.value.offsetWidth > o.value.offsetWidth : !1, Q = () => {
      var e, a;
      return (v.value === "vertical" ? (e = o.value) == null ? void 0 : e.offsetHeight : (a = o.value) == null ? void 0 : a.offsetWidth) ?? 0;
    }, X = () => !f.value || !o.value ? 0 : v.value === "vertical" ? f.value.offsetHeight - o.value.offsetHeight : f.value.offsetWidth - o.value.offsetWidth, Y = () => N.value.map((e) => {
      const a = w.value[e.key];
      return v.value === "vertical" ? a.offsetTop + a.offsetHeight : a.offsetLeft + a.offsetWidth;
    }), H = (e) => (m.value[e - 1] ?? 0) >= s.value && m.value[e] <= s.value + k.value, V = (e) => {
      s.value = j(q(e));
    }, _ = () => {
      c.value = J(), c.value ? (k.value = Q(), d.value = X(), m.value = Y(), s.value > d.value && (s.value = d.value)) : s.value = 0;
    }, Z = () => {
      _(), O.value && O.value.$forceUpdate();
    }, K = (e, a) => {
      z("click", e, a);
    }, ee = (e, a) => {
      z("delete", e, a);
    };
    return B(N, () => {
      E(() => _());
    }), B(U, (e, a) => {
      E(() => {
        if (c.value)
          if (e >= a) {
            const l = e < m.value.length - 1 ? e + 1 : e;
            H(l) || (s.value = m.value[l] - k.value + $.value);
          } else {
            const l = e > 0 ? e - 1 : e;
            H(l) || (s.value = m.value[l - 1] ?? 0);
          }
      });
    }), ae(() => {
      _();
    }), (e, a) => (u(), C("div", {
      class: h(t(A))
    }, [
      c.value ? (u(), g(L, {
        key: 0,
        type: "previous",
        direction: t(v),
        disabled: s.value <= 0,
        onClick: V
      }, null, 8, ["direction", "disabled"])) : p("", !0),
      T(t(D), { onResize: _ }, {
        default: x(() => [
          S("div", {
            ref_key: "wrapperRef",
            ref: o,
            class: h(t(F))
          }, [
            T(t(D), { onResize: Z }, {
              default: x(() => [
                S("div", {
                  ref_key: "listRef",
                  ref: f,
                  class: h(t(n).e("nav-tab-list")),
                  style: le(t(G))
                }, [
                  (u(!0), C(I, null, ie(t(N), (l) => (u(), g(me, {
                    key: l.key,
                    ref_for: !0,
                    ref: (R) => {
                      R != null && R.$el && (w.value[l.key] = R.$el);
                    },
                    active: l.key === t(y),
                    tab: l,
                    editable: e.editable,
                    onClick: K,
                    onDelete: ee
                  }, {
                    default: x(() => [
                      l.slots.title ? (u(), g(se(l.slots.title), { key: 0 })) : p("", !0),
                      l.title ? (u(), C(I, { key: 1 }, [
                        oe(ne(l.title), 1)
                      ], 64)) : p("", !0)
                    ]),
                    _: 2
                  }, 1032, ["active", "tab", "editable"]))), 128)),
                  t(W) ? (u(), g(pe, {
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
        disabled: s.value >= d.value,
        onClick: V
      }, null, 8, ["direction", "disabled"])) : p("", !0),
      S("div", {
        class: h(t(n).e("nav-extra"))
      }, [
        e.showAddButton ? (u(), C("div", {
          key: 0,
          class: h(t(n).e("button-add")),
          onClick: a[0] || (a[0] = (l) => z("add", l))
        }, [
          T(t(ye), null, {
            default: x(() => [
              T(t(de))
            ]),
            _: 1
          })
        ], 2)) : p("", !0),
        re(e.$slots, "extra")
      ], 2)
    ], 2));
  }
});
export {
  $e as default
};
