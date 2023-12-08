"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),c=require("./select-dropdown.js"),y=require("@tu-view-plus/hooks"),v=require("./context.js"),h=require("../../spin/index.js"),S=require("../../empty/index.js"),B=require("../../scrollbar/index.js"),C=e.defineComponent({name:"TuSelectDropdown"}),g=e.defineComponent({...C,props:c.selectDropDownProps,emits:c.selectDropDownEmits,setup(i,{emit:p}){const u=i,n=p,l=e.useSlots(),r=y.useNamespace("select"),a=e.ref(),s=e.inject(v.selectInjectionKey,void 0),m=e.computed(()=>({[r.e("dropdown")]:!0,[r.em("dropdown",s==null?void 0:s.selectSize)]:!0,[r.e("dropdown-header")]:!!l.header,[r.e("dropdown-footer")]:!!l.footer})),f=({scrollTop:o})=>{var d;const t=(d=a.value)==null?void 0:d.wrapRef,{scrollHeight:w,offsetHeight:k}=t;w-(o+k)<=u.bottomOffset&&n("reachBottom",t),n("scroll",t)};return(o,t)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(m.value)},[o.$slots.header&&(!o.empty||o.showHeaderOnEmpty)?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(r).e("dropdown-header"))},[e.renderSlot(o.$slots,"header")],2)):e.createCommentVNode("",!0),o.loading?(e.openBlock(),e.createBlock(e.unref(h.TuSpin),{key:1,loading:"",dot:"",class:e.normalizeClass(e.unref(r).e("dropdown-loading")),size:10},null,8,["class"])):o.empty?(e.openBlock(),e.createElementBlock("div",{key:2,class:e.normalizeClass(e.unref(r).e("dropdown-empty"))},[e.renderSlot(o.$slots,"empty",{},()=>[e.createVNode(e.unref(S.TuEmpty))])],2)):e.createCommentVNode("",!0),o.virtualList&&!o.loading&&!o.empty?e.renderSlot(o.$slots,"virtual-list",{key:3}):e.createCommentVNode("",!0),o.virtualList?e.createCommentVNode("",!0):e.withDirectives((e.openBlock(),e.createBlock(e.unref(B.TuScrollbar),{key:4,ref_key:"wrapperComRef",ref:a,tag:"ul","wrap-class":e.unref(r).e("dropdown-wrap"),"view-class":e.unref(r).e("dropdown-list"),onScroll:f},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default")]),_:3},8,["wrap-class","view-class"])),[[e.vShow,!o.loading&&!o.empty]]),o.$slots.footer&&(!o.empty||o.showFooterOnEmpty)?(e.openBlock(),e.createElementBlock("div",{key:5,class:e.normalizeClass(e.unref(r).e("dropdown-footer"))},[e.renderSlot(o.$slots,"footer")],2)):e.createCommentVNode("",!0)],2))}});exports.default=g;
