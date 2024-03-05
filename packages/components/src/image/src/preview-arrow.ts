import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type PreviewArrow from './preview-arrow.vue';

export const previewArrowProps = buildProps({
  onPrev: {
    type: Function
  },
  
  onNext: {
    type: Function
  }
});

export type PreviewArrowProps = ExtractPropTypes<typeof previewArrowProps>;
export type PreviewArrowInstance = InstanceType<typeof PreviewArrow>;
