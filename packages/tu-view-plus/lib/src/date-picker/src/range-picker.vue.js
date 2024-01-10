"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("vue"),de=require("./range-picker.js");require("../../form/index.js");const n=require("@tu-view-plus/utils"),E=require("@tu-view-plus/hooks"),ra=require("@tu-view-plus/icons-vue"),la=require("./hooks/use-format.js"),oa=require("./hooks/use-is-disabled-date.js"),Z=require("./hooks/use-value-format.js"),F=require("../../time-picker/src/utils.js"),na=require("./hooks/use-range-picker-state.js"),ia=require("./hooks/use-range-header-value.js"),sa=require("./hooks/use-range-time-picker-value.js"),d=require("./utils.js"),ca=require("../../range-picker/index.js"),da=require("../../trigger/index.js"),va=require("../../icon/index.js"),ve=require("./range-picker-dropdown.vue.js"),pe=require("../../form/src/hooks/use-form-props.js"),pa=a.defineComponent({name:"TuRangePicker",inheritAttrs:!1}),fa=a.defineComponent({...pa,props:de.rangePickerProps,emits:de.rangePickerEmits,setup(fe,{emit:me}){const B=fe,c=me,P=a.useSlots(),{t:s}=E.useLocale(),{mode:b,showTime:N,format:ge,modelValue:Ve,defaultValue:he,popupVisible:Pe,defaultPopupVisible:A,placeholder:L,timePickerProps:m,disabled:g,disabledDate:ke,disabledTime:Se,pickerValue:Ce,defaultPickerValue:be,valueFormat:ye,size:Te,error:we,exchangeTime:He,previewShortcut:_,showConfirmBtn:Re}=a.toRefs(B);pe.useFormSize();const z=pe.useFormDisabled(),De=a.computed(()=>(L==null?void 0:L.value)||{date:[s("tu.datepicker.rangePlaceholder.dateStart"),s("tu.datepicker.rangePlaceholder.dateEnd")],month:[s("tu.datepicker.rangePlaceholder.monthStart"),s("tu.datepicker.rangePlaceholder.monthEnd")],year:[s("tu.datepicker.rangePlaceholder.yearStart"),s("tu.datepicker.rangePlaceholder.yearEnd")],week:[s("tu.datepicker.rangePlaceholder.weekStart"),s("tu.datepicker.rangePlaceholder.weekEnd")],quarter:[s("tu.datepicker.rangePlaceholder.quarterStart"),s("tu.datepicker.rangePlaceholder.quarterEnd")]}[b.value]||[s("tu.datepicker.rangePlaceholder.dateStart"),s("tu.datepicker.rangePlaceholder.dateEnd")]),{format:y,valueFormat:j,parseValueFormat:k}=la.useFormat(a.reactive({mode:b,format:ge,showTime:N,valueFormat:ye})),S=a.computed(()=>{const e=g.value===!0||z.value||n.isArray(g.value)&&g.value[0]===!0,t=g.value===!0||z.value||n.isArray(g.value)&&g.value[1]===!0;return[e,t]});a.computed(()=>S.value[0]&&S.value[1]);function ee(e=0){return S.value[e]?e^1:e}const x=a.ref(),l=a.ref(ee()),U=a.computed(()=>{const e=l.value,t=e^1;return S.value[t]?e:t}),qe=a.computed(()=>S.value[l.value^1]),{value:T,setValue:Ie}=na.useRangePickerState(a.reactive({modelValue:Ve,defaultValue:he,format:k})),[V,W]=E.useState(),[Ee,w]=E.useState(),G=a.computed(()=>V.value??T.value),o=a.computed(()=>Ee.value??V.value??T.value),[J,v]=E.useState(),p=a.ref(),f=a.ref(),[h,Fe]=E.useMergeState(A==null?void 0:A.value,a.reactive({value:Pe})),K=e=>{h.value!==e&&(Fe(e),c("popup-visible-change",e),c("update:popupVisible",e))},{startHeaderValue:Q,endHeaderValue:X,startHeaderOperations:xe,endHeaderOperations:Me,resetHeaderValue:M,setHeaderValue:ae}=ia.useRangeHeaderValue(a.reactive({mode:b,startHeaderMode:p,endHeaderMode:f,value:Ce,defaultValue:be,selectedValue:o,format:k,onChange:e=>{const t=Z.getReturnRangeValue(e,j.value),u=F.getFormattedValue(e,k.value),r=n.getDateValue(e);c("picker-value-change",t,r,u),c("update:pickerValue",t)}}));function Oe(e){p.value=e}function $e(e){f.value=e}function Be(e){let t=Q.value;t=t.set("year",e.year()),p.value==="month"&&(t=t.set("month",e.month())),ae([t,X.value]),p.value=void 0}function Ne(e){let t=X.value;t=t.set("year",e.year()),f.value==="month"&&(t=t.set("month",e.month())),ae([Q.value,t]),f.value=void 0}const H=a.ref([o.value[0]||n.getNow(),o.value[1]||n.getNow()]);a.watch(o,()=>{const[e,t]=o.value;H.value[0]=e||H.value[0],H.value[1]=t||H.value[1]});const[R,Ae,Le]=sa.useRangeTimePickerValue(a.reactive({timePickerProps:m,selectedValue:o})),te=a.computed(()=>b.value==="date"&&N.value),ue=a.computed(()=>te.value||(m==null?void 0:m.value)),D=oa.useIsDisabledDate(a.reactive({mode:b,isRange:!0,showTime:N,disabledDate:ke,disabledTime:Se})),O=a.computed(()=>te.value||Re.value),ze=a.computed(()=>O.value&&(!d.isCompleteRangeValue(G.value)||D(G.value[0],"start")||D(G.value[1],"end")));a.watch(h,e=>{p.value=void 0,f.value=void 0,W(void 0),w(void 0),e&&(M(),Le(),l.value=ee(l.value),a.nextTick(()=>ne(l.value))),e||v(void 0)}),a.watch(l,()=>{B.disabledInput&&(ne(l.value),v(void 0))});function je(e,t){const u=e?Z.getReturnRangeValue(e,j.value):void 0,r=F.getFormattedValue(e,k.value),i=n.getDateValue(e);n.isValueChange(e,T.value)&&(c("update:modelValue",u),c("change",u,i,r)),t&&c("ok",u,i,r)}function re(e){let t=n.getSortedDayjsArray(e);return ue.value&&!He.value&&(t=[I(t[0],e[0]),I(t[1],e[1])]),t}function q(e,t,u){if(D(e==null?void 0:e[0],"start")||D(e==null?void 0:e[1],"end"))return;let r=e?[...e]:void 0;d.isCompleteRangeValue(r)&&(r=re(r)),je(r,u),Ie(r||[]),W(void 0),w(void 0),v(void 0),p.value=void 0,f.value=void 0,n.isBoolean(t)&&K(t)}function le(e){const t=Z.getReturnRangeValue(e,j.value),u=F.getFormattedValue(e,k.value),r=n.getDateValue(e);c("select",t,r,u)}function Y(e,t){const{emitSelect:u=!1,updateHeader:r=!1}=t||{};let i=[...e];d.isCompleteRangeValue(i)&&(i=re(i)),W(i),w(void 0),v(void 0),p.value=void 0,f.value=void 0,u&&le(i),r&&M()}function oe(e,t){const{updateHeader:u=!1}=t||{};w(e),v(void 0),u&&M()}function ne(e){x.value&&x.value.focus&&x.value.focus(e)}function I(e,t){return ue.value?d.mergeValueWithTime(n.getNow(),e,t):e}function Ue(e){K(e)}function We(e){if(V.value&&o.value[U.value]&&(!O.value||!d.isCompleteRangeValue(V.value))){const t=[...o.value],u=I(e,R.value[l.value]);t[l.value]=u,oe(t)}}function ie(e=!1){return qe.value?[...T.value]:V.value?e||!d.isCompleteRangeValue(V.value)?[...V.value]:[]:e?[...T.value]:[]}function Ge(e){const t=ie(),u=I(e,R.value[l.value]);t[l.value]=u,le(t),!O.value&&d.isCompleteRangeValue(t)?q(t,!1):(Y(t),d.isCompleteRangeValue(t)?l.value=0:l.value=U.value)}function Je(e,t){const u=t==="start"?0:1,r=I(R.value[u],e),i=[...R.value];i[u]=r,Ae(i);const C=ie(!0);C[u]&&(C[u]=r,Y(C,{emitSelect:!0}))}let $;a.onUnmounted(()=>{clearTimeout($)});function Ke(e){clearTimeout($),oe(e,{updateHeader:!0})}function Qe(){clearTimeout($),$=setTimeout(()=>{w(void 0),v(void 0),M()},100)}function Xe(e,t){c("select-shortcut",t),q(e,!1)}function Ye(){q(o.value,!1,!0)}function Ze(e){e.stopPropagation(),q(void 0),c("clear")}function _e(e){K(!0);const t=e.target.value;if(!t){v(void 0);return}const u=F.getFormattedValue(o.value,y.value),r=n.isArray(J.value)?[...J.value]:u||[];if(r[l.value]=t,v(r),!F.isValidInputValue(t,y.value))return;const i=n.dayjs(t,y.value);if(D(i,l.value===0?"start":"end"))return;const C=n.isArray(o.value)?[...o.value]:[];C[l.value]=i,Y(C,{updateHeader:!0})}function ea(){d.isValidRangeValue(o.value)?q(o.value,!1):l.value=U.value}const aa=a.computed(()=>({format:y.value,...n.omit((m==null?void 0:m.value)||{},["defaultValue"]),visible:h.value})),se=a.computed(()=>({prev:P["icon-prev"],prevDouble:P["icon-prev-double"],next:P["icon-next"],nextDouble:P["icon-next-double"]})),ta=a.reactive({headerValue:Q,headerOperations:xe,headerIcons:se}),ua=a.reactive({headerValue:X,headerOperations:Me,headerIcons:se}),ce=a.computed(()=>({...n.pick(B,["mode","showTime","shortcuts","shortcutsPosition","dayStartOfWeek","disabledDate","disabledTime","hideTrigger","abbreviation"]),format:k.value,value:o.value,showConfirmBtn:O.value,confirmBtnDisabled:ze.value,timePickerValue:R.value,timePickerProps:aa.value,extra:P.extra,dateRender:P.cell,startHeaderProps:ta,endHeaderProps:ua,footerValue:H.value,disabled:S.value,visible:h.value,onCellClick:Ge,onCellMouseEnter:We,onShortcutClick:Xe,onShortcutMouseEnter:_.value?Ke:void 0,onShortcutMouseLeave:_.value?Qe:void 0,onConfirm:Ye,onTimePickerSelect:Je,startHeaderMode:p.value,endHeaderMode:f.value,onStartHeaderLabelClick:Oe,onEndHeaderLabelClick:$e,onStartHeaderSelect:Be,onEndHeaderSelect:Ne}));return(e,t)=>e.hideTrigger?(a.openBlock(),a.createBlock(ve.default,a.normalizeProps(a.mergeProps({key:1},{...e.$attrs,...ce.value})),null,16)):(a.openBlock(),a.createBlock(a.unref(da.TuTrigger),a.mergeProps({key:0},e.triggerProps,{trigger:"click","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"","click-to-close":!1,"popup-offset":4,"unmount-on-close":e.unmountOnClose,position:e.position,disabled:a.unref(z)||e.readonly,"popup-visible":a.unref(h),"popup-container":e.popupContainer,onPopupVisibleChange:Ue}),{content:a.withCtx(()=>[a.createVNode(ve.default,a.normalizeProps(a.guardReactiveProps({...e.$attrs,...ce.value})),null,16)]),default:a.withCtx(()=>[a.renderSlot(e.$slots,"default",{},()=>[a.createVNode(a.unref(ca.TuRangePicker),a.mergeProps({ref_key:"refInput",ref:x},e.$attrs,{focusedIndex:l.value,"onUpdate:focusedIndex":t[0]||(t[0]=u=>l.value=u),size:a.unref(Te),focused:a.unref(h),visible:a.unref(h),error:a.unref(we),disabled:a.unref(g),readonly:e.readonly||e.disabledInput,"allow-clear":e.allowClear&&!e.readonly,placeholder:De.value,"input-value":a.unref(J),value:o.value,format:a.unref(y),onClear:Ze,onChange:_e,onPressEnter:ea}),a.createSlots({"suffix-icon":a.withCtx(()=>[a.renderSlot(e.$slots,"suffix-icon",{},()=>[a.createVNode(a.unref(va.TuIcon),null,{default:a.withCtx(()=>[a.createVNode(a.unref(ra.Calendar))]),_:1})])]),separator:a.withCtx(()=>[a.renderSlot(e.$slots,"separator",{},()=>[a.createTextVNode(a.toDisplayString(e.separator||"-"),1)])]),_:2},[e.$slots.prefix?{name:"prefix",fn:a.withCtx(()=>[a.renderSlot(e.$slots,"prefix")]),key:"0"}:void 0]),1040,["focusedIndex","size","focused","visible","error","disabled","readonly","allow-clear","placeholder","input-value","value","format"])])]),_:3},16,["unmount-on-close","position","disabled","popup-visible","popup-container"]))}});exports.default=fa;
