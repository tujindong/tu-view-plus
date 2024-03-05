import { defineComponent as u, computed as m, createVNode as i, mergeProps as f, isVNode as d } from "vue";
import { previewActionProps as b } from "./preview-action.mjs";
import { useNamespace as v } from "@tu-view-plus/hooks";
import { TuTooltip as w } from "../../tooltip/index.mjs";
function g(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !d(e);
}
const P = /* @__PURE__ */ u({
  name: "TuPreviewAction",
  props: b,
  inheritAttrs: !1,
  setup(e, {
    slots: n,
    attrs: p
  }) {
    const t = v("image"), l = m(() => ({
      [t.e("preview-toolbar-action")]: !0,
      [t.em("preview-toolbar-action", "disabled")]: e.disabled
    }));
    return () => {
      var c;
      const {
        name: a
      } = e, r = (c = n.default) == null ? void 0 : c.call(n);
      if (!r || !r.length)
        return null;
      const o = i("div", f({
        class: l.value,
        onMousedown: (s) => s.preventDefault()
      }, p), [i("span", {
        class: t.e("preview-toolbar-action-content")
      }, [r])]);
      return a ? i(w, {
        class: t.e("preview-toolbar-action-tooltip"),
        content: a
      }, g(o) ? o : {
        default: () => [o]
      }) : o;
    };
  }
});
export {
  P as default
};
