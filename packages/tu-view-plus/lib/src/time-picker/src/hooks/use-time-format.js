"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),c=require("../utils.js");function v(l){const{format:o,use12Hours:e,defaultFormat:s}=t.toRefs(l),m=t.computed(()=>{let u=(o==null?void 0:o.value)||(s==null?void 0:s.value);return(!u||!c.getColumnsFromFormat(u).list.length)&&(u=e!=null&&e.value?"hh:mm:ss a":"HH:mm:ss"),u}),r=t.computed(()=>c.getColumnsFromFormat(m.value)),n=t.computed(()=>r.value.list),a=t.computed(()=>r.value.use12Hours),i=t.computed(()=>!!(e!=null&&e.value||a.value));return{columns:n,use12Hours:i,format:m}}exports.useTimeFormat=v;
