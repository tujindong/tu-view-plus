import { defineComponent as l, toRef as u, openBlock as n, createElementBlock as t, normalizeClass as o, Fragment as m, renderList as p, normalizeStyle as a, createCommentVNode as d } from "vue";
import { useMenuContext as i } from "./hooks/use-menu-context.mjs";
import "@tu-view-plus/utils";
import { useNamespace as c } from "@tu-view-plus/hooks";
import f from "../../../_virtual/_plugin-vue_export-helper.mjs";
const v = l({
  name: "TuMenuIndent",
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  setup() {
    const e = c("menu"), r = i();
    return {
      nsMenu: e,
      levelIndent: u(r, "levelIndent")
    };
  }
});
function M(e, r, y, C, I, $) {
  return e.level > 1 ? (n(), t("span", {
    key: 0,
    class: o(e.nsMenu.e("indent-list"))
  }, [
    (n(!0), t(m, null, p(e.level - 1, (s) => (n(), t("span", {
      key: s,
      class: o(e.nsMenu.e("indent")),
      style: a(`width: ${e.levelIndent}px`)
    }, null, 6))), 128))
  ], 2)) : d("", !0);
}
const B = /* @__PURE__ */ f(v, [["render", M]]);
export {
  B as default
};
