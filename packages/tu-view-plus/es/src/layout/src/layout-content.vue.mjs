import { defineComponent as e, openBlock as n, createElementBlock as a, normalizeClass as r, unref as s, renderSlot as c } from "vue";
import { useNamespace as l } from "@tu-view-plus/hooks";
import "../style/layout.css";
const m = e({
  name: "TuLayoutContent"
}), d = /* @__PURE__ */ e({
  ...m,
  setup(u) {
    const t = l("layout");
    return (o, p) => (n(), a("main", {
      class: r(s(t).e("content"))
    }, [
      c(o.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
