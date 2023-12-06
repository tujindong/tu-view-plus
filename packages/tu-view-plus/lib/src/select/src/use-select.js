"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("vue"),z=require("./use-options.js"),o=require("@tu-view-plus/utils"),G=require("./context.js"),J=({selectSize:y,multiple:A,options:B,extraOptions:N,inputValue:g,filterOption:I,showExtraOptions:H,component:M,valueKey:S,fieldNames:W,loading:i,popupVisible:v,valueKeys:E,dropdownRef:D,optionRefs:K,virtualListRef:a,onSelect:T,onPopupVisibleChange:Y,enterToOpen:d=!0,defaultActiveFirstOption:O})=>{const{validOptions:j,optionInfoMap:_,validOptionInfos:C,enabledOptionKeys:u,getNextSlotOptionIndex:P,addSlotOptionInfo:h,removeSlotOptionInfo:w}=z.useOptions({options:B,extraOptions:N,inputValue:g,filterOption:I,showExtraOptions:H,valueKey:S,fieldNames:W}),l=c.ref();c.watch(u,e=>{(!l.value||!e.includes(l.value))&&(l.value=e[0])});const m=e=>{l.value=e},x=e=>{const t=u.value.length;if(t===0)return;if(!l.value)return e==="down"?u.value[0]:u.value[t-1];const n=u.value.indexOf(l.value),s=(t+n+(e==="up"?-1:1))%t;return u.value[s]},r=e=>{var q;a!=null&&a.value&&a.value.scrollTo({key:e});const t=_.get(e),n=(q=D==null?void 0:D.value)==null?void 0:q.wrapperRef,s=(K==null?void 0:K.value[e])??(t==null?void 0:t.ref);if(!n||!s||n.scrollHeight===n.offsetHeight)return;const f=o.getRelativeRect(s,n),p=n.scrollTop;f.top<0?n.scrollTo(0,p+f.top):f.bottom<0&&n.scrollTo(0,p-f.bottom)};c.watch(v,e=>{if(e){const t=E.value[E.value.length-1];let n=(O==null?void 0:O.value)??!0?u.value[0]:void 0;u.value.includes(t)&&(n=t),n!==l.value&&(l.value=n),c.nextTick(()=>{l.value&&r(l.value)})}});const U=o.getKeyDownHandler(new Map([[o.KEYBOARD_KEY.ENTER,e=>{!(i!=null&&i.value)&&!e.isComposing&&(v.value?l.value&&(T(l.value,e),e.preventDefault()):d&&(Y(!0),e.preventDefault()))}],[o.KEYBOARD_KEY.ESC,e=>{v.value&&(Y(!1),e.preventDefault())}],[o.KEYBOARD_KEY.ARROW_DOWN,e=>{if(v.value){const t=x("down");t&&(l.value=t,r(t)),e.preventDefault()}}],[o.KEYBOARD_KEY.ARROW_UP,e=>{if(v.value){const t=x("up");t&&(l.value=t,r(t)),e.preventDefault()}}]]));return c.provide(G.selectInjectionKey,c.reactive({selectSize:y,multiple:A,valueKey:S,inputValue:g,filterOption:I,component:M,valueKeys:E,activeKey:l,setActiveKey:m,onSelect:T,getNextSlotOptionIndex:P,addSlotOptionInfo:h,removeSlotOptionInfo:w})),{validOptions:j,optionInfoMap:_,validOptionInfos:C,enabledOptionKeys:u,activeKey:l,setActiveKey:m,addSlotOptionInfo:h,removeSlotOptionInfo:w,getNextActiveKey:x,scrollIntoView:r,handleKeyDown:U}};exports.useSelect=J;
