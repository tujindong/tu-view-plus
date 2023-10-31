import { defineComponent as d, ref as g, shallowRef as s, computed as B, onMounted as C, openBlock as i, createBlock as S, Transition as y, withCtx as m, createElementBlock as E, normalizeClass as w, unref as a, normalizeStyle as x, withModifiers as N, renderSlot as z, createVNode as u, createCommentVNode as M } from "vue";
import { useThrottleFn as V, useEventListener as $ } from "@vueuse/core";
import { backTopProps as q, backtopEmits as F } from "./back-top.mjs";
import { useNamespace as H } from "@tu-view-plus/hooks";
import { CaretTop as L } from "@tu-view-plus/icons-vue";
import { addUnit as p, throwError as P } from "@tu-view-plus/utils";
import { TuButton as R } from "../../button/index.mjs";
import "../style/back-top.css";
const U = ["onClick"], j = d({
  name: "TuBackTop"
}), W = /* @__PURE__ */ d({
  ...j,
  props: q,
  emits: F,
  setup(f, { emit: v }) {
    const o = f, h = v, T = H("back-top"), n = g(!1), e = s(), t = s(), k = B(() => ({
      right: p(o.right),
      bottom: p(o.bottom)
    })), c = () => {
      e.value && (n.value = e.value.scrollTop >= o.visibleHeight);
    }, _ = (r) => {
      var l;
      (l = e.value) == null || l.scrollTo({ top: 0, behavior: "smooth" }), h("click", r);
    }, b = V(c, 300, !0);
    return $(t, "scroll", b), C(() => {
      t.value = document, e.value = document.documentElement, o.target && (e.value = document.querySelector(o.target) ?? void 0, e.value || P("TuBackTop", `target does not exist: ${o.target}`), t.value = e.value), c();
    }), (r, l) => (i(), S(y, { name: "fade-in" }, {
      default: m(() => [
        n.value ? (i(), E("div", {
          key: 0,
          class: w(a(T).b()),
          style: x(k.value),
          onClick: N(_, ["stop"])
        }, [
          z(r.$slots, "default", {}, () => [
            u(a(R), { circle: "" }, {
              icon: m(() => [
                u(a(L))
              ]),
              _: 1
            })
          ])
        ], 14, U)) : M("", !0)
      ]),
      _: 3
    }));
  }
});
export {
  W as default
};
