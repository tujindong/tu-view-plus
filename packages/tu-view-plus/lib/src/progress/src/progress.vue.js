"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),q=require("../../icon/index.js"),M=require("./progress.js"),f=require("@tu-view-plus/hooks"),h=require("@tu-view-plus/utils"),u=require("@tu-view-plus/icons-vue");require("../style/progress.css");const _=["aria-valuenow"],O=["id"],F=["stop-color"],A=["stop-color"],L=["d","stroke","stroke-width"],j=["d","stroke","stroke-width","stroke-linecap"],G={key:0},R=e.defineComponent({name:"TuProgress"}),U=e.defineComponent({...R,props:M.progressProps,setup(B){const r=B,k={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},y=e.computed(()=>Math.floor(Math.random()*1e4)),a=f.useNamespace("progress"),n=f.useNamespace("progress-bar"),l=f.useNamespace("progress-circle"),z=e.computed(()=>{const t={};return t["--stroke-width"]=`${2*r.strokeWidth}px`,t}),b=e.computed(()=>({[a.b()]:!0,[a.m(r.type)]:r.type,[a.m("without-text")]:!r.showText,[a.m("text-inside")]:r.textInside,[a.is(r.status)]:r.status})),E=e.computed(()=>({[n.e("outer")]:!0,[n.is("narrow")]:r.strokeWidth<8})),N=e.computed(()=>({[n.e("inner")]:!0,[n.em("inner","indeterminate")]:r.indeterminate,[n.em("inner","striped")]:r.striped,[n.em("inner","striped-flow")]:r.stripedFlow})),V=e.computed(()=>({[l.e("outer")]:!0,[l.is("narrow")]:r.strokeWidth<8})),P=e.computed(()=>({width:`${r.percentage}%`,animationDuration:`${r.duration}s`,backgroundColor:g(r.percentage)})),g=t=>{var m;const{color:s}=r;if(h.isFunction(s))return s(t);if(h.isString(s))return s;{const o=x(s);for(const c of o)if(c.percentage>t)return c.color;return(m=o[o.length-1])==null?void 0:m.color}},x=t=>{const s=100/t.length;return t.map((o,c)=>h.isString(o)?{color:o,percentage:(c+1)*s}:o).sort((o,c)=>o.percentage-c.percentage)},C=e.computed(()=>r.format(r.percentage)),d=e.computed(()=>(r.strokeWidth/r.width*100).toFixed(1)),v=e.computed(()=>["circle","dashboard"].includes(r.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),$=e.computed(()=>{const t=v.value,s=r.type==="dashboard";return`
          M 50 50
          m 0 ${s?"":"-"}${t}
          a ${t} ${t} 0 1 1 0 ${s?"-":""}${t*2}
          a ${t} ${t} 0 1 1 0 ${s?"":"-"}${t*2}
          `}),i=e.computed(()=>2*Math.PI*v.value),p=e.computed(()=>r.type==="dashboard"?.75:1),w=e.computed(()=>`${-1*i.value*(1-p.value)/2}px`),S=e.computed(()=>{let t;return r.color?t=g(r.percentage):t=k[r.status]||k.default,t}),D=e.computed(()=>({strokeDasharray:`${i.value*p.value}px, ${i.value}px`,strokeDashoffset:w.value})),T=e.computed(()=>({strokeDasharray:`${i.value*p.value*(r.percentage/100)}px, ${i.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),I=e.computed(()=>r.type==="line"?12+r.strokeWidth*.4:r.width*.111111+2),W=e.computed(()=>r.status==="warning"?u.WarningFilled:r.type==="line"?r.status==="success"?u.CircleCheck:u.CircleClose:r.status==="success"?u.Check:u.Close);return(t,s)=>(e.openBlock(),e.createElementBlock("div",{role:"progressbar",class:e.normalizeClass(e.unref(b)),"aria-valuenow":t.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[t.type==="line"?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(n).b())},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(E)),style:e.normalizeStyle({height:`${t.strokeWidth}px`})},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(N)),style:e.normalizeStyle(e.unref(P))},[(t.showText||t.$slots.default)&&t.textInside?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(n).e("innerText"))},[e.renderSlot(t.$slots,"default",{percentage:t.percentage},()=>[e.createElementVNode("span",null,e.toDisplayString(e.unref(C)),1)])],2)):e.createCommentVNode("",!0)],6)],6)],2)):(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(l).b()),style:e.normalizeStyle({height:t.width+"px",width:t.width+"px"})},[t.type=="circle"?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(V)),style:e.normalizeStyle(e.unref(z))},null,6)):e.createCommentVNode("",!0),(e.openBlock(),e.createElementBlock("svg",{viewBox:" 0 0 100 100",class:e.normalizeClass(e.unref(l).e("inner"))},[e.createElementVNode("defs",null,[e.createElementVNode("radialGradient",{id:`gradient-${e.unref(y)}`,cx:"50%",cy:"50%",r:"60%",fx:"50%",fy:"50%"},[e.createElementVNode("stop",{offset:"30%","stop-color":e.unref(S)},null,8,F),e.createElementVNode("stop",{offset:"100%","stop-color":e.unref(S)},null,8,A)],8,O)]),e.createElementVNode("path",{class:e.normalizeClass(e.unref(l).m("track")),d:e.unref($),stroke:t.type=="dashboard"?"#c8d0e761":"","stroke-width":e.unref(d),style:e.normalizeStyle(e.unref(D)),fill:"none"},null,14,L),e.createElementVNode("path",{class:e.normalizeClass(e.unref(l).m("path")),d:e.unref($),stroke:`url(#gradient-${e.unref(y)})`,"stroke-width":t.percentage?e.unref(d):0,"stroke-linecap":t.strokeLinecap,style:e.normalizeStyle(e.unref(T)),fill:"none"},null,14,j)],2))],6)),(t.showText||t.$slots.default)&&!t.textInside?(e.openBlock(),e.createElementBlock("div",{key:2,class:e.normalizeClass(e.unref(a).e("text")),style:e.normalizeStyle({fontSize:`${e.unref(I)}px`})},[e.renderSlot(t.$slots,"default",{percentage:t.percentage},()=>[t.status?(e.openBlock(),e.createBlock(e.unref(q.TuIcon),{key:1},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(W))))]),_:1})):(e.openBlock(),e.createElementBlock("span",G,e.toDisplayString(e.unref(C)),1))])],6)):e.createCommentVNode("",!0)],10,_))}});exports.default=U;