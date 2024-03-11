"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("vue"),z=require("./pagination.js"),y=require("@tu-view-plus/hooks"),L=require("@tu-view-plus/utils");require("../../form/index.js");const N=require("./pagination-jumper.vue.js"),T=require("./pagination-item.vue.js"),F=require("./pagination-item-ellipsis.vue.js"),P=require("./pagination-item-step.vue.js"),J=require("./pagination-options.vue.js");require("../style/pagination.css");const q=require("../../form/src/hooks/use-form-props.js"),A=a.defineComponent({name:"TuPagination",props:z.paginationProps,emits:z.paginationEmits,setup(t,{emit:o,slots:l}){const{pageItemStyle:C,activePageItemStyle:V}=a.toRefs(t),c=y.useNamespace("pagination"),{t:k}=y.useLocale(),p=q.useFormSize(),f=q.useFormDisabled(),g=a.ref(t.defaultCurrent),b=a.ref(t.defaultPageSize),j=a.computed(()=>({[c.b()]:!0,[c.m(p.value)]:p.value,[c.m("button")]:t.button,[c.m("simple")]:t.simple,[c.is("disabled")]:f.value})),i=a.computed(()=>t.current??g.value),_=a.computed(()=>t.pageSize??b.value),n=a.computed(()=>Math.ceil(t.total/_.value)),h=e=>{e!==i.value&&L.isNumber(e)&&!t.disabled&&(g.value=e,o("update:current",e),o("change",e))},w=e=>{b.value=e,o("update:pageSize",e),o("pageSizeChange",e)},v=a.reactive({current:i,pages:n,disabled:f,style:C,activeStyle:V,onClick:h});a.watch(_,(e,u)=>{if(t.autoAdjust&&e!==u&&i.value>1){const s=u*(i.value-1)+1,d=Math.ceil(s/e);d!==i.value&&(g.value=d,o("update:current",d),o("change",d))}}),a.watch(n,(e,u)=>{t.autoAdjust&&e!==u&&i.value>1&&i.value>e&&(g.value=e,o("update:current",e),o("change",e))});const M=a.computed(()=>{const e=[];if(n.value<t.baseSize+t.bufferSize*2)for(let u=1;u<=n.value;u++)e.push(r("page",{key:u,pageNumber:u}));else{let u=1,s=n.value,d=!1,S=!1;i.value>2+t.bufferSize&&(d=!0,u=Math.min(i.value-t.bufferSize,n.value-2*t.bufferSize)),i.value<n.value-(t.bufferSize+1)&&(S=!0,s=Math.max(i.value+t.bufferSize,2*t.bufferSize+1)),d&&(e.push(r("page",{key:1,pageNumber:1})),e.push(r("more",{key:"left-ellipsis-pager",step:-(t.bufferSize*2+1)})));for(let m=u;m<=s;m++)e.push(r("page",{key:m,pageNumber:m}));S&&(e.push(r("more",{key:"right-ellipsis-pager",step:t.bufferSize*2+1})),e.push(r("page",{key:n.value,pageNumber:n.value})))}return e}),r=(e,u={})=>e==="more"?a.createVNode(F.default,a.mergeProps(u,v),{default:l["page-item-ellipsis"]}):e==="previous"?a.createVNode(P.default,a.mergeProps({type:"previous"},u,v),{default:l["page-item-step"]}):e==="next"?a.createVNode(P.default,a.mergeProps({type:"next"},u,v),{default:l["page-item-step"]}):a.createVNode(T.default,a.mergeProps(u,v),{default:l["page-item"]}),x=()=>{var s;const{showTotal:e,total:u}=t;return e&&a.createVNode("span",{class:c.e("total")},[((s=l.total)==null?void 0:s.call(l,{total:u}))??k("tu.pagination.total",{total:u})])},I=()=>{const{simple:e,showMore:u,bufferSize:s}=t;return e?a.createVNode("span",{class:c.e("simple")},[r("previous",{simple:!0}),a.createVNode(N.default,{simple:!0,disabled:f.value,current:i.value,size:p.value,pages:n.value,onChange:h},null),r("next",{simple:!0})]):a.createVNode("ul",{class:c.e("list")},[r("previous",{simple:!0}),M.value,u&&r("more",{key:"more",step:s*2+1}),r("next",{simple:!0})])},E=()=>{const{showPageSize:e}=t;return e&&a.createVNode(J.default,{disabled:f.value,sizeOptions:t.pageSizeOptions,pageSize:_.value,size:p.value,onChange:w,selectProps:t.pageSizeProps},null)},O=()=>{const{simple:e,showJumper:u}=t;return!e&&u&&a.createVNode(N.default,{disabled:t.disabled,current:i.value,pages:n.value,size:p.value,onChange:h},{"jumper-prepend":l["jumper-prepend"],"jumper-append":l["jumper-append"]})};return()=>a.createVNode("div",{class:j.value},[x(),I(),E(),O()])}});exports.default=A;
