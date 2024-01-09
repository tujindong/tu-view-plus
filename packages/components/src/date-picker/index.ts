import { withInstall } from '@tu-view-plus/utils';
import DatePicker from './src/pickers/date-picker.vue';
import MonthPicker from './src/pickers/month-picker.vue';
import QuarterPicker from './src/pickers/quarter-picker.vue';
import WeekPicker from './src/pickers/week-picker.vue';
import YearPicker from './src/pickers/year-picker.vue';
import RangePicker from './src/range-picker.vue';

export const TuDatePicker = withInstall(DatePicker);
export const TuMonthPicker = withInstall(MonthPicker);
export const TuQuarterPicker = withInstall(QuarterPicker);
export const TuWeekPicker = withInstall(WeekPicker);
export const TuYearPicker = withInstall(YearPicker);
export const TuRangePicker = withInstall(RangePicker);

export * from './src/picker';
