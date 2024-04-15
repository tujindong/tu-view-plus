import { defineComponent as u, toRefs as x, computed as b, openBlock as n, createElementBlock as s, normalizeClass as C, unref as r, createVNode as i, withCtx as l, Fragment as g, renderList as w, createBlock as I } from "vue";
import { imagePreviewToolbarProps as h } from "./image-preview-toolbar.mjs";
import { useNamespace as L } from "@tu-view-plus/hooks";
import { RenderFunction as T } from "@tu-view-plus/constants";
import A from "./image-preview-action.vue.mjs";
import { TuIcon as B } from "../../icon/index.mjs";
const P = u({
  name: "TuImagePreviewToolbar"
}), E = /* @__PURE__ */ u({
  ...P,
  props: h,
  setup(d) {
    const m = d, f = L("image"), { actions: p, actionsLayout: o } = x(m), _ = b(() => {
      const a = new Set(o.value), c = (t) => a.has(t.key);
      return p.value.filter(c).sort((t, k) => {
        const v = o.value.indexOf(t.key), y = o.value.indexOf(k.key);
        return v > y ? 1 : -1;
      });
    });
    return (a, c) => (n(), s("div", {
      class: C(r(f).e("preview-toolbar"))
    }, [
      i(r(B), { size: "40" }, {
        default: l(() => [
          (n(!0), s(g, null, w(_.value, (e) => (n(), I(A, {
            key: e.key,
            name: e.name,
            disabled: e.disabled,
            onClick: e.onClick
          }, {
            default: l(() => [
              i(r(T), {
                "render-func": e.content
              }, null, 8, ["render-func"])
            ]),
            _: 2
          }, 1032, ["name", "disabled", "onClick"]))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
});
export {
  E as default
};
