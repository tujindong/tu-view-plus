import { defineComponent as n, ref as d, computed as v, watch as _, provide as E, openBlock as C, createElementBlock as V, normalizeClass as h, renderSlot as x } from "vue";
import { collapseProps as N, collapseEmits as T } from "./collapse.mjs";
import { useNamespace as b } from "@tu-view-plus/hooks";
import { ensureArray as m } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as k, CHANGE_EVENT as z } from "@tu-view-plus/constants";
import { collapseContextKey as y } from "./constants.mjs";
import "../style/collapse.css";
const B = n({
  name: "TuCollapse"
}), I = /* @__PURE__ */ n({
  ...B,
  props: N,
  emits: T,
  setup(i, { emit: u }) {
    const e = i, a = u, l = b("collapse"), s = d(m(e.modelValue)), p = v(() => ({
      [l.b()]: !0,
      [l.m(e.effect)]: e.effect,
      [l.m(e.size)]: e.size
    })), r = (o) => {
      s.value = o;
      const t = e.accordion ? s.value[0] : s.value;
      a(k, t), a(z, t);
    }, f = (o) => {
      if (e.accordion)
        r([
          s.value[0] === o ? "" : o
        ]);
      else {
        const t = [...s.value], c = t.indexOf(o);
        c > -1 ? t.splice(c, 1) : t.push(o), r(t);
      }
    };
    return _(
      () => e.modelValue,
      () => s.value = m(e.modelValue),
      { deep: !0 }
    ), E(y, {
      activeNames: s,
      handleItemClick: f
    }), (o, t) => (C(), V("div", {
      class: h(p.value),
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
