import{ac as G,h as f,j as x,x as I,d as y,M as N,g as d,o as u,c as m,F as H,r as g,b,w as z,I as A,n as _,l as c,e as w,L as F,Z as L,as as M,U as E}from"./framework.b4ea4d15.js";import{s as C,t as U,v as j,w as h,b as Y,c as $,u as K}from"./ResizeObserver.es.4412a0db.js";import{i as O,f as R}from"./index.3da3d08f.js";import{r as J}from"./index.3866a36e.js";const de=(e,o)=>{const t={...e};for(const n of o)n in t&&delete t[n];return t},fe={ENTER:"Enter",ESC:"Escape",BACKSPACE:"Backspace",TAB:"Tab",SPACE:" ",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight"},T=e=>JSON.stringify({key:e.key,ctrl:!!e.ctrl,shift:!!e.shift,alt:!!e.alt,meta:!!e.meta}),ye=e=>{const o={};return e.forEach((t,n)=>{const a=G(n)?{key:n}:n;o[T(a)]=t}),t=>{const n=T({key:t.key,ctrl:t.ctrlKey,shift:t.shiftKey,alt:t.altKey,meta:t.metaKey}),a=o[n];a&&(t.stopPropagation(),a(t))}},pe=({popupContainer:e,visible:o,defaultContainer:t="body",documentContainer:n})=>{const a=f(e.value),s=f(),i=()=>{const r=C(e.value),p=r?e.value:t,v=r??(n?document.documentElement:C(t));p!==a.value&&(a.value=p),v!==s.value&&(s.value=v)};return x(()=>i()),I(o,r=>{a.value!==e.value&&r&&i()}),{teleportContainer:a,containerRef:s}},ve=e=>{const o=f(!1),t={overflow:"",width:"",boxSizing:""};return{setOverflowHidden:()=>{if(e.value){const s=e.value;if(!o.value&&s.style.overflow!=="hidden"){const i=U(s);(i>0||j(s))&&(t.overflow=s.style.overflow,t.width=s.style.width,t.boxSizing=s.style.boxSizing,s.style.overflow="hidden",s.style.width=`${s.offsetWidth-i}px`,s.style.boxSizing="border-box",o.value=!0)}}},resetOverflow:()=>{if(e.value&&o.value){const s=e.value;s.style.overflow=t.overflow,s.style.width=t.width,s.style.boxSizing=t.boxSizing,o.value=!1}}}},V=y({name:"TuOnlyClient",setup(e,{slots:o}){const t=f(!1);return x(()=>t.value=!0),()=>{var n;return t.value?(n=o.default)==null?void 0:n.call(o):null}}}),be=h(V),P=Symbol("tuButtonGroup"),Z=["default","primary","success","warning","info","danger","text",""],q=["button","submit","reset"],B=Y({disabled:Boolean,size:{...$,default:"medium"},type:{type:String,values:Z,default:"default"},icon:{type:O},nativeType:{type:String,values:q,default:"button"},loading:Boolean,loadingIcon:{type:O,default:()=>J},autofocus:Boolean,round:Boolean,circle:Boolean,long:{type:Boolean,default:!1}}),Q={click:e=>e instanceof MouseEvent};function X(e){const o=K("button"),t=f(),n=N(P,void 0),a=d(()=>(n==null?void 0:n.size)||e.size),s=d(()=>(n==null?void 0:n.type)||e.type),i=d(()=>({[o.b()]:!0,[o.m(a.value)]:!0,[o.m(s.value)]:!0,[o.is("disabled")]:e.disabled,[o.is("loading")]:e.loading,[o.is("round")]:e.round,[o.is("circle")]:e.circle,[o.is("long")]:e.long})),r=d(()=>({ariaDisabled:e.disabled||e.loading,disabled:e.disabled||e.loading,autofocus:e.autofocus,type:e.nativeType}));return{buttonRef:t,nsButton:o,buttonSize:a,buttonType:s,classes:i,buttonAttrs:r}}function ee(e){return{handleClick:o=>{e("click",o)}}}const te={key:2},oe=y({name:"TuButton"}),se=y({...oe,props:B,emits:Q,setup(e,{expose:o,emit:t}){const n=e,a=t,{buttonRef:s,nsButton:i,buttonSize:r,buttonType:p,classes:v,buttonAttrs:W}=X(n),{handleClick:S}=ee(a);return o({ref:s,size:r,type:p,disabled:n.disabled}),(l,k)=>(u(),m("button",F({ref_key:"buttonRef",ref:s},c(W),{class:c(v),onClick:k[0]||(k[0]=(...D)=>c(S)&&c(S)(...D))}),[l.loading?(u(),m(H,{key:0},[l.$slots.loading?g(l.$slots,"loading",{key:0}):(u(),b(c(R),{key:1,class:_(c(i).is("loading"))},{default:z(()=>[(u(),b(A(l.loadingIcon)))]),_:1},8,["class"]))],64)):w("",!0),l.icon||l.$slots.icon?(u(),b(c(R),{key:1},{default:z(()=>[l.icon?(u(),b(A(l.icon),{key:0})):g(l.$slots,"icon",{key:1})]),_:3})):w("",!0),l.$slots.default?(u(),m("span",te,[g(l.$slots,"default")])):w("",!0)],16))}}),ne={size:B.size,type:B.type};const ae=y({name:"TuButtonGroup",inheritAttrs:!0}),le=y({...ae,props:ne,setup(e){const o=e;L(P,M({size:E(o,"size"),type:E(o,"type")}));const t=K("button-group"),n=d(()=>({[t.b()]:!0}));return(a,s)=>(u(),m("div",{class:_(n.value)},[g(a.$slots,"default")],2))}}),me=h(se),ge=h(le);export{fe as K,ve as a,me as b,ge as f,ye as g,be as m,Z as n,de as o,pe as u};
