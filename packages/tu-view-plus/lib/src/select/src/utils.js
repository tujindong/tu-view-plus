"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("@tu-view-plus/utils"),g=t=>i.isObject(t)&&"isGroup"in t,l=t=>i.isObject(t)&&"isGroup"in t,p=(t,e="value")=>String(i.isObject(t)?t[e]:t),u=(t,e="value")=>i.isObject(t)?`__tu__select__option__object__${t[e]}`:t||i.isNumber(t)||i.isString(t)||i.isBoolean(t)?`__tu__select__option__${typeof t}-${t}`:"",O=t=>t.has("__tu__select__option__string-"),a=(t,{valueKey:e,fieldNames:r,origin:c,index:_=-1})=>{if(i.isObject(t)){const s=t[r.value];return{raw:t,index:_,key:u(s,e),origin:c,value:s,label:t[r.label]??p(s,e),render:t[r.render],disabled:!!t[r.disabled],tagProps:t[r.tagProps]}}const n={value:t,label:String(t),disabled:!1};return{raw:n,index:_,key:u(t,e),origin:c,...n}},b=(t,{valueKey:e,fieldNames:r,origin:c,optionInfoMap:_})=>{const n=[];for(const s of t)if(g(s)){const o=b(s.options??[],{valueKey:e,fieldNames:r,origin:c,optionInfoMap:_});o.length>0&&n.push({...s,key:`__tu__select__group__${s.label}`,options:o})}else{const o=a(s,{valueKey:e,fieldNames:r,origin:c});n.push(o),_.get(o.key)||_.set(o.key,o)}return n},y=(t,{inputValue:e,filterOption:r})=>{const c=_=>{const n=[];for(const s of _)if(l(s)){const o=c(s.options??[]);o.length>0&&n.push({...s,options:o})}else f(s,{inputValue:e,filterOption:r})&&n.push(s);return n};return c(t)},f=(t,{inputValue:e,filterOption:r})=>i.isFunction(r)?!e||r(e,t.raw):r?t.label.toLowerCase().includes((e??"").toLowerCase()):!0;exports.createOptionInfo=a;exports.getKeyFromValue=u;exports.getOptionInfos=b;exports.getValidOptions=y;exports.getValueString=p;exports.hasEmptyStringKey=O;exports.isGroupOption=g;exports.isGroupOptionInfo=l;exports.isValidOption=f;
