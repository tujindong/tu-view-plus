"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("@tu-view-plus/constants"),r=require("@tu-view-plus/hooks"),e=require("@tu-view-plus/utils"),s=require("./constants.js"),i=e.buildProps({modelValue:{type:e.definePropType(Array),default:()=>[]},type:{type:String,values:s.checkboxTypes,default:""},disabled:Boolean,min:Number,max:Number,size:{...r.useSizeProp,default:"medium"},label:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),u={[o.UPDATE_MODEL_EVENT]:t=>e.isArray(t),change:t=>e.isArray(t)};exports.checkboxGroupEmits=u;exports.checkboxGroupProps=i;