"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),k=require("./input-label.js"),R=require("@tu-view-plus/hooks"),g=require("@tu-view-plus/utils"),_=require("@tu-view-plus/constants");require("../../form/index.js");require("../style/input-label.css");const I=require("../../form/src/hooks/use-form-props.js"),U=["value","readonly","placeholder","disabled"],$=e.defineComponent({name:"TuInputLabel"}),j=e.defineComponent({...$,props:k.inputLabelProps,emits:k.inputLabelEmits,setup(E,{emit:S}){let i;const a=E,s=S,v=e.useAttrs(),r=e.useSlots(),{inputValue:d}=e.toRefs(a),t=R.useNamespace("input-label"),L=I.useFormSize(),f=I.useFormDisabled(),u=e.ref(),c=e.ref(!1),p=e.ref(!1),b=e.ref(""),h=e.ref(""),N=e.computed(()=>g.omit(v,_.INPUT_EVENTS)),q=e.computed(()=>g.pick(v,_.INPUT_EVENTS)),V=e.computed(()=>a.enabledInput&&c.value||!a.modelValue),o=e.computed(()=>(d==null?void 0:d.value)??h.value),y=e.computed(()=>a.enabledInput&&a.modelValue?a.modelValue.label:a.placeholder),B=e.computed(()=>a.focused??c.value),P=e.computed(()=>{var l,n;return a.modelValue?((l=r.default)==null?void 0:l.call(r,{data:a.modelValue}))??((n=a.formatLabel)==null?void 0:n.call(a,a.modelValue))??a.modelValue.label:""}),T=e.computed(()=>({[t.b()]:!0,[t.m(L.value)]:!0,[t.is("search")]:a.enabledInput,[t.is("focus")]:B.value,[t.is("disabled")]:f.value})),D=e.computed(()=>({[t.e("input")]:!0,[t.is("hidden")]:!V.value})),w=e.computed(()=>({[t.e("inner")]:!0,[t.is("hidden")]:V.value})),x=l=>{u.value&&l.target!==u.value&&(l.preventDefault(),u.value.focus())},F=l=>{const{value:n}=l.target;p.value||C(n,l),e.nextTick(()=>{u.value&&o.value!==u.value.value&&(u.value.value=o.value)})},z=l=>{c.value=!0,i=o.value,s("focus",l)},M=l=>{c.value=!1,s("blur",l),A(l)},A=l=>{o.value!==i&&(i=o.value,s("change",o.value,l))},m=l=>{const{value:n}=l.target;l.type==="compositionend"?(p.value=!1,b.value="",C(n,l),e.nextTick(()=>{u.value&&o.value!==u.value.value&&(u.value.value=o.value)})):(p.value=!0,b.value=o.value+(l.data??""))},C=(l,n)=>{h.value=l,s("update:modelValue",l),s("input",l,n)};return e.watch(o,l=>{u.value&&l!==u.value.value&&(u.value.value=l)}),(l,n)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps(N.value,{class:T.value,onMousedown:x}),[e.unref(r).prefix?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(e.unref(t).e("prefix"))},[e.renderSlot(l.$slots,"prefix")],2)):e.createCommentVNode("",!0),e.createElementVNode("input",e.mergeProps({ref_key:"inputRef",ref:u},q.value,{class:D.value,value:o.value,readonly:!l.enabledInput,placeholder:y.value,disabled:e.unref(f),onInput:F,onFocus:z,onBlur:M,onCompositionstart:m,onCompositionupdate:m,onCompositionend:m}),null,16,U),e.createElementVNode("span",{class:e.normalizeClass(w.value)},e.toDisplayString(P.value),3),e.unref(r).suffix?(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(e.unref(t).e("suffix"))},[e.renderSlot(l.$slots,"suffix")],2)):e.createCommentVNode("",!0)],16))}});exports.default=j;
