import { defineComponent as _, computed as r, resolveComponent as U, openBlock as a, createElementBlock as c, normalizeClass as i, unref as s, createElementVNode as f, normalizeStyle as d, renderSlot as P, toDisplayString as x, createCommentVNode as I, createBlock as T, withCtx as j, resolveDynamicComponent as q } from "vue";
import { progressProps as G } from "./progress.mjs";
import { useNamespace as $ } from "@tu-view-plus/hooks";
import { isFunction as H, isString as W } from "@tu-view-plus/utils";
import { WarningFilled as J, CircleCheck as K, CircleClose as Q, Check as X, Close as Y } from "@tu-view-plus/icons-vue";
import "../style/progress.css";
const Z = ["aria-valuenow"], ee = { viewBox: " 0 0 100 100" }, te = ["d", "stroke-width"], se = ["d", "stroke", "stroke-width", "stroke-linecap", "opacity"], re = { key: 0 }, oe = _({
  name: "TuProgress"
}), pe = /* @__PURE__ */ _({
  ...oe,
  props: G,
  setup(B) {
    const t = B, w = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, u = $("progress"), l = $("progress-bar"), g = $("progress-circle"), F = r(() => ({
      [u.b()]: !0,
      [u.m(t.type)]: t.type,
      [u.m("without-text")]: !t.showText,
      [u.m("text-inside")]: t.textInside,
      [u.is(t.status)]: t.status
    })), N = r(() => ({
      [l.e("outer")]: !0,
      [l.is("small")]: t.strokeWidth < 6
    })), z = r(() => ({
      [l.e("inner")]: !0,
      [l.em("inner", "indeterminate")]: t.indeterminate,
      [l.em("inner", "striped")]: t.striped,
      [l.em("inner", "striped-flow")]: t.stripedFlow
    })), M = r(() => ({
      width: `${t.percentage}%`,
      animationDuration: `${t.duration}s`,
      backgroundColor: k(t.percentage)
    }));
    r(() => ({
      width: `${t.percentage}%`,
      animationDuration: `${t.duration}s`,
      backgroundColor: k(t.percentage)
    }));
    const k = (e) => {
      var m;
      const { color: o } = t;
      if (H(o))
        return o(e);
      if (W(o))
        return o;
      {
        const n = V(o);
        for (const p of n)
          if (p.percentage > e)
            return p.color;
        return (m = n[n.length - 1]) == null ? void 0 : m.color;
      }
    }, V = (e) => {
      const o = 100 / e.length;
      return e.map((n, p) => W(n) ? {
        color: n,
        percentage: (p + 1) * o
      } : n).sort((n, p) => n.percentage - p.percentage);
    }, C = r(() => t.format(t.percentage)), y = r(
      () => (t.strokeWidth / t.width * 100).toFixed(1)
    ), b = r(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(
      `${50 - Number.parseFloat(y.value) / 2}`,
      10
    ) : 0), S = r(() => {
      const e = b.value, o = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${o ? "" : "-"}${e}
          a ${e} ${e} 0 1 1 0 ${o ? "-" : ""}${e * 2}
          a ${e} ${e} 0 1 1 0 ${o ? "" : "-"}${e * 2}
          `;
    }), h = r(() => 2 * Math.PI * b.value), v = r(() => t.type === "dashboard" ? 0.75 : 1), D = r(() => `${-1 * h.value * (1 - v.value) / 2}px`), A = r(() => ({
      strokeDasharray: `${h.value * v.value}px, ${h.value}px`,
      strokeDashoffset: D.value
    })), E = r(() => {
      let e;
      return t.color ? e = k(t.percentage) : e = w[t.status] || w.default, e;
    }), L = r(() => ({
      strokeDasharray: `${h.value * v.value * (t.percentage / 100)}px, ${h.value}px`,
      strokeDashoffset: D.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), O = r(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), R = r(() => t.status === "warning" ? J : t.type === "line" ? t.status === "success" ? K : Q : t.status === "success" ? X : Y);
    return (e, o) => {
      const m = U("tu-icon");
      return a(), c("div", {
        role: "progressbar",
        class: i(s(F)),
        "aria-valuenow": e.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        e.type === "line" ? (a(), c("div", {
          key: 0,
          class: i(s(l).b())
        }, [
          f("div", {
            class: i(s(N)),
            style: d({ height: `${e.strokeWidth}px` })
          }, [
            f("div", {
              class: i(s(z)),
              style: d(s(M))
            }, [
              (e.showText || e.$slots.default) && e.textInside ? (a(), c("div", {
                key: 0,
                class: i(s(l).e("innerText"))
              }, [
                P(e.$slots, "default", { percentage: e.percentage }, () => [
                  f("span", null, x(s(C)), 1)
                ])
              ], 2)) : I("", !0)
            ], 6)
          ], 6)
        ], 2)) : (a(), c("div", {
          key: 1,
          class: i(s(g).b()),
          style: d({ height: `${e.width}px`, width: `${e.width}px` })
        }, [
          (a(), c("svg", ee, [
            f("path", {
              class: i(s(g).m("track")),
              d: s(S),
              stroke: "#c8d0e761",
              "stroke-width": s(y),
              style: d(s(A)),
              fill: "none"
            }, null, 14, te),
            f("path", {
              class: i(s(g).m("path")),
              d: s(S),
              stroke: s(E),
              "stroke-width": s(y),
              "stroke-linecap": e.strokeLinecap,
              opacity: e.percentage ? 1 : 0,
              style: d(s(L)),
              fill: "none"
            }, null, 14, se)
          ]))
        ], 6)),
        (e.showText || e.$slots.default) && !e.textInside ? (a(), c("div", {
          key: 2,
          class: i(s(u).e("text")),
          style: d({ fontSize: `${s(O)}px` })
        }, [
          P(e.$slots, "default", { percentage: e.percentage }, () => [
            e.status ? (a(), T(m, { key: 1 }, {
              default: j(() => [
                (a(), T(q(s(R))))
              ]),
              _: 1
            })) : (a(), c("span", re, x(s(C)), 1))
          ])
        ], 6)) : I("", !0)
      ], 10, Z);
    };
  }
});
export {
  pe as default
};
