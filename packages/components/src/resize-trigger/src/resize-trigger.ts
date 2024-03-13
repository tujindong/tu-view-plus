import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type ResizeTrigger from './resize-trigger.vue';

export const resizeTriggerProps = buildProps({
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  }
});

export const resizeTriggerEmits = ['resize'];

export type ResizeTriggerProps = ExtractPropTypes<typeof resizeTriggerProps>;
export type ResizeTriggerInstance = InstanceType<typeof ResizeTrigger>;
