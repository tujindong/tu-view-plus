import { buildProps } from '@tu-view-plus/utils';
import { Dayjs } from 'dayjs';
import { RenderFunc } from '@tu-view-plus/constants';

import type { ExtractPropTypes, PropType } from 'vue';
import type {
  DisabledDate,
  HeaderIcons,
  HeaderOperations
} from '../../interface';
import type { HeaderLabelClickFunc } from '../header';

export const quarterProps = buildProps({
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
  },
  onHeaderLabelClick: {
    type: Function as PropType<HeaderLabelClickFunc>
  }
} as const);

export const quarterEmits = ['select', 'cell-mouse-enter'];

export type QuarterProps = ExtractPropTypes<typeof quarterProps>;
