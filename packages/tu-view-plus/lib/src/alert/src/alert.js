"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@tu-view-plus/utils"),o=require("@tu-view-plus/hooks"),s=require("./constants.js"),r=e.buildProps({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:e.keysOf(e.TypeComponentsMap),default:""},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,size:{...o.useSizeProp,default:"medium"},effect:{type:String,values:s.alertEffects,default:"neumorphic"}}),l={close:t=>t instanceof MouseEvent};exports.alertEmits=l;exports.alertProps=r;
