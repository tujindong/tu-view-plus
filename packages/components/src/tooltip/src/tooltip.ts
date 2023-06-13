import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Tooltip from './tooltip.vue';

export const tooltipProps = buildProps({
  type: {}
});

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
export type TooltipInstance = InstanceType<typeof Tooltip>;
