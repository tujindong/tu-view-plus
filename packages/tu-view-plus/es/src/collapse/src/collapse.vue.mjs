import { defineComponent as c, ref as p, watch as d, provide as f, openBlock as _, createElementBlock as v, normalizeClass as E, unref as C, renderSlot as V } from "vue";
import { collapseProps as h, collapseEmits as x } from "./collapse.mjs";
import { useNamespace as N } from "@tu-view-plus/hooks";
import { ensureArray as n } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as T, CHANGE_EVENT as b } from "@tu-view-plus/constants";
import { collapseContextKey as k } from "./constants.mjs";
import "../style/collapse.css";
const y = c({
  name: "TuCollapse"
}), G = /* @__PURE__ */ c({
  ...y,
  props: h,
  emits: x,
  setup(m, { emit: t }) {
    const s = m, u = N("collapse"), l = p(n(s.modelValue)), a = (e) => {
      l.value = e;
      const o = s.accordion ? l.value[0] : l.value;
      t(T, o), t(b, o);
    }, i = (e) => {
      if (s.accordion)
        a([
          l.value[0] === e ? "" : e
        ]);
      else {
        const o = [...l.value], r = o.indexOf(e);
        r > -1 ? o.splice(r, 1) : o.push(e), a(o);
      }
    };
    return d(
      { deep: !0 },
      () => s.modelValue,
      () => l.value = n(s.modelValue)
    ), f(k, {
      activeNames: l,
      handleItemClick: i
    }), (e, o) => (_(), v("div", {
      class: E(C(u).b()),
      role: "tablist",
      "aria-multiselectable": "true"
    }, [
      V(e.$slots, "default")
    ], 2));
  }
});
export {
  G as default
};
