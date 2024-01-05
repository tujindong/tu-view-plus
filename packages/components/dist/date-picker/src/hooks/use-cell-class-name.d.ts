import { Dayjs } from 'dayjs';
import { Cell, IsSameTime, Mode } from '../interface';
interface CellClassNameProps {
    value?: Dayjs;
    rangeValues?: Array<Dayjs | undefined>;
    isSameTime: IsSameTime;
    mode?: Mode;
}
export declare function useCellClassName(props: CellClassNameProps): {
    getCellClassName: (cellData: Cell, disabled: boolean) => (string | {
        [x: string]: boolean | undefined;
    } | undefined)[];
};
export {};
