import { defineComponent as k, toRefs as w, ref as p, watch as y, nextTick as E, onMounted as M, openBlock as a, createElementBlock as i, normalizeClass as u, unref as d, createElementVNode as x, Fragment as B, renderList as D, toDisplayString as I } from "vue";
import { timePickerColumnProps as L, timePickerColumnEmits as N } from "./time-picker-column.mjs";
import { useNamespace as R } from "@tu-view-plus/hooks";
import { isUndefined as S } from "@tu-view-plus/utils";
import { scrollTo as W } from "./utils.mjs";
import "../style/time-picker.css";
const b = ["onClick"], z = k({
  name: "TuTimePickerDropdown"
}), A = /* @__PURE__ */ k({
  ...z,
  props: L,
  emits: N,
  setup(_, { emit: v }) {
    const C = _, T = v, { visible: t, value: o } = w(C), s = R("time-picker"), f = p(/* @__PURE__ */ new Map()), n = p(), P = (e) => ({
      [s.e("cell")]: !0,
      [s.is("disabled")]: e.disabled,
      [s.is("select")]: e.selected
    }), c = (e = !1) => {
      if (!n.value || S(o == null ? void 0 : o.value) || !(t != null && t.value))
        return;
      const r = f.value.get(o.value);
      r && W(n.value, r.offsetTop, e ? 100 : 0);
    }, g = (e, r) => {
      f.value.set(r.value, e);
    }, h = (e) => {
      e.disabled || T("select", e.value);
    };
    return y([o, t], (e, [, r]) => {
      (t == null ? void 0 : t.value) !== r ? E(() => {
        c();
      }) : c(!0);
    }), M(() => {
      c();
    }), (e, r) => (a(), i("div", {
      ref_key: "refWrapper",
      ref: n,
      class: u(d(s).e("column"))
    }, [
      x("ul", {
        class: u(d(s).e("list"))
      }, [
        (a(!0), i(B, null, D(e.list, (l) => (a(), i("li", {
          key: l.value,
          ref_for: !0,
          ref: (m) => g(m, l),
          class: u(P(l)),
          onClick: (m) => h(l)
        }, I(l.label), 11, b))), 128))
      ], 2)
    ], 2));
  }
});
export {
  A as default
};
