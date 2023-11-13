import { defineComponent as c, ref as v, provide as d, reactive as f, toRef as t, createVNode as a, resolveComponent as s, createTextVNode as x } from "vue";
import { avatarGroupProps as p } from "./avatar-group.mjs";
import { avatarGroupInjectionKey as h } from "./constants.mjs";
import { useNamespace as g } from "@tu-view-plus/hooks";
import { getAllElements as z } from "@tu-view-plus/utils";
import { TuPopover as C } from "../../popover/index.mjs";
import "../style/avatar-group.css";
const P = /* @__PURE__ */ c({
  name: "TuAvatarGroup",
  props: p,
  setup(e, {
    slots: o
  }) {
    const m = g("avatar-group"), n = v(0);
    return d(h, f({
      shape: t(e, "shape"),
      size: t(e, "size"),
      autoFixFontSize: t(e, "autoFixFontSize"),
      zIndexAscend: t(e, "zIndexAscend"),
      total: n
    })), () => {
      var l;
      const r = z(((l = o.default) == null ? void 0 : l.call(o)) ?? []), u = e.maxCount > 0 ? r.slice(0, e.maxCount) : r, i = e.maxCount > 0 ? r.slice(e.maxCount) : [];
      return n.value !== u.length && (n.value = u.length), a("div", {
        class: m.b()
      }, [u, i.length > 0 && a(C, null, {
        default: () => [a(s("tu-avatar"), {
          class: m.e("max-count-avatar"),
          style: e.maxStyle
        }, {
          default: () => [i.length, x("..")]
        })],
        title: () => a("div", null, [i])
      })]);
    };
  }
});
export {
  P as default
};
