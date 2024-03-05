import { defineComponent as u, toRefs as x, computed as b, openBlock as n, createElementBlock as s, normalizeClass as C, unref as r, createVNode as i, withCtx as l, Fragment as w, renderList as h, createBlock as I } from "vue";
import { previewToolbarProps as L } from "./preview-toolbar.mjs";
import { useNamespace as T } from "@tu-view-plus/hooks";
import { RenderFunction as g } from "@tu-view-plus/constants";
import A from "./preview-action.vue.mjs";
import { TuIcon as B } from "../../icon/index.mjs";
const z = u({
  name: "TuPreviewToolbar"
}), E = /* @__PURE__ */ u({
  ...z,
  props: L,
  setup(d) {
    const f = d, m = T("image"), { actions: p, actionsLayout: o } = x(f), _ = b(() => {
      const a = new Set(o.value), c = (t) => a.has(t.key);
      return p.value.filter(c).sort((t, k) => {
        const v = o.value.indexOf(t.key), y = o.value.indexOf(k.key);
        return v > y ? 1 : -1;
      });
    });
    return (a, c) => (n(), s("div", {
      class: C(r(m).e("preview-toolbar"))
    }, [
      i(r(B), { size: "40" }, {
        default: l(() => [
          (n(!0), s(w, null, h(_.value, (e) => (n(), I(A, {
            key: e.key,
            name: e.name,
            disabled: e.disabled,
            onClick: e.onClick
          }, {
            default: l(() => [
              i(r(g), {
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
