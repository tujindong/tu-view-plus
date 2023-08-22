import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const selectViewProps = buildProps({} as const);

export type SelectViewProps = ExtractPropTypes<typeof selectViewProps>;
