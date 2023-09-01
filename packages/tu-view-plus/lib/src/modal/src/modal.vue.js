"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),R=require("./modal.js"),te=require("../../only-client/index.js"),r=require("@tu-view-plus/hooks"),t=require("@tu-view-plus/utils"),le=require("@tu-view-plus/icons-vue"),q=require("../../button/index.js"),A=require("../../icon/index.js");require("../style/modal.css");const ae=["onClick","onMousedown"],se=e.defineComponent({name:"TuModal",inheritAttrs:!1}),re=e.defineComponent({...se,props:R.modalProps,emits:R.modalEmits,setup(K,{emit:i}){const n=K;let v=0,k=!1;const{t:h}=r.useLocale(),l=r.useNamespace("modal"),T=r.useNamespace("modal-container"),y=r.useNamespace("modal-wrapper"),{fullscreen:I,popupContainer:G}=e.toRefs(n),f=e.ref(),N=e.ref(),m=e.ref(n.defaultVisible),w=e.ref(!1),d=e.ref(!1),a=e.computed(()=>n.visible??m.value),U=e.computed(()=>n.okLoading||d.value),z=e.computed(()=>t.TypeComponentsMap[n.messageType]||""),p=e.ref(a.value),g=e.computed(()=>n.draggable&&!n.fullscreen),F=e.computed(()=>n.cancelText||h("tu.modal.cancel")),H=e.computed(()=>n.okText||h("tu.modal.confirm")),{teleportContainer:Y,containerRef:E}=r.useTeleportContainer({popupContainer:G,visible:a}),{zIndex:j,isLastDialog:W}=r.usePopupManager("dialog",{visible:a}),{position:u,handleMoveDown:V}=r.useDraggable({wrapperRef:f,modalRef:N,draggable:g}),{setOverflowHidden:M,resetOverflow:D}=r.useOverflow(E),J=e.computed(()=>({[y.b()]:!0,[y.is("align-center")]:n.alignCenter&&!n.fullscreen,[y.is("moved")]:!!u.value})),Q=e.computed(()=>{const o=n.messageType;return{[l.em("icon",o)]:o&&t.TypeComponentsMap[o]}}),X=e.computed(()=>[l.b(),n.modalClass,{[l.m(n.size)]:n.size,[l.m("simple")]:n.simple,[l.m("draggable")]:g.value,[l.m("fullscreen")]:n.fullscreen}]),Z=e.computed(()=>{const o={...n.modalStyle??{}};return n.width&&(o.width=t.addUnit(n.width)),!n.alignCenter&&n.top&&(o.top=t.addUnit(n.top)),u.value&&(o.transform=`translate(${u.value[0]}px, ${u.value[1]}px)`),o}),x=o=>{n.mask&&n.maskClosable&&w.value&&C(o)},_=o=>{o.target===f.value&&(w.value=!0)},ee=async o=>{const c=v,B=await new Promise(async b=>{if(t.isFunction(n.onBeforeOk)){let s=n.onBeforeOk((L=!0)=>b(L));if((t.isPromise(s)||!t.isBoolean(s))&&(d.value=!0),t.isPromise(s))try{s=await s??!0}catch{s=!1}t.isBoolean(s)&&b(s)}else b(!0)});c===v&&(B?(i("ok",o),S()):d.value&&(d.value=!1))},C=o=>{let c=!0;t.isFunction(n.onBeforeCancel)&&(c=n.onBeforeCancel()??!1),c&&(i("cancel",o),S())},S=()=>{v++,d.value&&(d.value=!1),m.value=!1,i("update:visible",!1)},oe=()=>{a.value&&(!t.contains(f.value,document.activeElement)&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),i("open"))},ne=()=>{a.value||(g.value&&(u.value=void 0),p.value=!1,D(),i("close"))},O=()=>{n.escToClose&&!k&&(k=!0,t.on(document.documentElement,"keydown",$))},P=()=>{k=!1,t.off(document.documentElement,"keydown",$)},$=o=>{n.escToClose&&o.key===t.KEYBOARD_KEY.ESC&&W()&&C(o)};return e.watch(I,()=>{u.value&&(u.value=void 0)}),e.watch(a,o=>{m.value!==o&&(m.value=o),o?(i("beforeOpen"),p.value=!0,w.value=!1,M(),O()):(i("beforeClose"),P())}),e.onBeforeUnmount(()=>{D(),P()}),e.onMounted(()=>{E.value=t.getElement(n.popupContainer),a.value&&(M(),n.escToClose&&O())}),(o,c)=>(e.openBlock(),e.createBlock(e.unref(te.TuOnlyClient),null,{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.Teleport,{to:e.unref(Y),disabled:!o.renderToBody},[!o.unmountOnClose||e.unref(a)||p.value?e.withDirectives((e.openBlock(),e.createElementBlock("div",e.mergeProps({key:0,class:e.unref(T).b(),style:{zIndex:e.unref(j)}},o.$attrs),[e.createVNode(e.Transition,{name:o.maskAnimationName,appear:""},{default:e.withCtx(()=>[o.mask?e.withDirectives((e.openBlock(),e.createElementBlock("div",{key:0,ref:"maskRef",class:e.normalizeClass(e.unref(T).e("mask")),style:e.normalizeStyle(o.maskStyle)},null,6)),[[e.vShow,e.unref(a)]]):e.createCommentVNode("",!0)]),_:1},8,["name"]),e.createElementVNode("div",{ref_key:"wrapperRef",ref:f,class:e.normalizeClass(e.unref(J)),onClick:e.withModifiers(x,["self"]),onMousedown:e.withModifiers(_,["self"])},[e.createVNode(e.Transition,{appear:"",name:o.modalAnimationName,onAfterEnter:oe,onAfterLeave:ne},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{ref_key:"modalRef",ref:N,class:e.normalizeClass(e.unref(X)),style:e.normalizeStyle(e.unref(Z))},[o.$slots.title||o.title||o.closable?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(l).e("header")),onMousedown:c[0]||(c[0]=(...B)=>e.unref(V)&&e.unref(V)(...B))},[o.$slots.title||o.title?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass([e.unref(l).e("title"),e.unref(l).is(`align-${o.titleAlign}`)])},[o.messageType?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(l).e("title-icon"))},[e.unref(z)?(e.openBlock(),e.createBlock(e.unref(A.TuIcon),{key:0,class:e.normalizeClass([e.unref(l).e("icon"),e.unref(Q)])},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(z))))]),_:1},8,["class"])):e.createCommentVNode("",!0)],2)):e.createCommentVNode("",!0),e.renderSlot(o.$slots,"title",{},()=>[e.createTextVNode(e.toDisplayString(o.title),1)])],2)):e.createCommentVNode("",!0),!o.simple&&o.closable?(e.openBlock(),e.createElementBlock("div",{key:1,tabindex:"-1",role:"button","aria-label":"Close",class:e.normalizeClass(e.unref(l).e("icon-close")),onClick:C},[e.createVNode(e.unref(A.TuIcon),null,{default:e.withCtx(()=>[e.createVNode(e.unref(le.Close))]),_:1})],2)):e.createCommentVNode("",!0)],34)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass([e.unref(l).e("body"),o.bodyClass]),style:e.normalizeStyle(o.bodyStyle)},[e.renderSlot(o.$slots,"default")],6),o.footer?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(l).e("footer"))},[e.renderSlot(o.$slots,"footer",{},()=>[o.hideCancel?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.unref(q.TuButton),e.mergeProps({key:0},o.cancelButtonProps,{size:o.size,onClick:C}),{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(F)),1)]),_:1},16,["size"])),e.createVNode(e.unref(q.TuButton),e.mergeProps({type:"primary"},o.okButtonProps,{size:o.size,loading:e.unref(U),onClick:ee}),{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(H)),1)]),_:1},16,["size","loading"])])],2)):e.createCommentVNode("",!0)],6),[[e.vShow,e.unref(a)]])]),_:3},8,["name"])],42,ae)],16)),[[e.vShow,e.unref(a)||p.value]]):e.createCommentVNode("",!0)],8,["to","disabled"]))]),_:3}))}});exports.default=re;