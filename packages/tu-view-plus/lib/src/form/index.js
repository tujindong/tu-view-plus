"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("@tu-view-plus/utils"),m=require("./src/form.vue.js"),t=require("./src/form-item.vue.js"),r=require("./src/form.js"),o=require("./src/form-item.js");require("vue");require("@tu-view-plus/hooks");const u=e.withInstall(m.default,{FormItem:t.default});e.withNoopInstall(t.default);exports.formEmits=r.formEmits;exports.formProps=r.formProps;exports.formItemProps=o.formItemProps;exports.formItemValidateStates=o.formItemValidateStates;exports.TuForm=u;exports.default=u;