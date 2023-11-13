// ../node_modules/.pnpm/number-precision@1.5.0/node_modules/number-precision/build/index.es.js
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function strip(num, precision) {
  if (precision === void 0) {
    precision = 15;
  }
  return +parseFloat(Number(num).toPrecision(precision));
}
function digitLength(num) {
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}
function float2Fixed(num) {
  if (num.toString().indexOf("e") === -1) {
    return Number(num.toString().replace(".", ""));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn(num + " is beyond boundary when transfer to integer, the results may not be accurate");
    }
  }
}
function times(num1, num2) {
  var others = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    others[_i - 2] = arguments[_i];
  }
  if (others.length > 0) {
    return times.apply(void 0, __spreadArrays([times(num1, num2), others[0]], others.slice(1)));
  }
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;
  checkBoundary(leftValue);
  return leftValue / Math.pow(10, baseNum);
}
function plus(num1, num2) {
  var others = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    others[_i - 2] = arguments[_i];
  }
  if (others.length > 0) {
    return plus.apply(void 0, __spreadArrays([plus(num1, num2), others[0]], others.slice(1)));
  }
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}
function minus(num1, num2) {
  var others = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    others[_i - 2] = arguments[_i];
  }
  if (others.length > 0) {
    return minus.apply(void 0, __spreadArrays([minus(num1, num2), others[0]], others.slice(1)));
  }
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}
function divide(num1, num2) {
  var others = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    others[_i - 2] = arguments[_i];
  }
  if (others.length > 0) {
    return divide.apply(void 0, __spreadArrays([divide(num1, num2), others[0]], others.slice(1)));
  }
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}
function round(num, ratio) {
  var base = Math.pow(10, ratio);
  return divide(Math.round(times(num, base)), base);
}
var _boundaryCheckingState = true;
function enableBoundaryChecking(flag) {
  if (flag === void 0) {
    flag = true;
  }
  _boundaryCheckingState = flag;
}
var index = {
  strip,
  plus,
  minus,
  times,
  divide,
  round,
  digitLength,
  float2Fixed,
  enableBoundaryChecking
};
var index_es_default = index;
export {
  index_es_default as default,
  digitLength,
  divide,
  enableBoundaryChecking,
  float2Fixed,
  minus,
  plus,
  round,
  strip,
  times
};
/*! Bundled license information:

number-precision/build/index.es.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=number-precision.js.map
