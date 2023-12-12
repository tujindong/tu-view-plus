import { defineComponent as N, inject as p, ref as s, onMounted as A, onBeforeUnmount as E, onUpdated as y, watch as F, computed as M, createVNode as b, Fragment as B, nextTick as O } from "vue";
import { useResizeObserver as P } from "@vueuse/core";
import { throwError as T } from "@tu-view-plus/utils";
import { useNamespace as C } from "@tu-view-plus/hooks";
import { formContextKey as I, formItemContextKey as K } from "./constants.mjs";
const W = "TuLabelWrap", S = /* @__PURE__ */ N({
  name: W,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(o, {
    slots: i
  }) {
    const t = p(I, void 0), n = p(K);
    n || T(W, "usage: <tu-form-item><label-wrap /></tu-form-item>");
    const L = C("form-item"), r = s(), u = s(0), g = () => {
      var e;
      if ((e = r.value) != null && e.firstElementChild) {
        const a = window.getComputedStyle(r.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(a));
      } else
        return 0;
    }, m = (e = "update") => {
      O(() => {
        i.default && o.isAutoWidth && (e === "update" ? u.value = g() : e === "remove" && (t == null || t.deregisterLabelWidth(u.value)));
      });
    }, d = () => m("update");
    return A(() => {
      d();
    }), E(() => {
      m("remove");
    }), y(() => d()), F(u, (e, a) => {
      o.updateAll && (t == null || t.registerLabelWidth(e, a));
    }), P(M(() => {
      var e;
      return ((e = r.value) == null ? void 0 : e.firstElementChild) ?? null;
    }), d), () => {
      var a, f;
      if (!i)
        return null;
      const {
        isAutoWidth: e
      } = o;
      if (e) {
        const l = t == null ? void 0 : t.autoLabelWidth, v = n == null ? void 0 : n.hasLabel, c = {};
        if (v && l && l !== "auto") {
          const h = Math.max(0, Number.parseInt(l, 10) - u.value), w = t.labelPosition === "left" ? "marginRight" : "marginLeft";
          h && (c[w] = `${h}px`);
        }
        return b("div", {
          ref: r,
          class: [L.e("item")],
          style: c
        }, [(a = i.default) == null ? void 0 : a.call(i)]);
      } else
        return b(B, {
          ref: r
        }, [(f = i.default) == null ? void 0 : f.call(i)]);
    };
  }
});
export {
  S as default
};
