import { getCurrentInstance as n, computed as r } from "vue";
const u = (() => {
  let e = 0;
  return (t = "") => (e += 1, `${t}${e}`);
})();
function c() {
  const e = n();
  return {
    key: r(
      () => (e == null ? void 0 : e.vnode.key) || u("__tu_menu")
    )
  };
}
export {
  c as useMenu
};
