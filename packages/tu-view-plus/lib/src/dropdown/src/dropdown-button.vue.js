"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("./dropdown-button.js"),u=require("@tu-view-plus/hooks"),n=require("../../button/index.js"),g=require("../../icon/index.js"),m=require("@tu-view-plus/icons-vue"),w=require("../index.js");require("../style/dropdown.css");const V=e.defineComponent({name:"TuDropdownButton"}),B=e.defineComponent({...V,props:s.dropdownButtonProps,emits:s.dropdownButtonEmits,setup(p,{emit:l}){const d=p,t=l,a=u.useNamespace("dropdown-button"),{defaultPopupVisible:c,popupVisible:f}=e.toRefs(d),{computedPopupVisible:i,handlePopupVisibleChange:b}=u.useTrigger({defaultPopupVisible:c,popupVisible:f,emit:t}),h=o=>{t("click",o)},C=(o,r)=>{t("select",o,r)};return(o,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(a).b())},[e.createVNode(e.unref(n.TuButtonGroup),null,{default:e.withCtx(()=>[e.createVNode(e.unref(n.TuButton),e.mergeProps(o.buttonProps,{size:o.size,type:o.type,disabled:o.disabled,onClick:h}),{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default")]),_:3},16,["size","type","disabled"]),e.createVNode(e.unref(w.default),{"popup-visible":e.unref(i),trigger:o.trigger,position:o.position,"popup-container":o.popupContainer,"hide-on-select":o.hideOnSelect,onSelect:C,onPopupVisibleChange:e.unref(b)},{content:e.withCtx(()=>[e.renderSlot(o.$slots,"content")]),default:e.withCtx(()=>[e.createVNode(e.unref(n.TuButton),{size:o.size,type:o.type,disabled:o.disabled},{icon:e.withCtx(()=>[e.renderSlot(o.$slots,"icon",{popupVisible:e.unref(i)},()=>[e.createVNode(e.unref(g.TuIcon),null,{default:e.withCtx(()=>[e.createVNode(e.unref(m.ArrowDown))]),_:1})])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onPopupVisibleChange"])]),_:3})],2))}});exports.default=B;