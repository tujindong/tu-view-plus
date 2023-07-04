import { ref as l, inject as d, computed as c } from "vue";
import { buttonGroupInjectionKey as m } from "./constants.mjs";
function y(e, o) {
  const i = l(), t = d(m, void 0), n = c(() => (t == null ? void 0 : t.size) || e.size), s = c(() => (t == null ? void 0 : t.type) || e.type);
  return {
    buttonRef: i,
    buttonSize: n,
    buttonType: s,
    buttonGroupInjection: t,
    handleClick: (f) => {
      o("click", f);
    }
  };
}
export {
  y as default
};
