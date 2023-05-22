"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const icon_vue_vue_type_script_setup_true_lang = require("./icon.vue.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Icon = withInstall(icon_vue_vue_type_script_setup_true_lang.default);
exports.Icon = Icon;
exports.default = Icon;
