import { defineComponent as $, shallowRef as c, ref as v, computed as E, watch as R, watchEffect as W, onMounted as H, openBlock as I, createElementBlock as N, normalizeClass as S, unref as T, normalizeStyle as _, createElementVNode as q, renderSlot as L } from "vue";
import { useWindowSize as M, useElementBounding as y, useEventListener as P } from "@vueuse/core";
import { affixProps as U, affixEmits as V } from "./affix.mjs";
import { addUnit as Y, throwError as j, getScrollContainer as D } from "@tu-view-plus/utils";
import { useNamespace as F } from "@tu-view-plus/hooks";
import "../style/affix.css";
const G = $({
  name: "TuAffix"
}), te = /* @__PURE__ */ $({
  ...G,
  props: U,
  emits: V,
  setup(b, { expose: z, emit: B }) {
    const e = b, m = B, p = F("affix"), a = c(), f = c(), l = c(), o = v(!1), d = v(0), s = v(0), { height: r } = M(), {
      height: n,
      width: h,
      top: x,
      bottom: g,
      update: i
    } = y(f, { windowScroll: !1 }), u = y(a), C = E(() => ({
      height: o.value ? `${n.value}px` : "",
      width: o.value ? `${h.value}px` : ""
    })), k = E(() => {
      if (!o.value)
        return {};
      const t = e.offset ? Y(e.offset) : 0;
      return {
        height: `${n.value}px`,
        width: `${h.value}px`,
        top: e.position === "top" ? t : "",
        bottom: e.position === "bottom" ? t : "",
        transform: s.value ? `translateY(${s.value}px)` : "",
        zIndex: e.zIndex
      };
    }), w = () => {
      if (l.value)
        if (d.value = l.value instanceof Window ? document.documentElement.scrollTop : l.value.scrollTop || 0, e.position === "top")
          if (e.target) {
            const t = u.bottom.value - e.offset - n.value;
            o.value = e.offset > x.value && u.bottom.value > 0, s.value = t < 0 ? t : 0;
          } else
            o.value = e.offset > x.value;
        else if (e.target) {
          const t = r.value - u.top.value - e.offset - n.value;
          o.value = r.value - e.offset < g.value && r.value > u.top.value, s.value = t < 0 ? -t : 0;
        } else
          o.value = r.value - e.offset < g.value;
    }, A = () => {
      i(), m("scroll", {
        scrollTop: d.value,
        fixed: o.value
      });
    };
    return R(o, (t) => m("change", t)), P(l, "scroll", A), W(w), H(() => {
      e.target ? (a.value = document.querySelector(e.target) ?? void 0, a.value || j("TuAffix", `Target is not existed: ${e.target}`)) : a.value = document.documentElement, l.value = D(f.value, !0), i();
    }), z({
      update: w,
      updateRoot: i
    }), (t, J) => (I(), N("div", {
      ref_key: "root",
      ref: f,
      class: S(T(p).b()),
      style: _(C.value)
    }, [
      q("div", {
        class: S({ [T(p).m("fixed")]: o.value }),
        style: _(k.value)
      }, [
        L(t.$slots, "default")
      ], 6)
    ], 6));
  }
});
export {
  te as default
};
