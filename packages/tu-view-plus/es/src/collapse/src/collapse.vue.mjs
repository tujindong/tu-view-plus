import { defineComponent as m, ref as f, computed as d, watch as _, provide as v, openBlock as E, createElementBlock as C, normalizeClass as V, unref as h, renderSlot as x } from "vue";
import { collapseProps as N, collapseEmits as T } from "./collapse.mjs";
import { useNamespace as b } from "@tu-view-plus/hooks";
import { ensureArray as n } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as k, CHANGE_EVENT as z } from "@tu-view-plus/constants";
import { collapseContextKey as y } from "./constants.mjs";
import "../style/collapse.css";
const B = m({
  name: "TuCollapse"
}), I = /* @__PURE__ */ m({
  ...B,
  props: N,
  emits: T,
  setup(u, { emit: a }) {
    const e = u, l = b("collapse"), t = f(n(e.modelValue)), i = d(() => ({
      [l.b()]: !0,
      [l.m(e.effect)]: e.effect,
      [l.m(e.size)]: e.size
    })), r = (o) => {
      t.value = o;
      const s = e.accordion ? t.value[0] : t.value;
      a(k, s), a(z, s);
    }, p = (o) => {
      if (e.accordion)
        r([
          t.value[0] === o ? "" : o
        ]);
      else {
        const s = [...t.value], c = s.indexOf(o);
        c > -1 ? s.splice(c, 1) : s.push(o), r(s);
      }
    };
    return _(
      () => e.modelValue,
      () => t.value = n(e.modelValue),
      { deep: !0 }
    ), v(y, {
      activeNames: t,
      handleItemClick: p
    }), (o, s) => (E(), C("div", {
      class: V(h(i)),
      role: "tablist",
      "aria-multiselectable": "true"
    }, [
      x(o.$slots, "default")
    ], 2));
  }
});
export {
  I as default
};
