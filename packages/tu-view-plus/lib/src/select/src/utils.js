"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("@tu-view-plus/utils"),l=t=>i.isObject(t)&&"isGroup"in t,g=t=>i.isObject(t)&&"isGroup"in t,p=(t,e="value")=>String(i.isObject(t)?t[e]:t),u=(t,e="value")=>i.isObject(t)?`__tu__select__option__object__${t[e]}`:t||i.isNumber(t)||i.isString(t)||i.isBoolean(t)?`__tu__select__option__${typeof t}-${t}`:"",O=t=>t.has("__tu__select__option__string-"),a=(t,{valueKey:e,fieldNames:n,origin:c,index:_=-1})=>{if(i.isObject(t)){const s=t[n.value];return{raw:t,index:_,key:u(s,e),origin:c,value:s,label:t[n.label]??p(s,e),render:t[n.render],disabled:!!t[n.disabled]}}const r={value:t,label:String(t),disabled:!1};return{raw:r,index:_,key:u(t,e),origin:c,...r}},b=(t,{valueKey:e,fieldNames:n,origin:c,optionInfoMap:_})=>{const r=[];for(const s of t)if(l(s)){const o=b(s.options??[],{valueKey:e,fieldNames:n,origin:c,optionInfoMap:_});o.length>0&&r.push({...s,key:`__tu__select__group__${s.label}`,options:o})}else{const o=a(s,{valueKey:e,fieldNames:n,origin:c});r.push(o),_.get(o.key)||_.set(o.key,o)}return r},y=(t,{inputValue:e,filterOption:n})=>{const c=_=>{const r=[];for(const s of _)if(g(s)){const o=c(s.options??[]);o.length>0&&r.push({...s,options:o})}else f(s,{inputValue:e,filterOption:n})&&r.push(s);return r};return c(t)},f=(t,{inputValue:e,filterOption:n})=>i.isFunction(n)?!e||n(e,t.raw):n?t.label.toLowerCase().includes((e??"").toLowerCase()):!0;exports.createOptionInfo=a;exports.getKeyFromValue=u;exports.getOptionInfos=b;exports.getValidOptions=y;exports.getValueString=p;exports.hasEmptyStringKey=O;exports.isGroupOption=l;exports.isGroupOptionInfo=g;exports.isValidOption=f;
