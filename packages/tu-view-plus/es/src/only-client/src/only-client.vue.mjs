import { defineComponent as t, ref as r, onMounted as a } from "vue";
const o = /* @__PURE__ */ t({
  name: "TuOnlyClient",
  setup(f, {
    slots: e
  }) {
    const n = r(!1);
    return a(() => n.value = !0), () => {
      var u;
      return n.value ? (u = e.default) == null ? void 0 : u.call(e) : null;
    };
  }
});
export {
  o as default
};
