"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("vue"),_=require("./breadcrumb.js"),q=require("@tu-view-plus/hooks"),y=require("@tu-view-plus/utils"),N=require("./context.js"),x=require("./breadcrumb-item.vue.js");require("../style/breadcrumb.css");const B=r.defineComponent({name:"TuBreadcrumb",props:_.breadcrumbProps,setup(d,{slots:n}){const{maxCount:o,separator:v,routes:i}=r.toRefs(d),b=q.useNamespace("breadcrumb"),u=r.ref(0),f=r.computed(()=>o.value>0&&u.value>o.value+1);r.provide(N.breadcrumbInjectKey,r.reactive({total:u,maxCount:o,separator:v,needHide:f,slots:n}));const p=(t,a,e)=>{var l;if(a.indexOf(t)===a.length-1)return r.createVNode("span",null,[t.label]);const c=((l=d.customUrl)==null?void 0:l.call(d,e))??`#/${e.join("/").replace(/^\//,"")}`;return r.createVNode("a",{href:c},[t.label])},h=()=>{var a;if(!((a=i.value)!=null&&a.length))return null;u.value!==i.value.length&&(u.value=i.value.length);const t=[];return i.value.map((e,c,l)=>{t.push((e.path||"").replace(/^\//,""));const m=[...t];return r.createVNode(x.default,{key:e.path||e.label,index:c,droplist:e.children},{default:()=>{var s;return[((s=n["item-render"])==null?void 0:s.call(n,{route:e,routes:l,paths:m}))??p(e,l,m)]}})})},g=()=>{var a;const t=y.getAllElements(((a=n.default)==null?void 0:a.call(n))??[]);return u.value!==t.length&&(u.value=t.length),t.map((e,c)=>(e.props=r.mergeProps(e.props??{},{index:c}),e))};return()=>r.createVNode("div",{role:"list",class:b.b()},[n.default?g():h()])}});exports.default=B;
