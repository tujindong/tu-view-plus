"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@tu-view-plus/utils"),i=require("@tu-view-plus/constants"),o=require("@tu-view-plus/hooks"),n=["circle","round","line"],r=e.buildProps({modelValue:{type:[Boolean,String,Number],default:!1},type:{type:String,values:n,default:"circle"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:o.useSizeProp,width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:e.iconPropType},inactiveIcon:{type:e.iconPropType},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:e.definePropType(Function)},id:String,tabindex:{type:[String,Number]}}),s={[i.UPDATE_MODEL_EVENT]:t=>e.isBoolean(t)||e.isString(t)||e.isNumber(t),[i.CHANGE_EVENT]:t=>e.isBoolean(t)||e.isString(t)||e.isNumber(t),[i.INPUT_EVENT]:t=>e.isBoolean(t)||e.isString(t)||e.isNumber(t)};exports.switchEmits=s;exports.switchProps=r;exports.switchTypes=n;