import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type PreviewToolbar from './preview-toolbar.vue';
import type { ActionType } from './interface';

export const previewToolbarProps = buildProps({
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

export type PreviewToolbarProps = ExtractPropTypes<typeof previewToolbarProps>;
export type PreviewToolbarInstance = InstanceType<typeof PreviewToolbar>;
