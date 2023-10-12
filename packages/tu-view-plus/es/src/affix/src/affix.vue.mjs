import { defineComponent as y, shallowRef as c, ref as v, computed as E, watch as k, watchEffect as A, onMounted as R, openBlock as W, createElementBlock as H, normalizeClass as S, unref as f, normalizeStyle as T, createElementVNode as I, renderSlot as N } from "vue";
import { useWindowSize as q, useElementBounding as _, useEventListener as L } from "@vueuse/core";
import { affixProps as M, affixEmits as P } from "./affix.mjs";
import { addUnit as U, throwError as V, getScrollContainer as Y } from "@tu-view-plus/utils";
import { useNamespace as j } from "@tu-view-plus/hooks";
import "../style/affix.css";
const D = y({
  name: "TuAffix"
}), Z = /* @__PURE__ */ y({
  ...D,
  props: M,
  emits: P,
  setup($, { emit: d }) {
    const e = $, p = j("affix"), a = c(), i = c(), l = c(), o = v(!1), m = v(0), r = v(0), { height: s } = q(), {
      height: n,
      width: h,
      top: x,
      bottom: g,
      update: w
    } = _(i, { windowScroll: !1 }), u = _(a), b = E(() => ({
      height: o.value ? `${n.value}px` : "",
      width: o.value ? `${h.value}px` : ""
    })), z = E(() => {
      if (!o.value)
        return {};
      const t = e.offset ? U(e.offset) : 0;
      return {
        height: `${n.value}px`,
        width: `${h.value}px`,
        top: e.position === "top" ? t : "",
        bottom: e.position === "bottom" ? t : "",
        transform: r.value ? `translateY(${r.value}px)` : "",
        zIndex: e.zIndex
      };
    }), B = () => {
      if (l.value)
        if (m.value = l.value instanceof Window ? document.documentElement.scrollTop : l.value.scrollTop || 0, e.position === "top")
          if (e.target) {
            const t = u.bottom.value - e.offset - n.value;
            o.value = e.offset > x.value && u.bottom.value > 0, r.value = t < 0 ? t : 0;
          } else
            o.value = e.offset > x.value;
        else if (e.target) {
          const t = s.value - u.top.value - e.offset - n.value;
          o.value = s.value - e.offset < g.value && s.value > u.top.value, r.value = t < 0 ? -t : 0;
        } else
          o.value = s.value - e.offset < g.value;
    }, C = () => {
      w(), d("scroll", {
        scrollTop: m.value,
        fixed: o.value
      });
    };
    return k(o, (t) => d("change", t)), L(l, "scroll", C), A(B), R(() => {
      e.target ? (a.value = document.querySelector(e.target) ?? void 0, a.value || V("TuAffix", `Target is not existed: ${e.target}`)) : a.value = document.documentElement, l.value = Y(i.value, !0), w();
    }), (t, F) => (W(), H("div", {
      ref_key: "root",
      ref: i,
      class: S(f(p).b()),
      style: T(f(b))
    }, [
      I("div", {
        class: S({ [f(p).m("fixed")]: o.value }),
        style: T(f(z))
      }, [
        N(t.$slots, "default")
      ], 6)
    ], 6));
  }
});
export {
  Z as default
};
