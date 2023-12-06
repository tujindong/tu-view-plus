"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("vue"),c=require("./utils.js"),g=require("@tu-view-plus/utils"),k={value:"value",label:"label",disabled:"disabled",tagProps:"tagProps",render:"render"},A=({options:u,extraOptions:l,inputValue:t,filterOption:a,showExtraOptions:d,valueKey:r,fieldNames:p})=>{const I=o.computed(()=>({...k,...p==null?void 0:p.value})),v=o.reactive(new Map),i=o.computed(()=>Array.from(v.values()).sort((e,s)=>g.isNumber(e.index)&&g.isNumber(s.index)?e.index-s.index:0)),f=o.computed(()=>{const e=new Map;return{optionInfos:c.getOptionInfos((u==null?void 0:u.value)??[],{valueKey:(r==null?void 0:r.value)??"value",fieldNames:I.value,origin:"options",optionInfoMap:e}),optionInfoMap:e}}),m=o.computed(()=>{const e=new Map;return{optionInfos:c.getOptionInfos((l==null?void 0:l.value)??[],{valueKey:(r==null?void 0:r.value)??"value",fieldNames:I.value,origin:"extraOptions",optionInfoMap:e}),optionInfoMap:e}}),n=o.reactive(new Map);o.watch([i,u??o.ref([]),l??o.ref([]),r??o.ref("value")],()=>{n.clear(),i.value.forEach((e,s)=>{n.set(e.key,{...e,index:s})}),f.value.optionInfoMap.forEach(e=>{n.has(e.key)||(e.index=n.size,n.set(e.key,e))}),m.value.optionInfoMap.forEach(e=>{n.has(e.key)||(e.index=n.size,n.set(e.key,e))})},{immediate:!0,deep:!0});const S=o.computed(()=>{const e=c.getValidOptions(f.value.optionInfos,{inputValue:t==null?void 0:t.value,filterOption:a==null?void 0:a.value});return((d==null?void 0:d.value)??!0)&&e.push(...c.getValidOptions(m.value.optionInfos,{inputValue:t==null?void 0:t.value,filterOption:a==null?void 0:a.value})),e}),M=o.computed(()=>Array.from(n.values()).filter(e=>e.origin==="extraOptions"&&(d==null?void 0:d.value)===!1?!1:c.isValidOption(e,{inputValue:t==null?void 0:t.value,filterOption:a==null?void 0:a.value}))),b=o.computed(()=>M.value.filter(e=>!e.disabled).map(e=>e.key));return{validOptions:S,optionInfoMap:n,validOptionInfos:M,enabledOptionKeys:b,getNextSlotOptionIndex:()=>v.size,addSlotOptionInfo:(e,s)=>{v.set(e,s)},removeSlotOptionInfo:e=>{v.delete(e)}}};exports.useOptions=A;
