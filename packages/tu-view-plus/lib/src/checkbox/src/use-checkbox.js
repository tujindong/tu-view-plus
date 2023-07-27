"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("vue"),s=require("@tu-view-plus/utils"),V=require("@tu-view-plus/constants"),A=require("./constants.js");require("../../form/index.js");const M=require("lodash-unified"),o=require("../../form/src/hooks/use-form-item.js"),g=require("../../form/src/hooks/use-form-props.js"),j=(l,E)=>{const{emit:q}=a.getCurrentInstance(),y=a.ref(!1),m=a.ref(!1),c=a.ref(!1),r=a.computed(()=>!s.isUndefined(t)),{formItem:d}=o.useFormItem(),{inputId:I}=o.useFormItemInputId(l,{formItemContext:d,disableIdManagement:r}),t=a.inject(A.checkboxGroupContextKey,void 0),i=a.computed({get(){var e;return r.value?(e=t==null?void 0:t.modelValue)==null?void 0:e.value:l.modelValue??c.value},set(e){var n,u;r.value&&s.isArray(e)?(m.value=((n=t==null?void 0:t.max)==null?void 0:n.value)!==void 0&&e.length>(t==null?void 0:t.max.value),m.value===!1&&((u=t==null?void 0:t.changeEvent)==null||u.call(t,e))):(q(V.UPDATE_MODEL_EVENT,e),c.value=e)}}),L=a.computed(()=>{var u,f;const e=(u=t==null?void 0:t.max)==null?void 0:u.value,n=(f=t==null?void 0:t.min)==null?void 0:f.value;return!s.isUndefined(e)&&i.value.length>=e&&!v.value||!s.isUndefined(n)&&i.value.length<=n&&v.value}),C=g.useFormSize(a.computed(()=>{var e;return(e=t==null?void 0:t.size)==null?void 0:e.value})),F=a.computed(()=>{var e;return((e=t==null?void 0:t.type)==null?void 0:e.value)||l.type}),b=g.useFormDisabled(a.computed(()=>{var e;return((e=t==null?void 0:t.disabled)==null?void 0:e.value)||!!L.value})),v=a.computed(()=>{const e=i.value;return s.isBoolean(e)?e:s.isArray(e)?s.isObject(l.label)?e.map(a.toRaw).some(n=>M.isEqual(n,l.label)):e.map(a.toRaw).includes(l.label):e!=null?e===l.trueLabel:!!e}),D=a.computed(()=>(t==null?void 0:t.validateEvent)||l.validateEvent),S=()=>{s.isArray(i.value)&&!i.value.includes(l.label)?i.value.push(l.label):i.value=l.trueLabel||!0},T=e=>e===l.trueLabel||e===!0?l.trueLabel??!0:l.falseLabel??!1,U=e=>{var u;if(m.value)return;const n=(u=e.target)==null?void 0:u.checked;E("change",T(n),e)};return a.watch(()=>l.modelValue,()=>{D.value&&(d==null||d.validate("change").catch(e=>s.debugWarn(e)))}),{checkboxGroup:t,inputId:I,model:i,checkboxDisabled:b,checkboxSize:C,checkboxType:F,isChecked:v,isFocused:y,handleChange:U,addToStore:S}};exports.useCheckbox=j;
