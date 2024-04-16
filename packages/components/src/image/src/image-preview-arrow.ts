import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const imagePreviewArrowProps = buildProps({
  onPrev: {
    type: Function
  },
  
  onNext: {
    type: Function
  }
});

export type ImagePreviewArrowProps = ExtractPropTypes<typeof imagePreviewArrowProps>;
