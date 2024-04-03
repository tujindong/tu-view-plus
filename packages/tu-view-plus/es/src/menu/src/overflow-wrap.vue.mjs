import { defineComponent as I, ref as M, onMounted as V, onUnmounted as L, createVNode as N, cloneVNode as x, mergeProps as E, createTextVNode as T } from "vue";
import { useNamespace as F } from "@tu-view-plus/hooks";
import { getStyle as R, unFragment as y } from "@tu-view-plus/utils";
import z from "./sub-menu.vue.mjs";
import "../style/menu.css";
const H = 10;
function W(l) {
  return l && +l.getBoundingClientRect().width.toFixed(2);
}
function _(l) {
  const p = Number(l.replace("px", ""));
  return Number.isNaN(p) ? 0 : p;
}
const U = /* @__PURE__ */ I({
  name: "TuOverflowWrap",
  setup(l, {
    attrs: p,
    slots: b
  }) {
    const a = F("menu"), g = a.e("sub-menu"), O = a.e("sub-menu-mirror"), m = M(), o = M(null), f = M();
    function S() {
      const n = m.value, w = W(n), u = [].slice.call(n.children);
      let r = 0, e = 0, s = 0;
      for (let i = 0; i < u.length; i++) {
        const t = u[i], d = t.className.split(" "), c = d.indexOf(g) > -1, h = d.indexOf(O) > -1;
        if (c)
          continue;
        const v = W(t) + _(R(t, "marginLeft")) + _(R(t, "marginRight"));
        if (h) {
          s = v;
          continue;
        }
        if (e += v, e + s + H > w) {
          o.value = r - 1;
          return;
        }
        r++;
      }
      o.value = null;
    }
    return V(() => {
      S(), f.value = new ResizeObserver((n) => {
        n.forEach(S);
      }), m.value && f.value.observe(m.value);
    }), L(() => {
      f.value && f.value.disconnect();
    }), () => {
      const n = (u, r) => {
        const {
          isMirror: e = !1,
          props: s = {}
        } = r || {};
        return N(z, E({
          key: `__tu-menu-overflow-sub-menu${e ? "-mirror" : ""}`,
          class: e ? O : g
        }, s), {
          title: () => N("span", null, [T("...")]),
          default: () => u
        });
      }, w = () => {
        var t;
        const u = ((t = b.default) == null ? void 0 : t.call(b)) || [], r = y(u);
        let e = null;
        const s = n(null, {
          isMirror: !0
        }), i = r.map((d, c) => {
          const h = x(d, o.value !== null && c > o.value ? {
            class: a.e("hidden-menu-item")
          } : {
            class: ""
          });
          if (o.value !== null && c === o.value + 1) {
            const v = r.slice(c).map((C) => x(C));
            e = n(v);
          }
          return h;
        });
        return [s, ...i, e];
      };
      return N("div", {
        class: a.e("overflow-wrap"),
        ref: m
      }, [w()]);
    };
  }
});
export {
  U as default
};
