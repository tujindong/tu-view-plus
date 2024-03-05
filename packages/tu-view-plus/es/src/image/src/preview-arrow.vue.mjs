import { defineComponent as f, computed as i, openBlock as c, createElementBlock as C, normalizeClass as l, unref as r, createElementVNode as p, createVNode as n, withCtx as m } from "vue";
import { previewArrowProps as g } from "./preview-arrow.mjs";
import { useNamespace as N } from "@tu-view-plus/hooks";
import { TuIcon as u } from "../../icon/index.mjs";
import { ArrowLeft as P, ArrowRight as k } from "@tu-view-plus/icons-vue";
const A = f({
  name: "TuPreviewArrow"
}), D = /* @__PURE__ */ f({
  ...A,
  props: g,
  setup(v) {
    const a = v, e = N("image"), w = i(() => ({
      [e.e("preview-arrow-left")]: !0,
      [e.em("preview-arrow-left", "disabled")]: !a.onPrev
    })), d = i(() => ({
      [e.e("preview-arrow-right")]: !0,
      [e.em("preview-arrow-right", "disabled")]: !a.onNext
    }));
    return (o, t) => (c(), C("div", {
      class: l(r(e).e("preview-arrow"))
    }, [
      p("div", {
        class: l(w.value),
        onClick: t[0] || (t[0] = (s) => {
          s.preventDefault(), o.onPrev && o.onPrev();
        })
      }, [
        n(r(u), null, {
          default: m(() => [
            n(r(P))
          ]),
          _: 1
        })
      ], 2),
      p("div", {
        class: l(d.value),
        onClick: t[1] || (t[1] = (s) => {
          s.preventDefault(), o.onNext && o.onNext();
        })
      }, [
        n(r(u), null, {
          default: m(() => [
            n(r(k))
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
