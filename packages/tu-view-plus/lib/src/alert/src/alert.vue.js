"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("./alert.js"),o=e.defineComponent({name:"TuAlert"}),n=e.defineComponent({...o,props:r.alertProps,setup(l){return(t,u)=>(e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(t.$slots,"default")]))}});exports.default=n;