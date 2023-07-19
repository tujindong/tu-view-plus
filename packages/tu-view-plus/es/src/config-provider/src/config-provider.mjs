import { defineComponent as i, watch as n, renderSlot as m } from "vue";
import { provideGlobalConfig as s } from "./hooks/use-global-config.mjs";
import { configProviderProps as a } from "./config-provider-props.mjs";
const f = {}, u = i({
  name: "TuConfigProvider",
  props: a,
  setup(o, { slots: r }) {
    n(
      () => o.message,
      (t) => {
        Object.assign(f, t ?? {});
      },
      { immediate: !0, deep: !0 }
    );
    const e = s(o);
    return () => m(r, "default", { config: e == null ? void 0 : e.value });
  }
});
export {
  u as default,
  f as messageConfig
};
