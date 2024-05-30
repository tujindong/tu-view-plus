"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),a=require("./alert.js"),c=require("@tu-view-plus/hooks"),k=require("@tu-view-plus/utils"),i=require("../../icon/index.js"),C=require("@tu-view-plus/icons-vue");require("../style/alert.css");const v=e.defineComponent({name:"TuAlert"}),y=e.defineComponent({...v,props:a.alertProps,emits:a.alertEmits,setup(u,{emit:m}){const s=u,d=m,o=c.useNamespace("alert"),p=e.useSlots(),l=e.ref(!0),f=e.computed(()=>({[o.b()]:!0,[o.m(s.type)]:s.type,[o.m(s.size)]:s.size,[o.m(s.effect)]:s.effect,[o.is("center")]:s.center,[o.is("with-description")]:s.description||p.default})),n=e.computed(()=>k.TypeComponentsMap[s.type]),r=t=>{l.value=!1,d("close",t)};return(t,B)=>(e.openBlock(),e.createBlock(e.Transition,{name:`${e.unref(c.defaultNamespace)}-opacity`},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{role:"alert",class:e.normalizeClass(f.value)},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(o).e("icon-type"))},[t.showIcon&&n.value?(e.openBlock(),e.createBlock(e.unref(i.TuIcon),{key:0},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.value)))]),_:1})):e.createCommentVNode("",!0)],2),e.createElementVNode("div",{class:e.normalizeClass(e.unref(o).e("content"))},[t.title||t.$slots.title?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(e.unref(o).e("title"))},[e.renderSlot(t.$slots,"title",{},()=>[e.createTextVNode(e.toDisplayString(t.title),1)])],2)):e.createCommentVNode("",!0),t.$slots.default||t.description?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(o).e("description"))},[e.renderSlot(t.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.description),1)])],2)):e.createCommentVNode("",!0)],2),t.closable?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[t.closeText?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(o).e("icon-close")),onClick:r},e.toDisplayString(t.closeText),3)):(e.openBlock(),e.createBlock(e.unref(i.TuIcon),{key:1,class:e.normalizeClass(e.unref(o).e("icon-close")),onClick:r},{default:e.withCtx(()=>[e.createVNode(e.unref(C.Close))]),_:1},8,["class"]))],64)):e.createCommentVNode("",!0)],2),[[e.vShow,l.value]])]),_:3},8,["name"]))}});exports.default=y;