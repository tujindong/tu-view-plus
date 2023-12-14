"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),h=require("./time-picker-dropdown.js"),q=require("@tu-view-plus/hooks"),l=require("@tu-view-plus/utils"),X=require("./hooks/use-is-disabled-time.js"),Y=require("./hooks/use-time-format.js"),Z=require("./hooks/use-time-list.js"),d=require("./time-picker-column.vue.js"),_=require("../../button/index.js");require("../style/time-picker.css");const ee=e.defineComponent({name:"TuTimePickerDropdown"}),te=e.defineComponent({...ee,props:h.timePickerDropdownProps,emits:h.timePickerDropdownEmits,setup(z,{emit:P}){const f=z,$=P,{t:y}=q.useLocale(),{value:r,visible:u,format:g,step:x,use12Hours:E,hideDisabledOptions:F,disabledHours:S,disabledMinutes:T,disabledSeconds:V,disabled:L}=e.toRefs(f),i=q.useNamespace("time-picker"),{columns:c,use12Hours:a,format:M}=Y.useTimeFormat(e.reactive({format:g,use12Hours:E})),n=e.ref(r==null?void 0:r.value),N=t=>{n.value=t},p=e.computed(()=>{var s;const t=(s=n.value)==null?void 0:s.hour();return l.isUndefined(t)||!a.value?t:t>12?t-12:t===0?12:t}),v=e.computed(()=>{var t;return(t=n.value)==null?void 0:t.minute()}),k=e.computed(()=>{var t;return(t=n.value)==null?void 0:t.second()}),b=e.computed(()=>{var s;const t=(s=n.value)==null?void 0:s.hour();return!l.isUndefined(t)&&t>=12?"pm":"am"}),{hours:U,minutes:j,seconds:I,ampmList:O}=Z.useTimeList(e.reactive({format:M,step:x,use12Hours:a,hideDisabledOptions:F,disabledHours:S,disabledMinutes:T,disabledSeconds:V,selectedHour:p,selectedMinute:v,selectedSecond:k,selectedAmpm:b,disabled:L})),R=X.useIsDisabledTime(e.reactive({disabledHours:S,disabledMinutes:T,disabledSeconds:V})),A=e.computed(()=>R(n.value)),G=e.computed(()=>({[i.e("dropdown")]:!0,[i.em("dropdown",f.size)]:f.size})),J=t=>{l.isUndefined(t)||$("confirm",t)},D=t=>{N(t),$("select",t)},m=(t,s="hour")=>{let o;const C=p.value||"00",B=v.value||"00",w=k.value||"00",W=b.value||"am";switch(s){case"hour":o=`${t}:${B}:${w}`;break;case"minute":o=`${C}:${t}:${w}`;break;case"second":o=`${C}:${B}:${t}`;break;case"ampm":o=`${C}:${B}:${w} ${t}`;break;default:o="00:00:00"}let H="HH:mm:ss";a.value&&(H="HH:mm:ss a",s!=="ampm"&&(o=`${o} ${W}`)),o=l.dayjs(o,H),D(o)},K=()=>{const t=l.dayjs(new Date);D(t)},Q=()=>{J(n.value)};return e.watch([u,r],()=>{u.value&&N(r==null?void 0:r.value)}),(t,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(G.value)},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(i).e("column-wrap"))},[e.unref(c).includes("H")||e.unref(c).includes("h")?(e.openBlock(),e.createBlock(d.default,{key:0,value:p.value,list:e.unref(U),visible:e.unref(u),onSelect:s[0]||(s[0]=o=>m(o,"hour"))},null,8,["value","list","visible"])):e.createCommentVNode("",!0),e.unref(c).includes("m")?(e.openBlock(),e.createBlock(d.default,{key:1,value:v.value,list:e.unref(j),visible:e.unref(u),onSelect:s[1]||(s[1]=o=>m(o,"minute"))},null,8,["value","list","visible"])):e.createCommentVNode("",!0),e.unref(c).includes("s")?(e.openBlock(),e.createBlock(d.default,{key:2,value:k.value,list:e.unref(I),visible:e.unref(u),onSelect:s[2]||(s[2]=o=>m(o,"second"))},null,8,["value","list","visible"])):e.createCommentVNode("",!0),e.unref(a)?(e.openBlock(),e.createBlock(d.default,{key:3,value:b.value,list:e.unref(O),visible:e.unref(u),onSelect:s[3]||(s[3]=o=>m(o,"ampm"))},null,8,["value","list","visible"])):e.createCommentVNode("",!0)],2),t.$slots["extra-footer"]?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(i).e("footer-extra-wrap"))},[e.renderSlot(t.$slots,"extra-footer")],2)):e.createCommentVNode("",!0),t.hideFooter?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(i).e("footer-button-wrap"))},[t.isRange?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.unref(_.TuButton),{key:0,type:"text",size:"mini",onClick:K},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(y)("tu.datepicker.now")),1)]),_:1})),e.createVNode(e.unref(_.TuButton),{type:"primary",size:"mini",disabled:A.value||!n.value,onClick:Q},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(y)("tu.datepicker.confirm")),1)]),_:1},8,["disabled"])],2))],2))}});exports.default=te;
