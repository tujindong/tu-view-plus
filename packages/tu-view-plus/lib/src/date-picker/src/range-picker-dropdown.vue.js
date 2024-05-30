"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),ee=require("@tu-view-plus/hooks"),k=require("@tu-view-plus/utils"),re=require("@tu-view-plus/constants"),z=require("./range-picker-dropdown.js"),te=require("./utils.js"),b=require("./dropdown/year/year.vue.js"),D=require("./dropdown/quarter/quarter.vue.js"),y=require("./dropdown/month/month.vue.js"),M=require("./dropdown/week/week.vue.js"),R=require("./dropdown/date/date.vue.js"),C=require("./dropdown/shortcuts.vue.js"),oe=require("./dropdown/footer.vue.js"),ae=e.defineComponent({name:"TuRangePickerDropdown"}),ne=e.defineComponent({...ae,props:z.rangePickerDropdownProps,emits:z.rangePickerDropdownEmits,setup(H,{emit:L}){const O=H,t=L,s=ee.useNamespace("picker"),{shortcuts:w,shortcutsPosition:f,format:W,hideTrigger:V,value:d,disabledDate:n,disabledTime:l,startHeaderProps:$,endHeaderProps:I,dateRender:u,visible:T,startHeaderMode:m,endHeaderMode:p,size:v}=e.toRefs(O),P=e.computed(()=>k.isArray(w.value)&&w.value.length),g=e.ref("date"),j=e.computed(()=>({[s.e("range-dropdown")]:!0,[s.em("dropdown",v==null?void 0:v.value)]:v==null?void 0:v.value,[s.em("range-dropdown","dropdown-only")]:V==null?void 0:V.value,[s.em("range-dropdown","shortcuts-placement-left")]:P.value&&f.value==="left",[s.em("range-dropdown","shortcuts-placement-right")]:P.value&&f.value==="right"})),h=r=>k.getDayjsValue(te.normalizeRangeValue(k.isFunction(r.value)?r.value():r.value),r.format||W.value),U=r=>{t("shortcut-click",h(r),r)},A=r=>{t("shortcut-mouse-enter",h(r))},G=r=>{t("shortcut-mouse-leave",h(r))},S=r=>{t("cell-click",r)},_=r=>{t("cell-mouse-enter",r)},J=()=>{t("confirm")},K=r=>{t("time-picker-select",r,"start")},Q=r=>{t("time-picker-select",r,"end")},X=r=>{t("start-header-label-click",r)},Y=r=>{t("end-header-label-click",r)},Z=r=>{t("start-header-select",r)},x=r=>{t("end-header-select",r)},E=r=>k.isFunction(n==null?void 0:n.value)?o=>{var a;return((a=n==null?void 0:n.value)==null?void 0:a.call(n,o,r===0?"start":"end"))||!1}:void 0,N=r=>k.isFunction(l==null?void 0:l.value)?o=>{var a;return((a=l==null?void 0:l.value)==null?void 0:a.call(l,o,r===0?"start":"end"))||!1}:void 0,q=r=>k.isFunction(u==null?void 0:u.value)?o=>{var F;const a={...o,type:r===0?"start":"end"};return(F=u==null?void 0:u.value)==null?void 0:F.call(u,a)}:void 0;e.watch(T,(r,o)=>{r&&!o&&(g.value="date")});const B=e.reactive({shortcuts:w,onItemClick:U,onItemMouseEnter:A,onItemMouseLeave:G}),c=e.computed(()=>({...$.value,rangeValues:d.value,disabledDate:E(0),dateRender:q(0),onSelect:m!=null&&m.value?Z:S,onCellMouseEnter:_,onHeaderLabelClick:X})),i=e.computed(()=>({...I.value,rangeValues:d.value,disabledDate:E(1),dateRender:q(1),onSelect:p!=null&&p.value?x:S,onCellMouseEnter:_,onHeaderLabelClick:Y}));return(r,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(j.value)},[P.value&&e.unref(f)==="left"?(e.openBlock(),e.createBlock(C.default,e.normalizeProps(e.mergeProps({key:0},B)),null,16)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(e.unref(s).e("range-dropdown-content"))},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(s).e("range"))},[e.unref(m)||e.unref(p)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(m)==="year"?(e.openBlock(),e.createBlock(b.default,e.normalizeProps(e.mergeProps({key:0},c.value)),null,16)):e.createCommentVNode("",!0),e.unref(p)==="year"?(e.openBlock(),e.createBlock(b.default,e.normalizeProps(e.mergeProps({key:1},i.value)),null,16)):e.unref(m)==="month"?(e.openBlock(),e.createBlock(y.default,e.mergeProps({key:2},c.value,{abbreviation:r.abbreviation}),null,16,["abbreviation"])):e.unref(p)==="month"?(e.openBlock(),e.createBlock(y.default,e.mergeProps({key:3},i.value,{abbreviation:r.abbreviation}),null,16,["abbreviation"])):e.createCommentVNode("",!0)],64)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[r.mode==="week"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createVNode(M.default,e.mergeProps(c.value,{"day-start-of-week":r.dayStartOfWeek}),null,16,["day-start-of-week"]),e.createVNode(M.default,e.mergeProps(i.value,{"day-start-of-week":r.dayStartOfWeek}),null,16,["day-start-of-week"])],64)):r.mode==="month"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createVNode(y.default,e.mergeProps(c.value,{abbreviation:r.abbreviation}),null,16,["abbreviation"]),e.createVNode(y.default,e.mergeProps(i.value,{abbreviation:r.abbreviation}),null,16,["abbreviation"])],64)):r.mode==="year"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[e.createVNode(b.default,e.normalizeProps(e.guardReactiveProps(c.value)),null,16),e.createVNode(b.default,e.normalizeProps(e.guardReactiveProps(i.value)),null,16)],64)):r.mode==="quarter"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:3},[e.createVNode(D.default,e.normalizeProps(e.guardReactiveProps(c.value)),null,16),e.createVNode(D.default,e.normalizeProps(e.guardReactiveProps(i.value)),null,16)],64)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:4},[e.createVNode(R.default,e.mergeProps({currentView:g.value,"onUpdate:currentView":o[0]||(o[0]=a=>g.value=a)},c.value,{"is-range":"",value:e.unref(d)&&e.unref(d)[0],"footer-value":r.footerValue&&r.footerValue[0],"time-picker-value":r.timePickerValue&&r.timePickerValue[0],"day-start-of-week":r.dayStartOfWeek,"show-time":r.showTime,"time-picker-props":r.timePickerProps,"disabled-time":N(0),disabled:r.disabled[0],onTimePickerSelect:K}),null,16,["currentView","value","footer-value","time-picker-value","day-start-of-week","show-time","time-picker-props","disabled-time","disabled"]),e.createVNode(R.default,e.mergeProps({currentView:g.value,"onUpdate:currentView":o[1]||(o[1]=a=>g.value=a)},i.value,{"is-range":"",value:e.unref(d)&&e.unref(d)[1],"footer-value":r.footerValue&&r.footerValue[1],"time-picker-value":r.timePickerValue&&r.timePickerValue[1],"day-start-of-week":r.dayStartOfWeek,"show-time":r.showTime,"time-picker-props":r.timePickerProps,"disabled-time":N(1),disabled:r.disabled[1],onTimePickerSelect:Q}),null,16,["currentView","value","footer-value","time-picker-value","day-start-of-week","show-time","time-picker-props","disabled-time","disabled"])],64))],64))],2),e.createVNode(oe.default,{"show-today-btn":!1,"show-confirm-btn":r.showConfirmBtn,"confirm-btn-disabled":r.confirmBtnDisabled,onConfirmBtnClick:J},e.createSlots({_:2},[r.extra||r.$slots.extra?{name:"extra",fn:e.withCtx(()=>[r.$slots.extra?e.renderSlot(r.$slots,"extra",{key:0}):(e.openBlock(),e.createBlock(e.unref(re.RenderFunction),{key:1,"render-func":r.extra},null,8,["render-func"]))]),key:"0"}:void 0,P.value&&e.unref(f)==="bottom"?{name:"button",fn:e.withCtx(()=>[e.createVNode(C.default,e.normalizeProps(e.guardReactiveProps(B)),null,16)]),key:"1"}:void 0]),1032,["show-confirm-btn","confirm-btn-disabled"])],2),P.value&&e.unref(f)==="right"?(e.openBlock(),e.createBlock(C.default,e.normalizeProps(e.mergeProps({key:1},B)),null,16)):e.createCommentVNode("",!0)],2))}});exports.default=ne;