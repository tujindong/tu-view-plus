"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@tu-view-plus/utils"),o=require("@tu-view-plus/hooks"),s=require("./constants.js"),l=e.buildProps({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:e.keysOf(e.TypeComponentsMap),default:""},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,size:{...o.useSizeProp,default:"medium"},effect:{type:String,values:s.alertEffects,default:"outset"}}),r={close:t=>t instanceof MouseEvent};exports.alertEmits=r;exports.alertProps=l;
