import { defineComponent as d, toRefs as m, ref as c, computed as r, onMounted as b, nextTick as _, onUpdated as x, openBlock as h, createElementBlock as y, normalizeClass as z, unref as u, normalizeStyle as S } from "vue";
import { tabsNavIndicateProps as T } from "./tabs-nav-indicate.mjs";
import { useNamespace as $ } from "@tu-view-plus/hooks";
import "../style/tabs.css";
const g = d({
  name: "TuTabsNavIndicate"
}), B = /* @__PURE__ */ d({
  ...g,
  props: T,
  setup(p) {
    const t = p, i = $("tabs"), { activeTabRef: e } = m(t), a = c(0), o = c(0), l = () => {
      if (e != null && e.value) {
        const n = t.direction === "vertical" ? e.value.offsetTop : e.value.offsetLeft, s = t.direction === "vertical" ? e.value.offsetHeight : e.value.offsetWidth;
        (n !== a.value || s !== o.value) && (a.value = n, o.value = s);
      }
    }, f = r(() => ({
      [i.e("nav-tab-indicate")]: !0,
      [i.is("animation")]: t.animation,
      [i.is("disabled")]: t.disabled
    })), v = r(() => t.direction === "vertical" ? {
      top: `${a.value}px`,
      height: `${o.value}px`
    } : {
      left: `${a.value}px`,
      width: `${o.value}px`
    });
    return b(() => {
      _(() => l());
    }), x(() => {
      l();
    }), (n, s) => (h(), y("div", {
      class: z(u(f)),
      style: S(u(v))
    }, null, 6));
  }
});
export {
  B as default
};
