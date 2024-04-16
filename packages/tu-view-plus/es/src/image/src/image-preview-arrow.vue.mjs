import { defineComponent as f, computed as i, openBlock as c, createElementBlock as g, normalizeClass as s, unref as r, createElementVNode as m, createVNode as n, withCtx as p } from "vue";
import { imagePreviewArrowProps as C } from "./image-preview-arrow.mjs";
import { useNamespace as N } from "@tu-view-plus/hooks";
import { TuIcon as u } from "../../icon/index.mjs";
import { ArrowLeft as P, ArrowRight as I } from "@tu-view-plus/icons-vue";
const k = f({
  name: "TuImagePreviewArrow"
}), D = /* @__PURE__ */ f({
  ...k,
  props: C,
  setup(v) {
    const l = v, e = N("image"), w = i(() => ({
      [e.e("preview-arrow-left")]: !0,
      [e.em("preview-arrow-left", "disabled")]: !l.onPrev
    })), d = i(() => ({
      [e.e("preview-arrow-right")]: !0,
      [e.em("preview-arrow-right", "disabled")]: !l.onNext
    }));
    return (o, t) => (c(), g("div", {
      class: s(r(e).e("preview-arrow"))
    }, [
      m("div", {
        class: s(w.value),
        onClick: t[0] || (t[0] = (a) => {
          a.preventDefault(), o.onPrev && o.onPrev();
        })
      }, [
        n(r(u), null, {
          default: p(() => [
            n(r(P))
          ]),
          _: 1
        })
      ], 2),
      m("div", {
        class: s(d.value),
        onClick: t[1] || (t[1] = (a) => {
          a.preventDefault(), o.onNext && o.onNext();
        })
      }, [
        n(r(u), null, {
          default: p(() => [
            n(r(I))
          ]),
          _: 1
        })
      ], 2)
    ], 2));
  }
});
export {
  D as default
};
