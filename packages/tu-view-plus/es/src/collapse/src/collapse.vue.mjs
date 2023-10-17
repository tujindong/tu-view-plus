import { defineComponent as p, ref as d, computed as f, watch as _, provide as v, openBlock as E, createElementBlock as C, normalizeClass as V, unref as h, renderSlot as x } from "vue";
import { collapseProps as y, collapseEmits as N } from "./collapse.mjs";
import { useNamespace as T } from "@tu-view-plus/hooks";
import { ensureArray as c } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as b, CHANGE_EVENT as k } from "@tu-view-plus/constants";
import { collapseContextKey as z } from "./constants.mjs";
import "../style/collapse.css";
const B = p({
  name: "TuCollapse"
}), I = /* @__PURE__ */ p({
  ...B,
  props: y,
  emits: N,
  setup(m, { emit: l }) {
    const e = m, a = T("collapse"), t = d(c(e.modelValue)), u = f(() => ({
      [a.b()]: !0,
      [a.m(e.type)]: e.type
    })), r = (o) => {
      t.value = o;
      const s = e.accordion ? t.value[0] : t.value;
      l(b, s), l(k, s);
    }, i = (o) => {
      if (e.accordion)
        r([
          t.value[0] === o ? "" : o
        ]);
      else {
        const s = [...t.value], n = s.indexOf(o);
        n > -1 ? s.splice(n, 1) : s.push(o), r(s);
      }
    };
    return _(
      () => e.modelValue,
      () => t.value = c(e.modelValue),
      { deep: !0 }
    ), v(z, {
      activeNames: t,
      size: e.size,
      handleItemClick: i
    }), (o, s) => (E(), C("div", {
      class: V(h(u)),
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
