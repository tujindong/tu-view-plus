"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@tu-view-plus/utils"),t=require("@tu-view-plus/hooks"),r=require("./constants.js"),o=e.buildProps({title:{type:String},bodyStyle:{type:e.definePropType([Object,Array,String]),default:{}},size:{...t.useSizeProp,default:"medium"},effect:{type:String,values:r.effectTypes,default:"outset"}});exports.cardProps=o;