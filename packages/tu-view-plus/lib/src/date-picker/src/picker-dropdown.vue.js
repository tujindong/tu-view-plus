"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),H=require("./picker-dropdown.js"),Z=require("@tu-view-plus/hooks"),$=require("@tu-view-plus/constants"),m=require("@tu-view-plus/utils"),x=require("./hooks/use-header-value.js");require("b-tween");const N=require("./dropdown/year/year.vue.js"),ee=require("./dropdown/quarter/quarter.vue.js"),M=require("./dropdown/month/month.vue.js"),oe=require("./dropdown/week/week.vue.js"),te=require("./dropdown/date/date.vue.js"),y=require("./dropdown/shortcuts.vue.js"),re=require("./dropdown/footer.vue.js"),ae=e.defineComponent({name:"PickerDropdown"}),ne=e.defineComponent({...ae,props:H.pickerDropdownProps,emits:H.pickerDropdownEmits,setup(D,{emit:E}){const I=D,t=E,a=Z.useNamespace("picker"),{shortcuts:k,shortcutsPosition:n,format:b,value:s,disabledDate:L,hideTrigger:v,showNowBtn:i,dateRender:z,showConfirmBtn:l,headerValue:w,headerIcons:h,headerOperations:O,headerMode:d,size:r}=e.toRefs(I),B=e.computed(()=>!!(k.value&&k.value.length)),P=e.computed(()=>(i==null?void 0:i.value)&&(l==null?void 0:l.value)&&!B.value),u=e.computed(()=>P.value||B.value),R=e.computed(()=>u.value&&n.value==="left"),F=e.computed(()=>u.value&&n.value==="right"),T=e.computed(()=>(s==null?void 0:s.value)||m.getNow()),g=e.computed(()=>u.value&&n.value==="bottom"),j=e.computed(()=>({[a.e("dropdown")]:!0,[a.em("dropdown",r==null?void 0:r.value)]:r==null?void 0:r.value,[a.em("dropdown","dropdown-only")]:v==null?void 0:v.value,[a.em("dropdown","shortcuts-placement-left")]:R.value,[a.em("dropdown","shortcuts-placement-right")]:F.value})),{headerValue:S,setHeaderValue:W,headerOperations:C}=x.useHeaderValue(e.reactive({mode:d,format:b})),A=o=>{t("cell-click",o)},G=o=>{t("header-label-click",o)},J=o=>{t("time-picker-select",o)},V=o=>{t("header-select",o)},K=()=>{t("month-header-click")},q=()=>{t("today-btn-click",m.getNow())},Q=()=>{t("confirm")},f=o=>{const{value:p}=o;return m.getDayjsValue(m.isFunction(p)?p():p,o.format||b.value)},U=o=>{t("shortcut-click",f(o),o)},X=o=>{t("shortcut-mouse-enter",f(o))},Y=o=>{t("shortcut-mouse-leave",f(o))},c=e.reactive({value:s,headerValue:w,headerIcons:h,headerOperations:O,disabledDate:L,dateRender:z,onSelect:A,onHeaderLabelClick:G}),_=e.reactive({shortcuts:k,showNowBtn:P,onItemClick:U,onItemMouseEnter:X,onItemMouseLeave:Y,onNowClick:q});return e.watch(w,o=>{W(o)}),(o,p)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(j.value)},[u.value&&e.unref(n)==="left"?(e.openBlock(),e.createBlock(y.default,e.normalizeProps(e.mergeProps({key:0},_)),null,16)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(e.unref(a).e("dropdown-content"))},[e.unref(d)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(d)==="year"?(e.openBlock(),e.createBlock(N.default,{key:0,"header-value":e.unref(S),"header-icons":e.unref(h),"header-operations":e.unref(C),onSelect:V},null,8,["header-value","header-icons","header-operations"])):e.unref(d)==="month"?(e.openBlock(),e.createBlock(M.default,{key:1,"header-value":e.unref(S),"header-icons":e.unref(h),"header-operations":e.unref(C),abbreviation:o.abbreviation,onSelect:V,onHeaderLabelClick:K},null,8,["header-value","header-icons","header-operations","abbreviation"])):e.createCommentVNode("",!0)],64)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[o.mode==="week"?(e.openBlock(),e.createBlock(oe.default,e.mergeProps({key:0},c,{"day-start-of-week":o.dayStartOfWeek}),null,16,["day-start-of-week"])):o.mode==="month"?(e.openBlock(),e.createBlock(M.default,e.mergeProps({key:1,abbreviation:o.abbreviation},c),null,16,["abbreviation"])):o.mode==="year"?(e.openBlock(),e.createBlock(N.default,e.normalizeProps(e.mergeProps({key:2},c)),null,16)):o.mode==="quarter"?(e.openBlock(),e.createBlock(ee.default,e.normalizeProps(e.mergeProps({key:3},c)),null,16)):(e.openBlock(),e.createBlock(te.default,e.mergeProps({key:4},c,{mode:"date","show-time":o.showTime,"time-picker-props":o.timePickerProps,"day-start-of-week":o.dayStartOfWeek,"footer-value":T.value,"time-picker-value":o.timePickerValue,"disabled-time":o.disabledTime,onTimePickerSelect:J}),null,16,["show-time","time-picker-props","day-start-of-week","footer-value","time-picker-value","disabled-time"])),e.createVNode(re.default,{size:e.unref(r),"show-today-btn":e.unref(i)&&!(e.unref(l)||g.value),"show-confirm-btn":e.unref(l),"confirm-btn-disabled":o.confirmBtnDisabled,onTodayBtnClick:q,onConfirmBtnClick:Q},e.createSlots({_:2},[o.extra?{name:"extra",fn:e.withCtx(()=>[o.extra?(e.openBlock(),e.createBlock(e.unref($.RenderFunction),{key:0,"render-func":o.extra},null,8,["render-func"])):e.createCommentVNode("",!0)]),key:"0"}:void 0,g.value?{name:"button",fn:e.withCtx(()=>[e.createVNode(y.default,e.normalizeProps(e.guardReactiveProps(_)),null,16)]),key:"1"}:void 0]),1032,["size","show-today-btn","show-confirm-btn","confirm-btn-disabled"])],64))],2),u.value&&e.unref(n)==="right"?(e.openBlock(),e.createBlock(y.default,e.normalizeProps(e.mergeProps({key:1},_)),null,16)):e.createCommentVNode("",!0)],2))}});exports.default=ne;