"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@tu-view-plus/utils"),r=require("../utils.js");function u(s){const i=e=>r.isDisabledTime(e,{disabledHours:s.disabledHours,disabledMinutes:s.disabledMinutes,disabledSeconds:s.disabledSeconds});return e=>t.isArray(e)?e.some(d=>i(d)):i(e)}exports.useIsDisabledTime=u;