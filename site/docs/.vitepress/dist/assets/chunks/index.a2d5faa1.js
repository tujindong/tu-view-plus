import{b as R,m as S,u as X,a as Y,d as ee,q as te,r as D,h as oe}from"./ResizeObserver.es.890944a3.js";import{d as j,h as se,g as m,ap as ne,j as ae,o as g,b as k,w as N,a8 as w,k as h,n as v,N as V,l as c,I as ie,e as le,t as $,r as re,c as F,a9 as E,H,a1 as ce,T as ue,ar as de,af as pe,as as I,ae as fe,ac as P}from"./framework.e9733b05.js";import{i as me,T as U,f as W}from"./index.dedbea18.js";import{F as ve,E as z}from"./use-global-config.6d8e7457.js";import{c as ye}from"./index.8c9f13a0.js";const q=["success","info","warning","error"],ge=["tr","tl","br","bl"],Ce=R({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:me},id:{type:String,default:""},message:{type:S([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:S(Function),default:()=>{}},onClose:{type:S(Function),required:!0},position:{type:String,values:ge,default:"tr"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...q,""],default:""},size:{...X,default:"medium"},zIndex:Number}),he={destroy:()=>!0};const be=["id"],Te={key:0},xe=["innerHTML"],Se=j({name:"TuNotification"}),ke=j({...Se,props:Ce,emits:he,setup(t,{expose:s,emit:u}){let a;const e=t,f=u,n=Y("notification"),{ns:r,zIndex:d}=ve("notification"),{nextZIndex:i,currentZIndex:p}=d,l=se(!1),T=m(()=>e.position.endsWith("r")?"right":"left"),A=m(()=>e.position.startsWith("t")?"top":"bottom"),B=m(()=>e.type&&U[e.type]||e.icon),O=m(()=>[n.b(),{[n.m(e.size)]:e.size},{[n.is("show-close")]:e.showClose},e.customClass,T.value]),Z=m(()=>({[A.value]:ee(e.offset),zIndex:e.zIndex??p.value})),K=m(()=>{const o=e.type;return o&&U[e.type]?n.em("type-icon",o):""}),G=m(()=>e.title?void 0:{margin:0}),J=()=>{f("destroy")},x=()=>{e.duration>0&&({stop:a}=de(()=>{l.value&&C()},e.duration))},L=()=>{a==null||a()},C=()=>{l.value=!1};return ne(document,"keydown",({code:o})=>{o===z.delete||o===z.backspace?L():o===z.esc?l.value&&C():x()}),ae(()=>{x(),i(),l.value=!0}),s({visible:l,close:C}),(o,_)=>(g(),k(ue,{name:`${c(te)}-notification-fade`,onBeforeLeave:o.onClose,onAfterLeave:J},{default:N(()=>[w(h("div",{role:"alert",id:o.id,class:v(O.value),style:V(Z.value),onMouseenter:L,onMouseleave:x,onClick:_[0]||(_[0]=(...Q)=>o.onClick&&o.onClick(...Q))},[B.value?(g(),k(c(W),{key:0,class:v([c(r).e("type-icon"),K.value])},{default:N(()=>[(g(),k(ie(B.value)))]),_:1},8,["class"])):le("",!0),h("div",{class:v(c(n).e("group"))},[h("div",{class:v(c(n).e("title"))},$(o.title),3),w(h("div",{class:v(c(n).e("content")),style:V(G.value)},[re(o.$slots,"default",{},()=>[o.dangerouslyUseHTMLString?(g(),F("div",{key:1,innerHTML:o.message},null,8,xe)):(g(),F("div",Te,$(o.message),1))])],6),[[E,o.message]]),w(H(c(W),{class:v(c(n).e("close-icon")),onClick:ce(C,["stop"])},{default:N(()=>[H(c(ye))]),_:1},8,["class","onClick"]),[[E,o.showClose]])],2)],46,be),[[E,l.value]])]),_:3},8,["name","onBeforeLeave"]))}}),b={tl:[],tr:[],bl:[],br:[]},M=16;let Ne=1;const y=function(t={},s=null){if(!pe)return{close:()=>{}};(typeof t=="string"||I(t))&&(t={message:t});const u=t.position||"tr";let a=t.offset||0;b[u].forEach(({vm:p})=>{var l;a+=(((l=p.el)==null?void 0:l.offsetHeight)||0)+M}),a+=M;const e=`notification_${Ne++}`,f=t.onClose,n={...t,offset:a,id:e,onClose:()=>{we(e,u,f)}};let r=document.body;D(t.appendTo)?r=t.appendTo:fe(t.appendTo)&&(r=document.querySelector(t.appendTo)),D(r)||(r=document.body);const d=document.createElement("div"),i=H(ke,n,I(n.message)?{default:()=>n.message}:null);return i.appContext=s??y._context,i.props.onDestroy=()=>{P(null,d)},P(i,d),b[u].push({vm:i}),r.appendChild(d.firstElementChild),{close:()=>{i.component.exposed.visible.value=!1}}};q.forEach(t=>{y[t]=(s={})=>((typeof s=="string"||I(s))&&(s={message:s}),y({...s,type:t}))});function we(t,s,u){const a=b[s],e=a.findIndex(({vm:i})=>{var p;return((p=i.component)==null?void 0:p.props.id)===t});if(e===-1)return;const{vm:f}=a[e];if(!f)return;u==null||u(f);const n=f.el.offsetHeight,r=s.startsWith("t")?"top":"bottom";a.splice(e,1);const d=a.length;if(!(d<1))for(let i=e;i<d;i++){const{el:p,component:l}=a[i].vm,T=Number.parseInt(p.style[r],10)-n-M;l.props.offset=T}}function Ee(){for(const t of Object.values(b))t.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}y.closeAll=Ee;y._context=null;const Le=oe(y,"$notification");export{Le as f};
