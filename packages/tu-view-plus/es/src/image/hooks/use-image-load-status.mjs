import { ref as n, computed as e } from "vue";
function l(a) {
  const o = n(a || "beforeLoad"), t = e(() => o.value === "beforeLoad"), s = e(() => o.value === "loading"), r = e(() => o.value === "error"), d = e(() => o.value === "loaded");
  return {
    status: o,
    isBeforeLoad: t,
    isLoading: s,
    isError: r,
    isLoaded: d,
    setLoadStatus: (u) => {
      o.value = u;
    }
  };
}
export {
  l as default
};
