import { withInstall as r } from "@tu-view-plus/utils";
import o from "./src/pickers/date-picker.vue.mjs";
import i from "./src/pickers/month-picker.vue.mjs";
import m from "./src/pickers/quarter-picker.vue.mjs";
import t from "./src/pickers/week-picker.vue.mjs";
import c from "./src/pickers/year-picker.vue.mjs";
import { pickerEmits as l, pickerProps as x } from "./src/picker.mjs";
const a = r(o), k = r(i), u = r(m), P = r(t), T = r(c);
export {
  a as TuDatePicker,
  k as TuMonthPicker,
  u as TuQuarterPicker,
  P as TuWeekPicker,
  T as TuYearPicker,
  l as pickerEmits,
  x as pickerProps
};
