import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// ../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/weekYear.js
var require_weekYear = __commonJS({
  "../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/weekYear.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekYear = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.weekYear = function() {
          var e2 = this.month(), t2 = this.week(), n = this.year();
          return 1 === t2 && 11 === e2 ? n + 1 : 0 === e2 && t2 >= 52 ? n - 1 : n;
        };
      };
    });
  }
});
export default require_weekYear();
//# sourceMappingURL=dayjs_plugin_weekYear.js.map
