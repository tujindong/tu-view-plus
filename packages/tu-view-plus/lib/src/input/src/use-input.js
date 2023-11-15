"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("vue");require("../../form/index.js");const S=require("@tu-view-plus/utils"),g=require("@tu-view-plus/constants"),U=require("lodash-unified"),k=require("../../form/src/hooks/use-form-item.js");function m(u,t,E){const i=n.ref(!1),d=n.ref(!1),c=n.ref(!1),v=n.ref(!1),o=n.computed(()=>E.value),s=n.computed(()=>U.isNil(u.modelValue)?"":String(u.modelValue)),b=n.computed(()=>s.value.length),{formItem:l}=k.useFormItem(),f=async()=>{var e;await n.nextTick(),(e=o.value)==null||e.focus()},p=()=>{var e;return(e=o.value)==null?void 0:e.blur()},V=()=>{var e;return(e=o.value)==null?void 0:e.select()},w=()=>{t(g.UPDATE_MODEL_EVENT,""),t("change",""),t("clear"),t("input","")},T=e=>{i.value=!0,t("mouseenter",e)},q=e=>{i.value=!1,t("mouseleave",e)},M=e=>{t("compositionstart",e),c.value=!0},_=e=>{t("compositionupdate",e)},y=e=>{t("compositionend",e),c.value&&(c.value=!1,h(e))},h=async e=>{let{value:a}=e.target;if(u.formatter&&(a=u.parser?u.parser(a):a),!c.value){if(a===s.value){r();return}t(g.UPDATE_MODEL_EVENT,a),t("input",a),await n.nextTick(),r()}},C=e=>{d.value=!0,t("focus",e)},P=e=>{var a;d.value=!1,t("blur",e),u.validateEvent&&((a=l==null?void 0:l.validate)==null||a.call(l,"blur").catch(N=>S.debugWarn(N)))},D=e=>{t("change",e.target.value)},F=e=>{t("keydown",e)},L=()=>{v.value=!v.value,f()},r=()=>{const e=o.value,a=u.formatter?u.formatter(s.value):s.value;!e||e.value===a||(e.value=a)};return n.watch(s,()=>r()),{inputRef:o,isHovering:i,isFocused:d,isPasswordVisible:v,nativeInputValue:s,textLength:b,focus:f,blur:p,select:V,clear:w,handleMouseEnter:T,handleMouseLeave:q,handleCompositionStart:M,handleCompositionUpdate:_,handleCompositionEnd:y,handleInput:h,handleFocus:C,handleBlur:P,handleChange:D,handleKeydown:F,handlePasswordVisible:L,setNativeInputValue:r}}exports.default=m;