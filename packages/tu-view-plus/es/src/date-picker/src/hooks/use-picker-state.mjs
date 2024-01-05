import { toRefs as s, computed as u, watch as d } from "vue";
import { getDayjsValue as r, isUndefined as a } from "@tu-view-plus/utils";
import { useState as f } from "@tu-view-plus/hooks";
function D(v) {
  const { modelValue: c, defaultValue: m, format: l } = s(v), e = u(() => r(c.value, l.value)), t = u(() => r(m.value, l.value)), [n, o] = f(
    a(e.value) ? a(t.value) ? void 0 : t.value : e.value
  );
  return d(e, () => {
    a(e.value) && o(void 0);
  }), {
    value: u(
      () => e.value || n.value
    ),
    setValue: o
  };
}
export {
  D as usePickerState
};
