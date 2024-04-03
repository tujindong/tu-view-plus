"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),m=require("@tu-view-plus/hooks"),L=require("@tu-view-plus/utils"),a=require("@tu-view-plus/icons-vue"),w=require("./layout-sider.js"),B=require("./context.js"),i=require("../../icon/index.js");require("../style/layout.css");const M={key:0},A={key:1},E=e.defineComponent({name:"TuLayoutSider"}),R=e.defineComponent({...E,props:w.layoutSiderProps,emits:w.layoutSiderEmits,setup(C,{emit:S}){const q=(()=>{let t=0;return(n="")=>(t+=1,`${n}${t}`)})(),y=C,l=S,c=m.useNamespace("layout"),{collapsed:u,defaultCollapsed:d,collapsible:p,hideTrigger:v,breakpoint:T,collapsedWidth:I,resizeDirections:s}=e.toRefs(y),[r,g]=m.useMergeState(d==null?void 0:d.value,e.reactive({value:u})),N=e.computed(()=>s!=null&&s.value?"ResizeBox":"div"),h=e.computed(()=>(p==null?void 0:p.value)&&!(v!=null&&v.value)),x=e.computed(()=>({[c.e("sider")]:!0,[c.is("has-trigger")]:h.value,[c.is("collapsed")]:u==null?void 0:u.value})),k=e.computed(()=>{const{width:t,collapsedWidth:n}=y,f=r.value?n:t;return L.isNumber(f)?`${f}px`:String(f)}),V=()=>{const t=!r.value;g(t),l("update:collapsed",t),l("collapse",t,"clickTrigger")};m.useResponsive(T,t=>{const n=!t;n!==r.value&&(g(n),l("update:collapsed",n),l("collapse",n,"responsive"),l("breakpoint",n))});const _=q("__tu_layout_sider"),o=e.inject(B.LayoutSiderInjectionKey,void 0);return e.onMounted(()=>{var t;(t=o==null?void 0:o.onSiderMount)==null||t.call(o,_)}),e.onUnmounted(()=>{var t;(t=o==null?void 0:o.onSiderUnMount)==null||t.call(o,_)}),e.provide(B.SiderInjectionKey,e.reactive({collapsed:r,collapsedWidth:I})),(t,n)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(N.value),e.mergeProps({class:x.value,style:{width:k.value}},e.unref(s)?{directions:e.unref(s)}:{}),{default:e.withCtx(()=>[e.createElementVNode("div",{class:e.normalizeClass(e.unref(c).e("sider-children"))},[e.renderSlot(t.$slots,"default")],2),h.value?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(c).e("sider-trigger")),style:e.normalizeStyle({width:k.value}),onClick:V},[e.renderSlot(t.$slots,"trigger",{collapsed:e.unref(r)},()=>[t.reverseArrow?(e.openBlock(),e.createElementBlock("div",A,[e.unref(r)?(e.openBlock(),e.createBlock(e.unref(i.TuIcon),{key:0},{default:e.withCtx(()=>[e.createVNode(e.unref(a.ArrowLeft))]),_:1})):(e.openBlock(),e.createBlock(e.unref(i.TuIcon),{key:1},{default:e.withCtx(()=>[e.createVNode(e.unref(a.ArrowRight))]),_:1}))])):(e.openBlock(),e.createElementBlock("div",M,[e.unref(r)?(e.openBlock(),e.createBlock(e.unref(i.TuIcon),{key:1},{default:e.withCtx(()=>[e.createVNode(e.unref(a.ArrowRight))]),_:1})):(e.openBlock(),e.createBlock(e.unref(i.TuIcon),{key:0},{default:e.withCtx(()=>[e.createVNode(e.unref(a.ArrowLeft))]),_:1}))]))])],6)):e.createCommentVNode("",!0)]),_:3},16,["class","style"]))}});exports.default=R;
