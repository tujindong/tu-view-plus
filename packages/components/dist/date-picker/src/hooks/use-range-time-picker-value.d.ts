import { ComputedRef } from 'vue';
import { Dayjs } from 'dayjs';
import { TimePickerProps } from '../../../time-picker/src/interface';
interface RangeTimePickerValueProps {
    timePickerProps?: Partial<TimePickerProps>;
    selectedValue: Array<Dayjs | undefined> | undefined;
}
export declare function useRangeTimePickerValue(props: RangeTimePickerValueProps): [
    ComputedRef<Dayjs[]>,
    (val: Array<Dayjs | undefined> | undefined) => void,
    () => void
];
export {};
