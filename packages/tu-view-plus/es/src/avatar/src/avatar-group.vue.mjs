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
    const l = g("avatar-group"), o = d(0);
    return s(h, f({
      shape: t(e, "shape"),
      size: t(e, "size"),
      autoFixFontSize: t(e, "autoFixFontSize"),
      zIndexAscend: t(e, "zIndexAscend"),
      total: o
    })), () => {
      var m;
      const r = z(((m = n.default) == null ? void 0 : m.call(n)) ?? []), u = e.maxCount > 0 ? r.slice(0, e.maxCount) : r, i = e.maxCount > 0 ? r.slice(e.maxCount) : [];
      return o.value !== u.length && (o.value = u.length), a("div", {
        class: l.b()
      }, [u, i.length > 0 && a(c("tu-popover"), null, {
        default: () => [a(c("tu-avatar"), {
          class: l.e("max-count-avatar"),
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
  N as default
};
