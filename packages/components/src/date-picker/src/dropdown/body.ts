import { buildProps } from '@tu-view-plus/utils';
import { RenderFunc } from '@tu-view-plus/constants';
import { Dayjs } from 'dayjs';

import type { Cell, DisabledDate, IsSameTime, Mode } from '../interface';
import type { ExtractPropTypes, PropType } from 'vue';
import type Body from './body.vue';

export const bodyProps = buildProps({
  rows: {
    type: Array as PropType<Cell[][]>,
    default: () => []
  },
  value: {
    type: Object as PropType<Dayjs>
  },
  disabledDate: {
    type: Function as PropType<DisabledDate>
  },
  isSameTime: {
    type: Function as PropType<IsSameTime>,
    required: true
  },
  mode: {
    type: String as PropType<Mode>
  },
  rangeValues: {
    type: Array as PropType<Array<Dayjs | undefined>>
  },
  dateRender: {
    type: Function as PropType<RenderFunc>
  }
} as const);

export const bodyEmits = ['cell-click', 'cell-mouse-enter'];

export type BodyProps = ExtractPropTypes<typeof bodyProps>;
export type BodyInstance = InstanceType<typeof Body>;
