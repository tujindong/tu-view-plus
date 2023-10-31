import{G as $e,H as Ve,I as _e,b as Me,u as Le,m as ue,a as de,w as Be}from"./ResizeObserver.es.5be3fd9e.js";import{g as u,a3 as Q,l as e,M as $,h as g,j as ye,x as he,U as Fe,z as Te,O as ce,d as Ie,E as Re,a2 as je,as as P,a8 as ze,a9 as De,o as v,c as k,n as h,r as U,e as I,k as B,b,w as F,I as Y,L as pe,F as Ae,H as Ue,a1 as Ke,t as ve}from"./framework.87ef146c.js";import{i as me,V as Oe,f as T,c as Ge,v as He,h as We}from"./index.1cd28ace.js";import{m as Je}from"./typescript.defaf979.js";import{d as be}from"./error.0397081d.js";function Xe(t){return t==null}const q="update:modelValue",ha="change",Ia="input",xe=t=>{const a=Q();return u(()=>{var d,c;return(c=(d=a==null?void 0:a.proxy)==null?void 0:d.$props)==null?void 0:c[t]})},fe={prefix:Math.floor(Math.random()*1e4),current:0},Ye=Symbol("elIdInjection"),qe=()=>Q()?$(Ye,fe):fe,Qe=t=>{const a=qe(),d=$e();return u(()=>e(t)||`${d.value}-id-${a.prefix}-${a.current++}`)},Ze=["class","style"],ea=/^on[A-Z]/,aa=(t={})=>{const{excludeListeners:a=!1,excludeKeys:d}=t,c=u(()=>((d==null?void 0:d.value)||[]).concat(Ze)),n=Q();return n?u(()=>{var m;return Ve(Object.entries((m=n.proxy)==null?void 0:m.$attrs).filter(([p])=>!c.value.includes(p)&&!(a&&ea.test(p))))}):u(()=>({}))},Z=Symbol("formContextKey"),we=Symbol("formItemContextKey"),ge=()=>{const t=$(Z,void 0),a=$(we,void 0);return{form:t,formItem:a}},ta=(t,{formItemContext:a,disableIdGeneration:d,disableIdManagement:c})=>{d||(d=g(!1)),c||(c=g(!1));const n=g();let m;const p=u(()=>{var o;return!!(!t.label&&a&&a.inputIds&&((o=a.inputIds)==null?void 0:o.length)<=1)});return ye(()=>{m=he([Fe(t,"id"),d],([o,f])=>{const x=o??(f?void 0:Qe().value);x!==n.value&&(a!=null&&a.removeInputId&&(n.value&&a.removeInputId(n.value),!(c!=null&&c.value)&&!f&&x&&a.addInputId(x)),n.value=x)},{immediate:!0})}),Te(()=>{m&&m(),a!=null&&a.removeInputId&&n.value&&a.removeInputId(n.value)}),{isLabeledByFormItem:p,inputId:n}},la=(t,a={})=>{const d=g(void 0),c=a.prop?d:xe("size"),n=a.global?d:_e(),m=a.form?{size:void 0}:$(Z,void 0),p=a.formItem?{size:void 0}:$(we,void 0);return u(()=>e(t)||c.value||(p==null?void 0:p.size)||(m==null?void 0:m.size)||n.value||"")},na=t=>{const a=xe("disabled"),d=$(Z,void 0);return u(()=>a.value||e(t)||(d==null?void 0:d.disabled)||!1)},oa=Me({id:{type:String,default:void 0},size:{...Le,default:"medium"},disabled:Boolean,modelValue:{type:ue([String,Number,Object]),default:""},type:{type:String,default:"text"},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:me},prefixIcon:{type:me},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ue([Object,Array,String]),default:()=>Je({})}}),sa={[q]:t=>!0,input:t=>!0,change:t=>!0,focus:t=>!0,blur:t=>!0,clear:()=>!0,mouseleave:t=>!0,mouseenter:t=>!0,keydown:t=>!0,compositionstart:t=>!0,compositionupdate:t=>!0,compositionend:t=>!0};function ra(t,a,d){const c=g(!1),n=g(!1),m=g(!1),p=g(!1),o=u(()=>d.value),f=u(()=>Xe(t.modelValue)?"":String(t.modelValue)),x=u(()=>f.value.length),{formItem:w}=ge(),C=async()=>{var l;await ce(),(l=o.value)==null||l.focus()},V=()=>{var l;return(l=o.value)==null?void 0:l.blur()},_=()=>{var l;return(l=o.value)==null?void 0:l.select()},K=()=>{a(q,""),a("change",""),a("clear"),a("input","")},O=l=>{c.value=!0,a("mouseenter",l)},G=l=>{c.value=!1,a("mouseleave",l)},M=l=>{a("compositionstart",l),m.value=!0},R=l=>{a("compositionupdate",l)},j=l=>{a("compositionend",l),m.value&&(m.value=!1,N(l))},N=async l=>{let{value:y}=l.target;if(t.formatter&&(y=t.parser?t.parser(y):y),!m.value){if(y===f.value){S();return}a(q,y),a("input",y),await ce(),S()}},E=l=>{n.value=!0,a("focus",l)},H=l=>{var y;n.value=!1,a("blur",l),t.validateEvent&&((y=w==null?void 0:w.validate)==null||y.call(w,"blur").catch(J=>be()))},W=l=>{a("change",l.target.value)},z=l=>{a("keydown",l)},D=()=>{p.value=!p.value,C()},S=()=>{const l=o.value,y=t.formatter?t.formatter(f.value):f.value;!l||l.value===y||(l.value=y)};return he(f,()=>S()),{inputRef:o,isHovering:c,isFocused:n,isPasswordVisible:p,nativeInputValue:f,textLength:x,focus:C,blur:V,select:_,clear:K,handleMouseEnter:O,handleMouseLeave:G,handleCompositionStart:M,handleCompositionUpdate:R,handleCompositionEnd:j,handleInput:N,handleFocus:E,handleBlur:H,handleChange:W,handleKeydown:z,handlePasswordVisible:D,setNativeInputValue:S}}const ia=["role"],ua=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],da=Ie({name:"TuInput",inheritAttrs:!1}),ca=Ie({...da,props:oa,emits:sa,setup(t,{expose:a,emit:d}){const c=Re(),n=t,m=d,p=je(),o=de("input"),f=de("input-group"),x=la(),w=na(),C=aa({excludeKeys:u(()=>Object.keys(ie.value))}),{form:V,formItem:_}=ge(),{inputId:K}=ta(n,{formItemContext:_}),{inputRef:O,isHovering:G,isFocused:M,isPasswordVisible:R,textLength:j,nativeInputValue:N,focus:E,blur:H,select:W,clear:z,handleMouseEnter:D,handleMouseLeave:S,handleCompositionStart:l,handleCompositionUpdate:y,handleCompositionEnd:J,handleInput:ee,handleFocus:ae,handleBlur:te,handleChange:le,handleKeydown:ne,handlePasswordVisible:Ce,setNativeInputValue:Ee}=ra(n,m,c),L=u(()=>(_==null?void 0:_.validateState)||""),oe=u(()=>(V==null?void 0:V.statusIcon)??!1),se=u(()=>L.value&&Oe[L.value]),Se=u(()=>!!A.value&&j.value>Number(C.value.maxlength)),X=u(()=>n.clearable&&!w.value&&!n.readonly&&!!N.value&&(M.value||G.value)),re=u(()=>n.showPassword&&!w.value&&!n.readonly&&!!N.value&&(!!N.value||M.value)),A=u(()=>n.showWordLimit&&!!C.value.maxlength&&n.type==="text"&&!w.value&&!n.readonly&&!n.showPassword),ke=u(()=>!!p.suffix||!!n.suffixIcon||X.value||n.showPassword||A.value||!!L.value&&oe.value),Ne=u(()=>({[o.b()]:!0,[o.m(x.value)]:x.value,[o.is("disabled")]:w.value,[o.is("exceed")]:Se.value,[f.b()]:p.prepend||p.append,[f.m("prepend")]:p.prepend,[f.m("append")]:p.append,[P().class]:P().class})),Pe=u(()=>[P().style,n.inputStyle]),ie=u(()=>{const s={};return n.containerRole==="combobox"&&(s["aria-haspopup"]=P()["aria-haspopup"],s["aria-owns"]=P()["aria-owns"],s["aria-expanded"]=P()["aria-expanded"]),s});return ye(()=>{!n.formatter&&n.parser&&be(),Ee()}),a({input:c,ref:O,focus:E,blur:H,select:W,clear:z}),(s,r)=>ze((v(),k("div",pe(ie.value,{class:Ne.value,style:Pe.value,role:s.containerRole,onMouseenter:r[11]||(r[11]=(...i)=>e(D)&&e(D)(...i)),onMouseleave:r[12]||(r[12]=(...i)=>e(S)&&e(S)(...i))}),[s.$slots.prepend?(v(),k("div",{key:0,class:h(e(f).e("prepend"))},[U(s.$slots,"prepend")],2)):I("",!0),B("div",{class:h([e(o).e("wrapper"),{[e(o).is("focus")]:e(M)}])},[s.$slots.prefix||s.prefixIcon?(v(),k("span",{key:0,class:h(e(o).e("prefix"))},[B("span",{class:h(e(o).e("prefix-inner")),onClick:r[0]||(r[0]=(...i)=>e(E)&&e(E)(...i))},[U(s.$slots,"prefix"),s.prefixIcon?(v(),b(e(T),{key:0,class:h(e(o).e("icon"))},{default:F(()=>[(v(),b(Y(s.prefixIcon)))]),_:1},8,["class"])):I("",!0)],2)],2)):I("",!0),B("input",pe({ref_key:"input",ref:c},e(C),{id:e(K),class:e(o).e("inner"),type:s.showPassword?e(R)?"text":"password":s.type,disabled:e(w),formatter:s.formatter,parser:s.parser,readonly:s.readonly,autocomplete:s.autocomplete,tabindex:s.tabindex,"aria-label":s.label,placeholder:s.placeholder,style:s.inputStyle,form:e(V),onCompositionstart:r[1]||(r[1]=(...i)=>e(l)&&e(l)(...i)),onCompositionupdate:r[2]||(r[2]=(...i)=>e(y)&&e(y)(...i)),onCompositionend:r[3]||(r[3]=(...i)=>e(J)&&e(J)(...i)),onInput:r[4]||(r[4]=(...i)=>e(ee)&&e(ee)(...i)),onFocus:r[5]||(r[5]=(...i)=>e(ae)&&e(ae)(...i)),onBlur:r[6]||(r[6]=(...i)=>e(te)&&e(te)(...i)),onChange:r[7]||(r[7]=(...i)=>e(le)&&e(le)(...i)),onKeydown:r[8]||(r[8]=(...i)=>e(ne)&&e(ne)(...i))}),null,16,ua),ke.value?(v(),k("span",{key:1,class:h(e(o).e("suffix"))},[B("span",{class:h(e(o).e("suffix-inner")),onClick:r[10]||(r[10]=(...i)=>e(E)&&e(E)(...i))},[!X.value||!re.value||!A.value?(v(),k(Ae,{key:0},[U(s.$slots,"suffix"),s.suffixIcon?(v(),b(e(T),{key:0,class:h(e(o).e("icon"))},{default:F(()=>[(v(),b(Y(s.suffixIcon)))]),_:1},8,["class"])):I("",!0)],64)):I("",!0),X.value?(v(),b(e(T),{key:1,class:h([e(o).e("icon"),e(o).em("icon","clear")]),onMousedown:r[9]||(r[9]=Ke(()=>{},["prevent"])),onClick:e(z)},{default:F(()=>[Ue(e(Ge))]),_:1},8,["class","onClick"])):I("",!0),re.value?(v(),b(e(T),{key:2,class:h([e(o).e("icon"),e(o).em("icon","password")]),onClick:e(Ce)},{default:F(()=>[e(R)?(v(),b(e(He),{key:0})):(v(),b(e(We),{key:1}))]),_:1},8,["class","onClick"])):I("",!0),A.value?(v(),k("span",{key:3,class:h(e(o).e("count"))},[B("span",{class:h(e(o).e("count-inner"))},ve(e(j))+" / "+ve(e(C).maxlength),3)],2)):I("",!0),L.value&&se.value&&oe.value?(v(),b(e(T),{key:4,class:h([e(o).e("icon"),e(o).e("validateIcon"),e(o).is("loading",L.value==="validating")])},{default:F(()=>[(v(),b(Y(se.value)))]),_:1},8,["class"])):I("",!0)],2)],2)):I("",!0)],2),s.$slots.append?(v(),k("div",{key:1,class:h(e(f).e("append"))},[U(s.$slots,"append")],2)):I("",!0)],16,ia)),[[De,s.type!=="hidden"]])}}),ba=Be(ca);export{ta as A,ha as C,Ia as I,q as U,Xe as a,aa as b,ba as i,Z as o,Qe as u,la as x,na as y,ge as z};