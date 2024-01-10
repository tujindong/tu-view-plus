import { toRefs as f, computed as a, watch as V } from "vue";
import { normalizeRangeValue as r } from "../utils.mjs";
import { getDayjsValue as m, isUndefined as u } from "@tu-view-plus/utils";
import { useState as i } from "./use-state.mjs";
function S(n) {
  const { modelValue: c, defaultValue: s, format: l } = f(n), e = a(() => m(r(c.value), l.value)), t = a(() => m(r(s.value), l.value)), [v, o] = i(
    u(e.value) ? u(t.value) ? [] : t.value : e.value
  );
  return V(e, () => {
    u(e.value) && o([]);
  }), {
    value: a(
      () => e.value || v.value
    ),
    setValue: o
  };
}
export {
  S as useRangePickerState
};
