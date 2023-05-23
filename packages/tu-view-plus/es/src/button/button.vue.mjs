import { defineComponent as e, computed as r, openBlock as s, createElementBlock as l, normalizeClass as p, unref as c, renderSlot as a } from "vue";
import "./style/index.css";
const m = e({ name: "tu-button" }), d = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = r(() => ({ [`tu-button--${t.type}`]: t.type }));
    return (u, f) => (s(), l("button", {
      class: p(["tu-button", c(n)])
    }, [
      a(u.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
