"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@tu-view-plus/utils"),o=require("@tu-view-plus/hooks"),p=t.buildProps({popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},title:String,content:String,trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"top"},size:{...o.useSizeProp,default:"medium"},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}}),r={"update:popupVisible":e=>!0,popupVisibleChange:e=>!0};exports.popoverEmits=r;exports.popoverProps=p;