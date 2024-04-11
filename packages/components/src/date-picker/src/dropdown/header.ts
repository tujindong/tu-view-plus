import { buildProps } from '@tu-view-plus/utils';
import { Dayjs } from 'dayjs';
import { HeaderIcons, Mode } from '../interface';

import type { ExtractPropTypes, PropType } from 'vue';

type ClickCallbackFunc = (payload: MouseEvent) => void;

export type HeaderLabelClickFunc = (label: 'year' | 'month') => void;

export const headerProps = buildProps({
  title: {
    type: String,
    required: true
  },
  mode: {
    type: String as PropType<Mode>,
    default: 'date'
  },
  value: {
    type: Object as PropType<Dayjs>
  },
  icons: {
    type: Object as PropType<HeaderIcons>
  },
  onPrev: {
    type: Function as PropType<ClickCallbackFunc>
  },
  onSuperPrev: {
    type: Function as PropType<ClickCallbackFunc>
  },
  onNext: {
    type: Function as PropType<ClickCallbackFunc>
  },
  onSuperNext: {
    type: Function as PropType<ClickCallbackFunc>
  },
  onLabelClick: {
    type: Function as PropType<HeaderLabelClickFunc>
  }
} as const);

export type HeaderProps = ExtractPropTypes<typeof headerProps>;
