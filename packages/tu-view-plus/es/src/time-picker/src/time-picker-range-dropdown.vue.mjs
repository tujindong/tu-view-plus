import { defineComponent as r, toRefs as f, ref as v, computed as _, watch as g, openBlock as w, createBlock as k, mergeProps as x, withCtx as y, renderSlot as P } from "vue";
import { timePickerRangeDropdownProps as R, timePickerRangeDropdownEmits as h } from "./time-picker-range-dropdown.mjs";
import D from "./time-picker-dropdown.vue.mjs";
import { isUndefined as s } from "@tu-view-plus/utils";
import { isValidRangeValue as I } from "./utils.mjs";
import "../style/time-picker.css";
const V = r({
  name: "TuTimePickerRangeDropdown"
}), E = /* @__PURE__ */ r({
  ...V,
  props: R,
  emits: h,
  setup(l, { emit: c }) {
    const m = l, n = c, { value: e, displayIndex: a } = f(m), t = v(a.value), p = _(
      () => e != null && e.value ? e.value[t.value] : void 0
    ), d = (o) => {
      const i = s(e) || s(e == null ? void 0 : e.value) ? [] : [...e.value];
      i[t.value] = o, n("select", i);
    }, u = () => {
      if (I(e == null ? void 0 : e.value))
        n("confirm", e == null ? void 0 : e.value);
      else {
        const o = (t.value + 1) % 2;
        t.value = o, n("display-index-change", o), n("update:displayIndex", o);
      }
    };
    return g(a, () => {
      t.value = a.value;
    }), (o, i) => (w(), k(D, x(o.$attrs, {
      "is-range": !0,
      value: p.value,
      size: o.size,
      onSelect: d,
      onConfirm: u
    }), {
      default: y(() => [
        P(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["value", "size"]));
  }
});
export {
  E as default
};
