"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("vue"),n=require("@tu-view-plus/hooks"),t=require("@tu-view-plus/utils");function h(m){const{modelValue:p,defaultValue:S,format:o,isRange:s}=u.toRefs(m);function c(){return s.value?[]:void 0}function i(e){if(!t.isUndefined(e))return s.value?t.isArray(e)?e:[e,void 0]:e}const a=u.computed(()=>{const e=i(p.value);return t.getDayjsValue(e,o.value)}),r=u.computed(()=>{const e=i(S.value);return t.getDayjsValue(e,o.value)}),[g,d]=n.useState(t.isUndefined(a.value)?t.isUndefined(r.value)?c():r.value:a.value);u.watch(a,()=>{t.isUndefined(a.value)&&d(c())});const l=u.computed(()=>a.value||g.value),[v,V]=n.useState(l.value);u.watch([l],()=>{V(l.value)});const[y,f]=n.useState();return u.watch([v],()=>{f(void 0)}),{computedValue:l,panelValue:v,inputValue:y,setValue:d,setPanelValue:V,setInputValue:f}}exports.useTimeState=h;
