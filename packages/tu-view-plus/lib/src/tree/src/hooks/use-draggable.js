"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("vue"),p=require("@tu-view-plus/utils"),b=require("./use-tree-context.js");function h(f){const{key:t,refTitle:c}=l.toRefs(f),e=b.useTreeContext(),o=l.ref(!1),s=l.ref(!1),g=l.ref(!1),r=l.ref(0),n=p.throttleByRaf(u=>{if(!c.value)return;const a=c.value.getBoundingClientRect(),D=window.pageYOffset+a.top,{pageY:d}=u,v=a.height/4,i=d-D;r.value=i<v?-1:i<a.height-v?0:1,g.value=e.allowDrop?e.allowDrop(t.value,r.value):!0});return{isDragOver:o,isDragging:s,isAllowDrop:g,dropPosition:r,setDragStatus(u,a){switch(u){case"dragStart":s.value=!0,r.value=0,e.onDragStart&&e.onDragStart(t.value,a);break;case"dragEnd":s.value=!1,o.value=!1,r.value=0,n.cancel(),e.onDragEnd&&e.onDragEnd(t.value,a);break;case"dragOver":o.value=!0,n(a),e.onDragOver&&e.onDragOver(t.value,a);break;case"dragLeave":o.value=!1,r.value=0,n.cancel(),e.onDragLeave&&e.onDragLeave(t.value,a);break;case"drop":e.onDrop&&e.onDrop(t.value,r.value,a),o.value=!1,r.value=0,n.cancel();break}}}}exports.useDraggable=h;