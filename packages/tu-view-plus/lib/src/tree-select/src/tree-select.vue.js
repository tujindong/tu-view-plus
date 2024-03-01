"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),F=require("./tree-select.js"),M=require("@tu-view-plus/hooks"),m=require("@tu-view-plus/utils");require("../../form/index.js");const ce=require("./hooks/use-filter-tree-node.js"),de=require("./hooks/use-selected-state.js"),D=require("../../tree/src/utils/check-utils.js"),pe=require("../../tree/src/hooks/use-tree-data.js"),fe=require("../../tree/src/utils/index.js"),ve=require("../../trigger/index.js"),me=require("../../spin/index.js"),he=require("../../empty/index.js"),Se=require("../../select-view/index.js"),be=require("./tree-select-dropdown.vue.js");require("../style/tree-select.css");const I=require("../../form/src/hooks/use-form-props.js"),ke=e.defineComponent({name:"TuTreeSelect",inheritAttrs:!1}),ge=e.defineComponent({...ke,props:F.treeSelectProps,emits:F.treeSelectEmits,setup(K,{emit:O}){const h=K,a=O,$=e.useSlots(),{defaultValue:R,modelValue:L,multiple:S,popupVisible:j,defaultPopupVisible:U,treeCheckable:s,treeCheckStrictly:b,data:B,fieldNames:i,disabled:ye,labelInValue:A,filterTreeNode:H,disableFilter:G,dropdownStyle:k,treeProps:c,fallbackOption:J,selectable:u,dropdownClassName:g}=e.toRefs(h),d=e.ref(),o=e.ref(""),n=M.useNamespace("tree-select"),Q=I.useFormSize(),p=I.useFormDisabled(),[y,W]=M.useMergeState(U.value,e.reactive({value:j})),V=(l,t)=>u.value==="leaf"?t.isLeaf:m.isFunction(u.value)?u.value(l,t):u.value??!1,P=e.computed(()=>s.value?V:!1),{flattenTreeData:z,key2TreeNode:C}=pe.useTreeData(e.reactive({treeData:B,fieldNames:i,selectable:V,checkable:P})),{isEmptyFilterResult:X,filterTreeNode:Y}=ce.useFilterTreeNode(e.reactive({searchValue:o,flattenTreeData:z,filterMethod:H,disableFilter:G,fieldNames:i})),{selectedKeys:w,selectedValue:T,setLocalSelectedKeys:Z,localSelectedKeys:x,localSelectedValue:_}=de.useSelectedState(e.reactive({defaultValue:R,modelValue:L,key2TreeNode:C,multiple:S,treeCheckable:s,treeCheckStrictly:b,fallbackOption:J,fieldNames:i})),f=e.computed(()=>S.value||s.value),ee=e.computed(()=>m.isUndefined(T.value)?[]:f.value&&!p.value?T.value.map(l=>{const t=C.value.get(l.value);return{...l,closable:!t||E(t)}}):T.value),le=e.computed(()=>[n.e("dropdown"),{[n.em("dropdown","has-header")]:!!$.header,[n.em("dropdown","has-footer")]:!!$.footer},g==null?void 0:g.value]),te=e.computed(()=>{var l;return[(k==null?void 0:k.value)||{},(l=c==null?void 0:c.value)!=null&&l.virtualListProps?{"max-height":"unset"}:{}]}),N=e.computed(()=>!z.value.length||X.value),oe=e.computed(()=>m.isObject(h.allowSearch)&&!!h.allowSearch.retainInputValue),E=l=>s.value?D.isNodeCheckable(l):fe.isNodeSelectable(l),q=l=>{l!==y.value&&(W(l),a("popup-visible-change",l),a("update:popupVisible",l)),l||d.value&&d.value.blur&&d.value.blur()},v=l=>{Z(l),e.nextTick(()=>{const t=(A.value?_.value:x.value)||[],r=f.value?t:t[0];a("update:modelValue",r),a("change",r)})},re=l=>{l!==o.value&&(q(!0),o.value=l,a("search",l))},ae=()=>{v([]),a("clear")},se=l=>{if(p.value)return;const t=C.value.get(l);if(s.value&&t){if(E(t)){const[r]=D.getCheckedStateByCheck({node:t,checked:!1,checkedKeys:w.value,indeterminateKeys:[],checkStrictly:b.value});v(r)}}else{const r=w.value.filter(ie=>ie!==l);v(r)}},ne=()=>{!oe.value&&o.value&&(o.value="")},ue=l=>{v(l),o.value="",f.value||q(!1)};return(l,t)=>(e.openBlock(),e.createBlock(e.unref(ve.TuTrigger),e.mergeProps(l.triggerProps,{"auto-fit-transform-origin":"","auto-fit-popup-min-width":"",trigger:"click",position:"bl","animation-name":"slide-dynamic-origin",class:e.unref(n).b(),"popup-offset":10,"prevent-focus":!0,disabled:e.unref(p),"popup-visible":e.unref(y),"popup-container":l.popupContainer,"click-to-close":!l.allowSearch,onPopupVisibleChange:q}),{content:e.withCtx(()=>[e.createElementVNode("div",{class:e.normalizeClass(le.value),style:e.normalizeStyle(te.value)},[l.$slots.header&&(!N.value||l.showHeaderOnEmpty)?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(n).em("dropdown","header"))},[e.renderSlot(l.$slots,"header")],2)):e.createCommentVNode("",!0),l.loading?e.renderSlot(l.$slots,"loader",{key:1},()=>[e.createVNode(e.unref(me.TuSpin),{dot:""})]):N.value?e.renderSlot(l.$slots,"empty",{key:2},()=>[e.createVNode(e.unref(he.TuEmpty))]):(e.openBlock(),e.createBlock(be.default,{key:3,"selected-keys":e.unref(w),"show-checkable":e.unref(s),scrollbar:l.scrollbar,"tree-props":{actionOnNodeClick:e.unref(u)==="leaf"?"expand":void 0,blockNode:!0,...e.unref(c),data:e.unref(B),checkStrictly:e.unref(b),checkedStrategy:l.treeCheckedStrategy,fieldNames:e.unref(i),multiple:e.unref(S),loadMore:l.loadMore,filterTreeNode:e.unref(Y),size:l.size,checkable:P.value,selectable:V,searchValue:o.value},"tree-slots":e.unref(m.pickSubCompSlots)(l.$slots,"tree"),onChange:ue},null,8,["selected-keys","show-checkable","scrollbar","tree-props","tree-slots"])),l.$slots.footer&&(!N.value||l.showFooterOnEmpty)?(e.openBlock(),e.createElementBlock("div",{key:4,class:e.normalizeClass(e.unref(n).em("dropdown","footer"))},[e.renderSlot(l.$slots,"footer")],2)):e.createCommentVNode("",!0)],6)]),default:e.withCtx(()=>[e.renderSlot(l.$slots,"trigger",{},()=>[e.createVNode(e.unref(Se.TuSelectView),e.mergeProps({ref_key:"refSelectView",ref:d,"model-value":ee.value,"input-value":o.value,"allow-search":!!l.allowSearch,"allow-clear":l.allowClear,loading:l.loading,size:e.unref(Q),"max-tag-count":l.maxTagCount,disabled:e.unref(p),opened:e.unref(y),error:l.error,bordered:l.border,placeholder:l.placeholder,multiple:f.value},l.$attrs,{onInputValueChange:re,onClear:e.withModifiers(ae,["stop"]),onRemove:se,onBlur:ne}),e.createSlots({_:2},[l.$slots.prefix?{name:"prefix",fn:e.withCtx(()=>[e.renderSlot(l.$slots,"prefix")]),key:"0"}:void 0,l.$slots.label?{name:"label",fn:e.withCtx(r=>[e.renderSlot(l.$slots,"label",e.normalizeProps(e.guardReactiveProps(r)))]),key:"1"}:void 0]),1040,["model-value","input-value","allow-search","allow-clear","loading","size","max-tag-count","disabled","opened","error","bordered","placeholder","multiple"])])]),_:3},16,["class","disabled","popup-visible","popup-container","click-to-close"]))}});exports.default=ge;
