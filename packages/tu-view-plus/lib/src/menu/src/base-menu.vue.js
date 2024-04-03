"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),g=require("./base-menu.js"),c=require("@tu-view-plus/hooks"),p=require("@tu-view-plus/utils"),S=require("@tu-view-plus/icons-vue"),te=require("./hooks/use-level.js"),oe=require("./context.js"),ne=require("./hooks/use-menu-data-collector.js"),se=require("./hooks/use-menu-open-state.js"),le=require("../../icon/index.js");require("../style/menu.css");const ue=e.defineComponent({name:"TuBaseMenu",inheritAttrs:!1}),ae=e.defineComponent({...ue,props:g.baseMenuProps,emits:g.baseMenuEmits,setup(B,{emit:K}){const b=B,l=K,k=e.useSlots(),n=c.useNamespace("menu"),{style:i,mode:s,levelIndent:h,accordion:q,showCollapseButton:O,scrollConfig:x,autoScrollIntoView:_,collapsedWidth:u,autoOpen:I,collapsed:P,defaultCollapsed:d,selectedKeys:w,defaultSelectedKeys:z,openKeys:E,defaultOpenKeys:N,triggerProps:T,tooltipProps:D,autoOpenSelected:V,breakpoint:$,popupMaxHeight:j,inTrigger:v,siderCollapsed:m,isRoot:f}=e.toRefs(b),{subMenuKeys:H,menuData:L}=ne.useMenuDataCollector({type:f!=null&&f.value?"menu":"popupMenu"}),[y,R]=c.useMergeState(z.value,e.reactive({value:w})),{openKeys:A,setOpenKeys:F,open:U}=se.useMenuOpenState(e.reactive({modelValue:E,defaultValue:N,autoOpen:I,autoOpenSelected:V,selectedKeys:y,subMenuKeys:H,menuData:L,accordion:q})),[C,G]=c.useMergeState(d==null?void 0:d.value,e.reactive({value:P})),a=e.computed(()=>(m==null?void 0:m.value)||C.value||s.value==="popButton"),J=e.computed(()=>["horizontal","popButton"].indexOf(s.value)<0&&!v.value&&O.value),Q=e.computed(()=>({[n.b()]:!0,[n.m("horizontal")]:s.value==="horizontal",[n.m("vertical")]:s.value==="vertical",[n.m("trigger")]:v.value,[n.is("pop")]:s.value==="pop"||a.value,[n.is("pop-button")]:s.value==="popButton",[n.is("collapsed")]:a.value})),X=e.computed(()=>{const t=p.isNumber(u==null?void 0:u.value)?p.addUnit(u==null?void 0:u.value):void 0,o=p.isObject(i.value)?i.value:void 0,r=a.value?t:o==null?void 0:o.width;return[o?p.omit(o,["width"]):i.value,{width:r}]}),M=(t,o)=>{t!==C.value&&(G(t),l("update:collapsed",t),l("collapse",t,o))},Y=()=>{M(!C.value,"clickTrigger")};c.useResponsive($,t=>{M(!t,"responsive")});const Z=c.usePickSlots(k,"expand-icon-down"),W=c.usePickSlots(k,"expand-icon-right"),ee=e.reactive({mode:s,levelIndent:h,autoScrollIntoView:_,selectedKeys:y,openKeys:A,scrollConfig:x,inTrigger:v,collapsed:a,triggerProps:T,tooltipProps:D,popupMaxHeight:j,expandIconDown:Z,expandIconRight:W,onMenuItemClick:t=>{R([t]),l("update:selectedKeys",[t]),l("menu-item-click",t)},onSubMenuClick:(t,o)=>{const r=U(t,o);F(r),l("update:openKeys",r),l("sub-menu-click",t,r)}});return e.provide(oe.MenuInjectionKey,ee),te.provideLevel(1),(t,o)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps(t.$attrs,{class:Q.value,style:X.value}),[e.createElementVNode("div",{class:e.normalizeClass(e.unref(n).e("inner"))},[e.renderSlot(t.$slots,"default")],2),J.value?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(n).e("collapse-button")),onClick:Y},[e.renderSlot(t.$slots,"collapse-icon",{collapsed:a.value},()=>[e.createVNode(e.unref(le.TuIcon),null,{default:e.withCtx(()=>[a.value?(e.openBlock(),e.createBlock(e.unref(S.Expand),{key:0})):(e.openBlock(),e.createBlock(e.unref(S.Fold),{key:1}))]),_:1})])],2)):e.createCommentVNode("",!0)],16))}});exports.default=ae;
