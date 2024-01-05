import { buildProps } from '@tu-view-plus/utils';
import { Dayjs } from 'dayjs';
import { RenderFunc } from '@tu-view-plus/constants';

import type { ExtractPropTypes, PropType } from 'vue';
import type Year from './year.vue';
import type {
  DisabledDate,
  HeaderIcons,
  HeaderOperations
} from '../../interface';

export const yearProps = buildProps({
  headerValue: {
    type: Object as PropType<Dayjs>,
    required: true
  },
  headerOperations: {
    type: Object as PropType<HeaderOperations>,
    default: () => ({})
  },
  headerIcons: {
    type: Object as PropType<HeaderIcons>,
    default: () => ({})
  },
  value: {
    type: Object as PropType<Dayjs>
  },
  disabledDate: {
    type: Function as PropType<DisabledDate>
  },
  rangeValues: {
    type: Array as PropType<Array<Dayjs | undefined>>
  },
  dateRender: {
    type: Function as PropType<RenderFunc>
  }
} as const);

export const yearEmits = ['select', 'cell-mouse-enter'];

export type YearProps = ExtractPropTypes<typeof yearProps>;
export type YearInstance = InstanceType<typeof Year>;
