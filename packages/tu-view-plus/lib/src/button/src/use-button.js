"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),a=require("./constants.js");function d(t,n){const u=e.ref(),o=e.inject(a.buttonGroupInjectionKey,void 0),i=e.computed(()=>({ariaDisabled:t.disabled||t.loading,disabled:t.disabled||t.loading,autofocus:t.autofocus,type:t.nativeType}));return{buttonRef:u,buttonGroupInjection:o,buttonAttrs:i,handleClick:c=>{n("click",c)}}}exports.default=d;
