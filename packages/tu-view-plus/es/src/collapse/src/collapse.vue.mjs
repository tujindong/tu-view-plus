<<<<<<< HEAD
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
=======
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
>>>>>>> 79bdb6ed003cf262a69a6c4f13609ec889cd68cf
    ], 2));
  }
});
export {
<<<<<<< HEAD
  I as default
=======
  G as default
>>>>>>> 79bdb6ed003cf262a69a6c4f13609ec889cd68cf
};
