"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),c=require("./shortcuts.js"),u=require("@tu-view-plus/hooks"),v=require("@tu-view-plus/constants"),C=require("@tu-view-plus/utils"),l=require("../../../button/index.js"),_=e.defineComponent({name:"TuShortcuts"}),h=e.defineComponent({..._,props:c.shortcutsProps,emits:c.shortcutsEmits,setup(y,{emit:i}){const o=i,a=u.useNamespace("picker"),{t:k}=u.useLocale(),m=()=>{o("now-click")},p=t=>{o("item-click",t)},d=t=>{o("item-mouse-enter",t)},f=t=>{o("item-mouse-leave",t)};return(t,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(a).e("shortcuts"))},[t.showNowBtn?(e.openBlock(),e.createBlock(e.unref(l.TuButton),{key:0,type:"text",size:"mini",onClick:r[0]||(r[0]=()=>m())},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(k)("tu.datepicker.now")),1)]),_:1})):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.shortcuts,(n,B)=>(e.openBlock(),e.createBlock(e.unref(l.TuButton),{size:"mini",key:B,onClick:s=>p(n),onMouseenter:s=>d(n),onMouseleave:s=>f(n)},{default:e.withCtx(()=>[e.unref(C.isFunction)(n.label)?(e.openBlock(),e.createBlock(e.unref(v.RenderFunction),{key:0,"render-func":n.label},null,8,["render-func"])):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(n.label),1)],64))]),_:2},1032,["onClick","onMouseenter","onMouseleave"]))),128))],2))}});exports.default=h;