"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("./radio.js");require("../style/radio.css");const t=e.defineComponent({name:"TuRadio"}),n=e.defineComponent({...t,props:r.radioProps,setup(u){return(o,l)=>(e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(o.$slots,"default")]))}});exports.default=n;