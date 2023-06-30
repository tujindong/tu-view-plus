"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("vue"),U=require("./trigger.js"),Re=require("../../only-client/index.js"),H=require("../../resize-observer/index.js"),m=require("@tu-view-plus/hooks"),h=require("@tu-view-plus/utils"),X=require("./constant.js"),R=require("./utils.js");require("../style/trigger.css");const ge=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"],we=o.defineComponent({name:"TuTrigger",inheritAttrs:!1,props:U.triggerProps,emits:U.triggerEmits,setup(n,{emit:p,slots:r,attrs:l}){const{popupContainer:Y}=o.toRefs(n),J=o.computed(()=>h.omit(l,ge)),f=o.computed(()=>[].concat(n.trigger)),O=new Set,i=o.inject(X.triggerInjectionKey,void 0),{children:E,firstElement:M}=m.useFirstElement(),g=o.ref(),B=o.ref(n.defaultPopupVisible),S=o.ref(n.position),W=o.ref({}),x=o.ref({}),$=o.ref({}),Q=o.ref(),s=o.ref({top:0,left:0}),u=o.computed(()=>n.popupVisible??B.value),w=m.useNamespace("popup"),{teleportContainer:Z,containerRef:k}=m.useTeleportContainer({popupContainer:Y,visible:u,documentContainer:!0}),{zIndex:ee}=m.usePopupManager("popup",{visible:u});let T=0,v=!1;const ne=()=>{T&&(window.clearTimeout(T),T=0)},z=e=>{if(n.alignPoint){const{pageX:t,pageY:c}=e;s.value={top:c,left:t}}},y=()=>{if(!M.value||!g.value||!k.value)return;const e=k.value.getBoundingClientRect(),t=n.alignPoint?{top:s.value.top,bottom:s.value.top,left:s.value.left,right:s.value.left,scrollTop:s.value.top,scrollBottom:s.value.top,scrollLeft:s.value.left,scrollRight:s.value.left,width:0,height:0}:R.getElementScrollRect(M.value,e),c=()=>R.getElementScrollRect(g.value,e),F=c(),{style:C,position:V}=R.getPopupStyle(n.position,e,t,F,{offset:n.popupOffset,translate:n.popupTranslate,customStyle:n.popupStyle,autoFitPosition:n.autoFitPosition});n.autoFitTransformOrigin&&(x.value={transformOrigin:R.getTransformOrigin(V)}),n.autoFitPopupMinWidth?C.minWidth=`${t.width}px`:n.autoFitPopupWidth&&(C.width=`${t.width}px`),S.value!==V&&(S.value=V),W.value=C,n.showArrow&&o.nextTick(()=>{$.value=R.getArrowStyle(V,t,c(),{customStyle:n.arrowStyle})})},d=(e,t)=>{if(e===u.value&&T===0)return;const c=()=>{B.value=e,p("update:popupVisible",e),p("popupVisibleChange",e),e&&o.nextTick(()=>{y()})};t?(ne(),e!==u.value&&(T=window.setTimeout(c,t))):c()},oe=e=>{var t;(t=l.onClick)==null||t.call(l,e),!(n.disabled||u.value&&!n.clickToClose)&&(f.value.includes("click")?(z(e),d(!u.value)):f.value.includes("contextMenu")&&u.value&&d(!1))},I=e=>{var t;(t=l.onMouseenter)==null||t.call(l,e),!(n.disabled||!f.value.includes("hover"))&&(z(e),d(!0,n.mouseEnterDelay))},_=e=>{i==null||i.onMouseenter(e),I(e)},j=e=>{var t;(t=l.onMouseleave)==null||t.call(l,e),!(n.disabled||!f.value.includes("hover"))&&d(!1,n.mouseLeaveDelay)},G=e=>{i==null||i.onMouseleave(e),j(e)},te=e=>{var t;(t=l.onFocusin)==null||t.call(l,e),!(n.disabled||!f.value.includes("focus"))&&d(!0,n.focusDelay)},ue=e=>{var t;(t=l.onFocusout)==null||t.call(l,e),!(n.disabled||!f.value.includes("focus"))&&n.blurToClose&&d(!1)},le=e=>{var t;(t=l.onContextmenu)==null||t.call(l,e),!(n.disabled||!f.value.includes("contextMenu")||u.value&&!n.clickToClose)&&(z(e),d(!u.value),e.preventDefault())},ie=e=>{O.add(e),i==null||i.addChildRef(e)},ae=e=>{O.delete(e),i==null||i.removeChildRef(e)};o.provide(X.triggerInjectionKey,o.reactive({onMouseenter:_,onMouseleave:G,addChildRef:ie,removeChildRef:ae}));const N=()=>{h.off(document.documentElement,"mousedown",A),v=!1},L=m.usePickSlots(r,"content"),ce=o.computed(()=>{var e;return n.hideEmpty&&h.isEmptyChildren((e=L.value)==null?void 0:e.call(L))}),A=e=>{var t,c,F;if(!((t=M.value)!=null&&t.contains(e.target)||(c=g.value)!=null&&c.contains(e.target))){for(const C of O)if((F=C.value)!=null&&F.contains(e.target))return;N(),d(!1)}},P=h.throttleByRaf(()=>{u.value&&y()}),q=()=>{u.value&&y()},se=()=>{q(),p("resize")},de=e=>{n.preventFocus&&e.preventDefault()};i==null||i.addChildRef(g);const re=o.computed(()=>u.value?n.openedClass:void 0);let a;o.watch(u,e=>{if(n.clickOutsideToClose&&(!e&&v?N():e&&!v&&(h.on(document.documentElement,"mousedown",A),v=!0)),n.updateAtScroll){if(e){a=R.getScrollElements(M.value);for(const t of a)t.addEventListener("scroll",P)}else if(a){for(const t of a)t.removeEventListener("scroll",P);a=void 0}}e&&(D.value=!0)}),o.watch(()=>[n.autoFitPopupWidth,n.autoFitPopupMinWidth],()=>{u.value&&y()});const{createResizeObserver:fe,destroyResizeObserver:ve}=m.useResizeObserver({elementRef:k,onResize:q});o.onMounted(()=>{if(fe(),u.value&&(y(),n.clickOutsideToClose&&!v&&(h.on(document.documentElement,"mousedown",A),v=!0),n.updateAtScroll)){a=R.getScrollElements(M.value);for(const e of a)e.addEventListener("scroll",P)}}),o.onUpdated(()=>{u.value&&y()}),o.onDeactivated(()=>{d(!1)}),o.onBeforeUnmount(()=>{if(i==null||i.removeChildRef(g),ve(),v&&N(),a){for(const e of a)e.removeEventListener("scroll",P);a=void 0}});const D=o.ref(u.value),b=o.ref(!1),K=()=>{b.value=!0},me=()=>{b.value=!1,u.value&&p("show")},he=()=>{b.value=!1,u.value||(D.value=!1,p("hide"))};return()=>{var e;return E.value=((e=r.default)==null?void 0:e.call(r))??[],h.mergeFirstChild(E.value,{class:re.value,onClick:oe,onMouseenter:I,onMouseleave:j,onFocusin:te,onFocusout:ue,onContextmenu:le}),o.createVNode(o.Fragment,null,[n.autoFixPosition?o.createVNode(H.TuResizeObserver,{onResize:se},{default:()=>[E.value]}):E.value,o.createVNode(Re.TuOnlyClient,null,{default:()=>[o.createVNode(o.Teleport,{to:Z.value,disabled:!n.renderToBody},{default:()=>[(!n.unmountOnClose||u.value||D.value)&&!ce.value&&o.createVNode(H.TuResizeObserver,{onResize:q},{default:()=>[o.createVNode("div",o.mergeProps({ref:g,class:[w.b(),w.m(S.value)],style:{...W.value,zIndex:ee.value,pointerEvents:b.value?"none":"auto"},"trigger-placement":S.value,onMouseenter:_,onMouseleave:G,onMousedown:de},J.value),[o.createVNode(o.Transition,{name:`${m.defaultNamespace}-${n.animationName}`,duration:n.duration,appear:!0,onBeforeEnter:K,onAfterEnter:me,onBeforeLeave:K,onAfterLeave:he},{default:()=>{var t;return[o.withDirectives(o.createVNode("div",{class:w.e("wrapper"),style:x.value},[o.createVNode("div",{class:[w.e("content"),n.contentClass],style:n.contentStyle},[(t=r.content)==null?void 0:t.call(r)]),n.showArrow&&o.createVNode("div",{ref:Q,class:[w.e("arrow"),w.em("arrow",n.size),n.arrowClass],style:$.value},null)]),[[o.vShow,u.value]])]}})])]})]})]})])}}});exports.default=we;