"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue"),G=require("./picker.js"),P=require("@tu-view-plus/hooks"),Ee=require("./hooks/use-format.js"),Le=require("./hooks/use-picker-state.js"),Oe=require("./hooks/use-is-disabled-date.js"),Re=require("./hooks/use-value-format.js"),je=require("./hooks/use-header-value.js"),We=require("./hooks/use-time-picker-value.js"),u=require("@tu-view-plus/utils"),Ae=require("./utils.js");require("../../form/index.js");const y=require("../../time-picker/src/utils.js"),Ue=require("../../trigger/index.js"),J=require("./picker-dropdown.vue.js"),Ge=require("../../picker/index.js"),Je=require("../../icon/index.js"),Ke=require("@tu-view-plus/icons-vue");require("../style/index.css");const K=require("../../form/src/hooks/use-form-props.js"),Qe=t.defineComponent({name:"Picker",inheritAttrs:!1}),Xe=t.defineComponent({...Qe,props:G.pickerProps,emits:G.pickerEmits,setup(Q,{emit:X}){let b;const C=Q,r=X,d=t.useSlots(),{mode:n,modelValue:Y,defaultValue:Z,format:p,valueFormat:ee,placeholder:F,popupVisible:te,defaultPopupVisible:oe,showTime:S,timePickerProps:i,disabledDate:ae,disabledTime:ue,readonly:I,pickerValue:re,defaultPickerValue:le,previewShortcut:x,showConfirmBtn:ne}=t.toRefs(C),{t:v}=P.useLocale(),z=K.useFormSize(),B=K.useFormDisabled(),T=t.ref(),l=t.ref(),[s,ie]=P.useMergeState(oe.value,t.reactive({value:te})),[se,h]=P.useState(),E=t.computed(()=>p&&u.isFunction(p.value)?e=>{var o;return(o=p.value)==null?void 0:o.call(p,u.getDateValue(e))}:q.value),ce=t.computed(()=>!I.value&&!u.isFunction(E.value)),{format:q,valueFormat:de,parseValueFormat:m}=Ee.useFormat(t.reactive({format:p,mode:n,showTime:S,valueFormat:ee})),pe=t.computed(()=>(F==null?void 0:F.value)||{date:v("tu.datepicker.placeholder.date"),month:v("tu.datepicker.placeholder.month"),year:v("tu.datepicker.placeholder.year"),week:v("tu.datepicker.placeholder.week"),quarter:v("tu.datepicker.placeholder.quarter")}[n.value]||v("tu.datepicker.placeholder.date")),L=t.computed(()=>O.value??w.value),ve=t.computed(()=>k.value&&(!L.value||H(L.value))),me=t.computed(()=>({format:q.value,...u.omit((i==null?void 0:i.value)||{},["defaultValue"]),visible:s.value})),k=t.computed(()=>S.value||ne.value),{value:w,setValue:fe}=Le.usePickerState(t.reactive({modelValue:Y,defaultValue:Z,format:m})),M=Re.useReturnValue(t.reactive({format:de})),[O,$]=P.useState(),[Ve,g]=P.useState(),c=t.computed(()=>Ve.value??O.value??w.value),H=Oe.useIsDisabledDate(t.reactive({mode:n,disabledDate:ae,disabledTime:ue,showTime:S})),{headerValue:R,setHeaderValue:he,headerOperations:ke,resetHeaderValue:ge}=je.useHeaderValue(t.reactive({mode:n,value:re,defaultValue:le,selectedValue:c,format:m,onChange:e=>{const o=M(e),a=y.getFormattedValue(e,m.value),V=u.getDateValue(e);r("picker-value-change",o,V,a),r("update:pickerValue",o)}})),[j,,Pe]=We.useTimePickerValue(t.reactive({timePickerProps:i,selectedValue:c})),be=t.computed(()=>n.value==="date"&&S.value),N=e=>{s.value!==e&&(ie(e),r("popup-visible-change",e),r("update:popupVisible",e))},Ce=(e,o)=>{const a=e?M(e):void 0,V=y.getFormattedValue(e,m.value),D=u.getDateValue(e);u.isValueChange(e,w.value)&&(r("update:modelValue",a),r("change",a,D,V)),o&&r("ok",a,D,V)},W=(e,o)=>{if($(e),g(void 0),h(void 0),l.value=void 0,o){const a=e?M(e):void 0,V=y.getFormattedValue(e,m.value),D=u.getDateValue(e);r("select",a,D,V)}},f=(e,o,a)=>{H(e)||(Ce(e,a),fe(e),$(void 0),g(void 0),h(void 0),l.value=void 0,u.isBoolean(o)&&N(o))},Se=e=>{B.value||N(e)},Te=e=>{e.stopPropagation(),f(void 0),r("clear")},qe=e=>{N(!0);const o=e.target.value;if(h(o),!y.isValidInputValue(o,q.value))return;const a=u.dayjs(o,q.value);H(a)||(k.value?W(a):f(a,!0))},we=()=>{f(c.value,!1)},De=()=>{},A=(e,o)=>!be.value&&!(i!=null&&i.value)?e:Ae.mergeValueWithTime(u.getNow(),e,o),_=e=>{k.value?W(e,!0):f(e,!1)},ye=e=>{const o=A(e,j.value);_(o)},Fe=e=>{const o=A(c.value||u.getNow(),e);_(o)},Ie=()=>{f(c.value,!1,!0)},Be=(e,o)=>{r("select-shortcut",o),f(e,!1)},Me=e=>{clearTimeout(b),g(e),h(void 0)},$e=()=>{clearTimeout(b),b=setTimeout(()=>{g(void 0)},100)},He=e=>{l.value=e},Ne=e=>{let o=R.value;if(o=o.set("year",e.year()),l.value==="month"&&(o=o.set("month",e.month())),he(o),n.value==="quarter"||n.value==="month"){l.value=void 0;return}l.value=l.value==="year"?"month":void 0},_e=()=>{l.value="year"},xe=e=>{T.value&&T.value.focus&&T.value.focus(e)},ze=()=>{C.disabledInput&&xe()},U=t.computed(()=>({...u.pick(C,["mode","shortcuts","shortcutsPosition","dayStartOfWeek","disabledDate","disabledTime","showTime","hideTrigger","abbreviation"]),size:z.value,showNowBtn:C.showNowBtn&&n.value==="date",format:m.value,value:c.value,visible:s.value,showConfirmBtn:k.value,confirmBtnDisabled:ve.value,timePickerProps:me.value,extra:d.extra,dateRender:d.cell,headerValue:R.value,headerIcons:{prev:d["icon-prev"],prevDouble:d["icon-prev-double"],next:d["icon-next"],nextDouble:d["icon-next-double"]},headerOperations:ke.value,timePickerValue:j.value,headerMode:l.value,onCellClick:ye,onTimePickerSelect:Fe,onConfirm:Ie,onShortcutClick:Be,onShortcutMouseEnter:x.value?Me:void 0,onShortcutMouseLeave:x.value?$e:void 0,onTodayBtnClick:_,onHeaderLabelClick:He,onHeaderSelect:Ne,onMonthHeaderClick:_e}));return t.watch(s,e=>{$(void 0),g(void 0),l.value=void 0,e&&(ge(),Pe()),e||h(void 0)}),t.onUnmounted(()=>{clearTimeout(b)}),(e,o)=>e.hideTrigger?(t.openBlock(),t.createBlock(J.default,t.normalizeProps(t.mergeProps({key:1},{...e.$attrs,...U.value})),null,16)):(t.openBlock(),t.createBlock(t.unref(Ue.TuTrigger),t.mergeProps({key:0},e.triggerProps,{trigger:"click","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"","click-to-close":!1,"popup-offset":10,position:e.position,disabled:t.unref(B)||t.unref(I),"prevent-focus":!0,"popup-visible":t.unref(s),"unmount-on-close":e.unmountOnClose,"popup-container":e.popupContainer,onPopupVisibleChange:Se}),{content:t.withCtx(()=>[t.createVNode(J.default,t.mergeProps(U.value,{onClick:ze}),null,16)]),default:t.withCtx(()=>[t.renderSlot(e.$slots,"default",{},()=>[t.createVNode(t.unref(Ge.TuPicker),t.mergeProps({ref_key:"refInput",ref:T},e.$attrs,{size:t.unref(z),focused:t.unref(s),visible:t.unref(s),error:e.error,disabled:t.unref(B),readonly:!ce.value||e.disabledInput,"allow-clear":e.allowClear&&!t.unref(I),placeholder:pe.value,"input-value":t.unref(se),value:k.value?c.value:t.unref(w),format:E.value,onClear:Te,onChange:qe,onPressEnter:we,onBlur:De}),t.createSlots({"suffix-icon":t.withCtx(()=>[t.renderSlot(e.$slots,"suffix-icon",{},()=>[t.createVNode(t.unref(Je.TuIcon),null,{default:t.withCtx(()=>[t.createVNode(t.unref(Ke.Calendar))]),_:1})])]),_:2},[e.$slots.prefix?{name:"prefix",fn:t.withCtx(()=>[t.renderSlot(e.$slots,"prefix")]),key:"0"}:void 0]),1040,["size","focused","visible","error","disabled","readonly","allow-clear","placeholder","input-value","value","format"])])]),_:3},16,["position","disabled","popup-visible","unmount-on-close","popup-container"]))}});exports.default=Xe;