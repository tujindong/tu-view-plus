import { buildProps } from '@tu-view-plus/utils';
import { Dayjs } from 'dayjs';
import type {
  DisabledDate,
  DisabledTime,
  HeaderIcons,
  HeaderOperations,
  IsSameTime,
  Mode,
  WeekStart
} from '../../interface';
import { TimePickerProps } from '../../../../time-picker/src/interface';
import { RenderFunc } from '@tu-view-plus/constants';

import type { ExtractPropTypes, PropType } from 'vue';
import type Date from './date.vue';

export const dateProps = buildProps({
  isRange: {
    type: Boolean
  },
  value: {
    type: Object as PropType<Dayjs>
  },
  rangeValues: {
    type: Array as PropType<Array<Dayjs | undefined>>
  },
  headerValue: {
    type: Object as PropType<Dayjs>,
    required: true
  },
  footerValue: {
    type: Object as PropType<Dayjs>
  },
  timePickerValue: {
    type: Object as PropType<Dayjs>
  },
  headerOperations: {
    type: Object as PropType<HeaderOperations>,
    default: () => ({})
  },
  headerIcons: {
    type: Object as PropType<HeaderIcons>,
    default: () => ({})
  },
  dayStartOfWeek: {
    type: Number as PropType<WeekStart>,
    default: 0
  },
  disabledDate: {
    type: Function as PropType<DisabledDate>
  },
  disabledTime: {
    type: Function as PropType<DisabledTime>
  },
  isSameTime: {
    type: Function as PropType<IsSameTime>
  },
  mode: {
    type: String as PropType<Mode>,
    default: 'date'
  },
  showTime: {
    type: Boolean
  },
  timePickerProps: {
    type: Object as PropType<Partial<TimePickerProps>>
  },
  currentView: {
    type: String as PropType<'date' | 'time'>
  },
  dateRender: {
    type: Function as PropType<RenderFunc>
  },
  disabled: {
    type: Boolean
  },
  onHeaderLabelClick: {
    type: Function as PropType<HeaderLabelClickFunc>
  }
} as const);

export type DateProps = ExtractPropTypes<typeof dateProps>;
export type DateInstance = InstanceType<typeof Date>;
