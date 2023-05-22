import _sfc_main from "./icon.vue.mjs";
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Icon = withInstall(_sfc_main);
export {
  Icon,
  Icon as default
};
