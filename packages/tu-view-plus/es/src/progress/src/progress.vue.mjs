import { defineComponent as _, computed as r, resolveComponent as j, openBlock as a, createElementBlock as c, normalizeClass as i, unref as s, createElementVNode as m, normalizeStyle as d, renderSlot as x, toDisplayString as D, createCommentVNode as I, createBlock as T, withCtx as q, resolveDynamicComponent as G } from "vue";
import { progressProps as H } from "./progress.mjs";
import { useNamespace as v } from "@tu-view-plus/hooks";
import { isFunction as J, isString as W } from "@tu-view-plus/utils";
import { WarningFilled as K, CircleCheck as Q, CircleClose as X, Check as Y, Close as Z } from "@tu-view-plus/icons-vue";
import "../style/progress.css";
const ee = ["aria-valuenow"], te = { viewBox: " 0 0 100 100" }, se = ["d", "stroke-width"], re = ["d", "stroke", "stroke-width", "stroke-linecap", "opacity"], oe = { key: 0 }, ne = _({
  name: "TuProgress"
}), de = /* @__PURE__ */ _({
  ...ne,
  props: H,
  setup(B) {
    const t = B, $ = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, u = v("progress"), l = v("progress-bar"), g = v("progress-circle"), F = r(() => ({
      [u.b()]: !0,
      [u.m(t.type)]: t.type,
      [u.m("without-text")]: !t.showText,
      [u.m("text-inside")]: t.textInside,
      [u.is(t.status)]: t.status
    })), N = r(() => ({
      [l.e("outer")]: !0,
      [l.is("narrow")]: t.strokeWidth < 6
    })), z = r(() => ({
      [l.e("inner")]: !0,
      [l.em("inner", "indeterminate")]: t.indeterminate,
      [l.em("inner", "striped")]: t.striped,
      [l.em("inner", "striped-flow")]: t.stripedFlow
    })), M = r(() => ({
      [g.b()]: !0,
      [g.is("narrow")]: t.strokeWidth < 6
    })), V = r(() => ({
      width: `${t.percentage}%`,
      animationDuration: `${t.duration}s`,
      backgroundColor: w(t.percentage)
    })), w = (e) => {
      var f;
      const { color: o } = t;
      if (J(o))
        return o(e);
      if (W(o))
        return o;
      {
        const n = A(o);
        for (const p of n)
          if (p.percentage > e)
            return p.color;
        return (f = n[n.length - 1]) == null ? void 0 : f.color;
      }
    }, A = (e) => {
      const o = 100 / e.length;
      return e.map((n, p) => W(n) ? {
        color: n,
        percentage: (p + 1) * o
      } : n).sort((n, p) => n.percentage - p.percentage);
    }, C = r(() => t.format(t.percentage)), k = r(
      () => (t.strokeWidth / t.width * 100).toFixed(1)
    ), b = r(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(
      `${50 - Number.parseFloat(k.value) / 2}`,
      10
    ) : 0), S = r(() => {
      const e = b.value, o = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${o ? "" : "-"}${e}
          a ${e} ${e} 0 1 1 0 ${o ? "-" : ""}${e * 2}
          a ${e} ${e} 0 1 1 0 ${o ? "" : "-"}${e * 2}
          `;
    }), h = r(() => 2 * Math.PI * b.value), y = r(() => t.type === "dashboard" ? 0.75 : 1), P = r(() => `${-1 * h.value * (1 - y.value) / 2}px`), E = r(() => ({
      strokeDasharray: `${h.value * y.value}px, ${h.value}px`,
      strokeDashoffset: P.value
    })), L = r(() => {
      let e;
      return t.color ? e = w(t.percentage) : e = $[t.status] || $.default, e;
    }), O = r(() => ({
      strokeDasharray: `${h.value * y.value * (t.percentage / 100)}px, ${h.value}px`,
      strokeDashoffset: P.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), R = r(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), U = r(() => t.status === "warning" ? K : t.type === "line" ? t.status === "success" ? Q : X : t.status === "success" ? Y : Z);
    return (e, o) => {
      const f = j("tu-icon");
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
          m("div", {
            class: i(s(N)),
            style: d({ height: `${e.strokeWidth}px` })
          }, [
            m("div", {
              class: i(s(z)),
              style: d(s(V))
            }, [
              (e.showText || e.$slots.default) && e.textInside ? (a(), c("div", {
                key: 0,
                class: i(s(l).e("innerText"))
              }, [
                x(e.$slots, "default", { percentage: e.percentage }, () => [
                  m("span", null, D(s(C)), 1)
                ])
              ], 2)) : I("", !0)
            ], 6)
          ], 6)
        ], 2)) : (a(), c("div", {
          key: 1,
          class: i(s(M)),
          style: d({ height: `${e.width}px`, width: `${e.width}px` })
        }, [
          (a(), c("svg", te, [
            m("path", {
              class: i(s(g).m("track")),
              d: s(S),
              stroke: "#c8d0e761",
              "stroke-width": s(k),
              style: d(s(E)),
              fill: "none"
            }, null, 14, se),
            m("path", {
              class: i(s(g).m("path")),
              d: s(S),
              stroke: s(L),
              "stroke-width": s(k),
              "stroke-linecap": e.strokeLinecap,
              opacity: e.percentage ? 1 : 0,
              style: d(s(O)),
              fill: "none"
            }, null, 14, re)
          ]))
        ], 6)),
        (e.showText || e.$slots.default) && !e.textInside ? (a(), c("div", {
          key: 2,
          class: i(s(u).e("text")),
          style: d({ fontSize: `${s(R)}px` })
        }, [
          x(e.$slots, "default", { percentage: e.percentage }, () => [
            e.status ? (a(), T(f, { key: 1 }, {
              default: q(() => [
                (a(), T(G(s(U))))
              ]),
              _: 1
            })) : (a(), c("span", oe, D(s(C)), 1))
          ])
        ], 6)) : I("", !0)
      ], 10, ee);
    };
  }
});
export {
  de as default
};
