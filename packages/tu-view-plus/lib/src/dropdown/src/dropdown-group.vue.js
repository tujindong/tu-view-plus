"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),t=require("./dropdown-group.js"),n=require("@tu-view-plus/hooks");require("../style/dropdown.css");const s=e.defineComponent({name:"TuDropdownGroup"}),l=e.defineComponent({...s,props:t.dropdownGroupProps,setup(u){const r=n.useNamespace("dropdown-group");return(o,p)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("li",{class:e.normalizeClass(e.unref(r).e("title"))},[e.renderSlot(o.$slots,"title",{},()=>[e.createTextVNode(e.toDisplayString(o.title),1)])],2),e.renderSlot(o.$slots,"default")],64))}});exports.default=l;