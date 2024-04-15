import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type { ActionType } from './interface';

export const imagePreviewToolbarProps = buildProps({
  actions: {
    type: Array as PropType<ActionType[]>,
    default: () => []
  },
  
  /** 控制条的布局 */
  actionsLayout: {
    type: Array as PropType<string[]>,
    default: () => []
  }
});

export type ImagePreviewToolbarProps = ExtractPropTypes<typeof imagePreviewToolbarProps>;
