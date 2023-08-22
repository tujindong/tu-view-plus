import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const selectOptionProps = buildProps({} as const);

export type SelectOptionProps = ExtractPropTypes<typeof selectOptionProps>;
