"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),d=require("./col.js");require("../style/col.css");const m=require("@tu-view-plus/hooks");require("../../row/index.js");const c=require("@tu-view-plus/utils"),h=require("../../row/src/constants.js"),$=e.defineComponent({name:"TuCol"}),g=e.defineComponent({...$,props:d.colProps,setup(a){const u=a,{gutter:r}=e.inject(h.rowContextKey,{gutter:e.computed(()=>0)}),o=m.useNamespace("col"),i=e.computed(()=>{const s={};return r.value&&(s.paddingLeft=s.paddingRight=`${r.value/2}px`),s}),f=e.computed(()=>{const s=[];return["span","offset","pull","push"].forEach(t=>{const n=u[t];c.isNumber(n)&&(t==="span"?s.push(o.e(`${n}`)):n>0&&s.push(o.e(`${t}-${n}`)))}),["xs","sm","md","lg","xl"].forEach(t=>{c.isNumber(u[t])?s.push(o.e(`${t}-${u[t]}`)):c.isObject(u[t])&&Object.entries(u[t]).forEach(([n,l])=>{s.push(n!=="span"?o.e(`${t}-${n}-${l}`):o.e(`${t}-${l}`))})}),r.value&&s.push(o.is("guttered")),[o.b(),s]});return(s,p)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(s.tag),{class:e.normalizeClass(e.unref(f)),style:e.normalizeStyle(e.unref(i))},{default:e.withCtx(()=>[e.renderSlot(s.$slots,"default")]),_:3},8,["class","style"]))}});exports.default=g;
