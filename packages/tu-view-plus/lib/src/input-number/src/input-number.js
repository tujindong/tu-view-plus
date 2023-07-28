"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@tu-view-plus/utils"),n=require("@tu-view-plus/hooks"),u=require("@tu-view-plus/constants"),r=require("lodash-unified"),o=t.buildProps({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:{...n.useSizeProp,default:"medium"},controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>e===null||t.isNumber(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),l={[u.CHANGE_EVENT]:(e,i)=>i!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[u.INPUT_EVENT]:e=>t.isNumber(e)||r.isNil(e),[u.UPDATE_MODEL_EVENT]:e=>t.isNumber(e)||r.isNil(e)};exports.inputNumberEmits=l;exports.inputNumberProps=o;
