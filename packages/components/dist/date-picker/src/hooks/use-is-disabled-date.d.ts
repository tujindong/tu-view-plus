import { Dayjs } from 'dayjs';
import { DisabledDate, DisabledTime, RangeDisabledDate, RangeDisabledTime } from '../interface';
interface IsDisabledProps {
    mode?: string;
    showTime?: boolean;
    disabledDate?: DisabledDate | RangeDisabledDate;
    disabledTime?: DisabledTime | RangeDisabledTime;
    isRange?: boolean;
}
export declare function useIsDisabledDate(props: IsDisabledProps): (value: Dayjs | undefined, type?: 'start' | 'end') => boolean | undefined;
export {};
