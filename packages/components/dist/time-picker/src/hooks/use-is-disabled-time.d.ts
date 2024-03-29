import { Dayjs } from 'dayjs';
import { TimePickerProps } from '../interface';
export declare function useIsDisabledTime(props: {
    disabledHours: TimePickerProps['disabledHours'];
    disabledMinutes: TimePickerProps['disabledMinutes'];
    disabledSeconds: TimePickerProps['disabledSeconds'];
}): (value: Array<Dayjs | undefined> | Dayjs | undefined) => boolean;
