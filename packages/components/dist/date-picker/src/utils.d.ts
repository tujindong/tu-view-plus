import { Dayjs } from 'dayjs';
import { CalendarValue } from './interface';
export declare function newArray<T>(length: number): T[];
export declare function normalizeRangeValue(value: (CalendarValue | undefined)[] | CalendarValue | undefined): (CalendarValue | undefined)[] | undefined;
export declare function isCompleteRangeValue(value: Array<Dayjs | undefined> | undefined): value is [Dayjs, Dayjs];
export declare function isValidRangeValue(value: Array<Dayjs | undefined> | undefined): value is undefined | [] | [Dayjs, Dayjs];
export declare function mergeValueWithTime(defaultValue: Dayjs, dateValue?: Dayjs, timeValue?: Dayjs): Dayjs;
