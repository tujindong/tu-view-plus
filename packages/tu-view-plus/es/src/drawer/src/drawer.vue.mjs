import { defineComponent as b, toRefs as B, ref as u, computed as a, openBlock as n, createBlock as d, unref as e, withCtx as m, Teleport as D, withDirectives as c, createElementBlock as p, mergeProps as x, createVNode as I, Transition as N, normalizeClass as P, vShow as f, createCommentVNode as v } from "vue";
import { drawerProps as V, drawerEmits as E } from "./drawer.mjs";
import { TuOnlyClient as M } from "../../only-client/index.mjs";
import { useNamespace as C, useTeleportContainer as O, usePopupManager as S } from "@tu-view-plus/hooks";
import "../style/drawer.css";
const A = b({
  name: "TuDrawer",
  inheritAttrs: !1
}), J = /* @__PURE__ */ b({
  ...A,
  props: V,
  emits: E,
  setup(k, { emit: F }) {
    const r = k;
    C("drawer");
    const i = C("drawer-container"), { popupContainer: w } = B(r), h = u(r.defaultVisible), t = a(() => r.visible ?? h.value), l = u(t.value), { teleportContainer: y, containerRef: s } = O({
      popupContainer: w,
      visible: t
    }), { zIndex: T, isLastDialog: L } = S("dialog", {
      visible: t
    }), _ = a(() => (s == null ? void 0 : s.value) === document.body), g = a(() => _.value ? { zIndex: T.value } : { zIndex: "inherit", position: "absolute" }), z = (o) => {
      r.maskClosable;
    };
    return (o, R) => (n(), d(e(M), null, {
      default: m(() => [
        (n(), d(D, {
          to: e(y),
          disabled: !o.renderToBody
        }, [
          !o.unmountOnClose || e(t) || l.value ? c((n(), p("div", x({
            key: 0,
            class: e(i).b(),
            style: e(g)
          }, o.$attrs), [
            I(N, { name: "fade-drawer" }, {
              default: m(() => [
                o.mask ? c((n(), p("div", {
                  key: 0,
                  class: P(e(i).e("mask")),
                  onClick: z
                }, null, 2)), [
                  [f, e(t)]
                ]) : v("", !0)
              ]),
              _: 1
            })
          ], 16)), [
            [f, e(t) || l.value]
          ]) : v("", !0)
        ], 8, ["to", "disabled"]))
      ]),
      _: 1
    }));
  }
});
export {
  J as default
};
