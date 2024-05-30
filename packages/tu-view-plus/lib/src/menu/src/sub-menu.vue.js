"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),M=require("./sub-menu.js"),m=require("./hooks/use-level.js"),x=require("./hooks/use-menu-context.js"),y=require("./hooks/use-menu-data-collector.js");require("@tu-view-plus/utils");const q=require("./hooks/use-menu.js"),f=require("@tu-view-plus/icons-vue"),h=require("../../icon/index.js"),b=require("./sub-menu-pop.vue.js"),C=require("./sub-menu-inline.vue.js");require("../style/menu.css");const I=e.defineComponent({name:"TuSubMenu",props:M.subMenuProps,setup(t,{attrs:r}){const{key:u}=q.useMenu(),{level:d}=m.useLevel(),{popup:o}=e.toRefs(t),n=x.useMenuContext(),c=e.computed(()=>{const{mode:l,collapsed:i,inTrigger:a}=n;return!!(typeof o.value=="function"?o.value(d.value):o.value)||i||a||l!=="vertical"}),{subMenuKeys:s,menuItemKeys:_}=y.useMenuDataCollector({key:u.value,type:"subMenu"}),v=e.computed(()=>{const l=n.selectedKeys||[],i=a=>{for(let p=0;p<l.length;p++){const g=l[p];if(a.includes(g))return!0}return!1};return i(s.value)||i(_.value)});return{subMenuKeys:s,menuItemKeys:_,isChildrenSelected:v,props:t,attrs:r,computedKey:u,computedPopup:c,expandIconDown:e.toRef(n,"expandIconDown"),expandIconRight:e.toRef(n,"expandIconRight")}},render(){const{props:t,attrs:r,computedKey:u,computedPopup:d,expandIconDown:o,expandIconRight:n,isChildrenSelected:c}=this,s={...this.$slots,"expand-icon-down":this.$slots["expand-icon-down"]||o||(()=>[e.createVNode(h.TuIcon,null,{default:()=>[e.createVNode(f.ArrowDown,null,null)]})]),"expand-icon-right":this.$slots["expand-icon-right"]||n||(()=>[e.createVNode(h.TuIcon,null,{default:()=>[e.createVNode(f.ArrowRight,null,null)]})])};return d?e.createVNode(b.default,e.mergeProps({key:u,title:t.title,selectable:t.selectable,isChildrenSelected:c,popupMaxHeight:t.popupMaxHeight},r),s):e.createVNode(C.default,e.mergeProps({key:u,title:t.title,isChildrenSelected:c},r),s)}});exports.default=I;