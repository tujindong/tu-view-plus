import { defineComponent as I, toRefs as Z, shallowRef as ee, ref as te, computed as o, onMounted as ae, openBlock as oe, createElementBlock as ne, mergeProps as re, unref as se, renderSlot as le } from "vue";
import { watermarkProps as ce } from "./watermark.mjs";
import { useNamespace as ie, useMutationObserver as ue } from "@tu-view-plus/hooks";
import { isArray as fe } from "@tu-view-plus/utils";
import { canvasToGray as ve, styleToString as me } from "../utils/index.mjs";
import "../style/watermark.css";
const pe = I({
  name: "TuWatermark"
}), ye = /* @__PURE__ */ I({
  ...pe,
  props: ce,
  setup(T) {
    const _ = ie("watermark"), a = T, { width: P, height: C, image: d, rotate: L, alpha: D, grayscale: H } = Z(a), c = window.devicePixelRatio || 1, l = ee(), v = te(/* @__PURE__ */ new Map()), g = o(() => {
      var e;
      return ((e = a.font) == null ? void 0 : e.fontSize) ?? 16;
    }), X = o(() => {
      var e;
      return ((e = a.font) == null ? void 0 : e.fontWeight) ?? "lighter";
    }), Y = o(() => {
      var e;
      return ((e = a.font) == null ? void 0 : e.fontStyle) ?? "normal";
    }), w = o(() => {
      var e;
      return ((e = a.font) == null ? void 0 : e.fontFamily) ?? "sans-serif";
    }), B = o(() => {
      var e;
      return ((e = a.font) == null ? void 0 : e.color) ?? "rgba(128, 128, 128, 0.18)";
    }), F = o(() => {
      var e;
      return ((e = a.font) == null ? void 0 : e.textAlign) ?? "center";
    }), m = o(
      () => fe(a.content) ? a.content : [a.content]
    ), p = o(() => {
      var e;
      return ((e = a.gap) == null ? void 0 : e[0]) ?? 90;
    }), h = o(() => {
      var e;
      return ((e = a.gap) == null ? void 0 : e[1]) ?? 90;
    }), x = o(() => p.value / 2), y = o(() => h.value / 2), N = o(() => {
      var e;
      return ((e = a.offset) == null ? void 0 : e[0]) ?? x.value;
    }), U = o(() => {
      var e;
      return ((e = a.offset) == null ? void 0 : e[1]) ?? y.value;
    }), O = o(() => {
      const e = N.value - x.value, t = U.value - y.value;
      return {
        position: "absolute",
        left: e > 0 ? `${e}px` : 0,
        top: t > 0 ? `${t}px` : 0,
        width: e > 0 ? `calc(100% - ${e}px)` : "100%",
        height: t > 0 ? `calc(100% - ${t}px)` : "100%",
        pointerEvents: "none",
        backgroundRepeat: a.repeat ? "repeat" : "no-repeat",
        backgroundPosition: `${e > 0 ? 0 : e}px ${t > 0 ? 0 : t}px`,
        zIndex: a.zIndex ?? 6
      };
    }), $ = o(() => a.repeat && a.staggered), G = (e, t) => {
      var n;
      if (l.value) {
        const r = v.value.get(l.value);
        r && (l.value.contains(r) && l.value.removeChild(r), v.value.delete(l.value));
        const s = document.createElement("div");
        s.setAttribute(
          "style",
          me({
            ...O.value,
            backgroundImage: `url('${e}')`,
            backgroundSize: `${t}px`
          })
        ), (n = l.value) == null || n.append(s), v.value.set(l.value, s);
      }
    }, j = (e) => {
      let t = 120, n = 28;
      if (!d.value && e.measureText) {
        e.font = `${g.value}px ${w.value}`;
        const r = m.value.map((s) => e.measureText(s).width);
        t = Math.ceil(Math.max(...r)), n = g.value * m.value.length + (m.value.length - 1) * 3;
      }
      return [P.value ?? t, C.value ?? n];
    }, b = () => {
      var E;
      const e = document.createElement("canvas"), t = e.getContext("2d");
      if (!t)
        return;
      const [n, r] = j(t), s = n * c, J = r * c, u = (p.value + n) * c, f = (h.value + r) * c, W = p.value / 2 * c, M = h.value / 2 * c, R = u / 2, z = f / 2, k = $.value ? 2 : 1, K = (p.value + n) * k;
      e.width = u * k, e.height = f * k, t.globalAlpha = D.value, t.save(), t.translate(R, z), t.rotate(Math.PI / 180 * L.value), t.translate(-R, -z);
      const A = () => {
        t.restore(), $.value && t.drawImage(
          e,
          0,
          0,
          u,
          f,
          u,
          f,
          u,
          f
        ), H.value && ve(e), G(e.toDataURL(), K), console.log("canvas.toDataURL()", e.toDataURL());
      };
      if (d.value) {
        const i = new Image();
        i.onload = () => {
          t.drawImage(i, W, M, s, J), A();
        }, i.crossOrigin = "anonymous", i.referrerPolicy = "no-referrer", i.src = d.value;
      } else {
        const i = Number(g.value) * c;
        t.font = `${Y.value} normal ${X.value} ${i}px/${r}px ${w.value}`, t.fillStyle = B.value, t.textAlign = F.value, t.textBaseline = "top", t.translate(s / 2, 0), (E = m.value) == null || E.forEach((Q, V) => {
          t.fillText(
            Q ?? "",
            W,
            M + V * (i + 3 * c)
          );
        }), A();
      }
    }, S = (e) => Array.from(v.value.values()).includes(e), q = (e) => {
      if (a.antiTamper)
        for (const t of e) {
          const n = Array.from(t.removedNodes).some(
            (s) => S(s)
          ), r = t.type === "attributes" && S(t.target);
          if (n || r) {
            b();
            break;
          }
        }
    };
    return ae(() => {
      b(), ue(l.value, q, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      });
    }), (e, t) => (oe(), ne("div", re({
      ref_key: "containerRef",
      ref: l,
      class: se(_).b(),
      style: { position: "relative", overflow: "hidden" }
    }, e.$attrs), [
      le(e.$slots, "default")
    ], 16));
  }
});
export {
  ye as default
};
