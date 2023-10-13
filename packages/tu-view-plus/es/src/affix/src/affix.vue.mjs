import { defineComponent as $, shallowRef as v, ref as d, computed as S, watch as A, watchEffect as R, onMounted as W, openBlock as H, createElementBlock as I, normalizeClass as T, unref as f, normalizeStyle as _, createElementVNode as N, renderSlot as q } from "vue";
import { useWindowSize as L, useElementBounding as y, useEventListener as M } from "@vueuse/core";
import { affixProps as P, affixEmits as U } from "./affix.mjs";
import { addUnit as V, throwError as Y, getScrollContainer as j } from "@tu-view-plus/utils";
import { useNamespace as D } from "@tu-view-plus/hooks";
import "../style/affix.css";
const F = $({
  name: "TuAffix"
}), ee = /* @__PURE__ */ $({
  ...F,
  props: P,
  emits: U,
  setup(b, { expose: z, emit: p }) {
    const e = b, m = D("affix"), a = v(), i = v(), l = v(), o = d(!1), h = d(0), r = d(0), { height: s } = L(), {
      height: n,
      width: x,
      top: g,
      bottom: w,
      update: c
    } = y(i, { windowScroll: !1 }), u = y(a), B = S(() => ({
      height: o.value ? `${n.value}px` : "",
      width: o.value ? `${x.value}px` : ""
    })), C = S(() => {
      if (!o.value)
        return {};
      const t = e.offset ? V(e.offset) : 0;
      return {
        height: `${n.value}px`,
        width: `${x.value}px`,
        top: e.position === "top" ? t : "",
        bottom: e.position === "bottom" ? t : "",
        transform: r.value ? `translateY(${r.value}px)` : "",
        zIndex: e.zIndex
      };
    }), E = () => {
      if (l.value)
        if (h.value = l.value instanceof Window ? document.documentElement.scrollTop : l.value.scrollTop || 0, e.position === "top")
          if (e.target) {
            const t = u.bottom.value - e.offset - n.value;
            o.value = e.offset > g.value && u.bottom.value > 0, r.value = t < 0 ? t : 0;
          } else
            o.value = e.offset > g.value;
        else if (e.target) {
          const t = s.value - u.top.value - e.offset - n.value;
          o.value = s.value - e.offset < w.value && s.value > u.top.value, r.value = t < 0 ? -t : 0;
        } else
          o.value = s.value - e.offset < w.value;
    }, k = () => {
      c(), p("scroll", {
        scrollTop: h.value,
        fixed: o.value
      });
    };
    return A(o, (t) => p("change", t)), M(l, "scroll", k), R(E), W(() => {
      e.target ? (a.value = document.querySelector(e.target) ?? void 0, a.value || Y("TuAffix", `Target is not existed: ${e.target}`)) : a.value = document.documentElement, l.value = j(i.value, !0), c();
    }), z({
      update: E,
      updateRoot: c
    }), (t, G) => (H(), I("div", {
      ref_key: "root",
      ref: i,
      class: T(f(m).b()),
      style: _(f(B))
    }, [
      N("div", {
        class: T({ [f(m).m("fixed")]: o.value }),
        style: _(f(C))
      }, [
        q(t.$slots, "default")
      ], 6)
    ], 6));
  }
});
export {
  ee as default
};
