"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const Y=require("vue"),D=require("@tu-view-plus/utils");function c(u="date",e=!1){switch(u){case"date":return e?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD";case"month":return"YYYY-MM";case"year":return"YYYY";case"week":return"gggg-wo";case"quarter":return"YYYY-[Q]Q";default:return"YYYY-MM-DD"}}function l(u="date",e=!1){switch(u){case"date":return e?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD";case"month":return"YYYY-MM";case"year":return"YYYY";case"week":return"YYYY-MM-DD";case"quarter":return"YYYY-MM";default:return"YYYY-MM-DD"}}function o(u){const{format:e,mode:t,showTime:a,valueFormat:r}=Y.toRefs(u),s=Y.computed(()=>!D.isFunction(e==null?void 0:e.value)&&(e==null?void 0:e.value)||c(t==null?void 0:t.value,a==null?void 0:a.value)),n=Y.computed(()=>(r==null?void 0:r.value)||l(t==null?void 0:t.value,a==null?void 0:a.value)),M=Y.computed(()=>["timestamp","Date"].includes(n.value)?s.value:n.value);return{format:s,valueFormat:n,parseValueFormat:M}}exports.getDefaultFormat=c;exports.getDefaultValueFormat=l;exports.useFormat=o;