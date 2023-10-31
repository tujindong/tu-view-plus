import { defineComponent as h, getCurrentInstance as w, inject as B, computed as r, openBlock as a, createElementBlock as d, normalizeClass as o, createElementVNode as p, unref as s, normalizeStyle as T, renderSlot as v, createCommentVNode as k, Fragment as P, createTextVNode as g, toDisplayString as S } from "vue";
import { timelineItemProps as E } from "./timeline-item.mjs";
import { useNamespace as O } from "@tu-view-plus/hooks";
import { timelineInjectionKey as F } from "./constants.mjs";
const K = h({
  name: "TuTimelineItem"
}), J = /* @__PURE__ */ h({
  ...K,
  props: E,
  setup(L) {
    const n = L, t = O("timeline-item"), y = w(), l = B(F, {}), $ = r(
      () => {
        var e;
        return ((e = l.items) == null ? void 0 : e.indexOf((y == null ? void 0 : y.uid) ?? -1)) ?? -1;
      }
    ), b = r(() => (l == null ? void 0 : l.direction) ?? "vertical"), C = r(() => (l == null ? void 0 : l.labelPosition) ?? "same"), z = (e, c, u, f) => {
      let i = ["left", "right"];
      u === "horizontal" && (i = ["top", "bottom"]);
      const m = c === "alternate" ? f || i[e % 2] : c;
      return i.indexOf(m) > -1 ? m : i[0];
    }, I = r(() => {
      const { items: e = [], reverse: c, labelPosition: u, mode: f = "left" } = l, i = b.value, m = z(
        $.value,
        f,
        i,
        n.position
      );
      return {
        [t.b()]: !0,
        [t.m(`${i}-${m}`)]: i,
        [t.em("label", `${u}`)]: u,
        [t.is("last")]: $.value === (c === !0 ? 0 : e.length - 1)
      };
    }), N = r(() => ({
      [t.e("dot-line")]: !0,
      [t.em("dot-line", b.value)]: b.value
    })), D = r(() => {
      const { direction: e } = l || {};
      return {
        [e === "horizontal" ? "borderTopStyle" : "borderLeftStyle"]: n.lineType,
        ...n.lineColor ? { borderColor: n.lineColor } : {}
      };
    }), V = r(() => ({
      [t.e("dot")]: !0,
      [t.em("dot", n.dotType)]: n.dotType
    })), j = r(() => ({
      [n.dotType === "solid" ? "backgroundColor" : "borderColor"]: n.dotColor
    }));
    return (e, c) => (a(), d("div", {
      role: "listitem",
      class: o(I.value)
    }, [
      p("div", {
        class: o(s(t).e("dot-wrapper"))
      }, [
        p("div", {
          class: o(N.value),
          style: T(D.value)
        }, null, 6),
        p("div", {
          class: o(s(t).e("dot-content"))
        }, [
          e.$slots.dot ? (a(), d("div", {
            key: 0,
            class: o(s(t).e("dot-custom"))
          }, [
            v(e.$slots, "dot")
          ], 2)) : (a(), d("div", {
            key: 1,
            class: o(V.value),
            style: T(j.value)
          }, null, 6))
        ], 2)
      ], 2),
      p("div", {
        class: o(s(t).e("content-wrapper"))
      }, [
        e.$slots.default ? (a(), d("div", {
          key: 0,
          class: o(s(t).e("content"))
        }, [
          v(e.$slots, "default")
        ], 2)) : k("", !0),
        s(C) !== "relative" ? (a(), d("div", {
          key: 1,
          class: o(s(t).e("label"))
        }, [
          e.$slots.label ? v(e.$slots, "label", { key: 0 }) : (a(), d(P, { key: 1 }, [
            g(S(e.label), 1)
          ], 64))
        ], 2)) : k("", !0)
      ], 2),
      s(C) == "relative" ? (a(), d("div", {
        key: 0,
        class: o(s(t).e("label"))
      }, [
        e.$slots.label ? v(e.$slots, "label", { key: 0 }) : (a(), d(P, { key: 1 }, [
          g(S(e.label), 1)
        ], 64))
      ], 2)) : k("", !0)
    ], 2));
  }
});
export {
  J as default
};
