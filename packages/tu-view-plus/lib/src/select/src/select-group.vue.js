"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("./select-group.js"),l=require("@tu-view-plus/hooks");require("../style/select.css");const s=e.defineComponent({name:"TuList"}),n=e.defineComponent({...s,props:r.selectGroupProps,setup(u){const o=l.useNamespace("select");return(t,a)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("li",{class:e.normalizeClass(e.unref(o).e("group-title"))},[e.renderSlot(t.$slots,"label",{},()=>[e.createTextVNode(e.toDisplayString(t.label),1)])],2),e.renderSlot(t.$slots,"default")],64))}});exports.default=n;
