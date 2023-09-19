import { defineComponent as M, computed as r, openBlock as a, createElementBlock as u, normalizeClass as n, unref as s, createElementVNode as l, normalizeStyle as d, renderSlot as T, toDisplayString as W, createCommentVNode as v, createBlock as B, withCtx as q, resolveDynamicComponent as H } from "vue";
import { TuIcon as J } from "../../icon/index.mjs";
import { progressProps as K } from "./progress.mjs";
import { useNamespace as $ } from "@tu-view-plus/hooks";
import { isFunction as Q, isString as F } from "@tu-view-plus/utils";
import { WarningFilled as X, CircleCheck as Y, CircleClose as Z, Check as ee, Close as te } from "@tu-view-plus/icons-vue";
import "../style/progress.css";
const se = ["aria-valuenow"], re = ["id"], oe = ["stop-color"], ne = ["stop-color"], ae = ["d", "stroke", "stroke-width"], ie = ["d", "stroke", "stroke-width", "stroke-linecap"], le = { key: 0 }, ce = M({
  name: "TuProgress"
}), ge = /* @__PURE__ */ M({
  ...ce,
  props: K,
  setup(N) {
    const t = N, w = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, C = r(() => Math.floor(Math.random() * 1e4)), p = $("progress"), c = $("progress-bar"), h = $("progress-circle"), O = r(() => {
      const e = {};
      return e["--stroke-width"] = `${2 * t.strokeWidth}px`, e;
    }), _ = r(() => ({
      [p.b()]: !0,
      [p.m(t.type)]: t.type,
      [p.m("without-text")]: !t.showText,
      [p.m("text-inside")]: t.textInside,
      [p.is(t.status)]: t.status
    })), z = r(() => ({
      [c.e("outer")]: !0,
      [c.is("narrow")]: t.strokeWidth < 8
    })), V = r(() => ({
      [c.e("inner")]: !0,
      [c.em("inner", "indeterminate")]: t.indeterminate,
      [c.em("inner", "striped")]: t.striped,
      [c.em("inner", "striped-flow")]: t.stripedFlow
    })), A = r(() => ({
      [h.e("outer")]: !0,
      [h.is("narrow")]: t.strokeWidth < 8
    })), E = r(() => ({
      width: `${t.percentage}%`,
      animationDuration: `${t.duration}s`,
      backgroundColor: b(t.percentage)
    })), b = (e) => {
      var y;
      const { color: o } = t;
      if (Q(o))
        return o(e);
      if (F(o))
        return o;
      {
        const i = L(o);
        for (const f of i)
          if (f.percentage > e)
            return f.color;
        return (y = i[i.length - 1]) == null ? void 0 : y.color;
      }
    }, L = (e) => {
      const o = 100 / e.length;
      return e.map((i, f) => F(i) ? {
        color: i,
        percentage: (f + 1) * o
      } : i).sort((i, f) => i.percentage - f.percentage);
    }, S = r(() => t.format(t.percentage)), k = r(
      () => (t.strokeWidth / t.width * 100).toFixed(1)
    ), x = r(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(
      `${50 - Number.parseFloat(k.value) / 2}`,
      10
    ) : 0), P = r(() => {
      const e = x.value, o = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${o ? "" : "-"}${e}
          a ${e} ${e} 0 1 1 0 ${o ? "-" : ""}${e * 2}
          a ${e} ${e} 0 1 1 0 ${o ? "" : "-"}${e * 2}
          `;
    }), m = r(() => 2 * Math.PI * x.value), g = r(() => t.type === "dashboard" ? 0.75 : 1), D = r(() => `${-1 * m.value * (1 - g.value) / 2}px`), I = r(() => {
      let e;
      return t.color ? e = b(t.percentage) : e = w[t.status] || w.default, e;
    }), G = r(() => ({
      strokeDasharray: `${m.value * g.value}px, ${m.value}px`,
      strokeDashoffset: D.value
    })), R = r(() => ({
      strokeDasharray: `${m.value * g.value * (t.percentage / 100)}px, ${m.value}px`,
      strokeDashoffset: D.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), U = r(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), j = r(() => t.status === "warning" ? X : t.type === "line" ? t.status === "success" ? Y : Z : t.status === "success" ? ee : te);
    return (e, o) => (a(), u("div", {
      role: "progressbar",
      class: n(s(_)),
      "aria-valuenow": e.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      e.type === "line" ? (a(), u("div", {
        key: 0,
        class: n(s(c).b())
      }, [
        l("div", {
          class: n(s(z)),
          style: d({ height: `${e.strokeWidth}px` })
        }, [
          l("div", {
            class: n(s(V)),
            style: d(s(E))
          }, [
            (e.showText || e.$slots.default) && e.textInside ? (a(), u("div", {
              key: 0,
              class: n(s(c).e("innerText"))
            }, [
              T(e.$slots, "default", { percentage: e.percentage }, () => [
                l("span", null, W(s(S)), 1)
              ])
            ], 2)) : v("", !0)
          ], 6)
        ], 6)
      ], 2)) : (a(), u("div", {
        key: 1,
        class: n(s(h).b()),
        style: d({ height: e.width + "px", width: e.width + "px" })
      }, [
        e.type == "circle" ? (a(), u("div", {
          key: 0,
          class: n(s(A)),
          style: d(s(O))
        }, null, 6)) : v("", !0),
        (a(), u("svg", {
          viewBox: " 0 0 100 100",
          class: n(s(h).e("inner"))
        }, [
          l("defs", null, [
            l("radialGradient", {
              id: `gradient-${s(C)}`,
              cx: "50%",
              cy: "50%",
              r: "60%",
              fx: "50%",
              fy: "50%"
            }, [
              l("stop", {
                offset: "30%",
                "stop-color": s(I)
              }, null, 8, oe),
              l("stop", {
                offset: "100%",
                "stop-color": s(I)
              }, null, 8, ne)
            ], 8, re)
          ]),
          l("path", {
            class: n(s(h).m("track")),
            d: s(P),
            stroke: e.type == "dashboard" ? "#c8d0e761" : "",
            "stroke-width": s(k),
            style: d(s(G)),
            fill: "none"
          }, null, 14, ae),
          l("path", {
            class: n(s(h).m("path")),
            d: s(P),
            stroke: `url(#gradient-${s(C)})`,
            "stroke-width": e.percentage ? s(k) : 0,
            "stroke-linecap": e.strokeLinecap,
            style: d(s(R)),
            fill: "none"
          }, null, 14, ie)
        ], 2))
      ], 6)),
      (e.showText || e.$slots.default) && !e.textInside ? (a(), u("div", {
        key: 2,
        class: n(s(p).e("text")),
        style: d({ fontSize: `${s(U)}px` })
      }, [
        T(e.$slots, "default", { percentage: e.percentage }, () => [
          e.status ? (a(), B(s(J), { key: 1 }, {
            default: q(() => [
              (a(), B(H(s(j))))
            ]),
            _: 1
          })) : (a(), u("span", le, W(s(S)), 1))
        ])
      ], 6)) : v("", !0)
    ], 10, se));
  }
});
export {
  ge as default
};
