import { defineComponent as v, ref as d, provide as s, reactive as f, toRef as t, createVNode as a, resolveComponent as c, createTextVNode as x } from "vue";
import { avatarGroupProps as p } from "./avatar-group.mjs";
import { avatarGroupInjectionKey as h } from "./constants.mjs";
import { useNamespace as g } from "@tu-view-plus/hooks";
import { getAllElements as z } from "@tu-view-plus/utils";
import "../style/avatar-group.css";
const N = /* @__PURE__ */ v({
  name: "TuAvatarGroup",
  props: p,
  setup(e, {
    slots: n
  }) {
    const m = g("avatar-group"), o = d(0);
    return s(h, f({
      shape: t(e, "shape"),
      size: t(e, "size"),
      autoFixFontSize: t(e, "autoFixFontSize"),
      zIndexAscend: t(e, "zIndexAscend"),
      total: o
    })), () => {
      var l;
      const r = z(((l = n.default) == null ? void 0 : l.call(n)) ?? []), u = e.maxCount > 0 ? r.slice(0, e.maxCount) : r, i = e.maxCount > 0 ? r.slice(e.maxCount) : [];
      return o.value !== u.length && (o.value = u.length), a("div", {
        class: m.b()
      }, [u, i.length > 0 && a(c("tu-popover"), null, {
        default: () => [a(c("tu-avatar"), {
          class: m.e("max-count-avatar"),
          style: e.maxStyle
        }, {
          default: () => [x("+"), i.length]
        })],
        content: () => a("div", null, [i])
      })]);
    };
  }
});
export {
  N as default
};
