"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),D=require("./date.js"),E=require("@tu-view-plus/hooks"),v=require("@tu-view-plus/utils"),P=require("@tu-view-plus/icons-vue");require("b-tween");const K=require("../../hooks/use-merge-state.js"),q=require("../../utils.js"),Q=require("../header.vue.js"),X=require("../week-list.vue.js"),Z=require("../body.vue.js"),x=require("../../../../time-picker/src/time-picker-dropdown.vue.js"),L=require("../../../../icon/index.js"),ee=e.defineComponent({name:"TuDate"}),te=e.defineComponent({...ee,props:D.dateProps,emits:D.dateEmits,setup($,{emit:M}){const S=$,n=M,r=E.useNamespace("picker"),{t:z}=E.useLocale(),{isRange:m,headerValue:p,footerValue:o,dayStartOfWeek:U,isSameTime:f,mode:u,showTime:c,currentView:B,disabledTime:i}=e.toRefs(S),[_,Y]=K.useMergeState("date",e.reactive({value:B})),N=e.computed(()=>(u==null?void 0:u.value)==="week"),a=e.computed(()=>N.value?"dropdown-week":"dropdown-date"),d=e.computed(()=>c.value&&m.value),V=e.computed(()=>!c.value||!d.value||_.value==="date"),I=e.computed(()=>p.value.format("YYYY-MM")),g=e.computed(()=>{const t=[0,1,2,3,4,5,6],l=Math.max(U.value%7,0);return[...t.slice(l),...t.slice(0,l)]}),R=e.computed(()=>{const t=v.methods.startOf(p.value,"month"),l=t.day(),y=t.daysInMonth(),C=g.value.indexOf(l),k=q.newArray(42);for(let s=0;s<k.length;s++)k[s]={...j(v.methods.add(t,s-C,"day")),isPrev:s<C,isNext:s>C+y-1};return q.newArray(6).map((s,b)=>{const w=k.slice(b*7,(b+1)*7);if(N.value){const T=w[0].value;w.unshift({label:T.week(),value:T})}return w})}),W=e.computed(()=>(f==null?void 0:f.value)||((t,l)=>t.isSame(l,"day"))),O=e.computed(()=>c.value&&(!d.value||_.value==="time")),H=e.computed(()=>{var t;return c.value&&((t=i==null?void 0:i.value)==null?void 0:t.call(i,v.getDateValue((o==null?void 0:o.value)||v.getNow())))||{}}),A=e.computed(()=>({[r.e(a.value)]:!0,[r.em(a.value,"with-view-tabs")]:d.value})),j=t=>({label:t.date(),value:t}),F=t=>{n("select",t.value)},G=t=>{n("cell-mouse-enter",t.value)},J=t=>{n("time-picker-select",t)},h=t=>{n("current-view-change",t),n("update:currentView",t),Y(t)};return(t,l)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(A.value)},[V.value?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(r).e(`${a.value}-inner`))},[e.createVNode(Q.default,e.mergeProps({...t.headerOperations,icons:t.headerIcons},{title:I.value,mode:e.unref(u),value:e.unref(p),"on-label-click":t.onHeaderLabelClick}),null,16,["title","mode","value","on-label-click"]),e.createVNode(X.default,{"week-list":g.value},null,8,["week-list"]),e.createVNode(Z.default,{mode:e.unref(u),rows:R.value,value:e.unref(m)?void 0:t.value,"range-values":t.rangeValues,"disabled-date":t.disabledDate,"is-same-time":W.value,"date-render":t.dateRender,onCellClick:F,onCellMouseEnter:G},null,8,["mode","rows","value","range-values","disabled-date","is-same-time","date-render"]),O.value?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(r).e(`${a.value}-timepicker`))},[e.createElementVNode("header",{class:e.normalizeClass(e.unref(r).e(`${a.value}-timepicker-title`))},e.toDisplayString(e.unref(z)("tu.datepicker.selectTime")),3),e.createVNode(x.default,e.mergeProps({...t.timePickerProps,...H.value},{"hide-footer":"",value:t.value||e.unref(m)?t.timePickerValue:void 0,disabled:t.disabled,onSelect:J}),null,16,["value","disabled"])],2)):e.createCommentVNode("",!0),d.value?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(r).e(`${a.value}-footer`))},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(r).e(`${a.value}-view-tabs`))},[e.createElementVNode("div",{class:e.normalizeClass([e.unref(r).e(`${a.value}-view-tab-pane`),{[e.unref(r).is("active")]:V.value}]),onClick:l[0]||(l[0]=y=>h("date"))},[e.createVNode(e.unref(L.TuIcon),null,{default:e.withCtx(()=>[e.createVNode(e.unref(P.Calendar))]),_:1}),e.createElementVNode("span",{class:e.normalizeClass(`${a.value}-view-tab-pane-text`)},e.toDisplayString(e.unref(o)&&e.unref(o).format("YYYY-MM-DD")),3)],2),e.createElementVNode("div",{class:e.normalizeClass([`${a.value}-view-tab-pane`,{[`${a.value}-view-tab-pane-active`]:O.value}]),onClick:l[1]||(l[1]=()=>h("time"))},[e.createVNode(e.unref(L.TuIcon),null,{default:e.withCtx(()=>[e.createVNode(e.unref(P.Clock))]),_:1}),e.createElementVNode("span",{class:e.normalizeClass(`${a.value}-view-tab-pane-text`)},e.toDisplayString(t.timePickerValue&&t.timePickerValue.format("HH:mm:ss")),3)],2)],2)],2)):e.createCommentVNode("",!0)],2)):e.createCommentVNode("",!0)],2))}});exports.default=te;
