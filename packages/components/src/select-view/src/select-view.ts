import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type SelectView from './select-view.vue';

export const selectViewProps = buildProps({});

export type SelectViewProps = ExtractPropTypes<typeof selectViewProps>;
export type SelectViewInstance = InstanceType<typeof SelectView>;
