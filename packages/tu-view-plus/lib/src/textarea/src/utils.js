"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("@tu-view-plus/utils");let t;const h=`
  height:0 !important;
  visibility:hidden !important;
  ${s.isFirefox()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,u=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function m(n){const e=window.getComputedStyle(n),l=e.getPropertyValue("box-sizing"),r=Number.parseFloat(e.getPropertyValue("padding-bottom"))+Number.parseFloat(e.getPropertyValue("padding-top")),a=Number.parseFloat(e.getPropertyValue("border-bottom-width"))+Number.parseFloat(e.getPropertyValue("border-top-width"));return{contextStyle:u.map(p=>`${p}:${e.getPropertyValue(p)}`).join(";"),paddingSize:r,borderSize:a,boxSizing:l}}function x(n,e=1,l){var b;t||(t=document.createElement("textarea"),document.body.appendChild(t));const{paddingSize:r,borderSize:a,boxSizing:d,contextStyle:p}=m(n);t.setAttribute("style",`${p};${h}`),t.value=n.value||n.placeholder||"";let i=t.scrollHeight;const g={};d==="border-box"?i=i+a:d==="content-box"&&(i=i-r),t.value="";const c=t.scrollHeight-r;if(s.isNumber(e)){let o=c*e;d==="border-box"&&(o=o+r+a),i=Math.max(o,i),g.minHeight=`${o}px`}if(s.isNumber(l)){let o=c*l;d==="border-box"&&(o=o+r+a),i=Math.min(o,i)}return g.height=`${i}px`,(b=t.parentNode)==null||b.removeChild(t),t=void 0,g}exports.calcTextareaHeight=x;
