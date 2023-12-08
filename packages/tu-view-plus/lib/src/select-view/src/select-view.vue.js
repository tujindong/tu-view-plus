"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("vue"),F=require("@tu-view-plus/hooks"),i=require("@tu-view-plus/icons-vue"),g=require("./select-view.js"),R=require("../../input-label/index.js"),z=require("../../input-tag/index.js"),r=require("../../icon/index.js");require("../../form/index.js");require("../style/select-view.css");const x=require("../../form/src/hooks/use-form-props.js"),P=n.defineComponent({name:"TuSelectView",props:g.selectViewProps,emits:g.selectViewEmits,setup(e,{emit:c,slots:u}){const a=F.useNamespace("select-view"),{opened:N}=n.toRefs(e),d=n.ref(),s=n.computed(()=>{var l;return(l=d.value)==null?void 0:l.inputRef}),S=n.computed(()=>e.modelValue.length===0),T=n.computed(()=>e.allowSearch||e.allowCreate),q=n.computed(()=>e.allowClear&&!e.disabled&&!S.value),m=x.useFormSize(),f=x.useFormDisabled(),v=n.computed(()=>({[a.b()]:!0,[a.m(e.multiple?"multiple":"single")]:!0,[a.is("opened")]:e.opened})),C=(l,o)=>{c("remove",l,o)},V=l=>{c("focus",l)},w=l=>{c("blur",l)},I=l=>{c("clear",l)};return n.watch(N,l=>{!l&&s.value&&s.value.isSameNode(document.activeElement)&&s.value.blur()}),()=>{var h;const l=()=>{var t,b;return e.loading?((t=u["loading-icon"])==null?void 0:t.call(u))??n.createVNode(r.TuIcon,{class:["is-loading",a.e("icon"),a.em("icon","loading")]},{default:()=>[n.createVNode(i.Loading,null,null)]}):e.allowSearch&&e.opened?((b=u["search-icon"])==null?void 0:b.call(u))??n.createVNode(r.TuIcon,{class:[a.e("icon"),a.em("icon","search")]},{default:()=>[n.createVNode(i.Search,null,null)]}):u["arrow-icon"]?u["arrow-icon"]():n.createVNode(r.TuIcon,{class:[a.e("icon"),a.em("icon","arrow")]},{default:()=>[n.createVNode(i.ArrowDown,null,null)]})},o=()=>n.createVNode(n.Fragment,null,[q.value&&n.createVNode(r.TuIcon,{class:[a.e("icon"),a.em("icon","clear")],onMousedown:t=>t.stopPropagation(),onClick:I},{default:()=>[n.createVNode(i.Close,null,null)]}),l()]);return e.multiple?n.createVNode(z.TuInputTag,{ref:d,class:v.value,"model-value":e.modelValue,"input-value":e.inputValue,focused:e.opened,placeholder:e.placeholder,disabled:f.value,size:m.value,maxTagCount:e.maxTagCount,disabledInput:!e.allowSearch&&!e.allowCreate,"retain-input-value":!0,"uninject-form-item-context":!0,onRemove:C,onFocus:V,onBlur:w},{prefix:u.prefix,suffix:o,tag:u.label}):n.createVNode(R.TuInputLabel,{ref:d,class:v.value,"model-value":(h=e.modelValue)==null?void 0:h[0],"input-value":e.inputValue,focused:e.opened,placeholder:e.placeholder,disabled:f.value,size:m.value,"enabled-input":T.value,"uninject-form-item-context":!0,onFocus:V,onBlur:w},{default:u.label,prefix:u.prefix,suffix:o})}}});exports.default=P;
