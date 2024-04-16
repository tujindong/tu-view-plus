import { defineComponent as U, toRefs as O, reactive as f, computed as o, ref as q, watch as z, provide as D, openBlock as H, createElementBlock as J, Fragment as Q, renderSlot as k, createVNode as W, mergeProps as X, unref as Y, createSlots as Z, withCtx as ee } from "vue";
import { imagePreviewGroupProps as te, imagePreviewGroupEmits as re } from "./image-preview-group.mjs";
import { useMergeState as M } from "@tu-view-plus/hooks";
import { isArray as oe, isUndefined as u } from "@tu-view-plus/utils";
import ae from "./image-preview.vue.mjs";
import { PreviewGroupInjectionKey as ne } from "./constants.mjs";
const le = U({
  name: "TuImagePreviewGroup",
  inheritAttrs: !1
}), me = /* @__PURE__ */ U({
  ...le,
  props: te,
  emits: re,
  setup($, { emit: A }) {
    const G = $, p = A, { srcList: l, visible: x, defaultVisible: B, current: N, defaultCurrent: S, infinite: P } = O(G), [w, E] = M(
      B.value,
      f({
        value: x
      })
    ), y = (e) => {
      e !== w.value && (p("visible-change", e), p("update:visible", e), E(e));
    }, s = o(
      () => new Map(
        oe(l == null ? void 0 : l.value) ? l == null ? void 0 : l.value.map((e, t) => [t, { url: e, canPreview: !0 }]) : []
      )
    ), a = q(new Map(s.value || [])), i = o(() => Array.from(a.value.keys())), C = o(() => i.value.length), R = (e, t, v) => (s.value.has(e) || a.value.set(e, { url: t, canPreview: v }), function() {
      s.value.has(e) || a.value.delete(e);
    });
    z(s, () => {
      a.value = new Map(s.value || []);
    });
    const [n, T] = M(
      S.value,
      f({
        value: N
      })
    ), d = (e) => {
      e !== n.value && (p("change", e), p("update:current", e), T(e));
    }, V = o(() => i.value[n.value]), _ = (e) => {
      const t = i.value.indexOf(e);
      t !== n.value && d(t);
    }, h = o(() => {
      var e;
      return (e = a.value.get(V.value)) == null ? void 0 : e.url;
    });
    D(
      ne,
      f({
        registerImageUrl: R,
        preview: (e) => {
          y(!0), _(e);
        }
      })
    );
    const g = o(() => {
      const e = (v, m) => {
        var c;
        for (let r = v; r <= m; r++) {
          const I = i.value[r];
          if ((c = a.value.get(I)) != null && c.canPreview)
            return r;
        }
      }, t = e(n.value + 1, C.value - 1);
      return u(t) && P.value ? e(0, n.value - 1) : t;
    }), b = o(() => {
      const e = (v, m) => {
        var c;
        for (let r = v; r >= m; r--) {
          const I = i.value[r];
          if ((c = a.value.get(I)) != null && c.canPreview)
            return r;
        }
      }, t = e(n.value - 1, 0);
      return u(t) && P.value ? e(C.value - 1, n.value + 1) : t;
    }), j = o(
      () => u(b.value) ? void 0 : () => {
        !u(b.value) && d(b.value);
      }
    ), F = o(
      () => u(g.value) ? void 0 : () => {
        !u(g.value) && d(g.value);
      }
    ), K = f({
      onPrev: j,
      onNext: F
    }), L = () => {
      y(!1);
    };
    return (e, t) => (H(), J(Q, null, [
      k(e.$slots, "default"),
      W(ae, X({ "in-group": "" }, { ...e.$attrs, groupArrowProps: K }, {
        src: h.value,
        visible: Y(w),
        "mask-closable": e.maskClosable,
        closable: e.closable,
        "actions-layout": e.actionsLayout,
        "popup-container": e.popupContainer,
        "render-to-body": e.renderToBody,
        onClose: L
      }), Z({ _: 2 }, [
        e.$slots.actions ? {
          name: "actions",
          fn: ee(() => [
            k(e.$slots, "actions", { url: h.value })
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["src", "visible", "mask-closable", "closable", "actions-layout", "popup-container", "render-to-body"])
    ], 64));
  }
});
export {
  me as default
};
