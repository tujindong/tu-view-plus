import { defineComponent as u, toRefs as v, ref as c, computed as r, onMounted as m, nextTick as b, onUpdated as _, openBlock as x, createElementBlock as h, normalizeClass as y, normalizeStyle as z } from "vue";
import { tabsNavIndicateProps as S } from "./tabs-nav-indicate.mjs";
import { useNamespace as T } from "@tu-view-plus/hooks";
import "../style/tabs.css";
const $ = u({
  name: "TuTabsNavIndicate"
}), N = /* @__PURE__ */ u({
  ...$,
  props: S,
  setup(d) {
    const t = d, i = T("tabs"), { activeTabRef: e } = v(t), a = c(0), o = c(0), l = () => {
      if (e != null && e.value) {
        const n = t.direction === "vertical" ? e.value.offsetTop : e.value.offsetLeft, s = t.direction === "vertical" ? e.value.offsetHeight : e.value.offsetWidth;
        (n !== a.value || s !== o.value) && (a.value = n, o.value = s);
      }
    }, p = r(() => ({
      [i.e("nav-tab-indicate")]: !0,
      [i.is("animation")]: t.animation,
      [i.is("disabled")]: t.disabled
    })), f = r(() => t.direction === "vertical" ? {
      top: `${a.value}px`,
      height: `${o.value}px`
    } : {
      left: `${a.value}px`,
      width: `${o.value}px`
    });
    return m(() => {
      b(() => l());
    }), _(() => {
      l();
    }), (n, s) => (x(), h("div", {
      class: y(p.value),
      style: z(f.value)
    }, null, 6));
  }
});
export {
  N as default
};
