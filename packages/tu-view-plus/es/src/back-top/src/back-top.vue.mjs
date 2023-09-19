import { defineComponent as d, ref as b, shallowRef as s, computed as g, onMounted as B, openBlock as i, createBlock as C, Transition as S, withCtx as m, createElementBlock as y, normalizeClass as E, unref as t, normalizeStyle as w, withModifiers as x, renderSlot as N, createVNode as u, createCommentVNode as z } from "vue";
import { useThrottleFn as M, useEventListener as V } from "@vueuse/core";
import { backTopProps as $, backtopEmits as q } from "./back-top.mjs";
import { useNamespace as F } from "@tu-view-plus/hooks";
import { CaretTop as H } from "@tu-view-plus/icons-vue";
import { addUnit as p, throwError as L } from "@tu-view-plus/utils";
import { TuButton as P } from "../../button/index.mjs";
import "../style/back-top.css";
const R = ["onClick"], U = d({
  name: "TuBackTop"
}), Q = /* @__PURE__ */ d({
  ...U,
  props: $,
  emits: q,
  setup(f, { emit: v }) {
    const o = f, h = F("back-top"), n = b(!1), e = s(), r = s(), T = g(() => ({
      right: p(o.right),
      bottom: p(o.bottom)
    })), c = () => {
      e.value && (n.value = e.value.scrollTop >= o.visibleHeight);
    }, k = (l) => {
      var a;
      (a = e.value) == null || a.scrollTo({ top: 0, behavior: "smooth" }), v("click", l);
    }, _ = M(c, 300, !0);
    return V(r, "scroll", _), B(() => {
      r.value = document, e.value = document.documentElement, o.target && (e.value = document.querySelector(o.target) ?? void 0, e.value || L("TuBackTop", `target does not exist: ${o.target}`), r.value = e.value), c();
    }), (l, a) => (i(), C(S, { name: "fade-in" }, {
      default: m(() => [
        n.value ? (i(), y("div", {
          key: 0,
          class: E(t(h).b()),
          style: w(t(T)),
          onClick: x(k, ["stop"])
        }, [
          N(l.$slots, "default", {}, () => [
            u(t(P), { circle: "" }, {
              icon: m(() => [
                u(t(H))
              ]),
              _: 1
            })
          ])
        ], 14, R)) : z("", !0)
      ]),
      _: 3
    }));
  }
});
export {
  Q as default
};
