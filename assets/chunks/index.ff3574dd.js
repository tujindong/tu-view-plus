import{r as R,v as W,x as _,s as z,y as C,z as S,A as j}from"./ResizeObserver.es.5be3fd9e.js";import{g as x,h as v,x as E,a3 as I,j as $,y as P}from"./framework.87ef146c.js";function g(e){var t;const n=_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const O=z?window:void 0,T=z?window.navigator:void 0;function b(...e){let t,n,o,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,i]=e,t=O):[t,n,o,i]=e,!t)return W;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const d=[],s=()=>{d.forEach(l=>l()),d.length=0},a=(l,p,f,m)=>(l.addEventListener(p,f,m),()=>l.removeEventListener(p,f,m)),u=E(()=>[g(t),_(i)],([l,p])=>{s(),l&&d.push(...n.flatMap(f=>o.map(m=>a(l,f,m,p))))},{immediate:!0,flush:"post"}),c=()=>{u(),s()};return S(c),c}function B(){const e=v(!1);return I()&&$(()=>{e.value=!0}),e}function A(e){const t=B();return x(()=>(t.value,!!e()))}function H(e,t={}){const{window:n=O}=t,o=A(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const d=v(!1),s=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",a):i.removeListener(a))},a=()=>{o.value&&(s(),i=n.matchMedia(j(e).value),d.value=!!(i!=null&&i.matches),i&&("addEventListener"in i?i.addEventListener("change",a):i.addListener(a)))};return P(a),S(()=>s()),d}function q(e={}){const{navigator:t=T,read:n=!1,source:o,copiedDuring:i=1500,legacy:d=!1}=e,s=["copy","cut"],a=A(()=>t&&"clipboard"in t),u=x(()=>a.value||d),c=v(""),l=v(!1),p=R(()=>l.value=!1,i);function f(){a.value?t.clipboard.readText().then(r=>{c.value=r}):c.value=w()}if(u.value&&n)for(const r of s)b(r,f);async function m(r=_(o)){u.value&&r!=null&&(a.value?await t.clipboard.writeText(r):y(r),c.value=r,l.value=!0,p.start())}function y(r){const h=document.createElement("textarea");h.value=r??"",h.style.position="absolute",h.style.opacity="0",document.body.appendChild(h),h.select(),document.execCommand("copy"),h.remove()}function w(){var r,h,M;return(M=(h=(r=document==null?void 0:document.getSelection)==null?void 0:r.call(document))==null?void 0:h.toString())!=null?M:""}return{isSupported:u,text:c,copied:l,copy:m}}var L=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,F=(e,t)=>{var n={};for(var o in e)D.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&L)for(var o of L(e))t.indexOf(o)<0&&Q.call(e,o)&&(n[o]=e[o]);return n};function N(e,t,n={}){const o=n,{window:i=O}=o,d=F(o,["window"]);let s;const a=A(()=>i&&"ResizeObserver"in i),u=()=>{s&&(s.disconnect(),s=void 0)},c=x(()=>Array.isArray(e)?e.map(f=>g(f)):[g(e)]),l=E(c,f=>{if(u(),a.value&&i){s=new ResizeObserver(t);for(const m of f)m&&s.observe(m,d)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{u(),l()};return S(p),{isSupported:a,stop:p}}function G(e,t={}){const{reset:n=!0,windowResize:o=!0,windowScroll:i=!0,immediate:d=!0}=t,s=v(0),a=v(0),u=v(0),c=v(0),l=v(0),p=v(0),f=v(0),m=v(0);function y(){const w=g(e);if(!w){n&&(s.value=0,a.value=0,u.value=0,c.value=0,l.value=0,p.value=0,f.value=0,m.value=0);return}const r=w.getBoundingClientRect();s.value=r.height,a.value=r.bottom,u.value=r.left,c.value=r.right,l.value=r.top,p.value=r.width,f.value=r.x,m.value=r.y}return N(e,y),E(()=>g(e),w=>!w&&y()),i&&b("scroll",y,{capture:!0,passive:!0}),o&&b("resize",y,{passive:!0}),C(()=>{d&&y()}),{height:s,bottom:a,left:u,right:c,top:l,width:p,x:f,y:m,update:y}}function J(e={}){const{window:t=O,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:i=!0,includeScrollbar:d=!0}=e,s=v(n),a=v(o),u=()=>{t&&(d?(s.value=t.innerWidth,a.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};if(u(),C(u),b("resize",u,{passive:!0}),i){const c=H("(orientation: portrait)");E(c,()=>u())}return{width:s,height:a}}export{N as a,J as b,G as c,q as d,b as u};
