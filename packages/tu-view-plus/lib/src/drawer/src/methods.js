"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("vue"),t=require("@tu-view-plus/utils"),r=require("./drawer.vue.js"),m=(e,a)=>{let n=t.getOverlay("drawer");const s=()=>{o.component&&(o.component.props.visible=!1),t.isFunction(e.onOk)&&e.onOk()},u=()=>{o.component&&(o.component.props.visible=!1),t.isFunction(e.onCancel)&&e.onCancel()},d=async()=>{await l.nextTick(),n&&(l.render(null,n),document.body.removeChild(n)),n=null,t.isFunction(e.onClose)&&e.onClose()},i=()=>{o.component&&(o.component.props.visible=!1)},c=f=>{o.component&&Object.entries(f).forEach(([v,C])=>{o.component.props[v]=C})},p={visible:!0,renderToBody:!1,unmountOnClose:!0,onOk:s,onCancel:u,onClose:d},o=l.createVNode(r.default,{...p,...t.omit(e,["content","title","footer","visible","unmountOnClose","onOk","onCancel","onClose"]),header:typeof e.header=="boolean"?e.header:void 0,footer:typeof e.footer=="boolean"?e.footer:void 0},{default:t.getSlotFunction(e.content),header:typeof e.header!="boolean"?t.getSlotFunction(e.header):void 0,title:t.getSlotFunction(e.title),footer:typeof e.footer!="boolean"?t.getSlotFunction(e.footer):void 0});return(a??r.default._context)&&(o.appContext=a??r.default._context),l.render(o,n),document.body.appendChild(n),{close:i,update:c}},b={open:m};exports.default=b;