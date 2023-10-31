import { defineComponent as M, computed as s, openBlock as a, createElementBlock as u, normalizeClass as o, unref as c, createElementVNode as l, normalizeStyle as d, renderSlot as T, toDisplayString as W, createCommentVNode as y, createBlock as B, withCtx as q, resolveDynamicComponent as H } from "vue";
import { TuIcon as J } from "../../icon/index.mjs";
import { progressProps as K } from "./progress.mjs";
import { useNamespace as $ } from "@tu-view-plus/hooks";
import { isFunction as Q, isString as F } from "@tu-view-plus/utils";
import { WarningFilled as X, CircleCheck as Y, CircleClose as Z, Check as ee, Close as te } from "@tu-view-plus/icons-vue";
import "../style/progress.css";
const se = ["aria-valuenow"], re = ["id"], oe = ["stop-color"], ae = ["stop-color"], ne = ["d", "stroke", "stroke-width"], le = ["d", "stroke", "stroke-width", "stroke-linecap"], ie = { key: 0 }, ue = M({
  name: "TuProgress"
}), ke = /* @__PURE__ */ M({
  ...ue,
  props: K,
  setup(N) {
    const w = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, C = s(() => Math.floor(Math.random() * 1e4)), t = N, p = $("progress"), i = $("progress-bar"), h = $("progress-circle"), O = s(() => {
      const e = {};
      return e["--stroke-width"] = `${2 * t.strokeWidth}px`, e;
    }), _ = s(() => ({
      [p.b()]: !0,
      [p.m(t.type)]: t.type,
      [p.m("without-text")]: !t.showText,
      [p.m("text-inside")]: t.textInside,
      [p.is(t.status)]: t.status
    })), z = s(() => ({
      [i.e("outer")]: !0,
      [i.is("narrow")]: t.strokeWidth < 8
    })), V = s(() => ({
      [i.e("inner")]: !0,
      [i.em("inner", "indeterminate")]: t.indeterminate,
      [i.em("inner", "striped")]: t.striped,
      [i.em("inner", "striped-flow")]: t.stripedFlow
    })), A = s(() => ({
      [h.e("outer")]: !0,
      [h.is("narrow")]: t.strokeWidth < 8
    })), E = s(() => ({
      width: `${t.percentage}%`,
      animationDuration: `${t.duration}s`,
      backgroundColor: b(t.percentage)
    })), b = (e) => {
      var g;
      const { color: r } = t;
      if (Q(r))
        return r(e);
      if (F(r))
        return r;
      {
        const n = L(r);
        for (const f of n)
          if (f.percentage > e)
            return f.color;
        return (g = n[n.length - 1]) == null ? void 0 : g.color;
      }
    }, L = (e) => {
      const r = 100 / e.length;
      return e.map((n, f) => F(n) ? {
        color: n,
        percentage: (f + 1) * r
      } : n).sort((n, f) => n.percentage - f.percentage);
    }, S = s(() => t.format(t.percentage)), m = s(
      () => (t.strokeWidth / t.width * 100).toFixed(1)
    ), x = s(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(
      `${50 - Number.parseFloat(m.value) / 2}`,
      10
    ) : 0), P = s(() => {
      const e = x.value, r = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${r ? "" : "-"}${e}
          a ${e} ${e} 0 1 1 0 ${r ? "-" : ""}${e * 2}
          a ${e} ${e} 0 1 1 0 ${r ? "" : "-"}${e * 2}
          `;
    }), v = s(() => 2 * Math.PI * x.value), k = s(() => t.type === "dashboard" ? 0.75 : 1), D = s(() => `${-1 * v.value * (1 - k.value) / 2}px`), I = s(() => {
      let e;
      return t.color ? e = b(t.percentage) : e = w[t.status] || w.default, e;
    }), G = s(() => ({
      strokeDasharray: `${v.value * k.value}px, ${v.value}px`,
      strokeDashoffset: D.value
    })), R = s(() => ({
      strokeDasharray: `${v.value * k.value * (t.percentage / 100)}px, ${v.value}px`,
      strokeDashoffset: D.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), U = s(() => t.type === "line" ? 10 + t.strokeWidth * 0.5 : t.width * 0.111111), j = s(() => t.status === "warning" ? X : t.type === "line" ? t.status === "success" ? Y : Z : t.status === "success" ? ee : te);
    return (e, r) => (a(), u("div", {
      role: "progressbar",
      class: o(_.value),
      "aria-valuenow": e.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      e.type === "line" ? (a(), u("div", {
        key: 0,
        class: o(c(i).b())
      }, [
        l("div", {
          class: o(z.value),
          style: d({ height: `${e.strokeWidth}px` })
        }, [
          l("div", {
            class: o(V.value),
            style: d(E.value)
          }, [
            (e.showText || e.$slots.default) && e.textInside ? (a(), u("div", {
              key: 0,
              class: o(c(i).e("innerText"))
            }, [
              T(e.$slots, "default", { percentage: e.percentage }, () => [
                l("span", null, W(S.value), 1)
              ])
            ], 2)) : y("", !0)
          ], 6)
        ], 6)
      ], 2)) : (a(), u("div", {
        key: 1,
        class: o(c(h).b()),
        style: d({ height: e.width + "px", width: e.width + "px" })
      }, [
        e.type == "circle" ? (a(), u("div", {
          key: 0,
          class: o(A.value),
          style: d(O.value)
        }, null, 6)) : y("", !0),
        (a(), u("svg", {
          viewBox: " 0 0 100 100",
          class: o(c(h).e("inner"))
        }, [
          l("defs", null, [
            l("radialGradient", {
              id: `gradient-${C.value}`,
              cx: "50%",
              cy: "50%",
              r: "60%",
              fx: "50%",
              fy: "50%"
            }, [
              l("stop", {
                offset: "30%",
                "stop-color": I.value
              }, null, 8, oe),
              l("stop", {
                offset: "100%",
                "stop-color": I.value
              }, null, 8, ae)
            ], 8, re)
          ]),
          l("path", {
            class: o(c(h).m("track")),
            d: P.value,
            stroke: e.type == "dashboard" ? "#c8d0e761" : "",
            "stroke-width": m.value,
            style: d(G.value),
            fill: "none"
          }, null, 14, ne),
          l("path", {
            class: o(c(h).m("path")),
            d: P.value,
            stroke: `url(#gradient-${C.value})`,
            "stroke-width": e.percentage ? m.value : 0,
            "stroke-linecap": e.strokeLinecap,
            style: d(R.value),
            fill: "none"
          }, null, 14, le)
        ], 2))
      ], 6)),
      (e.showText || e.$slots.default) && !e.textInside ? (a(), u("div", {
        key: 2,
        class: o(c(p).e("text")),
        style: d({ fontSize: `${U.value}px` })
      }, [
        T(e.$slots, "default", { percentage: e.percentage }, () => [
          e.status ? (a(), B(c(J), { key: 1 }, {
            default: q(() => [
              (a(), B(H(j.value)))
            ]),
            _: 1
          })) : (a(), u("span", ie, W(S.value), 1))
        ])
      ], 6)) : y("", !0)
    ], 10, se));
  }
});
export {
  ke as default
};
