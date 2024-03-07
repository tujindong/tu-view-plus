import { defineComponent as n, computed as c, openBlock as u, createElementBlock as d, normalizeClass as g, unref as o, createVNode as f, mergeProps as z } from "vue";
import { paginationOptionsProps as h, paginationOptionsEmits as P } from "./pagination-options.mjs";
import { useLocale as b, useNamespace as C } from "@tu-view-plus/hooks";
import { TuSelect as O } from "../../select/index.mjs";
import "../style/pagination.css";
const _ = n({
  name: "TuPaginationOptions"
}), T = /* @__PURE__ */ n({
  ..._,
  props: h,
  emits: P,
  setup(s, { emit: t }) {
    const i = s, a = t, { t: p } = b(), m = C("pagination"), r = c(
      () => i.sizeOptions.map((e) => ({
        value: e,
        label: `${e} ${p("tu.pagination.pagesize")}`
      }))
    ), l = (e) => {
      a("change", e);
    };
    return (e, k) => (u(), d("span", {
      class: g(o(m).e("options"))
    }, [
      f(o(O), z(e.selectProps, {
        "model-value": e.pageSize,
        options: r.value,
        size: e.size,
        disabled: e.disabled,
        onChange: l
      }), null, 16, ["model-value", "options", "size", "disabled"])
    ], 2));
  }
});
export {
  T as default
};
