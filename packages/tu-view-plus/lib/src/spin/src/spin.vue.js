"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i=require("./spin.js"),a=require("@tu-view-plus/hooks"),c=require("../../icon/index.js"),u=require("./spin-dot.vue.js"),p=require("./spin-loading.vue.js");require("../style/spin.css");const m=e.defineComponent({name:"TuSpin"}),d=e.defineComponent({...m,props:i.spinProps,setup(t){const n=t,l=e.useSlots(),o=a.useNamespace("spin"),r=e.computed(()=>({[o.b()]:!0,[o.m("with-mask")]:l.default,[o.m("with-tip")]:n.tip}));return(s,k)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(r))},[e.renderSlot(s.$slots,"default"),s.loading?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[s.$slots.default?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(o).e("mask"))},null,2)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(e.unref(o).e("content"))},[s.$slots.icon?(e.openBlock(),e.createBlock(e.unref(c.TuIcon),{key:0,class:e.normalizeClass([e.unref(o).e("icon"),"is-loading"]),size:s.size},{default:e.withCtx(()=>[e.renderSlot(s.$slots,"icon")]),_:3},8,["class","size"])):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[s.dot?(e.openBlock(),e.createBlock(u.default,{key:0,size:s.size},null,8,["size"])):(e.openBlock(),e.createBlock(p.default,{key:1,size:s.size},null,8,["size"]))],64)),s.$slots.tip?(e.openBlock(),e.createElementBlock("div",{key:2,class:e.normalizeClass(e.unref(o).e("tip"))},[e.renderSlot(s.$slots,"tip")],2)):e.createCommentVNode("",!0),s.tip?(e.openBlock(),e.createElementBlock("div",{key:3,class:e.normalizeClass(e.unref(o).e("tip"))},e.toDisplayString(s.tip),3)):e.createCommentVNode("",!0)],2)],64)):e.createCommentVNode("",!0)],2))}});exports.default=d;