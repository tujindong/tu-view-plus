import { Dayjs } from 'dayjs';
import { computed, toRefs } from 'vue';
import { Cell, IsSameTime, Mode } from '../interface';
import { getNow, getSortedDayjsArray, isDayjs } from '@tu-view-plus/utils';
import { useNamespace } from '@tu-view-plus/hooks';

interface CellClassNameProps {
  value?: Dayjs;
  rangeValues?: Array<Dayjs | undefined>;
  isSameTime: IsSameTime;
  mode?: Mode;
}

export function useCellClassName(props: CellClassNameProps) {
  const nsPicker = useNamespace('picker');

  const { rangeValues } = toRefs(props);

  const sortedRangeValues = computed(() =>
    rangeValues?.value && rangeValues.value.every(isDayjs)
      ? getSortedDayjsArray(rangeValues.value)
      : rangeValues?.value
  );
  const rangeStart = computed(() => sortedRangeValues.value?.[0]);
  const rangeEnd = computed(() => sortedRangeValues.value?.[1]);

  return {
    getCellClassName: (cellData: Cell, disabled: boolean) => {
      const { value, isSameTime, mode } = props;

      const isInView = !cellData.isPrev && !cellData.isNext;

      const isSelected = value && isSameTime(cellData.value, value);

      let isToday = isSameTime(cellData.value, getNow());
      if (mode === 'week') {
        isToday = getNow().isSame(cellData.value, 'date');
      }

      const isRangeStart =
        isInView &&
        rangeStart.value &&
        isSameTime(cellData.value, rangeStart.value);

      const isRangeEnd =
        isInView &&
        rangeEnd.value &&
        isSameTime(cellData.value, rangeEnd.value);

      const isInRange =
        isInView &&
        rangeStart.value &&
        rangeEnd.value &&
        (isRangeStart ||
          isRangeEnd ||
          cellData.value.isBetween(
            rangeStart.value,
            rangeEnd.value,
            null,
            '[]'
          ));

      return [
        nsPicker.e('cell'),
        {
          [nsPicker.is('in-view')]: isInView,
          [nsPicker.is('today')]: isToday,
          [nsPicker.is('selected')]: isSelected,
          [nsPicker.is('range-start')]: isRangeStart,
          [nsPicker.is('range-end')]: isRangeEnd,
          [nsPicker.is('in-range')]: isInRange,
          [nsPicker.is('disabled')]: disabled
        },
        cellData.classNames
      ];
    }
  };
}
