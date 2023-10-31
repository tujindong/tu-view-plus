import{b as me,u as ve,a as U,c as ye,d as Y,i as G,o as be,e as Ce,g as ke,f as S,w as he,h as we}from"./ResizeObserver.es.5be3fd9e.js";import{d as X,a5 as Be,h as N,g as y,x as ge,j as Oe,a6 as xe,o as d,b as E,w as b,a7 as Se,l as a,a8 as L,c as C,L as V,H as k,T as Z,n as p,a9 as j,e as f,k as q,N as Te,r as T,a as F,t as I,aa as B,ab as J,ac as Q,O as ze}from"./framework.87ef146c.js";import{u as _e,a as Pe,b as W,m as $e,K as Ne,o as Ee}from"./index.fc22bc60.js";import{f as Le,c as Ve}from"./index.1cd28ace.js";import{u as je}from"./index.93bb7f70.js";const Fe=["top","right","bottom","left"],Ie=me({visible:{type:Boolean,default:!1},defaultVisible:{type:Boolean,default:!1},placement:{type:String,default:"right",validator:o=>Fe.includes(o)},title:String,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closable:{type:Boolean,default:!0},okText:String,cancelText:String,okLoading:{type:Boolean,default:!1},okButtonProps:{type:Object},cancelButtonProps:{type:Object},unmountOnClose:Boolean,width:{type:[Number,String],default:250},height:{type:[Number,String],default:250},size:{...ve,default:"medium"},popupContainer:{type:[String,Object],default:"body"},drawerStyle:{type:Object},onBeforeOk:{type:Function},onBeforeCancel:{type:Function},escToClose:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},hideCancel:{type:Boolean,default:!1}}),Ae={"update:visible":o=>!0,ok:o=>!0,cancel:o=>!0,open:()=>!0,close:()=>!0,beforeOpen:()=>!0,beforeClose:()=>!0};const De=X({name:"TuDrawer",inheritAttrs:!1}),z=X({...De,props:Ie,emits:Ae,setup(o,{emit:g}){let s=0,m=!1;const t=o,r=g,{t:O}=je(),i=U("drawer"),l=U("drawer-container"),{popupContainer:_}=Be(t),v=N(t.defaultVisible),u=N(!1),n=y(()=>t.visible??v.value),ee=y(()=>t.okLoading||u.value),h=N(n.value),{teleportContainer:oe,containerRef:P}=_e({popupContainer:_,visible:n}),{zIndex:te,isLastDialog:ae}=ye("dialog",{visible:n}),{setOverflowHidden:A,resetOverflow:D}=Pe(P),le=y(()=>(P==null?void 0:P.value)===document.body),ne=y(()=>le.value?{zIndex:te.value}:{zIndex:"inherit",position:"absolute"}),se=y(()=>({[i.b()]:!0,[i.m(t.size)]:t.size})),re=y(()=>{const e={[t.placement]:0,...t.drawerStyle};return["right","left"].includes(t.placement)&&(e.width=Y(t.width)),["top","bottom"].includes(t.placement)&&(e.height=Y(t.height)),e}),ie=e=>{t.maskClosable&&x(e)},x=e=>{let w=!0;B(t.onBeforeCancel)&&(w=t.onBeforeCancel()??!1),w&&(r("cancel",e),K())},de=async e=>{const w=s,pe=await new Promise(async $=>{if(B(t.onBeforeOk)){let c=t.onBeforeOk((fe=!0)=>$(fe));if((J(c)||!G(c))&&(u.value=!0),J(c))try{c=await c??!0}catch{c=!1}G(c)&&$(c)}else $(!0)});w===s&&(pe?(r("ok",e),K()):u.value&&(u.value=!1))},K=()=>{s++,u.value&&(u.value=!1),v.value=!1,r("update:visible",!1)},ue=()=>{n.value&&r("open")},ce=()=>{n.value||(h.value=!1,D(),r("close"))},M=()=>{t.escToClose&&!m&&(m=!0,be(document.documentElement,"keydown",H))},R=()=>{m&&(m=!1,Ce(document.documentElement,"keydown",H))},H=e=>{t.escToClose&&e.key===Ne.ESC&&ae()&&x(e)};return ge(n,e=>{v.value!==e&&(v.value=e),e?(r("beforeOpen"),h.value=!0,A(),M()):(r("beforeClose"),R())}),Oe(()=>{n.value&&(h.value=!0,A(),M())}),xe(()=>{D(),R()}),(e,w)=>(d(),E(a($e),null,{default:b(()=>[(d(),E(Se,{to:a(oe),disabled:!e.renderToBody},[!e.unmountOnClose||n.value||h.value?L((d(),C("div",V({key:0,class:a(l).b(),style:ne.value},e.$attrs),[k(Z,{name:"fade-drawer"},{default:b(()=>[e.mask?L((d(),C("div",{key:0,class:p(a(l).e("mask")),onClick:ie},null,2)),[[j,n.value]]):f("",!0)]),_:1}),k(Z,{name:`slider-drawer-${e.placement}`,appear:"",onAfterEnter:ue,onAfterLeave:ce},{default:b(()=>[L(q("div",{class:p(se.value),style:Te(re.value)},[e.header?(d(),C("div",{key:0,class:p(a(i).e("header"))},[T(e.$slots,"header",{},()=>[e.$slots.title||e.title?(d(),C("div",{key:0,class:p(a(i).e("title"))},[T(e.$slots,"title",{},()=>[F(I(e.title),1)])],2)):f("",!0),e.closable?(d(),C("div",{key:1,tabindex:"-1",role:"button","aria-label":"Close",class:p(a(i).e("icon")),onClick:x},[k(a(Le),null,{default:b(()=>[k(a(Ve))]),_:1})],2)):f("",!0)])],2)):f("",!0),q("div",{class:p(a(i).e("body"))},[T(e.$slots,"default")],2),e.footer?(d(),C("div",{key:1,class:p(a(i).e("footer"))},[T(e.$slots,"footer",{},()=>[e.hideCancel?f("",!0):(d(),E(a(W),V({key:0},e.cancelButtonProps,{size:e.size,onClick:x}),{default:b(()=>[F(I(e.cancelText||a(O)("tu.drawer.cancel")),1)]),_:1},16,["size"])),k(a(W),V({type:"primary"},e.okButtonProps,{size:e.size,loading:ee.value,onClick:de}),{default:b(()=>[F(I(e.okText||a(O)("tu.drawer.confirm")),1)]),_:1},16,["size","loading"])])],2)):f("",!0)],6),[[j,n.value]])]),_:3},8,["name"])],16)),[[j,n.value||h.value]]):f("",!0)],8,["to","disabled"]))]),_:3}))}}),Ke=(o,g)=>{let s=ke("drawer");const m=()=>{l.component&&(l.component.props.visible=!1),B(o.onOk)&&o.onOk()},t=()=>{l.component&&(l.component.props.visible=!1),B(o.onCancel)&&o.onCancel()},r=async()=>{await ze(),s&&(Q(null,s),document.body.removeChild(s)),s=null,B(o.onClose)&&o.onClose()},O=()=>{l.component&&(l.component.props.visible=!1)},i=_=>{l.component&&Object.entries(_).forEach(([v,u])=>{l.component.props[v]=u})},l=k(z,{visible:!0,renderToBody:!1,unmountOnClose:!0,onOk:m,onCancel:t,onClose:r,...Ee(o,["content","title","footer","visible","unmountOnClose","onOk","onCancel","onClose"]),header:typeof o.header=="boolean"?o.header:void 0,footer:typeof o.footer=="boolean"?o.footer:void 0},{default:S(o.content),header:typeof o.header!="boolean"?S(o.header):void 0,title:S(o.title),footer:typeof o.footer!="boolean"?S(o.footer):void 0});return(g??z._context)&&(l.appContext=g??z._context),Q(l,s),document.body.appendChild(s),{close:O,update:i}},Me={open:Ke},Ze=he(z),qe=we(Me,"$drawer");export{Ze as s,qe as w};
