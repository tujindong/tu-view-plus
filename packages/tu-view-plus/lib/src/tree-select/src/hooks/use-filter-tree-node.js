"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("vue"),v=require("@tu-view-plus/utils");function g(f){const{searchValue:c,flattenTreeData:y,filterMethod:s,disableFilter:e,fieldNames:h}=u.toRefs(f),d=u.computed(()=>{var t;return((t=h.value)==null?void 0:t.key)||"key"}),m=(t,r)=>{const o=r[d.value];return!v.isUndefined(o)&&String(o).indexOf(t)>-1},k=u.computed(()=>(s==null?void 0:s.value)||m),a=u.ref(),i=u.computed(()=>!!c.value),p=u.computed(()=>!(e!=null&&e.value)&&i.value&&a.value&&a.value.size===0),S=u.computed(()=>e!=null&&e.value?void 0:t=>{var o;if(!i.value)return!0;const r=t[d.value];return((o=a.value)==null?void 0:o.has(r||""))??!1}),N=v.debounce((t,r)=>{const o=t.filter(n=>k.value(r,n.treeNodeData)),l=new Set;o.forEach(n=>{l.add(n.key),n.pathParentKeys.forEach(T=>{l.add(T)})}),a.value=l},100);return u.watchEffect(()=>{e!=null&&e.value?a.value=void 0:N(y.value,c.value)}),{isEmptyFilterResult:p,filterTreeNode:S}}exports.useFilterTreeNode=g;
