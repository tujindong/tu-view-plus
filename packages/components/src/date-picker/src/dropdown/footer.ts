import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes } from 'vue';

export const footerProps = buildProps({
  showTodayBtn: {
    type: Boolean
  },
  showConfirmBtn: {
    type: Boolean
  },
  confirmBtnDisabled: {
    type: Boolean
  },
  size: useSizeProp
} as const);

export const footerEmits = ['today-btn-click', 'confirm-btn-click'];

export type FooterProps = ExtractPropTypes<typeof footerProps>;
