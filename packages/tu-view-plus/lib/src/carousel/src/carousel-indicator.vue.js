"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),l=require("./carousel-indicator.js"),k=require("@tu-view-plus/hooks"),y=["data-index"],g=e.defineComponent({name:"TuCarouselIndicator"}),v=e.defineComponent({...g,props:l.carouselIndicatorProps,emits:l.carouselIndicatorEmits,setup(u,{emit:d}){const o=u,s=d,n=k.useNamespace("carousel"),m=e.computed(()=>({[n.e("indicator")]:!0,[n.em("indicator",o.type)]:o.type,[n.em("indicator",o.position)]:o.position})),i=t=>{if(t.preventDefault(),o.type=="slider"){const r=t.offsetX,a=t.currentTarget.clientWidth;if(t.target===t.currentTarget){const c=Math.floor(r/a*o.count);c!==o.activeIndex&&s("select",c)}}else{const r=Number.parseInt(t.target.getAttribute("data-index")??"",10);!Number.isNaN(r)&&r!==o.activeIndex&&s("select",r)}},p=e.computed(()=>o.trigger==="click"?{onClick:i}:{onMouseover:i}),f=e.computed(()=>{const t=100/o.count;return{width:`${t}%`,left:`${o.activeIndex*t}%`}});return(t,r)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({class:m.value},p.value),[t.type==="slider"?(e.openBlock(),e.createElementBlock("span",{key:0,style:e.normalizeStyle(f.value),class:e.normalizeClass([e.unref(n).e("indicator-item"),e.unref(n).em("indicator-item","active")])},null,6)):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(Array(t.count),(a,c)=>(e.openBlock(),e.createElementBlock("span",{key:c,"data-index":c,class:e.normalizeClass([e.unref(n).e("indicator-item"),{[e.unref(n).em("indicator-item","active")]:c===t.activeIndex}])},null,10,y))),128))],16))}});exports.default=v;
