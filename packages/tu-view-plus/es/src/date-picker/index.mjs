import { withInstall as r } from "@tu-view-plus/utils";
import o from "./src/pickers/date-picker.vue.mjs";
import i from "./src/pickers/month-picker.vue.mjs";
import m from "./src/pickers/quarter-picker.vue.mjs";
import t from "./src/pickers/week-picker.vue.mjs";
import c from "./src/pickers/year-picker.vue.mjs";
import e from "./src/range-picker.vue.mjs";
import { pickerEmits as w, pickerProps as D } from "./src/picker.mjs";
const u = r(o), P = r(i), T = r(m), $ = r(t), h = r(c), l = r(e);
export {
  u as TuDatePicker,
  P as TuMonthPicker,
  T as TuQuarterPicker,
  l as TuRangePicker,
  $ as TuWeekPicker,
  h as TuYearPicker,
  w as pickerEmits,
  D as pickerProps
};
