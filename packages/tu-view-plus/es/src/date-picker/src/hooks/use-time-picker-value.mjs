import { toRefs as v, computed as a, reactive as V, ref as T, watch as p } from "vue";
import { getDayjsValue as g, getNow as H } from "@tu-view-plus/utils";
import "b-tween";
import { useTimeFormat as d } from "../../../time-picker/src/hooks/use-time-format.mjs";
import "@tu-view-plus/hooks";
function j(l) {
  const { timePickerProps: t, selectedValue: u } = v(l), f = a(() => {
    var e;
    return (e = t == null ? void 0 : t.value) == null ? void 0 : e.format;
  }), i = a(
    () => {
      var e;
      return !!((e = t == null ? void 0 : t.value) != null && e.use12Hours);
    }
  ), { format: s } = d(
    V({
      format: f,
      use12Hours: i
    })
  ), c = a(
    () => {
      var e;
      return g(
        (e = t == null ? void 0 : t.value) == null ? void 0 : e.defaultValue,
        s.value
      );
    }
  ), r = () => (u == null ? void 0 : u.value) || c.value || H(), o = T(r());
  function m(e) {
    e && (o.value = e);
  }
  function n() {
    o.value = r();
  }
  return p(u, (e) => {
    m(e);
  }), [o, m, n];
}
export {
  j as useTimePickerValue
};
