"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),c=require("./skeleton-line.js"),u=require("@tu-view-plus/hooks"),s=require("@tu-view-plus/utils");require("../style/skeleton.css");const d=e.defineComponent({name:"TuSkeletonLine"}),m=e.defineComponent({...d,props:c.skeletonLineProps,setup(i){const l=u.useNamespace("skeleton"),t=i,a=r=>{let o={};if(t.widths.length!=0)for(let n=0;n<t.widths.length;n++)n+1==r&&(o={width:s.addUnit(t.widths[n]),lineHeight:s.addUnit(t.lineHeight),marginTop:s.addUnit(t.lineSpacing)});return o};return(r,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(l).e("line"))},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.rows,n=>(e.openBlock(),e.createElementBlock("ul",{key:n,class:e.normalizeClass(e.unref(l).e("line-row"))},[e.createElementVNode("li",{class:e.normalizeClass(e.unref(l).e("line-row-item")),style:e.normalizeStyle(a(n))},null,6)],2))),128))],2))}});exports.default=m;