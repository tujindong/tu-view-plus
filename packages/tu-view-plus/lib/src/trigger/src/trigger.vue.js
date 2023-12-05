"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("vue"),U=require("./trigger.js"),ge=require("../../only-client/index.js"),H=require("../../resize-observer/index.js"),h=require("@tu-view-plus/hooks"),R=require("@tu-view-plus/utils"),X=require("./constant.js"),g=require("./utils.js");require("../style/trigger.css");const we=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"],ye=o.defineComponent({name:"TuTrigger",inheritAttrs:!1,props:U.triggerProps,emits:U.triggerEmits,setup(n,{emit:p,slots:r,attrs:l,expose:Y}){const{popupContainer:J}=o.toRefs(n),Q=o.computed(()=>R.omit(l,we)),f=o.computed(()=>[].concat(n.trigger)),O=new Set,i=o.inject(X.triggerInjectionKey,void 0),{children:E,firstElement:M}=h.useFirstElement(),v=o.ref(),B=o.ref(n.defaultPopupVisible),S=o.ref(n.position),W=o.ref({}),x=o.ref({}),$=o.ref({}),Z=o.ref(),s=o.ref({top:0,left:0}),u=o.computed(()=>n.popupVisible??B.value),w=h.useNamespace("popup"),{teleportContainer:ee,containerRef:k}=h.useTeleportContainer({popupContainer:J,visible:u,documentContainer:!0}),{zIndex:ne}=h.usePopupManager("popup",{visible:u});let T=0,m=!1;const oe=()=>{T&&(window.clearTimeout(T),T=0)},z=e=>{if(n.alignPoint){const{pageX:t,pageY:c}=e;s.value={top:c,left:t}}},y=()=>{if(!M.value||!v.value||!k.value)return;const e=k.value.getBoundingClientRect(),t=n.alignPoint?{top:s.value.top,bottom:s.value.top,left:s.value.left,right:s.value.left,scrollTop:s.value.top,scrollBottom:s.value.top,scrollLeft:s.value.left,scrollRight:s.value.left,width:0,height:0}:g.getElementScrollRect(M.value,e),c=()=>g.getElementScrollRect(v.value,e),F=c(),{style:C,position:V}=g.getPopupStyle(n.position,e,t,F,{offset:n.popupOffset,translate:n.popupTranslate,customStyle:n.popupStyle,autoFitPosition:n.autoFitPosition});n.autoFitTransformOrigin&&(x.value={transformOrigin:g.getTransformOrigin(V)}),n.autoFitPopupMinWidth?C.minWidth=`${t.width}px`:n.autoFitPopupWidth&&(C.width=`${t.width}px`),S.value!==V&&(S.value=V),W.value=C,n.showArrow&&o.nextTick(()=>{$.value=g.getArrowStyle(V,t,c(),{customStyle:n.arrowStyle})})},d=(e,t)=>{if(e===u.value&&T===0)return;const c=()=>{B.value=e,p("update:popupVisible",e),p("popupVisibleChange",e),e&&o.nextTick(()=>{y()})};t?(oe(),e!==u.value&&(T=window.setTimeout(c,t))):c()},te=e=>{var t;(t=l.onClick)==null||t.call(l,e),!(n.disabled||u.value&&!n.clickToClose)&&(f.value.includes("click")?(z(e),d(!u.value)):f.value.includes("contextMenu")&&u.value&&d(!1))},I=e=>{var t;(t=l.onMouseenter)==null||t.call(l,e),!(n.disabled||!f.value.includes("hover"))&&(z(e),d(!0,n.mouseEnterDelay))},_=e=>{i==null||i.onMouseenter(e),I(e)},j=e=>{var t;(t=l.onMouseleave)==null||t.call(l,e),!(n.disabled||!f.value.includes("hover"))&&d(!1,n.mouseLeaveDelay)},G=e=>{i==null||i.onMouseleave(e),j(e)},ue=e=>{var t;(t=l.onFocusin)==null||t.call(l,e),!(n.disabled||!f.value.includes("focus"))&&d(!0,n.focusDelay)},le=e=>{var t;(t=l.onFocusout)==null||t.call(l,e),!(n.disabled||!f.value.includes("focus"))&&n.blurToClose&&d(!1)},ie=e=>{var t;(t=l.onContextmenu)==null||t.call(l,e),!(n.disabled||!f.value.includes("contextMenu")||u.value&&!n.clickToClose)&&(z(e),d(!u.value),e.preventDefault())},ae=e=>{O.add(e),i==null||i.addChildRef(e)},ce=e=>{O.delete(e),i==null||i.removeChildRef(e)};o.provide(X.triggerInjectionKey,o.reactive({onMouseenter:_,onMouseleave:G,addChildRef:ae,removeChildRef:ce}));const N=()=>{R.off(document.documentElement,"mousedown",A),m=!1},L=h.usePickSlots(r,"content"),se=o.computed(()=>{var e;return n.hideEmpty&&R.isEmptyChildren((e=L.value)==null?void 0:e.call(L))}),A=e=>{var t,c,F;if(!((t=M.value)!=null&&t.contains(e.target)||(c=v.value)!=null&&c.contains(e.target))){for(const C of O)if((F=C.value)!=null&&F.contains(e.target))return;N(),d(!1)}},P=R.throttleByRaf(()=>{u.value&&y()}),q=()=>{u.value&&y()},de=()=>{q(),p("resize")},re=e=>{n.preventFocus&&e.preventDefault()};i==null||i.addChildRef(v);const fe=o.computed(()=>u.value?n.openedClass:void 0);let a;o.watch(u,e=>{if(n.clickOutsideToClose&&(!e&&m?N():e&&!m&&(R.on(document.documentElement,"mousedown",A),m=!0)),n.updateAtScroll){if(e){a=g.getScrollElements(M.value);for(const t of a)t.addEventListener("scroll",P)}else if(a){for(const t of a)t.removeEventListener("scroll",P);a=void 0}}e&&(D.value=!0)}),o.watch(()=>[n.autoFitPopupWidth,n.autoFitPopupMinWidth],()=>{u.value&&y()});const{createResizeObserver:ve,destroyResizeObserver:me}=h.useResizeObserver({elementRef:k,onResize:q});o.onMounted(()=>{if(ve(),u.value&&(y(),n.clickOutsideToClose&&!m&&(R.on(document.documentElement,"mousedown",A),m=!0),n.updateAtScroll)){a=g.getScrollElements(M.value);for(const e of a)e.addEventListener("scroll",P)}}),o.onUpdated(()=>{u.value&&y()}),o.onDeactivated(()=>{d(!1)}),o.onBeforeUnmount(()=>{if(i==null||i.removeChildRef(v),me(),m&&N(),a){for(const e of a)e.removeEventListener("scroll",P);a=void 0}});const D=o.ref(u.value),b=o.ref(!1),K=()=>{b.value=!0},he=()=>{b.value=!1,u.value&&p("show")},Re=()=>{b.value=!1,u.value||(D.value=!1,p("hide"))};return Y({popupRef:v}),()=>{var e;return E.value=((e=r.default)==null?void 0:e.call(r))??[],R.mergeFirstChild(E.value,{class:fe.value,onClick:te,onMouseenter:I,onMouseleave:j,onFocusin:ue,onFocusout:le,onContextmenu:ie}),o.createVNode(o.Fragment,null,[n.autoFixPosition?o.createVNode(H.TuResizeObserver,{onResize:de},{default:()=>[E.value]}):E.value,o.createVNode(ge.TuOnlyClient,null,{default:()=>[o.createVNode(o.Teleport,{to:ee.value,disabled:!n.renderToBody},{default:()=>[(!n.unmountOnClose||u.value||D.value)&&!se.value&&o.createVNode(H.TuResizeObserver,{onResize:q},{default:()=>[o.createVNode("div",o.mergeProps({ref:v,class:[w.b(),w.m(S.value)],style:{...W.value,zIndex:ne.value,pointerEvents:b.value?"none":"auto"},"trigger-placement":S.value,onMouseenter:_,onMouseleave:G,onMousedown:re},Q.value),[o.createVNode(o.Transition,{name:`${h.defaultNamespace}-${n.animationName}`,duration:n.duration,appear:!0,onBeforeEnter:K,onAfterEnter:he,onBeforeLeave:K,onAfterLeave:Re},{default:()=>{var t;return[o.withDirectives(o.createVNode("div",{class:w.e("wrapper"),style:x.value},[o.createVNode("div",{class:[w.e("content"),n.contentClass],style:n.contentStyle},[(t=r.content)==null?void 0:t.call(r)]),n.showArrow&&o.createVNode("div",{ref:Z,class:[w.e("arrow"),w.em("arrow",n.size),n.arrowClass],style:$.value},null)]),[[o.vShow,u.value]])]}})])]})]})]})])}}});exports.default=ye;
