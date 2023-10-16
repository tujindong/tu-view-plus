import { defineComponent as h, getCurrentInstance as w, inject as B, computed as r, openBlock as a, createElementBlock as d, normalizeClass as l, unref as o, createElementVNode as p, normalizeStyle as T, renderSlot as y, createCommentVNode as k, Fragment as P, createTextVNode as g, toDisplayString as S } from "vue";
import { timelineItemProps as E } from "./timeline-item.mjs";
import { useNamespace as O } from "@tu-view-plus/hooks";
import { timelineInjectionKey as F } from "./constants.mjs";
const K = h({
  name: "TuTimelineItem"
}), J = /* @__PURE__ */ h({
  ...K,
  props: E,
  setup(L) {
    const n = L, t = O("timeline-item"), b = w(), s = B(F, {}), $ = r(
      () => {
        var e;
        return ((e = s.items) == null ? void 0 : e.indexOf((b == null ? void 0 : b.uid) ?? -1)) ?? -1;
      }
    ), v = r(() => (s == null ? void 0 : s.direction) ?? "vertical"), C = r(() => (s == null ? void 0 : s.labelPosition) ?? "same"), z = (e, c, u, f) => {
      let i = ["left", "right"];
      u === "horizontal" && (i = ["top", "bottom"]);
      const m = c === "alternate" ? f || i[e % 2] : c;
      return i.indexOf(m) > -1 ? m : i[0];
    }, I = r(() => {
      const { items: e = [], reverse: c, labelPosition: u, mode: f = "left" } = s, i = v.value, m = z(
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
      [t.em("dot-line", v.value)]: v.value
    })), D = r(() => {
      const { direction: e } = s || {};
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
      class: l(o(I))
    }, [
      p("div", {
        class: l(o(t).e("dot-wrapper"))
      }, [
        p("div", {
          class: l(o(N)),
          style: T(o(D))
        }, null, 6),
        p("div", {
          class: l(o(t).e("dot-content"))
        }, [
          e.$slots.dot ? (a(), d("div", {
            key: 0,
            class: l(o(t).e("dot-custom"))
          }, [
            y(e.$slots, "dot")
          ], 2)) : (a(), d("div", {
            key: 1,
            class: l(o(V)),
            style: T(o(j))
          }, null, 6))
        ], 2)
      ], 2),
      p("div", {
        class: l(o(t).e("content-wrapper"))
      }, [
        e.$slots.default ? (a(), d("div", {
          key: 0,
          class: l(o(t).e("content"))
        }, [
          y(e.$slots, "default")
        ], 2)) : k("", !0),
        o(C) !== "relative" ? (a(), d("div", {
          key: 1,
          class: l(o(t).e("label"))
        }, [
          e.$slots.label ? y(e.$slots, "label", { key: 0 }) : (a(), d(P, { key: 1 }, [
            g(S(e.label), 1)
          ], 64))
        ], 2)) : k("", !0)
      ], 2),
      o(C) == "relative" ? (a(), d("div", {
        key: 0,
        class: l(o(t).e("label"))
      }, [
        e.$slots.label ? y(e.$slots, "label", { key: 0 }) : (a(), d(P, { key: 1 }, [
          g(S(e.label), 1)
        ], 64))
      ], 2)) : k("", !0)
    ], 2));
  }
});
export {
  J as default
};
