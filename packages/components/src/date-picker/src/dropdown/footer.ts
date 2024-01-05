import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Footer from './footer.vue';

export const footerProps = buildProps({
  showTodayBtn: {
    type: Boolean
  },
  showConfirmBtn: {
    type: Boolean
  },
  confirmBtnDisabled: {
    type: Boolean
  }
} as const);

export const footerEmits = ['today-btn-click', 'confirm-btn-click'];

export type FooterProps = ExtractPropTypes<typeof footerProps>;
export type FooterInstance = InstanceType<typeof Footer>;
