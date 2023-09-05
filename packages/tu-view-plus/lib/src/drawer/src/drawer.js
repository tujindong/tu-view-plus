"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@tu-view-plus/utils"),o=require("@tu-view-plus/hooks"),l=require("./constants.js"),r=t.buildProps({visible:{type:Boolean,default:!1},defaultVisible:{type:Boolean,default:!1},placement:{type:String,default:"right",validator:e=>l.DRAWER_PLACEMENTS.includes(e)},title:String,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closable:{type:Boolean,default:!0},okText:String,cancelText:String,okLoading:{type:Boolean,default:!1},okButtonProps:{type:Object},cancelButtonProps:{type:Object},unmountOnClose:Boolean,width:{type:[Number,String],default:250},height:{type:[Number,String],default:250},size:{...o.useSizeProp,default:"medium"},popupContainer:{type:[String,Object],default:"body"},drawerStyle:{type:Object},onBeforeOk:{type:Function},onBeforeCancel:{type:Function},escToClose:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},hideCancel:{type:Boolean,default:!1}}),a={"update:visible":e=>!0,ok:e=>!0,cancel:e=>!0,open:()=>!0,close:()=>!0,beforeOpen:()=>!0,beforeClose:()=>!0};exports.drawerEmits=a;exports.drawerProps=r;
