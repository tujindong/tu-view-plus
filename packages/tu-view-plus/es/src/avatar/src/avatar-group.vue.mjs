import { defineComponent as c, ref as f, provide as d, reactive as v, toRef as t, createVNode as a, createTextVNode as s } from "vue";
import { avatarGroupProps as x } from "./avatar-group.mjs";
import { avatarGroupInjectionKey as p } from "./constants.mjs";
import { useNamespace as h } from "@tu-view-plus/hooks";
import { getAllElements as g } from "@tu-view-plus/utils";
import { TuPopover as z } from "../../popover/index.mjs";
import A from "./avatar.vue.mjs";
import "../style/avatar-group.css";
const P = /* @__PURE__ */ c({
  name: "TuAvatarGroup",
  props: x,
  setup(e, {
    slots: o
  }) {
    const u = h("avatar-group"), n = f(0);
    return d(p, v({
      shape: t(e, "shape"),
      size: t(e, "size"),
      autoFixFontSize: t(e, "autoFixFontSize"),
      zIndexAscend: t(e, "zIndexAscend"),
      total: n
    })), () => {
      var l;
      const r = g(((l = o.default) == null ? void 0 : l.call(o)) ?? []), i = e.maxCount > 0 ? r.slice(0, e.maxCount) : r, m = e.maxCount > 0 ? r.slice(e.maxCount) : [];
      return n.value !== i.length && (n.value = i.length), a("div", {
        class: u.b()
      }, [i, m.length > 0 && a(z, null, {
        default: () => [a(A, {
          class: u.e("max-count-avatar"),
          style: e.maxStyle
        }, {
          default: () => [m.length, s("..")]
        })],
        title: () => a("div", null, [m])
      })]);
    };
  }
});
export {
  P as default
};
