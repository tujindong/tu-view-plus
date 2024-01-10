import { toRefs as y, computed as t, reactive as n } from "vue";
import { isArray as r } from "@tu-view-plus/utils";
import { useTimePickerValue as o } from "./use-time-picker-value.mjs";
function h(s) {
  const { timePickerProps: e, selectedValue: a } = y(s), V = t(() => {
    var u;
    return (u = a == null ? void 0 : a.value) == null ? void 0 : u[0];
  }), i = t(() => {
    var u;
    return (u = a == null ? void 0 : a.value) == null ? void 0 : u[1];
  }), l = t(
    () => {
      var u;
      return (u = e == null ? void 0 : e.value) == null ? void 0 : u.defaultValue;
    }
  ), m = t(
    () => r(l.value) ? {
      ...e == null ? void 0 : e.value,
      defaultValue: l.value[0]
    } : e == null ? void 0 : e.value
  ), T = t(
    () => r(l.value) ? {
      ...e == null ? void 0 : e.value,
      defaultValue: l.value[1]
    } : e == null ? void 0 : e.value
  ), [c, f, v] = o(
    n({
      timePickerProps: m,
      selectedValue: V
    })
  ), [d, g, E] = o(
    n({
      timePickerProps: T,
      selectedValue: i
    })
  ), R = t(() => [
    c.value,
    d.value
  ]);
  function S(u) {
    u && (f(u[0]), g(u[1]));
  }
  function x() {
    v(), E();
  }
  return [R, S, x];
}
export {
  h as useRangeTimePickerValue
};
